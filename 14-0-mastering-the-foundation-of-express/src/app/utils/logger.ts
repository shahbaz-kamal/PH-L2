export const logger = async (req, res, next) => {
  console.log(
    `🔥Request sent from ${req.hostname} || ${req.method} -${
      req.url
    } -${new Date().toLocaleTimeString()}`
  );
  next();
};
