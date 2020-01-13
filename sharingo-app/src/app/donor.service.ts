import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  res: HttpResponse<any>;

  constructor(private http:HttpClient) { }

  getFoodCallRecords():Observable<any>{
    console.log("http://localhost:8080/app/api/donor/foodcallrecords");
    return this.http.get("http://localhost:8080/app/api/donor/foodcallrecords");
  }

  saveDonorFoodDetails(foodDetails: any):Observable<any>{
    console.log("http://localhost:8080/app/api/donor/newdonorform");
    return this.http.post("http://localhost:8080/app/api/donor/newdonorform",foodDetails);
  }
}