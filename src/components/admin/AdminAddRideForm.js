import React , { useState }  from 'react';
import ImageUploading from 'react-images-uploading';
import CustomInputField from '../CustomInputField';



const AdminAddRideForm = () => {

    const [images, setImages] = useState([]);
    const maxNumber = 1;
  
    const onChange = (imageList, addUpdateIndex) => {
      console.log(imageList, addUpdateIndex);
      setImages(imageList);
    };
    
  return (
    <section class="text-gray-600 body-font relative">
  <div class=" px-5 py-24 ">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl  title-font mb-4 text-gray-900 font-extrabold">Add Ride</h1>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
      
        <CustomInputField/>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Story</label>
            <textarea  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 h-48 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>


        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Details</label>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
          </div>
        </div>

        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600">Instruction</label>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
            <CustomInputField/>
          </div>
        </div>

      
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-gray-600" >Images </label>

        <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
              class = "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Upload Image
            </button>
            &nbsp;
            <button class = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={onImageRemoveAll}>Remove Image</button>
            
            <div class="flex w-full mt-4">
            {imageList.map((image, index) => (
              <div key={index} className="w-1/2">    
                <img class  = " rounded-lg mb-4 h-48" src={image['data_url']} alt=""/>
                <div className="">
                  <button class = "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => onImageUpdate(index)}>Update</button>
                  <button class = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}


      </ImageUploading>

          </div>
        </div>
        <div class="p-2 w-full">
          <button class="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
        </div>
        
      </div>
    </div>
  </div>
  </section>

  )
}

export default AdminAddRideForm