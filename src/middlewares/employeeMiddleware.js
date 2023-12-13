export function employeeMiddleware(req, res, next) {
    const role = req.user?.role;
    if (role !== "Employee" || role !== "Admin") {
      return res.status(403).json("Forbidden");
    }
  
    return next();
}