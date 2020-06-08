import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Product extends Component {

    state = {
        movie: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`&i=${id}&plot=full`);

        this.setState({ movie: response.data});
    };

    render() {

        const { movie } = this.state;

        return (
            <div className='movie-info'>
                <h1>{movie.Title} <span>({movie.Year})</span></h1>
                <p><strong>IMDB Rate: {movie.imdbRating} / 10</strong></p>
                <img src={movie.Poster} alt='No poster' />
                <p><strong>Time:</strong> {movie.Runtime}</p>
                <p><strong>Genre:</strong> {movie.Genre}</p>
                <p><strong>Director:</strong> {movie.Director}</p>
                <p><strong>Writer:</strong> {movie.Writer}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Awards:</strong> {movie.Awards}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>Language:</strong> {movie.Language}</p>
                <p><strong>Country:</strong> {movie.Country}</p>
                <div className='actions'>
                    <Link to='/'>Return</Link>
                </div>
            </div>
        )
    }
}