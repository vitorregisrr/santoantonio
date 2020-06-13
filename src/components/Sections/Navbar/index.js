import React, {useState, useEffect} from 'react'
import {NavLink, withRouter, Link} from 'react-router-dom'

import brandImage from '../../../assets/images/brands/capa.svg'
import './styles.scss';

const Navbar = ({location}) => {
    const [isToggled,
        setIsToggled] = useState(false);
    const IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    const toggleMenu = () => {
        setIsToggled(!isToggled);
    }

    const sitioItems = [
        {
            key: '/sitio/historia',
            label: 'História'
        }, {
            key: '/sitio/quemsomos',
            label: 'Quem Somos'
        }, {
            key: '/sitio/paddock',
            label: 'Paddock'
        }, {
            label: 'Fauna',
            key: '/sitio/fauna'
        }, {
            label: 'Flora',
            key: '/sitio/flora'
        }, {
            label: 'Tour',
            key: '/sitio/tour'
        }
    ];

    const hipicaItems = [
        {
            key: '/sitio/historia',
            label: 'História'
        }, {
            key: '/sitio/quemsomos',
            label: 'Quem Somos'
        }, {
            key: '/sitio/paddock',
            label: 'Paddock'
        }, {
            label: 'Fauna',
            key: '/sitio/fauna'
        }, {
            label: 'Flora',
            key: '/sitio/flora'
        }, {
            label: 'Tour',
            key: '/sitio/tour'
        }
    ];

    return (
        <React.Fragment>
            <div
                className={`Navbar__toggler ${isToggled
                ? 'toggled'
                : ''}`}>
                <button
                    className={`${isToggled
                    ? 'active'
                    : ''} ${IOS
                        ? 'ios'
                        : ''}`}
                    onClick={() => toggleMenu()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                <NavLink className="Navbar__toggler-home" to="/">
                    <img src={brandImage} alt="Logomarca Santo Antonio"/>
                </NavLink>
            </div>
            <nav
                className={`Navbar ${isToggled
                ? 'toggled'
                : ''}`}>
                <div className="container">
                    <div
                        className={`Navbar__content ${isToggled
                        ? 'toggled'
                        : ''} ${IOS
                            ? 'ios'
                            : ''}`}>

                        <div className="Navbar__left">
                            <div className="Navbar__brand">
                                <NavLink to="/">
                                    <img src={brandImage} alt="Logomarca Santo Antonio"/>
                                </NavLink>
                            </div>

                            <div className="Navbar__div"></div>

                            <Link className="Navbar__caption">
                                Sítio
                            </Link>
                        </div>
                        <div className="Navbar__links">
                            {/sitio/.test(location.pathname) &&
                            (<>
                                {sitioItems.map((i, index) => (
                                    <NavLink
                                        data-key={i.key}
                                        className={`Navbar__item`}
                                        key={i.key}
                                        to={i.key}
                                        onClick={() => setIsToggled(false)}>
                                        {i.label}
                                    </NavLink>                                
                                ))}

                                <Link className={`Navbar__button`}
                                    to="/hipica">
                                    Conheça a Equipe Hípica
                                </Link>'
                            </>)}

                            {/hipica/.test(location.pathname) &&
                            (<>
                                {hipicaItems.map((i, index) => (
                                    <NavLink
                                        data-key={i.key}
                                        className={`Navbar__item`}
                                        key={i.key}
                                        to={i.key}
                                        onClick={() => setIsToggled(false)}>
                                        {i.label}
                                    </NavLink>                                
                                ))}

                                <Link className={`Navbar__button`}
                                    to="/sitio">
                                    Conheça o Sítio
                                </Link>'
                            </>)}
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default withRouter(Navbar);