import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

collegeName : string = 'MCIT College';

da = new Date();

Amount = 123456;


servers = ['test', 'prod', 'pre prod', 'user', 'TA', 'TI'];

rows = 2;
// rows = this.servers.length


rowsstart = 0;
rowsend  = 4;





}
