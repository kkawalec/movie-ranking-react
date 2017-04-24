/* eslint-disable global-require, import/no-extraneous-dependencies */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'
import Routes from './Routes'

import '../sass/app.scss'

const env = process.env.NODE_ENV || 'development'

/*
 * Axios default, login user and set app language
 */
const history = syncHistoryWithStore(browserHistory, store)

const router = (
  <AppContainer>
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
  </AppContainer>
)

const rootFolder = document.getElementById('app')

ReactDOM.render(router, rootFolder)


if (env === 'development' && module.hot) {
  module.hot.accept('./store/mainReducer', () => {
    const nextRootReducer = require('./store/mainReducer').default
    store.replaceReducer(nextRootReducer)
  })

  module.hot.accept('./main/App', () => {
    const NextApp = require('./main/App').default
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootFolder,
    )
  })

  module.hot.accept()
}
