import express, { Request, Response } from 'express';
import environment from '../environment';

const router = express.Router();

router.get('/', (re: Request, resp: Response) => {
    resp.status(200).json({
        version: '1.0.0',
        status: 'up',
        environment: environment.APP_ENVIRONMENT,
    });
});

export default router;
