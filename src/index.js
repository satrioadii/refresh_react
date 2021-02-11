import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer/index';

import Index from './pages';

import 'react-input-range/lib/css/index.css';

import "./asset/css/index.css"; 
import "./asset/css/typography.css";
import "./asset/css/color.css";
import "./asset/css/cursor.css";
import "./asset/css/icon.css";
import "./asset/css/slider.css";

const reducers = createStore(reducer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={reducers}>
			<Index/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
