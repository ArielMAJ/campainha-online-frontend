import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HealthService } from '../../services/health.service';
import { BellService } from '../../services/bell.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './campanhia.component.html',
  styleUrl: './campanhia.component.css',
})
export class CampanhiaComponent {
  buttons101to108 = Array.from({ length: 8 }, (_, i) => 101 + i);
  buttons201to208 = Array.from({ length: 8 }, (_, i) => 201 + i);

  // Variável para armazenar o último botão pressionado
  lastButtonPressed: number | null = null;


    constructor(
      private router: Router,
      private toastr: ToastrService,
      private bellService: BellService
    ) {
    }

  onButtonClick(apartmentId: number): void {
    this.lastButtonPressed = apartmentId;
    console.log(`Campanhia do apartamento ${apartmentId} pressionada. Favor aguardar`);

    this.bellService.ringBell(apartmentId).subscribe(
      (response) => {
        this.toastr.success('O morador foi notificado via WhatsApp.', 'Campainha acionada!');
      },
      (error) => {
        if (error.status === 404) {
          this.toastr.error(`Campainha desabilitada para o apartamento ${apartmentId}`, 'Erro');
        }
      }
    );
    
    setTimeout(() => {
      this.lastButtonPressed = null;
    }, 5000);
  }

}
