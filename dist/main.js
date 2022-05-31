"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({});
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT');
    console.log('port', port);
    await app.listen(port || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map