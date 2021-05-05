import { Link } from 'react-router-dom'
import styled from 'styled-components'

const PageNotFound = ({ location }) => {
    return (
        <Wrapper>
            <FourOFour>404</FourOFour>
            <img src='https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif' alt="background" />
            <Message>
                Oops!, Looks like you traveled to <span>'{location}'</span>
                <br />
                Wanna, get <Button><Link to="/"><i className="fa fa-arrow-left" aria-hidden="true"/>Home</Link></Button>
            </Message>
        </Wrapper>
    )
}

export default PageNotFound

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
`
const Button = styled.span`
margin-left: 2rem;
    text-decoration: underline dotted;
    color: darkcyan !important;
    i{
        margin-right: 1rem;
        transform: scaleX(1.25);
    }
`

const FourOFour = styled.h1`
    font-size: 7rem;
    font-weight: 500;
    letter-spacing: 1rem;
    position: absolute;
    top: 2%;
`
const Message = styled.p`
    transform: translateY(-80%);
    font-size: 2rem;
    line-height: 3rem;
    span{
        color: red;
    }

    @media (max-width: 768px){
        font-size: 1.75rem;
        line-height: 2rem;
        transform: translateY(-50%);
        padding: 1rem;
    }
`
