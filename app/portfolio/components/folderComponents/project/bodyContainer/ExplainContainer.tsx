import { DataType } from "../projectData";

export default function ExplainContainer({projectData} : {projectData : DataType}){
    return(
        <div className="p-3">
            {
                projectData.explain.map((e, i) => 
                    <div key={e.title} className="mt-2">
                        <p className="header-title">
                            {i > 0 && <span>{i}.{' '}</span>}
                            {e.title}
                        </p>
                        {e.explain && <p>{e.explain}</p>}
                    </div>
                )
            }

            {
                projectData.about &&
                <>
                    <hr />
                    <h5 className="header-title mb-3">프로젝트에서 알게된 점</h5>
                </>
            }
            <ul>
                {
                    projectData.about &&
                    projectData.about.map((pda, i) => <li className="mb-2" key={i}>{pda}</li>)
                }
            </ul>

            <hr />

            <h5 className="header-title mb-3">후기</h5>
            {
                <div className="p-3 rounded-2" style={{background : '#eee'}}>
                    <strong>{projectData.review}</strong>
                </div>
            }
        </div>
    )
}