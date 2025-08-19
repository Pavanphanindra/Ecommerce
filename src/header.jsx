import React, { useContext } from "react";
import { context } from "./App";

function Header(){
    var data = useContext(context)
    return(
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default Header