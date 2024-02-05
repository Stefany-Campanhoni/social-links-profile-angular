import { Component, Input } from "@angular/core"

@Component({
  selector: "app-mybutton",
  standalone: true,
  imports: [],
  templateUrl: "./mybutton.component.html",
  styleUrl: "./mybutton.component.sass",
})
export class MybuttonComponent {
  @Input() name!: string
}
