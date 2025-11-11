import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicsService {

    getMyFirstGet(): object {
        return {
            service: 'Blog-Backend',
            controller: '/basics',
            function: 'Get Example'
        };
    }
}