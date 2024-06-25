export const webauthn = {
  bytecode:
    '0x6080604052348015600f57600080fd5b5061207b8061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fca6b59514610030575b600080fd5b61004361003e366004611d30565b610057565b604051901515815260200160405180910390f35b60006100668686868686610072565b90505b95945050505050565b600061009f60027fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551611e77565b8460a0015111156100b257506000610069565b60608401516000906100d5906100c9816015611eb2565b6020880151919061047a565b90507fff1a2a9176d650e4a99dedb58f1793003935130579fe17b5a3f698ac5b00e63481805190602001201461010f576000915050610069565b600061011a886104ff565b60405160200161012a9190611ee9565b604051602081830303815290604052905060006101628760400151835189604001516101569190611eb2565b60208a0151919061047a565b905081805190602001208180519060200120146101855760009350505050610069565b865180517f010000000000000000000000000000000000000000000000000000000000000091829160209081106101be576101be611f55565b0160200151167fff0000000000000000000000000000000000000000000000000000000000000016146101f75760009350505050610069565b8780156102635750865180517f0400000000000000000000000000000000000000000000000000000000000000918291602090811061023857610238611f55565b0160200151167fff000000000000000000000000000000000000000000000000000000000000001614155b156102745760009350505050610069565b60006002886020015160405161028a9190611f84565b602060405180830381855afa1580156102a7573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906102ca9190611fa0565b9050600060028960000151836040516020016102e7929190611fb9565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529082905261031f91611f84565b602060405180830381855afa15801561033c573d6000803e3d6000fd5b5050506040513d601f19601f8201168201806040525081019061035f9190611fa0565b6080808b015160a0808d015160408051602081018790529081019390935260608301529181018b905290810189905290915060009060c001604051602081830303815290604052905060008061010073ffffffffffffffffffffffffffffffffffffffff16836040516103d29190611f84565b600060405180830381855afa9150503d806000811461040d576040519150601f19603f3d011682016040523d82523d6000602084013e610412565b606091505b508051919350915015158280156104265750805b15610452578180602001905181019061043f9190611fa0565b6001149950505050505050505050610069565b610467858e608001518f60a001518f8f61052b565b9f9e505050505050505050505050505050565b60608351828111610489578092505b838111610494578093505b50818310156104f85750604051828203808252938301937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f820181165b86810151848201528101806104d35750600083830160200152603f9091011681016040525b9392505050565b60606105258260405180606001604052806040815260200161200660409139600061067a565b92915050565b600084158061055a57507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518510155b80610563575083155b8061058e57507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518410155b1561059b57506000610069565b6105a583836107fa565b6105b157506000610069565b60006105bc85610973565b905060007fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551828909905060007fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325518389099050600061061c878785856109f7565b90507fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc6325516106698a7fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551611fdb565b8208159a9950505050505050505050565b6060835160000361069a57506040805160208101909152600081526104f8565b6000826106cb576003855160046106b19190611fee565b6106bc906002611eb2565b6106c69190611e77565b6106f0565b6003855160026106db9190611eb2565b6106e59190611e77565b6106f0906004611fee565b905060008167ffffffffffffffff81111561070d5761070d611c24565b6040519080825280601f01601f191660200182016040528015610737576020820181803683370190505b50905060018501602082018788518901602081018051600082525b828410156107ad576003840193508351603f8160121c168701518653600186019550603f81600c1c168701518653600186019550603f8160061c168701518653600186019550603f8116870151865350600185019450610752565b9052505085156107ee576003885106600181146107d157600281146107e4576107ec565b603d6001830353603d60028303536107ec565b603d60018303535b505b50909695505050505050565b60007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8310158061084b57507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8210155b8061085d57508215801561085d575081155b1561086a57506000610525565b60007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838409905060007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff807fffffffff00000001000000000000000000000000fffffffffffffffffffffffc87097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff877fffffffff00000001000000000000000000000000ffffffffffffffffffffffff898a09090890507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff7f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b820891909114949350505050565b600060405160208152602080820152602060408201528260608201527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63254f60808201527fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc63255160a082015260208160c0836005600019fa6109f057600080fd5b5192915050565b600080808060ff818088158015610a0c575087155b15610a20576000965050505050505061150d565b610a6c7f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f58d8d611515565b909250905081158015610a7d575080155b15610aee577fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551887fffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551038a0898506000975088158015610ada575087155b15610aee576000965050505050505061150d565b600189841c16600189851c1660011b015b80610b215760018403935060018a851c1660018a861c1660011b019050610aff565b50600189841c16600189851c1660011b01955060018603610b83577f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29696507f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f593505b60028603610b92578a96508993505b60038603610ba1578196508093505b60018303925060019550600194505b827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1115611463577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff846002097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8182097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff818a097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82840992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8b8d087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8c7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038e08096003097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff89850998507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a840999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80837fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838409089a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80837fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038d08820992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff837fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a870908975060018d881c1660018d891c1660011b01905080610e8c57877fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03975050505050611458565b60018103610edb577f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c29693507f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f592505b60028103610eea578e93508d92505b60038103610ef9578593508492505b89610f1257509198506001975087965094506114589050565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff887fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8b8609087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8c7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8d8809089350806112515783611251577fffffffff00000001000000000000000000000000ffffffffffffffffffffffff897fffffffff00000001000000000000000000000000fffffffffffffffffffffffd0994507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff85860993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff848d0992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84860994507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808c7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038e087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8d8f080990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8160030991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a860999507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8b85099a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80847fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff848509089b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808d7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038508830993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808a8709850898505050505050611458565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84850991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8483097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838d099b507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff818c099a507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff838e097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80827fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff847fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff878809080893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80838d097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff887fffffffff00000001000000000000000000000000ffffffffffffffffffffffff03860809089a50505050809a50505050505b600183039250610bb0565b60405186606082015260208152602080820152602060408201527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd60808201527fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60a082015260208160c0836005600019fa6114de57600080fd5b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff815189099750505050505050505b949350505050565b60008080808661152c57858593509350505061159a565b8461153e57878793509350505061159a565b858814801561154c57508487145b1561156d5761155e88886001806115a3565b929a5090985092509050611587565b61157c88886001808a8a61182d565b929a50909850925090505b61159388888484611af2565b9350935050505b94509492505050565b6000806000807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8760020993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84850991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82890990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82850992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86830991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff807fffffffff00000001000000000000000000000000ffffffffffffffffffffffff888b087fffffffff00000001000000000000000000000000ffffffffffffffffffffffff897fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038c080960030995507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80827fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8889090893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038308870997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff85840990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff808885097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff0389089250945094509450949050565b6000806000808860000361184c57508492508391506001905080611ae5565b7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff9889039889818988090894507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a7fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8a89090895507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86870993507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff86850992507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff84890991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff83880990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff848b0997507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80897fffffffff00000001000000000000000000000000fffffffffffffffffffffffd097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff857fffffffff00000001000000000000000000000000ffffffffffffffffffffffff037fffffffff00000001000000000000000000000000ffffffffffffffffffffffff898a09080893507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff80848b097fffffffff00000001000000000000000000000000ffffffffffffffffffffffff877fffffffff00000001000000000000000000000000ffffffffffffffffffffffff887fffffffff00000001000000000000000000000000ffffffffffffffffffffffff038d08090892505b9650965096509692505050565b6000806000611b0084611ba7565b90507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff818709915060007fffffffff00000001000000000000000000000000ffffffffffffffffffffffff82870990507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff81820991507fffffffff00000001000000000000000000000000ffffffffffffffffffffffff8289099350505094509492505050565b600060405160208152602080820152602060408201528260608201527fffffffff00000001000000000000000000000000fffffffffffffffffffffffd60808201527fffffffff00000001000000000000000000000000ffffffffffffffffffffffff60a082015260208160c0836005600019fa6109f057600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715611c7657611c76611c24565b60405290565b600082601f830112611c8d57600080fd5b81356020830160008067ffffffffffffffff841115611cae57611cae611c24565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611cfb57611cfb611c24565b604052838152905080828401871015611d1357600080fd5b838360208301376000602085830101528094505050505092915050565b600080600080600060a08688031215611d4857600080fd5b853567ffffffffffffffff811115611d5f57600080fd5b611d6b88828901611c7c565b95505060208601358015158114611d8157600080fd5b9350604086013567ffffffffffffffff811115611d9d57600080fd5b860160c08189031215611daf57600080fd5b611db7611c53565b813567ffffffffffffffff811115611dce57600080fd5b611dda8a828501611c7c565b825250602082013567ffffffffffffffff811115611df757600080fd5b611e038a828501611c7c565b60208301525060408281013590820152606080830135818301526080808401358184015260a09384013593830193909352969995985096958601359501359392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082611ead577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b8082018082111561052557610525611e48565b60005b83811015611ee0578181015183820152602001611ec8565b50506000910152565b7f226368616c6c656e6765223a2200000000000000000000000000000000000000815260008251611f2181600d850160208701611ec5565b7f2200000000000000000000000000000000000000000000000000000000000000600d939091019283015250600e01919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60008251611f96818460208701611ec5565b9190910192915050565b600060208284031215611fb257600080fd5b5051919050565b60008351611fcb818460208801611ec5565b9190910191825250602001919050565b8181038181111561052557610525611e48565b808202811582820484141761052557610525611e4856fe4142434445464748494a4b4c4d4e4f505152535455565758595a6162636465666768696a6b6c6d6e6f707172737475767778797a303132333435363738392d5fa2646970667358221220d63d789248d0b506e26a7c63f4f947890cfc7b3b93fa4db57d80933bc02a6bac64736f6c634300081a0033',
  abi: [
    {
      type: 'function',
      name: 'verify',
      inputs: [
        { name: 'challenge', type: 'bytes', internalType: 'bytes' },
        { name: 'requireUV', type: 'bool', internalType: 'bool' },
        {
          name: 'webAuthnAuth',
          type: 'tuple',
          internalType: 'struct WebAuthn.WebAuthnAuth',
          components: [
            { name: 'authenticatorData', type: 'bytes', internalType: 'bytes' },
            { name: 'clientDataJSON', type: 'string', internalType: 'string' },
            {
              name: 'challengeIndex',
              type: 'uint256',
              internalType: 'uint256',
            },
            { name: 'typeIndex', type: 'uint256', internalType: 'uint256' },
            { name: 'r', type: 'uint256', internalType: 'uint256' },
            { name: 's', type: 'uint256', internalType: 'uint256' },
          ],
        },
        { name: 'x', type: 'uint256', internalType: 'uint256' },
        { name: 'y', type: 'uint256', internalType: 'uint256' },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
  ],
} as const
