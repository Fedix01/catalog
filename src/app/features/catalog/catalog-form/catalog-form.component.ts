import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import Device from '../model/device.model';
@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrl: './catalog-form.component.css'
})
export class CatalogFormComponent {
  @Input()  active: Device | null = null;
  @Output() save: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() reset: EventEmitter<NgForm> = new EventEmitter<NgForm>();


  saveHandler(f: NgForm) {
    this.save.emit(f.value)
    if (!this.active) {
      f.reset();
    }
  }

  resetHandler(f: NgForm) {
    this.reset.emit();
    f.reset();
  }
}
