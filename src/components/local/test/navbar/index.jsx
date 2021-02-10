import React, { Fragment } from 'react';
import GlobalContainer from '../../../global/container';
import Spacer from '../../../global/space';
import SelectorCurrency from './selectorcurrency';
import SelectorLang from './selectorlang';
import Icon from '@material-ui/core/Icon';

const GlobalNavbar = () => {
	return (
		<Fragment>
			<div style={styles.navbarWrap}>
				<GlobalContainer>
					<div style={{display: 'flex'}}>
						<div>
							<SelectorLang />
						</div>
						<Spacer r={20}/>
						<div>
							<SelectorCurrency />
						</div>
						<Spacer xstyle={{flex: 1}}/>
						<div className="csr-pointer" style={styles.rightWrapper}>
							<Icon>person_outline_rounded</Icon>
							<Spacer r={10}/>
							<p className="default" style={styles.paragraph}>My Profile</p>
						</div>
						<Spacer r={41}/>
						<div className="csr-pointer" style={styles.rightWrapper}>
							<Icon>local_mall_outlined</Icon>
							<Spacer r={10}/>
							<p className="default" style={styles.paragraph}>0 items</p>
						</div>
						<Spacer r={10}/>
						<div className="csr-pointer" style={styles.rightWrapper}>
							<p className="default" style={styles.paragraph}><span style={styles.semiTransparent}>$0.00</span></p>
						</div>
						<Spacer r={58}/>
						<div className="csr-pointer">
							<Icon>search</Icon>
						</div>
					</div>
				</GlobalContainer>
			</div>
		</Fragment>
	);
};

const styles = {
	navbarWrap: {
		boxShadow: '-2px 4px 4px 0px #FAFAFB',
		background: '#FFFFFF',
		paddingTop: '16px',
		paddingBottom: '16px',
		justifyContent: 'center',
		position: 'sticky',
		top: '0'
		
	},
	rightWrapper: {
		display: 'flex',
		justifyContent: 'center',
	},
	paragraph: {
		fontWeight: 400,
		letterSpacing: '0.35px',
		lineHeight: '16.8px',
		alignSelf: 'center'
	},
	semiTransparent: {
		opacity: 0.5
	}
};

export default GlobalNavbar;