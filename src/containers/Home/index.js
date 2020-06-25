import axios from 'axios.instance'
import React, {useState, useEffect, useMemo} from 'react'
import {getStorage, setStorage} from 'util/storage';
import {Link} from 'react-router-dom';

import './styles.scss';

import brandImg from '../../assets/images/brands/capa.svg'
import Preloader from 'components/UI/Preloader';

const Home = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({page: {dados: false}});
    const [loadingPercentage, setLoadingPercentage] = useState(1);

        const config = useMemo(() => ({
            onDownloadProgress: progressEvent => {
                const usualUploadSize = 6136058;
                const total = progressEvent.srcElement.getResponseHeader('Real-Content-Length') || usualUploadSize;
                let percentCompleted = Math.round((progressEvent.loaded * 100) / total);
                percentCompleted = percentCompleted === 100 ? 99 : percentCompleted;
                setLoadingPercentage(percentCompleted);
            }
        }), []);
    
        useEffect( () =>{
          if(getStorage('home-data')){
              setIsFetching(false);
              console.log(JSON.parse(getStorage('home-data')))
              return setData(JSON.parse(getStorage('home-data')))
          }
    
          axios.get('/pages/home', config)
          .then(response => {
              setData(response.data);
              setStorage('home-data', JSON.stringify(response.data));
          })
          .catch(err => console.log(err))
          .finally(() => {
              setIsFetching(false);
          })
        } ,[config]);

    const [hasHover,
        setHasHover] = useState(false);
    const [canHover,
        setCanHover] = useState(true);

    const toggleHover = (opt) => {

        if (!opt) {
            setCanHover(false)
            setHasHover(false)
            setTimeout(() => setCanHover(true), 200)
        }

        if (canHover) {
            if (opt === 'left') {
                setHasHover('left');
            } else if (opt === 'right') {
                setHasHover('right');
            }
        }
    }

    return (
        <>
        <Preloader show={isFetching} loadProgress={loadingPercentage}/>
        {data.page.dados ? 
        <>
        <section className="Home page-interna">
                <div
                    class="Home__side left"
                    data-canHover={canHover}
                    onMouseEnter={() => toggleHover('left')}
                    onMouseLeave={() => toggleHover(false)}>
                    <img className="background" src={`data:image/png;base64,${data.page.dados.banner_home_sitio}`}/>
                    <Link to="/sitio" className="Home__side-title">
                        Sítio
                    </Link>
                </div>
                <div
                    className="Home__side right"
                    data-canHover={canHover}
                    onMouseEnter={() => toggleHover('right')}
                    onMouseLeave={() => toggleHover(false)}>
                    <img className="background" src={`data:image/png;base64,${data.page.dados.banner_home_equipe}`}/>
                    <Link to="/hipica" className="Home__side-title">
                        Equipe Hípica
                    </Link>
                </div>
                <div
                    className="Home__center"
                    data-hasHover={canHover
                    ? hasHover
                    : false}>
                    <div className="Home__center-top"></div>
                    <div className="Home__center-brand">
                        <img src={brandImg} alt="Logomarca Santo Antônio"/>
                    </div>
                    <div className="Home__center-middle"></div>
                    <div className="Home__center-bottom"></div>
                </div>
            </section>
        </> : null}
        </>
    )
}

export default Home;