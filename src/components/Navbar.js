import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import styled from 'styled-components'

const Navbar = () => {

    const [isOpen, setOpen] = useState(false)

    const navList = [
        { id: 'about', text: 'About Me' },
        { id: 'skills', text: 'Skills' },
        { id: 'education', text: 'My Education' },
        { id: 'projects', text: 'Projects' },
        { id: 'contact', text: 'Contact Me' }
    ]

    return (
        <Nav id="navbar">
            <Logo>
                <NavLink to="/">
                    V3N<span>om Codes</span>
                </NavLink>
            </Logo>
            <Hamburger isOpen={isOpen} onClick={() => setOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <Menu isOpen={isOpen}>
                {
                    navList.map(((item) => (
                        <Link to={item.id}
                            spy={true}
                            activeClass="active"
                            smooth={true}
                            duration={1000}
                            onClick={() => setOpen(false)}>
                            {item.text}
                        </Link>
                    )))
                }
            </Menu>
        </Nav>
    )
}

export default Navbar


const Nav = styled.nav`
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    box-shadow: 5px -10px 20px 5px darkcyan;
`

const Logo = styled.div`
    color: darkcyan;
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
            border-bottom: 2px solid darkcyan;
        }

        &.active{
            color: #7b7fda;
            border-bottom: 2px solid darkcyan;
        }
    }

    @media (max-width: 768px){
        display: ${({ isOpen }) => (isOpen) ? 'inherit' : 'none'};
        margin-top: 1rem;
        margin-right: 0;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: 0.3s ease-in;
        width: 100%;
        line-height: 2.5;

        a{
            margin: 0;
        }
    }
`

const Hamburger = styled.div`
    display: none;
    cursor: pointer;
    flex-direction: column;

    div{
        border-radius: 5px;
        margin-bottom: 4px;
        height: 2px;
        width: 2rem;
        background-color: darkcyan;
    }

    @media (max-width: 768px){
        display: flex;

        div:nth-child(1){
            transform: ${({ isOpen }) => (isOpen) ? 'translateY(100%) rotate(45deg)' : 'none'} ;
            margin-bottom: ${({ isOpen }) => (isOpen) ? 0 : '4px'};
        }
        
        div:nth-child(2){
            display: ${({ isOpen }) => (!isOpen) ? 'initial' : 'none'};
        }

        div:nth-child(3){
            transform:  ${({ isOpen }) => (isOpen) ? 'rotate(135deg)' : 'none'};
        }
    }
`