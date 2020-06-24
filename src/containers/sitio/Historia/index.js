import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const Hipismo = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState({
        page: {
            dados: false
        }
    });

    useEffect(() => {
        const dataName = 'sitio-historia-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));

        } else {
            axios
                .get('/sitio/historia')
                .then(response => {
                    console.log(response)
                    setData(response.data);
                    setStorage(dataName, JSON.stringify(response.data));
                })
                .catch(err => console.log(err))
                . finally(() => {
                    setIsFetching(false);
                })
        }
    }, []);

    return (
        <section className="Historia page-interna mb-2 mb-lg-5">
            <div className="container sm">
                <div className="markup">
                    <h2>
                        {data.page.title}
                    </h2>

                    <h3>
                        {data.page.dados.titulo_texto}
                    </h3>
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_superior
                    }}></div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_fundo_bege
                    }}></blockquote>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_abaixo_fundo_bege
                    }}></div>
                </div>
            </div>

            <div className="container">
                <div className="row my-5 py-lg-4">
                    <div className="col-lg-5 position-relative">
                        <img src={data.page.dados.imagem_historia_1} class="img-1" alt=""/>
                    </div>
                    <div className="col-lg-7 position-relative">
                        <img src={data.page.dados.imagem_historia_2} alt=""/>
                        <div className="img-legenda legenda-1">
                            {data.page.dados.texto_quadro_verde}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm pb-4 pb-lg-5">
                <div className="markup">
                    <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_entre_imagens
                    }}></div>
                </div>
            </div>

            <div className="container pb-4 pb-lg-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={data.page.dados.imagem_historia_3} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src={data.page.dados.imagem_historia_4} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container sm pb-4 pb-lg-5">
                <div className="markup">
                <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_entre_imagens_2
                    }}></div>
                </div>
            </div>

            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={data.page.dados.imagem_historia_5} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                <div
                        dangerouslySetInnerHTML={{
                        __html: data.page.dados.texto_final
                    }}></div>
                </div>
            </div>
        </section>
    )
}

export default Hipismo;