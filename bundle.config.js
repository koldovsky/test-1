module.exports = {
    bundle: {
        main: {
            scripts: [
                './src/app/**/*.js'
            ],
            styles: './src/assets/css/**/*.css'
        },
        vendor: {
            scripts: [
                './bower_components/angular/angular.js',
                './bower_components/angular-bootstrap/ui-bootstrap.js'
            ]
        }
    },
    copy: './content/**/*.{png,svg}'
};