
// 공공데이터포털 <COVID19 예방접종센터>
// ex) https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10000&serviceKey=76b%2FmW%2BbHOr2a8ibUv5RGW%2Bq1mDsJAagvGOrhhO%2FDbrczAJrsf50sC1zxpnjz6uBaS%2BaCbR07yKV4lj%2F3BFKAQ%3D%3D

//네이버 지도 이용위한 설치
//npm i -D @types/navermaps

import { useEffect, useState, useInterval, useRef } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Covid19V1CenterDetail(props) {

//"https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ohxl1bxta0"
    
    const mapElement = useRef(null);


    useEffect(() => {
        const { naver } = window;
        if (!mapElement.current || !naver) return;

        // 지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어줍니다.
        const location = new naver.maps.LatLng(37.5656, 126.9769);
        const mapOptions: naver.maps.MapOptions = {
            center: location,
            zoom: 17,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        };
        const map = new naver.maps.Map(mapElement.current, mapOptions);
        new naver.maps.Marker({
            position: location,
            map,
        });
    }, []);


    return <div ref={mapElement} style={{ minHeight: '400px' }} />;
}

export default Covid19V1CenterDetail;
