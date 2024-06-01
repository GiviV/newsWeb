import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {


  searchedWord:string= ''


  @Output() searchTxt = new EventEmitter<string>()

  searchedValue(){
    this.searchTxt.emit(this.searchedWord)
  }
}
