
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
    let [comboData, setComboData] = useState('');
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
                    결과.data.data[i].address = 결과.data.data[i].address.replace(' 서울특별시', '서울특별시')
                    makeData.push(결과.data.data[i]);

                    if (comboData != 결과.data.data[i]){
                        setComboData(결과.data.data[i]);
                    }
                }
                
                const comparator = (a, b) => a.address.localeCompare(b.address);
                makeData = makeData.sort(comparator)

                console.log(makeData);
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
            
                // <div>
                //     <h4>COVID19 예방접종센터</h4>
                // </div>

                // <Pagination
                //     activePage={page}
                //     itemsCountPerPage={10}
                //     totalItemsCount={450}
                //     pageRangeDisplayed={5}
                //     prevPageText={"‹"}
                //     nextPageText={"›"}
                //     onChange={handlePageChange} 
                // />

                // <div className="col-md-3" key={i}>
                //     <h5>[{covid19Data[i].centerName}]</h5>
                //     <p> {covid19Data[i].address} </p>
                //     <p> {covid19Data[i].phoneNumber} </p>
                // </div>
                
            <div>
                {/* <button onClick={() => {
                let copy = [10, 20, 30];
                const comparator = (a, b) => a.title.localeCompare(b.title);
                copy = copy.sort(comparator)
                //setCovid19Data(copy);
                }} > 상품명 정렬2</button> */}
                <p />
                <BasicButtonExample />
                <p />

                <Covid19V1CenterDetail />
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

    function Covid19V1CenterDetail(){
        return (
            //'Primary','Secondary','Success','Danger','Warning','Info','Light','Dark'
            covid19Data.map(function (a, i) {
                return (
                    <div>
                        <Card
                            bg={'success'}
                            key={i}
                            text={'white'}
                            style={{ width: '28rem' }}
                            className="mb-2"
                        >
                            <Card.Header><h4>{covid19Data[i].centerName}</h4></Card.Header>
                            <Card.Body>
                                {/* <Card.Title>{covid19Data[i].centerName} </Card.Title> */}
                                <Card.Text>
                                    {covid19Data[i].address}
                                </Card.Text>
                                <Card.Text>
                                    {covid19Data[i].phoneNumber}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <span style={{ paddingRight: 1 }}></span>
                    </div>
                )
            })
        );
    }
    function BasicButtonExample() {
        return (
            <DropdownButton id="dropdown-basic-button" title="지역선택">
                {/* <Dropdown.Item href="#/action-1">전체</Dropdown.Item>
                <Dropdown.Item href="#/action-1">서울</Dropdown.Item>
                <Dropdown.Item href="#/action-2">경기</Dropdown.Item>
                <Dropdown.Item href="#/action-3">인천</Dropdown.Item> */}

                {Object.keys(comboData).map(e => <option key={e} value={e}>{e}</option>)}

            </DropdownButton>
        );
    }
}


export default Covid19V1Center;
