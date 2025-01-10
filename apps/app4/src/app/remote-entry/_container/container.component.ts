import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MackAgGridModule } from '@shell/ag-grid';

@Component({
  selector: 'shell-app2-container',
  standalone: true,
  imports: [CommonModule, MackAgGridModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  columnDefs = [
    { field: 'name', headerName: 'Name' },
    { field: 'amount', headerName: 'Amount', isSummable: true },
    { field: 'tax', headerName: 'Tax', isSummable: true },
    { field: 'date', headerName: 'Date' }
  ]

  dataSource =  [
    { name: 'Item 1', amount: '1e3', tax: 200, date: '2025-01-09' },
    { name: 'Item 2', amount: 300, tax: '3.5e2', date: '2025-01-08' },
    { name: 'Item 3', amount: 400, tax: 100, date: '2025-01-07' }
  ];

}
