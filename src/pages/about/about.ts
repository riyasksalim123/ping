import { Component } from '@angular/core';
import { Camera} from 'ionic-native'
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
@Injectable()
export class AboutPage {
   private heroesUrl:string = 'app/heroes';  // URL to web API
  public test:string;
  public base64Image:any;
  public Comment:any;

  constructor(private http: Http) {
     this.test="teshfvghfdata";
  }


public takePicture(){

  alert("clicked");
 Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;

        alert(this.base64Image);
    }, (err) => {
        console.log(err);
        alert(err);
    });
}
   getComments()  {

         // ...using get request
         return this.http.get(this.heroesUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => {

                           alert(error);
                         });

     }
  private extractData(res: Response) {
    let body = res.json();
    alert(body);
    return body.data || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    alert(errMsg);
   // return Observable.throw(errMsg);
  }





}
