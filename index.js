function receivesAFunction(callback) {
    callback();
}

// 2. returnsANamedFunction function
function returnsANamedFunction() {
    return function namedFunction() {};
}

// 3. returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    return function() {};
}