// modules
import maire from './modules/mary-rose.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        maire,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
