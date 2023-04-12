import { User } from "./models/User";

const user = new User({name:'new errecord',age:99400});


user.events.on('change',()=>{
   console.log('changeeee')
})

user.events.trigger('change');