import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

import GallerySlider from '../../../components/Sections/GallerySlider/'

const Tour = (props) => {
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
        <section className="Flora page-interna mb-2 mb-lg-5">
            <div className="container sm">
                <div className="markup mb-4 mb-lg-5">
                    <h2>
                        Flora
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={require('../../../assets/images/thumbs/s-fl-1.png')} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <p>
                        No início, o terreno era praticamente um descampado. Só havia mato: taquaruçu,
                        arranha-gato, uma vegetação rasteira, nos moldes dos outros morros da região. A
                        terra, devastada pelas constantes queimadas, não era muito indicada para o
                        plantio, e as primeiras tentativas de fato não deram muito certo. Foi necessária
                        uma intensa fertilização do solo, partindo da matéria orgânica produzida pelos
                        cavalos, para que as plantas começassem a vingar de vez.
                    </p>

                    <p>
                        Com o tempo, as árvores foram crescendo e aquele descampado deu lugar a uma
                        verdadeira floresta. Na parte mais antiga do terreno, a mata já se regenera
                        sozinha e o próprio clima se modificou, com mais umidade e uma temperatura mais
                        amena à sombra das árvores.
                    </p>

                    <div className="position-relative px-lg-5 mt-5 pt-lg-3 pb-lg-5">
                        <img src={require('../../../assets/images/thumbs/s-fl-2.png')} alt=""/>
                    </div>

                    <p>
                        Com milhares de mudas das mais variadas espécies plantadas até hoje, o sítio
                        Santo Antônio pode ser considerado um verdadeiro parque ecológico. De um lado
                        sempre houve uma preocupação estética no arranjo e no cuidado com as plantações,
                        e de outro o foco principal do plantio sempre foi o de fornecer a maior
                        quantidade possível de alimento para os bichos.
                    </p>

                    <div className="position-relative px-lg-5 mt-5 pt-lg-4 pb-lg-5">
                        <img src={require('../../../assets/images/thumbs/s-fl-3.png')} alt=""/>
                    </div>

                    <p>
                        Tem palmeiras de vários tipos, como jerivás e rabos-de-raposa, tem ipês e
                        eucaliptos, tem amora, abacate, manga, jaca, pitanga, nêspera, goiaba, graviola,
                        jambo, jabuticaba, mamão, banana, uma lista sem fim de árvores frutíferas; tem
                        muito café, tem pau-brasil, tem árvores exóticas e decorativas, como as
                        espatódeas, e uma infinidade de orquídeas e bromélias que ajudam a embelezar o
                        lugar. Andar pelos caminhos do sítio é uma experiência única, com sua
                        exuberância de cores, cheiros e gostos a cada nova trilha.
                    </p>

                </div>
            </div>

            <div className="container">
                <div className="galeria py-4 py-lg-5 my-lg-4">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-4 pr-lg-0 pl-lg-5">
                                <div className="row pl-lg-4">
                                    <div className="col-lg-2"></div>
                                    <div className="col-lg-10 mb-lg-3">
                                        <img src={require('../../../assets/images/thumbs/s-fl-4.png')} alt=""/>
                                    </div>
                                    <div className="col-lg-12">
                                        <img src={require('../../../assets/images/thumbs/s-fl-7.png')} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <img src={require('../../../assets/images/thumbs/s-fl-5.png')} className="mb-lg-3" alt=""/>
                                <img src={require('../../../assets/images/thumbs/s-fl-8.png')} alt=""/>
                            </div>
                            <div className="col-lg-4 pl-lg-0 pt-lg-5">
                                <div className="row pt-lg-5 mt-lg-5">
                                    <div className="col-lg-7 pt-lg-5 mt-lg-5">
                                        <img src={require('../../../assets/images/thumbs/s-fl-6.png')} className="pt-lg-5 mt-lg-5" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4 pt-lg-5">
                <img
                    src={require('../../../assets/images/ico/camera.png')}
                    class="ico-camera"
                    alt="Ícone camera"/>
            </div>

            <div className="container pt-5">
                <GallerySlider
                    items={[
                    {
                        imagem: require('../../../assets/images/thumbs/s-fl-9.png')
                    }, {
                        imagem: require('../../../assets/images/thumbs/s-fl-8.png')
                    }
                ]}/>
            </div>
            {/* <VideoPlayer /> */}
        </section>
    )
}

export default Tour;