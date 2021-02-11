import React, { Fragment } from 'react';
import { Divider, Icon, List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import SelectorCurrency from './selectorcurrency';
import SelectorLang from './selectorlang';

const GlobalDrawer = (props) => {
    const {open, onClose, onOpen} = props;

    return (
        <Fragment>
            <SwipeableDrawer
                anchor={'left'}
                open={open}
                onClose={onClose}
                onOpen={onOpen}
            >
                <div
                    style={{width: '100%'}}
                >
                    <List>
                        <ListItem>
                            <ListItemIcon><Icon>search</Icon></ListItemIcon>
                            <ListItemText primary='Search'/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Icon>local_mall_outlined</Icon></ListItemIcon>
                            <ListItemText primary='0 items - $0.00'/>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Icon>person_outline_rounded</Icon></ListItemIcon>
                            <ListItemText primary='My Profile'/>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem>
                            <SelectorCurrency/>
                        </ListItem>
                        <ListItem>
                            <SelectorLang/>
                        </ListItem>
                    </List>
                </div>
            </SwipeableDrawer>
        </Fragment>
    );
};

export default GlobalDrawer;