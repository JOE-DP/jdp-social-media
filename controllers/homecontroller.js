module.exports = {

    homeGet: async (req, res) => {
        console.log(req.user)
       res.render('home.ejs')
    }
    }