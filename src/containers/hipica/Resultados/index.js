import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import Select from 'react-select'
import {Animated} from "react-animated-css";

import './styles.scss';

const Resultados = (props) => {
    const [isFetching,
        setIsFetching] = useState(true);
    const [data,
        setData] = useState(false);
    const [pageItems,
        setPageItems] = useState([]);
    const [currFilter,
        setCurrFilter] = useState({cavaleiro: false, cavalos: false, anos: false});

    let listCavaleiros = [];
    let listCavalos = [];
    let listAnos = [];

    if (data.resultados) {
        listCavaleiros = data
            .resultados
            .map(i => {
                return ({label: i.integrante.label, value: i.integrante.id})
            })
            .filter(function (elem, index, self) {
                return index === self.indexOf(elem);
            })
            .filter((thing, index, self) => index === self.findIndex((t) => (t.place === thing.place && t.value === thing.value)));

        listCavalos = data
            .resultados
            .map(i => {
                return ({label: i.cavalo.label, value: i.cavalo.id})
            })
            .filter((thing, index, self) => index === self.findIndex((t) => (t.place === thing.place && t.value === thing.value)))

        listAnos = data
            .resultados
            .map(i => {
                return ({
                    label: new Date(i.date).getFullYear(),
                    value: new Date(i.date).getFullYear()
                })
            })
            .filter((thing, index, self) => index === self.findIndex((t) => (t.place === thing.place && t.value === thing.value)));
    }

    useEffect(() => {
        const dataName = 'hipica-resultados-data';
        if (getStorage(dataName)) {
            setIsFetching(false);
            setData(JSON.parse(getStorage(dataName)));
        } else {
            axios
                .get('/equipe/resultados')
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

    useEffect(() => {
        if(data.resultados){
            const pageItems = 
        data
            .resultados
            .filter(i => {
                const teste = (currFilter.cavaleiro
                    ? i.integrante.id == currFilter.cavaleiro.value
                    : true) && (currFilter.cavalos
                    ? i.cavalo.id == currFilter.cavalos.value
                    : true) && (currFilter.anos
                    ? new Date(i.date).getFullYear() == currFilter.anos.value
                    : true)

                return teste;
            })

        setPageItems(pageItems)
        }
    }, [data, currFilter])

    const changeFilter = (key, val) => {
        if (!val.value) {
            setCurrFilter(old => {
                const oldd = {
                    ...old
                };
                oldd[key] = false;
                return oldd
            })
        } else {
            setCurrFilter(old => {
                const oldd = {
                    ...old
                };
                oldd[key] = val;
                return oldd
            })
        }
        console.log(currFilter)
    }

    return (
        <section className="Resultados page-interna mb-2 mb-lg-5">
            <div className="container pt-lg-3 pb-lg-3">
                <div className="markup pb-lg-4">
                    <h2 class="mb-4">Resultados</h2>
                </div>
            </div>

            <div className="container justify-content-center pb-3 pb-lg-5">
                <div className="row px-lg-0">
                    <div className="col-lg-5 px-lg-4 d-flex">
                        <div className="filter-group">
                            <label htmlFor="">Cavaleiro</label>
                            <Select
                                className="custom-select"
                                placeholder={'Todos'}
                                noOptionsMessage={() => 'Sem resultados'}
                                onChange={val => changeFilter('cavaleiro', val)}
                                options={[
                                {
                                    label: 'Todos',
                                    value: false
                                },
                                ...listCavaleiros
                            ]}/>
                        </div>
                    </div>
                    <div className="col-lg-4 px-lg-4 d-flex pr-lg-0">
                        <div className="filter-group">
                            <label htmlFor="">Cavalos</label>
                            <Select
                                className="custom-select"
                                placeholder={'Todos'}
                                noOptionsMessage={() => 'Sem resultados'}
                                onChange={val => changeFilter('cavalos', val)}
                                options={[
                                {
                                    label: 'Todos',
                                    value: ''
                                },
                                ...listCavalos
                            ]}/>
                        </div>
                    </div>
                    <div className="col-lg-3 px-lg-4 d-flex pl-lg-0">
                        <div className="filter-group">
                            <label htmlFor="">Anos</label>
                            <Select
                                className="custom-select"
                                placeholder={'Todos'}
                                noOptionsMessage={() => 'Sem resultados'}
                                onChange={val => changeFilter('anos', val)}
                                options={[
                                {
                                    label: 'Todos',
                                    value: ''
                                },
                                ...listAnos
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="Resultados__list">
                    {pageItems.length > 0
                        ? pageItems.map((resul, i) => {
                            return (
                                <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} key={i}>
                                    <article className="Resultados__item">
                                        <div className="Resultados__item-nomes">
                                            <span class="cavaleiro">
                                                {resul.integrante.label}
                                            </span>
                                            <span class="cavalo">
                                                {resul.cavalo.label}
                                            </span>
                                        </div>
                                        <div className="Resultados__item-resultado">
                                            {resul.descricao}
                                        </div>
                                    </article>
                                </Animated>
                            )
                        })
                        : <div className="col-12 pt-4 text-center">
                            <h4
                                style={{
                                color: '#9D8855',
                                fontFamily: 'Lowan'
                            }}>Não encontramos resultados para sua busca.</h4>
                        </div>}
                </div>
            </div>
        </section>
    )
}

export default Resultados;