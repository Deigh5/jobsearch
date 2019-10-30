import { Component } from '@angular/core';
import { JobService } from '../Service/job.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  jobData
  job = ""
  name = []
  idz
  desc

  constructor(public jobServ:JobService) 
  {
    this.jobServ.searchJob().subscribe((data) =>
    {
      this.jobData = data
      // console.log(this.jobData);
           
      for (let i = 0; i < 50; i++)
      {
        // this.name = this.jobData[i]
+-        this.name.push({name:this.jobData[i]})
          // this.idz = this.jobData[i].id
          // console.log(this.idz);
      }
      
    })

    this.desc = this.jobServ.description()
  }

  // getJob()
  // {
  //   this.jobServ.searchJob().subscribe((data) =>
  //   {
  //     this.jobData = data
  //   })
  // }
}
