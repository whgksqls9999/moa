import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { Rolse } from './roles.decorator';

/** @Guide Guard는 CanActivate 인터페이스를 구현해야한다 */
export class RolesGuard implements CanActivate {
    /** @Guide 커스텀 데코레이터 활용을 위해 reflector 의존성을 주입한다 */
    constructor(private reflector: Reflector) {}

    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const roles = this.reflector.get(Rolse, context.getHandler());
        if (!roles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        return matchRoles(roles, user.roles) as true;
    }
}
