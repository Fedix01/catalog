import { Injectable } from "@angular/core";
import Device from "../model/device.model";
import { HttpClient } from "@angular/common/http";
import { CatalogStore } from "./catalog.store";
@Injectable({
    providedIn: 'root'
})
export class CatalogService {

  
    constructor(private http: HttpClient,
        private store:CatalogStore
    ) { }
  
    getAll() {
      this.http.get<Device[]>('http://localhost:3000/devices')
        .subscribe(result => this.store.load(result));
    }
  
  
    save(device: Device) {
      if (this.store.active?.id) {
        this.edit(device);
      } else {
        this.add(device);
      }
    }
  
    add(device: Device) {
      this.http.post<Device>(`http://localhost:3000/devices/`, device)
        .subscribe(result => {
          this.store.add(result)
        });
    }
  
    deleteHandler(device: Device) {
      this.http.delete(`http://localhost:3000/devices/${device.id}`)
        .subscribe(() => {
        this.store.delete(device.id)
        });
    }
  
    edit(device: Device) {
      this.http.patch<Device>(`http://localhost:3000/devices/${this.store.active?.id}`, device)
        .subscribe(res => {
        this.store.edit(res)
        });
    }
  
    setActive(device: Device) {
     this.store.setActive(device)
    }
  
    reset() {
      this.store.reset()
    }
}