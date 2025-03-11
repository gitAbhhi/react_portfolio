import mdb from "../assets/mdb.png"
import react from "../assets/react.png"
import express from "../assets/ex.png"
import node from "../assets/nodejs.png"
import java from "../assets/java.png"
import python from "../assets/python.png"
import postman from "../assets/postman.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import mysql from "../assets/mysql.png"
import Jupyter from "../assets/jupyter.png"
import linux from "../assets/linux.png"
import colab from "../assets/colab.png"
import figma from "../assets/figma.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import vercel from "../assets/vercel.png"


const skill_data=[
    {
        category:"Frontend",
        technologies:["HTML","CSS","Tailwind CSS","Bootstrap","Reactjs"],
        image:[html,css,tailwind,bootstrap,react]
    },
   
      {
        category: "Backend",
        technologies: ["MongoDB","MySQL","Expressjs","Nodejs","Java"],
        image:[mdb,mysql,express,node,java]
      },
      {
        category: "Machine Learning",
        technologies: ["Python","Jupyter","Google Colab"],
        image:[python,Jupyter,colab]
      },
      {
        category: "Others",
        technologies: ["postman","Linux","Figma","Git","GitHub","Vercel"],
        image:[postman,linux,figma,git,github,vercel]
      },

]
export default skill_data;