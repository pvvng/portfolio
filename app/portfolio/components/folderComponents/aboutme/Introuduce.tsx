import Image from "next/image";
import Link from "next/link";

export default function Introduce(){
    return(
        <div className="text-center col-6" style={{margin : 'auto'}}>
            <p className="m-0">명지대학교 / 정보통신공학과</p>
            <p>(2022년 입학 ~ 재학 중)</p>
            <p>{' '}2002.12.21</p>
            <p>t6u80o@naver.com</p>
            <span className="badge bg-dark mb-3 mt-2 text-white">Frontend-developer</span>
            <br/>   
            <div className="mt-4">
                <button className="p-btn social-icon-btn hover-btn" style={{marginRight : '5px'}}>
                    <Link href="https://github.com/pvvng?tab=repositories" aria-label="go_to_github" target="_black">
                        <Image src="/stack/github.png" width="30" height="30" alt="github-logo" />
                        <span className="tooltip-link">Github</span>
                    </Link>
                </button>
                <button className="p-btn social-icon-btn hover-btn">
                    <Link href="https://velog.io/@pvvng/posts" aria-label="go_to_velog" target="_black">
                        <Image src="/stack/velog-icon.webp" width="30" height="30" alt="velog-logo" />
                        <span className="tooltip-link">Velog</span>
                    </Link>
                </button>
            </div>                
        </div>
    )
}