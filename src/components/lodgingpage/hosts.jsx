import React from "react";
import lodging from "../../pages/lodging/lodging.css"

function Hosts({host}) {

    const hostNameArray = host.name.split(" ");

    return(
        <div className='hostContainer'>
            <p>{hostNameArray[0]}</p>
            <p>{hostNameArray[1]}</p>
            <img src={host.picture} alt="Photo du propiètaire" className='hostPicture'/>
        </div>
    )
}

export default Hosts