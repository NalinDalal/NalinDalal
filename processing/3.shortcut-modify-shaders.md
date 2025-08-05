# Add shortcut methods for modifying base shaders and documentation #8020 | Shader Modification Shortcuts in p5.js (`dev-2.0`)

**Issue:** [#7993](https://github.com/processing/p5.js/issues/7993)
**Pull Request:** [p5.js PR #8001](https://github.com/processing/p5.js/pull/8001) *(placeholder link – replace if different)*

## Problem

Creating and modifying shaders in `p5.strands` previously required verbose and repetitive syntax, such as:

```js
let myShader = baseMaterialShader().modify(() => { ... });
```

This created usability issues:

* Easy to forget `()` since `baseMaterialShader` looks like a variable, not a function
* Repeated `.modify()` boilerplate across shader types
* Not intuitive for new users customizing shaders

## Objective

* Reduce the boilerplate for modifying base shaders
* Make it easier and cleaner to use custom shader hooks
* Provide more intuitive APIs while preserving backwards compatibility

## Solution

Introduced new **shortcut functions** that internally call `.modify()` on each base shader:

* `modifyMaterialShader(modifier)`
* `modifyFilterShader(modifier)`
* `modifyNormalShader(modifier)`
* `modifyColorShader(modifier)`
* `modifyStrokeShader(modifier)`

All of these are exported from a new file:

```
src/webgl/modifyShaderShortcuts.js
```

Also included:

```js
attachModifyShaderShortcuts(p5Instance)
```

to inject these into the `p5` prototype for global sketch use.

## Usage

### Direct Function Usage

```js
let myShader = modifyMaterialShader({
  // custom hooks here
});
```

Equivalent to:

```js
let myShader = baseMaterialShader().modify({
  // same hooks
});
```

### Attaching to p5 Prototype

For global access inside any p5 sketch:

```js
import { attachModifyShaderShortcuts } from './src/webgl/modifyShaderShortcuts.js';
attachModifyShaderShortcuts(p5);
```

Now you can just call:

```js
let myShader = modifyMaterialShader({ ... });
```

## Benefits

✅ **Reduced Boilerplate** — no need for `baseShader().modify()` syntax
✅ **Improved Clarity** — shortcut names clarify intent and reduce user confusion
✅ **Easier Onboarding** — new users can write shaders with fewer gotchas
✅ **Modular Design** — shortcuts live in a dedicated file, easy to maintain or extend

## Example

```js
// Old way
let myShader = baseMaterialShader().modify({
  // hooks
});

// New way
let myShader = modifyMaterialShader({
  // same hooks
});
```

## How to Test

1. Import the `modifyShaderShortcuts.js` file
2. Use one of the shortcut functions in your sketch
3. Confirm shader behaves exactly as expected
4. (Optional) Use `attachModifyShaderShortcuts(p5)` and test in global mode

## Docs

A new file was added:
📄 `/modifymethod shortcut.md`
— contains usage, purpose, and testing steps

