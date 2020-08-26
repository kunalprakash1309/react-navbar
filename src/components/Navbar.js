import React, { useState} from 'react'
import Dropdown1 from './Dropdown1'
import Dropdown2 from './Dropdown2'
import Dropdown3 from './Dropdown3'
import Dropdown4 from './Dropdown4'
import Dropdown5 from './Dropdown5'
import Dropdown6 from './Dropdown6'
import Dropdown7 from './Dropdown7'


function Navbar() {




    const[dropdown1, setDropdown1] = useState(false);
    const[dropdown2, setDropdown2] = useState(false);
    const[dropdown3, setDropdown3] = useState(false);
    const[dropdown4, setDropdown4] = useState(false);
    const[dropdown5, setDropdown5] = useState(false);
    const[dropdown6, setDropdown6] = useState(false);

    return (
        <nav className="nav-bar">
            <div className="nav-logo">
                <a href="https://pureb2b.com/">
                    <img src="https://pureb2b.com/wp-content/uploads/2019/06/image-2-3.png" alt="PureB2B"/>
                </a>
            </div>

            <ul className="nav-list">
                <li className="nav-item" onMouseEnter={() => setDropdown1(!dropdown1)} onMouseLeave={() => setDropdown1(!dropdown1)}>Lead generation
                    {dropdown1 && <Dropdown1 />}
                </li>
                <li onMouseEnter={() => setDropdown2(!dropdown2)} onMouseLeave={() => setDropdown2(!dropdown2)} className="nav-item">Content creation
                {dropdown2 && <Dropdown2 />}
                </li>
                <li onMouseEnter={() => setDropdown3(!dropdown3)} onMouseLeave={() => setDropdown3(!dropdown3)} className="nav-item">lead development
                {dropdown3 && <Dropdown3 />}
                </li>
                <li onMouseEnter={() => setDropdown4(!dropdown4)} onMouseLeave={() => setDropdown4(!dropdown4)} className="nav-item">audiences
                {dropdown4 && <Dropdown4 />}
                </li>
                <li onMouseEnter={() => setDropdown5(!dropdown5)} onMouseLeave={() => setDropdown5(!dropdown5)} className="nav-item">resources
                {dropdown5 && <Dropdown5 />}
                </li>
                <li onMouseEnter={() => setDropdown6(!dropdown6)} onMouseLeave={() => setDropdown6(!dropdown6)} className="nav-item">about pureb2b
                {dropdown6 && <Dropdown6 />}
                </li>
            </ul>
            
            <a id="button-link" href="https://pureb2b.com/contact/"><button id="nav-button">Contact us</button></a>
        </nav>
    )
}

export default Navbar