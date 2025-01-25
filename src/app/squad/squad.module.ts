import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SquadRoutingModule } from './squad-routing.module';
import { SquadCatalogComponent } from './squad-catalog/squad-catalog.component';
import { CartService } from '@core/cart.service';

@NgModule({
  declarations: [SquadCatalogComponent],
  imports: [SharedModule, SquadRoutingModule],
  providers: [CartService],// add cart service here to provide a differenct cart instance for squad (separate from product cart) - if this module is eager loaded instead of lazy loaded one like here we don't need to provide cartservice here
})
export class SquadModule { }
