import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<String> {
    const formData = new FormData();

    formData.append('image', image);
    return of("cat");
    // return this.http.post('/api/v1/image-upload', formData);
  }
}
