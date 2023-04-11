import { User } from "./models/user";

const user = new User({});

user.on('change',()=>{
   console.log('change 1')
});
user.on('change',()=>{
   console.log('change 2')
});
user.on('save',()=>{
   console.log('saved stuff ma brotha')
});


user.trigger('dsf')

