import React, { Fragment, useState } from 'react';
import Spacer from '../components/global/space';
import TestBreadCrumb from '../components/local/test/breadcrumb';
import TestHeader from '../components/local/test/header';
import TestMainLayout from '../components/local/test/mainlayout';
import GlobalNavbar from '../components/local/test/navbar';

const Index = () => {
    return (
        <Fragment>
            {/* Navbar Component */}
            <GlobalNavbar /> 

            <Spacer b={41} />

            {/* TestHeader Component */}
            <TestHeader />

            <Spacer b={36} />

            {/* BreadCrumb Component */}
            <TestBreadCrumb />

            <Spacer b={60} />

            {/* Main Layout Component */}
            <TestMainLayout />
            
        </Fragment>
        
    );
};

export default Index;