import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {Link} from 'react-router-dom';

import './styles.scss';
import bgImg from '../../../assets/images/backgrounds/home-sitio-1.png';
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

    useEffect(() => {
        if (getStorage('hipismo-data')) {
            setIsFetching(false);
            console.log(JSON.parse(getStorage('hipismo-data')))
            setData(JSON.parse(getStorage('hipismo-data')));
        } else {
            axios
                .get('/pages/hipismo')
                .then(response => {
                    setData(response.data);
                    setStorage('hipismo-data', JSON.stringify(response.data));
                })
                .catch(err => console.log(err))
                . finally(() => {
                    setIsFetching(false);
                })
        }
    }, []);

    const backgrounds = [bgImg, bgImg, bgImg, bgImg];
    const backgroundsMob = [bgImg, bgImg, bgImg, bgImg];

    const updateState = (index, automatic) => {
        switch (index) {
            case 0:
                setCurrIndex(0);
                break;

            case 1:
                setCurrIndex(1);
                break;

            case 2:
                setCurrIndex(2);
                break

            case 3:
                setCurrIndex(3);
                break
        }

        if (!automatic) {
            setIsAutomatic(false);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (isAutomatic) {
                updateState(currIndex === 2
                    ? 0
                    : currIndex + 1, true)
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [currIndex]);

    const toggleMenu = () => {
        setIsToggled(oldState => !oldState);
    }

    return (
        <section className="Home" key="historia-slider">

            {[0, 1, 2, 3].map(i => (
                <div
                    className=
                    { `Home__bg historia-slider item-${i} ${currIndex === i ? 'active' : ''}` }
                    style={{
                    backgroundImage: `url(${isMDScreen
                        ? backgrounds[i]
                        : backgroundsMob[i]})`
                }}></div>
            ))}

            <div className="Home__nav">
                {[0, 1, 2, 3].map(i => (
                    <button
                        key={i}
                        className={currIndex === i
                        ? 'active'
                        : ''}
                        onClick={() => updateState(i)}></button>
                ))}
            </div>

            <div className="Home__caption">
                <h1 className="Home__caption-title">
                    Sítio
                </h1>

                <div className="Home__caption-div"></div>
                <div className="Home__caption-brand">
                    <img src={brandImage} alt="Logomarca Santo Antônio"/>
                </div>
            </div>

            <nav className="Home__menu">
                <div className="Home__menu-list" data-show={isToggled}>
                    <Link to="/sitio/historia" className="Home__menu-item">
                        <span className="title">História</span>
                        <span className="desc">A história do Sítio <br class="d-none d-lg-block"/>Santo Antônio</span>
                    </Link>
                    <Link to="/sitio/quemsomos" className="Home__menu-item">
                        <span className="title">Quem Somos</span>
                        <span className="desc">Descrição lorem ipsum</span>
                    </Link>
                    <Link to="/sitio/paddock" className="Home__menu-item">
                        <span className="title">Paddock</span>
                        <span className="desc">Centro de treinamento<br class="d-none d-lg-block"/> equestre</span>
                    </Link>
                    <Link to="/sitio/fauna" className="Home__menu-item">
                        <span className="title">Fauna</span>
                        <span className="desc">Santuário<br class="d-none d-lg-block"/> de animais</span>
                    </Link>
                    <Link to="/sitio/flora" className="Home__menu-item">
                        <span className="title">Flora</span>
                        <span className="desc">Recuperação e <br class="d-none d-lg-block"/> preservação da natureza</span>
                    </Link>
                    <Link to="/sitio/tour" className="Home__menu-item">
                        <span className="title">Tour</span>
                        <span className="desc">Faça um tour por <br class="d-none d-lg-block"/>cada setor do sítio</span>
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
    )
}

export default Home;