import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;

  constructor(private ActRouter: ActivatedRoute, private router: Router,
    private placesServices: PlacesService, private alertCtr: AlertController) { }

  ngOnInit() {
    this.ActRouter.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeId');
      this.place = this.placesServices.getPlace(recipeId);
    })
  }

  async deletePlace() {
    const alertElm = await this.alertCtr.create({
      header: 'Desea Borrarlo?',
      message: 'Perdera el elemento',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.placesServices.deletePlaces(this.place.id)
            this.router.navigate(['/places'])
          }
        }
      ]
    });
    alertElm.present();
  }
}
