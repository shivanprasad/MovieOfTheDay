import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieInfo } from './movie-info.model';

@Component({
  selector: 'm2d-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})

export class MovieInfoComponent implements OnInit {

  movInfo: MovieInfo | undefined;

  movieList: MovieInfo[] = [];
  


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending Request to Server");
    for (let movie_id = 2; movie_id < 20; movie_id++) {
      this.showMovieInfo(movie_id);
      
    }
    
  }

  getMovieInfo(movie_id: number){
    return this.http.get<MovieInfo>('https://api.themoviedb.org/3/movie/'+ movie_id +'?api_key=ba25ba134879219e9e3c39e8aeb9d179');
  }

  showMovieInfo(movie_id: number){
    this.getMovieInfo(movie_id).subscribe((data: MovieInfo)=>{
      console.log(data);
      this.movInfo = data;
      if (this.movInfo == undefined){
        return;
      }
      else{
        this.movieList.push(data)
      }
    })
  }
}
