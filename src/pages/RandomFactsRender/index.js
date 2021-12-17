import { useState, useEffect } from "react";
import { RandomFact } from "../../components/RandomFact";

const randomfacts=[];
const RandomFactsRender = () => {

    const[getFacts,setFacts] = useState(randomfacts);
    useEffect(() => {

        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
            .then((response) => response.json())
            .then((data) => setFacts(data));

    });

    return(
        <div>
            <h1>random facts</h1>
            <main>
                {<RandomFact data={getFacts} />
                    }
            </main>
        </div>
    )
}

export {RandomFactsRender};