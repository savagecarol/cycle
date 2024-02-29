import React from 'react'
import CustomButton from './CustomButton';
import Gallery from './Gallery';
import RideStepper from './RideStepper';

const RideCard = () => {

   const imageList = [
        "https://dummyimage.com/420x260" , "https://dummyimage.com/420x260" , "https://dummyimage.com/420x260" , 
        "https://dummyimage.com/420x260" 
    ]


  return (
      <div>
<div className="flex bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
    <img className="object-cover  w-96 h-64 rounded-t-lg   md:rounded-none md:rounded-s-lg" src="https://www.sundaytimes.lk/210131/uploads/82.jpg" alt="" />
    <div className="flex flex-col justify-between leading-normal">
         <div> 
            <h5 className=" pl-4 pt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions 2021</h5>
            <p className=" pl-4 mb-3 font-normal text-gray-700">Htiomdsfslfmdsf dslfmds;fmds;lf2021 so far, in reverse chronological orderkfs fdslfmdslkfmdslkf sdlfmds;lfmdslfmdsf dslfmds;fmds;lf2021 so far, in reverse chronological orderthe biggest enterprise technology acquisitions of jsndjksd dsfklndlksfmndslf dsfndslkfmdd fjdsnfdsf dsfmdslf;dsmf dssklfds f sdlfmndslkfmdslkfs fdslfmdslkfmdslkf sdlfmds;lfmdslfmdsf dslfmds;fmds;lf2021 so far, in reverse chronological order.</p>
        </div>

        <div className='flex justify-between'>
            <div class = "pl-4 pb-2">
                <CustomButton buttonName = "Details"/>
                <CustomButton buttonName = "Instructions"/>
                <CustomButton buttonName = "Attendance"/>
                <CustomButton buttonName = "Images"/>
            </div>
                <CustomButton buttonName = "x" color="red"  onClick={() => console.log("Button clicked!")} />
             </div>    
    </div>
</div>

    <div className="mt-8 ml-16">
             <RideStepper/>
    </div>


            {/* <Gallery imagesList={imageList}/> */}
 
</div>
  );
}

export default RideCard






