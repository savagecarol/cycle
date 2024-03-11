import {firestore,auth} from '../utils/Firebase'; 



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

export { fetchAllDataFromCollection, fetchData, getDocumentById  , updateSiteCounter , login , logOut};
