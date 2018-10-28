angular.module("services", [])
    .value("factor",49)
    .value("divide",7)
    .factory("square", ["factor","divide", function (factor,divide){
        return factor / divide;    
    }]);