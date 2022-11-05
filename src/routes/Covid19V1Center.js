
// 공공데이터포털 <COVID19 예방접종센터>
// ex) https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=10000&serviceKey=76b%2FmW%2BbHOr2a8ibUv5RGW%2Bq1mDsJAagvGOrhhO%2FDbrczAJrsf50sC1zxpnjz6uBaS%2BaCbR07yKV4lj%2F3BFKAQ%3D%3D

import { useEffect, useState, useInterval, useRef } from "react";
import { useParams } from "react-router-dom";
import { Nav, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import axios from 'axios';
import Pagination from "react-js-pagination"; // 설치:npm i react-js-pagination



// import styled from 'styled-components'; // 설치:npm install --save styled-components
// .pagination {
//     display: flex;
//     justify - content: center;
//     margin - top: 15px;
// }
  
//   ul {
//     list - style: none;
//     padding: 0;
// }

// ul.pagination li {
//     display: inline - block;
//     width: 30px;
//     height: 30px;
//     border: 1px solid #e2e2e2;
//     display: flex;
//     justify - content: center;
//     align - items: center;
//     font - size: 1rem;
// }

// ul.pagination li: first - child{
//     border - radius: 5px 0 0 5px;
// }

// ul.pagination li: last - child{
//     border - radius: 0 5px 5px 0;
// }

// ul.pagination li a {
//     text - decoration: none;
//     color: #337ab7;
//     font - size: 1rem;
// }

// ul.pagination li.active a {
//     color: white;
// }

// ul.pagination li.active {
//     background - color: #337ab7;
// }

// ul.pagination li a: hover,
//     ul.pagination li a.active {
//     color: blue;
// }
  
//   .page - selection {
//     width: 48px;
//     height: 30px;
//     color: #337ab7;
// }


function Covid19V1Center() {
    let [dataCount, setDataCount] = useState(0);
    let [covid19Data, setCovid19Data] = useState('');
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const GetDataCount = () => {
        let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=1000&serviceKey=76b%2FmW%2BbHOr2a8ibUv5RGW%2Bq1mDsJAagvGOrhhO%2FDbrczAJrsf50sC1zxpnjz6uBaS%2BaCbR07yKV4lj%2F3BFKAQ%3D%3D'

        axios.get(url).then((결과) => { //비동기
            
            console.log('데이터 수:' + 결과.data.totalCount);
            setDataCount(결과.data.totalCount);

            if (결과.data.currentCount == 0) {

            }
            else if (결과.data.currentCount > 0) {
                let makeData = [];
                for (let i = 0; i < 결과.data.currentCount; i++) {
                    결과.data.data[i].centerName=결과.data.data[i].centerName.replace('코로나19 ','')
                    makeData.push(결과.data.data[i]);
                }
                
                //console.log(결과.data.data[0])
                setCovid19Data(makeData);
            }
        })
            .catch(() => {
                //setLoading(false);//로딩중 메세지 제거
                console.log('실패함');
            })
    }



    useEffect(() => {
        GetDataCount();
    }, []);


    if (dataCount > 0) {
        return (
        <>
                <div>
                    <h4>COVID19 예방접종센터</h4>
                </div>

                <Pagination
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={450}
                    pageRangeDisplayed={5}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                />


                {/* {
                    console.log(covid19Data[0])
                } */}

                {
                    covid19Data.map(function (a, i) {
                        return (
                            <div className="col-md-3" key={i}>
                                <h5>[{covid19Data[i].centerName}]</h5>
                                <p> {covid19Data[i].address} </p>
                                <p> {covid19Data[i].phoneNumber} </p>
                            </div>
                        )
                    })
                }
        </>
        );
    }
    else{
        return (
        <>
                <div>
                    <h4>COVID19 예방접종센터</h4>
                </div>
        </>
        );
    }
}


export default Covid19V1Center;
