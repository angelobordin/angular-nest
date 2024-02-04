import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  BadGatewayException,
  CallHandler,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { errorReponse } from '../functions/response';
import { ErrorPersonDelete } from '../error/person-delete';
import { ErrorPersonNotExists } from '../error/person-not-exists';
import { ErrorPersonParamsNotFound } from '../error/person-params-not-found';
import { ErrorPersonPermissionDenied } from '../error/person-permission-denied';
import { ErrorPersonAlreadyExists } from '../error/person-register';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) => {
        let res: any;

        if (
          err instanceof Prisma.PrismaClientKnownRequestError ||
          err instanceof Prisma.PrismaClientInitializationError ||
          err instanceof Prisma.PrismaClientUnknownRequestError ||
          err instanceof Prisma.PrismaClientRustPanicError ||
          err instanceof Prisma.PrismaClientValidationError
        ) {
          res = {
            status: 400,
            error: true,
            message: `Erro no prisma! v:${err.clientVersion}`,
            data: err,
          };
        } else if (err instanceof ErrorPersonNotExists) {
          res = {
            status: 404,
            error: true,
            message: err.message,
            data: err,
          };
        } else if (err instanceof ErrorPersonAlreadyExists) {
          res = {
            status: 400,
            error: true,
            message: err.message,
            data: err,
          };
        } else if (err instanceof ErrorPersonDelete) {
          res = {
            status: 400,
            error: true,
            message: err.message,
            data: err,
          };
        } else if (err instanceof ErrorPersonParamsNotFound) {
          res = {
            status: 400,
            error: true,
            message: err.message,
            data: err,
          };
        } else if (err instanceof ErrorPersonPermissionDenied) {
          res = {
            status: 401,
            error: true,
            message:
              'Usuário não possui permissão necessária para executar esta ação!',
            data: err,
          };
        } else {
          res = {
            status: 500,
            error: true,
            message: 'Erro interno no servidor!',
            data: err,
          };
        }

        throw new BadGatewayException(errorReponse(res));
      }),
    );
  }
}
