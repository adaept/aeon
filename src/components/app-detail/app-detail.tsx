import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-detail',
  styleUrl: 'app-detail.css'
})
export class AppDetail {
  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Detail</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">

      </ion-content>
    ];
  }
}
