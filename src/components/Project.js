import { useParams } from "react-router"

const Project = () => {

    const { slug } = useParams();

    return (
        <div>
            this is a single project page for project == {slug}
        </div>
    )
}

export default Project
