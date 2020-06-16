import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';
import {Link} from 'react-router-dom';

import './styles.scss';

import brandImg from '../../assets/images/brands/capa.svg'
import bgSitio from '../../assets/images/backgrounds/home-sitio.png'
import bgHipica from '../../assets/images/backgrounds/home-hipica.png'

const Home = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);

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

    const [hasHover, setHasHover] = useState(false);
    const [canHover, setCanHover] = useState(true);

    const toggleHover = (opt) => {
        
        if(!opt){
            setCanHover(false)
            setHasHover(false)
            setTimeout(() => setCanHover(true), 400)
        }
        
        if(canHover){
            if(opt === 'left'){
                setHasHover('left');
            }else if(opt === 'right'){
                setHasHover('right');
            }
        }
    }

    return (
        <section className="Home page-interna">
            <div class="Home__side left" data-canHover={canHover } onMouseEnter={() => toggleHover('left')} onMouseLeave={() => toggleHover(false)}>
                <img
                    className="background"
                    src={bgSitio}/>
                <Link to="/sitio" className="Home__side-title">
                    Sítio
                </Link>
            </div>
            <div className="Home__side right" data-canHover={canHover} onMouseEnter={() => toggleHover('right')} onMouseLeave={() => toggleHover(false)}>
            <img
                    className="background"
                    src={bgHipica}/>
                <Link to="/hipica" className="Home__side-title">
                    Equipe Hípica
                </Link>
            </div>
            <div className="Home__center" data-hasHover={canHover ? hasHover : false}>
                <div className="Home__center-top"></div>
                <div className="Home__center-brand">
                    <img src={brandImg} alt="Logomarca Santo Antônio"/>
                </div>
                <div className="Home__center-middle"></div>
                <div className="Home__center-bottom"></div>
            </div>
        </section>
    )
}

export default Home;