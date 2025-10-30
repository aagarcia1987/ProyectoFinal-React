import { initializeApp } from "firebase/app";
import {collection, doc, getDocs, getDoc, query, where, addDoc, getFirestore } from "firebase/firestore"
import products from "./products";

const firebaseConfig = {
  apiKey: "AIzaSyDvmdkg3tcnkXm5JIwQryeQ9tr7ZvIKgSY",
  authDomain: "react-proyecto-c86ec.firebaseapp.com",
  projectId: "react-proyecto-c86ec",
  storageBucket: "react-proyecto-c86ec.firebasestorage.app",
  messagingSenderId: "106017659303",
  appId: "1:106017659303:web:8e6e6f0b6ccd88994cfe82"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export async function getProducts(){

    const productsRef = collection(db, "products");
    const productsSnapshot = await getDocs(productsRef);

    const documents = productsSnapshot.docs;

    const dataDocs  = documents.map (item => {
        return {
            id: item.id,
            ...item.data()
        }
    })
    return dataDocs
}

export async function getProductById(idParam){
    const docRef = doc(db, "products", idParam);
    const docSnapshot = await getDoc(docRef);
    const docData = docSnapshot.data();
    docData.id = docSnapshot.id;

    return docData;
}

export async function getProductsByCateg(categParam) {

    const productsRef = collection(db, "products");
    const queryCategory = query(productsRef, where("category", "==", categParam))
    const productsSnapshot = await getDocs(queryCategory);

    const documents = productsSnapshot.docs;
    const dataDocs  = documents.map (item => {
        return {
            id: item.id,
            ...item.data()
        }
    })
    return dataDocs
}

export async function createOrder( orderData ) {
    const productsRef = collection (db, "orders");
    const newDoc = await addDoc(productsRef, orderData);
    return newDoc;
}

export async function exportProductsData() {
    const productsRef = collection(db, "products")
    for(let item of products){
        delete item.id;
        const docCreated = await addDoc(productsRef, item)
        console.log("Creando el doc", docCreated.id)
    }
}

export default app;