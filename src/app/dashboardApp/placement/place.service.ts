import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Place } from './place';

@Injectable()
export class PlaceService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private placesUrl = 'api/places';  // URL to web api
  constructor(private http: Http) { }
  places: Place[];
  getPlaces(): Promise<Place[]> {
    return this.http.get(this.placesUrl)
      .toPromise()
      .then(response => response.json().data as Place[])
      .catch(this.handleError);
  }
  create(place: Place): Promise<Place> {
    return this.http
      .post(this.placesUrl, JSON.stringify(place), {headers: this.headers})
      .toPromise().then(res => res.json().data as Place)
      .catch(this.handleError);
  }
  getPlace(id: number): Promise<Place> {
    debugger;
    const url = `${this.placesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Place)
      .catch(this.handleError);
  }
  update(place: Place): Promise<Place> {
    const url = `${this.placesUrl}/${place.id}`;
    return this.http
      .put(url, JSON.stringify(place), {headers: this.headers})
      .toPromise()
      .then(() => place)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.placesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
