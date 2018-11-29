import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Provider store={store}>
                <App />
                </Provider>, document.getElementById('root'));

serviceWorker.unregister();