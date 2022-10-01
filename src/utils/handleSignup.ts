import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function handleSignup(email: string){

    try {
        const docRef = await addDoc(collection(db, "signup"), {
            email: email
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
