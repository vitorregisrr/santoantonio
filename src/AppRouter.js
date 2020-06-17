import React, {Suspense} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import PageTransition from 'react-router-page-transition'
import {Helmet} from "react-helmet"

import Spinner from './components/UI/Spinner/Spinner'
// Import Containers (Pages)
const Home = React.lazy(() => import ('containers/Home'))
const Error404 = React.lazy(() => import ('containers/Error/404'))

// Hipica
const HipicaHome = React.lazy(() => import ('containers/hipica/Home'))
const HipicaHistoria = React.lazy(() => import ('containers/hipica/Historia'))
const HipicaEquipe = React.lazy(() => import ('containers/hipica/Equipe'))
const HipicaIntegrante = React.lazy(() => import ('containers/hipica/Integrante'))
const HipicaCavalos = React.lazy(() => import ('containers/hipica/Cavalos'))
const HipicaCavalo = React.lazy(() => import ('containers/hipica/Cavalo'))
const HipicaResultados = React.lazy(() => import ('containers/hipica/Resultados'))
const HipicaEventos = React.lazy(() => import ('containers/hipica/Eventos'))
const HipicaMidia = React.lazy(() => import ('containers/hipica/Midia'))

// Sitio
const SitioHome = React.lazy(() => import ('containers/sitio/Home'))
const SitioHistoria = React.lazy(() => import ('containers/sitio/Historia'))
const SitioQuemSomos = React.lazy(() => import ('containers/sitio/Quemsomos'))
const SitioPaddock = React.lazy(() => import ('containers/sitio/Paddock'))
const SitioFauna = React.lazy(() => import ('containers/sitio/Fauna'))
const SitioFlora = React.lazy(() => import ('containers/sitio/Flora'))
const SitioTour = React.lazy(() => import ('containers/sitio/Tour'))

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

        }, {
            path: '/hipica/historia',
            name: 'História',
            Component: HipicaHistoria,
            exact: true

        }, {
            path: '/hipica/equipe',
            name: 'Equipe',
            Component: HipicaEquipe,
            exact: true

        }, {
            path: '/hipica/integrante',
            name: 'Integrante',
            Component: HipicaIntegrante,
            exact: false

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
        }, {
            path: '/sitio/historia',
            name: 'Histõria',
            Component: SitioHistoria,
            exact: true
        }, {
            path: '/sitio/quemsomos',
            name: 'Quem Somos',
            Component: SitioQuemSomos,
            exact: true
        }, {
            path: '/sitio/paddock',
            name: 'Paddock',
            Component: SitioPaddock,
            exact: true
        }, {
            path: '/sitio/fauna',
            name: 'Fauna',
            Component: SitioFauna,
            exact: true
        }, {
            path: '/sitio/flora',
            name: 'Flora',
            Component: SitioFlora,
            exact: true
        }, {
            path: '/sitio/tour',
            name: 'Tour',
            Component: SitioTour,
            exact: true
        }, {
            path: '/',
            name: 'Erro 404',
            Component: Error404,
            exact: false
        }
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
                            <Suspense fallback={<Spinner fullscreen />}>
                                <Component/>
                            </Suspense>
                        </div>
                    </Route>
                ))}
            </Switch>
        </PageTransition>
    )
}

export default withRouter(AppRouter);
