import { combineReducers } from 'redux'
import clientReducer from './clientReducer'
import docsReducer from './docsReducer'
import servicesReducer from './servicesReducer'
import contactReducer from './contactReducer'
import resultReducer from './resultReducer'

export default combineReducers({
  client: clientReducer,
  docs: docsReducer,
  contact: contactReducer,
  result:resultReducer,
  services: servicesReducer
});
