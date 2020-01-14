import { a as patchEsm, b as bootstrapLazy } from './core-42aadb82.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["button-ds_2",[[1,"button-ds",{"value":[1],"active":[32]},[[0,"click","handleClick"]]],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
