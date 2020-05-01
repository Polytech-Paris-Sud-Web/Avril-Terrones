import {Injectable} from '@angular/core';
import {Article} from "../models/article";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {RawArticle} from "../models/raw-article";

@Injectable()
export class ArticleService {

  private _article : Observable<Article[]>;
  
  // private _url_db : string = "http://localhost:3000";
  private _url_db : string = "https://my-json-server.typicode.com/Polytech-Paris-Sud-Web/Avril-Terrones";

  constructor(private http : HttpClient) {
  }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this._url_db}/articles`);
  }

  public get(id:number): Observable<Article> {
    return this.http.get<Article>(`${this._url_db}/articles/${id}`);
  }

  public delete(id:number): Observable<any> {
    return this.http.delete<any>(`${this._url_db}/articles/${id}`);
  }

  public add(newArticle : RawArticle): Observable<Article> {
    return this.http.post<Article>(`${this._url_db}/articles/`, newArticle);
  }
}
