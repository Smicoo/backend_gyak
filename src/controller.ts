import { Request, Response } from "express";
import { Kerekpar } from "./Kerekpar.js";
import { KerekparManager } from "./KerekparManager.js";
import { data } from "./data.js";

const biciklik = data.map(k => new Kerekpar(
    k.id,
    k.nev,
    k.leiras,
    k.ar,
    k.raktaron,
    k.kep
));

const manager = new KerekparManager(biciklik)

export const getAllBicycles = (req: Request, res: Response) =>{
    res.status(200).json(manager.getAll());
};

export const getAllBicycleById = (req: Request, res: Response) =>{

    const id = Number(req.params.id)

    if(id < 1){
        return res.status(400).json({message: `Hibás azonosító: ${id}`})
    }

    const bicikli = manager.getById(id)

    if(!bicikli){
        return res.status(404).json({message: `A kerékpár nem létezik`})
    }

    return res.status(200).json(bicikli)
}

export const createBicycle = (req: Request, res: Response) =>{
    const {nev, leiras, ar, raktaron, kep} = req.body

    const ujId = manager.add(nev, leiras, ar, raktaron, kep);

    return res.status(201).json({ id: ujId})
}

export const updateBicycle = (req: Request, res: Response) =>{
    const id = Number(req.params.id)
    const adatok = req.body

    const kerekpar = manager.getById(id)
    if(!kerekpar){
        return res.status(404).json({message: "Nem letezik a canga"})
    }

    manager.update(id, adatok)
    return res.status(200).send("Sikeres módositas")

}

export const deleteBicycle = (req: Request, res:Response) =>{
    const id = Number(req.params.id)
    const sikeres = manager.delete(id)
    if(sikeres){
        return res.status(204).send()
    }
    else{
        return res.status(404).json({message: "A kerekpar nem letezik"})
    }

}