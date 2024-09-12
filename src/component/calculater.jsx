import { useState } from "react";
import"./cal.css";
export const Calculater=()=>{
    const[data,setdata]=useState("");
    const handelgetvalue=(event)=>{
        console.log(event.target.value);
        setdata(data.concat(event.target.value));
        

    }
    const handelcalculation=()=>{
        setdata(eval(data).toString());
    }
        const handelback=()=>{
            setdata(data.slice(0,-1))
        } 
        const handelclear=()=>{
            setdata("");
        }  
    return(
        <>
        <h1>Calculater</h1>
        <div className="contener">
            
            <div >
                <input placeholder="      0" value={data}/>
            </div>
            <br></br>
            <div className="box">
            <button onClick={handelgetvalue} value="(">(</button>
            <button onClick={handelgetvalue} value=")">)</button>
            <button onClick={handelgetvalue} value="%">%</button>
            <button onClick={handelclear} >AC</button>
            </div>

            <div className="box">
            <button onClick={handelgetvalue} value="7">7</button>
            <button onClick={handelgetvalue} value="8">8</button>
            <button onClick={handelgetvalue} value="9">9</button>
            <button onClick={handelgetvalue} value="*">*</button>

            </div>
            <div className="box">
            <button onClick={handelgetvalue} value="4">4</button>
            <button onClick={handelgetvalue} value="5">5</button>
            <button onClick={handelgetvalue} value="6">6</button>
            <button onClick={handelgetvalue} value="-">-</button>
            </div>

            <div className="box">
            <button onClick={handelgetvalue} value="1">1</button>
            <button onClick={handelgetvalue} value="2">2</button>
            <button onClick={handelgetvalue} value="3">3</button>
            <button onClick={handelgetvalue} value="+">+</button>
            </div>

            <div className="box">
            <button onClick={handelgetvalue} value="0">0</button>
            <button onClick={handelback} >BACK</button>
            <button onClick={handelcalculation}>=</button>
            <button onClick={handelgetvalue} value="/">/</button>
            </div>
        </div>
        </>
    )
}