import React from 'react'
import {Scrollbars} from 'react-custom-scrollbars';

import './styles.scss'

const GenealogiaTable = ({data, tipo}) => {

    const TableContent = () => (
        <div className="GenealogiaTable">
            <div className="GenealogiaTable__header">
                <div className="mae">
                    {tipo === 'mae' ? 'Mãe' : 'Pai'}
                </div>
                <div className="avos">
                    Avós
                </div>
                <div className="bisavos">
                    Bisavós
                </div>
                <div className="trisavos">
                    Trisavós
                </div>
            </div>

            <div className="GenealogiaTable__table">
                <div className="mae">
                    <div className="box">
                        {data[tipo]}
                    </div>
                </div>
                <div className="avos">
                    <div className="box">
                        {data.avo1}
                    </div>
                    <div className="box">
                    {data.avo2}
                    </div>
                </div>
                <div className="bisavos">
                    <div className="box">
                    {data.bisavo1}
                    </div>
                    <div className="box">
                    {data.bisavo2}
                    </div>
                    <div className="box">
                    {data.bisavo3}
                    </div>
                    <div className="box">
                    {data.bisavo4}
                    </div>
                </div>
                <div className="trisavos">
                    <div className="box">
                    {data.trisavo1}
                    </div>
                    <div className="box">
                    {data.trisavo2}
                    </div>
                    <div className="box">
                    {data.trisavo3}
                    </div>
                    <div className="box">
                    {data.trisavo4}
                    </div>
                    <div className="box">
                    {data.trisavo5}
                    </div>
                    <div className="box">
                    {data.trisavo6}
                    </div>
                    <div className="box">
                    {data.trisavo7}
                    </div>
                    <div className="box">
                    {data.trisavo8}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            {window.innerWidth < 769  ? 
            <Scrollbars
            renderTrackVertical={props => <div
                {...props}
                style={{
                display: 'none'
            }}/>}
            autoHeight
            autoHeightMin={520}
            marginHeight="100"
            width="750">
            <TableContent/>
        </Scrollbars> : <TableContent/>}
        </>
    )
}

export default GenealogiaTable