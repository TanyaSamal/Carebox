import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'carebox-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, HttpClientModule],
  providers:[ MatIconRegistry ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  info = 5;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIcon(
      "custom",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/group.svg")
    );
  }
}
