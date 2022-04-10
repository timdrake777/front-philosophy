import React, { useState } from 'react';

function Logo(props){

    console.log(props.change);

    const [check, toCheck] = useState(0);
  
    if (props.change === 'true'){
        if (check === 0){
            toCheck(check + 1);
            let logoBar = document.getElementById('logo');
            logoBar.style.transform = 'scale(0.7)';
            return (
                <div className='logo'>
                    <h1 id='logo'>КОНЦЕПЦИЯ</h1>
                </div>
            )
        }
        else {
            return (
                <div className='logo' id='logo'>
                    <h1>КОНЦЕПЦИЯ</h1>
                </div>
            )
        }
    }
    else {
        return(
            <div className='logo' id='logo'>
                    <h1>КОНЦЕПЦИЯ</h1>
            </div>
        )
    }
}

export default Logo;
