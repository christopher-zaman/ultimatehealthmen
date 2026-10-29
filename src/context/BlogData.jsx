import { createContext, useContext } from 'react';
export const BlogDataContext = createContext(null);
export function useBlogData() { return useContext(BlogDataContext); }
