import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private _articles : Article[];
  nbResultsFounded : number;

  constructor(private articleService: ArticleService) {
  }

  articles(): Article[] {
    return this._articles;
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.articleService.getAll().subscribe((articles) => {
      this._articles = articles;
      this.nbResultsFounded = this._articles.length;
    });
  }

  delete(article: Article){
    this.articleService.delete(article.id).subscribe(()=>{
      this.findAll();
    });
  }

  newArticle(article: Article){
    this.findAll();
  }

  search(){
    let title = document.getElementById("searchTitle")['value'];
    let content = document.getElementById("searchContent")['value'];
    let authors = document.getElementById("searchAuthors")['value'];
    
    if(title == "" && content == "" && authors == ""){
      document.getElementById("searchResult").style.color = "initial";
      this.findAll();
    }
    else{
      this.articleService.getAll().subscribe((articles) => {
        this._articles = articles.filter(e => {
          if((e.title.includes(title) && title!="") || (e.content.includes(content) && content!="") || (e.authors.includes(authors) && authors !="")){   
            return e;
          }
        });
        document.getElementById("searchResult").style.color = this._articles.length!=0 ? "initial" : "red";
        this.nbResultsFounded = this._articles.length;
      })
    }
  }

}
