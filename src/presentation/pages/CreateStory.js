import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import { addDocumentToCollection } from '../../services/FirebaseFunction';
import StaticData from '../../utils/Global';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CustomInputField from '../../components/CustomInputField';
import Cycle from '../../animation/Cycle';

const CreateStory = () => {
  const navigate = useNavigate();
  const [submitClicked, setSubmitClicked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // New state for submission loading



  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    description:'',
    title: '',
    story: '',
    images: [],
    status: 0
  });


 

  const maxNumber = 8;

  const onChange = (imageList, addUpdateIndex) => {
    setInputs({
      ...inputs,
      images: imageList
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!submitClicked) return; 
      if (!validateForm()) return;
      setIsSubmitting(true); 
      await addDocumentToCollection(StaticData.collectionName.storyDb, inputs);
      setInputs({
        name: '',
        email: '',
        title: '',
        story: '',
        description : '',
        images: []
      });
        toast.success("Story submitted successfully");
       navigate("/"); 
    } catch (error) {
      toast.error("Error submitting story");
      console.error('Error adding story document: ', error);
    }finally {
      setIsSubmitting(false); // End the submission loading
    }
  };

  const handleFormSubmit = () => {
    setSubmitClicked(true); // Set the flag to indicate form submission
  };




  const validateForm = () => {
    if (inputs.name.trim() === '') {
      toast.error('Name is required');
      return false;
    }

    if (!/^[a-zA-Z\s]+$/.test(inputs.name.trim())) {
      toast.error('Name should not contain special characters or numbers');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      toast.error('Invalid email address');
      return false;
    }

    if (inputs.story.trim().split(/\s+/).length < 50) {
      toast.error('Story should have at least 50 words');
      return false;
    }

    if (inputs.images.length === 0) {
      toast.error('At least one image is required');
      return false;
    }

    return true;
  };


  return (
    <section className="text-gray-600 body-font relative">
      <div className="px-5 py-24">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl title-font mb-4 text-gray-900 font-extrabold">Create Story</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Tell your Cycle story to us, and we will post it on our website.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <CustomInputField title="Name" name="name" value={inputs.name} onChange={handleChange} />
              <CustomInputField title="Email" name="email" value={inputs.email} onChange={handleChange} />
              <CustomInputField title="Title" name="title" value={inputs.title} onChange={handleChange} />
              <CustomInputField title="Description" name="description" value={inputs.description} onChange={handleChange} />
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="story" className="leading-7 text-sm text-gray-600">Story</label>
                  <textarea id="story" name="story" value={inputs.story} onChange={handleChange} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-96 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
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
                      <div className="upload__image-wrapper">
                        {imageList.map((image, index) => (
                          <div key={index} className="w-1/2">
                            <img className="rounded-lg mb-4 h-48" src={image['data_url']} alt=""/>
                            <div className="">
                              <button onClick={(e) => {
                                e.preventDefault();
                                onImageRemove(index);
                              }} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                        {imageList.length < maxNumber && (
                          <div {...dragProps} className="w-1/2">
                            <button
                              style={isDragging ? { color: 'red' } : undefined}
                              onClick={onImageUpload}
                              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            >
                              Upload Images
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>
            
            { isSubmitting ? 
              <div className='w-full flex flex-col justify-center items-center' >                     
                    <div className="h-24 w-24 mx-32 my-32">
                      <Cycle/>
                    </div>
                  </div>
                  :
              <div className="p-2 w-full">
                <button type="submit"   onClick={handleFormSubmit} className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>
              </div>
              
              }

            </div>
          </form>
        </div>
      </div>
      <Toaster position='top-right' />
    </section>
  );
};

export default CreateStory;
