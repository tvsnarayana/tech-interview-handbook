/**

Write an emitter class that supports the following operations:

Constructor:
```
emitter = new Emitter();
```

Subscription to events:
```
var sub = emitter.subscribe('event_name', callback);
var sub2 = emitter.subscribe('event_name', callback2);
```

Emitting events:
This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
```
emitter.emit('event_name', foo, bar);
```

Unsubscribing from existing subscriptions by releasing them:
```
sub.release(); // `sub` is the reference returned by `subscribe` above.
```

**/

function Emitter() {
    this.nextSubscriptionId = 0;
    this.events = {};
}

Emitter.prototype.subscribe = function (eventName, callback) {
    if (!this.events.hasOwnProperty(eventName)) {
        this.events[eventName] = {};
    }
    const subscriptionId = this.nextSubscriptionId;
    this.nextSubscriptionId++;
    this.events[eventName][subscriptionId] = callback;
    const events = this.events;
    const subscriber = {
        release: function () {
            delete events[eventName][subscriptionId];
            // No more subscriptions for that event. Delete that eventName from events.
            if (!Object.keys(events[eventName]).length) {
                delete events[eventName];
            }
        },
    };
    return subscriber;
};

Emitter.prototype.emit = function (eventName) {
    if (!this.events.hasOwnProperty(eventName)) {
        // No such event being subscribed to. Terminate.
        return;
    }
    const callbackArgs = Array.prototype.slice.apply(arguments).slice(1);
    const callbacks = Object.values(this.events[eventName]);
    callbacks.forEach(function (callback) {
        callback.apply(null, callbackArgs);
    });
};

// Testing code.
(function () {
    const assert = require('assert');
    const invokedArgs = [];
    const emitter = new Emitter();

    const sub = emitter.subscribe('add', function (a, b) {
        invokedArgs.push(['add1'].concat([].slice.apply(arguments)));
    });
    const sub2 = emitter.subscribe('add', function (a, b) {
        invokedArgs.push(['add2'].concat([].slice.apply(arguments)));
    });
    emitter.emit('add', 1, 2);
    assert.equal(invokedArgs.length, 2);
    assert.deepEqual(invokedArgs[0], ['add1', 1, 2]);
    assert.deepEqual(invokedArgs[1], ['add2', 1, 2]);
    invokedArgs.length = 0;

    sub2.release();
    const sub3 = emitter.subscribe('add', function (a, b) {
        invokedArgs.push(['add3'].concat([].slice.apply(arguments)));
    });
    emitter.emit('add', 2, 3);
    assert.equal(invokedArgs.length, 2);
    assert.deepEqual(invokedArgs[0], ['add1', 2, 3]);
    assert.deepEqual(invokedArgs[1], ['add3', 2, 3]);
    invokedArgs.length = 0;

    const sub4 = emitter.subscribe('mul', function (a, b) {
        invokedArgs.push(['mul'].concat([].slice.apply(arguments)));
    })
    emitter.emit('mul', 3, 4, 5);
    assert.equal(invokedArgs.length, 1);
    assert.deepEqual(invokedArgs[0], ['mul', 3, 4, 5]);
    invokedArgs.length = 0;
})();
