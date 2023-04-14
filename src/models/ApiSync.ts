import axios, { AxiosPromise } from "axios";

interface HasId{
   id?:number;
}

export class ApiSync<T extends HasId> {

   constructor(public rootUrl:string){}

   fetch(id:number):AxiosPromise{
      return axios.get(`${this.rootUrl}/${id}`)
   }

   save(data:T):AxiosPromise{

      const {id} = data;

      if(id){
         //se esiste l'id, put (update)
         return axios.put(`${this.rootUrl}/${id}`,data)
      }else{
         //se non esiste,post (creiamo)
         return axios.post(this.rootUrl,data)
      }
   }
}