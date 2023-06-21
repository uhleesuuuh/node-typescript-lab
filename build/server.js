"use strict";
// Cross-Origin Resource Sharing (CORS)
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes = __importStar(require("./routes"));
const morganMiddleware_1 = __importDefault(require("./middlewares/morganMiddleware"));
const logger_1 = __importDefault(require("./logging/logger"));
const errorMiddleware_1 = __importDefault(require("./middlewares/errorMiddleware"));
class Server {
    constructor(app) {
        if (!app) {
            throw new Error('Express instance is undefined.');
        }
        this.app = app;
        this.app.set('trust proxy', true);
        // middlewares
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(morganMiddleware_1.default.config);
        // this.app.use(authorizationMiddleware);
    }
    errorHandler() {
        this.app.use(errorMiddleware_1.default);
        return this;
    }
    routes() {
        this.app.use('/__gtg', routes.gtgRouter);
        // this.app.use('/departments', routes.departmentRoute);
        this.app.use('/employees', routes.employeesRoute);
        this.app.use('/product', routes.productRoute);
        this.app.use('/query', routes.queryHandlingRoute);
        return this;
    }
    start(port) {
        this.app.listen(port, () => {
            logger_1.default.info(`[server]: Server is listening at port ${port}`);
        });
    }
}
const createServer = (app) => new Server(app);
exports.default = createServer;
