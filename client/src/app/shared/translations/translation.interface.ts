export interface Translation {
  shared: {
    loading: string;
    defaultError: string;
    login: string;
    logout: string;
    myProfile: string;
    signup: string;
    yes: string;
    no: string;
  };
  header: {
    switchToSwedish: string;
    switchToEnglish: string;
    switchToLightMode: string;
    switchToDarkMode: string;
  };
  auth: {
    email: string;
    password: string;
    loginButton: string;
    signupButton: string;
    orContinueWith: string;
    errors: {
      invalidEmail: string;
      invalidCredentials: string;
    };
    login: {
      title: string;
      usernameOrEmail: string;
      usernameOrEmailPlaceholder: string;
      emailPlaceholder: string;
      passwordPlaceholder: string;
      noAccountText: string;
    };
    signup: {
      title: string;
      firstNameLabel: string;
      firstNamePlaceholder: string;
      lastNameLabel: string;
      lastNamePlaceholder: string;
      usernameLabel: string;
      usernamePlaceholder: string;
      genderPlaceholder: string;
      genderMale: string;
      genderFemale: string;
      genderOther: string;
      genderPreferNotToSay: string;
      emailPlaceholder: string;
      passwordPlaceholder: string;
      confirmPasswordLabel: string;
      confirmPasswordPlaceholder: string;
      haveAccountText: string;
      loginLink: string;
      passwordsDoNotMatch: string;
    };
  };
  profile: {
    title: string;
    subtitle: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    birthDate: string;
    verifiedEmail: string;
  };
  sidebar: {
    dashboard: string;
    overview: string;
    analytics: string;
    projects: string;
    groups: string;
    reports: string;
    settings: string;
  };
  cookies: {
    message: string;
    accept: string;
    decline: string;
  };
}
