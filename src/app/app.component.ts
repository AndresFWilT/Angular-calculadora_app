import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = "Aplicación calculadora";
  a:number=0;
  b:number=0;
  private resultado:number=0;

  public getSuma(){
    this.resultado=this.a+this.b;
  }

  public getResta(){
    this.resultado=this.a-this.b;
  }

  public getMultiplicacion(){
    this.resultado=this.a * this.b;
  }

  public getDivision(){
    this.resultado=this.a/this.b;
  }

  public getTitle():String{
    return this.title;
  }

  public getResultado():number{
    return this.resultado
  }

}
