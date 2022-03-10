import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  
  buttonText!: string;

  ngOnInit() {
    this.buttonText = 'Oh Snap!'
  }


  
  onSnap(){
    if(this.buttonText === 'Oh Snap!'){
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, Unsnap!';
    } else{
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
   
  }

}
