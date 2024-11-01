import React, { useState  } from 'react'
// import Rides from '../presentation/Rides';
import CustomButton from './CustomButton';
import Gallery from './Gallery';
import Stepper from './Stepper';

const RideCard = ({ride}) => {

   
    const [activeComponent, setActiveComponent] = useState(null);
    
    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const handleComponentClose = () => {
        setActiveComponent(null);
    };

    const dateTime = new Date(ride.dateTime);
    const formattedDate = `${dateTime.getDate().toString().padStart(2, '0')}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getFullYear()}`;
    const hours = dateTime.getHours() % 12 || 12; 
    const minutes = dateTime.getMinutes().toString().padStart(2, '0'); 
    const meridiem = dateTime.getHours() >= 12 ? 'PM' : 'AM'; 
    const formattedTime = `${hours}:${minutes} ${meridiem}`;
    const formattedDateTime = `Date: ${formattedDate} Time: ${formattedTime}`;


  return (
      <div>
<div className="flex bg-white border border-gray-200 rounded-lg shadow  hover:bg-gray-100">
    <img className="object-cover  w-96 h-64 rounded-t-lg   md:rounded-none md:rounded-s-lg" src={ride.images[0]} alt="ppic"/>
    <div className="flex flex-col justify-between leading-normal">
         <div> 
            <h5 className=" pl-4 pt-4 mb-1 text-2xl font-bold tracking-tight text-gray-900 ">{ride.title}</h5>
            <h2 className="pl-4 pr-4 mb-1 font-semibold text-gray-700">{formattedDateTime}</h2>
            <p className=" pl-4 mb-2 font-normal text-gray-700">{ride.story}</p>
        </div>

        <div className='flex justify-between'>
            <div class = "pl-4 pb-2">
                        {ride.details && ride.details.length > 0 && (
                            <CustomButton buttonName="Details" onClick={() => handleButtonClick('Details')} />
                        )}
                        {ride.instruction && ride.instruction.length > 0 && (
                            <CustomButton buttonName="Instructions" onClick={() => handleButtonClick('Instructions')} />
                        )}
                        {ride.attendance && ride.attendance.length > 0 && (
                            <CustomButton buttonName="Attendance" onClick={() => handleButtonClick('Attendance')} />
                        )}
                        {ride.images && ride.images.length > 1 && (
                            <CustomButton buttonName="Images" onClick={() => handleButtonClick('Images')} />
                        )}

            </div>
                {
                    activeComponent === null || activeComponent === '' ? <div></div> :
                    <CustomButton buttonName = "x" color="red" onClick={handleComponentClose} />
                }
             </div>    
    </div>
</div>

            <div className="mt-8 ml-16">
                {activeComponent === 'Details' && ride.details && ride.details.length > 0 && <Stepper steps={ride.details} />}
                {activeComponent === 'Instructions' && ride.instruction && ride.instruction.length > 0 && <Stepper steps={ride.instruction} />}
                {activeComponent === 'Attendance' && ride.attendance && ride.attendance.length > 0 && <Stepper steps={ride.attendance} />}
                {activeComponent === 'Images' && ride.images && ride.images.length > 1 && <Gallery imagesList={ride.images} />}
            </div>
 
</div>
  );
}

export default RideCard






