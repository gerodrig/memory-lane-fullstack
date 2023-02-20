interface BlogEntry {
    id: string;
    title: string;
    author: string;
    postedDate: string;
    category: string;
    credits: string;
    articleAuthor: string;
    originalDate: string;
    originalUrl: string;
    tags?: string[];
}

export interface BlogPost extends BlogEntry{
    image?: string;
    content?: string;
}   