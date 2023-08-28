import axios from "axios";

const APIKey = "5698a4792771168014e137c1870b3572";

const getWeather = async (url) => {
  const weatherArr = [];
  let response;
  try {
    response = await axios.get(url);
  } catch (err) {
    return undefined;
  }
  const {
    data: {
      city: { country, name },
    },
    data: { list },
  } = response;
  for (let i = 0; i < 40; i += 8) {
    let {
      main: { temp, humidity },
      wind: { speed },
      weather: {
        0: { description },
      },
      weather: {
        0: { main },
      },
    } = list[i];
    if (i == 0) {
      weatherArr[i / 8] = {
        city: name,
        country,
        temp,
        humidity,
        speed,
        description,
        icon: main,
      };
    } else {
      weatherArr[i / 8] = {
        temp,
        description: main,
      };
    }
  }
  return weatherArr;
};

const getCurrentLocationWeather = async (setWeatherData) => {
  navigator.geolocation.getCurrentPosition(
    async ({ coords: { latitude, longitude } }) => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${latitude}&lon=${longitude}&appid=${APIKey}`;
      const weatherArr = await getWeather(url);
      setWeatherData(weatherArr);
    }
  );
};

export const getSearchedWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${APIKey}`;
  return await getWeather(url);
};

export default getCurrentLocationWeather;
