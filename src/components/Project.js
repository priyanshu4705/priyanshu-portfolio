import { useParams } from "react-router"
import { Link } from "react-router-dom";

const Project = () => {

    const { slug } = useParams();

    return (
        <div>
            this is a single project page for project == {slug}
            <Link to="/">Home</Link>
        </div>
    )
}

export default Project
