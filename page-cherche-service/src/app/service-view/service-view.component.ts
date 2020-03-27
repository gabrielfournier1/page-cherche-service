import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-service-view',
  templateUrl: './service-view.component.html',
  styleUrls: ['./service-view.component.css']
})
export class ServiceViewComponent implements OnInit {
	isAuth = false;

  lastUpdate = new Promise(
    (resolve,reject)=>{
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        }, 2000);
      
    }
  )
  services: any[];
  constructor( private serviceService: ServiceService) {
    setTimeout(
      () => {
        this.isAuth= true;
      }, 4000,
    )
  }

  ngOnInit(){
    this.services= this.serviceService.services;
  };
  ///onCours(){
  ///  this.serviceService.switchOnEnCours();
  ///};
  ///onArret(){
  ////  this.serviceService.switchOnTermine();
  ///};

}
