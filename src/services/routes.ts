class ApiRoutes {
  private _prefix = 'api/';

  private route(suffix:string): string {
    return this._prefix + suffix;
  }

  verificationSend() { return this.route('email/verification-notification')}
  forgotPassword() { return this.route('forgot-password')}
  login() { return this.route('login')}
  logout() { return this.route('logout')}
  register() { return this.route('register')}
  resetPassword() { return this.route('reset-password')}
  user() { return this.route('user')}
  verifyEmail(id: string, hash: string) {
    return this.route(`verify-email/${id}/${hash}`)
  }
  version() { return this.route('version')}
  csrf() { return 'sanctum/csrf-cookie'}
}

export default new ApiRoutes();