# TypeScript: Stack Overflow Error in Recursive Object Comparison

This repository demonstrates a common bug in TypeScript: a stack overflow error caused by recursive object comparison with circular references.

The `bug.ts` file contains a function `compareObjects` that recursively compares two objects.  This function works correctly for most objects, but fails when comparing objects that contain circular references (where an object's property refers back to the object itself, either directly or indirectly).

The `bugSolution.ts` file provides a solution that addresses this issue, preventing the stack overflow and allowing correct comparison even with circular references.

## How to reproduce the bug

1. Clone this repository.
2. Navigate to the repository directory.
3. Compile and run `bug.ts` with a test case involving circular references (as shown in the file).

## Solution

The solution involves using a `Set` to track visited objects during recursion. This prevents infinite recursion by avoiding revisiting already-processed objects.
