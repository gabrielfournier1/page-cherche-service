import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {

  constructor( private serviceService: ServiceService,
    private router: Router) { }

  defaultOnOff= "attendre";
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const name=form.value["name"];
    const personne_name = form.value["personne-name"];
    const lieu= form.value["lieu"];
    const description = form.value["description"];
    const fin_service = form.value["fin-service"];
    const importance = form.value["importance"];
    this.serviceService.addService(name, personne_name, lieu, description,fin_service,importance);
    this.router.navigate(['/services']);
  }

}
