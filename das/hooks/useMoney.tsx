// import { useState, useEffect } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebase";

// function useMoney(collectionName: string, fieldName: string) {
//   const [dataSum, setDataSum] = useState<number>(0);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     async function fetchData() {
//       const dataCollection = collection(db, collectionName);
//       const dataSnapshot = await getDocs(dataCollection);
//       let total = 0;
//       dataSnapshot.forEach((doc) => {
//         const data = doc.data();
//         total += data[fieldName];
//       });
//       setDataSum(total);
//       setIsLoading(false);
//     }

//     fetchData();
//   }, [collectionName, fieldName]);

//   return { dataSum, isLoading };
// }

// export default useMoney;
import { useState, useEffect, SetStateAction } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

function useTabs(collectionName: string) {
  const [tabsData, setTabsData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const tabsCollection = collection(db, collectionName);
      const dataSnapshot = await getDocs(tabsCollection);
      const tabs: SetStateAction<any[]> = [];
      dataSnapshot.forEach((doc) => {
        const data = doc.data();
        tabs.push(data);
      });
      setTabsData(tabs);
      setIsLoading(false);
    }

    fetchData();
  }, [collectionName]);

  return { tabsData, isLoading };
}

export default useTabs;
