import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


// export interface Form {
//     name: string
//     phone: string
//     email?: string
// }


@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }

  get(name, phone, email = ""):Observable<any> {

    const options = { params: {"name":name,"phone":phone,"email":email} as const };

    return this.http.get("/api", options);
  }
}