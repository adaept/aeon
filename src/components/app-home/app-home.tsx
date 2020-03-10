import { Component, h, State } from "@stencil/core";
import { Todo } from "../../interfaces/todo";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() todos: Todo[] = [];

  componentWillLoad() {
    this.todos = [
      { id: "1", title: "Doit One", description: "First todo description" },
      { id: "2", title: "Doit two", description: "Second todo description" },
      { id: "3", title: "Doit three", description: "Third todo description" }
    ];
    console.log(this.todos);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on{" "}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">
          Profile page
        </ion-button>
      </ion-content>
    ];
  }
}
