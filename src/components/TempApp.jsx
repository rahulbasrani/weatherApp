import React, { useEffect, useState } from 'react';
import "./css/style.css";
const TempApp=()=>{

    const[city,setCity]=useState(null);

    const[search,setSearch]=useState("mumbai");

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3225e7726f7cd27866c7218baea97271`;
            const response=await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main);
        }
        fetchApi();
    },[search]);

    
    return(<>
    <div className="Cntrs">
    <div>
            <h1 className="h1cls">MyWeather</h1>
        </div>
    <div className="box3">
    <div className="box2">
    <div className='box1'>
        
        <div className="box ">
            
            <div className="inputData">
                <input type="search" placeholder="Enter the location" className="inputFeild" value={search} onChange={(event)=>{setSearch(event.target.value)}}/>
            </div>
        
        {!city?(
            <p className="errorMsg">No Data Found</p>
        ):(
            <div>
                <div className="info">
                    <h2 className="location"><i className="fas fa-podcast"></i>
                        {search}
                    </h2>
                    <h1 className="temp">
                        {city.temp}°Cel
                    </h1>
                    <h3 className="tempmin_max">Min:{city.temp_min}°Cel| Max:{city.temp_max}°Cel</h3>
                </div>

                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
            </div>
        )}

        
        </div>
        </div>
        </div>
        </div>
        </div>
    </>);
};

export default TempApp;