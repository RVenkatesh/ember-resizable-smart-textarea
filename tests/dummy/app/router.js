import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL,
});

Router.map(function () {
    docsRoute(this, function () {
        /* Your docs routes go here */
        this.route('demo');
        this.route('installation');
        this.route('usage');
        this.route('license');
    });
});

export default Router;
