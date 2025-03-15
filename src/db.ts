import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth"
import { collection, addDoc, getDocs, getDoc, setDoc, doc } from "firebase/firestore";
import { auth } from './firebase.ts'
import { db } from "./firebase.ts"

export const saveNewUser = async (id: string, name: string, email: string) => {
    //check if already exists
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return
    }
    else {
    await setDoc(doc(db, "users", id), {
      name: name,
      email: email
    });
    console.log("Document written successfully");
  }
    return id;
  }

//auth new user to firestore
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async () => {
  await signInWithPopup(auth, googleProvider).then((result) => {
    //get firebase user credentials
    auth.onAuthStateChanged(async (user) => {
      location.reload();
      /* //check if already in db
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
        } else {
          const docRef = await setDoc(doc(db, "users", user.uid), {
            email: user.email,
            name: user.displayName,
          });
        }
      } else {
        console.error("User is null");
      } */
      })    
  })
}