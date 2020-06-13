import React from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import PageTransition from 'react-router-page-transition'
import {Helmet} from "react-helmet"

// Import Containers (Pages)
import Home from 'containers/Home'
import Error404 from 'containers/Error/404'

// Hipica
import HipicaHome from 'containers/hipica/Home'
import HipicaHistoria from 'containers/hipica/Historia'
import HipicaEquipe from 'containers/hipica/Equipe'
import HipicaIntegrante from 'containers/hipica/Integrante'
import HipicaCavalos from 'containers/hipica/Cavalos'
import HipicaCavalo from 'containers/hipica/Cavalo'
import HipicaResultados from 'containers/hipica/Resultados'
import HipicaEventos from 'containers/hipica/Eventos'
import HipicaMidia from 'containers/hipica/Midia'

// Sitio
import SitioHome from 'containers/sitio/Home'
import SitioHistoria from 'containers/sitio/Historia'
import SitioQuemSomos from 'containers/sitio/Quemsomos'
import SitioPaddock from 'containers/sitio/Paddock'
import SitioFauna from 'containers/sitio/Fauna'
import SitioFlora from 'containers/sitio/Flora'
import SitioTour from 'containers/sitio/Tour'

const AppRouter = ({location}) => {
    const routes = [
        {
            path: '/',
            name: 'Home',
            Component: Home,
            exact: true
        },

        // Hipica
        {
            path: '/hipica',
            name: 'Hípica',
            Component: HipicaHome,
            exact: true

        },
        {
            path: '/hipica/historia',
            name: 'História',
            Component: HipicaHistoria,
            exact: true

        }, {
            path: '/hipica/equipe',
            name: 'Equipe',
            Component: HipicaEquipe,
            exact: true

        },{
            path: '/hipica/integrante',
            name: 'Integrante',
            Component: HipicaIntegrante,
            exact:false

        }, {
            path: '/hipica/cavalos',
            name: 'Cavalos',
            Component: HipicaCavalos,
            exact: true

        }, {
            path: '/hipica/cavalo',
            name: 'Cavalo',
            Component: HipicaCavalo,
            exact: false
        }, {
            path: '/hipica/resultados',
            name: 'Resultados',
            Component: HipicaResultados,
            exact: true
        }, {
            path: '/hipica/eventos',
            name: 'Eventos',
            Component: HipicaEventos,
            exact: true
        }, {
            path: '/hipica/midia',
            name: 'Midia',
            Component: HipicaMidia,
            exact: true
        },

        // Sitio
        {
            path: '/sitio',
            name: 'Sítio',
            Component: SitioHome,
            exact: true
        },
        {
            path: '/sitio/historia',
            name: 'Histõria',
            Component: SitioHistoria,
            exact: true
        },
        {
            path: '/sitio/quemsomos',
            name: 'Quem Somos',
            Component: SitioQuemSomos,
            exact: true
        },
        {
            path: '/sitio/paddock',
            name: 'Paddock',
            Component: SitioPaddock,
            exact: true
        },
        {
            path: '/sitio/fauna',
            name: 'Fauna',
            Component: SitioFauna,
            exact: true
        },
        {
            path: '/sitio/flora',
            name: 'Flora',
            Component: SitioFlora,
            exact: true
        }, 
        {
            path: '/sitio/tour',
            name: 'Tour',
            Component: SitioTour,
            exact: true
        }

        ,{
            path: '/',
            name: 'Erro 404',
            Component: Error404,
            exact: false
        },
    ];
    
    return (
        <PageTransition timeout={800}>
            <Switch location={location}>
                {routes.map(({path, Component, name, exact}) => (
                    <Route key={name} exact={exact} path={path}>
                        <div className="page transition-item">
                            <Helmet>
                                <title>Santo Antônio • {name}</title>
                            </Helmet>
                            <Component/>
                        </div>
                    </Route>
                ))}
            </Switch>
        </PageTransition>
    )
}

export default withRouter(AppRouter);
