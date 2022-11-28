const jwt = require("jsonwebtoken");

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    // Bearer .............
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_TOKEN_STRING);
        return user;
      } catch (error) {
        throw new Error("Invalid/Expired token");
      }
    }
    throw new Error(`Authentication token must be 'Bearer [token]`);
  }
  throw new Error(`Authentication token must be provided`);
};
