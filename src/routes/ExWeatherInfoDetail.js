import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import { addCount, addItem } from './../Store.js';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function ExWeatherInfoDetail(props) {

    let { id } = useParams();
    let 찾은휴게소 = props.weather.find(x => x.unitCode == unitCode);
    let state = useSelector((state) => { return state });
    let dispatch = useDispatch();
    let navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className={'start ' + imageShoes}> {/*fade in 효과 */}
                        <img src={"https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + ".jpg"} width="100%" />
                    </div>

                </div>
            </div>

        </div>
    );
}

export default ExWeatherInfoDetail;