export class LoginController {
  async login(req, res, next) {
    try {
      console.log({ req, res, next });
    } catch (err) {
      next(err);
    }
  }
}
