export class ServiceService {
    services=[
        {
            id:1,
          name: "sortir les poubelles",
          importance:"attendre",
          personne_name: "",
          lieu: "",
          description: "Coucou mon con ce serait pour sortir mes poubelles tu vois ", 
          fin_service:"",
        },
        {
            id:2,
          name: "faire les courses",
          importance:"urgent",
          personne_name: "",
          lieu: "",
          description: "En fait j' ai faim, mais je ne peux pas me deplacer donc si tu peux faire mes courses le bro", 
          fin_service:"",
        }
      ];
    
    getServiceById(id :number){
        const service = this.services.find(
            (serviceObject)=>{
            return serviceObject.id=== id;
            }
        );
        return service;
    }
    /**switchOnEnCours(){
        for (let service of this.services){
            service.importance='attendre';
        }
    }
    switchOnTermine(){
        for (let service of this.services){
            service.importance='urgent';
        }
    }
    switchOnOne(index: number){
        this.services[index].importance="attendre";
    }
    switchOffOne(index: number){
        this.services[index].importance="urgent";
    } */

    addService(name:string,personne_name:string, lieu: string, description:string, fin_service: string, importance: string ){
        const serviceObject= {
            id:0,
            name:"",
            personne_name:"",
            lieu:"",
            description:"", 
            fin_service:"",
            importance:"",
        };
        serviceObject.name=name;
        serviceObject.personne_name=personne_name;
        serviceObject.lieu=lieu;
        serviceObject.description=description;
        serviceObject.fin_service=fin_service;
        serviceObject.importance=importance;
        serviceObject.id=this.services[(this.services.length-1)].id+1;

        this.services.push(serviceObject);
        ;
    }
}