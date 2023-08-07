exports.default = () => {
  const mark = Date.now();
  return () => Date.now() - mark;
};
