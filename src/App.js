import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Header from "./components/header/header"
import Routes from "./pages/routes"

// Styles
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes />
        
      </Router>
    </div>
  )
}

export default App
