export function userMiddleware(req, res, next) {
    const role = req.user?.role;
    if (role === "Employee") {
      return res.status(403).json("Forbidden");
    }
  
    return next();
}