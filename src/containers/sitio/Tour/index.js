import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const Flora = (props) => {
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
                        Tour
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={require('../../../assets/images/thumbs/s-historia-3.png')} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h3>Faça um passeio por cada setor do sítio</h3>

                    <p>
                        O Sítio Santo Antônio fica na parte mais alta do condomínio equestre Paddock.
                        Entrando pelo portão e subindo a estradinha principal, somos cercados de verde
                        por todos os lados, com uma vegetação exuberante margeando o caminho e alguns
                        piquetes à esquerda e à direita para os animais.
                    </p>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm">
                    <div className="markup">
                        <h4 className="mt-0">
                            O horto antigo
                        </h4>
                        <p>
                            Um pouco mais acima, à esquerda, fica a primeira casa construída por Chiquinho
                            no sítio, onde ele morou nos primeiros anos com sua esposa Fernanda e que depois
                            virou uma casa de hóspedes. Foi ali que surgiram a primeira horta e as primeiras
                            plantações, e é seguindo por trás da casa que encontramos o Horto Antigo,
                            atualmente uma área já tomada pela floresta. Caminhamos pelas trilhas sempre à
                            sombra das árvores, passando pelo canil e pelo cemitério dos cachorros até
                            chegar no piquete das antas.
                        </p>
                        <p className="pb-4">
                            Toda essa área já fazia parte dos primeiros lotes adquiridos pelo empresário em
                            meados dos anos 90, e foi a experiência adquirida nesses plantios iniciais, com
                            a necessidade de fertilização e preparação do solo, que moldou todo o projeto
                            ambiental de recuperação da natureza no sítio.
                        </p>
                        <div className="position-relative px-lg-5 mx-lg-5">
                            <img src={require('../../../assets/images/thumbs/s-t-2.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 className="mt-3">
                        O aviário
                    </h4>
                    <p>
                        Passando pela casa principal, temos uma bela vista para os vales em frente, e
                        entramos na parte do terreno que foi adquirida posteriormente das fazendas
                        vizinhas. A estrada desce pela esquerda até a casa dos doces, onde são
                        produzidos os queijos artesanais e os doces feitos com as frutas do sítio. Logo
                        abaixo está o aviário, com um pequeno lago e uma série de viveiros serpenteando
                        morro abaixo, abrigando uma ampla variedade de espécies de aves que dão um
                        colorido especial a esta etapa do passeio.
                    </p>
                    <div className="position-relative px-lg-5 mx-lg-5">
                        <img src={require('../../../assets/images/thumbs/s-t-3.png')} alt=""/>
                    </div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container">
                    <div className="markup">
                        <h4 className="mt-0">
                            O capril e a subida para o piquete do morro
                        </h4>
                    </div>
                </div>
                <div className="container sm">
                    <div className="markup">
                        <p>
                            Logo acima do aviário, perto da casa de doces, fica o capril, que abriga algumas
                            dezenas de cabras numa área coberta com um terreno externo. Bem ao lado, mais
                            abaixo, o piquete dos porcos-do-mato conta com duas a três dúzias de porcos
                            selvagens ao ar livre.
                        </p>
                        <p className="pb-4">
                            Subindo pelas trilhas, chegamos ao piquete do morro, uma área de pastagens
                            verdes com pequenos abrigos num trecho acidentado do terreno, que já serviu para
                            as mais diversas criações, de coelhos a veados. Saindo pelo outro lado do
                            piquete, mais acima, entramos numa trilha de floresta que se comunica
                            diretamente com os jardins da casa principal.
                        </p>
                        <div className="position-relative px-lg-5 mx-lg-5">
                            <img src={require('../../../assets/images/thumbs/s-t-4.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 className="mt-3">
                        Os piquetes da caixa d’água
                    </h4>
                    <p>
                        No início, o sítio contava com uma única caixa d’água, que com o tempo foi se
                        tornando insuficiente para suprir as necessidades de irrigação do terreno à
                        medida que a floresta ia crescendo. Seguindo pela mesma estrada que passa pela
                        casa em direção ao aviário e entrando numa subida à direita, chegamos aos
                        piquetes da caixa d’água, na área mais elevada dessa parte do terreno. Podemos
                        encontrar ovelhas, carneiros, ou até mesmo algum cavalo da equipe de saltos em
                        tratamento de alguma lesão sob os cuidados do “dr. Campo”, sempre um infalível
                        remédio para a pronta recuperação dos animais.
                    </p>
                    <div className="position-relative px-lg-5 mx-lg-5">
                        <img src={require('../../../assets/images/thumbs/s-t-5.png')} alt=""/>
                    </div>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container">
                    <div className="markup">
                        <h4 className="mt-0">
                            A fazendinha
                        </h4>
                    </div>
                </div>
                <div className="container sm">
                    <div className="markup">
                        <p>
                            Do outro lado do sítio, voltando à casa de hóspedes e passando pelo Horto
                            Antigo, uma subida íngreme nos leva pela Estrada do Para-raio, cercada por uma
                            exuberante vegetação que floresce em mil cores, até a Fazendinha, no alto do
                            morro, um dos terrenos mais recentemente incorporados à propriedade.
                        </p>
                        <p>
                            Dali, temos uma vista espetacular para os vales ao redor, que fica ainda mais
                            deslumbrante ao nascer do sol e no crepúsculo, com os mais variados matizes de
                            luz brincando com os animais ao redor. Na Fazendinha cabem vários piquetes, com
                            a criação de gado leiteiro da raça jersey, com caprinos e ovinos, cavalos e
                            também muitas aves, desde galinhas até emas e emus.
                        </p>
                        <div className="position-relative px-lg-5 mx-lg-5">
                            <img src={require('../../../assets/images/thumbs/s-t-6.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 className="mt-3">
                        Cachoeirinha
                    </h4>
                    <p>
                        No início de 2020, foi incorporada ao sítio Santo Antônio a área da
                        Cachoeirinha, agregando mais 550.000 m2 de terreno à propriedade. Com isso,
                        foram abertas novas frentes de trabalho, com a construção de novas estradas e
                        trilhas e o plantio de uma grande quantidade de mudas, com muitas bananeiras,
                        jabuticabeiras, jerivás e rabos-de-raposa. A estrada da Cachoeirinha tem uma
                        parte mais alta que pode ser vista da casa principal, a cerca de um quilômetro
                        de distância, e onde está sendo construído um mirante para o vale abaixo, espaço
                        aberto para novas pastagens e construções.
                    </p>
                    <p>
                        Fechando o terreno, mais ao longe, também com vista direta para a varanda da
                        casa, Chiquinho Brandão mandou construir uma igrejinha que é uma réplica fiel da
                        igreja da Fazenda Recreio, em Poços de Caldas – onde ele passava todas as férias
                        na infância, e onde a paixão pelos animais teve início.
                    </p>
                    <p>Assim se completa essa ponte na vida do empresário, entre a fazenda da
                        família em Minas e o sonho de construir sua própria fazendinha – que se tornou
                        realidade no sítio Santo Antônio, com sua igrejinha pronta para iluminar os
                        caminhos pelos anos futuros.</p>
                    <div className="position-relative px-lg-5 mx-lg-5">
                        <img src={require('../../../assets/images/thumbs/s-t-5.png')} alt=""/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Flora;