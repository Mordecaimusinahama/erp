Vue.component('login-form', {
    template: `
        <div class="login-container">
            <div class="login-box">
                <div class="logo-container">
                    <img src="PiqueSquid V Logo O&P.png" alt="Company Logo" style="width: 200px;" />
                </div>
                <h2>Sign in</h2>
                <p>to continue to Akaunting</p>
                <form>
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
                            <input type="password" id="password" placeholder="Enter your password">
                        </div>
                    </div>
                    <div class="form-actions">
                        <a href="#" class="forgot-password">Forgot password?</a>
                        <button type="submit" class="btn">Login</button>
                    </div>
                </form>
                <div class="signup-link">
                    <p>Don't have an account? <a href="signup.html">Sign up</a></p>
                </div>
            </div>
        </div>
    `
});
