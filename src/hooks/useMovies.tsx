import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

interface moviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upComing: Movie[];
}
export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<moviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComing: []
    });

    const getMovies = async () =>{
        const nowPlayingPromise =  movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise =  movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise =  movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upComingPromise =  movieDB.get<MovieDBMoviesResponse>('/upcoming');
        const data = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upComingPromise]);

        setMoviesState({
            nowPlaying: data[0].data.results,
            popular: data[1].data.results,
            topRated: data[2].data.results,
            upComing: data[3].data.results
        })

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies()
    }, [])
    
    return {
        ...moviesState,
        isLoading
    };
}
