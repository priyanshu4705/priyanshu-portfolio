import {motion} from 'framer-motion'
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
        </motion.div>
    )
}

export default Home
