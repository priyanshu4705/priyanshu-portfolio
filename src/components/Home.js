import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Education from './Education'
import Footer from "./Footer"
import Intro from "./Intro"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Skills from './Skills'

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
        >
            <Navbar />
            <Intro />
            <AboutMe />
            <Skills />
            <Education />
            <Projects />
            <Contact />
            <Footer />
            <Link to="navbar"
                smooth={true}
                duration={1000}>
                <Top>
                    <i className="fa fa-arrow-up" />
                </Top>
            </Link>
        </motion.div>
    )
}

export default Home

const Top = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: 2px solid darkcyan;

    color: darkcyan;
    background: transparent;
    font-size: 1.5rem;

    position: fixed;
    right: 2rem;
    bottom: 2rem;

    display: grid;
    place-items: center;
`