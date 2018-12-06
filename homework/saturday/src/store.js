import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

export default store;

