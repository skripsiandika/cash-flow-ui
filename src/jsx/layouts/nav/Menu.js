export const MenuList = [
    // Dashboard
    {
        title: 'Dashboard',
        //classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-layout" />,
        to: 'dashboard',
    },

    // Registrations
    {
        title: "Registrations",
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-id-card-4" />,
        content: [
            {
                title: 'SME List',
                to: 'sme-list'
            },
            {
                title: 'Chat',
                to: 'chat'
            },
        ],
    },

    // Cashflow
    {
        title: "Cashflow",
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-id-card" />,
        content: [
            {
                title: 'Statement',
                to: 'create-statement'
            },
            {
                title: 'Report',
                to: 'cashflow-report'
            },
        ],
    },

    // Submission
    {
        title: "Submission",
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-folder-7" />,
        content: [
            {
                title: 'Loan Submission',
                to: 'customers-list'
            },
            {
                title: 'Loan List',
                to: 'chat'
            },
        ],
    },

    // Underwriting
    {
        title: 'Underwriting',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-notebook-2" />,
        content: [
            {
                title: 'Loan Submission',
                to: 'customers-list'
            },
            {
                title: 'Loan List',
                to: 'chat'
            },
        ],
    },

    // Approval
    {
        title: 'Approval',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-bookmark-1" />,
        content: [

            {
                title: 'RechartJs',
                to: 'chart-rechart',
            },
            {
                title: 'Chartjs',
                to: 'chart-chartjs',
            },
            {
                title: 'Sparkline',
                to: 'chart-sparkline',
            },
            {
                title: 'Apexchart',
                to: 'chart-apexchart',
            },
        ]
    },

    // Disbursement
    {
        title: 'Disbursement',
        classsChange: 'mm-collapse',
        iconStyle: <i className="flaticon-381-network" />,
        content: [
            {
                title: 'Loan Submission',
                to: 'customers-list'
            },
            {
                title: 'Loan List',
                to: 'chat'
            },
        ],
    },
]