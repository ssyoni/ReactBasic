import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// root element에 App 컴포넌트를 렌더링 하겠다는 뜻 
serviceWorker.unregister();
