import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res
} from "@nestjs/common";
import { Response } from "express";
import { ProductsService } from "../services/products.service";
import { ParseIntPipe } from "../common/parse-int/parse-int.pipe";
import { CreateProductDto, UpdateProductDto } from "../dtos/products.dtos";

@Controller("products")
export class ProductsController {
  constructor(private productsSevice: ProductsService) {
  }

  @Get()
  getProducts(
    @Query("limit") limit = 100,
    @Query("offset") offset = 0,
    @Query("brand") brand: string) {
    return this.productsSevice.findAll();
  }


  @Get("/filter")
  getProductFilter() {
    return {
      message: `i am a product filter`
    };
  }

  @Get("/:id")
  @HttpCode(HttpStatus.OK)
  getProduct(@Param("id", ParseIntPipe) id: number) {
    return this.productsSevice.findOne(id);
  }

  @Get("/express/:productId")
  @HttpCode(HttpStatus.ACCEPTED)
  getProductExpressForm(@Res() response: Response, @Param("productId")
    productId: number) {
    response.status(200).send({
      message: `product ${productId}`
    });
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsSevice.create(payload);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() payload: UpdateProductDto) {
   return this.productsSevice.update(+id, payload);
  }

  @Delete(":id")
  delete(@Param("id") id: number) {
    return this.productsSevice.delete(id);
  }


}
