
var submitCloseModal = function(error, state){
  if (!error) {
    if (state === "signIn") {
      Router.go('/');
    }
    if (state === "signUp") {      
      Router.go('/');
    }
  }
};

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Your Name"
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
// AccountsTemplates.configureRoute('signIn');
// AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

AccountsTemplates.configure({
  // Behaviour
  confirmPassword: false,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,

  // Appearance
  showAddRemoveServices: true,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: false,

  // Client-side Validation
  continuousValidation: false,
  negativeFeedback: false,
  negativeValidation: false,
  positiveValidation: false,
  positiveFeedback: false,
  showValidating: false,

  // Privacy Policy and Terms of Use
  // privacyUrl: 'privacy',
  // termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/',
  redirectTimeout: 2000,

  // Hooks
  // onLogoutHook: submitCloseModal,
  onSubmitHook: submitCloseModal,

  // Texts
  texts: {
    button: {
        signUp: "Register Now!"
    },
    socialSignUp: "Register",
    socialIcons: {
        "meteor-developer": "fa fa-rocket"
    },
    title: {
        forgotPwd: "Recover Your Passwod"
    },
  },
});
