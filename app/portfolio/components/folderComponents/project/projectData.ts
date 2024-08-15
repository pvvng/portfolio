export interface DataType {
    name: string;
    simple_explain: string;
    icon: string;
    github_link: string;
    velog_link ?: string;
    deploy_link ?: string;
    manpower: number;
    term: string;
    env: {
        url: string;
        name: string;
    }[];
    manage: {
        url: string;
        name: string;
    }[];
    library: {
       name :string;
       url ?: string;
    }[];
    deploy: {
        name :string;
        url : string;
    };
    light_explain ?: {
        title : string;
    }[]
    explain: {
        title : string;
        explain ?: string;
    }[];
    read_me : {
        url : string;
    }[];
    about ?: string[];
    review :string;
}

export const KKODLE_RM_DATA :DataType = {
    name : '꼬들꼬들',
    simple_explain : '단어 유사도 추측 게임',
    icon : '/project/꼬들꼬들/icon.png',
    github_link : 'https://github.com/pvvng/kkomentle',
    velog_link : 'https://velog.io/@pvvng/series/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%BC%AC%EB%93%A4%EA%BC%AC%EB%93%A4',
    deploy_link : 'https://kkodle-kkodle.netlify.app/',
    manpower : 1,
    term : '2024.07.10 ~ 2024.08.04 (25일)',
    env : [
        {url : "/stack/Next.svg", name : 'Next.js'},
        {url : "/stack/TypeScript.svg", name : 'TypeScript'},
        {url : "/stack/MongoDB.svg", name : 'MongoDB'},
    ],
    manage : [
        {url : "/stack/Git.svg", name : 'Git'},
        {url : "/stack/github.png", name : 'Github'},
    ],
    library : [
        {name : 'openAI'},
        {name : 'cosine-similarity'},
        {name : 'moment-timezone'},
        {name : 'next-auth'},
        {name : 'next-pwa'},
        {name : 'recharts'},
        {name : 'react-query', url : '/stack/react-query.png'},
        {name : 'zustand', url : '/stack/zustand.png'},
        {name : 'bootstrap', url : '/stack/bootstrap.svg'},
        {name : 'fontawesome', url : '/stack/fontawesome.png'},
    ],
    deploy : {url : "/stack/Netlify-Dark.svg", name : 'Netlify'},
    light_explain: [
        {
            title : 'TypeScript로 타입 에러 제어',
        },
        {
            title : 'Zustand를 활용한 전역적 상태 관리',
        },
        {
            title : 'React-Query를 이용한 효율적인 비동기 통신 처리',
        },
        {
            title : 'Kakao 소셜 로그인 & 공유하기',
        },
        {
            title : 'localstorage에 게임 데이터 저장',
        },
        {
            title : 'PWA로 네이티브 앱 처럼 다운 가능',
        },
        {
            title : 'Git Flow 전략을 활용하여 관리한 프로젝트'
        }
    ],
    explain : [
        {
            title : 'open AI의 embedding API로 얻은 단어 유사도로 오늘의 정답을 추측하는 게임입니다.',
            explain : '꼬맨틀에서 영감을 받아 제작되었습니다. 기본적인 레이아웃은 꼬맨틀을 참고하였습니다.'
        },
    ],
    read_me : [
        {url : '/project/꼬들꼬들/icon.png'},
        {url : '/project/꼬들꼬들/로그인.JPG'},
        {url : '/project/꼬들꼬들/메인.JPG'},
        {url : '/project/꼬들꼬들/순위.JPG'},
        {url : '/project/꼬들꼬들/마이.JPG'},
        {url : '/project/꼬들꼬들/큐앤애이.JPG'},
        {url : '/project/꼬들꼬들/승리.JPG'},
    ],
    about : [
        '모 기업에서 제작한 단어 유사도 추측 게임 꼬맨틀을 바탕으로 제작한 웹 게임입니다. OpenAI의 text-embedding-3-small 모델을 사용하여 오늘의 정답 단어와 사용자가 추측한 단어의 유사도를 비교합니다. 유사도 비교를 위해 코사인 거리 측정 라이브러리 consine-similarity를 사용합니다.',
        '이전에 진행한 개인 토이 프로젝트는 진행 기간이 1 ~ 2주 내외로 짧았기에 디테일한 부분을 놓히는 경우가 많았고, 프로젝트 목표를 기간이 좀 걸리더라도 디테일한 부분까지 챙기는 것으로 잡았습니다.',
        '이 프로젝트를 통해 OpenAI API를 활용한 AI API의 활용법을 습득할 수 있었으며, DB에서 받아오는 데이터에 엄격하게 TypeScript Type을 지정함으로 혹시나 존재할 타입 에러를 미연에 방지하였습니다. 또한, zustand 라이브러리를 사용해 전역적 상태 관리를 실행하였습니다.',
    ],
    review : '약 1달간 진행된 꼬들꼬들 프로젝트를 통해 OpenAI를 활용한 AI API와 TypesScript, Zustand에 대한 이해도를 높일 수 있었습니다. 또한, 꼬맨틀을 즐겨하는 사람들이 모인 곳에 피드백을 부탁하여 많은 오류 사항과 개선 사항을 얻게 되었고, 이를 해결하면서 다양한 오류 상황에 대처하는 방법을 알게되었습니다.'
}

