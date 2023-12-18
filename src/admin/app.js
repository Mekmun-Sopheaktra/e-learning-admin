

      const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  translations: {
      en: {
        'app.components.LeftMenu.navbrand.title': 'Tech Design Center',
        'app.components.LeftMenu.navbrand.title': 'TDC workplace',
        
        "Auth.form.welcome.title": "Welcome to TDC Admin!",
        "Auth.form.welcome.subtitle": "Log in to TDC Account",
      }
    }, 
      
        
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
