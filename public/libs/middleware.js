import { compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'

export default compose(
  applyMiddleware(
    thunkMiddleware
  ),
  window.devToolsExtension ? window.devToolsExtension() : undefined
)