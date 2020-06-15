import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import GallerySlider from '../../../components/Sections/GallerySlider/'

import './styles.scss';

const Paddock = (props) => {
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

    return (
        <section className="Paddock page-interna mb-2 mb-lg-5">
            <div className="container sm">
                <div className="markup mb-4 mb-lg-5">
                    <h2>
                        Paddock
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={require('../../../assets/images/thumbs/s-p-1.png')} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup wow">
                    <p>
                        O Paddock foi criado inicialmente por Lucia Faria e Antonio Alegria Simões como
                        um centro de treinamento equestre, nos moldes dos principais manèges da Europa.
                        Como o terreno era bastante extenso e de difícil manutenção, o casal resolveu
                        lotear a propriedade para transformá-lo num condomínio equestre em 1995, e foi
                        ali que o empresário Chiquinho Brandão adquiriu os primeiros lotes para a
                        construção do sítio Santo Antônio.
                    </p>

                    <p>
                        Em pouco tempo, Chiquinho tornou-se também síndico do Paddock, cargo que exerce
                        até hoje, mais de 20 anos depois. Além da paixão pelos animais, especialmente
                        pelos cavalos, Chiquinho tem obsessão pela qualidade em tudo que faz, tratando
                        assim o condomínio com o mesmo cuidado e atenção com que cuida do sítio e
                        imprimindo esse mesmo padrão em todas as instalações, das cocheiras até as
                        pistas de treinamento, incluindo uma estrutura de iluminação subterrânea e todos
                        os detalhes de acabamento.
                    </p>

                    <div className="position-relative px-lg-4 mt-5 pt-lg-3 pb-lg-3">
                        <div className="img-legenda legenda-1">
                            Rodrigo Ullmann Lima saltando no Paddock com Kent do Santo Antônio.
                        </div>
                        <img src={require('../../../assets/images/thumbs/s-p-2.png')} alt=""/>
                    </div>

                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote>
                        “A gente desenvolveu uma dinâmica muito interessante na construção do
                        loteamento e o Chico acabou virando naturalmente o líder do nosso grupo, pela
                        dedicação, pela obsessão por qualidade, por fazer bem feito, com um
                        perfeccionismo inacreditável. Hoje o Paddock é um centro equestre de padrão
                        internacional.”
                    </blockquote>
                    <sm className="author">
                        - João Roberto Marinho
                    </sm>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <p>
                        Desse modo, o empresário vem implementando junto com os outros condôminos
                        diversas melhorias ao longo dos anos, tanto na sede social e nos equipamentos
                        quanto nas instalações para os cavalos e para os tratadores – além de cuidar de
                        todo o reflorestamento do condomínio, seguindo o projeto ambiental do sítio.
                        Atualmente, o Paddock é um centro equestre de nível internacional, com pistas de
                        treinamento e de competição que não ficam nada a dever às melhores do mundo.</p>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4 pt-lg-5">
                <img
                    src={require('../../../assets/images/ico/camera.png')}
                    class="ico-camera"
                    alt="Ícone camera"/>
            </div>

            <div className="container pt-5">
            <GallerySlider items={[
                    {
                        imagem: require('../../../assets/images/thumbs/s-p-3.png')
                    }
                ]}/>
            </div>
            {/* <VideoPlayer /> */}
        </section>
    )
}

export default Paddock;