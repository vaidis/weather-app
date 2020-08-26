import React, { useState } from "react";
import { connect } from 'react-redux'
import { removeCity } from './actions'
import { ReactComponent as CloseIcon } from './assets/close.svg'

function City({ city, dispatchRemoveCity }) {

    // get the name of the last forecast day
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];
    const nextTomorrowDate = new Date(city.forecast.forecastday[2].date);
    const nextTomorrowDay = nextTomorrowDate.getDay();
    const nextTomorrowDayName = days[nextTomorrowDay];

    // a smaller object for this city
    var data = {
        name: city.location.name,
        for: {
            0: {
                min: city.forecast.forecastday[0].day.mintemp_c,
                max: city.forecast.forecastday[0].day.maxtemp_c,
                icon: city.forecast.forecastday[0].day.condition.icon,
            },
            1: {
                min: city.forecast.forecastday[1].day.mintemp_c,
                max: city.forecast.forecastday[1].day.maxtemp_c,
                icon: city.forecast.forecastday[1].day.condition.icon,
            },
            2: {
                min: city.forecast.forecastday[2].day.mintemp_c,
                max: city.forecast.forecastday[2].day.maxtemp_c,
                icon: city.forecast.forecastday[2].day.condition.icon,
                day: nextTomorrowDayName,
            },
        }
    }

    return (
        <div className="city">

            <div className="top">
                <a
                    className="close"
                    href="#" onClick={(e) => {
                        e.preventDefault()
                        dispatchRemoveCity(data.name)
                    }}
                >
                    <CloseIcon className="closeIcon"/>
                    
                </a>
                <h2>{city.location.name}</h2>
            </div>
            <div className="bottom">
                <div className="day">
                    <h3>Today</h3>
                    <div className="data">
                        <div className="icon">
                            <img src={"http:" + data.for[0].icon} />
                        </div>
                        <div className="values">
                            <div className="max">{data.for[0].max}</div>
                            <div className="min">{data.for[0].min}</div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <h3>Tomorrow</h3>
                    <div className="data">
                        <div className="icon">
                            <img src={"http:" + data.for[1].icon} />
                        </div>
                        <div className="values">
                            <div className="max">{data.for[1].max}</div>
                            <div className="min">{data.for[1].min}</div>
                        </div>
                    </div>
                </div>
                <div className="day">
                    <h3>{data.for[2].day}</h3>
                    <div className="data">
                        <div className="icon">
                            <img src={"http:" + data.for[2].icon} />
                        </div>
                        <div className="values">
                            <div className="max">{data.for[2].max}</div>
                            <div className="min">{data.for[2].min}</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    city: ownProps.city,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatchRemoveCity: (params) => dispatch(removeCity(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(City)
