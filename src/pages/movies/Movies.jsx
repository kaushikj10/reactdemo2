import "./movies.css"
import { MOVIEDATA } from "../../util/Moviedata"
import { useState } from "react"
export default function Movies() {
    const [data, setData] = useState(MOVIEDATA)
    return (<>
        <h1 className="text-center"><strong>MOVIES</strong></h1>
        <section className="movie-container">
            {
                data.length > 0 && data.map((element, index) => {
                    return (<><h1>Movies</h1>
                        <div key={index} className="card">
                            <div className="card-body">
                                <img src={element.image} width={"300px"} />
                                <h2>Title:{element.title}</h2>
                                <h2>Year:{element.year}</h2>
                                <h2>Ratings:{element.rating}</h2>
                            </div>
                        </div>
                    </>)
                })
            }
        </section>

    </>)
}