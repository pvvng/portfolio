'use client'

import { useFolderStore } from '@/app/store';
import MainAboutMeContainer from './aboutme/MainAboutMeContainer';
import './folder.css';
import MainProjectContainer from './project/MainProjectContainer';

export default function MainFolderContainer(){

    const { number } = useFolderStore();

    if(number === 0) return <MainAboutMeContainer />
    if(number === 1) return <MainProjectContainer />;
    if(number === 2) return <><MainAboutMeContainer /><MainProjectContainer /></>;
}