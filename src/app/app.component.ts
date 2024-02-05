import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { MybuttonComponent } from "./mybutton/mybutton.component"
import { NgForOf } from "@angular/common"

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, MybuttonComponent, NgForOf],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.sass",
})
export class AppComponent {
  title: string = "app"
  buttonNames: Array<string> = [
    "GitHub",
    "Frontend Mentor",
    "LinkedIn",
    "Twitter",
    "Instagram",
  ]
}
