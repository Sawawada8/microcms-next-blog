import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export const blogDirPath = path.join('src', 'blog');

export const getPostAll = () => {
  return fs
    .readdirSync(blogDirPath, { withFileTypes: true })
    .filter((dirEnt) => dirEnt.isDirectory())
    .flatMap((dirEnt) => {
      const dirPath = path.join(blogDirPath, dirEnt.name);
      return fs
        .readdirSync(dirPath)
        .map((fileName) => fs.readFileSync(path.join(dirPath, fileName)));
    })
    .map((f) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { orig, ...post } = matter(f);
      return post;
    });
};

export const getPostTitleAll = () => {
  return getPostAll().map((m) => m.data.title);
};

// 新しいも順へsort
export const getPostTitleAllSortDate = () => {
  return getPostAll()
    .filter((m) => m.data.public)
    .sort((first, second) => {
      console.log({ first, second });
      const firstDate = new Date(first.data.date).getTime();
      const secondDate = new Date(second.data.date).getTime();
      if (firstDate > secondDate) {
        return -1;
      }
      if (firstDate < secondDate) {
        return 1;
      }
      return 0;
    })
    .map((m) => m.data);
};
