import { Navbar, Nav, Container, FormText } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState, useInterval, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css';
import data from './data/data.js'
import ExWeatherInfo from './routes/ExWeatherInfo.js'
import ExWeatherInfoDetail from './routes/ExWeatherInfoDetail.js'
import Covid19V1Center from './routes/Covid19V1Center.js'
import Covid19V1CenterDetail from './routes/Covid19V1CenterDetail.js'

import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';

// const ExWeather_Key = "9492827553"; //공공데이터 고속도로휴게소 날씨API Key

function App() {


  return (
    <div className="App">

      {/* <MainRoute weather={weather} nowTimer={nowTimer} /> */}
      <MainRoute />

      {/* <Card 제목='title' 가격='10,000원'/> */}
    </div>
  );
}
function MainRoute(){

  let [weather, setWeather] = useState(data);

  let navigate = useNavigate();
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="/">ShoeShop</Navbar.Brand> */}
            <Navbar.Brand onClick={() => { navigate('/') }}>공공데이터</Navbar.Brand>
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}

              {/* <Nav.Link href="/">Home</Nav.Link> */}
              <Nav.Link onClick={() => { navigate('/') }}> Home </Nav.Link>
              {/* <Nav.Link href="/detail">Detail</Nav.Link> */}
              <Nav.Link onClick={() => { navigate('/ExWeatherInfo') }}> 휴게소별 날씨 정보 </Nav.Link>
              {/* <Nav.Link href="/about">About</Nav.Link> */}
              <Nav.Link onClick={() => { navigate('/Covid19V1Center') }} > COVID19 예방접종센터  </Nav.Link>
              {/* <Nav.Link href="/cart">Cart</Nav.Link> */}
              <Nav.Link onClick={() => { navigate('/cart') }}></Nav.Link>
              {/* //페이지 이동 버튼 */}
              {/* <Link to="/">홈</Link>
                <Link to="/detail">상세페이지</Link>
                <Link to="/about">어바웃페이지</Link>  */}

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Container>
        </Navbar>
      </div>


      <Routes>
        <Route path="/" element={<div className="container"> <div className="row"> <Home /> </div></div>} />
        {/* <Route path="/detail" element={ <Detail shoes={shoes} /> } /> */}
        {/* <Route path="/detail/:id/:id2" element={<Detail shoes={shoes} />} /> */}
        {/* <Route path="/detail/:id/test/:id2" element={<Detail shoes={shoes} />} /> */}
        <Route path="/ExWeatherInfo" element={<div className="container"> <div className="row"> <ExWeatherInfo weather={weather} setWeather={setWeather}/> </div></div>} />
        <Route path="/ExWeatherInfo/:unitCode" element={<ExWeatherInfoDetail weather={weather} setWeather={setWeather} />} />
        {/* <Route path="/cart" element={<Cart />} /> */}

        {/* <Route path="/about" element={ <AboutPage /> } />
              <Route path="/about/member" element={<AboutPage />} />
              <Route path="/about/location" element={<AboutPage />} /> */}

        <Route path="/Covid19V1Center" element={<div className="container"> <div className="row">  <Covid19V1Center /> </div></div>} > {/* Nested Routes라고 함 */}
          <Route path="member" element={<div> 멤버임</div>} /> {/* /Covid19V1Center/member와 동일, AboutPage출력및 AboutPage내의 outlet부분에 출력 */}
          <Route path="location" element={<div> 로케이션임</div>} /> /Covid19V1Center/location 동일, AboutPage출력및 AboutPage내의 outlet부분에 출력
        </Route>
        <Route path="/Covid19V1CenterDetail/:id" element={<Covid19V1CenterDetail />} /> {/* :id ==> 파라미터 */}

        <Route path="/event" element={<EventPage />} > {/* Nested Routes라고 함 */}
          <Route path="one" element={<div> 첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div> 생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지(404)</div>} /> {/* 그 외 모든 라우트 */}
      </Routes>

    </>
  );
}
function Home() {
  return (
    <>
    </>
  );
}
// function ExWeatherInfo(props) {
//   // return (
//   //   props.weather.map(function(a,i){
//   //     return (
//   //         <div className="col-md-4" key={i}>
//   //           <ExWeatherInfoCard weather={props.weather[i]} />
//   //         </div>
//   //     )
//   //   })
//   // );

