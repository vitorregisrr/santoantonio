import axios from 'axios.instance'
import React, {useState, useEffect} from 'react';
import {getStorage, setStorage} from 'util/storage';

import './styles.scss';

const Tour = (props) => {
    const [isFetching, setIsFetching] = useState(true);
    const [data, setData] = useState(false);

    useEffect( () =>{
        if(getStorage('hipismo-data')){
            setIsFetching(false);
            console.log(JSON.parse(getStorage('hipismo-data')))
            setData(JSON.parse(getStorage('hipismo-data')));
        }else{
            axios.get('/pages/hipismo')
            .then(response => {
                setData(response.data);
                setStorage('hipismo-data', JSON.stringify(response.data));
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsFetching(false);
            })
        }
      }, []);

    return (
        <section className="Tour page-interna pb-5 mb-2 mb-lg-5">
            
        </section>
    )
}

export default Tour;