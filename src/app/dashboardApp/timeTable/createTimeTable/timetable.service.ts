import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Headers, Http } from '@angular/http';
import { Timetable } from './timetable';

@Injectable()
export class TimetableService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private timetablesUrl = 'api/timetables';  // URL to web api
  constructor(private http: Http) { }
  timetables: Timetable[];
  getTimetables(): Promise<Timetable[]> {
    return this.http.get(this.timetablesUrl)
      .toPromise()
      .then(response => response.json().data as Timetable[])
      .catch(this.handleError);
  }
  create(timetable: Timetable): Promise<Timetable> {
    return this.http
      .post(this.timetablesUrl, JSON.stringify(timetable), {headers: this.headers})
      .toPromise().then(res => res.json().data as Timetable)
      .catch(this.handleError);
  }
  getTimetable(id: number): Promise<Timetable> {
    debugger;
    const url = `${this.timetablesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Timetable)
      .catch(this.handleError);
  }
  update(timetable: Timetable): Promise<Timetable> {
    const url = `${this.timetablesUrl}/${timetable.id}`;
    return this.http
      .put(url, JSON.stringify(timetable), {headers: this.headers})
      .toPromise()
      .then(() => timetable)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.timetablesUrl}/${id}`;
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
