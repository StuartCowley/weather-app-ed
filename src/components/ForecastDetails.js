import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const formattedDate = new Date(forecast.date).toDateString();
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">{formattedDate}</div>
      <div className="forecast-details__temperature">
        {forecast.temperature.max}
        &deg;C
      </div>
      <div className="forecast-details__wind">{forecast.wind.speed}</div>
      <div className="forecast-details__humidity">{forecast.humidity}</div>
    </div>
  );
}

ForecastDetails.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  date: PropTypes.number.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  wind: PropTypes.shape({
    speed: PropTypes.number,
    direction: PropTypes.string,
  }).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  humidity: PropTypes.number.isRequired,
};

export default ForecastDetails;
