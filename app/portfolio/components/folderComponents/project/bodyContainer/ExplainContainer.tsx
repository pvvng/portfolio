import { DataType } from "../projectData";

export default function ExplainContainer({projectData} : {projectData : DataType}){
    return(
        <div className="p-3">
            {
                projectData.explain.map(e => 
                    <div key={e.title} className="mt-2">
                        <p className="header-title">{e.title}</p>
                        <p>{e.explain}</p>
                        <hr className="m-0"/>
                    </div>
                )
            }
        </div>
    )
}