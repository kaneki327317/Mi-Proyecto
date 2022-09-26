import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mi_Proyecto';

  public banner_src="./assets/casa1.svg";

  public cambiarbanner(color:string){
    if(color=="blanco"){
      this.banner_src="./assets/casa1.svg";
    }
    else if(color=="negro"){
      this.banner_src="./assets/casa2.svg";
    }
  }

  public seccion1=false;
  public seccion2=false;
  public seccion3=false;
  public seccion4=false;
  public ultima_seccion=false;

  public resetear_textos(){
    this.seccion1=false;
    this.seccion2=false;
    this.seccion3=false;
    this.seccion4=false;
    this.ultima_seccion=false;
  }

  public cambiar_texto(seccion:number){
    this.resetear_textos();
    if(seccion==1){
      this.seccion1=true;
    }
    else if(seccion==2){
      this.seccion2=true;
    }
    else if(seccion==3){
      this.seccion3=true;
    }
    else if(seccion==4){
      this.seccion4=true;
    }
    else if(seccion==0){
      this.ultima_seccion=true;
    }
  }
}
