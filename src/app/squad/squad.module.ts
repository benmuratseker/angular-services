import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { CART_OPTIONS_TOKEN, CartOptions, CartService } from '@core/cart.service';
import { IProductsService, IProductsServiceToken } from '@shared/produtcs-service.interface';
import { EngineersService } from './engineers.service';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [
    {
      provide: CART_OPTIONS_TOKEN,
      useValue: { persistenceType: 'local', persistenceKey: 'squad-cart'}
    },
    //CartService,// add cart service here to provide a differenct cart instance for squad (separate from product cart) - if this module is eager loaded instead of lazy loaded one like here we don't need to provide cartservice here
    //we can only use as CartService too like here instead of defining as a provider
    {
      provide: CartService,
      useFactory: (cartOptions: CartOptions) => { return new CartService(cartOptions); },
      deps: [CART_OPTIONS_TOKEN]
    },
    {
      provide: IProductsServiceToken,
      useClass: EngineersService
    }
  ],
})
export class SquadModule { }
