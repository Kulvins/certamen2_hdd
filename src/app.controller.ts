import { Controller, Get } from '@nestjs/common';
import { Feriado } from './model/feriado';
import { FeriadosService } from './services/feriados.service';

@Controller()
export class AppController {
  constructor(private readonly feriadosService: FeriadosService) {}

  @Get('/feriados')
  getFeriados(): Promise<Feriado[]>{
    return this.feriadosService.getFeriados();
  }

  @Get('feriados/irrenunciables')
  getIrrenunciables(): Promise<Feriado[]>{
    return this.feriadosService.getIrrenunciables();
  }
}
