import { useEffect, useState, useInterval, useRef } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
//import { addCount, addItem } from './../Store.js';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import axios from 'axios';
import ExWeatherCloud from './ExWeatherCloud.js';
import NoServiceTime from '../img/ready.jpg';

const ExWeather_Key = "9492827553"; //공공데이터 고속도로휴게소 날씨API Key


function ExWeatherInfo(props) {
    // return (
    //   props.weather.map(function(a,i){
    //     return (
    //         <div className="col-md-4" key={i}>
    //           <ExWeatherInfoCard weather={props.weather[i]} />
    //         </div>
    //     )
    //   })
    // );

    //let ExWeather_URL = "http://data.ex.co.kr/openapi/restinfo/restWeatherList?key=" + ExWeather_Key + "&type=json&sdate=20221001&stdHour=10"
    let ExWeather_URL = "http://data.ex.co.kr/openapi/restinfo/restWeatherList?key=" + ExWeather_Key;

    const timerId = useRef();
    // let [nowTimer, setNowTimer] = useState('');
    // let [nowDate, setNowDate] = useState('');
    // let [nowTime, setNowTime] = useState('');
    let [lastTime, setLastTime] = useState(0); //최근 데이터 수신 시간
    let [weatherCount, setWeatherCount] = useState(-9);

    const GetNowDate = () => {
        var dt = new Date();
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var date = dt.getDate();
        var day = dt.getDay();
        var hour = dt.getHours();
        var min = dt.getMinutes();
        var sec = dt.getSeconds();

        if (hour < 10) {
            hour = '0' + hour;
        } else {
            hour = hour;
        }
        if (date < 10) {
            date = '0' + date;
        } else {
            date = date;
        }

        var ViewNowTime = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
        var GetInfoTime = year + '-' + month + '-' + date + ' ' + hour + ':00'
        //setNowTimer(GetInfoTime)
        return (String(year) + String(month) + String(date))
    }
    const GetNowTime = () => {
        var dt = new Date();
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var date = dt.getDate();
        var day = dt.getDay();
        var hour = dt.getHours();
        var min = dt.getMinutes();
        var sec = dt.getSeconds();
        if (hour < 10) {
            hour = '0' + hour;
        } else {
            hour = hour;
        }

        var ViewNowTime = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
        var GetInfoTime = year + '-' + month + '-' + date + ' ' + hour + ':00'
        //setNowTimer(GetInfoTime)
        return (hour)
    }

    const GetWeatherInfo = async (idx) => {
        const ExWeather_Date = GetNowDate();
        const ExWeather_Time = GetNowTime()-Number(idx);
        // setNowDate(ExWeather_Date);
        // setNowTime(ExWeather_Time);

        let url = ExWeather_URL + "&type=json&sdate=" + ExWeather_Date + "&stdHour=" + ExWeather_Time
        console.log(url); 

        await axios.get(url).then((결과) => { //비동기

            if (결과.data.count == 0) {
                setWeatherCount(0);
                console.log(ExWeather_Time + ':00 --> 데이터 없음');
                //setLastTime(idx+1); //데이터가 없을 경우 1시간씩 뒤로 거슬러 가면서 데이터를 찾아서 가져온다
            }
            else if (결과.data.count > 0) {
                let makeData = [];
                for (let i = 0; i < 결과.data.count; i++) {
                    makeData.push(결과.data.list[i]);
                }
                props.setWeather(makeData);
                setWeatherCount(결과.data.count);
                console.log(ExWeather_Time + ':00 --> 데이터 찾았다');
            }
        })
        .catch(() => {
            //setLoading(false);//로딩중 메세지 제거
            setWeatherCount(-1);
            console.log('실패함');
        })
    };


    const startTimer = () => {
        let count;
        timerId.current = setInterval(() => {
            GetWeatherInfo(lastTime);
        }, 600000) //600초(10분) 마다 체크
    }
    useEffect(() => {
        startTimer();
    }, []);
    useEffect(() => {
        GetWeatherInfo(lastTime);
    }, [lastTime]);



    if (weatherCount == 0) {
        // return <div className="col-md-12" key={0}>날씨정보제공 서비스 준비중입니다.</div>
        return <div><img src={NoServiceTime} width="100%" /></div>
    }
    else if (weatherCount > 0) {
        return (
            props.weather.map(function (a, i) {
                return (
                    <div className="col-md-3" key={i}>
                        <ExWeatherInfoCard weather={props.weather[i]} />
                    </div>
                )
            })
        );
    }
    else if (weatherCount == -1) {
        return <div className="col-md-12" key={0}>데이터 수신 에러</div>
    }
    else {
        return <div className="col-md-12" key={0}>데이터 수신중...</div>
    }
}

// function timeout(delay) {
//     return new Promise(res => setTimeout(res, delay));
// }

let url = '';
function ExWeatherInfoCard(props) {

    return (
        <>
            <Link to={"/ExWeatherInfo/" + (Number(props.weather.unitCode))}>
                {/* <img src={url} width="30%" /> */}
                <ExWeatherCloud weather={props.weather} />
                <h5>{props.weather.unitName}</h5>
                <p> {props.weather.weatherContents} </p>
            </Link>
        </>
    );
}



export default ExWeatherInfo;
