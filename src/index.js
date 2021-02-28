export const compose = (...fns) => (...arg) => {
  const fn = fns.pop();

  return fns.reduceRight((r, f) => f(r), fn(...arg));
};
