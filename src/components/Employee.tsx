import React, { useState, createContext, useContext, useDebugValue, useRef } from 'react';
import './employee.css';
import { ArrowRightCircle, ArrowLeftCircle } from 'lucide-react';
import { ChevronDown } from "lucide-react";
import Dashboard from './Dashboard';



interface Employee {
    nome: String,
    cognome: String,
    marticulation: number,
    transfer: number,
    children?: React.ReactNode | React.ReactNode[]

}



const App: React.FC = () => {

    let employeesDetails: Employee[] = [
        {
            nome: "Akhil 1", cognome: "Rondla", marticulation: 21, transfer: 0
        },
        {
            nome: "Akhil 2", cognome: "Rondla", marticulation: 22, transfer: 0
        },
        {
            nome: "Akhil 3", cognome: "Rondla", marticulation: 23, transfer: 0
        },
        {
            nome: "Akhil 4", cognome: "Rondla", marticulation: 24, transfer: 0
        },
        {
            nome: "Akhil 5", cognome: "Rondla", marticulation: 25, transfer: 0
        },
    ]

    let employeesDetails1: Employee[] =
        [
            {
                nome: "Akhil 6", cognome: "Rondla", marticulation: 11, transfer: 0
            },
            {
                nome: "Akhil 7", cognome: "Rondla", marticulation: 12, transfer: 0
            },
            {
                nome: "Akhil 8", cognome: "Rondla", marticulation: 13, transfer: 0
            },
            {
                nome: "Akhil 9", cognome: "Rondla", marticulation: 14, transfer: 0
            },
            {
                nome: "Akhil 10", cognome: "Rondla", marticulation: 15, transfer: 0
            },
        ]


    const [list1, setList1] = useState(employeesDetails);
    const [list2, setList2] = useState(employeesDetails1);
    const [targetright, setTargetRight] = useState(0)
    const [targetleft, setTargetLeft] = useState(0);
    const [disableright, setdisableRight] = useState<Boolean>(false)
    const [disableleft, setdisableLeft] = useState<Boolean>(false)
    const [count, setCount] = useState<number>(0);
    const [click, setClick] = useState(false);
    const [active, setActive] = useState(false)


    const handleRightClick = () => {

        if (disableright) {

        }
        else {
            let x = targetright;
            let l1 = list1.slice()
            let Z: Employee = l1.splice(x, 1)[0]
            let l = list2.slice()
            Z.transfer = Z.transfer + 1;
            console.log(Z.transfer)
            l.push(Z)
            setList2(l)
            setList1(l1)
            setCount(count + 1)
            setdisableRight(true)
        }
    }

    const handleLeftClick = () => {
        if (disableleft) {

        } else {
            let x = targetleft;
            let l1 = list2.slice()
            let Z: Employee = l1.splice(x, 1)[0]
            Z.transfer = Z.transfer + 1;
            let l = list1.slice()
            l.push(Z)
            setList1(l)
            setList2(l1)
            setCount(count + 1)
            setdisableLeft(true)

        }

    }


    const handleTrackRight = (i: number) => {
        let x = i;
        console.log(x)
        setdisableRight(true)
        let Z: Employee = list2[x]
        if (Z.transfer >= 10) {
            setdisableLeft(true)
            alert("Transfer limit has reached.");
            return
        }
        setdisableLeft(false)
        setTargetLeft(i)

    }
    const handleTrackLeft = (i: number) => {
        let x = i;
        setdisableLeft(true)
        let Z: Employee = list1[x]
        if (Z.transfer >= 10) {
            setdisableRight(true)
            alert("Transfer limit has reached.");
            return
        }
        setdisableRight(false)
        setTargetRight(i)
    }

    return (


        <div className="home" >

            <Dashboard list1={list1} list2={list2} count={count} />
            <div className='employee__head' onClick={() => setClick(!click)} >
                <span>Employees Sites</span>
                <ChevronDown size={35} color="white" />
            </div>
            {click ? "" : (
                <>
                    <h1>Total number of transfers =  <p>&nbsp;&nbsp;{count}</p></h1>

                    <div className='employee__site'

                    >


                        <div className='employee__leftsite'>


                            <div className='head'>
                                <span>Nome</span>
                                <span>Cognome</span>
                            </div>

                            <div className='body' >
                                {list1.map((data, i) => {
                                    return (

                                        <div className={active ? "active__value" : "values"} key={i}
                                            onClick={() => handleTrackLeft(i)} >

                                            <span >{data.nome} </span>
                                            <span>{data.cognome} </span>
                                            <label className='active'>Marticulation No.</label>
                                            <span className='active'>{data.marticulation} </span>
                                            <label className='active'>No.of transfers</label>
                                            <span className='active'>{data.transfer}</span>

                                        </div>
                                    )
                                })
                                }
                            </div>
                        </div>


                        <div className='actions'>
                            <ArrowRightCircle onClick={() => handleRightClick()} color={disableright ? "gray" : "white"} size={48} />
                            <ArrowLeftCircle onClick={() => handleLeftClick()} color={disableleft ? "gray" : "white"} size={48} />
                        </div>


                        <div className='employee__rightsite'>


                            <div className='head'>
                                <span>Nome</span>
                                <span>Cognome</span>
                            </div>


                            <div className="body"  >
                                {list2.map((value, i) => {
                                    return (

                                        <div className={active ? "active__value" : "values"} key={i}
                                            onClick={() => handleTrackRight(i)}>

                                            <span>{value.nome} </span>
                                            <span>{value.cognome} </span>
                                            <span className='active'>Marticulation No.</span>
                                            <span className='active'>{value.marticulation} </span>
                                            <span className='active'>No.of transfers</span>
                                            <span className='active'>{value.transfer}</span>

                                        </div>

                                    )
                                })
                                }

                            </div>
                        </div>


                    </div>
                </>

            )
            }

        </div >


    )
}
export default App;
