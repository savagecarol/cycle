import React from 'react'
import Navbar from '../../components/Navbar'
import Gallery from '../../components/Gallery';

const ReadStory = () => {
    const imageList = [
        "https://dummyimage.com/420x260" , "https://dummyimage.com/420x260" , "https://dummyimage.com/420x260" , 
        "https://dummyimage.com/420x260" 
    ]



  return (
    <div>
        <Navbar/>
    <div class=" px-5 py-6 ">
        <div class="flex flex-col text-center w-full mb-6">
            <h1 class="sm:text-3xl text-2xl  title-font mb-2 text-gray-900 font-extrabold">Ride TO Ajmer</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">tedkfmf dksfndklfmdsf ldksmflkdsfmdsf sdflkmsdkfldsf sdlfmdslfkmdsflkdsmf sdmfkdslbsite</p>
            <div class="flex items-center mx-auto">
                <img class="w-16 h-16 rounded-full" src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg" alt="Lana image" />
                <p class="text-sm font-medium ">Kartikeya Sharma</p>
            </div>
            <div className="px-5">
                <Gallery imagesList={imageList} />
            </div>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-justify">tedkfmf dkdsjndsf kdfmdsfk mdl;sfd sfsldfmdslkfmdsf dsklfmdslkfmdsf mdsklmfdsf dsfndkdfdsfdsds lfmdsf ldksmflkdsfmdsf sdflkmsdkfldsf sdlfmdslfkmdsflkdsmf sdmfkdslbsite tedkfmf dksfndklfmdsf ldksmflkdsfmdsf sdflkmsdkfldsf sdlfmdslfkmdsflkdsmf sdmfkdslbsite tedkfmf dksfndklfmdsf ldksmflkdsfmdsf sdflkmsdkfldsf sdlfmdslfkmdsflkdsmf sdmfkdslbsite tedkfmf dksfndklfmdsf ldksmflkdsfmdsf sdflkmsdkfldsf sdlfmdslfkmdsflkdsmf sdmfkdslbsite tedkfmf dksfndklfmdsf ldksmflkdsfmdsf sdflkmsdkfldsf sdlfmdslfkmdsflkdsmf sdmfkdslbsite tedkfmf dksfndklfmdsf ldksmflkdsfmdsf sdflkmsdkfldsf sdlfmdslfkmdsflkdsmf sdmfkdslbsite</p>
        </div>
    </div>
        
    </div>
  )
}

export default ReadStory