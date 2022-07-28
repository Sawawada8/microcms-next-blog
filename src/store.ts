import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
  devtools((set: any, get: any) => {
    return {
      theme: 'dark',
      setTheme: (newData: any) => {
        return set((state: any) => {
          return {
            theme: newData,
          };
        });
      },
    };
  })
);
