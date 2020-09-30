export function wait(ms: number) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}
