import { DIDDocument, DIDResolutionResult, Resolvable, Resolver } from 'did-resolver'
import { getResolver } from '../resolver'
jest.setTimeout(30000)

describe('ensResolver', () => {
  beforeAll(async () => {})

  it('works with single, unnamed network', async () => {
    expect.assertions(1)
    let didResolver: Resolvable = new Resolver(
      getResolver({ rpcUrl: 'https://mainnet.infura.io/v3/e471b8639c314004ae67ec0078f70102' })
    )
    const did = 'did:ens:vitalik.eth'
    const ethrAddr = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045'
    const resolutionResult = await didResolver.resolve(did)
    expect(resolutionResult).toEqual<DIDResolutionResult>({
      didDocument: {
        id: did,
        service: [
          {
            id: `${did}#Web3PublicProfile-${ethrAddr}`,
            type: 'Web3PublicProfile',
            serviceEndpoint: 'vitalik.eth',
          },
        ],
        verificationMethod: [
          {
            id: `${did}#${ethrAddr}`,
            type: 'EcdsaSecp256k1RecoveryMethod2020',
            controller: did,
            blockchainAccountId: `${ethrAddr}@eip155:1`,
          },
        ],
        authentication: [`${did}#${ethrAddr}`],
        capabilityDelegation: [`${did}#${ethrAddr}`],
        capabilityInvocation: [`${did}#${ethrAddr}`],
        assertionMethod: [`${did}#${ethrAddr}`],
        keyAgreement: [],
      },
      didDocumentMetadata: {},
      didResolutionMetadata: { contentType: 'application/did+json' },
    })
  })

  it('works with single, named network', async () => {
    expect.assertions(1)
    let didResolver: Resolvable = new Resolver(
      getResolver({ name: 'goerli', rpcUrl: 'https://goerli.infura.io/v3/e471b8639c314004ae67ec0078f70102' })
    )
    const did = 'did:ens:goerli:whatever.eth'
    const ethrAddr = '0x4af859d61d07A8c515FE0E3Cc1Ea5e49A260bBa3'
    const resolutionResult = await didResolver.resolve(did)
    expect(resolutionResult).toEqual<DIDResolutionResult>({
      didDocument: {
        id: did,
        service: [
          {
            id: `${did}#Web3PublicProfile-${ethrAddr}`,
            type: 'Web3PublicProfile',
            serviceEndpoint: 'whatever.eth',
          },
        ],
        verificationMethod: [
          {
            id: `${did}#${ethrAddr}`,
            type: 'EcdsaSecp256k1RecoveryMethod2020',
            controller: did,
            blockchainAccountId: `${ethrAddr}@eip155:5`,
          },
          {
            id: `${did}#my-key`,
            type: 'X25519KeyAgreementKey2019',
            controller: did,
            publicKeyMultibase: 'z9hFgmPVfmBZwRvFEyniQDBkz9LmV7gDEqytWyGZLmDXE'
          }
        ],
        authentication: [`${did}#${ethrAddr}`],
        capabilityDelegation: [`${did}#${ethrAddr}`],
        capabilityInvocation: [`${did}#${ethrAddr}`],
        assertionMethod: [`${did}#${ethrAddr}`],
        keyAgreement: [`${did}#my-key`],
      },
      didDocumentMetadata: {},
      didResolutionMetadata: { contentType: 'application/did+json' },
    })
  })

  it('works with infura', async () => {
    expect.assertions(1)
    let didResolver: Resolvable = new Resolver(getResolver({ infuraProjectId: 'e471b8639c314004ae67ec0078f70102' }))
    const did = 'did:ens:goerli:whatever.eth'
    const ethrAddr = '0x4af859d61d07A8c515FE0E3Cc1Ea5e49A260bBa3'
    const resolutionResult = await didResolver.resolve(did)
    expect(resolutionResult).toEqual<DIDResolutionResult>({
      didDocument: {
        id: did,
        service: [
          {
            id: `${did}#Web3PublicProfile-${ethrAddr}`,
            type: 'Web3PublicProfile',
            serviceEndpoint: 'whatever.eth',
          },
        ],
        verificationMethod: [
          {
            id: `${did}#${ethrAddr}`,
            type: 'EcdsaSecp256k1RecoveryMethod2020',
            controller: did,
            blockchainAccountId: `${ethrAddr}@eip155:5`,
          },
          {
            id: `${did}#my-key`,
            type: 'X25519KeyAgreementKey2019',
            controller: did,
            publicKeyMultibase: 'z9hFgmPVfmBZwRvFEyniQDBkz9LmV7gDEqytWyGZLmDXE'
          }
        ],
        authentication: [`${did}#${ethrAddr}`],
        capabilityDelegation: [`${did}#${ethrAddr}`],
        capabilityInvocation: [`${did}#${ethrAddr}`],
        assertionMethod: [`${did}#${ethrAddr}`],
        keyAgreement: [`${did}#my-key`],
      },
      didDocumentMetadata: {},
      didResolutionMetadata: { contentType: 'application/did+json' },
    })
  })

  it('works fails trying to goerli name on mainnet', async () => {
    expect.assertions(1)
    let didResolver: Resolvable = new Resolver(getResolver({ rpcUrl: 'https://mainnet.infura.io/v3/e471b8639c314004ae67ec0078f70102' }))
    const did = 'did:ens:goerli:whatever.eth'
    const resolutionResult = await didResolver.resolve(did)
    expect(resolutionResult.didResolutionMetadata.error).toEqual("unknownNetwork")
  })

  it('multi provider config', async () => {
    expect.assertions(2)
    let didResolver: Resolvable = new Resolver(getResolver({ networks: [
      { name: 'goerli', rpcUrl: 'https://goerli.infura.io/v3/e471b8639c314004ae67ec0078f70102' },
      { rpcUrl: 'https://mainnet.infura.io/v3/e471b8639c314004ae67ec0078f70102' }
    ]}))
    const did = 'did:ens:goerli:whatever.eth'
    const resolutionResult = await didResolver.resolve(did)
    expect(resolutionResult.didDocument?.id).toEqual("did:ens:goerli:whatever.eth")

    const resolutionResult2 = await didResolver.resolve('did:ens:vitalik.eth')
    expect(resolutionResult2.didDocument?.id).toEqual('did:ens:vitalik.eth')
  })
})
