
// 공공데이터포털 <COVID19 예방접종센터>
// ex) https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10000&serviceKey=76b%2FmW%2BbHOr2a8ibUv5RGW%2Bq1mDsJAagvGOrhhO%2FDbrczAJrsf50sC1zxpnjz6uBaS%2BaCbR07yKV4lj%2F3BFKAQ%3D%3D

import { useEffect, useState, useInterval, useRef } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import axios from 'axios';
import Pagination from "react-js-pagination"; // 설치:npm i react-js-pagination
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Covid19V1CenterDetail(props) {
    return (
        <div>detail</div>
    );
}

export default Covid19V1CenterDetail;
