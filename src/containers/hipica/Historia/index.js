import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const Historia = (props) => {
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
        <section className="Historia-h page-interna mb-2 mb-lg-5">
            <div className="container sm pt-lg-3">
                <div className="markup mb-3">
                    <h2 class="mb-0">
                        História
                    </h2>
                </div>
            </div>
            <div className="container pb-4 pb-lg-5 px-lg-5">
                <div className="markup px-lg-5">
                    <img src={require('../../../assets/images/thumbs/h-h-1.png')} alt=""/>
                </div>
            </div>
            <div className="container sm pt-lg-5">
                <div className="markup wow">
                    <p>
                        Em 2012, depois de um acidente que deixou Chiquinho Brandão com uma grave lesão
                        no joelho, o empresário, que sempre teve uma paixão pelos cavalos e pelo
                        esporte, parou de saltar e passou a se dedicar à montagem de uma equipe de
                        hipismo profissional. Atualmente a equipe de salto do Santo Antônio é uma das
                        mais importantes do país, e em 2019 começou sua trajetória na Europa.
                    </p>
                </div>
            </div>
            <div className="bg-bege">
                <div className="container sm">
                    <div className="markup">
                        <h4 class="mb-4 mt-0">O objetivo</h4>
                        <blockquote>
                            Construir de forma profissional e dentro dos princípios éticos, respeitando as
                            pessoas e, principalmente, os animais, a melhor Equipe de Hipismo do país.
                        </blockquote>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup pt-lg-1">
                    <h4>História com o hipismo</h4>
                    <div>
                        <img src={require('../../../assets/images/thumbs/h-h-2.png')} alt=""/>
                    </div>
                    <p className="pt-5 mt-lg-4">
                        O amor pelos cavalos é algo que Chiquinho traz desde a infância. Começou a
                        montar a cavalo na Sociedade Hípica Brasileira ainda na adolescência. Mais do
                        que apenas um esporte, o hipismo era também uma maneira de ficar próximo dos
                        cavalos no Rio de Janeiro, e não apenas durante as férias na fazenda da família
                        em Poços de Caldas.
                    </p>
                    <p>
                        Com o início da vida profissional, teve que largar o esporte por muitos anos, só
                        voltando a montar mais velho, perto dos 40 anos de idade, quando já estava bem
                        estabelecido como empresário e pôde finalmente comprar um cavalo próprio para
                        voltar a saltar e a competir. Nessa ocasião, passou a ter aulas com a amazona
                        Lucia Faria no Centro Equestre Paddock, na região serrana do Rio. Em 1995, o
                        Paddock se tornou um condomínio, e foi lá que Chiquinho adquiriu alguns lotes e
                        iniciou nesse mesmo ano a construção do Sítio Santo Antônio.
                    </p>
                    <p>
                        Depois de aulas com Luiz Ichaso e com Lucia Faria, começou a montar com o
                        cavaleiro e instrutor Julio Mattos, que o acompanha até hoje. Nessa época,
                        Chiquinho tinha três cavalos: Orixá, Bugre e Fittipaldi. A partir do momento em
                        que começou a subir para o sítio todo fim de semana, Chiquinho foi deixando de
                        participar dos concursos na hípica. Quem saltava com os cavalos nas competições
                        era o Julio, mas naquele tempo nenhum desses animais era de primeira linha.
                    </p>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote>
                        “Nunca tive grandes ambições em termos de resultados como cavaleiro. O principal
                        era poder praticar o esporte e ficar perto dos animais, o que também funcionava
                        como uma espécie de terapia para distrair a cabeça dos trabalhos no escritório.”
                    </blockquote>
                    <sm className="author">
                        – Chiquinho Brandão
                    </sm>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <p>
                        A partir do momento em que começou a subir para o sítio todo fim de semana,
                        Chiquinho foi deixando de participar dos concursos na hípica. Quem saltava com
                        os cavalos nas competições era o Julio, mas naquele tempo nenhum desses animais
                        era de primeira linha.
                    </p>
                </div>
            </div>

            <div className="container sm">
                <div className="markup">
                    <h4>Renovando a tropa</h4>
                    <p>
                        Chiquinho sempre gostou de acompanhar o processo de formação dos cavalos, desde
                        potro até o alto nível do esporte. Por isso, começou a comprar os primeiros
                        potros e a tropa foi crescendo aos poucos, e melhorando. Mesmo sem participar
                        das competições como atleta, sempre gostou de ver seus cavalos saltando e
                        evoluindo.
                    </p>
                    <p>
                        Então veio Áquila Murena, uma égua muito competitiva, com quem Julio Mattos
                        obteve bons resultados nas provas. Em seguida, veio a Oceana, uma égua jovem e
                        de boa linhagem, com quem começaram a almejar provas mais importantes.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row pt-3 pt-lg-5 mt-lg-3">
                    <div className="col-lg-6">
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-3.png')}
                            alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-4.png')}
                            alt=""/>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup pt-4 pt-lg-5">
                    <h4>Cavaleiro novo</h4>
                    <p>
                        Por volta de 2004, Julio seguia cuidando da preparação dos animais e
                        participando das provas. Diante do bom desempenho da Oceana, estava sendo
                        discutido a possibilidade de levar a Áquila para o sítio. Um dia, durante um
                        treino, Thiago, filho do Julio, deu uns saltos na água. O Thiago tinha apenas 13
                        anos na época, mas o conjunto encaixou desde a o princípio. Assim, Chiquinho
                        resolveu disponibilizar a égua para que ele pudesse usar nas competições.
                    </p>
                    <p>
                        A aposta foi muito acertada. O conjunto obteve vitórias em diversos concursos
                        nacionais pelo país (Copa SP, Copa Cepel, Agromen, entre outros). Thiago começou
                        a evoluir rapidamente como cavaleiro e nos anos seguintes passou a montar também
                        os outros animais, à medida que eles iam crescendo e amadurecendo sob o comando
                        do Julio. Os resultados foram aparecendo. Thiago montou a Áquila, depois o
                        Amigo, depois a Oceana, e em poucos anos formou um conjunto espetacular com um
                        cavalo que trouxe muitas alegrias para a equipe: o Rocco.
                    </p>
                    <p>
                        Assim como os outros, Rocco foi preparado desde potro por Júlio, e logo se
                        revelou um craque. Com ele, Thiago foi campeão sul-americano de hipismo na
                        categoria Young Riders, em Passo Fundo, além de outros títulos importantes e
                        resultados em Grande Prêmios. Esses resultados abriram as portas para entrarem
                        em competições de que até então nunca tinha participado.
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="row pt-3 pt-lg-5 mt-lg-3">
                    <div className="col-lg-7 px-lg-0">
                        <img
                            height="700"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-5.png')}
                            alt=""/>
                    </div>
                    <div className="col-lg-5 px-lg-0">
                        <img
                            height="700"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-6.png')}
                            alt=""/>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="markup pt-4 pt-lg-5">
                    <h4>Acidentes de percurso</h4>
                    <p>
                        Com os resultados obtidos pelo Thiago montando Rocco, conseguiram um convite
                        para participar do Athina Onassis Horse Show, uma das etapas do Global Champions
                        Tour e uma das principais competições do circuito internacional. Era o maior
                        evento equestre do país.</p>

                    <p>
                        Exatamente na véspera do concurso, Rocco se machucou. Como não tinham um
                        substituto à altura, que pudesse competir no mesmo nível, não puderam participar
                        do concurso. Foi uma verdadeira ducha de água fria, e também um aprendizado. Se
                        quisesse entrar de verdade no hipismo, não bastava ter um cavalo de qualidade:
                        seria preciso montar uma tropa boa de verdade.
                    </p>
                </div>
            </div>

            <div className="bg-bege overlay-1">
                <div className="container sm">
                    <div className="markup">
                        <h4 class="mt-0">A equipe santo antônio</h4>
                        <p>
                            Se até aquele momento o hipismo era apenas um divertimento, Chiquinho decidiu
                            que a partir dali iria encará-lo com a mesma dedicação e a mesma obsessão por
                            qualidade que adotava na empresa, e que em alguns anos teriam uma das melhores
                            equipes do Brasil.</p>

                        <p>
                            Para começar, era preciso investir em bons cavalos. Naquele mesmo ano de 2012,
                            Julio e Thiago seguiram para a Europa com a incumbência de encontrar alguns
                            animais para o time. Foram comprados os quatro primeiros potros: Chanta Libre,
                            Barack, Sulki e a Wieta. Juntando com os cavalos que já faziam parte da equipe,
                            a tropa começou a tomar forma. Com os anos, novos cavalos foram adquiridos com
                            os amigos e parceiros Claudia e François Mathy, Pedro Renault, Yuri Mansur,
                            entre outros.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container sm">
                <div className="galeria-1">
                    <div className="row">
                        <div className="col-lg-6 pr-lg-0">
                            <img
                                className="mb-0"
                                height="350"
                                style={{
                                objectFit: 'cover'
                            }}
                                src={require('../../../assets/images/thumbs/h-h-7.png')}
                                alt=""/>
                            <img
                                height="350"
                                style={{
                                objectFit: 'cover'
                            }}
                                src={require('../../../assets/images/thumbs/h-h-8.png')}
                                alt=""/>
                        </div>
                        <div className="col-lg-6 pl-lg-0">
                            <img
                                height="700"
                                style={{
                                objectFit: 'cover'
                            }}
                                src={require('../../../assets/images/thumbs/h-h-9.png')}
                                alt=""/>
                        </div>
                    </div>
                </div>

                <div className="markup pt-4 pt-lg-5 pb-lg-1">
                    <p>
                        A equipe foi reforçada com o Rodrigo Ullmann Lima, cavaleiro com grande
                        conhecimento técnico e que agregou muita qualidade ao time. Julio Mattos passou
                        a se dedicar à preparação dos potros e virou o coordenador da equipe, que hoje
                        conta com Rodrigo e Thiago como cavaleiros nos concursos.
                    </p>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote>
                        “Depois que vieram os primeiros bons resultados, o Chiquinho resolveu
                        estabelecer uma pegada mais empresarial no negócio hípico. E adotou na equipe os
                        mesmos princípios que levaram a empresa dele a ter sucesso, o mesmo padrão de
                        qualidade e de organização. Por isso o grau de exigência e de cobrança é muito
                        forte, é o modo de ele buscar sempre o melhor resultado nas coisas.”
                    </blockquote>
                    <sm className="author">
                        – Thiago Mattos
                    </sm>
                </div>
            </div>

            <div className="container sm py-lg-3">
                <div className="markup">
                    <p>
                        Os tratadores são peças-chaves para o funcionamento de tudo. Por isso, a equipe
                        conta com um grupo excelente de profissionais: começando pelo Lucas e pelo
                        Serginho e ainda com Geovane e Gabriel, que ficam em Petrópolis. A equipe também
                        conta com Moura e Sassá na Sociedade Hípica Brasileira-SHB.
                    </p>

                    <p>
                        O time de veterinários é dirigido pela dra. Priscila Azevedo, que faz uma
                        revisão geral na tropa inteira pelo menos três vezes por ano. O dr. João Guedes
                        acompanha o dia a dia no Rio, e o dr. Paulo Celso Pires, em Petrópolis. Os
                        cavalos têm ainda um dentista, o dr. Maurício Guedes, uma equipe de ferradores
                        liderada pelo Eliseu, e um radiologista responsável pelos exames de imagens, o
                        dr. Amândio. O chofer do caminhão é o André, que faz o transporte da tropa entre
                        o Rio e Petrópolis e também para participar das competições. Também faz parte da
                        equipe a Malu Cury, que cuida das inscrições nos concursos. Por último, mas não
                        menos importante, a gerência administrativa da equipe do Santo Antônio é feita
                        pela Adriana Salles.
                    </p>

                    <p>
                        Com essa estrutura cada vez mais profissional, os resultados vêm aparecendo ao
                        longo desses últimos anos. À medida que os cavalos foram amadurecendo, novos
                        animais são adicionados ao time, e com o nível de excelência na preparação que é
                        buscado pela equipe, desde a alimentação até o menor detalhe que ajude no
                        conforto e no bem-estar dos animais, a equipe conquistou seu espaço no circuito
                        nacional e hoje é uma das principais equipes do país.
                    </p>
                </div>
            </div>

            <div className="bg-bege">
                <div className="container sm markup">
                    <blockquote>
                        “Não vejo esse projeto como um negócio comercial, ou como um investimento para
                        ter um retorno financeiro. Não foi planejado assim. Prefiro aposentar os cavalos
                        lá no sítio, com todo o conforto, e cuidar deles até o fim da vida. O retorno
                        que esse projeto me traz é de outra ordem, totalmente diferente. Passa pela
                        emoção do esporte, mas principalmente pelo amor e pelo respeito aos animais.
                        Poder conviver com esses cavalos, encontrá-los na Hípica ou no sítio toda
                        semana, inclusive aqueles que já pararam de saltar, é um retorno muito maior do
                        que qualquer outro.”
                    </blockquote>
                    <sm className="author">
                        – Chiquinho Brandão
                    </sm>
                </div>
            </div>

            <div className="container pt-lg-4">
                <div className="row pt-3 pt-lg-5 mt-lg-3">
                    <div className="col-lg-6 pr-lg-0">
                        <img
                            height="300"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-10.png')}
                            alt=""/>
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-11.png')}
                            alt=""/>
                    </div>
                    <div className="col-lg-6 pl-lg-0">
                        <img
                            height="300"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-12.png')}
                            alt=""/>
                        <img
                            height="400"
                            style={{
                            objectFit: 'cover'
                        }}
                            src={require('../../../assets/images/thumbs/h-h-13.png')}
                            alt=""/>
                    </div>
                </div>

            </div>

            <div className="container sm pt-4 pt-lg-5">
                <div className="markup">
                    <h4>
                        Nova empreitada
                    </h4>
                    <p>
                        Em 2019 se iniciou uma nova operação na Europa, em parceria com o cavaleiro Yuri
                        Mansur. A ideia é ter um braço da equipe no exterior, replicando os mesmos
                        conceitos aplicados no Brasil. Foram adquiridos inicialmente dois animais,
                        Alfons e Everglade. Com esse projeto se espera que a marca Santo Antônio, hoje
                        já reconhecida no Brasil, comece a galgar seu espaço também na Europa.
                    </p>
                    <div className="pt-4 pt-lg-5 mt-lg-3">
                        <img src={require('../../../assets/images/thumbs/h-h-14.png')} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Historia;