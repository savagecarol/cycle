import {firestore,auth , storage} from '../utils/Firebase'; 
import { v4 as uuidv4 } from 'uuid'; 



const fetchAllDataFromCollection = async ( collectionName ) => {
    try {
        const collectionRef = firestore.collection(collectionName);
        const snapshot = await collectionRef.get();
        const documents = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return documents;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
};

const fetchData = async () => {
    try {
        const collectionRef = firestore.collection('BANNER');
        const snapshot = await collectionRef.get();
        const documents = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return documents;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return []
    }
};

const getDocumentById = async (collectionName , documentId) => {
    try {
        const collectionRef = firestore.collection(collectionName);
        const documentSnapshot = await collectionRef.doc(documentId).get();
        if (documentSnapshot.exists) {
            return {
                id: documentSnapshot.id,
                ...documentSnapshot.data()
            };
        } else {
            console.log('Document does not exist');
            return null;
        }
    } catch (error) {
        console.error('Error getting document: ', error);
        return null;
    }
};


const updateSiteCounter = async (collectionName, documentId) => {
  try {
      const collectionRef = firestore.collection(collectionName);
      const documentRef = collectionRef.doc(documentId);
      const documentSnapshot = await documentRef.get();
      if (!documentSnapshot.exists) {
          console.log('Document does not exist');
          return null;
      }

      var newData  = documentSnapshot.data()
      newData.webSiteCount = newData.webSiteCount + 1
      await documentRef.update(newData);
      console.log('Document updated ');
      return null;
  } catch (error) {
      console.error('Error updating document: ', error);
      return null;
  }
};


const login = async(email , password) => {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        if (user) {
          const uid = user.uid;
          return uid; 
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
}


const logOut = async () => {
    try {
        await auth.signOut();
        localStorage.removeItem('uuid')
        return true;
      } catch (error) {
        return false;
      }
}

const uploadImageToStorage = async (imageDataUrl, collectionName) => {
    try {
        // Extract the data URL from the imageDataUrl object
        const dataUrl = imageDataUrl.data_url;

        // Extract the MIME type from the file object
        const mimeType = imageDataUrl.file.type;

        // Determine the file extension based on the MIME type
        let extension = '';
        switch (mimeType) {
            case 'image/jpeg':
                extension = '.jpg';
                break;
            case 'image/png':
                extension = '.png';
                break;
            // Add cases for other supported image types if needed
            default:
                console.error('Unsupported MIME type:', mimeType);
                throw new Error('Unsupported MIME type');
        }

        // Convert DataURL to Blob
        const blob = await fetch(dataUrl)
            .then(res => res.blob())
            .then(blob => {
                console.log('Blob:', blob);
                return new Blob([blob], { type: mimeType });
            });

        // Generate unique file name with the dynamically picked extension
        const fileName = `${uuidv4()}_${new Date().getTime()}${extension}`;
        console.log('File Name:', fileName);
        
        // Reference to the storage location
        const storageRef = storage.ref(`${collectionName}/${fileName}`);
        console.log('Storage Ref:', storageRef);

        // Upload Blob to Firebase Storage
        const uploadTask = storageRef.put(blob);
        console.log('Upload Task:', uploadTask);

        // Get the snapshot after upload completes
        const snapshot = await uploadTask;
        console.log('Snapshot:', snapshot);

        // Get download URL of the uploaded image
        const downloadURL = await snapshot.ref.getDownloadURL();
        console.log('Download URL:', downloadURL);

        return downloadURL;
    } catch (error) {
        console.error('Error uploading image to storage:', error);
        throw error;
    }
};


  const addDocumentToCollection = async (collectionName, data) => {
    try {
      const collectionRef = firestore.collection(collectionName);
      
      // Upload images and replace with download URLs
      if (data.images && data.images.length > 0) {
        const uploadPromises = data.images.map(imageDataUrl => uploadImageToStorage(imageDataUrl, collectionName));
        const downloadURLs = await Promise.all(uploadPromises);
        data.images = downloadURLs;
      }
      
      // Add the modified data object to the Firestore collection
      await collectionRef.add(data);
      console.log('Document added to collection:', collectionName);
    } catch (error) {
      console.error('Error adding document to collection:', error);
      throw error;
    }
  };


  const fetchAllDataFromStoryDbThatArePending = async ( collectionName ) => {
    try {
        const collectionRef = firestore.collection(collectionName);
        const snapshot = await collectionRef.where('status', '==', 0).get();
        const documents = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return documents;
    } catch (error) {
        console.error('Error fetching data: ', error);
        return null;
    }
};



const updateDocumentById = async (collectionName , documentId , updatedDoc) => {
    try {
      // Reference to the Firestore document by its ID
      const docRef = firestore.collection(collectionName).doc(documentId);
      // Update the document with the new status
      await docRef.update(
        updatedDoc
          
      );
      
      console.log('Document updated successfully.');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

export { fetchAllDataFromCollection, fetchData, getDocumentById  , updateSiteCounter , login , logOut , addDocumentToCollection , fetchAllDataFromStoryDbThatArePending , updateDocumentById };
