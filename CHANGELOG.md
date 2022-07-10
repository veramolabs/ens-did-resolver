# 1.0.0 (2022-07-10)


### Bug Fixes

* change 'owner' to 'controller' to follow W3C Spec ([#75](https://github.com/veramolabs/ens-did-resolver/issues/75)) ([#81](https://github.com/veramolabs/ens-did-resolver/issues/81)) ([af37b3f](https://github.com/veramolabs/ens-did-resolver/commit/af37b3fe66dedda688156bb421948364c3ab3606))
* ignore query string when interpreting identifiers ([#123](https://github.com/veramolabs/ens-did-resolver/issues/123)) ([5508f8a](https://github.com/veramolabs/ens-did-resolver/commit/5508f8a45149417eac44dae0103e6f7edb566c83)), closes [#122](https://github.com/veramolabs/ens-did-resolver/issues/122)
* maintenance of dependencies, bots and build scripts ([#136](https://github.com/veramolabs/ens-did-resolver/issues/136)) ([0d3fcf7](https://github.com/veramolabs/ens-did-resolver/commit/0d3fcf74630549252605253b51415cc248b6e4d5))
* remove unused dependency ([#4](https://github.com/veramolabs/ens-did-resolver/issues/4)) ([a97c826](https://github.com/veramolabs/ens-did-resolver/commit/a97c826629c998980d5430876c149f3b7fe07e16))
* removed redundant code ([ca4d101](https://github.com/veramolabs/ens-did-resolver/commit/ca4d1012c9e15f01554c4dbc4482976cfa7f180d))
* reverse events to have consistent order ([#87](https://github.com/veramolabs/ens-did-resolver/issues/87)) ([08b9692](https://github.com/veramolabs/ens-did-resolver/commit/08b9692b8c6abf1da158fb3ce3dc4d49d9393068)), closes [/github.com/decentralized-identity/ethr-did-resolver/issues/86#issuecomment-699961595](https://github.com//github.com/decentralized-identity/ethr-did-resolver/issues/86/issues/issuecomment-699961595)
* strip milliseconds from dateTime strings ([#129](https://github.com/veramolabs/ens-did-resolver/issues/129)) ([3e958af](https://github.com/veramolabs/ens-did-resolver/commit/3e958afc37916aa3f6de3c7e7a8cf41e0718df34)), closes [#126](https://github.com/veramolabs/ens-did-resolver/issues/126)
* use rpcUrl in controller config ([#128](https://github.com/veramolabs/ens-did-resolver/issues/128)) ([5302536](https://github.com/veramolabs/ens-did-resolver/commit/53025365030df2d132156c15e6982e81af6d9ef2)), closes [#127](https://github.com/veramolabs/ens-did-resolver/issues/127)
* **deps:** update dependency buffer to v6 ([#93](https://github.com/veramolabs/ens-did-resolver/issues/93)) ([e1dc861](https://github.com/veramolabs/ens-did-resolver/commit/e1dc8612b32c06b8bbb046fe6003d70ca1b3960d))
* **deps:** update dependency did-resolver to v1.1.0 ([ab47058](https://github.com/veramolabs/ens-did-resolver/commit/ab470589d900f7abb97c80025405506b5ed422b8))
* **deps:** update dependency did-resolver to v2 ([#68](https://github.com/veramolabs/ens-did-resolver/issues/68)) ([831ec17](https://github.com/veramolabs/ens-did-resolver/commit/831ec17f7f1511295420f88e9869a4f85cb121da))
* **deps:** update dependency did-resolver to v2.1.0 ([b26d387](https://github.com/veramolabs/ens-did-resolver/commit/b26d3878a2716f9cffcfa8d3fb918239254a9fc2))
* **deps:** update dependency did-resolver to v2.1.1 ([1a4cbca](https://github.com/veramolabs/ens-did-resolver/commit/1a4cbca3b849bc2ec6fea13df2ebae945bda499d))
* **deps:** update dependency did-resolver to v2.1.2 ([8c2294e](https://github.com/veramolabs/ens-did-resolver/commit/8c2294e83d8dd87df8a7ce2f860b3ad57ce27190))
* **deps:** update dependency ethjs-contract to ^0.2.0 ([b667ce6](https://github.com/veramolabs/ens-did-resolver/commit/b667ce6757f01d39e6302d962d314d92901d3ffe))
* **deps:** use Resolvable type from did-resolver ([d213ae6](https://github.com/veramolabs/ens-did-resolver/commit/d213ae650a7ae706ffad92f3b213c478dd41883c))
* **types:** simplify type exports ([#101](https://github.com/veramolabs/ens-did-resolver/issues/101)) ([90ca9b5](https://github.com/veramolabs/ens-did-resolver/commit/90ca9b5b3fb13c9531b542eb9fc8d3e51454d4b1))
* remove ejs module distribution ([780ec08](https://github.com/veramolabs/ens-did-resolver/commit/780ec08d49340858ae34d8f504265cb267a3173f)), closes [#39](https://github.com/veramolabs/ens-did-resolver/issues/39)
* require a configuration to be used when initializing the resolver ([3adc029](https://github.com/veramolabs/ens-did-resolver/commit/3adc029150e86886b8951cec4295e0a97c232c11))


### Features

* add `assertionMethod` by default to didDocument ([#124](https://github.com/veramolabs/ens-did-resolver/issues/124)) ([11b2096](https://github.com/veramolabs/ens-did-resolver/commit/11b20967fae66b784a527d92c39cd29f6dbe6b10)), closes [#117](https://github.com/veramolabs/ens-did-resolver/issues/117) [#115](https://github.com/veramolabs/ens-did-resolver/issues/115)
* add ability to use a compressed publicKey as identifier ([#73](https://github.com/veramolabs/ens-did-resolver/issues/73)) ([e257eb3](https://github.com/veramolabs/ens-did-resolver/commit/e257eb3b1681d7cde1a67e8056e4757589ceaaac)), closes [#56](https://github.com/veramolabs/ens-did-resolver/issues/56)
* add encryption key support for ethr-did-documents ([dff7b0f](https://github.com/veramolabs/ens-did-resolver/commit/dff7b0f3efe562be315aa636ddb3ab3e4fded486)), closes [#52](https://github.com/veramolabs/ens-did-resolver/issues/52)
* add encryption key support for ethr-did-documents ([2f5825c](https://github.com/veramolabs/ens-did-resolver/commit/2f5825cfa7540a470fea31c9dd89b873f659b2ec)), closes [#52](https://github.com/veramolabs/ens-did-resolver/issues/52)
* Add types declaration stubb ([05944b1](https://github.com/veramolabs/ens-did-resolver/commit/05944b16f51c33814bdc146a9d8629cb04e6a5fd))
* export `EthrDidController` helper class ([#120](https://github.com/veramolabs/ens-did-resolver/issues/120)) ([745100d](https://github.com/veramolabs/ens-did-resolver/commit/745100d6cbfd1170af483efb2bdd93784f8fd7a6))
* import instead of require networks.json ([50c0832](https://github.com/veramolabs/ens-did-resolver/commit/50c0832e70dc9cb1401d7da336162672fa6747a5))
* Initial version ([#1](https://github.com/veramolabs/ens-did-resolver/issues/1)) ([d7a3cf8](https://github.com/veramolabs/ens-did-resolver/commit/d7a3cf88a9b1d78da76b448f61b54ac11c6b5fb8))
* upgrade to latest did core spec ([#99](https://github.com/veramolabs/ens-did-resolver/issues/99)) ([#109](https://github.com/veramolabs/ens-did-resolver/issues/109)) ([d46eea3](https://github.com/veramolabs/ens-did-resolver/commit/d46eea3ad4d85450f75a645ea9b33aa5223dd7b0)), closes [#105](https://github.com/veramolabs/ens-did-resolver/issues/105) [#95](https://github.com/veramolabs/ens-did-resolver/issues/95) [#106](https://github.com/veramolabs/ens-did-resolver/issues/106) [#83](https://github.com/veramolabs/ens-did-resolver/issues/83) [#85](https://github.com/veramolabs/ens-did-resolver/issues/85) [#83](https://github.com/veramolabs/ens-did-resolver/issues/83) [#85](https://github.com/veramolabs/ens-did-resolver/issues/85) [#95](https://github.com/veramolabs/ens-did-resolver/issues/95) [#105](https://github.com/veramolabs/ens-did-resolver/issues/105) [#106](https://github.com/veramolabs/ens-did-resolver/issues/106)
* upgrade to latest did core spec ([#99](https://github.com/veramolabs/ens-did-resolver/issues/99)) ([#109](https://github.com/veramolabs/ens-did-resolver/issues/109)) ([#111](https://github.com/veramolabs/ens-did-resolver/issues/111)) ([2a023b1](https://github.com/veramolabs/ens-did-resolver/commit/2a023b15a3a6cba1da05f8439dacb26e898104f1)), closes [#105](https://github.com/veramolabs/ens-did-resolver/issues/105) [#95](https://github.com/veramolabs/ens-did-resolver/issues/95) [#106](https://github.com/veramolabs/ens-did-resolver/issues/106) [#83](https://github.com/veramolabs/ens-did-resolver/issues/83) [#85](https://github.com/veramolabs/ens-did-resolver/issues/85) [#83](https://github.com/veramolabs/ens-did-resolver/issues/83) [#85](https://github.com/veramolabs/ens-did-resolver/issues/85) [#95](https://github.com/veramolabs/ens-did-resolver/issues/95) [#105](https://github.com/veramolabs/ens-did-resolver/issues/105) [#106](https://github.com/veramolabs/ens-did-resolver/issues/106)
* use only named exports ([#31](https://github.com/veramolabs/ens-did-resolver/issues/31)) ([a558e14](https://github.com/veramolabs/ens-did-resolver/commit/a558e14fbca56d5c5aadcabad1286ec74dda09e5))
* versioning ([#121](https://github.com/veramolabs/ens-did-resolver/issues/121)) ([b794d69](https://github.com/veramolabs/ens-did-resolver/commit/b794d6975cb92ea5c87882546951d5d0771bde4f)), closes [#119](https://github.com/veramolabs/ens-did-resolver/issues/119) [#118](https://github.com/veramolabs/ens-did-resolver/issues/118) [#119](https://github.com/veramolabs/ens-did-resolver/issues/119) [#118](https://github.com/veramolabs/ens-did-resolver/issues/118)


### BREAKING CHANGES

* The return type is `DIDResolutionResult` which wraps a `DIDDocument`.
* No errors are thrown during DID resolution. Please check `result.didResolutionMetadata.error` instead.
* This DID core spec requirement will break for users expecting `publicKey`, `ethereumAddress`, `Secp256k1VerificationKey2018` entries in the DID document. They are replaced with `verificationMethod`, `blockchainAccountId` and `EcdsaSecp256k1VerificationKey2019` and `EcdsaSecp256k1RecoveryMethod2020` depending on the content.
* JWTs that refer to the `did:ethr:...#owner` key in their header may be considered invalid after this upgrade, as the key id is now `did:ethr:...#controller`
* this removes the fallback hardcoded RPC URLs and will fail early when a wrong configuration (or none) is provided to `getResolver()`
