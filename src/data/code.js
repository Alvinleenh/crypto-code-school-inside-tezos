const CODE_JSON = [
  {
    prim: 'storage',
    args: [
      {
        prim: 'pair',
        args: [
          {
            prim: 'pair',
            args: [
              { prim: 'address', annots: ['%administrator'] },
              {
                prim: 'pair',
                args: [
                  { prim: 'nat', annots: ['%all_tokens'] },
                  {
                    prim: 'big_map',
                    args: [{ prim: 'address' }, { prim: 'nat' }],
                    annots: ['%ledger'],
                  },
                ],
              },
            ],
          },
          {
            prim: 'pair',
            args: [
              {
                prim: 'pair',
                args: [
                  {
                    prim: 'big_map',
                    args: [{ prim: 'string' }, { prim: 'bytes' }],
                    annots: ['%metadata'],
                  },
                  {
                    prim: 'big_map',
                    args: [
                      {
                        prim: 'pair',
                        args: [
                          { prim: 'address', annots: ['%owner'] },
                          {
                            prim: 'pair',
                            args: [
                              { prim: 'address', annots: ['%operator'] },
                              { prim: 'nat', annots: ['%token_id'] },
                            ],
                          },
                        ],
                      },
                      { prim: 'unit' },
                    ],
                    annots: ['%operators'],
                  },
                ],
              },
              {
                prim: 'pair',
                args: [
                  { prim: 'bool', annots: ['%paused'] },
                  {
                    prim: 'big_map',
                    args: [
                      { prim: 'nat' },
                      {
                        prim: 'pair',
                        args: [
                          {
                            prim: 'map',
                            args: [{ prim: 'string' }, { prim: 'bytes' }],
                            annots: ['%metadata_map'],
                          },
                          { prim: 'nat', annots: ['%total_supply'] },
                        ],
                      },
                    ],
                    annots: ['%tokens'],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    prim: 'parameter',
    args: [
      {
        prim: 'or',
        args: [
          {
            prim: 'or',
            args: [
              {
                prim: 'pair',
                args: [
                  {
                    prim: 'list',
                    args: [
                      {
                        prim: 'pair',
                        args: [
                          { prim: 'address', annots: ['%owner'] },
                          { prim: 'nat', annots: ['%token_id'] },
                        ],
                      },
                    ],
                    annots: ['%requests'],
                  },
                  {
                    prim: 'contract',
                    args: [
                      {
                        prim: 'list',
                        args: [
                          {
                            prim: 'pair',
                            args: [
                              {
                                prim: 'pair',
                                args: [
                                  { prim: 'address', annots: ['%owner'] },
                                  { prim: 'nat', annots: ['%token_id'] },
                                ],
                                annots: ['%request'],
                              },
                              { prim: 'nat', annots: ['%balance'] },
                            ],
                          },
                        ],
                      },
                    ],
                    annots: ['%callback'],
                  },
                ],
                annots: ['%balance_of'],
              },
              {
                prim: 'or',
                args: [
                  {
                    prim: 'pair',
                    args: [
                      {
                        prim: 'pair',
                        args: [
                          { prim: 'address', annots: ['%address'] },
                          { prim: 'nat', annots: ['%amount'] },
                        ],
                      },
                      {
                        prim: 'pair',
                        args: [
                          {
                            prim: 'map',
                            args: [{ prim: 'string' }, { prim: 'bytes' }],
                            annots: ['%metadata'],
                          },
                          { prim: 'nat', annots: ['%token_id'] },
                        ],
                      },
                    ],
                    annots: ['%mint'],
                  },
                  { prim: 'address', annots: ['%set_administrator'] },
                ],
              },
            ],
          },
          {
            prim: 'or',
            args: [
              {
                prim: 'or',
                args: [
                  {
                    prim: 'pair',
                    args: [
                      { prim: 'string', annots: ['%k'] },
                      { prim: 'bytes', annots: ['%v'] },
                    ],
                    annots: ['%set_metdata'],
                  },
                  { prim: 'bool', annots: ['%set_pause'] },
                ],
              },
              {
                prim: 'or',
                args: [
                  {
                    prim: 'list',
                    args: [
                      {
                        prim: 'pair',
                        args: [
                          { prim: 'address', annots: ['%from_'] },
                          {
                            prim: 'list',
                            args: [
                              {
                                prim: 'pair',
                                args: [
                                  { prim: 'address', annots: ['%to_'] },
                                  {
                                    prim: 'pair',
                                    args: [
                                      { prim: 'nat', annots: ['%token_id'] },
                                      { prim: 'nat', annots: ['%amount'] },
                                    ],
                                  },
                                ],
                              },
                            ],
                            annots: ['%txs'],
                          },
                        ],
                      },
                    ],
                    annots: ['%transfer'],
                  },
                  {
                    prim: 'list',
                    args: [
                      {
                        prim: 'or',
                        args: [
                          {
                            prim: 'pair',
                            args: [
                              { prim: 'address', annots: ['%owner'] },
                              {
                                prim: 'pair',
                                args: [
                                  { prim: 'address', annots: ['%operator'] },
                                  { prim: 'nat', annots: ['%token_id'] },
                                ],
                              },
                            ],
                            annots: ['%add_operator'],
                          },
                          {
                            prim: 'pair',
                            args: [
                              { prim: 'address', annots: ['%owner'] },
                              {
                                prim: 'pair',
                                args: [
                                  { prim: 'address', annots: ['%operator'] },
                                  { prim: 'nat', annots: ['%token_id'] },
                                ],
                              },
                            ],
                            annots: ['%remove_operator'],
                          },
                        ],
                      },
                    ],
                    annots: ['%update_operators'],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    prim: 'code',
    args: [
      [
        { prim: 'DUP' },
        { prim: 'CDR' },
        { prim: 'SWAP' },
        { prim: 'CAR' },
        {
          prim: 'IF_LEFT',
          args: [
            [
              {
                prim: 'IF_LEFT',
                args: [
                  [
                    { prim: 'SWAP' },
                    { prim: 'DUP' },
                    { prim: 'DUG', args: [{ int: '2' }] },
                    { prim: 'CDR' },
                    { prim: 'CDR' },
                    { prim: 'CAR' },
                    {
                      prim: 'IF',
                      args: [
                        [
                          {
                            prim: 'PUSH',
                            args: [{ prim: 'int' }, { int: '426' }],
                          },
                          { prim: 'FAILWITH' },
                        ],
                        [],
                      ],
                    },
                    { prim: 'DUP' },
                    { prim: 'CAR' },
                    {
                      prim: 'MAP',
                      args: [
                        [
                          { prim: 'DIG', args: [{ int: '2' }] },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '3' }] },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CDR' },
                          { prim: 'MEM' },
                          {
                            prim: 'IF',
                            args: [
                              [],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [
                                    { prim: 'string' },
                                    { string: 'FA2_TOKEN_UNDEFINED' },
                                  ],
                                },
                                { prim: 'FAILWITH' },
                              ],
                            ],
                          },
                          { prim: 'DIG', args: [{ int: '2' }] },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '3' }] },
                          { prim: 'CAR' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CAR' },
                          { prim: 'MEM' },
                          {
                            prim: 'IF',
                            args: [
                              [
                                { prim: 'DIG', args: [{ int: '2' }] },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '3' }] },
                                { prim: 'CAR' },
                                { prim: 'CDR' },
                                { prim: 'CDR' },
                                { prim: 'SWAP' },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '2' }] },
                                { prim: 'CAR' },
                                { prim: 'GET' },
                                {
                                  prim: 'IF_NONE',
                                  args: [
                                    [
                                      {
                                        prim: 'PUSH',
                                        args: [{ prim: 'int' }, { int: '433' }],
                                      },
                                      { prim: 'FAILWITH' },
                                    ],
                                    [],
                                  ],
                                },
                                { prim: 'SWAP' },
                                {
                                  prim: 'PAIR',
                                  annots: ['%request', '%balance'],
                                },
                              ],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [{ prim: 'nat' }, { int: '0' }],
                                },
                                { prim: 'SWAP' },
                                {
                                  prim: 'PAIR',
                                  annots: ['%request', '%balance'],
                                },
                              ],
                            ],
                          },
                        ],
                      ],
                    },
                    { prim: 'NIL', args: [{ prim: 'operation' }] },
                    { prim: 'DIG', args: [{ int: '2' }] },
                    { prim: 'CDR' },
                    { prim: 'PUSH', args: [{ prim: 'mutez' }, { int: '0' }] },
                    { prim: 'DIG', args: [{ int: '3' }] },
                    { prim: 'TRANSFER_TOKENS' },
                    { prim: 'CONS' },
                  ],
                  [
                    {
                      prim: 'IF_LEFT',
                      args: [
                        [
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CAR' },
                          { prim: 'CAR' },
                          { prim: 'SENDER' },
                          { prim: 'COMPARE' },
                          { prim: 'EQ' },
                          {
                            prim: 'IF',
                            args: [
                              [],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [{ prim: 'int' }, { int: '527' }],
                                },
                                { prim: 'FAILWITH' },
                              ],
                            ],
                          },
                          { prim: 'DUP' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          {
                            prim: 'PUSH',
                            args: [{ prim: 'nat' }, { int: '0' }],
                          },
                          { prim: 'COMPARE' },
                          { prim: 'EQ' },
                          {
                            prim: 'IF',
                            args: [
                              [],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [
                                    { prim: 'string' },
                                    { string: 'single-asset: token-id <> 0' },
                                  ],
                                },
                                { prim: 'FAILWITH' },
                              ],
                            ],
                          },
                          { prim: 'DUP' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'DIG', args: [{ int: '2' }] },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '3' }] },
                          { prim: 'CAR' },
                          { prim: 'CDR' },
                          { prim: 'CAR' },
                          { prim: 'COMPARE' },
                          { prim: 'EQ' },
                          {
                            prim: 'IF',
                            args: [
                              [],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [
                                    { prim: 'string' },
                                    {
                                      string: 'Token-IDs should be consecutive',
                                    },
                                  ],
                                },
                                { prim: 'FAILWITH' },
                              ],
                            ],
                          },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'DUP' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'CAR' },
                          { prim: 'DUP' },
                          { prim: 'CAR' },
                          { prim: 'SWAP' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'DIG', args: [{ int: '4' }] },
                          { prim: 'CAR' },
                          { prim: 'CDR' },
                          { prim: 'CAR' },
                          { prim: 'DUP' },
                          {
                            prim: 'PUSH',
                            args: [{ prim: 'nat' }, { int: '1' }],
                          },
                          { prim: 'DIG', args: [{ int: '6' }] },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '7' }] },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'ADD' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'COMPARE' },
                          { prim: 'LE' },
                          {
                            prim: 'IF',
                            args: [
                              [{ prim: 'DROP' }],
                              [{ prim: 'SWAP' }, { prim: 'DROP' }],
                            ],
                          },
                          { prim: 'PAIR' },
                          { prim: 'SWAP' },
                          { prim: 'PAIR' },
                          { prim: 'PAIR' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CAR' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CAR' },
                          { prim: 'CAR' },
                          { prim: 'MEM' },
                          {
                            prim: 'IF',
                            args: [
                              [
                                { prim: 'SWAP' },
                                { prim: 'DUP' },
                                { prim: 'CDR' },
                                { prim: 'SWAP' },
                                { prim: 'CAR' },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'SWAP' },
                                { prim: 'CDR' },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'SWAP' },
                                { prim: 'CDR' },
                                { prim: 'DUP' },
                                { prim: 'DIG', args: [{ int: '5' }] },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '6' }] },
                                { prim: 'CAR' },
                                { prim: 'CAR' },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '2' }] },
                                { prim: 'GET' },
                                {
                                  prim: 'IF_NONE',
                                  args: [
                                    [
                                      {
                                        prim: 'PUSH',
                                        args: [{ prim: 'int' }, { int: '539' }],
                                      },
                                      { prim: 'FAILWITH' },
                                    ],
                                    [],
                                  ],
                                },
                                { prim: 'DIG', args: [{ int: '6' }] },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '7' }] },
                                { prim: 'CAR' },
                                { prim: 'CDR' },
                                { prim: 'ADD' },
                                { prim: 'SOME' },
                                { prim: 'SWAP' },
                                { prim: 'UPDATE' },
                                { prim: 'SWAP' },
                                { prim: 'PAIR' },
                                { prim: 'SWAP' },
                                { prim: 'PAIR' },
                                { prim: 'PAIR' },
                                { prim: 'SWAP' },
                              ],
                              [
                                { prim: 'SWAP' },
                                { prim: 'DUP' },
                                { prim: 'CDR' },
                                { prim: 'SWAP' },
                                { prim: 'CAR' },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'SWAP' },
                                { prim: 'CDR' },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'SWAP' },
                                { prim: 'CDR' },
                                { prim: 'DIG', args: [{ int: '4' }] },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '5' }] },
                                { prim: 'CAR' },
                                { prim: 'CDR' },
                                { prim: 'SOME' },
                                { prim: 'DIG', args: [{ int: '5' }] },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '6' }] },
                                { prim: 'CAR' },
                                { prim: 'CAR' },
                                { prim: 'UPDATE' },
                                { prim: 'SWAP' },
                                { prim: 'PAIR' },
                                { prim: 'SWAP' },
                                { prim: 'PAIR' },
                                { prim: 'PAIR' },
                                { prim: 'SWAP' },
                              ],
                            ],
                          },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'MEM' },
                          {
                            prim: 'IF',
                            args: [
                              [{ prim: 'DROP' }],
                              [
                                { prim: 'SWAP' },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'SWAP' },
                                { prim: 'CDR' },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'SWAP' },
                                { prim: 'CDR' },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'SWAP' },
                                { prim: 'CDR' },
                                { prim: 'DIG', args: [{ int: '4' }] },
                                { prim: 'DUP' },
                                { prim: 'CAR' },
                                { prim: 'CDR' },
                                { prim: 'SWAP' },
                                { prim: 'DUP' },
                                { prim: 'DUG', args: [{ int: '6' }] },
                                { prim: 'CDR' },
                                { prim: 'CAR' },
                                {
                                  prim: 'PAIR',
                                  annots: ['%metadata_map', '%total_supply'],
                                },
                                { prim: 'SOME' },
                                { prim: 'DIG', args: [{ int: '5' }] },
                                { prim: 'CDR' },
                                { prim: 'CDR' },
                                { prim: 'UPDATE' },
                                { prim: 'SWAP' },
                                { prim: 'PAIR' },
                                { prim: 'SWAP' },
                                { prim: 'PAIR' },
                                { prim: 'SWAP' },
                                { prim: 'PAIR' },
                              ],
                            ],
                          },
                        ],
                        [
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CAR' },
                          { prim: 'CAR' },
                          { prim: 'SENDER' },
                          { prim: 'COMPARE' },
                          { prim: 'EQ' },
                          {
                            prim: 'IF',
                            args: [
                              [],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [{ prim: 'int' }, { int: '506' }],
                                },
                                { prim: 'FAILWITH' },
                              ],
                            ],
                          },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'CAR' },
                          { prim: 'CDR' },
                          { prim: 'DIG', args: [{ int: '2' }] },
                          { prim: 'PAIR' },
                          { prim: 'PAIR' },
                        ],
                      ],
                    },
                    { prim: 'NIL', args: [{ prim: 'operation' }] },
                  ],
                ],
              },
            ],
            [
              {
                prim: 'IF_LEFT',
                args: [
                  [
                    {
                      prim: 'IF_LEFT',
                      args: [
                        [
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CAR' },
                          { prim: 'CAR' },
                          { prim: 'SENDER' },
                          { prim: 'COMPARE' },
                          { prim: 'EQ' },
                          {
                            prim: 'IF',
                            args: [
                              [],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [{ prim: 'int' }, { int: '521' }],
                                },
                                { prim: 'FAILWITH' },
                              ],
                            ],
                          },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'CAR' },
                          { prim: 'SWAP' },
                          { prim: 'CDR' },
                          { prim: 'DUP' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'CAR' },
                          { prim: 'DUP' },
                          { prim: 'CDR' },
                          { prim: 'SWAP' },
                          { prim: 'CAR' },
                          { prim: 'DIG', args: [{ int: '4' }] },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '5' }] },
                          { prim: 'CDR' },
                          { prim: 'SOME' },
                          { prim: 'DIG', args: [{ int: '5' }] },
                          { prim: 'CAR' },
                          { prim: 'UPDATE' },
                          { prim: 'PAIR' },
                          { prim: 'PAIR' },
                          { prim: 'SWAP' },
                          { prim: 'PAIR' },
                        ],
                        [
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CAR' },
                          { prim: 'CAR' },
                          { prim: 'SENDER' },
                          { prim: 'COMPARE' },
                          { prim: 'EQ' },
                          {
                            prim: 'IF',
                            args: [
                              [],
                              [
                                {
                                  prim: 'PUSH',
                                  args: [{ prim: 'int' }, { int: '515' }],
                                },
                                { prim: 'FAILWITH' },
                              ],
                            ],
                          },
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'CAR' },
                          { prim: 'SWAP' },
                          { prim: 'CDR' },
                          { prim: 'DUP' },
                          { prim: 'CAR' },
                          { prim: 'SWAP' },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'DIG', args: [{ int: '3' }] },
                          { prim: 'PAIR' },
                          { prim: 'SWAP' },
                          { prim: 'PAIR' },
                          { prim: 'SWAP' },
                          { prim: 'PAIR' },
                        ],
                      ],
                    },
                  ],
                  [
                    {
                      prim: 'IF_LEFT',
                      args: [
                        [
                          { prim: 'SWAP' },
                          { prim: 'DUP' },
                          { prim: 'DUG', args: [{ int: '2' }] },
                          { prim: 'CDR' },
                          { prim: 'CDR' },
                          { prim: 'CAR' },
                          {
                            prim: 'IF',
                            args: [
                              [
                                {
                                  prim: 'PUSH',
                                  args: [{ prim: 'int' }, { int: '383' }],
                                },
                                { prim: 'FAILWITH' },
                              ],
                              [],
                            ],
                          },
                          { prim: 'DUP' },
                          {
                            prim: 'ITER',
                            args: [
                              [
                                { prim: 'DUP' },
                                { prim: 'CDR' },
                                {
                                  prim: 'ITER',
                                  args: [
                                    [
                                      { prim: 'DUP' },
                                      { prim: 'CDR' },
                                      { prim: 'CAR' },
                                      {
                                        prim: 'PUSH',
                                        args: [{ prim: 'nat' }, { int: '0' }],
                                      },
                                      { prim: 'COMPARE' },
                                      { prim: 'EQ' },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [],
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'string' },
                                                {
                                                  string:
                                                    'single-asset: token-id <> 0',
                                                },
                                              ],
                                            },
                                            { prim: 'FAILWITH' },
                                          ],
                                        ],
                                      },
                                      { prim: 'DIG', args: [{ int: '3' }] },
                                      { prim: 'DUP' },
                                      { prim: 'DUG', args: [{ int: '4' }] },
                                      { prim: 'CAR' },
                                      { prim: 'CAR' },
                                      { prim: 'SENDER' },
                                      { prim: 'COMPARE' },
                                      { prim: 'EQ' },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'bool' },
                                                { prim: 'True' },
                                              ],
                                            },
                                          ],
                                          [
                                            { prim: 'SENDER' },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '2' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '3' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'COMPARE' },
                                            { prim: 'EQ' },
                                          ],
                                        ],
                                      },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'bool' },
                                                { prim: 'True' },
                                              ],
                                            },
                                          ],
                                          [
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '3' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '4' }],
                                            },
                                            { prim: 'CDR' },
                                            { prim: 'CAR' },
                                            { prim: 'CDR' },
                                            { prim: 'SWAP' },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '2' }],
                                            },
                                            { prim: 'CDR' },
                                            { prim: 'CAR' },
                                            { prim: 'SENDER' },
                                            {
                                              prim: 'PAIR',
                                              annots: [
                                                '%operator',
                                                '%token_id',
                                              ],
                                            },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '3' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '4' }],
                                            },
                                            { prim: 'CAR' },
                                            {
                                              prim: 'PAIR',
                                              annots: ['%owner'],
                                            },
                                            { prim: 'MEM' },
                                          ],
                                        ],
                                      },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [],
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'string' },
                                                { string: 'FA2_NOT_OPERATOR' },
                                              ],
                                            },
                                            { prim: 'FAILWITH' },
                                          ],
                                        ],
                                      },
                                      { prim: 'DIG', args: [{ int: '3' }] },
                                      { prim: 'DUP' },
                                      { prim: 'DUG', args: [{ int: '4' }] },
                                      { prim: 'CDR' },
                                      { prim: 'CDR' },
                                      { prim: 'CDR' },
                                      { prim: 'SWAP' },
                                      { prim: 'DUP' },
                                      { prim: 'DUG', args: [{ int: '2' }] },
                                      { prim: 'CDR' },
                                      { prim: 'CAR' },
                                      { prim: 'MEM' },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [],
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'string' },
                                                {
                                                  string: 'FA2_TOKEN_UNDEFINED',
                                                },
                                              ],
                                            },
                                            { prim: 'FAILWITH' },
                                          ],
                                        ],
                                      },
                                      { prim: 'DUP' },
                                      { prim: 'CDR' },
                                      { prim: 'CDR' },
                                      {
                                        prim: 'PUSH',
                                        args: [{ prim: 'nat' }, { int: '0' }],
                                      },
                                      { prim: 'COMPARE' },
                                      { prim: 'LT' },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [
                                            { prim: 'DUP' },
                                            { prim: 'CDR' },
                                            { prim: 'CDR' },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '4' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '5' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'CDR' },
                                            { prim: 'CDR' },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '3' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '4' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'GET' },
                                            {
                                              prim: 'IF_NONE',
                                              args: [
                                                [
                                                  {
                                                    prim: 'PUSH',
                                                    args: [
                                                      { prim: 'int' },
                                                      { int: '410' },
                                                    ],
                                                  },
                                                  { prim: 'FAILWITH' },
                                                ],
                                                [],
                                              ],
                                            },
                                            { prim: 'COMPARE' },
                                            { prim: 'GE' },
                                            {
                                              prim: 'IF',
                                              args: [
                                                [],
                                                [
                                                  {
                                                    prim: 'PUSH',
                                                    args: [
                                                      { prim: 'string' },
                                                      {
                                                        string:
                                                          'FA2_INSUFFICIENT_BALANCE',
                                                      },
                                                    ],
                                                  },
                                                  { prim: 'FAILWITH' },
                                                ],
                                              ],
                                            },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '3' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '4' }],
                                            },
                                            { prim: 'DUP' },
                                            { prim: 'CDR' },
                                            { prim: 'SWAP' },
                                            { prim: 'CAR' },
                                            { prim: 'DUP' },
                                            { prim: 'CAR' },
                                            { prim: 'SWAP' },
                                            { prim: 'CDR' },
                                            { prim: 'DUP' },
                                            { prim: 'CAR' },
                                            { prim: 'SWAP' },
                                            { prim: 'CDR' },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '6' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '7' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '2' }],
                                            },
                                            { prim: 'GET' },
                                            {
                                              prim: 'IF_NONE',
                                              args: [
                                                [
                                                  {
                                                    prim: 'PUSH',
                                                    args: [
                                                      { prim: 'int' },
                                                      { int: '414' },
                                                    ],
                                                  },
                                                  { prim: 'FAILWITH' },
                                                ],
                                                [{ prim: 'DROP' }],
                                              ],
                                            },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '5' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '6' }],
                                            },
                                            { prim: 'CDR' },
                                            { prim: 'CDR' },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '9' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'CDR' },
                                            { prim: 'CDR' },
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '8' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '9' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'GET' },
                                            {
                                              prim: 'IF_NONE',
                                              args: [
                                                [
                                                  {
                                                    prim: 'PUSH',
                                                    args: [
                                                      { prim: 'int' },
                                                      { int: '414' },
                                                    ],
                                                  },
                                                  { prim: 'FAILWITH' },
                                                ],
                                                [],
                                              ],
                                            },
                                            { prim: 'SUB' },
                                            { prim: 'ISNAT' },
                                            {
                                              prim: 'IF_NONE',
                                              args: [
                                                [
                                                  {
                                                    prim: 'PUSH',
                                                    args: [
                                                      { prim: 'int' },
                                                      { int: '414' },
                                                    ],
                                                  },
                                                  { prim: 'FAILWITH' },
                                                ],
                                                [],
                                              ],
                                            },
                                            { prim: 'SOME' },
                                            { prim: 'SWAP' },
                                            { prim: 'UPDATE' },
                                            { prim: 'SWAP' },
                                            { prim: 'PAIR' },
                                            { prim: 'SWAP' },
                                            { prim: 'PAIR' },
                                            { prim: 'PAIR' },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '4' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'CDR' },
                                            { prim: 'CDR' },
                                            { prim: 'SWAP' },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '2' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'MEM' },
                                            {
                                              prim: 'IF',
                                              args: [
                                                [
                                                  {
                                                    prim: 'DIG',
                                                    args: [{ int: '3' }],
                                                  },
                                                  { prim: 'DUP' },
                                                  { prim: 'CDR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'CAR' },
                                                  { prim: 'DUP' },
                                                  { prim: 'CAR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'CDR' },
                                                  { prim: 'DUP' },
                                                  { prim: 'CAR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'CDR' },
                                                  { prim: 'DUP' },
                                                  {
                                                    prim: 'DIG',
                                                    args: [{ int: '5' }],
                                                  },
                                                  { prim: 'DUP' },
                                                  {
                                                    prim: 'DUG',
                                                    args: [{ int: '6' }],
                                                  },
                                                  { prim: 'CAR' },
                                                  { prim: 'DUP' },
                                                  {
                                                    prim: 'DUG',
                                                    args: [{ int: '2' }],
                                                  },
                                                  { prim: 'GET' },
                                                  {
                                                    prim: 'IF_NONE',
                                                    args: [
                                                      [
                                                        {
                                                          prim: 'PUSH',
                                                          args: [
                                                            { prim: 'int' },
                                                            { int: '417' },
                                                          ],
                                                        },
                                                        { prim: 'FAILWITH' },
                                                      ],
                                                      [],
                                                    ],
                                                  },
                                                  {
                                                    prim: 'DIG',
                                                    args: [{ int: '6' }],
                                                  },
                                                  { prim: 'CDR' },
                                                  { prim: 'CDR' },
                                                  { prim: 'ADD' },
                                                  { prim: 'SOME' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'UPDATE' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'PAIR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'PAIR' },
                                                  { prim: 'PAIR' },
                                                  {
                                                    prim: 'DUG',
                                                    args: [{ int: '2' }],
                                                  },
                                                ],
                                                [
                                                  {
                                                    prim: 'DIG',
                                                    args: [{ int: '3' }],
                                                  },
                                                  { prim: 'DUP' },
                                                  { prim: 'CDR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'CAR' },
                                                  { prim: 'DUP' },
                                                  { prim: 'CAR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'CDR' },
                                                  { prim: 'DUP' },
                                                  { prim: 'CAR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'CDR' },
                                                  {
                                                    prim: 'DIG',
                                                    args: [{ int: '4' }],
                                                  },
                                                  { prim: 'DUP' },
                                                  {
                                                    prim: 'DUG',
                                                    args: [{ int: '5' }],
                                                  },
                                                  { prim: 'CDR' },
                                                  { prim: 'CDR' },
                                                  { prim: 'SOME' },
                                                  {
                                                    prim: 'DIG',
                                                    args: [{ int: '5' }],
                                                  },
                                                  { prim: 'CAR' },
                                                  { prim: 'UPDATE' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'PAIR' },
                                                  { prim: 'SWAP' },
                                                  { prim: 'PAIR' },
                                                  { prim: 'PAIR' },
                                                  {
                                                    prim: 'DUG',
                                                    args: [{ int: '2' }],
                                                  },
                                                ],
                                              ],
                                            },
                                          ],
                                          [{ prim: 'DROP' }],
                                        ],
                                      },
                                    ],
                                  ],
                                },
                                { prim: 'DROP' },
                              ],
                            ],
                          },
                          { prim: 'DROP' },
                        ],
                        [
                          { prim: 'DUP' },
                          {
                            prim: 'ITER',
                            args: [
                              [
                                {
                                  prim: 'IF_LEFT',
                                  args: [
                                    [
                                      { prim: 'DUP' },
                                      { prim: 'CAR' },
                                      { prim: 'SENDER' },
                                      { prim: 'COMPARE' },
                                      { prim: 'EQ' },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'bool' },
                                                { prim: 'True' },
                                              ],
                                            },
                                          ],
                                          [
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '2' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '3' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'CAR' },
                                            { prim: 'SENDER' },
                                            { prim: 'COMPARE' },
                                            { prim: 'EQ' },
                                          ],
                                        ],
                                      },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [],
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'int' },
                                                { int: '476' },
                                              ],
                                            },
                                            { prim: 'FAILWITH' },
                                          ],
                                        ],
                                      },
                                      { prim: 'DIG', args: [{ int: '2' }] },
                                      { prim: 'DUP' },
                                      { prim: 'CAR' },
                                      { prim: 'SWAP' },
                                      { prim: 'CDR' },
                                      { prim: 'DUP' },
                                      { prim: 'CDR' },
                                      { prim: 'SWAP' },
                                      { prim: 'CAR' },
                                      { prim: 'DUP' },
                                      { prim: 'CAR' },
                                      { prim: 'SWAP' },
                                      { prim: 'CDR' },
                                      {
                                        prim: 'PUSH',
                                        args: [
                                          {
                                            prim: 'option',
                                            args: [{ prim: 'unit' }],
                                          },
                                          {
                                            prim: 'Some',
                                            args: [{ prim: 'Unit' }],
                                          },
                                        ],
                                      },
                                      { prim: 'DIG', args: [{ int: '5' }] },
                                      { prim: 'DUP' },
                                      { prim: 'CDR' },
                                      { prim: 'CDR' },
                                      { prim: 'SWAP' },
                                      { prim: 'DUP' },
                                      { prim: 'DUG', args: [{ int: '7' }] },
                                      { prim: 'CDR' },
                                      { prim: 'CAR' },
                                      {
                                        prim: 'PAIR',
                                        annots: ['%operator', '%token_id'],
                                      },
                                      { prim: 'DIG', args: [{ int: '6' }] },
                                      { prim: 'CAR' },
                                      { prim: 'PAIR', annots: ['%owner'] },
                                      { prim: 'UPDATE' },
                                      { prim: 'SWAP' },
                                      { prim: 'PAIR' },
                                      { prim: 'PAIR' },
                                      { prim: 'SWAP' },
                                      { prim: 'PAIR' },
                                      { prim: 'SWAP' },
                                    ],
                                    [
                                      { prim: 'DUP' },
                                      { prim: 'CAR' },
                                      { prim: 'SENDER' },
                                      { prim: 'COMPARE' },
                                      { prim: 'EQ' },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'bool' },
                                                { prim: 'True' },
                                              ],
                                            },
                                          ],
                                          [
                                            {
                                              prim: 'DIG',
                                              args: [{ int: '2' }],
                                            },
                                            { prim: 'DUP' },
                                            {
                                              prim: 'DUG',
                                              args: [{ int: '3' }],
                                            },
                                            { prim: 'CAR' },
                                            { prim: 'CAR' },
                                            { prim: 'SENDER' },
                                            { prim: 'COMPARE' },
                                            { prim: 'EQ' },
                                          ],
                                        ],
                                      },
                                      {
                                        prim: 'IF',
                                        args: [
                                          [],
                                          [
                                            {
                                              prim: 'PUSH',
                                              args: [
                                                { prim: 'int' },
                                                { int: '483' },
                                              ],
                                            },
                                            { prim: 'FAILWITH' },
                                          ],
                                        ],
                                      },
                                      { prim: 'DIG', args: [{ int: '2' }] },
                                      { prim: 'DUP' },
                                      { prim: 'CAR' },
                                      { prim: 'SWAP' },
                                      { prim: 'CDR' },
                                      { prim: 'DUP' },
                                      { prim: 'CDR' },
                                      { prim: 'SWAP' },
                                      { prim: 'CAR' },
                                      { prim: 'DUP' },
                                      { prim: 'CAR' },
                                      { prim: 'SWAP' },
                                      { prim: 'CDR' },
                                      {
                                        prim: 'NONE',
                                        args: [{ prim: 'unit' }],
                                      },
                                      { prim: 'DIG', args: [{ int: '5' }] },
                                      { prim: 'DUP' },
                                      { prim: 'CDR' },
                                      { prim: 'CDR' },
                                      { prim: 'SWAP' },
                                      { prim: 'DUP' },
                                      { prim: 'DUG', args: [{ int: '7' }] },
                                      { prim: 'CDR' },
                                      { prim: 'CAR' },
                                      {
                                        prim: 'PAIR',
                                        annots: ['%operator', '%token_id'],
                                      },
                                      { prim: 'DIG', args: [{ int: '6' }] },
                                      { prim: 'CAR' },
                                      { prim: 'PAIR', annots: ['%owner'] },
                                      { prim: 'UPDATE' },
                                      { prim: 'SWAP' },
                                      { prim: 'PAIR' },
                                      { prim: 'PAIR' },
                                      { prim: 'SWAP' },
                                      { prim: 'PAIR' },
                                      { prim: 'SWAP' },
                                    ],
                                  ],
                                },
                              ],
                            ],
                          },
                          { prim: 'DROP' },
                        ],
                      ],
                    },
                  ],
                ],
              },
              { prim: 'NIL', args: [{ prim: 'operation' }] },
            ],
          ],
        },
        { prim: 'PAIR' },
      ],
    ],
  },
];

export default CODE_JSON;
