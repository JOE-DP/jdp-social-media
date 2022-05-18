
exports.creds = {
  
    responseType: 'code id_token', 
  
    responseMode: 'form_post', 
  
    redirectUrl: 'https://jdp-socialmedia.herokuapp.com/auth/openid/return', 
    
  
    allowHttpForRedirectUrl: true,
  
    validateIssuer: false,
  
    issuer: null,
  
    passReqToCallback: false,
  
    useCookieInsteadOfSession: false,
  
    scope: ['profile'],
  
    loggingLevel: false,
  
    nonceLifetime: null,
  
    nonceMaxAmount: 5,
  
    clockSkew: null,
  };
  
  exports.destroySessionUrl = 'https://jdp-socialmedia.herokuapp.com/';
  
  exports.useMongoDBSessionStore = false;
  
  exports.mongoDBSessionMaxAge = 24 * 60 * 60;  