import { Link } from "react-router-dom"
import './index.css'
// import { useEffect, useState } from "react"
// import axios from "axios"

const Header = () => {
    return (<header className="pageHeader">
        <h2>
            Forum
        </h2>
        
        <nav>
            <a href="thread?t=q">/q</a>
            <a href="thread?t=a">/a</a>
            {/* to={{pathname: "thread", search: "q"}} */}
        </nav>

    </header>)
}

export default Header