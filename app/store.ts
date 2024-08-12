import { create } from 'zustand';

interface TitleFlagStoreType {
    titleFlag: boolean;
    setTitleFlag: (value: boolean) => void;
}

export const useTitleFlagStore = create<TitleFlagStoreType>((set) => ({
    titleFlag: false,  // 초기값
    setTitleFlag: (value :boolean) => set({ titleFlag: value }),  // 플래그 값 설정 함수
}));

export interface WindowState {
    isMinimized: boolean;
    isMaximized: boolean;
    isClosed: boolean;
    minimize: () => void;
    maximize: () => void;
    close: () => void;
}

export const useWindowStore = create<WindowState>((set) => ({
  isMinimized: true,
  isMaximized: false,
  isClosed: false,
  minimize: () => set(() => ({ isMinimized: true, isMaximized: false, isClosed: false })),
  maximize: () => set(() => ({ isMinimized: false, isMaximized: true, isClosed: false })),
  close: () => set(() => ({ isMinimized: false, isMaximized: false, isClosed: true })),
}));

interface FolderStoreType {
  number: number;
  setNumber: (value : number) => void;
}

export const useFolderStore = create<FolderStoreType>((set) => ({
  number: 0,  // 초기값은 0
  setNumber: (value: number) => set({ number: value }),
}));