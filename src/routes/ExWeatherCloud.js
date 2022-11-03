

import 메인이미지 from '../img/main-bg.jpg';
import 흐림1 from '../img/weather_cloud1.png';
import 흐림2 from '../img/weather_cloud2.png';
import 흐림3 from '../img/weather_cloud3.png';
import 흐림4 from '../img/weather_cloud4.png';
import 흐림5 from '../img/weather_cloud5.png';
import 서리1 from '../img/weather_frost1.png';
import 서리2 from '../img/weather_frost2.png';
import 서리3 from '../img/weather_frost3.png';
import 서리4 from '../img/weather_frost4.png';
import 서리5 from '../img/weather_frost5.png';
import 비1 from '../img/weather_rain1.png';
import 비2 from '../img/weather_rain2.png';
import 비3 from '../img/weather_rain3.png';
import 비4 from '../img/weather_rain4.png';
import 비5 from '../img/weather_rain5.png';
import 기타1 from '../img/weather_etc1.png';
import 기타2 from '../img/weather_etc2.png';
import 기타3 from '../img/weather_etc3.png';
import 기타4 from '../img/weather_etc4.png';
import 기타5 from '../img/weather_etc5.png';

function ExWeatherCloud(props) {
    let cloudeUrl = '';
    let cloude = props.weather.weatherContents;

    if (cloude == "박무") {
        cloudeUrl = 기타2
    }
    else if (cloude == "연무") {
        cloudeUrl = 기타1
    }
    else if (cloude == "맑음") {
        cloudeUrl = 흐림5
    }
    else if (cloude == "흐림") {
        cloudeUrl = 흐림2
    }
    else if (cloude == "구름조금") {
        cloudeUrl = 흐림1
    }
    else if (cloude == "구름많음") {
        cloudeUrl = 흐림2
    }
    else {
        cloudeUrl = "";
    }
    //console.log('cloudeUrl:' + cloudeUrl);

    return (
        <div>
            <img src={cloudeUrl} width="20%" />
        </div>
    );
}

export default ExWeatherCloud;
