import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ClassifierService } from '../classifier.service';
import { ImageService } from '../image.service';
import { ImageSnippet } from '../image-snippet';
import { Label } from '../label';

@Component({
  selector: 'app-user-file-input',
  templateUrl: './user-file-input.component.html',
  styleUrls: ['./user-file-input.component.scss']
})
export class UserFileInputComponent implements OnInit {

  @Output() retrievedEvent = new EventEmitter<string>();

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService){}

  ngOnInit() {
  }

  private emitLabel( label:string ) {
    this.retrievedEvent.emit( label );
  }

  private onSuccess( res: any) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
    console.log( "res" );
    this.retrievedEvent.emit( res );
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {

    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;

      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess( res );
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }
}
