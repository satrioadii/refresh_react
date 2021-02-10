import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages';

import "./asset/css/index.css"; 
import "./asset/css/typography.css";
import "./asset/css/color.css";
import "./asset/css/cursor.css";


ReactDOM.render(
	<React.StrictMode>
		<Index/>
	</React.StrictMode>,
	document.getElementById('root')
);
