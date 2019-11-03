import React, { useState } from "react";
// lightOptions
import { lightOptions, oneDetail, photo } from "../../data";
import './main.css';

const Main = ({ shift, setShift }) => {

    const [optSelect, setOptSelect] = useState(0);
    const [photoSelect, setPhotoSelect] = useState(0);
    
    return (
        <div id='main'>
            <div className='sliderArea'>
                <div id='slider'>
                    <div className='slidderWrap'>
                        <img src={photo[optSelect][photoSelect]}></img>
                    </div>
                    <div className='controls'>
                        {photo.map((_arr, index) => (
                            <span
                                key={index}
                                onClick={() => setPhotoSelect(index)}
                                className={index === photoSelect && 'selected' || ''}
                            >

                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='rightSide'>
                <div className='detail-info'>
                    <ul>
                        {Object.entries(oneDetail).map(([name, discription], i) =>
                            <li key={i}>{name}<span>{discription} </span></li>
                        )}
                    </ul>

                </div>
                <div className='line-info'>
                    <div onClick={() => setShift(!shift)}>
                    </div>
                    <div>
                        <span>{'<==='}</span>Выберите цвет свечения<div></div><div></div>
                    </div>
                </div>
                <div className='check-img'>
                    {lightOptions.map((record, i) =>
                        <div key={i}>
                            <span>
                                {record.title}
                                {optSelect === i && (<input type='checkbox' defaultChecked={true} />)}
                            </span>
                            <img
                                className={optSelect === i && 'selected' || ''}
                                onClick={() => setOptSelect(i)}
                                key={i}
                                src={record.image}>

                            </img>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}
export default Main;