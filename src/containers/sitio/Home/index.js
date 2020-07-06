import axios from 'axios.instance'
import React, {useState, useEffect, useMemo} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {Link} from 'react-router-dom';

import './styles.scss';
import brandImage from '../../../assets/images/brands/capa.svg';
import Preloader from 'components/UI/Preloader';

const Home = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({slides: false});
    const [currIndex,
        setCurrIndex] = useState(0);
    const [isAutomatic,
        setIsAutomatic] = useState(true);
    const [isToggled,
        setIsToggled] = useState(false);
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
          if(getStorage('home-sitio-data')){
              setIsFetching(false);
              console.log(JSON.parse(getStorage('home-sitio-data')))
              return setData(JSON.parse(getStorage('home-sitio-data')))
          }
    
          axios.get('sitio/slides', config)
          .then(response => {
              setData(response.data);
              setCurrIndex(0)
              setStorage('home-sitio-data', JSON.stringify(response.data));
          })
          .catch(err => console.log(err))
          .finally(() => {
              setIsFetching(false);
          })
        } ,[config]);

    const updateState = (index, automatic) => {
        setCurrIndex(index)

        if (!automatic) {
            setIsAutomatic(false);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isAutomatic) {
                updateState(currIndex === data.slides.length - 1
                    ? 0
                    : currIndex + 1, true)
            }
        }, 4000);
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
        <section className="Home-S" key="historia-slider">
            {data.slides.map((i, index) => (
                <div
                    className=
                    { `Home-S__bg historia-slider item-${index} ${currIndex === index ? 'active' : ''}` }
                    style={{
                    backgroundImage: `url(data:image/png;base64,${i.image})`
                }}></div>
            ))}

            <div className="Home-S__nav">
                {data.slides.map((_, i)=> (
                    <button
                        key={i}
                        className={currIndex === i
                        ? 'active'
                        : ''}
                        onClick={() => updateState(i)}></button>
                ))}
            </div>

            <div className="Home-S__caption">
                <h1 className="Home-S__caption-title">
                    Sítio
                </h1>

                <div className="Home-S__caption-div"></div>
                <Link to="/" className="Home-S__caption-brand">
                    <img src={brandImage} alt="Logomarca Santo Antônio"/>
                </Link>
            </div>

            <nav className="Home-S__menu">
                <div className="Home-S__menu-list" data-show={isToggled}>
                    <Link to="/sitio/historia" className="Home-S__menu-item">
                        <span className="title">História</span>
                        <span className="desc">A história do Sítio <br class="d-none d-lg-block"/>Santo Antônio</span>
                    </Link>
                    <Link to="/sitio/quemsomos" className="Home-S__menu-item">
                        <span className="title">Quem Somos</span>
                        <span className="desc">Descrição lorem ipsum</span>
                    </Link>
                    <Link to="/sitio/paddock" className="Home-S__menu-item">
                        <span className="title">Paddock</span>
                        <span className="desc">Centro de treinamento<br class="d-none d-lg-block"/> equestre</span>
                    </Link>
                    <Link to="/sitio/fauna" className="Home-S__menu-item">
                        <span className="title">Fauna</span>
                        <span className="desc">Santuário<br class="d-none d-lg-block"/> de animais</span>
                    </Link>
                    <Link to="/sitio/flora" className="Home-S__menu-item">
                        <span className="title">Flora</span>
                        <span className="desc">Recuperação e <br class="d-none d-lg-block"/> preservação da natureza</span>
                    </Link>
                    <Link to="/sitio/tour" className="Home-S__menu-item">
                        <span className="title">Tour</span>
                        <span className="desc">Faça um tour por <br class="d-none d-lg-block"/>cada setor do sítio</span>
                    </Link>
                </div>
            </nav>

            <button className="Home-S__toggler" data-isClose={isToggled} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className="Home-S__toggler-bg" data-expanded={isToggled}></div>
        </section>
        </>
        : null }
        </>
    )
}

export default Home;