export const STORIFY_RM_DATA :DataType = {
    name : 'Storify',
    simple_explain : '게임 메이플스토리 BGM/OST 플레이어',
    icon : '/project/storify/icon.png',
    github_link : 'https://github.com/pvvng/maplestory_with_nextjs',
    velog_link : 'https://velog.io/@pvvng/series/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%A9%94%EC%9D%B4%ED%94%8C-%EB%B8%8C%EA%B8%88-%ED%94%8C%EB%A0%88%EC%9D%B4%EC%96%B4',
    deploy_link : 'https://maple-storify.netlify.app/',
    manpower : 1,
    term : '2024.06.04 ~ 2024.06.11 (7일)',
    env : [
        {url : "/stack/Next.svg", name : 'Next.js'},
        {url : "/stack/TypeScript.svg", name : 'TypeScript'},
        {url : "/stack/aws-s3.png", name : 'AWS S3 Bucket'},
        {url : "/stack/MongoDB.svg", name : 'MongoDB'},
    ],
    manage : [
        {url : "/stack/Git.svg", name : 'Git'},
        {url : "/stack/github.png", name : 'Github'},
    ],
    library : [
        {name : 'fast-levenshtein'},
        {name : 'howler'},
        {name : 'moment-timezone'},
        {name : 'next-auth'},
        {name : 'next-pwa'},
        {name : 'styled-component', url : '/stack/StyledComponents.svg'},
        {name : 'aws-sdk', url : '/stack/aws-s3.png'},
        {name : 'react-query', url : '/stack/react-query.png'},
        {name : 'redux-toolkit', url : '/stack/Redux.svg'},
        {name : 'bootstrap', url : '/stack/bootstrap.svg'},
        {name : 'fontawesome', url : '/stack/fontawesome.png'},
    ],
    deploy : {url : "/stack/Netlify-Dark.svg", name : 'Netlify'},
    light_explain : [
        {
            title : 'TypeScript로 타입 에러 제어',
        },
        {
            title : 'React-Query를 이용한 효율적인 비동기 통신 처리',
        },
        {
            title : 'Redux-Toolkit을 이용한 전역적 상태 관리',
        },
        {
            title : 'Styled-Components 를 활용한 css-in-js',
        },
        {
            title : 'Levenshtein(편집 거리) 라이브러리를 활용한 추천 검색어 시스템',
        },
        {
            title : 'Google & Github 소셜 로그인',
        },
        {
            title : '외부 서버리스 크론 서비스를 이용한 인기 급상승 노래 차트',
        },
        {
            title : 'Git Flow 전략을 활용하여 관리한 프로젝트'
        }
    ],
    explain : [
        {
            title : '게임 "메이플스토리"의 BGM/OST 웹 플레이어입니다.',
            explain : '여가 시간 중 어릴적 즐겨하던 게임인 메이플스토리의 BGM 모음집을 듣다가 제작한 음원 웹 플레이어입니다. 메인페이지 레이아웃은 github dashboard를 참고하였고, 앨범 페이지와 음원 재생 페이지의 레이아웃은 Spotify를 참고하였습니다.'
        },
    ],
    read_me : [
        {url : '/project/storify/icon.png'},
        {url : '/project/storify/메인.JPG'},
        {url : '/project/storify/앨범.JPG'},
        {url : '/project/storify/앨범디테일.JPG'},
        {url : '/project/storify/플레이리스트.JPG'},
        {url : '/project/storify/플리디테일.JPG'},
    ],
    about : [
        '처음으로 TypeScript를 사용한 프로젝트입니다. 이전 프로젝트에서 타입 에러로 버그가 발생한 적이 많았습니다. 특히, HTTP 통신으로 데이터를 get 했을때, 데이터가 변수에 저장되기 전에 HTML에서 사용하면서 타입 에러가 발생하는 일이 잦았는데, TypeScript로 그런 부분을 미연에 방지하고자 하였습니다.',
        '또한, Styled-componets를 프로젝트에 도입하였습니다. 사용으로 느낀 점은 호불호가 좀 갈릴 순 있겠지만 React 기반의 프레임워크에선 꽤나 효과적인 라이브러리라고 생각합니다. 특히, Props를 통한 동적 스타일링이 비교적 쉽다는 부분과, 스타일의 격리가 가능한 부분이 장점으로 다가왔습니다.',
        '또한 추천 검색어 기능 구현을 위해 Open AI의 Embedding API를 사용하려고 했으나, 프로젝트 규모 상 반려되었습니다. 대신 Levenshtein 편집 거리와 전처리 과정을 통해 추천 검색어 기능을 구현했습니다.'
    ],
    review : 'Storify 프로젝트를 진행하면서 useRef 훅의 동작 방식을 이번 프로젝트를 하면서 이해하게 되었습니다. useState 상태는 렌더링에 영향을 미치고, 컴포넌트가 재렌더링 될 때 변경되는데 반해, useRef 가 반환하는 객체는 재렌더링에 영향을 끼치지 않고, 컴포넌트가 재렌더링 되도 유지됩니다. 또한, Virtual Dom에서 DOM의 변경사항을 확인하여 DOM에 변동 사항을 재렌더링하지만, useRef는 DOM 에 직접 접근 가능합니다. 두 훅을 적절히 상황에 혼용하면 더욱 효과적으로 동작하는 웹을 만들 수 있겠다는 생각이 들었습니다.',
}

