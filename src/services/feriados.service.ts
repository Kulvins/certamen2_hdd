import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Feriado } from 'src/model/feriado';

@Injectable()
export class FeriadosService {
    constructor(private readonly configService:ConfigService){}
        async getFeriados(): Promise<Feriado[]>{
            let url:string = this.configService.get<string>("ENDPOINT_FERIADOS");

            let res = await axios.get(url);
            let feriadosData = res.data as Feriado[];
            return feriadosData.map((feriado) => ({
                nombre: feriado.nombre,
                fecha: feriado.fecha,
                irrenunciable: feriado.irrenunciable === "1" ? "Si" : "No",
              }));
            //return infoFeriados
        }



        async getIrrenunciables(): Promise<Feriado[]>{
            let url:string = this.configService.get<string>("ENDPOINT_FERIADOS");

            let res = await axios.get(url);
            let feriadosData = res.data as Feriado[];
            return feriadosData.filter((feriado) => feriado.irrenunciable === "1").map((feriado) => ({
                nombre: feriado.nombre,
                fecha: feriado.fecha,
                irrenunciable: feriado.irrenunciable === "1" ? "Si" : "No",
              }));
            //return infoFeriados
        }


    }
