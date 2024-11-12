import ExplainCotainer from "./ExplainContainer";

export default function DefaultExplainContainer(){
    return(
        <div 
            className="p-2 d-flex" 
            style={{margin :'auto', minHeight : '100vh', justifyContent : 'center', alignItems : 'center'}}
        >
            <ExplainCotainer />
        </div>
    )
}