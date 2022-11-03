import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
//import { addCount, addItem } from './../Store.js';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import ExWeatherCloud from './ExWeatherCloud.js';

function ExWeatherInfoDetail(props) {

    //let weather = props.weather;
    //let [weather2, setWeather] = useState([]);

    //console.log(props.weather);

    let { unitCode } = useParams();
    let trimUnitCode = ('000' + (unitCode.replace(' ', ''))).slice(-3);
    let 찾은휴게소 = props.weather.find(x => (x.unitCode).replace(' ', '') == trimUnitCode);
    let nowTempValue = Math.round(찾은휴게소.tempValue) //기온 반올림

    console.log('찾은휴게소:' + 찾은휴게소.unitCode);
    //let state = useSelector((state) => { return state }); 
    //let dispatch = useDispatch();
    let navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* <ExWeatherInfoCard weather={찾은휴게소} /> */}
                    <ExWeatherCloud weather={찾은휴게소} />

                    <h5>{찾은휴게소.unitName}</h5>
                    <p> {찾은휴게소.weatherContents} </p>
                    <p> 현재기온 {nowTempValue} </p>
                    <p> {찾은휴게소.addr} </p>

                </div>
            </div>

        </div>
    );
}


export default ExWeatherInfoDetail;