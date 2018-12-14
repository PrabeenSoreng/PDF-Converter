import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://localhost:3000/api/converter';

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }

  convertFile(file, fileName): Observable<any>{
    return this.http.post(`${URL}/word-to-pdf`, {
      file: file,
      name: fileName
    });
  }

  downloadFile(filename) {
    return this.http.get(`${URL}/word-to-pdf/${filename}`, {
      responseType: 'blob'
    });
  }
}
