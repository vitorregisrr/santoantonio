import axios from 'axios.instance'
import React, {useState, useEffect, useMemo} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {Link} from 'react-router-dom';

import './styles.scss';
import Preloader from 'components/UI/Preloader';
import brandImage from '../../../assets/images/brands/capa.svg';

const Home = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);
    const [currIndex,
        setCurrIndex] = useState(0);
    const [isAutomatic,
        setIsAutomatic] = useState(true);
    const [isToggled,
        setIsToggled] = useState(false);
    // Variavel para testar breakpoint menor que 992px
    const [isMDScreen,
        setIsMDScreen] = useState(window.innerWidth < 778);
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
          if(getStorage('home-equipe-data')){
              setIsFetching(false);
              console.log(JSON.parse(getStorage('home-equipe-data')))
              return setData(JSON.parse(getStorage('home-equipe-data')))
          }
    
          axios.get('equipe/slides', config)
          .then(response => {
              setData(response.data);
              setStorage('home-equipe-data', JSON.stringify(response.data));
          })
          .catch(err => console.log(err))
          .finally(() => {
              setIsFetching(false);
          })
        } ,[config]);


    useEffect( () => {
        setCurrIndex(0);
    }, []);

    const updateState = (index, automatic) => {
        setCurrIndex(index);

        if (!automatic) {
            setIsAutomatic(false);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isAutomatic && data.slides && data.slides.length > 1) {
                updateState(currIndex + 1 === data.slides.length
                    ? 0
                    : currIndex + 1, true)
                }
            }, 5000);
            console.log('aaaaaaaa')
        return () => clearInterval(interval);
    }, [currIndex]);

    const toggleMenu = () => {
        setIsToggled(oldState => !oldState);
    }

    return (
        <>
        <Preloader show={isFetching} loadProgress={loadingPercentage}/>
        {data.slides ? 
        <>
        <section className="Home" key="historia-slider">
            {data.slides.map((i, index) => (
                <div
                    className=
                    { `Home__bg historia-slider item-${index} ${currIndex === index ? 'active' : ''}` }
                    style={{
                    backgroundImage: `url(data:image/png;base64,${i.image})`
                }}></div>
            ))}

            <div className="Home__nav">
            {   data.slides.map((_, i)=> (
                    <button
                        key={i}
                        className={currIndex === i
                        ? 'active'
                        : ''}
                        onClick={() => updateState(i)}></button>
                ))}
            </div>

            <div className="Home__caption">
                <div className="Home__caption-brand">
                    <img src={brandImage} alt="Logomarca Santo Antônio"/>
                </div>
                <div className="Home__caption-div"></div>
                <h1 className="Home__caption-title">
                    Equipe <br class="d-block d-lg-none"/> Hípica
                </h1>
            </div>

            <nav className="Home__menu">
                <div className="Home__menu-list" data-show={isToggled}>
                    <Link to="/hipica/historia" className="Home__menu-item">
                        <span className="title">História</span>
                        <span className="desc">Saiba como tudo começou</span>
                    </Link>
                    <Link to="/hipica/equipe" className="Home__menu-item">
                        <span className="title">Equipe</span>
                        <span className="desc">Os integrantes da nossa história</span>
                    </Link>
                    <Link to="/hipica/cavalos" className="Home__menu-item">
                        <span className="title">Cavalos</span>
                        <span className="desc">Nossos melhores amigos</span>
                    </Link>
                    <Link to="/hipica/resultados" className="Home__menu-item">
                        <span className="title">Resultados</span>
                        <span className="desc">Maiores <br class="d-none d-lg-block"/> conquistas</span>
                    </Link>
                    <Link to="/hipica/eventos" className="Home__menu-item">
                        <span className="title">Eventos</span>
                        <span className="desc">Principais concursos do ano</span>
                    </Link>
                    <Link to="/hipica/midia" className="Home__menu-item">
                        <span className="title">Mídia</span>
                        <span className="desc">O que estão falando da gente</span>
                    </Link>
                </div>
            </nav>

            <button className="Home__toggler" data-isClose={isToggled} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className="Home__toggler-bg" data-expanded={isToggled}></div>
        </section>
        </>
        : null }
        </>
    )
}

export default Home;