module.exports = [
    {
        id: 'Type1',
        label: 'Type 1 - This is Type 1 to test the menu',
        tagLabel: '30',
        tagTypeClass: 'warning',
        type: 'OBLIGATION_TYPE',
        campaign: true,
        children: [
            { id: 'Type1Name1', label: 'Name 1 no children', type: 'OBLIGATION', campaign: true, children: []},
            { id: 'Type1Name2', label: 'Name 2', type: 'OBLIGATION', campaign: false, },
        ],
    },
    {
        id: 'Type2',
        label: 'Type 2 - This is Type 2 to test the menu',
        tagLabel: '3',
        tagTypeClass: 'info',
        type: 'OBLIGATION_TYPE',
        children: [
            { id: 'Type2Name1', label: 'Name 1 - This is Type 1 Name 1 to test the menu', type: 'OBLIGATION', campaign: true, children: [
                    { id: 'Type2Name1Deadline1', label: 'Deadline 1', type: 'OBLIGATION_DEADLINE',},
                    { id: 'Type2Name1Deadline2', label: 'Deadline 2', type: 'OBLIGATION_DEADLINE',},
                ]
            },
            { id: 'Type2Name2', label: 'Name 2 - This is Type 2 Name 2 to test the menu', type: 'OBLIGATION', campaign: false, },
            { id: 'Type2Name3', label: 'Name 3 - This is Type 2 Name 3 to test the menu', type: 'OBLIGATION', campaign: true, },
        ],
    },
    {
        id: 'Type3',
        label: 'Type 3 - XX This is Type 3 to test the menu',
        tagLabel: '2',
        tagTypeClass: 'info',
        type: 'OBLIGATION_TYPE',
        children: [
            { id: 'Type3Name1', label: 'Name 1 - This is Type 3 Name 1 to test the menu', type: 'OBLIGATION', campaign: true, },
            { id: 'Type3Name2', label: 'Name 2 - This is Type 3 Name 2 to test the menu', type: 'OBLIGATION', campaign: false, children: [
                { id: 'Type3Name2Deadline1', label: 'Deadline 1', type: 'OBLIGATION_DEADLINE',},
                { id: 'Type3Name2Deadline2', label: 'Deadline 2', type: 'OBLIGATION_DEADLINE',},
                { id: 'Type3Name2Deadline3', label: 'Deadline 3', type: 'OBLIGATION_DEADLINE',},
                { id: 'Type3Name2Deadline4', label: 'Deadline 4', type: 'OBLIGATION_DEADLINE',},
            ]}
        ]
    },
];
