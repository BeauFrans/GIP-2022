import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

export default function UserList() {
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
}
