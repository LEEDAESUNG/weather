import { Navbar, Nav, Container, Row, FormText } from 'react-bootstrap';
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



//https://www.youtube.com/watch?v=_slzCWK2mZQ
//npm i swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './MyCard';

// import img1 from "./img/product1.png"
// import img2 from "./img/product2.png"
// import img3 from "./img/product3.png"

import img1 from "./img/restplace.jpg"
import img2 from "./img/covid19.jpg"
import img3 from "./img/working.jpg"


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

              {/* <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form> */}
            </Nav>
          </Container>
        </Navbar>
      </div>


      <Routes>
        <Route path="/" element={<div className="container"> <div className="row"> <Home /> </div></div>} />
        {/* <Route path="/detail" element={ <Detail shoes={shoes} /> } /> */}
        {/* <Route path="/detail/:id/:id2" element={<Detail shoes={shoes} />} /> */}
        {/* <Route path="/detail/:id/test/:id2" element={<Detail shoes={shoes} />} /> */}
        <Route path="/ExWeatherInfo" element={<div className="container"> <div className="row"> <ExWeatherInfo weather={weather} setWeather={setWeather} /> </div></div>} />
        <Route path="/ExWeatherInfo/:unitCode" element={<ExWeatherInfoDetail weather={weather} setWeather={setWeather} />} />
        {/* <Route path="/cart" element={<Cart />} /> */}

        {/* <Route path="/about" element={ <AboutPage /> } />
              <Route path="/about/member" element={<AboutPage />} />
              <Route path="/about/location" element={<AboutPage />} /> */}

        {/* <Route path="/" element={<div className="container"> <div className="row"> <Home shoes={shoes} /> </div></div>} /> */}
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

      <p></p>
      <div className='container py-4 px-4 justify-content-center bg-bright'        >
        
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className="mySwiper"

          slidesPerView={5}
          spaceBetween={30}

          // breakpoints={{
          //   0: { //기본
          //     slidesPreView: 1,
          //     spaceBetween: 10,
          //   },
          //   480: { //가로사이즈 480부터
          //     slidesPreView: 2,
          //     spaceBetween: 10,
          //   },
          //   768: { //가로사이즈 768부터
          //     slidesPreView: 3,
          //     spaceBetween: 15,
          //   },
          //   1024: { //가로사이즈 1024부터
          //     slidesPreView: 4,
          //     spaceBetween: 15,
          //   },
          //   1280: { //가로사이즈 1280부터
          //     slidesPreView: 5,
          //     spaceBetween: 30,
          //   }
          // }}
          
          >
            <SwiperSlide>
              <MyCard data={{ imgSrc: img1, price: '', title: '날씨정보', route: 'http://localhost:3000/ExWeatherInfo' }}> </MyCard>
            </SwiperSlide>
            <SwiperSlide>
              <MyCard data={{ imgSrc: img2, price: '', title: 'Covid19', route: 'http://localhost:3000/Covid19V1Center' }}> </MyCard>
            </SwiperSlide>
            <SwiperSlide>
              <MyCard data={{ imgSrc: img3, price: '', title: '작업중..', route: 'http://localhost:3000' }}> </MyCard>
            </SwiperSlide>
            <SwiperSlide>
              <MyCard data={{ imgSrc: img3, price: '', title: '작업중..', route: 'http://localhost:3000' }}> </MyCard>
            </SwiperSlide>
            <SwiperSlide>
              <MyCard data={{ imgSrc: img3, price: '', title: '작업중..', route: 'http://localhost:3000' }}> </MyCard>
            </SwiperSlide>
            <SwiperSlide>
              <MyCard data={{ imgSrc: img3, price: '', title: '작업중..', route: 'http://localhost:3000' }}> </MyCard>
            </SwiperSlide>
          

          </Swiper>
      </div>
    </>
  );
}
function Home() {
  return (
    <>
    </>
  );
}

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
