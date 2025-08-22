# Fix TypeError in to-auth-endpoints when errorWithStack is undefined

**Issue:** [#4150](https://github.com/better-auth/better-auth/issues/4150)
**Pull Request:** [better-auth PR #4094](https://github.com/better-auth/better-auth/pull/4094)

## Problem

Tests on the canary branch were failing with:

```
TypeError: Cannot read properties of undefined (reading 'stack')
```

This occurred in `to-auth-endpoints.ts` when `errorWithStack` was not present on the error object.

## Objective

- Prevent server errors and test failures caused by missing `errorWithStack`.
- Ensure robust error handling in debug mode.

## Solution

- Added a nullish check before accessing `errorWithStack.stack`:
  ```typescript
  if (result.response.errorWithStack?.stack) {
    result.response.stack = result.response.errorWithStack.stack;
  }
  ```
- Documented the fix in code comments for future maintainers.

## Technical Challenges

- Traced the regression to PR #4094.
- Verified the fix by running tests locally and confirming no TypeError occurs.