export const POKEMON_RM_DATA :DataType = {
    name : '로켓단이되',
    simple_explain : 'Poke API를 활용한 포켓몬 팬게임',
    icon : '/project/pokemon/icon.png',
    github_link : 'https://github.com/pvvng/pokemon_game_with_nextjs',
    deploy_link : 'https://pokemon-sigma-two.vercel.app/',
    manpower : 1,
    term : '2024.05.14 ~ 2024.05.23 (9일)',
    env : [
        {url : "/stack/Next.svg", name : 'Next.js'},
        {url : "/stack/MongoDB.svg", name : 'MongoDB'},
        {url : '/stack/Sass.svg', name : 'Sass'}
    ],
    manage : [
        {url : "/stack/Git.svg", name : 'Git'},
        {url : "/stack/github.png", name : 'Github'},
    ],
    library : [
        {name : 'next-auth'},
        {name : 'next-pwa'},
        {name : 'bootstrap', url : '/stack/bootstrap.svg'},
        {name : 'fontawesome', url : '/stack/fontawesome.png'},
    ],
    deploy : {url : "/stack/vercel.svg", name : 'Vercel'},
    light_explain: [
        {
            title : 'PWA 기술을 활용하여 앱처럼 사용 가능한 웹앱',
        },
        {
            title : 'Git Flow 전략을 활용하여 관리한 프로젝트'
        }
    ],
    explain : [
        {
            title : 'Next.js로 제작한 가볍게 즐길 수 있는 포켓몬스터 미니 팬게임입니다.',
            explain : '구글링 중 포켓몬의 데이터를 받을 수 있는 API가 있다는 사실을 알게되었습니다. 이를 활용해 만든 포켓몬 웹 미니게임입니다. 포켓몬스터의 핵심 기능은 포켓몬을 몬스터로 포획하는 기능이라고 생각하기에 위 기능을 구현하는 것을 핵심 목표로 잡았습니다.'
        },
    ],
    read_me : [
        {url : '/project/pokemon/icon.png'},
        {url : '/project/pokemon/메인.PNG'},
        {url : '/project/pokemon/도감.PNG'},
        {url : '/project/pokemon/도감디테일.PNG'},
        {url : '/project/pokemon/센터.PNG'},
        {url : '/project/pokemon/갓챠1.PNG'},
        {url : '/project/pokemon/갓챠2.PNG'},
        {url : '/project/pokemon/로딩1.PNG'},
    ],
    about : [
        '최초로 Next.js를 사용한 프로젝트입니다. 아직 백엔드와 협업 경험이 없기에 비동기 통신에 대한 개념적인 이해만 있고, 실제로 서버와 통신한 경험은 오픈 API 사용 외에는 전무했습니다. 이는 후일 타인과 협업시에 치명적인 결점이 될 수 있으리라고 판단했고, 백엔드와 통신 경험을 작게나마 경험해보는 것이 좋을 것이라 판단했습니다. 다만, 프로젝트를 진행하면서 React.js와는 다른 Next의 장점 (SSR, SEO) 등을 알게되는 시간이 되었습니다.',
        '또한, 백엔드로 mongoDB를 사용했습니다. mongoDB는 NoSQL 문서 지향 데이터 베이스로 데이터를 JSON 문서 형식으로 저장 가능합니다. 백엔드 개발에 대해 무지하기에 커뮤니티가 방대하여 정보를 얻기 쉽고, 문서 저장, 수정등의 관리가 편리한 mongoDB를 데이터베이스로 선택했습니다.',
    ],
    review : '로켓단이되 프로젝트를 진행 전 비동기 통신에 대한 깊은 이해를 목표로 삼았습니다. fetch, axios 비동기 통신이 어떻게 동작하고 무엇을 반환하는지 받은 데이터의 가공과 저장 방법과 FE와 BE의 통신 방법과 REST API 를 이해하는 시간이 되었습니다. 해당 프로젝트의 핵심 기능이 API를 통한 데이터 호출이었기에 위 개념을 이해하는것은 필수였고, 성공적으로 이루어졌습니다.'
}

