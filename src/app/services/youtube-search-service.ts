import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeSearchService {
    
    private YOUTUBE_API_SERVER = 'http://localhost:5001/api/youtube/';

    constructor(private httpClient: HttpClient) { }

    pesquisar (searchFilter, typeSearch){

        const params = new  HttpParams()
        .set('searchFilter', searchFilter)
        .set('searchType', typeSearch);

        return this.httpClient.get(this.YOUTUBE_API_SERVER, {params: params})
    }
}
