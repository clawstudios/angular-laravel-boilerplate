import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  baseUrl:string;

  
	/**
	 * Ctor
	 * @param http 
	 */
  constructor(private http:HttpClient) {
    this.baseUrl = environment.apiUrl + 'example';
  }

  /**
	 * get
	 */
	get () {
		return this.http.get(this.baseUrl);
	}

  /**
	 * create
	 * @param body
	 */
	create (body) {
		return this.http.post(this.baseUrl, body);
	}

  /**
	 * update
	 * @param body
	 */
	update (body) {
		return this.http.put(this.baseUrl, body);
	}

  /**
	 * delete
	 * @param id
	 */
	delete (id) {
		return this.http.delete(this.baseUrl + '/' + id);
	}
}
