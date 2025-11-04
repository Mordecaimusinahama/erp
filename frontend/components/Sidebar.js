Vue.component('sidebar', {
    template: `
        <div class="sidebar">
            <div class="company-switcher">
                <div class="logo">
                    <img src="../PiqueSquid V Logo O&P.png" alt="Company Logo" style="width: 150px;" />
                </div>
                <div class="actions">
                    <i class="material-icons">expand_more</i>
                </div>
            </div>
            <ul class="menu-list">
                <li><a href="#"><i class="material-icons">dashboard</i><span>Dashboard</span></a></li>
                <li><a href="#"><i class="material-icons">account_balance</i><span>Banking</span></a></li>
                <li class="menu-group">
                    <a href="#"><i class="material-icons">receipt</i><span>Sales</span></a>
                    <ul>
                        <li><a href="#">Invoices</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Estimates</a></li>
                    </ul>
                </li>
                <li class="menu-group">
                    <a href="#"><i class="material-icons">shopping_cart</i><span>Purchases</span></a>
                </li>
                <li><a href="#"><i class="material-icons">swap_horiz</i><span>Transactions</span></a></li>
                <li><a href="#"><i class="material-icons">assessment</i><span>Reports</span></a></li>
                <li><a href="#"><i class="material-icons">extension</i><span>Apps</span></a></li>
                <li><a href="#"><i class="material-icons">settings</i><span>Settings</span></a></li>
            </ul>
        </div>
    `
});
