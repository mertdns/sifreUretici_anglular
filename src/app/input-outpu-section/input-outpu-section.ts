import { Component } from '@angular/core';

@Component({
  selector: 'app-input-outpu-section',
  imports: [],
  templateUrl: './input-outpu-section.html',
  styleUrl: './input-outpu-section.css',
})
export class InputOutpuSection {
  result: string = "Çıktı: ";
  uzunluk!: number;
  characters: Array<string> = [
    // Küçük harfler
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z",

    // Büyük harfler
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z",

    // Sayılar
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

    // Güvenli semboller
    "!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="
  ];

  Change(value: string) {
    this.uzunluk = parseInt(value);
  }

  Create() {
    if (isNaN(this.uzunluk)) {
      alert("Lütfen uzunluğu belirten bir sayı giriniz");
      return;
    };

    this.result = "";
    for (let i = 0; i < this.uzunluk; i++) {
      let randomIndex: number = Math.floor(Math.random() * this.characters.length);
      this.result += this.characters[randomIndex];
    }
  }

  Copy(){
    if(this.result == "Çıktı: "){
      alert("Şifre üretilmemiş");
      return;
    }

    navigator.clipboard.writeText(this.result);
    alert("Şifre kopyalandı");
  }
}
