import React from "react"
import Footers from "./contents/Footer.jsx"
import MainContent from "./contents/Main.jsx"
import Img from "./contents/Img.jsx"
import "./App.css"
export default function App(){
  return (
        <div className="App">
          <Img />
          <MainContent />
          <Footers />
        </div>
  )
}