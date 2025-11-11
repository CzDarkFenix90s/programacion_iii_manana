import { Controller, Get } from '@nestjs/common';
import {BasicsService} from './basics.service';

@Controller('basics')
export class BasicsController {
    constructor(private readonly basicsService: BasicsService){}

        @Get()
        getMyFirstGet(): object {
            return this.basicsService.getMyFirstGet();
        } 
}