export const MAP_RM_DATA :DataType = {
    name : '불편한 지도',
    simple_explain : 'Kakao Map API를 사용한 실시간 위치 추적 지도',
    icon : '/project/map/icon.png',
    github_link : 'https://github.com/pvvng/uncomfortable_map_with_react',
    velog_link : 'https://velog.io/@pvvng/series/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81%EC%A7%80%EB%8F%84%EC%95%B1',
    deploy_link : 'https://uncomfortable-map-with-react.vercel.app/',
    manpower : 1,
    term : '2024.05.1 ~ 2024.05.22 (21일)',
    env : [
        {url : "/stack/React.svg", name : 'React.js'},
    ],
    manage : [
        {url : "/stack/Git.svg", name : 'Git'},
        {url : "/stack/github.png", name : 'Github'},
    ],
    library : [
        {name : 'react-kakao-maps-sdk'},
        {name : 'redux-toolkit', url : '/stack/Redux.svg'},
        {name : 'bootstrap', url : '/stack/bootstrap.svg'},
        {name : 'fontawesome', url : '/stack/fontawesome.png'},
    ],
    deploy : {url : "/stack/vercel.svg", name : 'Vercel'},
    light_explain : [
        {
            title : 'PWA 기술을 활용하여 앱처럼 사용 가능한 웹앱',
        },
        {
            title : 'Git Flow 전략을 활용하여 관리한 프로젝트.'
        }
    ],
    explain : [
        {
            title : 'React.js와 Kakao map API를 활용하여 제작한 실시간 위치 추적 지도 앱입니다.',
            explain : '구글링 중 자주 사용하는 카카오 지도의 오픈 API가 있다는 사실을 알게 되었고, 이를 활용해서 간단한 위치 추적 지도 어플을 만들어 보고자 하는 목표를 가지고 제작하였습니다.'
        },
        {
            title : '현재 날씨 공공데이터 사용.',
            explain : '공공데이터 포털에서 특정 위치의 현재 날씨 데이터를 요청할 수 있는 오픈 API를 사용하여 사용자의 실시간 위치의 날씨 정보 확인이 가능하게 했습니다.'
        },
        {
            title : '서버리스 웹 사이트',
            explain : '프론트엔드만으로 구현된 웹사이트입니다. localstorage 기능을 활용하여 사용자가 저장하고자 하는 이동 경로를 반영구적으로 저장 가능합니다. 저장한 이동 경로는 메인 페이지에서 버튼을 클릭하여 확인 가능합니다.'
        },
    ],
    read_me : [
        {url : '/project/map/icon.png'},
        {url : '/project/map/메인1.PNG'},
        {url : '/project/map/메인2.PNG'},
        {url : '/project/map/이동모드.PNG'},
        {url : '/project/map/이동모드종료.PNG'},
    ],
    about : [
        'geolocation API를 활용한 실시간 위치 확인 커스텀 훅의 존재를 구글링을 통해 알게 되었습니다. 해당 커스텀 훅을 제대로 이해하고 사용하는 것이 프로젝트에 큰 이점이 될 것으로 판단하여, 커스텀 훅의 코드를 읽어보며 어떤 방식으로 동작하는지 이해하는 시간을 가졌습니다. 이는 커스텀 훅의 개념 및 사용, geolocation API의 동작, useRef 훅의 동작과 사용 목정 등을 이해하는 시간이 되었습니다.',
        '날씨 공공데이터를 활용하기 위해 여러 과정을 거쳤습니다. 특히, get 요청을 보낼때 기재되어야 하는 위치 좌표 값과 날짜 값 등을 포맷팅 하는 과정을 거쳤습니다. 전송받은 날씨 데이터를 필요한 부분만 가공하여 화면에 보여줌으로서 성공적인 API 활용을 했다고 생각합니다.',
    ],
    review : '불편한 지도는 처음으로 카카오맵 API와 현재 날씨 API 등의 오픈 API를 활용해서 만든 프로젝트입니다. HTTP 비동기 통신을 최초로 경험하면서 프론트엔드 단의 통신 과정에 대한 배움을 얻을 수 있는 프로젝트 였습니다.'
}

