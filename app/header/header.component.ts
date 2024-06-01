import { CommonModule, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { Post } from '../post';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, RouterModule, NgClass, SearchComponent, NgIf, NgFor, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  isOpen: boolean = false;

  toggleMenu(): void {
    this.isOpen = this.isOpen ? false : true
  }


  searchWord: string = ''
  searchedPost: Post[] = [];


  infoService: InfoService = inject(InfoService)


  takeSearchedValue(str: string): void {
    this.searchWord = str;

    // this.infoService.getPosts().then((postList: Post[]) => {
    //   this.searchedPost = postList.filter((el) => el.title.toLowerCase().includes(str.toLowerCase()))
    // })

  }

  ngOnInit(): void {
    this.infoService.getPosts().subscribe(
      data => this.searchedPost = data,
      error => console.error(error),
      () => console.log('data completely arrived')
    )


  }




}
