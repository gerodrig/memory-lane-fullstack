import { useState, useEffect } from 'react';

export const useIsPageLoading = () => {

    const [isPageLoading, setIsPageLoading] = useState(true);
    
    useEffect(() => {
      if(typeof window !== 'undefined'){
        setIsPageLoading(false);
      }
      }, []);
      
    
    return { isPageLoading };
    }