import React from "react";
import "./GridView.css";
const GridView = () => {
  let students = [
    {
      name: "MADHU",
      phone: "+1234567890",
      age: 20,
      content: "Computer Science student at RVS Engineering College",
      cgpa: 8.5,
    },
    {
      name: "POOJA",
      phone: "+1987654321",
      age: 21,
      content:
        "Electronics and Communication student at RVS Engineering College",
      cgpa: 8.8,
    },
    {
      name: "PAARU",
      phone: "+1122334455",
      age: 22,
      content: "Mechanical Engineering student at RVS Engineering College",
      cgpa: 7.9,
    },
    {
      name: "MANOJ",
      phone: "+1555666777",
      age: 20,
      content: "Civil Engineering student at RVS Engineering College",
      cgpa: 8.2,
    },
    {
      name: "MADHAN",
      phone: "+1444333222",
      age: 23,
      content: "Information Technology student at RVS Engineering College",
      cgpa: 9.0,
    },
    {
      name: "GOBIKA",
      phone: "+1666777888",
      age: 21,
      content:
        "Electrical and Electronics Engineering student at RVS Engineering College",
      cgpa: 8.7,
    },
    {
      name: "MEENU",
      phone: "+1777888999",
      age: 22,
      content: "Computer Science student at RVS Engineering College",
      cgpa: 8.4,
    },
    {
      name: "GIFLIN",
      phone: "+1888999000",
      age: 20,
      content: "Biomedical Engineering student at RVS Engineering College",
      cgpa: 8.6,
    },
    {
      name: "MATHI",
      phone: "+1999000111",
      age: 23,
      content: "Automobile Engineering student at RVS Engineering College",
      cgpa: 7.8,
    },
    {
        name: "ASHIK",
        phone: "+1999000111",
        age: 23,
        content: "Automobile Engineering student at RVS Engineering College",
        cgpa: 7.8,
      },
    {
      name: "LOKESH",
      phone: "+1222111333",
      age: 21,
      content:
        "Artificial Intelligence and Data Science student at RVS Engineering College",
      cgpa: 9.1,
    },
  ];

  return (
    <div className="grid-view">
      {students.map((students, index) => (
        <div className="student" key={index}>
          <h2>{students.name}</h2>
          <p>Phone: {students.phone}</p>
          <p>Age: {students.age}</p>
          <p>Content: {students.content}</p>
          <p>CGPA: {students.cgpa}</p>
        </div>
      ))}
    </div>
  );
};

export default GridView;