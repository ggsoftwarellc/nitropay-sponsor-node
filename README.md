# NitroPay Sponsor Library for Node

## Description

Creates a signed token, for passing user identity to sponsor client library.

```js
var sponsor = require("nitropay-sponsor-node");

var signer = new sponsor.Signer(privateKey);
var token = signer.sign({
    userId: userId,
    siteId: siteId
});
```
