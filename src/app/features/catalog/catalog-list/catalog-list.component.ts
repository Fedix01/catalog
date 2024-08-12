import { Component, Input, Output, EventEmitter } from '@angular/core';
import Device from '../model/device.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrl: './catalog-list.component.css'
})
export class CatalogListComponent {
  @Input() devices: Device[] = [];
  @Input() active: Device | null = null;
  @Output() setActive: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() delete: EventEmitter<Device> = new EventEmitter<Device>();

  faTrash = faTrash;

  deleteHandler(event: MouseEvent, device: Device) {
    event.stopPropagation();
    this.delete.emit(device);
  }
}
