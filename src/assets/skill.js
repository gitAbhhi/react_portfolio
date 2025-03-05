import mdb from "../assets/mdb.png"
import react from "../assets/react.png"
import express from "../assets/ex.png"
import node from "../assets/nodejs.png"
import java from "../assets/java.png"
import python from "../assets/python.png"
import postman from "../assets/postman.png"


const skill_data=[
    {
        category:"Mern Stack",
        technologies:["Mongodb","Reactjs","Expressjs","Nodejs"],
        image:[mdb,react,express,node]
    },
   
      {
        category: "Java Full stack",
        technologies: ["Java"],
        image:[java]
      },
      {
        category: "Machine Learning",
        technologies: ["Python"],
        image:[python]
      },
      {
        category: "Others",
        technologies: ["postman"],
        image:[postman]
      },

]
export default skill_data;