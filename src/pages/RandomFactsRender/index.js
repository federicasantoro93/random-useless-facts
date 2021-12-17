import { useEffect } from "react";
import { RandomFact } from "../../components/RandomFact";

const RandomFactsRender = () => {
    useEffect(() => {

        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
            .then((response) => response.json())
            .then((data) => (console.log(data)))



    });

    return(
        <div>
            <h1>random facts</h1>
        </div>
    )
}

export {RandomFactsRender};