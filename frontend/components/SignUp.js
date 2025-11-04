Vue.component('signup-form', {
    template: `
        <div class="login-container">
            <div class="login-box">
                <div class="logo-container">
                    <img src="PiqueSquid V Logo O&P.png" alt="Company Logo" style="width: 200px;" />
                </div>
                <h2>Create an account</h2>
                <p>to get started with Akaunting</p>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <div class="input-group">
                            <i class="material-icons">person</i>
                            <input type="text" id="name" placeholder="Enter your name">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="input-group">
                            <i class="material-icons">email</i>
                            <input type="email" id="email" placeholder="Enter your email">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-group">
                            <i class="material-icons">lock</i>
                            <input type="password" id="password" placeholder="Create a password">
                        </div>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn">Sign Up</button>
                    </div>
                </form>
                <div class="signup-link">
                    <p>Already have an account? <a href="login.html">Sign in</a></p>
                </div>
            </div>
        </div>
    `
});