export const BOOK_RM_DATA :DataType = {
    name : '교뿡문고',
    simple_explain : '카카오 책 검색 API를 활용해서 만든 간단한 책 검색 웹서비스',
    icon : '/project/book/icon.png',
    github_link : 'https://github.com/pvvng/book_with_react',
    deploy_link : 'https://pvvng.github.io/hostBook/',
    manpower : 1,
    term : '2024.05.1 ~ 2024.05.22 (21일)',
    env : [
        {url : "/stack/React.svg", name : 'React.js'},
        {url : "/stack/TailWindCSS-Light.svg", name : 'tailwind'},
    ],
    manage : [
        {url : "/stack/Git.svg", name : 'Git'},
        {url : "/stack/github.png", name : 'Github'},
    ],
    library : [
        {name : 'fontawesome', url : '/stack/fontawesome.png'},
    ],
    deploy : {url : "/stack/github.png", name : 'Github Pages'},
    explain : [
        {
            title : '카카오 책 검색 API를 활용해서 만든 간단한 책 검색 웹서비스입니다.',
            explain : 'React-Query의 활용과 이해를 위해 시작한 프로젝트입니다.'
        },
    ],
    read_me : [
        {url : '/project/book/icon.png'},
        {url : '/project/book/메인1.PNG'},
        {url : '/project/book/메인2.PNG'},
    ],
    review : '교뿡문고는 "Next.js를 활용한 포켓몬 팬게임 - 로켓단이되" 를 진행하기 전에 React-Query의 활용과 이해를 위해 시작한 프로젝트입니다. 프로젝트를 진행하며 React-Query의 기본적인 사용 방법과, data fetching, cache, stale 등의 방법을 익히는 시간이 되었습니다.'
}