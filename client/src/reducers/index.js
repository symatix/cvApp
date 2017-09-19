import { combineReducers } from 'redux'
import clientReducer from './clientReducer'
import docsReducer from './docsReducer'
import servicesReducer from './servicesReducer'
import contactReducer from './contactReducer'

export default combineReducers({
  client: clientReducer,
  docs: docsReducer,
  contact: contactReducer,
  services: servicesReducer
});
