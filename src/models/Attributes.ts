
export class Attributes<T extends object> {

   constructor(private data:T){}

   get = <K extends keyof T>(key:K):T[K] =>{ //K può essere solo una stringa che è nelle chiavi di T, quindi 'name','age' or 'id'
      return this.data[key]; 
   }

   set(update:T):void{
      Object.assign(this.data, update);
   }

   getAll():T {
      return this.data;
   }
}




