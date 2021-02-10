import React from 'react';
import { Container } from '@material-ui/core';

const GlobalContainer = ({children}) => {
	return (
		<div style={styles.topLevel}>
			<div style={styles.wrapper}>
			<Container maxWidth="lg">
				{children}
			</Container>
			</div>
		</div>
	);
};

const styles = {
	topLevel: {
		width: '100%'
	},
	wrapper: {
		maxWidth: '1198px',
		margin: 'auto'
	}
};

export default GlobalContainer;