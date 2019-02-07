import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../services/example/example.service';

declare var M:any;

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  message:string;
  constructor(private exampleSerivce:ExampleService) { }

  ngOnInit() {
  }

  /**
   * getExample
   * 
   * this method is an example of how to call a service method, and subscribe to it response
   */
  getExample() {
    this.exampleSerivce.get().subscribe( success => {
      this.message = success['message'];
    }, error => {
      M.toast(error, 4000);
    });
  }

  /**
   * createExample
   * 
   * this method is an example of how to call a service method, and subscribe to it response
   */
  createExample() {
    let body = {
      content: 'example'
    };

    this.exampleSerivce.create(body).subscribe( success => {
      this.message = success['message'];
    }, error => {
      M.toast(error, 4000);
    });
  }

  /**
   * updateExample
   * 
   * this method is an example of how to call a service method, and subscribe to it response
   */
  updateExample() {
    let body = {
      content: 'example'
    };

    this.exampleSerivce.update(body).subscribe( success => {
      this.message = success['message'];
    }, error => {
      M.toast(error, 4000);
    });
  }

  /**
   * deleteExample
   * 
   * this method is an example of how to call a service method, and subscribe to it response
   */
  deleteExample(id) {
    this.exampleSerivce.delete(id).subscribe( success => {
      this.message = success['message'];
    }, error => {
      M.toast(error, 4000);
    });
  }

}
