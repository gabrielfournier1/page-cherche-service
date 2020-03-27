import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-liste-des-services',
  templateUrl: './liste-des-services.component.html',
  styleUrls: ['./liste-des-services.component.css']
})
export class ListeDesServicesComponent implements OnInit {

  @Input() serviceName: string;
  @Input() serviceDescription: string;
  @Input() serviceImportance: string;
  @Input() indexOfService: number;
  @Input() id: number;
  constructor(private serviceService:ServiceService) { }

  ngOnInit(): void {
  }

  getDescription() {
    return this.serviceDescription;
  }
  getColor() {
    if (this.serviceImportance == "attendre") {
      return 'green';
    };
    return 'red';
  }
  /////!onSwitchOn(){
   //// this.serviceService.switchOnOne(this.indexOfService)

  ////}
  ////onSwitchOff(){
    ////this.serviceService.switchOffOne(this.indexOfService)
///}
}
