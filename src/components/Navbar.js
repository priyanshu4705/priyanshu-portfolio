import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <Nav>
            <Logo>
                <NavLink to="/">
                    V3N<span>om Codes</span>
                </NavLink>
            </Logo>
            <Hamburger onClick={() => setOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <Link to="about"
                    smooth={true}
                    duration={1000}
                    onClick={() => setOpen(false)}>
                    About Me
                    </Link>
                <Link to="skills"
                    smooth={true}
                    duration={1000}
                    onClick={() => setOpen(false)}>
                    Skills
                    </Link>
                <Link to="education"
                    smooth={true}
                    duration={1000}
                    onClick={() => setOpen(false)}>
                    My Education
                    </Link>
                <Link to="projects"
                    smooth={true}
                    duration={1000}
                    onClick={() => setOpen(false)}>
                    Projects
                    </Link>
                <Link to="contact"
                    smooth={true}
                    duration={1000}
                    onClick={() => setOpen(false)}>
                    Contact Me
                    </Link>
            </Menu>
        </Nav>
    )
}

export default Navbar

const Nav = styled.nav`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;

`

const Logo = styled.div`
    color: #7b7fda;
    font-weight: 700;
    font-size: 1.5rem;

    span{
        font-weight: 300;
        font-size: 1.25rem;
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 2rem;

    a{
        margin-right: 1rem;

        &:hover{
            color: #7b7fda;
            border-bottom: 2px solid #7b7fda;
        }
    }

    @media (max-width: 768px){
        margin-top: 1rem;
        overflow: hidden;
        flex-direction: column;
        transition: 0.3s ease-in;
        width: 100%;
        line-height: 2.5;
    }
`

const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    flex-direction: column;

    span{
        border-radius: 5px;
        margin-bottom: 4px;
        height: 2px;
        width: 25px;
        background-color: #7b7fda;
    }

    @media (max-width: 768px){
        display: flex;
    }
`