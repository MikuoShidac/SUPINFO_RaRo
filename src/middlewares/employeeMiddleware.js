export function employeeMiddleware(req, res, next) {
    const role = req.user?.role;
    console.log(role)
    if (role === "User") {
      return res.status(403).json("Forbidden");
    }
  
    return next();
}