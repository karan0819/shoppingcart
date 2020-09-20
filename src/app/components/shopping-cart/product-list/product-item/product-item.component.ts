import { Component, OnInit, Input, } from '@angular/core';
import { Product } from '../../../../models/product';
import { MessangerService } from '../../../../services/messanger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;

  constructor(private msg: MessangerService) { }

  ngOnInit(): void {
  }


  handleAddtoCart() {
    this.msg.sendMsg(this.productItem)
  }


}
