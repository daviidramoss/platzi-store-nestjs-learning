import { Controller, Get, Param, Query } from "@nestjs/common";
import { AppService } from "./app.service";
import { query } from "express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    return "Hola Mundo 2";
  }

  @Get("nuevo")
  newEndpoint() {
    return "nuevo";
  }

  @Get("/ruta/")
  hello() {
    return "con / slashes / ";
  }
}
