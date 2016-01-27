### example of leveldb in webworker
---

#### proof of concept

The purpose of this example app is to experiment with a way of changing and storing app state without blocking UI rendering.

Also the idea of putting leveldb in webworker seemed cool af to me.

---

The main UI thread acts as a render loop while the webworker maintains all the state.

Leveldb is utilized within the webworker thread for persistent/offline storage.


#### getting started
First clone this repo and run npm install.

```
   npm install
```
---
##### development
To start watchify and the server on port 9090

```
   npm run dev
```

----
##### production
To run browserify and uglify and start the server on port 9090

```
npm run production
```
