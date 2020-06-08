import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles.css';

export default class Main extends Component {

    state = {
        movies: [],

    }

    componentDidMount() {
        this.inputEl = document.querySelector('input[name=input-search]');
        this.loadMovies();
    }

    loadMovies = async () => {
        
        const searchInput = this.inputEl.value;

        if (searchInput.length === 0) 
                return
        
        const response = await api.get(`&s=${searchInput}&type=movie`);

        console.log(response.data.Search);

        this.setState({movies : response.data.Search})
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.loadMovies();
        }
    };


    render() {
        const { movies } = this.state;
        return (
            <main>
                <div className='main-search'>
                    <input type='text' className='input-search' name='input-search' onKeyDown={this.handleKeyDown} placeholder='Search a Movie Title...' />
                    <button type="button" onClick={this.loadMovies}><FontAwesomeIcon icon={faSearch} /></button>
                </div>

                <div className="movie-list"> 
                    { movies ? 
                        movies.map(movie => (
                            <article key={movie.imdbID} >
                                <strong>{movie.Title}</strong>
                                <img src={movie.Poster} alt='No poster' />
                                <p>{movie.Year}</p>
                                <Link to={`/movies/${movie.imdbID}`}>Acessar</Link>
                            </article>
                        )) : 
                            <p>Movie not found</p>}
                </div>
            </main>
        )
    }
}