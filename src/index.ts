import { User } from "./models/user";

const user = new User({name:'new record',age:9900});



user.save();