import { User } from "./models/user";

const user = new User({});
user.set({name:'NewName'});

console.log(user.get('name'));
console.log(user.get('age'));
