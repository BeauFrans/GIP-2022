import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

export default function UserList() {
  // Initialize Firebase
  const firebaseConfig = {
    // Your Firebase configuration
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const PeopleList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      // Fetch data from Firebase
      const fetchData = async () => {
        const db = firebase.firestore();
        const snapshot = await db
          .collection("antwoorden")
          .doc("evaluationId")
          .get();
        const data = snapshot.data();
        const userIds = Object.keys(data);

        const peopleData = await Promise.all(
          userIds.map(async (userId) => {
            const userSnapshot = await db.collection("users").doc(userId).get();
            const userData = userSnapshot.data();
            return userData;
          })
        );

        setPeople(peopleData);
      };

      fetchData();
    }, []);

    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">People List</h1>
        <ul className="bg-white rounded-lg shadow-lg p-4">
          {people.map((person) => (
            <li key={person.userId} className="py-2">
              <span className="font-semibold">{person.name}</span>
              <span className="ml-2 text-gray-500">{person.email}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
}
