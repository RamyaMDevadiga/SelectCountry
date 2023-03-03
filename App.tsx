import * as React from 'react';
import './style.css';
import {useState} from 'react'

export default function App() {
  const countries = [
    { name: 'India', value: 'IN', cities: ['Delhi', 'Mumbai'] },
    { name: 'Pak', value: 'PK', cities: ['Lahore', 'Karachi'] },
    { name: 'Bangladesh', value: 'BG', cities: ['Dhaka', 'Chittagong'] },
  ];
  const [selectedCountryIndex,setSelectedCountryIndex]=useState('0')
  return (
    <div>
      <select value={selectedCountryIndex}
      onChange={(e)=>{
        console.log(e.target.value)
        setSelectedCountryIndex(e.target.value)}}
      >
        {countries.map((item,index)=>{
          return <option value={index}>{item.name}</option>
        })}
        </select>
        <select >
          {countries[selectedCountryIndex]&&
           countries[selectedCountryIndex].cities.map((city,index)=>{
                return <option value={index}>{city}</option>
           })
          }
          </select>
     
    </div>
  );
}
