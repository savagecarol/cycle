import React from 'react'

const AdminPanelRideCard = () => {


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
        <div className = "pl-4 pb-2">
            <button  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Images</button>
            <button  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Attendance</button>
        </div>
            <button  className="focus:outline-none text-white bg-red-400 hover:bg-yellow-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Delete</button>
    </div>    
</div>
</div>


</div>
);

}

export default AdminPanelRideCard








