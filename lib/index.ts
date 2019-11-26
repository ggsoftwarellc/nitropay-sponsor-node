import { sign } from 'jws';

export class Signer {
    private privateKey: string;

    constructor(privateKey: string) {
        this.privateKey = privateKey;
    }

    sign(userInfo: UserInfo): string {
        return sign({
            header: {
                alg: 'HS512',
                typ: 'JWT',
            },
            payload: {
                iss: userInfo.siteId,
                sub: userInfo.userId,
                iat: Math.floor(Date.now() / 1000),
                name: userInfo.name || '',
                email: userInfo.email || '',
                avatar: userInfo.avatar || '',
            },
            secret: this.privateKey,
        });
    }
}

export interface UserInfo {
    siteId: string;
    userId: string;
    name: string;
    email: string;
    avatar: string;
}
