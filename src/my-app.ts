import { IRouteableComponent, IRoute } from '@aurelia/router';
import { ProtoFolio} from './componenten/view/Protofolio/Proto-folio';
import { About} from './componenten/view/About/About';
import { Contact} from './componenten/view/Contact/Contact';
import { Social} from './componenten/view/Social/Social';



export class MyApp implements IRouteableComponent{
  logo =require('./componenten/view/images/OIP.jpg');
  private display:string;
  private toggelMenue:boolean =true;
   menue(){
    if(this.toggelMenue){
      this.display='hidden';
      // this.display = 'block'
      this.toggelMenue =false
      console.log(false)
    }else{
      this.display = 'block'
      // this.display='hidden';
      this.toggelMenue=true
    }
    console.log(true)
   }
  static routes: IRoute[] = [
    {
      path: ['','protofolio'],
      component: ProtoFolio,
      title: 'ProltoFolio',
    },
    {
      path: ['/about'],
      component: About,
      title: 'About',
    },
    {
      path: ['/contact'],
      component: Contact,
      title: 'Contact',
    },
    {
      path: ['social'],
      component: Social,
      title: 'Social',
    },
   
  ]
  
}
