import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  Snap2!: FaceSnap;
  ngOnInit(){
    this.mySnap = new FaceSnap(
    'Chouaib SKITOU',
    'Software Engineering stdent at EIL Cote of Opale',
    'https://s3.eu-central-1.amazonaws.com/stagiaires.ma/candidates/pictures/2020/12/x600/167346_chouaib-skitou.jpeg?v=1609454872',
    new Date(),
    0);
    this.Snap2 = new FaceSnap(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        new Date(),
        0
    );
  }
}




