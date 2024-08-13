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
    explain: {
        title : string;
        explain ?: string;
    }[];
    read_me : {
        url : string;
    }[];
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
    explain : [
        {
            title : 'open AI의 embedding API로 얻은 단어 유사도로 오늘의 정답을 추측하는 게임입니다.',
            explain : '꼬맨틀에서 영감을 받아 제작되었습니다. 기본적인 레이아웃은 꼬맨틀을 참고하였습니다.'
        },
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
    read_me : [
        {url : '/project/꼬들꼬들/icon.png'},
        {url : '/project/꼬들꼬들/로그인.JPG'},
        {url : '/project/꼬들꼬들/메인.JPG'},
        {url : '/project/꼬들꼬들/순위.JPG'},
        {url : '/project/꼬들꼬들/마이.JPG'},
        {url : '/project/꼬들꼬들/큐앤애이.JPG'},
        {url : '/project/꼬들꼬들/승리.JPG'},
    ]
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
    explain : [
        {
            title : '게임 "메이플스토리"의 BGM/OST 웹 플레이어입니다.',
            explain : '여가 시간 중 어릴적 즐겨하던 게임인 메이플스토리의 BGM 모음집을 듣다가 제작한 음원 웹 플레이어입니다. 메인페이지 레이아웃은 github dashboard를 참고하였고, 앨범 페이지와 음원 재생 페이지의 레이아웃은 Spotify를 참고하였습니다.'
        },
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
    read_me : [
        {url : '/project/storify/icon.png'},
    ]
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
    explain : [
        {
            title : 'Next.js로 제작한 가볍게 즐길 수 있는 포켓몬스터 미니 팬게임입니다.',
            explain : '구글링 중 포켓몬의 데이터를 받을 수 있는 API가 있다는 사실을 알게되었습니다. 이를 활용해 만든 포켓몬 웹 미니게임입니다. 포켓몬스터의 핵심 기능은 포켓몬을 몬스터로 포획하는 기능이라고 생각하기에 위 기능을 구현하는 것을 핵심 목표로 잡았습니다.'
        },
        {
            title : 'PWA 기술을 활용하여 앱처럼 사용 가능한 웹앱',
        },
        {
            title : 'Git Flow 전략을 활용하여 관리한 프로젝트'
        }
    ],
    read_me : [
        {url : '/project/pokemon/icon.png'},
    ]
}

export const MAP_RM_DATA :DataType = {
    name : '불편한 지도',
    simple_explain : 'Kakao Map API를 사용한 실시간 위치 추적 지도',
    icon : '/project/map/icon.png',
    github_link : 'https://github.com/pvvng/uncomfortable_map_with_react',
    velog_link : 'https://velog.io/@pvvng/series/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81%EC%A7%80%EB%8F%84%EC%95%B1',
    deploy_link : 'https://velog.io/@pvvng/series/%ED%86%A0%EC%9D%B4%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%9C%84%EC%B9%98%EC%B6%94%EC%A0%81%EC%A7%80%EB%8F%84%EC%95%B1',
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
            explain : '프론트엔드만으로 구현된 웹사이트입니다. 다만, localstorage 기능을 활용하여 사용자가 저장하고자 하는 이동 경로를 반영구적으로 저장 가능합니다. 저장한 이동 경로는 메인 페이지에서 버튼을 클릭하여 확인 가능합니다.'
        },
        {
            title : 'PWA 기술을 활용하여 앱처럼 사용 가능한 웹앱',
        },
        {
            title : 'Git Flow 전략을 활용하여 관리한 프로젝트.'
        }
    ],
    read_me : [
        {url : '/project/map/icon.png'},
    ]
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
    ]
}