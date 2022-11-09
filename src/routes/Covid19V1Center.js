
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
import Covid19V1CenterDetail from './Covid19V1CenterDetail.js';

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
    let [dataCount, setDataCount] = useState(0); //데이터 수
    let [covid19Data, setCovid19Data] = useState(''); //원본데이터
    let [covid19DataView, setCovid19DataView] = useState(''); //뷰데이터
    let [locationData, setLocationData] = useState(''); //지역명만 저장
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const GetDataCount = () => {
        let url = 'https://api.odcloud.kr/api/15077586/v1/centers?page=1&perPage=1000&serviceKey=76b%2FmW%2BbHOr2a8ibUv5RGW%2Bq1mDsJAagvGOrhhO%2FDbrczAJrsf50sC1zxpnjz6uBaS%2BaCbR07yKV4lj%2F3BFKAQ%3D%3D'

        axios.get(url).then((결과) => { //비동기
            
            //console.log('데이터 수:' + 결과.data.totalCount);
            console.log(결과.data.data);
            setDataCount(결과.data.totalCount);

            if (결과.data.currentCount == 0) {

            }
            else if (결과.data.currentCount > 0) {
                let makeData = [];
                for (let i = 0; i < 결과.data.currentCount; i++) {
                    결과.data.data[i].centerName=결과.data.data[i].centerName.replace('코로나19 ','')
                    결과.data.data[i].centerName = 결과.data.data[i].centerName.replace('충청북도 고성군', '강원도 고성군')
                    결과.data.data[i].address = 결과.data.data[i].address.replace(' 서울특별시', '서울특별시')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('강원 ', '강원도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('대구시', '대구광역시')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('부산 ', '부산광역시 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('울산시 ', '울산광역시 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('경기 ', '경기도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('경남 ', '경상남도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('경북 ', '경상북도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('전남 ', '전라남도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('제주시 ', '제주특별자치도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('충남 ', '충정남도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('전주시 ', '전라북도 ')
                    결과.data.data[i].address = 결과.data.data[i].address.replace('충정남도 ', '충청남도 ')
                    
                    makeData.push(결과.data.data[i]); //기본 데이터 저장
                }
                
                const comparator = (a, b) => a.address.localeCompare(b.address); // 주소별 소트
                makeData = makeData.sort(comparator)
                setCovid19Data(makeData); // 원본 데이터 저장
                setCovid19DataView(makeData); // 백업 데이터 저장
                //console.log(makeData);


                //주소에서 지역명만 가져오기(ex:서울특별시,부산광역시..)
                let arrLoc = [];
                makeData.map(function (a, i) {
                    let loc = a.address.indexOf(' ');
                    let str = a.address.slice(0,loc);
                    arrLoc.push(str);
                });
                //지역명 중복 제거
                const arrLocUnique = arrLoc.filter((val, idx) => {
                    return arrLoc.indexOf(val) === idx; //값이 처음나오는 배열 인덱스와 현재 인덱스가 같으면 포함
                });
                console.log('arrLocUnique' + arrLocUnique);
                setLocationData(arrLocUnique);
                
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




            // < Form >
            //     <Form.Group className="mb-3" controlId="formBasicEmail">
            //         <Form.Label>Email address</Form.Label>
            //         <Form.Control type="email" placeholder="Enter email" />
            //         <Form.Text className="text-muted">
            //             We'll never share your email with anyone else.
            //         </Form.Text>
            //     </Form.Group>

            //     <Form.Group className="mb-3" controlId="formBasicPassword">
            //         <Form.Label>Password</Form.Label>
            //         <Form.Control type="password" placeholder="Password" />
            //     </Form.Group>
            //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
            //         <Form.Check type="checkbox" label="Check me out" />
            //     </Form.Group>
            //     <Button variant="primary" type="submit">
            //         Submit
            //     </Button>
            // </Form >
            

    // <button onClick={() => {
    //     let copy = [10, 20, 30];
    //     const comparator = (a, b) => a.title.localeCompare(b.title);
    //     copy = copy.sort(comparator)
    //     //setCovid19Data(copy);
    // }} > 상품명 정렬2</button>

    if (dataCount > 0) {
        
        return (
            <div>
                <ComboButton />
                <Covid19V1CenterLocation />
            </div>
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

    function Covid19V1CenterLocation(){
        return (
            //'Primary','Secondary','Success','Danger','Warning','Info','Light','Dark'
            covid19DataView.map(function (a, i) {
                return (
                    <div className="col-mb-4" key={i}>

                        <Link to={"/Covid19V1CenterDetail/" + (covid19DataView[i].id)}>
                            <Card
                                bg={'success'} //green
                                text={'white'}
                                style={{ width: '28rem' }}
                            >
                                <Card.Header><h4>{covid19DataView[i].centerName}</h4></Card.Header>
                                <Card.Body>
                                    {/* <Card.Title>{covid19DataView[i].centerName} </Card.Title> */}

                                    <Card.Text>
                                        {covid19DataView[i].address}
                                    </Card.Text>
                                    <Card.Text>
                                        {covid19DataView[i].phoneNumber}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Link>
                        <span style={{ paddingRight: 1 }}></span>
                    </div>
                )
            })
        );
    }
    function ComboButton() {
        return (
            <DropdownButton id="dropdown-basic-button" title="지역선택">
                {/* <Dropdown.Item href="#/action-1">전체</Dropdown.Item>
                <Dropdown.Item href="#/action-1">서울</Dropdown.Item>
                <Dropdown.Item href="#/action-2">경기</Dropdown.Item>
                <Dropdown.Item href="#/action-3">인천</Dropdown.Item> */}

                {locationData.map((locationData) => <Dropdown.Item value={locationData} onClick={() => 
                    { 
                        let selectLocation = [];
                        covid19Data.map(function (a, i) { //원본데이터에서 해당하는 지역명의 데이터만 가져온다
                            if (a.address.includes(locationData)) {
                                selectLocation.push(a);
                            }
                            setCovid19DataView(selectLocation);
                        });
                    }
                }>{locationData}</Dropdown.Item>)}
                

            </DropdownButton>
        );
    }

}


export default Covid19V1Center;
