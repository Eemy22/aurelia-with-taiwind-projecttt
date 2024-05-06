

interface Person { name: string; text: string }
export class Contact{
   kontakt=require('../images/Browsing.png') ;
   name:string;
   text:string;
   
   mood:string ='create';
   persons: Person[] = [];
   
    index:any;
    

   

 
   send() {
      if(this.name&& this.text&&this.mood==='create'){
        const newePerson ={name:this.name,text:this.text};
         this.persons.push(newePerson);
         
          this.mood ='create'
        
         console.log(newePerson ,'neue person')
         this.clearInput()
         
         
            
               
        
      }else{
         if(this.name&& this.text&&this.mood==='update'){
              const update ={name:this.name,text:this.text}
        this.persons[this.index].name=update.name
       this.persons[this.index].text=update.text

       this.mood='create'
       this.name='';
       this.text='';

      console.log(update, this.index,'update')
         }
       
      
       
        
       
       
      }
     
     
     
         
   
   
     
         
      

  }

  
  clearInput(){
   this.name='';
   this.text=''
  }
  
  ubdate(id: number){
 
   for(let i =0; i< this.persons.length;i++){
      id=i;
      this.index =i
this.name = this.persons[id].name;
this.text = this.persons[id].text;
this.mood = 'update'

   }
 
   console.log(id,'id ubdate')
   
  }

  
  delet(id:number){
   
   console.log(this.persons.splice(id),1)
  }
}