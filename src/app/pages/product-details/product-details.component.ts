import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService:ApiService
    ) {}
  
     selectedId = Number(this.route.snapshot.params['id']);
     product = toSignal(this.apiService.getProduct(this.selectedId));
     

  
  //this.service.getProduct(this.selectedId));
  
}
