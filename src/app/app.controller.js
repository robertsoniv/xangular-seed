angular.module('orderCloud')
    .controller('AppCtrl', AppController)
;

function AppController(appname, $state) {
    var vm = this;
    vm.name = appname;
    vm.$state = $state;
}