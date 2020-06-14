import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const QuemSomos = (props) => {
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
        <section className="Quemsomos page-interna mb-2 mb-lg-5">
            <div className="container sm">
                <div className="markup mb-4 mb-lg-5">
                    <h2>
                        Quem somos
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
                    <h3>Um projeto ambiental bastante particular</h3>

                    <p>
                        O sítio Santo Antônio é um empreendimento privado, sem fins lucrativos,
                        financiado pelo empresário Francisco Soares Brandão com o objetivo de recuperar
                        o meio ambiente e a natureza numa área originalmente devastada pelas queimadas,
                        na região serrana do estado do Rio de Janeiro. Por meio de um amplo
                        reflorestamento, este projeto vem construindo há mais de 25 anos um habitat
                        natural para as mais diversas espécies da flora e da fauna silvestre, bem como
                        para a criação de animais em cativeiro. O respeito e o cuidado pelas plantas e
                        pelos bichos, que são a motivação principal dos trabalhos no sítio, norteiam
                        cada detalhe do projeto.
                    </p>
                    <p>
                        Localizado no condomínio equestre Paddock, entre os municípios de Pedro do Rio e
                        Areal, nas margens da rodovia BR-040, o sítio Santo Antônio se estende
                        atualmente por uma área de mais de 100 hectares. Com florestas de árvores
                        frutíferas permeadas por estradas e trilhas com calçamento de pedra, piquetes e
                        pastagens, a propriedade possui toda a infraestrutura necessária para irrigação
                        do solo e para logística, armazenamento e manutenção, visando sempre o
                        desenvolvimento e a preservação da mata e o conforto e o bem-estar dos animais.
                    </p>
                    <p>
                        A criação de cavalos acabou crescendo e se tornou um capítulo à parte desde a
                        formação da equipe hípica do Santo Antônio, que vem participando dos principais
                        concursos pelo Brasil com resultados cada vez mais expressivos e desde 2019
                        passou a expandir suas atividades para competir também internacionalmente.
                    </p>
                </div>
            </div>

            <div className="bg-bege overlay-1">
                <div className="container">
                    <div className="galeria-1">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-2 d-none d-lg-block"></div>
                            <div className="col-12 col-sm-6 col-lg-6 d-flex align-items-center">
                                <img src={require('../../../assets/images/thumbs/s-q-1.png')} alt=""/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3 pr-lg-0">
                                <img
                                    className="img-2"
                                    src={require('../../../assets/images/thumbs/s-q-2.png')}
                                    alt=""/>
                            </div>
                        </div>
                        <div className="row mt-lg-3">
                            <div className="col-12 col-sm-6 col-lg-3 pr-lg-0">
                                <img src={require('../../../assets/images/thumbs/s-q-3.png')} alt=""/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-5">
                                <img src={require('../../../assets/images/thumbs/s-q-4.png')} alt=""/>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-1 d-none d-lg-block"></div>
                        </div>
                    </div>
                </div>

                <div className="container sm  overlay-2">
                    <div className="markup">
                        <h4>
                            Chiquinho Brandão e o
                            <br class="d-none d-lg-block"/>
                            projeto de recuperação da natureza
                        </h4>

                        <p>
                            Na vida empresarial, Chiquinho Brandão tem como lema se cercar de gente
                            competente para entregar sempre o melhor resultado possível em cada trabalho.
                            Foi assim, contratando e formando os melhores profissionais, que ele construiu a
                            FSB, atualmente a maior empresa de comunicação corporativa da América Latina.
                            Essa mesma obsessão pela qualidade e a mesma experiência na gestão de equipes
                            foram trazidas para o projeto de recuperação e preservação da natureza no sítio
                            Santo Antônio, que teve início em 1995 com a compra dos primeiros lotes de
                            terreno no condomínio equestre Paddock e vem se desenvolvendo até hoje.
                        </p>

                        <blockquote>
                            “Na vida, ninguém constrói nada sozinho. Gosto muito de gente, e para realizar
                            um projeto ambiental como este é fundamental encontrar as pessoas certas para
                            cada trabalho. Ao longo dos anos, pude me cercar de gente boa e acima de tudo de
                            profissionais muito dedicados, que não só ajudaram mas têm sido fundamentais
                            para que o sítio tenha se tornado o que ele é hoje.”
                        </blockquote>

                        <p class="mb-0">
                            Este projeto ambiental é realizado pelo empresário com uma dedicação extrema
                            desde o primeiro dia. Segundo o próprio Chiquinho, é como uma obra de arte que
                            ele vem criando aos poucos, dando novas pinceladas e aprimorando cada detalhe,
                            ao mesmo tempo em que a natureza vai se desenvolvendo e colorindo o sítio dos
                            mais variados tons a cada nova estação.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container sm">
                <div className="markup">
                    <h4 class="mb-0">Gaspar</h4>
                    <h5 class="mb-4">Tratador de animais</h5>

                    <p class="mb-5 pb-lg-3">
                        Um dos funcionários mais antigos é o Gaspar, que mora no sítio Santo Antônio há
                        mais de 20 anos. Conhece cada bicho como ninguém, é como se soubesse falar a
                        língua de cada um deles. Sua escola vem da roça, onde aprendeu sobre as plantas
                        e os animais no convívio diário desde a infância, e especializou-se como
                        tratador dos animais do sítio. Sua esposa Ana é a encarregada da fabricação dos
                        queijos artesanais que são produzidos ali mesmo toda a semana, com o leite
                        tirado diariamente pelo próprio Gaspar.
                    </p>

                    <div className="position-relative px-lg-2">
                        <div className="img-legenda legenda-1">
                            Gaspar é o principal tratador dos animais do sítio, onde mora há mais de 20
                            anos.
                        </div>
                        <img src={require('../../../assets/images/thumbs/s-q-5.png')} alt=""/>
                    </div>
                </div>
            </div>
            <div className="bg-bege p-sm">
                <div className="container sm">
                    <div className="markup">
                        <h4 class="mb-0 mt-0">João Lani</h4>
                        <h5 class="mb-4">Admnistração</h5>

                        <p>
                            Profissional experiente, João Lani estudou num colégio agrícola e trabalhou
                            durante mais de 20 anos na administração de uma fazenda de café em Valença,
                            coordenando centenas de funcionários. A fazenda era tão grande que contava com
                            uma hidrelétrica, supermercado e campo de futebol – quase uma minicidade. Ali
                            chegou a plantar mais de um milhão de pés de café.
                        </p>

                        <p>
                            Começou a trabalhar no sítio em 2000, ao mesmo tempo em que gerenciava também
                            outras propriedades na região, mas logo foi contratado para cuidar
                            exclusivamente do projeto do sítio Santo Antônio como administrador. Todos os
                            dias ele é o primeiro a chegar no sítio, pouco depois de amanhecer, e o último a
                            sair à noite. Quando Chiquinho está no Rio durante a semana para cuidar dos
                            assuntos da empresa, mantém contato com João várias vezes por dia por telefone
                            para supervisionar o andamento dos trabalhos, sempre com a máxima atenção a cada
                            detalhe para obter os melhores resultados.
                        </p>

                        <p>
                            Com o tempo, Chiquinho contratou um profissional mais jovem, Marcelo Ferreira,
                            com objetivo de preparar o sucessor de João na administração. Marcelo atualmente
                            já mora no sítio com a família e vem demonstrando estar à altura da tarefa,
                            gerenciando o projeto com extrema dedicação e competência.
                        </p>

                        <div className="position-relative px-lg-2 mt-5 pt-lg-4 pb-5 pb-lg-0">
                            <div className="img-legenda legenda-2">
                                João Lani trabalha na administração do sítio Santo Antônio desde 2000.
                            </div>
                            <img src={require('../../../assets/images/thumbs/s-q-6.png')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4 class="mb-0">Adriana Salles</h4>
                    <h5 class="mb-4">Coordenação Geral</h5>

                    <p>
                        Adriana Salles cuidava da área administrativa da FSB, na parte financeira e de
                        recursos humanos, e há alguns anos passou a trabalhar como assessora particular
                        de Chiquinho Brandão, assumindo a coordenação de todos os funcionários do sítio
                        Santo Antônio e também da equipe de saltos. Adriana é a responsável por resolver
                        todas as situações logísticas e operacionais que envolvem o sítio, bem como por
                        cuidar de todas as burocracias para o registro e a regularização dos animais.
                    </p>

                    <p>
                        Outro auxiliar importante é José Cosme de Carvalho, funcionário mais antigo da
                        FSB, que atualmente trabalha diretamente com Adriana. José Cosme começou como
                        office-boy na empresa aos 18 anos de idade, completou os estudos até se formar
                        em contabilidade e atualmente é responsável parte administrativa e financeira.
                        Por fim, André Marinho completa o time, como assistente direto e braço-direito
                        de Chiquinho, inclusive para os assuntos relacionados ao sítio Santo Antônio,
                        para onde viaja toda semana.
                    </p>

                    <div className="position-relative px-lg-2 mt-4 mt-lg-5 pt-lg-3">
                        <div className="img-legenda legenda-1">
                        André Marinho, Adriana Salles e José Cosme Carvalho: um time de ponta na coordenação geral.
                        </div>
                        <img src={require('../../../assets/images/thumbs/s-q-7.png')} alt=""/>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default QuemSomos;