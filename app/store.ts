import { create } from 'zustand';

interface TitleFlagStoreType {
    titleFlag: boolean;
    setTitleFlag: (value: boolean) => void;
}

const useTitleFlagStore = create<TitleFlagStoreType>((set) => ({
    titleFlag: false,  // 초기값
    setTitleFlag: (value :boolean) => set({ titleFlag: value }),  // 플래그 값 설정 함수
}));

export default useTitleFlagStore;