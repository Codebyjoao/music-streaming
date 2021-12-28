import React from "react"
import { Header } from './components/Header';
import { List } from "./components/List/List";
import { Search } from "./components/Search";

import './styles/app.scss'

function App() {
  return(
    <div>
      <Header/>
      <Search/>
      <List/>
      <div>

      </div>
    </div>
  )
}

export default App
