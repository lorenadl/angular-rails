import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css'],
  providers: [ DocumentService ]
})
export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private documentService: DocumentService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getDocuments());
  }

  getDocuments() {
    this.documentService.getDocuments()
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        );
  }

}

// documents: Document[] = [
//   {
//     title: "My First Doc",
//     description: 'dnsknfdkj',
//     file_url: 'http://google.com',
//     updated_at: '11/11/16',
//     image_url: 'https://ak0.picdn.net/shutterstock/videos/4889390/thumb/1.jpg'
//   },
//   {
//     title: "My Second Doc",
//     description: 'dnsknfdkj',
//     file_url: 'http://google.com',
//     updated_at: '11/11/16',
//     image_url: 'https://askleo.com/wp-content/uploads/2013/12/laptop-on-desktop.jpg'
//   },
//   {
//     title: "My Last Doc",
//     description: 'dnsknfdkj',
//     file_url: 'http://google.com',
//     updated_at: '11/11/16',
//     image_url: 'https://thumb9.shutterstock.com/display_pic_with_logo/54809/119766676/stock-photo-happy-young-business-man-work-in-modern-office-on-computer-119766676.jpg'
//   }
// ]
