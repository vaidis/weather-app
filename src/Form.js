import React, { useState } from "react";
import { connect } from 'react-redux'
import { fetchCity } from './actions'

function Form({ dispatchFetchCity }) {

  const API_KEY = "485d716e83f6405ebec213508202408"
  const SEARCH = "http://api.weatherapi.com/v1/search.json"
  const SEARCH_URL = SEARCH + "?key=" + API_KEY + "&q="
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onChangeHandler = async event => {
    setValue(event.target.value);
    const response = await fetch(SEARCH_URL + event.target.value).then(res => res.json());
    // console.log("Form.js/response:", response)
    setOptions(response)
  };

  function clickItem(e) {
    // console.log("Form.js/e.target.value:", e.target.textContent)
    dispatchFetchCity(e.target.textContent)
    setOptions([])
  }

  return (
    <div className="form">
      <div className="wrapper">
        <div className="input">
          <input
            id="input"
            className="input"
            value={value}
            type="text"
            placeholder="City/Town"
            id="location"
            onChange={onChangeHandler}
          />
        </div>
        <div className="list">
          <ul>
            {
              options.length > 0 ? (
                Object.keys(options).map((key) => {
                  return (
                    <li
                      key={options[key].id}
                      className="option"
                      onClick={event => clickItem(event)}
                    >
                      {options[key].name}
                    </li>
                  )
                })
              ) : ""
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchFetchCity: (params) => dispatch(fetchCity(params)),
})

export default connect(null, mapDispatchToProps)(Form)
