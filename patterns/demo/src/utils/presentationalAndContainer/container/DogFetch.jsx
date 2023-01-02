import DogRender from "../presentational/DogRender";
import useDogFetch from "./useDogFetch";
export default function DogFetch() {

    const dogs = useDogFetch();

    return (
        <DogRender dogs={dogs} />
    )

}