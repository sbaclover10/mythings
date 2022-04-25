import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, getDocs, orderBy } from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, collectionName),
      orderBy("createdAt", "desc")
    ); //can add later limits to just recent (1)

    getDocs(q).then((querySnapshot) => {
      let documents = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });
    /*
      const querySnapshot = getDocs(q).then(
        querySnapshot.forEach((doc) => {
          let documents = [];
          documents.push({ ...doc.data(), id: doc.id });
          setDocs(documents);
        })
      );
      */
    //return () => unsub(); //questionable
  }, [collectionName]);
  return { docs };
};

export default useFirestore;
