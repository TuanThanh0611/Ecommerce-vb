import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {Oauth2Service} from "../../auth/oauth2.service";
import {injectQuery} from "@tanstack/angular-query-experimental";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'ecommerce-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, FaIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent{
  oauth2Service = inject(Oauth2Service);
  // productService = inject(UserProductService);
  // cartService = inject(CartService);

  nbItemsInCart = 0;

  connectedUserQuery = this.oauth2Service.connectedUserQuery;

  // categoryQuery = injectQuery(() => ({
  //   queryKey: ['categories'],
  //   queryFn: () => lastValueFrom(this.productService.findAllCategories()),
  // }));

  login(): void {
    this.closeDropDownMenu();
    this.oauth2Service.login();
  }

  logout(): void {
    this.closeDropDownMenu();
    this.oauth2Service.logout();
  }

  isConnected(): boolean {
    return (
      this.connectedUserQuery?.status() === 'success' &&
      this.connectedUserQuery?.data()?.email !== this.oauth2Service.notConnected
    );
  }

  closeDropDownMenu() {
    const bodyElement = document.activeElement as HTMLBodyElement;
    if (bodyElement) {
      bodyElement.blur();
    }
  }

  closeMenu(menu: HTMLDetailsElement) {
    menu.removeAttribute('open');
  }
  ngOnInit() {
  }

  // ngOnInit(): void {
  //   this.listenToCart();
  // }

  // private listenToCart() {
  //   this.cartService.addedToCart.subscribe((productsInCart) => {
  //     this.nbItemsInCart = productsInCart.reduce(
  //       (acc, product) => acc + product.quantity, 0
  //     );
  //   });
  // }
}
