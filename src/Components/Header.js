import React from 'react'
import '../Styles/Header.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


export default function Header() {

    const [isOpen, setIsOpen] = React.useState(false);
    
const navigate=useNavigate()

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className='HomePageHeader2'>
                <div className='HomePageLeftPartOfHeader2'>
                    <img src='logo123.png' alt="Logo" className='HomePageLogo'></img>
                </div>
                <div className='HomePageRightPartOfHeader2'>
                <p className='HomePageHeaderItems' onClick={()=>navigate('/')}>Home</p>
                <p className='HomePageHeaderItems' onClick={()=>navigate('/about-us')}>About US</p>
                    <Dropdown
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        show={isOpen}
                    >
                        <Dropdown.Toggle variant="light" id="dropdown-hover" className='HomePageHeaderItems'>
                            Our Misssion
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={()=>navigate('/online-education')}>Online Education</Dropdown.Item>
                            <Dropdown.Item onClick={()=>navigate('/women-education')}>Women Education</Dropdown.Item>
                            <Dropdown.Item onClick={()=>navigate('/school-education')}>School Education</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <p className='HomePageHeaderButtons' onClick={()=>navigate('/getinvolved')}>Get Involved</p>
                    <p className='HomePageHeaderButtons' onClick={()=>navigate('/feedback')}>Feedback</p>

                </div>
                <div>

                </div>
            </div>

        </div>
    )
}
