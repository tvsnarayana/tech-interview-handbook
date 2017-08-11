## Emitter

Write an `Emitter` class that supports the following operations:

#### Constructor

Creating a new `Emitter` instance.

```
emitter = new Emitter();
```

#### Subscription

Subscription to events and return a subscriber instance.

```
var sub = emitter.subscribe('event_name', callback);
var sub2 = emitter.subscribe('event_name', callback2);
```

#### Emitting events

This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.

```
emitter.emit('event_name', foo, bar);
```

#### Unsubscription

Existing subscribers can unsubscribe to events by releasing them.

```
sub.release(); // `sub` is the reference returned by `subscribe` above.
```
