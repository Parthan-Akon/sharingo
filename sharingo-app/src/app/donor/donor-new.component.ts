import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DonorService } from '../donor.service';

@Component({
  selector: 'app-donor-new',
  templateUrl: './donor-new.component.html',
  styleUrls: ['./donor-new.component.css']
})
export class DonorComponent implements OnInit {

   donorForm =new FormGroup({});
   saveObject:any;
   donor:any;
   public infoFlag: boolean = false;
   public saveText:string="save"
   
  constructor(private fb: FormBuilder,private donorService: DonorService) { }

  ngOnInit() {

    this.donorForm = this.fb.group({
      name:[''],
      address:[''],
      contactNumber:[''],
      foodCount:[''],
      foodItems:[''],
      description:[''],
      serviceCharge:[''],
      operator:['']

    })
  
  }

  saveDonor()
  {
    this.saveText= "Saving..."
    this.saveObject=Object.assign({},this.donor,this.donorForm.value)

    console.log(this.saveObject);
    this.donorService.saveDonorFoodDetails(this.saveObject).subscribe(
      result => {
        console.log(result);
        this.infoFlag = true;
        this.saveText= "Saved"
        this.clear();

        setTimeout(function(){
          this.infoFlag=false;
          this.saveText= "Save"
        }.bind(this),1500);

       

        
      }
    )   

  }

  clear(){
    this.donorForm.reset();
  }

}