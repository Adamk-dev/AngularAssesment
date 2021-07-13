import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-subscriptions',
  templateUrl: './product-subscriptions.component.html',
  styleUrls: ['./product-subscriptions.component.scss'],
})
export class ProductSubscriptionsComponent implements OnInit {
  products: any;
  interval: any;
  closeResult = '';

  constructor(
    private productService: ProductService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.getProductItem();
    this.interval = 'monthly';
  }

  public changeInterval(event: any) {
    console.log('ASDA', event.target.value);
    if (event.target.value == 'monthly') {
      this.interval = 'monthly';
    } else {
      this.interval = 'yearly';
    }
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getProductItem() {
    this.productService.getProducts().subscribe((res: any) => {
      if (res) {
        this.products = res.products;
      }
    });
  }
}
