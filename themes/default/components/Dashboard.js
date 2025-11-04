Vue.component('dashboard', {
    template: `
        <div class="dashboard">
            <div class="header-toolbar">
                <h2>Company Overview</h2>
                <div class="actions">
                    <button class="btn">New Dashboard</button>
                    <button class="btn">Add Widget</button>
                </div>
            </div>
            <div class="widgets">
                <div class="widget">
                    <h3>Cash Flow Chart</h3>
                    <p>Line chart visualization will go here.</p>
                </div>
                <div class="widget">
                    <h3>Summary Cards</h3>
                    <div class="summary-cards">
                        <div class="card">
                            <h4>Net Income</h4>
                            <p>{{ netIncome }}</p>
                        </div>
                        <div class="card">
                            <h4>Future-Oriented Report</h4>
                            <p>{{ futureReport }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {
            netIncome: '$12,345.67',
            futureReport: '3 upcoming bills, 5 overdue invoices.'
        }
    },
    mounted() {
        // Mock data is now directly in the data property.
        // The fetch call is removed for now to ensure UI functionality.
    }
});
