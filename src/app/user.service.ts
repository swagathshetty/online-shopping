import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Injectable } from '@angular/core';
import  *  as firebase from 'firebase';
import{AppUser} from'./models/app-user';
import { AngularFireModule } from 'angularfire2';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) {

   }
   save(user:firebase.User){
     this.db.object('/user/'+user.uid).update({
     name:user.displayName,
     email:user.email
    });
   }
   get(uid:string):FirebaseObjectObservable<AppUser>{
    return  this.db.object('/users/'+uid);
   }
}
