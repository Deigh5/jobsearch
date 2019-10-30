import { Component, OnInit } from '@angular/core';
import { JobService } from '../Service/job.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  newDesc
  id
  constructor(public descServ:JobService, public route:ActivatedRoute) 
  { 
    this.newDesc = this.descServ.description()
    this.descServ.getId(this.id)
    this.descServ.searchJob()
  }

  veiwDescription(id)
  {
    this.descServ.veiwDescription(id)
  }

  ngOnInit() 
  {

    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id);
    this.route.paramMap.subscribe(params =>
      {
        this.id = params.get('id')
        console.log(this.id);
        
        this.newDesc = this.descServ.veiwDescription(this.id)
      })
  }

}
