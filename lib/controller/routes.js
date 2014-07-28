var Routes = {
    init: function(app) {
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html');
        })
    }
};

module.exports = Routes;