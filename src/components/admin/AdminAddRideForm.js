import { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import CustomInputField from '../CustomInputField'; 
import { addDocumentToCollection, updateDocumentById } from '../../services/FirebaseFunction';
import StaticData from '../../utils/Global';
import toast , {  Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AdminAddRideForm = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    title: '',
    story: '',
    details: [''], 
    instruction: [''], 
    images: [],
    dateTime: '',
  });

  const maxNumber = 1;

  const onChange = (imageList) => {
    setInputs({
      ...inputs,
      images: imageList
    });
  };


  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    if (type === 'detail') {
      const updatedDetails = [...inputs.details];
      updatedDetails[index] = value;
      setInputs({
        ...inputs,
        details: updatedDetails
      });
    } else if (type === 'instruction') {
      const updatedInstructions = [...inputs.instruction];
      updatedInstructions[index] = value;
      setInputs({
        ...inputs,
        instruction: updatedInstructions
      });
    } else {
      setInputs({
        ...inputs,
        [name]: value
      });
    }
  };

  const handleAddField = (type) => {
    const updatedInputs = { ...inputs };
    if (type === 'detail') {
      updatedInputs.details.push('');
    } else if (type === 'instruction') {
      updatedInputs.instruction.push('');
    }
    setInputs(updatedInputs);
  };

  const handleRemoveField = (index, type) => {
    const updatedInputs = { ...inputs };
    if (type === 'detail') {
      updatedInputs.details.splice(index, 1);
    } else if (type === 'instruction') {
      updatedInputs.instruction.splice(index, 1);
    }
    setInputs(updatedInputs);
  };




  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await  addDocumentToCollection(StaticData.collectionName.rideDb,inputs)
      setInputs({
        title: '',
        story: '',
        details: [''],
        instruction: [''],
        images: [], 
        attendance : [],
        dateTime: ''
      });
      toast.success("Successfully generated ride")

      navigate("/admin-panel")
    
    } catch (error) {
      toast.error("Error generating ride");
      console.error('Error adding ride document: ', error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission behavior on Enter key press
    }
  };


  return (
    <section className="text-gray-600 body-font relative">
      <div className="px-5 py-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-extrabold">Add Ride</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
            <div className="flex flex-wrap -m-2">
              <CustomInputField title="Title" name="title" value={inputs.title} onChange={handleChange} />
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="story" className="leading-7 text-sm text-gray-600">Story</label>
                  <textarea
                    id="story"
                    name="story"
                    value={inputs.story}
                    onChange={(e) => handleChange(e, null, null)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-48 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="dateTime" className="leading-7 text-sm text-gray-600">Date and Time</label>
                  <input
                    type="datetime-local"
                    id="dateTime"
                    name="dateTime"
                    value={inputs.dateTime}
                    onChange={(e) => handleChange(e, null, null)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="details" className="leading-7 text-sm text-gray-600">Details</label>
                  {inputs.details.map((detail, index) => (

                    <div key={index} className="flex items-center">
  <CustomInputField title={`Detail ${index + 1}`} name={`detail_${index}`} value={detail} onChange={(e) => handleChange(e, index, 'detail')} />
  {index === inputs.details.length - 1 && (
    <button type="button" onClick={() => handleAddField('detail')} className="ml-2 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
      <span className="text-lg">+</span>
    </button>
  )}
  {inputs.details.length > 1 && (
    <button type="button" onClick={() => handleRemoveField(index, 'detail')} className="ml-2 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
      <span className="text-lg">-</span>
    </button>
  )}
</div>
                 
                  ))}
                </div>
              </div>
              {/* Instruction */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="instruction" className="leading-7 text-sm text-gray-600">Instruction</label>
                  {inputs.instruction.map((instruction, index) => (
                   
                    <div key={index} className="flex items-center">
  <CustomInputField title={`Instruction ${index + 1}`} name={`instruction_${index}`} value={instruction} onChange={(e) => handleChange(e, index, 'instruction')} />
  {index === inputs.instruction.length - 1 && (
    <button type="button" onClick={() => handleAddField('instruction')} className="ml-2 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
      <span className="text-lg">+</span>
    </button>
  )}
  {inputs.instruction.length > 1 && (
    <button type="button" onClick={() => handleRemoveField(index, 'instruction')} className="ml-2 flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
      <span className="text-lg">-</span>
    </button>
  )}
</div>
                    
                  ))}
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="images" className="leading-7 text-sm text-gray-600">Images</label>
                  


                  <ImageUploading
  multiple
  value={inputs.images}
  onChange={onChange}
  maxNumber={maxNumber}
  dataURLKey="data_url"
>
  {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
    <div className="p-2 w-full">
      <div className="relative">
        <div className="upload__image-wrapper mt-2 flex flex-wrap">
          {imageList.map((image, index) => (
            <div key={index} className="w-1/3 p-2  overflow-hidden">
              <img src={image['data_url']} alt="" className="rounded-lg mb-2 max-w-full max-h-72" />
              <button
                   onClick={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                onImageRemove(); // Trigger image upload
              }}
                className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:bg-red-600 rounded-lg px-4 py-2"
              >
                Remove
              </button>
            </div>
          ))}
          {imageList.length < maxNumber && (
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                onImageUpload(); // Trigger image upload
              }}

              {...dragProps}
              className="w-1/3 p-2 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white rounded-lg text-center"
            >
              Upload Image
            </button>
          )}
        </div>
      </div>
    </div>
  )}
</ImageUploading>

                </div>
              </div>
              <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg" >Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster position='top-right' />
    </section>
  );
};

export default AdminAddRideForm;
