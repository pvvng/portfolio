import Image from "next/image";

export default function SkillBadge(){
    return(
        <div className= "mt-5 p-2" style={{margin : 'auto'}}>
            <h2 className='header-title'>skill & Tools</h2>
            <hr/>
            <p className="fw-bold">Frontend</p>
            <div className="w-100" style={{margin : 'auto'}}>
                {
                    FRONTEND_SKILL1.map(sbd => 
                        <span key={sbd.name} className="badge mb-3">
                            <Image src={sbd.url} width="15" height="15" alt={sbd.name} />
                            {' '}{sbd.name}
                        </span>
                    )
                }
            </div>
            <div className="w-100" style={{margin : 'auto'}}>
                {
                    FRONTEND_SKILL2.map(sbd => 
                        <span key={sbd.name} className="badge mb-3">
                            <Image src={sbd.url} width="15" height="15" alt={sbd.name} />
                            {' '}{sbd.name}
                        </span>
                    )
                }
            </div>
            <div className="w-100" style={{margin : 'auto'}}>
                {
                    FRONTEND_SKILL3.map(sbd => 
                        <span key={sbd.name} className="badge mb-3">
                            <Image src={sbd.url} width="15" height="15" alt={sbd.name} />
                            {' '}{sbd.name}
                        </span>
                    )
                }
            </div>
            <p className="fw-bold">Backend</p>
            <div className="w-100" style={{margin : 'auto'}}>
                {
                    BACKEND_SKILL.map(sbd => 
                        <span key={sbd.name} className="badge mb-3">
                            <Image src={sbd.url} width="15" height="15" alt={sbd.name} />
                            {' '}{sbd.name}
                        </span>
                    )
                }
            </div>
            <p className="fw-bold">Cooperation</p>
            <div className="w-100" style={{margin : 'auto'}}>
                {
                    COLLABO_SKILL.map(sbd => 
                        <span key={sbd.name} className="badge mb-3">
                            <Image src={sbd.url} width="15" height="15" alt={sbd.name} />
                            {' '}{sbd.name}
                        </span>
                    )
                }
            </div>
            <p className="fw-bold">Deploy</p>
            <div className="w-100" style={{margin : 'auto'}}>
                {
                    DEPLOY_SKILLS.map(sbd => 
                        <span key={sbd.name} className="badge mb-3">
                            <Image src={sbd.url} width="15" height="15" alt={sbd.name} />
                            {' '}{sbd.name}
                        </span>
                    )
                }
            </div>
        </div>
    )
}

const COLLABO_SKILL = [
    {url : "/stack/Git.svg", name : 'Git'},
    {url : "/stack/github.png", name : 'Github'},
]

const DEPLOY_SKILLS = [
    {url : "/stack/vercel.svg", name : 'Vercel'},
    {url : "/stack/Netlify-Dark.svg", name : 'Netlify'},
    {url : "/stack/aws-elastic-beanstalk.svg", name : 'elastic-beanstalk'},
]

const FRONTEND_SKILL1 = [
    {url : "/stack/HTML.svg", name : 'HTML'},
    {url : "/stack/Css.svg", name : 'CSS'},
    {url : "/stack/JavaScript.svg", name : 'JavaScript'},
    {url : "/stack/JQuery.svg", name : 'Jquery'},
]

const FRONTEND_SKILL2 = [
    {url : "/stack/React.svg", name : 'React.js'},
    {url : "/stack/Next.svg", name : 'Next.js'},
    {url : "/stack/TypeScript.svg", name : 'TypeScript'},
]

const FRONTEND_SKILL3 = [
    {url : "/stack/Redux.svg", name : 'Redux toolkit'},
    {url : "/stack/zustand.svg", name : 'Zustand'},
    {url : "/stack/Sass.svg", name : 'SASS / SCSS'},
    {url : "/stack/StyledComponents.svg", name : 'Styled-components'},
]

const BACKEND_SKILL = [
    {url : "/stack/nodejs.png", name : 'Node.js'},
    {url : "/stack/MongoDB.svg", name : 'MongoDB'},
]