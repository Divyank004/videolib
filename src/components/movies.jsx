import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import "./movies.css";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete(movie) {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  }

  handleLike(movie) {
    console.log("inside liked");
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    let likedMovie = movies[index];
    likedMovie.liked = !likedMovie.liked;
    movies[index] = { ...likedMovie };
    this.setState({ movies });
  }

  render() {
    const noMovies = this.state.movies.length === 0 ? true : false;

    if (noMovies) {
      return <p>No movies in the database</p>;
    }

    return (
      <div>
        <p>Showing {this.state.movies.length} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    class="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
