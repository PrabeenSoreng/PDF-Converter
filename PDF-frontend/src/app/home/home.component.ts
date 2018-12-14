import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { WordService } from '../services/word.service';
import { saveAs } from 'file-saver';

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
  fileName: string;
  fileTypeError = false;
  selectedFile: any;
  isLoading = false;
  hideDownloadBtn = true;
  pdfFileName: string;

  constructor(private wordService: WordService) { }

  ngOnInit() {
    this.hideDownloadBtn = false;
  }

  onFileSelected(event) {
    console.log(event);
    const file: File = event[0];
    this.fileName = file.name;

    const fileCheck = this.fileName.toLowerCase();
    if(!fileCheck.match(/(\.docx|\.doc|\.rtf)$/)) {
      this.fileTypeError = true;
      return;
    } else {
      this.fileTypeError = false;
    }

    this.ReadAsBase64(file)
      .then(result => {
        this.selectedFile = result;
        this.isLoading = true;

        this.wordService.convertFile(this.selectedFile, this.fileName)
          .subscribe(data => {
            console.log(data);
            this.isLoading = false;
            this.hideDownloadBtn = true;
            this.pdfFileName = data.name;
          }, err => {
            console.log(err);
            this.isLoading = false;
          });
      })
      .catch(err => console.log(err));
  }

  ReadAsBase64(file) {
    const reader = new FileReader();
    const fileValue = new Promise((resolve, reject) => {
      // reader.onload = () => resolve(reader.result);
      reader.addEventListener('load', () => {
        resolve(reader.result);
      });
      // reader.onerror = error => reject(err0r);
      reader.addEventListener('error', event => {
        reject(event);
      });
      reader.readAsDataURL(file);
    });
    return fileValue;
  }

  download() {
    this.wordService.downloadFile(this.pdfFileName)
      .subscribe(data => {
        saveAs(data, this.pdfFileName);
      }, err => console.log(err));
  }
}
