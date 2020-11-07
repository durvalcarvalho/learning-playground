import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private _service: PaymentDetailService, private toastr: ToastrService) {
    this._service.refreshList();
  }

  get service() {
    return this._service;
  }

  ngOnInit() {
    this._service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this._service.formData = Object.assign({}, pd);
  }

  onDelete(PMId: number) {
    this._service.deletePaymentDetail(PMId).subscribe(
    res => {
      this._service.refreshList();
      this.toastr.success('Delete successfully', 'Payment Detail Register');
    },
    err => {
      console.log(err);
    });
  }
}
