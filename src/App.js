import { Navbar, Nav, Container, FormText } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useEffect, useState, useInterval, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './App.css';
import data from './data/data.js'
import 메인이미지 from './img/main-bg.jpg';
import 흐림1 from './img/weather_cloud1.png';
import 흐림2 from './img/weather_cloud2.png';
import 흐림3 from './img/weather_cloud3.png';
import 흐림4 from './img/weather_cloud4.png';
import 흐림5 from './img/weather_cloud5.png';
import 서리1 from './img/weather_frost1.png';
import 서리2 from './img/weather_frost2.png';
import 서리3 from './img/weather_frost3.png';
import 서리4 from './img/weather_frost4.png';
import 서리5 from './img/weather_frost5.png';
import 비1 from './img/weather_rain1.png';
import 비2 from './img/weather_rain2.png';
import 비3 from './img/weather_rain3.png';
import 비4 from './img/weather_rain4.png';
import 비5 from './img/weather_rain5.png';
import 기타1 from './img/weather_etc1.png';
import 기타2 from './img/weather_etc2.png';
import 기타3 from './img/weather_etc3.png';
import 기타4 from './img/weather_etc4.png';
import 기타5 from './img/weather_etc5.png';

const ExWeather_Key = "9492827553"; //고속도로휴게소 날씨API Key

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
        <Route path="/ExWeatherInfo" element={<div className="container"> <div className="row"> <ExWeatherInfo /> </div></div>} />
        <Route path="/ExWeatherInfo/:id" element={<ExWeatherInfoDetail shoes={shoes} />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/about" element={ <AboutPage /> } />
              <Route path="/about/member" element={<AboutPage />} />
              <Route path="/about/location" element={<AboutPage />} /> */}

        <Route path="/Covid19V1Center" element={<Covid19V1Center />} > {/* Nested Routes라고 함 */}
          <Route path="member" element={<div> 멤버임</div>} /> {/* /about/member와 동일, AboutPage출력및 AboutPage내의 outlet부분에 출력 */}
          <Route path="location" element={<div> 로케이션임</div>} /> {/* /about/location 동일, AboutPage출력및 AboutPage내의 outlet부분에 출력 */}
        </Route>

        <Route path="/event" element={<EventPage />} > {/* Nested Routes라고 함 */}
          <Route path="one" element={<div> 첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div> 생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="*" element={<div>없는 페이지(404)</div>} /> {/* 그 외 모든 라우트 */}
      </Routes>


      {/* <div className="side_recent_view">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
        <img src="https://codingapple1.github.io/shop/shoes4.jpg" width="100%" />
        <img src="https://codingapple1.github.io/shop/shoes5.jpg" width="100%" />
      </div> */}



      {/* <button onClick={() => {
        let copy = [...props.weather];
        const comparator = (a, b) => a.title.localeCompare(b.title);
        copy = copy.sort(comparator)
        props.setWeather(copy);
      }} > 상품명 정렬</button> */}
    </>
  );
}
function Home() {
  return (
    <>
    </>
  );
}
function ExWeatherInfo() {
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
  let [weather, setWeather] = useState(data);
  let [nowTimer, setNowTimer] = useState('');
  let [nowDate, setNowDate] = useState('');
  let [nowTime, setNowTime] = useState('');
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

    var ViewNowTime = year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec
    var GetInfoTime = year + '-' + month + '-' + date + ' ' + hour + ':00'
    setNowTimer(GetInfoTime)
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
    setNowTimer(GetInfoTime)
    return (hour)
  }

  
  const startTimer = () => {
    let count;
    timerId.current = setInterval(() => {
      //count=GetWeatherInfo(0);
      GetWeatherInfo(0);
    }, 3600000) //3600초(1시간) 마다 체크
  }


  const GetWeatherInfo = (i)=>{
    const ExWeather_Date = GetNowDate();
    const ExWeather_Time = GetNowTime()-10;
    setNowDate(ExWeather_Date);
    setNowTime(ExWeather_Time);

    let url = ExWeather_URL + "&type=json&sdate=" + ExWeather_Date + "&stdHour=" + ExWeather_Time
    console.log(url);

        axios.get(url).then((결과) => { //비동기

          if (결과.data.count == 0) {
            setWeatherCount(0);
          }
          else if (결과.data.count > 0) {
            let makeData = [];
            for (let i = 0; i < 결과.data.count; i++) {
              makeData.push(결과.data.list[i]);
            }
            setWeather(makeData);
            setWeatherCount(결과.data.count);
          }
        })
        .catch(() => {
          //setLoading(false);//로딩중 메세지 제거
          console.log('실패함');
          setWeatherCount(-1);
        })
  }

  useEffect(() => {
    GetWeatherInfo(0);
    startTimer();
  }, []);

  if(weatherCount == 0) { 
    return <div className="col-md-12" key={0}>날씨정보제공 서비스 준비중입니다.</div> 
  }
  else if (weatherCount > 0) { 
      return (
        weather.map(function (a, i) {
          return (
              <div className="col-md-3" key={i}>
                <ExWeatherInfoCard weather={weather[i]} />
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

function Test(props){
  console.log('In Test')
  return (
    props.weather.map(function(a,i){
      return (
          <div className="col-md-4" key={i}>
            {/* <ExWeatherInfoCard weather={props.weather[i]} /> */}
          <Test2 weather={props.weather[i]} />
          </div>
      )
    })
  );
}
function Test2(props){
  return (
    <>
      <Link to={"/ExWeatherInfo/" + (Number(props.weather.weatherContents))}>
        <img src={url} width="30%" />
        <h5>{props.weather.unitName}</h5>
        <p> {props.weather.weatherContents} </p>
      </Link>
    </>
  );
}
function ExWeatherInfoBody(props){
  return (
    props.weather.map(function(a,i){
      return (
          <div className="col-md-4" key={i}>
            <ExWeatherInfoCard weather={props.weather[i]} />
          </div>
      )
    })
  )
}
let url = '';
function ExWeatherInfoCard(props){
  if (props.weather.weatherContents == "박무")
  {
    url = 기타2
  }
  else if (props.weather.weatherContents == "연무") {
    url = 기타1
  }
  else if (props.weather.weatherContents == "맑음") {
    url = 흐림5
  }
  else if (props.weather.weatherContents == "구름조금") {
    url = 흐림1
  }
  else if (props.weather.weatherContents == "구름많음") {
    url = 흐림2
  }
  else
  {
    url = "";
  }

  //console.log(props.weather.weatherContents + ':' + url)
  
  return(
    <>
      <Link to={"/ExWeatherInfo/" + (Number(props.weather.unitCode))}>
        <img src={url} width="30%" />
        <h5>{props.weather.unitName}</h5>
        <p> {props.weather.weatherContents} </p>
      </Link>
    </>
  );
}
function ExWeatherInfoDetail() {
  return (
    <div></div>
  );
}
function Cart() {
  return (
    <div></div>
  );
}
function Covid19V1Center(){
  return(
    <div></div>
  );
}
function EventPage() {
  return (
    <div></div>
  );
}


export default App;
