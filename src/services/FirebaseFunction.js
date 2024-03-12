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


const logOut = () => {
    try {
        localStorage.removeItem('uuid')
        return true;
      } catch (error) {
        return false;
      }
}


const uploadImageToStorage = async (imageFile , collectionName) => {
  try {
    const fileName = `${uuidv4()}_${imageFile.name}`;
    const storageRef = storage.ref(`${collectionName}/${fileName}`);
    const uploadTask = storageRef.put(imageFile);
    const snapshot = await uploadTask;
    const downloadURL = await snapshot.ref.getDownloadURL();
    return downloadURL; 
  } catch (error) {
    console.error('Error uploading image to storage:', error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};


const addDocumentToCollection = async (collectionName, data) => {
    try {
      const collectionRef = firestore.collection(collectionName);
      if (data.images && data.images.length > 0) {
        const uploadPromises = [];
        for (const imageFile of data.images) {
          const uploadPromise = uploadImageToStorage(imageFile , collectionName);
          uploadPromises.push(uploadPromise);
        }
  
        // Wait for all image uploads to complete and get the download URLs
        const downloadURLs = await Promise.all(uploadPromises);
        data.images = downloadURLs;
      }
  
      // Add the modified data object to the Firestore collection
      await collectionRef.add(data);
      console.log('Document added to collection:', collectionName);
    } catch (error) {
      console.error('Error adding document to collection:', error);
      throw error; // Re-throw the error to handle it in the component if needed
    }
  };

export { fetchAllDataFromCollection, fetchData, getDocumentById  , updateSiteCounter , login , logOut , addDocumentToCollection};
