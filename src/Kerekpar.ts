
export interface IKerekpar {
    id: number;
    nev: string;
    leiras: string;
    ar: number;
    raktaron: number;
    kep: string;
}

export class Kerekpar implements IKerekpar {
    id: number;
    nev: string;
    leiras: string;
    ar: number;
    raktaron: number;
    kep: string;

    constructor(
        id: number,
        nev: string,
        leiras: string,
        ar: number,
        raktaron: number,
        kep: string
    ) {
        this.id = id;
        this.nev = nev;
        this.leiras = leiras;
        this.ar = ar;
        this.raktaron = raktaron;
        this.kep = kep;
    }
}
