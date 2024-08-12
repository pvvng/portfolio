import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

export default function Overview(){
    return(
        <div 
            id='AboutMe' 
            className="top-container p-4 pt-5 pb-5 bg-dark text-white top-container" 
        >
            {/* title */}
            <div className='p-3 animate__animated animate__lightSpeedInRight'>
                <h2 className='header-title'>dongwoo&apos;s</h2>
                <h2 className='header-title'>Profile</h2>
            </div>
            <br />
            {/* overview */}
            <div className='row row-center w-100' style={{ margin: 'auto' }}>
                <div className='col-sm-2 col-12 mb-5 text-sm-center'>
                    <FontAwesomeIcon className='text-white' icon={faLightbulb} />
                    <span className='fw-bold'>{' '}Overview</span>
                </div>
                <div className='col-sm-10 col-12'>
                    <p>
                        어렸을 때부터 상상력을 발휘하여 무언가 만드는 일을 좋아했습니다.
                        성인이 된 이후로는 일상에 치여 좋아하는 일을 잊고 산 것 같습니다.
                    </p>
                    <p>
                        우연히 접한 프론트엔드 개발은 잊은 어린 시절의 행복을 다시 떠오르게 해줬습니다.
                        머릿속에만 존재하는 웹사이트를 직접 코드를 통해 구현하는 일은 제게 큰 감동으로 다가옵니다.
                        하지만, 저는 항상 부족함을 느낍니다. 더 많은 사람들이 제가 만든 것을 보고 행복했으면 좋겠다는 욕심이 생겼습니다.
                    </p>
                    <p>
                        제 기술과 좋은 동료들과 함께 세상을 바꿀 최고의 것을 만들고 싶습니다.
                    </p>
                </div>
            </div>
        </div>
    )
}