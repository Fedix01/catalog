import { Injectable } from "@angular/core";
import Device from "../model/device.model";
@Injectable({
    providedIn:'root'
})
export class CatalogStore {
    devices: Device[] = [];
    active: Device | null = null;

    load(result:Device[]) {
this.devices = result
    }

    add(device:Device) {
        this.devices.push(device);
        this.active = null;
    }

    edit(device:Device) {
        const index = this.devices.findIndex(d => d.id === this.active?.id);
        this.devices[index] = device;
    }

    delete(device:string) {
        const index = this.devices.findIndex(d => d.id === device);
        this.devices.splice(index, 1);
    }

    setActive(device:Device) {
        this.active = device;
    }

    reset() {
        this.active = null;
    }
}