import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() card;
  constructor(private httpClient: HttpClient) { }
  color = "white"
  ngOnInit() {
  }

  onLike(card: any){
      card.likes += 1
      this.httpClient.post('/api/skills', card).subscribe((ret: Array<any>) =>{
        console.log(this.card.likes)
      });
      if( card.likes >=10){
          this.color="accent"
      }else if( card.likes >=5){
        this.color="primary"
      }
  }

  
 
  onShare(card: any){
    window.open("https://www.linkedin.com/in/brandon-menger-162036243/", '_blank').focus();
  }

}
