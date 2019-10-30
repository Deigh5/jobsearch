import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  job = []
  id
  
  descData
  constructor(public http:HttpClient) { }

  searchJob()
  {
    return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/jobs')
  }

  getJob()
  {
    return this.job
  }

  description()
  {
    this.searchJob().subscribe((data) =>
    {
      this.descData = data
      console.log(this.descData);
      

      for(let i = 0; i < 50; i++)
      {
        this.id = this.descData[i].id
        // console.log(this.id);
        
      }
    })

    return this.http.get('https://us-central1-mlab-challenge.cloudfunctions.net/job?id=' + this.id)
  }

  getId(id)
  {
    return this.id
  }

  veiwDescription(id)
  {
    let descID = []
    console.log(this.descData)  
    this.descData.forEach(descData =>{
      
        if(descData.id == id)
        {
          descID = descData          
        }
      });

      console.log(descID);

    return descID
  }
}
