import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload {
	id: string;
	iat: number;
	exp: number;
}

class AuthMiddleware {
	static auth(req: Request, res: Response, next: NextFunction) {
		const { authorization } = req.headers;
		const secretKeyENV = 'secret'; // This key must come from your ENV variable.

		if(!authorization) {
			return res.sendStatus(401);
		}

		const token = authorization.replace('Bearer', '').trim();

		try {
			const data = jwt.verify(token, secretKeyENV);
			
			const { id } = data as TokenPayload;

			req.userId = id;

			return next();
		} catch {
			return res.sendStatus(401);
		}

	}
}

export default AuthMiddleware;