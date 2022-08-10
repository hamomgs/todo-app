import React, { Component } from 'react'
import { GlobalStyle } from './assets/styles/globalStyles.js'
import Main from './components/Main.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

export default class App extends Component {

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}