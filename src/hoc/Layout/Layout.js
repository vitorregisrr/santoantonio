import React from 'react'
import {withRouter} from 'react-router-dom'

import Navbar from '../../components/Sections/Navbar';
import Footer from '../../components/Sections/Footer';
import ScrollTop from 'components/UI/ScrollTop/ScrollTop';

const Layout = props => {
    const showTemplate = !['/', '/sitio', '/hipica'].includes(props.location.pathname)
    return (
        <React.Fragment>
            {showTemplate && <Navbar/>}
            <main>
                {props.children}
            </main>
            {showTemplate &&  <Footer/>}
            {showTemplate &&  <ScrollTop/>}
        </React.Fragment>
    )

}

export default withRouter(Layout);