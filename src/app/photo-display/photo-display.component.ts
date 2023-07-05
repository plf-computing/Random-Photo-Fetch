import { Component } from '@angular/core';
import { FetchPhotoService } from '../fetch-photo.service';

@Component({
  selector: 'app-photo-display',
  templateUrl: './photo-display.component.html',
  styleUrls: ['./photo-display.component.css']
})

export class PhotoDisplayComponent {
  photoUrl!:string;




  constructor(private FetchPhotoService:FetchPhotoService){
    this.getPhoto();
    

  }
  onClick(){
    this.getPhoto()

  }
  getPhoto(){
    this.FetchPhotoService.fetchPhoto().subscribe((response)=>{
      this.photoUrl = response.urls.regular;

    });

  }

}
