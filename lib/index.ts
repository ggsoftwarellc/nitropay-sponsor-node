import { sign } from 'jws';

export class Signer {
    private privateKey: string;

    constructor(privateKey: string) {
        this.privateKey = privateKey;
    }

    sign(userInfo: UserInfo): string {
        return sign({
            header: { alg: 'HS512' },
            payload: {
                iss: userInfo.siteId,
                sub: userInfo.userId,
                iat: Math.floor(Date.now() / 1000),
            },
            secret: this.privateKey,
        });
    }
}

export interface UserInfo {
    siteId: string;
    userId: string;
}
