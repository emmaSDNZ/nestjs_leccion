import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    getProducts(){
        return "Get All products"
    }
}
