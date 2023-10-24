import React from 'react';
import { notFound } from 'next/navigation';

const categories = ['ekonomi', 'spor', 'magazin'];

export const dynamicParams = true; // SSG'mi SSR'mı çalışacak?

export function generateStaticParams() {
  return categories.map((slug) => ({
    entryName: slug,
  }));
}

const CategoryPage = async ({ params }: any) => {
  /*const isFound = categories.includes(params.category);
  if (!isFound) {
    notFound();
  }*/
  const { entryName } = params;

  return <div>Dynamic Page {entryName}</div>;
};

export default CategoryPage;
