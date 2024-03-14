import React from 'react'

const Gallery = ({imagesList}) => {
  return (

<section className="text-gray-600 body-font">
  <div className="container  mx-auto">
    <div className="flex flex-wrap ">
            {
                imagesList.map((images) => (
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="block relative h-72 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full " src={images}/>
        </div>
      </div>
                ))
                 
             }    
      </div>
    </div>
</section>

  )
}

export default Gallery