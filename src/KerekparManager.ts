import { Kerekpar } from "./Kerekpar.js";
import type { IKerekpar } from "./Kerekpar.js";

export class KerekparManager{

    private kerekparok: Kerekpar[];

    constructor(kerekparok: Kerekpar[]){
        this.kerekparok = kerekparok
    }

    getAll(): Kerekpar[]{
        return this.kerekparok
    }

    getById(id: number): Kerekpar | undefined{
        return this.kerekparok.find(kerekpar => kerekpar.id === id)
    }

    add(nev: string, leiras: string, ar: number, raktaron: number, kep: string) : number{
        const kiosztottId = this.kerekparok.length + 1
        const ujKerekpar = new Kerekpar(kiosztottId, nev, leiras, ar, raktaron, kep);
        this.kerekparok.push(ujKerekpar)
        return kiosztottId
    }

    update(id: number, adatok: Partial<Omit<IKerekpar, "id">>) : boolean{
        const kerekpar = this.getById(id)
        if(!kerekpar){
            return false
        }

        Object.assign(kerekpar, adatok)
        return true
    }

    delete(id: number) : boolean{
        const index = this.kerekparok.findIndex(k => k.id === id);

        if(index === -1){
            return false
        }

        this.kerekparok.splice(index, 1)
        return true
    }

}

