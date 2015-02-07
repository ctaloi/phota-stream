
var submitCloseModal = function(error, state){
  if (!error) {
    if (state === "signIn") {
      IonModal.close();
      Router.go('/');
    }
    if (state === "signUp") {
      IonModal.close();
      Router.go('/');
    }
  }
};

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Your Name"
});

AccountsTemplates.configure({
  // Behaviour
  confirmPassword: false,
  enablePasswordChange: false,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,

  // Appearance
  showAddRemoveServices: false,
  showForgotPasswordLink: false,
  showLabels: false,
  showPlaceholders: true,

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
  onLogoutHook: submitCloseModal,
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
