import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIcon from "react-icons-weather";
import "../styles/ForecastSummary.css";

function ForecastSummary(props) {
  const { date, temperature, description, icon, onSelect } = props;
  const formattedDate = moment(date).format("dddd Do");
  new Date(date).toDateString();
  let weather = "";

  if (temperature.max < 12) {
    weather = "cold";
  } else if (temperature.max >= 12 && temperature.max < 19) {
    weather = "mild";
  } else {
    weather = "warm";
  }

  return (
    <div
      className={`forecast-summary ${weather}`}
      data-testid="forecast-summary"
    >
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <WeatherIcon name="owm" iconId={icon} />
      </div>
      <div className="forecast-summary__temperature">
        {temperature.max}
        &deg;C
      </div>
      <div className="forecast-summary__description">{description}</div>
      <button type="button" onClick={() => onSelect(date)}>
        More details
      </button>
    </div>
  );
}

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
