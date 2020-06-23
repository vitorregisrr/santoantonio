import React from 'react'
import {Scrollbars} from 'react-custom-scrollbars';

import './styles.scss'

const GenealogiaTable = ({data}) => {

    const TableContent = (
        <div className="GenealogiaTable">
            <div className="GenealogiaTable__header">
                <div className="mae">
                    Pai
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
                        Limbo
                    </div>
                </div>
                <div className="avos">
                    <div className="box">
                        Concorde
                    </div>
                    <div className="box">
                        Hilra
                    </div>
                </div>
                <div className="bisavos">
                    <div className="box">
                        Voltaire
                    </div>
                    <div className="box">
                        Flyer
                    </div>
                    <div className="box">
                        Rivaal
                    </div>
                    <div className="box">
                        Bira
                    </div>
                </div>
                <div className="trisavos">
                    <div className="box">
                        Furioso III
                    </div>
                    <div className="box">
                        Gogo Moeve
                    </div>
                    <div className="box">
                        Marco Polo
                    </div>
                    <div className="box">
                        Klase
                    </div>
                    <div className="box">
                        Persian
                    </div>
                    <div className="box">
                        Mireille
                    </div>
                    <div className="box">
                        Samber
                    </div>
                    <div className="box">
                        Vira
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Scrollbars
            renderTrackVertical={props => <div
            {...props}
            style={{
            display: 'none'
        }}
            className="track-vertical"/>}
            autoHeight
            autoHeightMin={520}
            marginHeight="100"
            width="700">
            <TableContent/>
        </Scrollbars>
    )
}

export default GenealogiaTable