import {IMovie} from "@/entities/movie/model/movie.ts";

export interface IUpcomingMoviesResponse{
    page:number
    results:IMovie[]
}