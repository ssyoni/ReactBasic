import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// 리액트 돔을 렌더 할 때 'root'라는 이름의 element를 가져와서 App 컴포넌트를 그리겠다는 뜻 

serviceWorker.unregister();