//   //let ExWeather_URL = "http://data.ex.co.kr/openapi/restinfo/restWeatherList?key=" + ExWeather_Key + "&type=json&sdate=20221001&stdHour=10"
//   let ExWeather_URL = "http://data.ex.co.kr/openapi/restinfo/restWeatherList?key=" + ExWeather_Key;

//   const timerId = useRef();
//   //let [weather, setWeather] = useState(data);
//   let [nowTimer, setNowTimer] = useState('');
//   let [nowDate, setNowDate] = useState('');
//   let [nowTime, setNowTime] = useState('');
//   let [weatherCount, setWeatherCount] = useState(-9);


//   const GetNowDate = () => {
//     var dt = new Date();
//     var year = dt.getFullYear();
//     var month = dt.getMonth() + 1;
//     var date = dt.getDate();
//     var day = dt.getDay();
//     var hour = dt.getHours();
//     var min = dt.getMinutes();
//     var sec = dt.getSeconds();
//     if (hour < 10) {
//       hour = '0' + hour;
//     } else {
//       hour = hour;
//     }

//     var ViewNowTime = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
//     var GetInfoTime = year + '-' + month + '-' + date + ' ' + hour + ':00'
//     setNowTimer(GetInfoTime)
//     return (String(year) + String(month) + String(date))
//   }
//   const GetNowTime = () => {
//     var dt = new Date();
//     var year = dt.getFullYear();
//     var month = dt.getMonth() + 1;
//     var date = dt.getDate();
//     var day = dt.getDay();
//     var hour = dt.getHours();
//     var min = dt.getMinutes();
//     var sec = dt.getSeconds();
//     if (hour < 10) {
//       hour = '0' + hour;
//     } else {
//       hour = hour;
//     }

//     var ViewNowTime = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
//     var GetInfoTime = year + '-' + month + '-' + date + ' ' + hour + ':00'
//     setNowTimer(GetInfoTime)
//     return (hour)
//   }


//   const startTimer = () => {
//     let count;
//     timerId.current = setInterval(() => {
//       GetWeatherInfo();
//     }, 3600000) //3600초(1시간) 마다 체크
//   }


//   const GetWeatherInfo = ()=>{
//     const ExWeather_Date = GetNowDate();
//     const ExWeather_Time = GetNowTime();
//     setNowDate(ExWeather_Date);
//     setNowTime(ExWeather_Time);

//     let url = ExWeather_URL + "&type=json&sdate=" + ExWeather_Date + "&stdHour=" + ExWeather_Time
//     console.log(url);

//         axios.get(url).then((결과) => { //비동기

//           if (결과.data.count == 0) {
//             setWeatherCount(0);
//           }
//           else if (결과.data.count > 0) {
//             let makeData = [];
//             for (let i = 0; i < 결과.data.count; i++) {
//               makeData.push(결과.data.list[i]);
//             }
//             props.setWeather(makeData);
//             setWeatherCount(결과.data.count);
//           }
//         })
//         .catch(() => {
//           //setLoading(false);//로딩중 메세지 제거
//           console.log('실패함');
//           setWeatherCount(-1);
//         })
//   }

//   useEffect(() => {
//     GetWeatherInfo();
//     startTimer();
//   }, []);

