import { Component, OnInit, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Post } from '../post';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../services/info.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  mainPost:Post[] = [];


  route:ActivatedRoute=inject(ActivatedRoute)

  infoService:InfoService = inject(InfoService)

  constructor(){

  }

  ngOnInit(): void {
    this.infoService.getPosts().subscribe(
      data => this.mainPost = data,
      error => console.error(error),
      () => console.log('data completely arrived')
    )
  }



}
