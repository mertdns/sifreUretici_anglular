import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { InputOutpuSection } from './input-outpu-section/input-outpu-section';

@Component({
  selector: 'app-root',
  imports: [Header, InputOutpuSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('sifreUretici');

}
