'use client';
import './css/GenkidamaContainer.css';

export default function SonGohanContainer(){
    return(
        <div className="row w-100" style={{maxWidth : '768px', position : 'relative', margin : 'auto', justifyContent : 'center', alignItems : 'center'}}>
            <div className="col-md-4 col-lg-3 col-5">
                <img src="/main/원기옥컷5.jpg" width="100%" />
            </div>
            <img 
                className="shake-animation"
                src="/main/쿠구구구1.png" 
                style={{
                    position : 'absolute', 
                    bottom : 0,
                }} 
                width="100%" 
            />
        </div>
    )
}