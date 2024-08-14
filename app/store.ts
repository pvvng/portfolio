import { create } from 'zustand';
import { PROJECT_NAME_ARR } from './portfolio/components/folderComponents/project/MainProjectContainer';

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
  number: 2,  // 초기값은 2 (all)
  setNumber: (value: number) => set({ number: value }),
}));

interface NowCarouselStoreType{
  nowCarousel : number[];
  changeNowCarousel: (moving: number, index: number) => void;
  resetNowCarousel : () => void;
}

export const useNowCarouselStore = create<NowCarouselStoreType>((set) => ({
  nowCarousel : Array(PROJECT_NAME_ARR.length).fill(0),
  
  changeNowCarousel: (moving: number, index: number) => {
    set((state) => {
      // nowCarousel 배열의 깊은 복사
      const newCarousel = [...state.nowCarousel];

      // index 위치의 값을 moving으로 변경
      newCarousel[index] = moving;

      // 새로운 nowCarousel 배열로 상태를 업데이트
      return { nowCarousel: newCarousel };
    });
  },
  resetNowCarousel: () => {
    set({
      nowCarousel: Array(PROJECT_NAME_ARR.length).fill(0), // 0으로 초기화된 배열로 상태를 재설정
    });
  },
}))