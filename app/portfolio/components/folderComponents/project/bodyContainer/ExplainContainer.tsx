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
                        {e.explain&&<p>{e.explain}</p>}
                        {i===0 && <hr/>}
                    </div>
                )
            }
        </div>
    )
}