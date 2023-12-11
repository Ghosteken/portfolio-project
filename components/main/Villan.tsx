import react from 'react';
import VillanContent from '../sub/VillanContent';
 
const Villan = () => {
    return (
        <div className='relative flex flex-col h-full w-full ' >
            
            {/* <video 
            autoPlay
            lang='english'
            loop
            muted
            className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
            >
             <source src='/blackhole.webm' type='video/webm'/>  
                          </video> */}
            <VillanContent/>

        </div>
    )
};

export default Villan