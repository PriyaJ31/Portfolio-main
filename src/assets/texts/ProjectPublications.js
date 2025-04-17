import smartSurveillance from "../img/smart-surve.jpg";
import foodSurvey from "../img/food-survey.jpg";

import Portfolio from "../img/project/portfolio.png";
import AlgorithmVisualizer from "../img/project/algorithm visualizer.avif";
import WeatherCheck from "../img/project/weatherApp.jpg";
import Tetris from "../img/project/tetris.jpg";
import EcommerceApp from "../img/project/ecomm.jpg";
import TypingSpeedTest from "../img/project/type.jpg";

import BankingSystem from "../img/project/banking.avif";
import Todo from "../img/project/todo.avif";
import Sudoku from "../img/project/sudolu.avif";
import EcommerceWebsite from "../img/project/ecomm2.avif";

// Project and Publication data
export const publications = [
    { 
        title: "Smart Surveillance System Using Face Detection for Residentials",
        Publisher: "IEEE",
        link: "https://ieeexplore.ieee.org/document/9825346", 
        imgUrl: smartSurveillance
    },
    { 
        title: "A Survey Paper on Food Sensor Technologies and their process",
        Publisher: "IEEE",
        link: "https://ieeexplore.ieee.org/document/9388523",
        imgUrl: foodSurvey
    }  
];

export const frontend_projects = [
    { title: "Personal Portfolio Website", description: "React.js + HTML + CSS + Bootstrap + node", imgUrl: Portfolio },
    { title: "Algorithm Visualizer", description: "React.js + JS + DSA", imgUrl: AlgorithmVisualizer },
    { title: "Weather Check", description: "React.js + HTML + CSS", imgUrl: WeatherCheck },
    { title: "Tetris Game", description: "HTML + CSS + JS", imgUrl: Tetris },
    { title: "Typing Speed Test", description: "React.JS + HTML + CSS + JS", imgUrl: TypingSpeedTest },
    { title: "Ecommerce Website", description: "React.js + JS + HRML + CSS", imgUrl: EcommerceApp },
  ];

  export const backend_projects = [
    { title: "Banking System", description: "Java + Spring boot +MySQL", imgUrl: BankingSystem },
    { title: "To Do List", description: "Java + Spring boot + HTML", imgUrl: Todo },
    { title: "Sudoku", description: "CPP", imgUrl: Sudoku },
    { title: "Ecommerce website", description: "Python + Django", imgUrl: EcommerceWebsite },
  ];