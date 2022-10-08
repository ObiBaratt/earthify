import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function handleSignup2(email: string){

    const dbRef = doc(collection(db, "signup"));

    await setDoc(dbRef, {
        email: email
    })
}

export default async function signup(emailData: string) {
    try {
    const docRef = await addDoc(collection(db, "signup"), {
        email: emailData,
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
    }
}
