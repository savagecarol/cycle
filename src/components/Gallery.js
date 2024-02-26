import React from 'react'

const Gallery = ({imagesList}) => {
  return (

<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">

            {
                imagesList.map((images) => (
                    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        </a>
      </div>
                ))
        
          
             }


   
    
      </div>
    </div>
</section>

  )
}

export default Gallery