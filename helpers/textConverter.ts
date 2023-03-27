export const textToHTML = (text: string): string => {
    const lines = text.split("\n");
    let result = "";
    let currentHeader = null;
  
    for (const line of lines) {
      // Check if line is a header
      if (line.trim().endsWith(":") && !line.trim().startsWith("-")) {
        // End the current paragraph if there is one
        if (currentHeader !== null) {
          result += `</p>`;
        }
        // Get the header text and create the header tag
        currentHeader = line.trim().replace(":", "");
        result += `<h1>${currentHeader}</h1>`;
      } else if(line.trim().startsWith("-")) {
        // Add the current line to the current paragraph
        if (currentHeader !== null) {
          result += `<h4>${line.trim().slice(1)}</h4>`;
        } else {
          // If there is no header, ignore the line
          continue;
        }
      } else {
        // Add the current line to the current paragraph
        if (currentHeader !== null) {
          if(line.trim().includes("www.")){
            result += `<a href="${line.trim()}" target="_self">${line.trim()}</a>`;
          } else{
            result += `<p>${line.trim()}</p>`;
          }
        } else {
          // If there is no header, ignore the line
          continue;
        }
      }
    }
  
    // End the last paragraph if there is one
    if (currentHeader !== null) {
      result += `</p>`;
    }
  
    return result;
  }
  