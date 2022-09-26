import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seccion1',
  templateUrl: './seccion1.component.html',
  styleUrls: ['./seccion1.component.scss']
})
export class Seccion1Component implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  public lista=["Angular","Laravel","React","Phaser.js","C#",".NET","Unity","Administrar servidores linux","C++","Hacking"];

  public hola="LOL";
}
