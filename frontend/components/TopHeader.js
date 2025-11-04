Vue.component('top-header', {
    template: `
        <div class="top-header">
            <div class="sidebar-toggle">
                <i class="material-icons">menu</i>
            </div>
            <div class="global-search">
                <i class="material-icons">search</i>
                <input type="text" placeholder="Search...">
            </div>
            <div class="quick-add">
                <button class="btn"><i class="material-icons">add</i></button>
            </div>
            <div class="notifications">
                <i class="material-icons">notifications</i>
            </div>
            <div class="user-profile">
                <i class="material-icons">person</i>
            </div>
        </div>
    `
});
