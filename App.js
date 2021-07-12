import React, { Component } from 'react'
import Routes from './src/Navigation/Routes';

import {Provider} from 'react-redux'
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Routes/>
      </Provider>
    )
  }
}
