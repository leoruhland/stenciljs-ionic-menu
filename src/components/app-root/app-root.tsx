import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/profile/:name" component="app-profile" />
        </ion-router>
        <ion-split-pane when="lg" contentId="menu-content">
          <ion-menu side="start" type="push" contentId="menu-content">
            <ion-menu-toggle autoHide={false}>
              <ion-list>
                <ion-item-group>
                  <ion-item-divider>
                    <ion-label>Introduction</ion-label>
                  </ion-item-divider>

                  <ion-item href="/" routerDirection="forward"><ion-label>Home</ion-label></ion-item>
                  <ion-item href="/profile/hello" routerDirection="forward"><ion-label>Hello</ion-label></ion-item>
                </ion-item-group>
              </ion-list>
            </ion-menu-toggle>
          </ion-menu>

          <ion-nav id="menu-content"/>
        </ion-split-pane>
      </ion-app>
    );
  }
}
