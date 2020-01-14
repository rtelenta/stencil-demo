'use strict';

const core = require('./core-e07d6aa2.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["button-ds_2.cjs",[[1,"button-ds",{"value":[1],"active":[32]},[[0,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