//   if(weatherCount == 0) {
//     return <div className="col-md-12" key={0}>날씨정보제공 서비스 준비중입니다.</div>
//   }
//   else if (weatherCount > 0) {
//       return (
//         props.weather.map(function (a, i) {
//           return (
//               <div className="col-md-3" key={i}>
//                 <ExWeatherInfoCard weather={props.weather[i]} />
//               </div>
//           )
//         })
//       );
//   }
//   else if (weatherCount == -1) {
//     return <div className="col-md-12" key={0}>데이터 수신 에러</div>
//   }
//   else {
//     return <div className="col-md-12" key={0}>데이터 수신중...</div>
//   }
// }

// function Test(props){
//   console.log('In Test')
//   return (
//     props.weather.map(function(a,i){
//       return (
//           <div className="col-md-4" key={i}>
//             {/* <ExWeatherInfoCard weather={props.weather[i]} /> */}
//           <Test2 weather={props.weather[i]} />
//           </div>
//       )
//     })
//   );
// }
// function Test2(props){
//   return (
//     <>
//       <Link to={"/ExWeatherInfo/" + (Number(props.weather.weatherContents))}>
//         <img src={url} width="30%" />
//         <h5>{props.weather.unitName}</h5>
//         <p> {props.weather.weatherContents} </p>
//       </Link>
//     </>
//   );
// }
// function ExWeatherInfoBody(props){
//   return (
//     props.weather.map(function(a,i){
//       return (
//           <div className="col-md-4" key={i}>
//             <ExWeatherInfoCard weather={props.weather[i]} />
//           </div>
//       )
//     })
//   )
// }



// function ExWeatherCloud(props) {
//   let cloudeUrl = '';
//   let cloude = props.weather.weatherContents;

//   if (cloude == "박무") {
//     cloudeUrl = 기타2
//   }
//   else if (cloude == "연무") {
//     cloudeUrl = 기타1
//   }
//   else if (cloude == "맑음") {
//     cloudeUrl = 흐림5
//   }
//   else if (cloude == "흐림") {
//     cloudeUrl = 흐림2
//   }
//   else if (cloude == "구름조금") {
//     cloudeUrl = 흐림1
//   }
//   else if (cloude == "구름많음") {
//     cloudeUrl = 흐림2
//   }
//   else {
//     cloudeUrl = "";
//   }
//   //console.log('cloudeUrl:' + cloudeUrl);

//   return (
//     <div>
//       <img src={cloudeUrl} width="20%" />
//     </div>
//   );
// }

// let url = '';
// function ExWeatherInfoCard(props){

//   return(
//     <>
//       <Link to={"/ExWeatherInfo/" + (Number(props.weather.unitCode))}>
//         {/* <img src={url} width="30%" /> */}
//         <ExWeatherCloud weather={props.weather} />
//         <h5>{props.weather.unitName}</h5>
//         <p> {props.weather.weatherContents} </p>
//       </Link>
//     </>
//   );
// }
// function ExWeatherInfoDetail(props) {

//   //let weather = props.weather;
//   //let [weather2, setWeather] = useState([]);

//   //console.log(props.weather);

//   let { unitCode } = useParams();
//   let trimUnitCode = ('000' + (unitCode.replace(' ', ''))).slice(-3);
//   let 찾은휴게소 = props.weather.find(x => (x.unitCode).replace(' ','') == trimUnitCode);
//   let nowTempValue = Math.round(찾은휴게소.tempValue) //기온 반올림

//   console.log('찾은휴게소:' + 찾은휴게소.unitCode);
//   //let state = useSelector((state) => { return state });
//   //let dispatch = useDispatch();
//   let navigate = useNavigate();

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           {/* <ExWeatherInfoCard weather={찾은휴게소} /> */}
//           <ExWeatherCloud weather={찾은휴게소} />

//           <h5>{찾은휴게소.unitName}</h5>
//           <p> {찾은휴게소.weatherContents} </p>
//           <p> 현재기온 {nowTempValue} </p>
//           <p> {찾은휴게소.addr} </p>

//         </div>
//       </div>

//     </div>
//   );
// }
function Cart() {
  return (
    <div></div>
  );
}

function EventPage() {
  return (
    <div></div>
  );
}


export default App;
