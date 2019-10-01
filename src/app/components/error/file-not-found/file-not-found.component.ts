import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-not-found',
  templateUrl: './file-not-found.component.html',
  styleUrls: ['./file-not-found.component.css']
})
export class FileNotFoundComponent implements OnInit {

  constructor(private router:  Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigateByUrl('/');
  }

}