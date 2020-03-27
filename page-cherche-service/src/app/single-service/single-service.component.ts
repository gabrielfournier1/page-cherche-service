import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {

  name: string="Service";
  description : string=" Description";
  personne_name: string ="PersonneName";
  lieu: string ="Lieu";
  fin_service : string = "FinService";
  importance : string = "Importance";

  constructor(private serviceService: ServiceService,
    private route:ActivatedRoute) { }

  ngOnInit()  {
    const id =this.route.snapshot.params['id'];
    this.name=this.serviceService.getServiceById(+id).name;
    this.description=this.serviceService.getServiceById(+id).description;
    this.lieu=this.serviceService.getServiceById(+id).lieu;
    this.personne_name=this.serviceService.getServiceById(+id).personne_name;
    this.fin_service=this.serviceService.getServiceById(+id).fin_service;
    this.importance=this.serviceService.getServiceById(+id).importance
  }

}
