import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Torre Eiffel',
      imageURL: 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_9e2cb8a2.jpg',
      comments: ['Asombroso', 'Hermoso']
    },
    {
      id: '2',
      title: 'Torre Pisa',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/6/66/The_Leaning_Tower_of_Pisa_SB.jpeg',
      comments: ['Inclinado', 'Ingenioso']
    },
    {
      id: '3',
      title: 'Taj Mahal',
      imageURL: 'https://lh3.googleusercontent.com/RfaTa3bsm8zmVJYznMHpncW4HCNPmPf3fstlmU5hNNm-8j3Mz8nJjUj_avt1Qi0',
      comments: []
    }
  ]

  constructor() { }


  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id == placeId;
      })
    }

  }

  addPlaces(title: string, imageURL: string) {
    this.places.push(
      {
        title,
        imageURL,
        comments: [],
        id: this.places.length + 1 + ""
      }
    );
  }

  deletePlaces(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    });
  }
}
