# Unhandled Exception in Node.js HTTP Server

This repository demonstrates a common error in Node.js applications: unhandled exceptions within HTTP request handlers.  Improper error handling can lead to server crashes and unexpected behavior.

## Bug

The `bug.js` file showcases a server that throws an exception without a proper `try...catch` block. This results in the server immediately crashing when an error occurs.

## Solution

The `bugSolution.js` file provides a corrected version with proper error handling using a `try...catch` block. This ensures that the server remains operational even if errors occur during request processing, providing a more robust and reliable application.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js` and send a request to the server (e.g., using `curl`).  Observe the server crashing.
3. Run `node bugSolution.js` and send a request to the server. Observe that the server gracefully handles the error and continues to run.

This example highlights the importance of comprehensive error handling in production-ready Node.js applications.