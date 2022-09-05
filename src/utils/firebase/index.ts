import { initializeApp } from "firebase/app";
import { getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
  UserCredential
} from 'firebase/auth'
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection, 
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot
} from 'firebase/firestore'

import { Category } from '../../store/categories/categories.types'

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

export type ObjectToAdd = {
  title: string
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string, 
  objectsToAdd: T[]
  ): Promise<void> => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object) 
  })

  await batch.commit()
}



export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  console.log('TESTEANDO ANDO', querySnapshot);
  
  return querySnapshot.docs.map(
    (docSnapshot) => docSnapshot.data() as Category
  )
}

export type AdditionalInformation = {
  displayName?: string;
}

export type UserData = {
  createdAt: string,
  displayName: string,
  email: string
}

export const createUserDocumentFromAuth = async (
    userAuth: User, 
    additionalInformation = {} as AdditionalInformation
  ): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
      console.log('error creating the user', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (
  email: string, 
  password: string
): Promise<UserCredential | void> => {
  if(!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (
  email: string, 
  password: string
): Promise<UserCredential | void> => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}

// auth is a singleton
export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => 
  onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
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
