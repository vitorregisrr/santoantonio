import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const Hipismo = (props) => {
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
        <section className="Historia page-interna mb-2 mb-lg-5">
            <div className="container sm">
                <div className="markup">
                    <h2>
                        História
                    </h2>

                    <h3>
                        Um sonho de fazendeiro
                    </h3>
                    <p>
                        A história do Sítio Santo Antônio começa com os cavalos. No início dos anos 90,
                        o empresário Francisco Soares Brandão começou a frequentar o Paddock – na época
                        um centro de treinamento equestre, localizado na região serrana do Rio de
                        Janeiro – para ter aulas de hipismo com a amazona Lucia Faria, dona do
                        estabelecimento junto com seu marido, o cavaleiro Antonio Alegria Simões.
                    </p>

                    <p>
                        A paixão de Chiquinho pelos animais vem desde a infância, quando passava as
                        férias na Fazenda Recreio, em Poços de Caldas, onde aprendeu a montar aos 5 anos
                        de idade. Na adolescência começou a praticar o hipismo e chegou a participar de
                        diversas competições na Sociedade Hípica Brasileira durante o final da década de
                        60, porém teve que largar o esporte depois de entrar na faculdade e começar a
                        trabalhar, só retornando bem mais tarde, já próximo dos 40 anos, quando já
                        estava bem estabelecido como empresário e conseguiu finalmente comprar um cavalo
                        para voltar a saltar e a competir.
                    </p>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote>
                    “Foi ali na Fazenda Recreio, junto com minha avó Mathilde e meus primos, que
                    aprendi a gostar dos bichos e da natureza, algo que me acompanha por toda a
                    vida. Tenho ótimas lembranças desse tempo da infância e do lado mineiro da
                    família, e sempre tive o sonho de poder um dia ter minha própria fazenda.”
                    </blockquote>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <p>
                        No dia 10 fevereiro de 1995, Chiquinho estava hospedado com sua esposa Fernanda
                        em Corrêas, na Pousada da Alcobaça, para aproveitar a temporada de hipismo no
                        Paddock, por conta do clima mais ameno da serra durante o verão. Para comemorar
                        seu aniversário naquela data, convidou alguns amigos para jantar, entre eles
                        Lucia e Antonio – que por coincidência faz aniversário no mesmo dia.
                    </p>

                    <p>
                        Naquela noite, os donos do Paddock mencionaram a ideia de lotear o terreno para
                        criar um condomínio equestre – seria uma oportunidade para quem quisesse
                        construir uma casa de veraneio ali, a pouco mais de uma hora e meia de distância
                        do Rio, com toda a estrutura do centro de treinamentos à disposição para a
                        prática do hipismo, incluindo as cocheiras e os equipamentos. O empresário se
                        entusiasmou com o projeto e resolveu ajudá-los na realização. Os 22 lotes
                        iniciais foram vendidos para 14 proprietários, todos amigos e vários deles
                        alunos de Lucia.
                    </p>

                    <p>
                        O próprio Chiquinho comprou dois lotes logo de início e pouco tempo depois
                        adquiriu mais dois, todos na área do terreno mais alta e mais afastada das
                        pistas do Paddock. A terra era muito pobre, devastada pelas queimadas, e o
                        terreno bastante acidentado, mas ele começou a viajar para lá todos os fins de
                        semana, a plantar tudo que podia e a construir uma casa, sem ainda imaginar que
                        o sonho de criança pudesse seguir muito longe.
                    </p>

                    <p>
                        Com muita dedicação, planejamento, organização, e com extrema atenção a cada
                        detalhe – características que também moldaram sua carreira de empresário –,
                        Chiquinho vem se dedicando há mais de 25 anos a recuperar a natureza da região.
                        Aos poucos, ele foi montando e aprimorando uma equipe de profissionais para
                        cuidar de cada obra, de cada setor e de cada tarefa, da construção à manutenção
                        do sítio. Trouxeram matéria orgânica para adubar a terra, aproveitando a
                        serragem dos cavalos, tanto do centro equestre quanto de outros haras da região,
                        e a vegetação começou a se espalhar.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row my-5 py-lg-4">
                    <div className="col-lg-5 position-relative">
                        <img src={require('../../../assets/images/thumbs/s-h-2.png')} class="img-1" alt=""/>
                    </div>
                    <div className="col-lg-7 position-relative">
                        <img src={require('../../../assets/images/thumbs/s-historia-1.png')} alt=""/>
                        <div className="img-legenda legenda-1">
                            Construção das primeiras estradas no terreno do sítio, na segunda metade dos anos 90
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm pb-4 pb-lg-5">
                <div className="markup">
                    <p>
                        Foram criadas estradas e trilhas, todas atualmente com calçamento e guarda-mão,
                        foram plantadas mais de 40.000 mudas, e o terreno foi tomado por uma mata cheia
                        de árvores frutíferas, com jabuticaba, mamão, ameixa, goiaba, manga, banana,
                        café… – hoje florescem ali uma infinidade de espécies da flora nativa ou
                        exótica, incluindo cerejeiras, ipês e eucaliptos, e com isso o sítio passou a
                        atrair também muitas aves e animais silvestres, que sempre encontram alimento na
                        região.
                    </p>
                </div>
            </div>

            <div className="container pb-4 pb-lg-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={require('../../../assets/images/thumbs/s-historia-2.png')} alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img src={require('../../../assets/images/thumbs/s-h-1.png')} alt=""/>
                    </div>
                </div>
            </div>

            <div className="container sm pb-4 pb-lg-5">
                <div className="markup">
                    <p>
                        Atualmente o sítio emprega mais de 30 pessoas. Algumas delas já trabalham e
                        vivem ali há mais de 20 anos, e todos compartilham da paixão do empresário pelas
                        plantas e pelos animais. O empreendimento ajuda assim também a fomentar e a
                        movimentar a economia dos municípios vizinhos, como Pedro do Rio e Areal, que
                        costumam fornecer a mão de obra necessária para as obras de construção e
                        manutenção da propriedade.
                    </p>
                    <p>
                        O sonho do empresário, de construir ali sua própria fazenda, com muita planta e
                        muito bicho, foi tomando forma e virou realidade. Chiquinho construiu um aviário
                        que abriga as mais diversas espécies, e aos poucos foram chegando novas
                        criações: bois, carneiros, cabritos, galinhas, coelhos, até veados e
                        porcos-do-mato. Hoje o sítio fabrica os próprios queijos artesanais, além de
                        doces e das frutas e verduras da horta, que são trazidos semanalmente para o Rio
                        de Janeiro para serem distribuídos entre os amigos. Nada do que é produzido ali
                        é comercializado, o objetivo principal é ter sempre alimento para os bichos e
                        para todo o pessoal que trabalha no projeto.
                    </p>
                </div>
            </div>

            <div className="container pb-4 pb-lg-5">
                <div className="markup">
                    <img src={require('../../../assets/images/thumbs/s-historia-3.png')} alt=""/>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <p>
                        O terreno do sítio Santo Antônio – assim batizado em homenagem à dona Mathilde,
                        avó de Chiquinho, que era devota do santo – foi se expandindo ao longo desses
                        anos, com a aquisição de alguns terrenos das fazendas vizinhas. O amor pelos
                        animais, especialmente pelos cavalos, e o sonho de infância de ser fazendeiro,
                        fizeram desse projeto um dos mais importantes da vida do empresário, e o
                        resultado foi a criação de um verdadeiro oásis no meio de uma área ainda
                        bastante devastada.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hipismo;