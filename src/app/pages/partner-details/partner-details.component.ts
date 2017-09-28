import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../services/partner.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.css']
})
export class PartnerDetailsComponent implements OnInit {

  partnerInfo: any = {};

  constructor(
    private partnerThang: PartnerService,
    private activatedThang: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe(
      (params) => {
        const id = Number(params.thePartnerId);
        this.partnerInfo = this.partnerThang.getPartnerDetails(id);
      }
    )
  }

}
