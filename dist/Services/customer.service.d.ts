import { Repository } from 'typeorm';
import { CustomerEntity } from 'src/entitys/customer.entity';
import { CustomerDto } from 'src/DOTs/customer.dto';
export declare class CustomerService {
    private customerRepo;
    constructor(customerRepo: Repository<CustomerEntity>);
    addcustomer(user: CustomerDto): Promise<CustomerDto & CustomerEntity>;
    getCustomerByid(id: any): Promise<CustomerEntity>;
    getCustomerByNumber(Number: any): Promise<CustomerEntity>;
    getallCustomer(): any;
    updateCustomer(Dto: CustomerDto, id: any): Promise<import("typeorm").UpdateResult>;
    DeleteCustomer(id: any): Promise<import("typeorm").DeleteResult>;
}
