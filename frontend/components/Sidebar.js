Vue.component('sidebar', {
    template: `
        <div class="sidebar">
            <div class="company-switcher">
                <div class="logo">
                    <i class="fas fa-building"></i>
                    <span>Company Name</span>
                </div>
                <div class="actions">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
            <ul class="menu-list">
                <li><a href="#"><i class="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                <li><a href="#"><i class="fas fa-university"></i><span>Banking</span></a></li>
                <li class="menu-group">
                    <a href="#"><i class="fas fa-file-invoice-dollar"></i><span>Sales</span></a>
                    <ul>
                        <li><a href="#">Invoices</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Estimates</a></li>
                    </ul>
                </li>
                <li class="menu-group">
                    <a href="#"><i class="fas fa-shopping-cart"></i><span>Purchases</span></a>
                </li>
                <li><a href="#"><i class="fas fa-exchange-alt"></i><span>Transactions</span></a></li>
                <li><a href="#"><i class="fas fa-chart-line"></i><span>Reports</span></a></li>
                <li><a href="#"><i class="fas fa-plug"></i><span>Apps</span></a></li>
                <li><a href="#"><i class="fas fa-cog"></i><span>Settings</span></a></li>
            </ul>
        </div>
    `
});
