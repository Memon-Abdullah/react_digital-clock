import React, { useEffect, useState } from 'react';


export const Time = ()=>{
    const time = new Date().toLocaleTimeString();

    const [ currentTime, setTime ]  = useState(time);
    useEffect(()=>{
        setTimeout(()=>{
                    let time = new Date().toLocaleTimeString();
                    setTime(time)
                },1000);
    },[currentTime])
    // const updatedTime = ()=>{
    //     let  time = new Date().toLocaleTimeString();
    //     setTime(time);
    // }
    // setInterval(updatedTime,1000);
    return(
        <>
            <h1 className='text-center time'>{currentTime}</h1>
        </>
    )
}