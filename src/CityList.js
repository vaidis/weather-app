import React from "react";
import { connect } from 'react-redux'
import City from './City'

function CityList({ cities }) {
  return (
    <div className="cityList">
      {
        Object.keys(cities).map((key, i) => {
          return (
            <City key={i} city={cities[key].data} />
          )
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  cities: state.cities,
})

export default connect(mapStateToProps, null)(CityList)
