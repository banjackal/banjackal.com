import { Component } from "@angular/core";

@Component({
  selector: "app-links",
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.css"],
})
export class LinksComponent {
  public goToLink(url: string) {
    window.open(url);
  }
}
