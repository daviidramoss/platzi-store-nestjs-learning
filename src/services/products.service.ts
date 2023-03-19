import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductEntity } from "../entities/product.entity";
import { CreateProductDto, UpdateProductDto } from "../dtos/products.dtos";

@Injectable()
export class ProductsService {
  private counter = 2;
  private products: ProductEntity[] =
    [
      {
        id: 1,
        name: "prd 1",
        desc: "desc1",
        price: 100,
        image: "",
        stock: 100
      },
      {
        id: 2,
        name: "prd 2",
        desc: "desc2",
        price: 200,
        image: "",
        stock: 200
      }];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`no se encontro producto con el id ${id}`);
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counter += 1;
    const newProduct = {
      id: this.counter,
      ...payload
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) {
      throw new NotFoundException(`no se encontro producto con el id ${id}`);
    }
    let index = this.products.findIndex((prd => prd.id === id));
    this.products[index] = { ...product, ...payload };
    return this.products[index];
  }

  delete(id: number){
    const index = this.products.findIndex((prd) => prd.id === id);
    if(index!== -1){
      throw new NotFoundException(`no se encontro producto con el id ${id}`);
    }
    this.products.splice(index, 1);
  }

}
