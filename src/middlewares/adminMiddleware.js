export function adminMiddleware(req, res, next) {
    const role = req.user?.role;
    if (role !== "Admin") {
      return res.status(403).json("FORBIDDEN");
    }
  
    return next();
  }