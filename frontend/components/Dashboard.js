Vue.component('dashboard', {
    template: `
        <div class="dashboard">
            <div class="header-toolbar">
                <h2>Company Overview</h2>
                <div class="actions">
                    <button>New Dashboard</button>
                    <button>Add Widget</button>
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
            netIncome: 'Data not available',
            futureReport: 'Data not available'
        }
    },
    mounted() {
        fetch('api.php')
            .then(response => response.json())
            .then(data => {
                this.netIncome = '$' + data.net_income.toFixed(2);
                this.futureReport = data.future_report;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.netIncome = 'Error fetching data';
                this.futureReport = 'Error fetching data';
            });
    }
});
