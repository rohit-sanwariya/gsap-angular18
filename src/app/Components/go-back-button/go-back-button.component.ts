import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.scss'
})
export class GoBackButtonComponent {

}
