import Image from "next/image";

const CAREER_STACK = [
    {url : "/stack/Wordpress.svg", name : 'WordPress'},
    {url : "/stack/HTML.svg", name : 'HTML'},
    {url : "/stack/Css.svg", name : 'CSS'},
    {url : "/stack/JavaScript.svg", name : 'JavaScript'},
    {url : "/stack/React.svg", name : 'React.js'},
    {url : "/stack/Next.svg", name : 'Next.js'},
    {url : "/stack/TypeScript.svg", name : 'TypeScript'},
    {url : "/stack/Redux.svg", name : 'Redux toolkit'},
    {url : "/stack/Git.svg", name : 'Git'},
    {url : "/stack/github.png", name : 'Github'},
    {url : "/stack/Sass.svg", name : 'SASS / SCSS'},
    {url : "/stack/slack.webp", name : 'Slack'},
];

export default function CareerContainer(){
    return (
        <div className="top-container p-3">
            <h2 className='header-title mb-3'>Career</h2>
            <div className="interview-container p-3 mt-4 mb-4 bg-dark text-white" style={{borderRadius : '10px' }}>
                <div className="row w-100 row-center mb-4" style={{margin : 'auto'}}>
                    <div className="col-sm-4 col-12">
                        <h4 className="header-title">(주) 모빌리오</h4>
                        <p>2024.03 ~ 2024.08 (6개월)</p>
                        <p className="fst-italic m-sm-0" style={{fontSize : '14px'}}>2024 ICT 상반기 인턴십 인턴</p>
                    </div>
                    <div className="col-sm-8 col-12">
                        <p>인공지능 로봇, 4족 보행 로봇 등 다양한 제품군을 개발 및 유통하는 회사입니다.</p>
                        {
                            CAREER_STACK.map(cs => 
                                <span key={cs.name} className="badge mb-3 bg-white text-black" style={{marginRight : '5px'}}>
                                    <Image src={cs.url} width="15" height="15" alt={cs.name} />
                                    {' '}{cs.name}
                                </span>
                            )
                        }
                    </div>
                </div>

                <div className="w-100 p-3 mt-4 interview-container bg-white text-black" style={{margin : 'auto', borderRadius : '10px'}}>
                    <h5 className="header-title mb-4">웹페이지 제작 (2024.03 ~ 2024.08)</h5>
                    <p>
                        WordPress를 사용해 홈페이지를 새롭게 제작 및 유지 보수하였습니다.
                        반응형 웹 디자인을 위해 모바일, 태블릿, 데스크탑 디바이스에서 보이는 화면을 고려하여 제작하였으며
                        , SEO를 고려하여 워드프레스 플러그인 All in One SEO를 사용하였습니다. 
                        기존 홈페이지와 비교해 평균 방문자가 2배가량 증가하는 긍정적인 효과를 얻었습니다.
                    </p>
                </div>
                <div className="w-100 p-3 mt-4 interview-container bg-white text-black" style={{margin : 'auto', borderRadius : '10px'}}>
                    <h5 className="header-title mb-4">실시간 위치 추적 지도 앱 제작 (2024.05 ~ 2024.06)</h5>
                    <p>
                        기업에서 판매 및 임대하는 4족 보행 로봇의 실시간 위치 추적을 관측하기 위해 
                        React.js, Kakao Map API를 사용하여 사용자 디바이스의 실시간 위치 추적이 가능한 웹앱을 개발하였습니다.
                        서버리스 웹으로 제작되었고 이용자의 데이터는 localstorage에 저장하여 필요할 때 불러오는 방식을 활용하였습니다.
                    </p>
                </div>
                <div className="w-100 p-3 mt-4 interview-container bg-white text-black" style={{margin : 'auto', borderRadius : '10px'}}>
                    <h5 className="header-title mb-4">이벤트 룰렛 페이지 제작 (2024.06 ~ 2024.06)</h5>
                    <p>
                        4족 보행 로봇과 함께 사용할 수 있는 경품 추천 이벤트 룰렛 페이지를 
                        React.js와 룰렛 라이브러리 react-custom-roulette을 활용하여 제작하였습니다. 
                        제42회 금산 인삼 축제에서 제작한 페이지 사용이 확정되었습니다.
                    </p>
                </div>
                <div className="w-100 p-3 mt-4 interview-container bg-white text-black" style={{margin : 'auto', borderRadius : '10px'}}>
                    <h5 className="header-title mb-4">사고 감지 대시보드 제작 (2024.07 ~ 2024.08)</h5>
                    <p>
                        공장이나 사고 발생 확률이 높은 위험 지역에서 사용 가능한 사고 감지 대시보드를 제작하였습니다.
                        Next.js와 TypeScript로 제작되었으며 Node.js와 chokidar 라이브러리를 통해 사고 이미지를 저장하는 폴더에 변화가 감지되면 
                        web socket으로 클라이언트에 사고 이미지를 새롭게 읽을 것을 요청하여 사고 감지 시 
                        사용자가 즉각적으로 사고 이미지를 확인할 수 있도록 설정하였습니다.
                    </p>
                </div>
            </div>
        </div>
    )
}