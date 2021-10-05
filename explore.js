import StarWars from './article/starwars'
import Titanic from './article/Titanic'
import Transformers from './article/Transformers'

function Explore (){
    return (        
        <div className={"container"}>
            <h1 className={"exploreHead"}>Theatre Favorites</h1>
            <div className = {'explore'}>
                <StarWars />

                <Titanic />

                <Transformers />
            </div>
        </div>
    )
}

export default Explore