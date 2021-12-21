import React, {useEffect} from 'react';
import './Countdown.css'

function Countdown() {

    useEffect(() => {

        setInterval(() => {
            countdownStart()
        }, 1000);
    }, [])

    const countdownStart = () => {
        
        var now = new Date();
        var eventDate = new Date(2016,11,25);
    
        var currentTime = now.getTime ();
        var eventTime = eventDate.getTime ();
    
        var remTime = eventTime - currentTime ;
        
        var s = Math.floor(remTime / 1000);
        var m = Math.floor(s/60);
        var h = Math.floor(m/60);
       
        h %= 24;
        m %= 60 ;
        s %= 60 ;
    
        h = (h < 10) ? "" + h : h;
        m = (m < 10) ? "" + m : m;
        s = (s < 10) ? "" + s : s;
     
        document.getElementById("hours").textContent =h ;
        document.getElementById("minutes").textContent =m ;
        document.getElementById("seconds").textContent =s;
    }
   
    return (
        <div className='countdwon'>
         <p className='hurry'>Hurry Up! Offers ends in:</p>
        <table>
            <tr>
                <td id="hours" className='td'>6 </td>
                <td id="minutes"  className='td'>30</td>
                <td id="seconds"  className='td'>20</td>
            </tr>
            <tr>
                <td>Hours</td>
                <td>Minutes</td>
                <td>Seconds</td>
            </tr>
        </table>
        </div>

        
    )
    }
export default Countdown
