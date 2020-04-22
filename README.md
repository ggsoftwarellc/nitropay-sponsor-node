# NitroPay Sponsor Library for Node

## Description

Creates a signed token for passing user identity to the NitroPay sponsor client library.

```js
var sponsor = require("nitropay-sponsor-node");

var signer = new sponsor.Signer(privateKey);
var token = signer.sign({
    userId: userId, // required
    siteId: siteId, // required
    name: 'John Doe', // optional
    email: 'foo@bar.com', // optional
    avatar: 'https://s.gravatar.com/avatar/0d3964876826ac9554d88d5a51ea87a2?s=80', // optional
});
```

You can use `getUserSubscription(userID)` to look up subscription info for a user.
