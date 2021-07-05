import React , {Component } from 'react';
import  './cards.css';

class Cards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            movieInfo: [ ]
        }
    }

    componentDidMount(){
        fetch('https://www.omdbapi.com/?apikey=45f0782a&s=war')
            .then(response => response.json())
            .then(json => 
                this.setState({
                    movieInfo: json.Search, loading: false
                }
            ))
    }

    render() {
        const{ loading, movieInfo } = this.state;
        return(
            <>
                <h1 id="section-title"><span>Movies</span></h1>
                {loading && <h1>loading...</h1>}
               <div className="movies-container">
               {movieInfo.length && movieInfo.map((item) => 
                <div key={item.imdbID} id={item.imdbID} className="movie-card">
                    <img src={item.Poster} alt="movie-poster"/>
                    <h1 class="movie-name">{ item.Title }</h1>
                </div>
                )}
               </div>
            </>
        )
    }
}

export default Cards;