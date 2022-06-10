import React from "react";
import PropTypes from "prop-types";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate} </div>
      <div className="forecast-details__max-temperature">
        Max Temperature: {temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__min-temperature">
        Min Temperature: {temperature.min}
        &deg;C
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}</div>
      <div className="forecast-details__wind">
        Wind: {wind.speed} {wind.direction}
      </div>
    </div>
  );
}

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }).isRequired,
    humidity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ForecastDetails;
