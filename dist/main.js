"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const session = require("express-session");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'my-secret',
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 200000
        }
    }));
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map