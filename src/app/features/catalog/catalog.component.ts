import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Device from './model/device.model';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
devices:Device[] = [];
faTrash = faTrash;
  constructor(private http:HttpClient) {
    this.getAll()
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
}
