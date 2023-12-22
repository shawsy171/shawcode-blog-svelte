type Categories = 'sql' | 'database' | 'vite' | 'react';

export interface MetaData {
  title: string;
  date: string;
  description: string;
  categories: Categories;
  published: boolean;
}

export interface Post extends MetaData {
  slug: string;
}