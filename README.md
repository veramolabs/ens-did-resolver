[![npm](https://img.shields.io/npm/dt/ens-did-resolver.svg)](https://www.npmjs.com/package/ens-did-resolver)
[![npm](https://img.shields.io/npm/v/ens-did-resolver.svg)](https://www.npmjs.com/package/ens-did-resolver)

# ens DID Resolver

This is the reference implementation for the [did:ens resolver](https://github.com/veramolabs/did-ens-spec).

The Ethereum community has established ENS names as their identifiers (see Etherscan) for web3 projects. This DID method
specification has two purposes:

* to wrap existing ENS names as DIDs to be interoperable with applications relying on Decentralized Identifiers
* to define a canonical way to augment ENS names with DID capabilities such as services and verification methods.

## Usage

This library should be used with [`did-resolver`](https://github.com/decentralized-identity/did-resolver).

```bash
npm i ens-did-resolver did-resolver
```

```typescript
import { getResolver } from 'ens-did-resolver'
import { Resolver } from 'did-resolver'

const infuraProjectId = '<create a free project at infura.io>'

const resolver = new Resolver({
  ...getResolver({ infuraProjectId })
})

const result = await resolver.resolve('did:ens:vitalik.eth')
console.dir(result.didDocument, { depth: 4 })
```
