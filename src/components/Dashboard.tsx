import React, { useEffect, useState } from 'react';
import { ChevronDown } from "lucide-react";
import './dashborad.css'

import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts'



interface Data {
    name: String,
    value: number
}

const Dashboard = (list1: any) => {

    const [click, setClick] = useState(false);

    var a: number = list1.list1.length;

    var b: number = list1.list2.length;
    var number = list1.count


    const data: Data[] = [
        {
            name: 'Site1', value: a
        }, {
            name: "Site2", value: b
        }, {
            name: "No.of Transfers", value: number
        }

    ]

    console.log(data)




    return (
        <div className='dashboard' onClick={() => setClick(!click)} >
            <div className='dashboard__head'>
                <span>Dashboard</span>
                <ChevronDown size={35} color="white" />
            </div>
            {click ? "" :
                (<div className='dashboard__data'>
                    <div className='barchart'>

                        <BarChart width={400} height={400} data={data} >
                            <Bar dataKey="value" fill="green" />
                            <XAxis dataKey="name" stroke='whitte' />
                            <YAxis fill='white' />
                        </BarChart>
                    </div>

                </div>)}


        </div>
    )
}

export default Dashboard;