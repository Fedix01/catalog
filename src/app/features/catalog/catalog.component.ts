import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Device from './model/device.model';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  devices: Device[] = [];
  active: Device | null = null;

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe(result => this.devices = result);
  }


  save(device: Device) {
    if (this.active?.id) {
      this.edit(device);
    } else {
      this.add(device);
    }
  }

  add(device: Device) {
    this.http.post<Device>(`http://localhost:3000/devices/`, device)
      .subscribe(result => {
        this.devices.push(result);
        this.active = null;
      });
  }

  deleteHandler(device: Device) {
    this.http.delete(`http://localhost:3000/devices/${device.id}`)
      .subscribe(() => {
        const index = this.devices.findIndex(d => d.id === device.id);
        this.devices.splice(index, 1);
      });
  }

  edit(device: Device) {
    this.http.patch<Device>(`http://localhost:3000/devices/${this.active?.id}`, device)
      .subscribe(res => {
        const index = this.devices.findIndex(d => d.id === this.active?.id);
        this.devices[index] = res;
      });
  }

  setActive(device: Device) {
    this.active = device;
  }

  reset() {
    this.active = null;
  }
}
