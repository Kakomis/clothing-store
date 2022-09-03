import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBOZLu--0fvRfN4N-iFQE-u0lWWyyulbcI",
  authDomain: "crown-db-22f5b.firebaseapp.com",
  projectId: "crown-db-22f5b",
  storageBucket: "crown-db-22f5b.appspot.com",
  messagingSenderId: "985410633154",
  appId: "1:985410633154:web:1dce122cf4017ec243aa5b",
  measurementId: "G-VDEC4R8V48"
};

const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object) 
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async (collectionName) => {
  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data()
  //   acc[title.toLowerCase()] = items
  //   return acc
  // }, {})

  // return categoryMap
}

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
  ) => {
  if(!userAuth) return;
  
  const userDocRef = doc(db, 'users', userAuth.uid)
  const userSnapshot = await getDoc(userDocRef)
  
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  return userSnapshot
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  try {
    return await createUserWithEmailAndPassword(auth, email, password)
  } catch (error) {
    throw new Error(error.code)
  }
}

export const signInUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    throw new Error(error.code)
  }
}

// auth is a singleton
export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => 
  onAuthStateChanged(auth, callback)

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject
    )
  })
}
