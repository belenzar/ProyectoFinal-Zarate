import {
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { utils } from "../utils/";

const productsRef = collection(utils.db, "products");
const ordersCollection = collection(utils.db, 'orders')

export async function getAll() {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function getProductById(id) {
  try {
    const docRef = doc(utils.db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }

    return { id: docSnap.id, ...docSnap.data() };
  } catch (error) {
    console.error("Error en getProductById:", error);
    throw error;
  }
}

export async function getProductsByCategory(category) {
  if (!category) throw new Error("Categoría no definida");

  const productsRef = collection(utils.db, "products");
  const q = query(productsRef, where("category", "==", category));
  const querySnapshot = await getDocs(q);
  console.log("Docs encontrados:", querySnapshot.docs.length);

  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

export async function createOrder(order) {
  const docRef = await addDoc(ordersCollection, order);
  return docRef.id;
}
