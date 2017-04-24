import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux'

import mainReducer from './mainReducer'

const env = process.env.NODE_ENV || 'development'

const enhancer = env === 'development' ? compose(
   applyMiddleware(thunk, routerMiddleware(browserHistory)),
   window.devToolsExtension ? window.devToolsExtension() : f => f,
) : compose(applyMiddleware(thunk, routerMiddleware(browserHistory)))

const store = createStore(mainReducer, enhancer)

export default store
