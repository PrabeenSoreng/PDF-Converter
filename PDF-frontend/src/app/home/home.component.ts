import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const url = 'http://localhost:3000/api/converter/word-to-pdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  uploader: FileUploader = new FileUploader({
    url: url,
    disableMultipart: true
  });

  constructor() { }

  ngOnInit() {
  }

  onFileSelected(event) {
    console.log(event);
  }
}
