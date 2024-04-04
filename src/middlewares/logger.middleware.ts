import { Request, Response, NextFunction } from 'express';

export function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
    console.log(`${new Date().toISOString()} - ${req.method} - ${req.originalUrl}`);
    next();
}
export function errorHandlerMiddleware(error: any, req: Request, res: Response, next: NextFunction) {
    console.log(error);
    res.status(500).send('Something broke!');
}

export function notFoundHandlerMiddleware(req: Request, res: Response, next: NextFunction) {
    res.status(404).send('Not found');
}
