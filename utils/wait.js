export function wait(seconds) {
  return new Promise((resolve) => setTimeout(() => resolve(), seconds * 1000))
}

// in component to wait:
// await wait(1)
