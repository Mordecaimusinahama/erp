Vue.component('top-header', {
    template: `
        <div class="top-header">
            <div class="sidebar-toggle">
                <i class="fas fa-bars"></i>
            </div>
            <div class="global-search">
                <input type="text" placeholder="Search...">
            </div>
            <div class="quick-add">
                <button><i class="fas fa-plus"></i></button>
            </div>
            <div class="notifications">
                <i class="fas fa-bell"></i>
            </div>
            <div class="user-profile">
                <i class="fas fa-user"></i>
            </div>
        </div>
    `
});
