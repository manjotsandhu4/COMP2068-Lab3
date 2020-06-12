const PageController = require('../controllers/pageController');

module.exports = router => {
    router.get('/', PageController.home);


    router.get('/about', PageController.about);

    router.get('/contact', PageController.contact)
};

