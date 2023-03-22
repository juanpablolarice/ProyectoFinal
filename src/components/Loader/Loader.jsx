// import React, { useState, useEffect} from 'react'
import React from 'react'
import './Loader.css'

export default function Loader () {
    return (
        <div className='loaderContainer'>
            <img src={process.env.PUBLIC_URL + "/images/brand.png"} alt="" />
        </div>
    )        
}
// const Loader = (props) => {    
//     const [loader, setLoader] = useState()
        
//     console.log("1 Loader: " + loader)    
//     useEffect(() => {
//         const onPageLoad = (value) => {
//             if(value){
//                 setLoader(value)
//                 console.log("Entro en OnPageLoad: " + value);
//             }   
//         }        
        
        
//         // Check if the page has already loaded
//         // if (document.readyState === 'complete') {
//         //     onPageLoad(false);
//         //     // setTimeout(() => {
//         //         setLoader(false)
//         //         // }, 1000);
//         //         console.log('Entro al readyState')
                
//         // } else {
//         //     setLoader(true)
//         //     console.log('No entro al readyState')
//             // window.addEventListener('load', setLoader(false));
//             window.addEventListener('load', onPageLoad(false));
//             // Remove the event listener when component unmounts            
//             // return () => window.removeEventListener('load', setLoader(false));
//             return () => window.removeEventListener('load', onPageLoad(false));
//         // }
//     }, []);
//     console.log("2 Loader: " + loader)
    
    
    
//     // setTimeout(() => {
//         //     setLoader(false)
//         // }, 6000);
        
//     if(loader) {
//         return (
//             <div className='loaderContainer'>
//                 <img src={process.env.PUBLIC_URL + "/images/brand.png"} alt="" />
//             </div>
//         )    
//     }else{
//         return (<p>Hola</p>)
//     }
// }

// export default Loader