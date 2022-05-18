const OIDCStrategy = require('passport-azure-ad').OIDCStrategy

const mongoose = require('mongoose')
const config = require('../config/config')
const User = require('../models/user')


module.exports = function (passport) {
  passport.use(new OIDCStrategy({
    identityMetadata: process.env.IDENTITYMETADATA,
    clientID: process.env.CLIENTID,
    responseType: config.creds.responseType,
    responseMode: config.creds.responseMode,
    redirectUrl: config.creds.redirectUrl,
    allowHttpForRedirectUrl: config.creds.allowHttpForRedirectUrl,
    clientSecret: process.env.CLIENTSECRET,
    validateIssuer: config.creds.validateIssuer,
    isB2C: config.creds.isB2C,
    issuer: config.creds.issuer,
    passReqToCallback: config.creds.passReqToCallback,
    scope: config.creds.scope,
    loggingLevel: config.creds.loggingLevel,
    nonceLifetime: config.creds.nonceLifetime,
    nonceMaxAmount: config.creds.nonceMaxAmount,
    useCookieInsteadOfSession: config.creds.useCookieInsteadOfSession,
    cookieSameSite: config.creds.cookieSameSite, // boolean
    cookieEncryptionKeys: config.creds.cookieEncryptionKeys,
    clockSkew: config.creds.clockSkew,
    // proxy: { port: 'proxyport', host: 'proxyhost', protocol: 'http' }, 
  },
  async (accessToken, refreshToken, profile, done) => {

    const newUser = {
      microsoftId: profile.oid,
      displayName: profile.displayName,
    }

    try {
      let user = await User.findOne({ microsoftId: profile.oid })

      if (user) {
        done(null, user)
      } else {
        user = await User.create(newUser)
        done(null, user)
      }
    } catch (err) {
      console.error(err)
    }
  }
)
)

passport.serializeUser((user, done) => {
done(null, user.id)
})

passport.deserializeUser((id, done) => {
User.findById(id, (err, user) => done(err, user))
})
}