import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Device from './model/device.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
devices:Device[] = [];

active: Device | null = null;

faTrash = faTrash;
  constructor(private http:HttpClient) {
    this.getAll()
   }

setActive(device:Device) {
  this.active = device;
}

  getAll():void {
this.http.get<Device[]>("http://localhost:3000/devices")
.subscribe(result => this.devices = result )
  }

  deleteItem(device:Device) {
    this.http.delete<Device[]>(`http://localhost:3000/devices/${device.id}`)
    .subscribe(() => {
      this.devices = this.devices.filter((item) => item.id !== device.id)
    })
  }

  save(form:NgForm) {
if (this.active) {
  this.update(form)
} else {
      this.http.post<Device>("http://localhost:3000/devices", form.value)
      .subscribe(result => {
        this.devices.push(result)
        form.reset()
      })
}
  }

  update(form:NgForm) {
this.http.patch<Device>(`http://localhost:3000/devices/${this.active?.id}`, form.value)
.subscribe(res => {
  const index = this.devices.findIndex(d => d.id === this.active?.id);
  this.devices[index] = res;
  form.reset();
  this.active = null
})
  }

  reset(form:NgForm) {
    this.active = null;
    form.reset();
  }

}
