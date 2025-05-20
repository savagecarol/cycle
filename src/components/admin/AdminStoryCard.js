import React from 'react'
import { Link  ,useNavigate  } from 'react-router-dom';
import { updateDocumentById } from '../../services/FirebaseFunction';
import StaticData from '../../utils/Global';
import toast , {  Toaster } from 'react-hot-toast';
const AdminStoryCard = ({story }) => {

    const navigate = useNavigate();
    const handleAccept = async () => {
        try{
       await updateDocumentById(StaticData.collectionName.storyDb , story.id ,   {
        status: 1
      })
      navigate(`/stories/${story.id}`);
    }
    catch(e) {
            toast.error("Problem in updating status")
    }

    }

    const handleReject = async () => {
       try
       { await updateDocumentById(StaticData.collectionName.storyDb , story.id ,   {
            status: 2
          })
          navigate(`/stories/${story.id}`);
        }
          catch(e) {
            toast.error("Problem in updating status")
        }
    
    }

  return (
        <div className="relative isolate flex flex-col  overflow-hidden rounded-lg px-4 py-4  max-w-sm mx-auto mt-8 min-h-96 min-w-96"> 
            <img src={story.images[0]} className="absolute inset-0 h-full w-full object-cover" alt="imagesss"/>
                <div className="absolute inset-x-1/2 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="z-10  overflow-hidden text-m  text-gray-200 font-semibold">{story.title} </div>
                <div className="z-10  overflow-hidden text-sm  text-gray-200 font-semibold">{story.description} </div>
                <div className="py-3 sm:py-4 z-10  ">
                    <div className="flex items-center ">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src= "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg" alt="Lana  rfndfd" />
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-white truncate">
                                {story.name}
                            </p>
                        </div>
                    </div>
                </div>

                <button className="absolute bottom-0 left-0  right z-10 mb-4 ml-4 px-4 py-2 text-white text-sm bg-green-500 rounded-lg shadow-md"  onClick={handleAccept}>Accept </button>
                <button className="absolute bottom-0 left-1/3 right-1/3  right z-10 mb-4 mr-8  px-6 py-2 text-white text-sm bg-red-500 rounded-lg shadow-md" onClick={handleReject}>Reject </button> 
                <Link  to={`/stories/${story.id}`}  target="_blank" className="absolute bottom-0 right-0  right z-10 mb-4 mr-4 px-4 py-2 text-white text-sm bg-yellow-500 rounded-lg shadow-md">Read More </Link>
                <Toaster position='top-right' />
        </div>
  )
}

export default AdminStoryCard


