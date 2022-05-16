const express = require('express')
const passport = require('passport')
const config = require('../config/config')
const router = express.Router()

router.get('/login',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,                      
        resourceURL: config.resourceURL,    
        customState: 'my_state',            
        failureRedirect: '/' 
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('Login was called in the Sample');
    res.redirect('/home');
});

router.get('/openid/return',
  function(req, res, next) {
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,    
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/home');
  });

router.post('/openid/return',
  function(req, res, next) {
    console.log(req.session)
    passport.authenticate('azuread-openidconnect', 
      { 
        response: res,    
        failureRedirect: '/'  
      }
    )(req, res, next);
  },
  function(req, res) {
    console.log('We received a return from AzureAD.');
    res.redirect('/home');
  });


router.get('/logout', function(req, res){
  req.session.destroy(function(err) {
    req.logOut();
    res.redirect(config.destroySessionUrl);
  });
});


// alt code from azure ad passport strategy which creates the same problem


// router.get('/login', 
//   passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
//   function(req, res) {
//     console.log('function called')
//     log.info('Login was called in the Sample');
//     res.redirect('/home');
// });

// function regenerateSessionAfterAuthentication(req, res, next) {
//   var passportInstance = req.session.passport;
//   return req.session.regenerate(function (err){
//     if (err) {
//       return next(err);
//     }
//     req.session.passport = passportInstance;
//     return req.session.save(next);
//   });
// }

// // POST /auth/openid/return
// //   Use passport.authenticate() as route middleware to authenticate the
// //   request.  If authentication fails, the user will be redirected back to the
// //   home page.  Otherwise, the primary route function function will be called,
// //   which, in this example, will redirect the user to the home page.
// router.post('/openid/return',
//   passport.authenticate('azuread-openidconnect', { failureRedirect: '/' }),
//   regenerateSessionAfterAuthentication,
//   function(req, res) { 
//     res.redirect('/home');
//   });

// router.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });


module.exports = router