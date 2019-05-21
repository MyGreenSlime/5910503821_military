import React, { Component } from 'react';
import {LineChart,XAxis,YAxis,Tooltip,Legend,Line,CartesianGrid,Bar,BarChart} from 'recharts'
class budgetyear extends Component {
    constructor(prop){
        super(prop)
    }
    render() {
        var data = [{
            year : 2007,
            limit_total : 115024,
            total : 92983 
        },
        {
            year : 2008,
            limit_total : 149518,
            total : 109491,
            growth_total : 29.989
        },
        {
            year : 2009,
            limit_total : 170157.4,
            total : 125193.2,
            growth_total : 13.80
        },
        {
            year : 2010,
            limit_total : 154032,
            total : 125219,
            growth_total : -9.47
        },
        {
            year : 2011,
            limit_total : 168501.8,
            total : 140574.2,
            growth_total : 9.39
        },
        {
            year : 2012,
            limit_total : 168667.4,
            total : 145025,
            growth_total : 0.098
        },
        {
            year : 2013,
            limit_total : 180491,
            total : 155874,
            growth_total : 7.01,
        },
        {
            year : 2014,
            limit_total : 183820,
            total : 155677.1,
            growth_total : 1.844
        },
        {
            year : 2015,
            limit_total : 192949.1,
            total : 168896,
            growth_total : 4.96
        },
        {
            year : 2016,
            limit_total : 206461,
            total : 184949,
            growth_total : 7.00
        },
        {
            year : 2017,
            limit_total : 213544,
            total : 184529,
            growth_total : 3.43
        },
        {
            year : 2018,
            limit_total : 220523,
            total : 180448,
            growth_total : 3.26
        }]
        var data1 = [
            {
                name : "รัฐบาลของนายอภิสิทธิ์",
                growth_land : 10.612,
                growth_sea : 11.276,
                growth_air : 11.003
            },
            {
                name : "รัฐบาลของนางสาวยิ่งลักษณ์",
                growth_land : 3.50,
                growth_sea : 2.82,
                growth_air : 1.94
            },
            {
                name : "รัฐบาลของนายคสช",
                growth_land : 4.105,
                growth_sea : 5.136,
                growth_air : 4.539
            }
        ]
        return (
            <div>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="limit_total" stroke="#8884d8" />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                </LineChart>
                <br/>
                <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="growth_total" fill="#8884d8" />
                </BarChart>
                <p>
                    
                </p>
                <br/>
                <LineChart width={730} height={250} data={data1}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="growth_land" stroke="#8884d8" />
                    <Line type="monotone" dataKey="growth_sea" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="growth_air" stroke="#8884d8" />
                </LineChart>
                <br/>
                <p>

                </p>
            </div>
        );
    }
}

export default budgetyear;