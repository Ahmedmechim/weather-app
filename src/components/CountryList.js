import React from 'react'
import { useSelector } from 'react-redux'
import Country from './Country'

const CountryList = () => {
    const select = useSelector(state => state.select)
    return (
        <div className="countryList">
           {select.map((el,i) =>   <Country key={i} country={el} /> ) } 
        </div>
    )
}

export default CountryList
