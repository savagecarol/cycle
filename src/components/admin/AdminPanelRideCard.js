import React, { useState } from 'react';
import {  updateDocumentById, updateImageDocumentById  , deleteDocument} from '../../services/FirebaseFunction';
import { toast } from 'react-hot-toast';
import CustomInputField from '../CustomInputField'; // Import CustomInputField component
import ImageUploading from 'react-images-uploading';
import StaticData from '../../utils/Global';
import { useNavigate } from 'react-router-dom';

const AdminPanelRideCard = ({ ride }) => {
  const [showAttendanceForm, setShowAttendanceForm] = useState(false);
  const [showImagesForm, setShowImagesForm] = useState(false);
  const [attendance, setAttendance] = useState(['']);
  const [images, setImages] = useState([]);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false); // State for showing delete confirmation dialog
  const navigate  = useNavigate()


  const dateTime = new Date(ride.dateTime);

// Format the date part (DD-MM-YYYY)
const formattedDate = `${dateTime.getDate().toString().padStart(2, '0')}-${(dateTime.getMonth() + 1).toString().padStart(2, '0')}-${dateTime.getFullYear()}`;

// Format the time part (HH:MM AM/PM)
const hours = dateTime.getHours() % 12 || 12; // Get hours in 12-hour format
const minutes = dateTime.getMinutes().toString().padStart(2, '0'); // Ensure minutes are 2 digits
const meridiem = dateTime.getHours() >= 12 ? 'PM' : 'AM'; // Determine AM/PM
const formattedTime = `${hours}:${minutes} ${meridiem}`;

// Construct the final formatted string
const formattedDateTime = `Date: ${formattedDate} Time: ${formattedTime}`;


  const handleAddAttendance = () => {
    setAttendance(['']);
    setShowAttendanceForm(true);
  };

  const handleAddAttendeeField = () => {
    setAttendance([...attendance, '']);
  };

  const handleRemoveAttendeeField = (index) => {
    const updatedAttendance = [...attendance];
    updatedAttendance.splice(index, 1);
    setAttendance(updatedAttendance);
  };

  const handleSubmitAttendance = async () => {
    try {
      await updateDocumentById(StaticData.collectionName.rideDb, ride.id , {attendance : attendance });
      toast.success('Attendance uploaded successfully');
      setShowAttendanceForm(false);
    } catch (error) {
      console.error('Error uploading attendance:', error);
      toast.error('Error uploading attendance');
    }
  };

  const handleAttendanceClose = () => {
    setAttendance(['']);
    setShowAttendanceForm(false);
  };

  const handleSubmitImages = async () => {
    try {
      await updateImageDocumentById(StaticData.collectionName.rideDb,ride.id , images ,  ride.images[0]);
      toast.success('Images uploaded successfully');
      setShowImagesForm(false);
      setImages([]);
    } catch (error) {
      console.error('Error uploading images:', error);
      toast.error('Error uploading images');
    }
  };


  const handleDeleteRide = () => {
    setShowDeleteConfirmation(true); // Show delete confirmation dialog
  };

  const confirmDeleteRide = async () => {
    try {
        await deleteDocument(StaticData.collectionName.rideDb, ride); // Delete the document
      toast.success('Ride deleted successfully');
      navigate('/admin-panel')
      setShowDeleteConfirmation(false); // Hide the confirmation dialog

    } catch (error) {
      console.error('Error deleting ride:', error);
      toast.error('Error deleting ride');
    }
  };


  const cancelDeleteRide = () => {
    setShowDeleteConfirmation(false); // Hide the confirmation dialog
  };

  return (
    <div className="relative  items-center w-full">
    <div className="flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 relative">
      <img className="object-cover min-h-72  max-h-72 rounded-t-lg md:rounded-none md:rounded-s-lg" src={ride.images[0]} alt="" />
      <div className="flex flex-col justify-between leading-normal">
        <div>
          <h5 className="pl-4 pt-4 mb-2 text-2xl font-bold tracking-tight text-gray-900">{ride.title}</h5>

          <h2 className="pl-4 pr-4 mb-3 font-semibold text-gray-700">{formattedDateTime}</h2>
          <p className="pl-4 pr-4 mb-3 font-normal text-gray-700">{ride.story}</p>
        </div>

        <div className='flex justify-between'>
          <div className="pl-4 pb-2">
            <button onClick={handleAddAttendance} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Attendance</button>
            <button onClick={() => setShowImagesForm(true)} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add Images</button>
          </div>
          <button onClick={handleDeleteRide} className="absolute bottom-2 right-2 text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-red-900">Delete</button>
        </div>
      </div>
    </div>


{/* Attendance Form */}
{showAttendanceForm && (
  <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
    <div className="bg-white border border-gray-200 rounded-lg shadow p-6 relative">
      <button onClick={handleAttendanceClose} className="absolute top-0 right-0 -mt-3 -mr-3 p-2 bg-gray-200 rounded-full text-gray-600 hover:bg-gray-300 focus:outline-none">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <h3 className="text-xl font-bold mb-4">Add Attendance</h3>
      {attendance.map((attendee, index) => (
        <div key={index} className="mb-2 flex items-center">
          <CustomInputField
            title={`Attendee ${index + 1}`}
            name={`attendee_${index}`}
            value={attendee}
            onChange={(e) => {
              const newAttendance = [...attendance];
              newAttendance[index] = e.target.value;
              setAttendance(newAttendance);
            }}
          />
          {index > 0 && (
            <button onClick={() => handleRemoveAttendeeField(index)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
              </svg>
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-end">
        <button onClick={handleAddAttendeeField} className="bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 mr-2">+</button>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={handleSubmitAttendance} className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg px-4 py-2 w-full">Submit</button>
      </div>
    </div>
  </div>
)}


 {/* Delete confirmation dialog */}
 {showDeleteConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this ride?</p>
            <div className="flex justify-center">
              <button onClick={confirmDeleteRide} className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg px-4 py-2 mr-2">Yes</button>
              <button onClick={cancelDeleteRide} className="bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg px-4 py-2">No</button>
            </div>
          </div>
        </div>
      )}


      {/* Images Form */}
      {showImagesForm && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white border border-gray-200 rounded-lg shadow p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Image Upload Form</h3>
              <button onClick={() => setShowImagesForm(false)} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ImageUploading
              multiple
              value={images}
              onChange={setImages}
              maxNumber={5}
              dataURLKey="data_url"
            >
              {({ onImageUpload, isDragging, dragProps }) => (
                <div>
                  <button
                    onClick={onImageUpload}
                    className="bg-blue-500 hover:bg-blue-600 focus:outline-none text-white font-medium rounded-lg px-4 py-2 mb-4"
                    {...dragProps}
                  >
                    Upload Images
                  </button>
                  <div className="flex flex-wrap">
                    {images.map((image, index) => (
                      <div key={index} className="w-24 h-24 bg-gray-200 rounded-lg overflow-hidden mr-4 mb-4">
                        <img src={image.data_url} alt={`Uploaded ${index}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
            <button onClick={handleSubmitImages} className="mt-4 bg-green-500 hover:bg-green-600 focus:outline-none text-white font-medium rounded-lg px-4 py-2 w-full">Upload Images</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanelRideCard;
