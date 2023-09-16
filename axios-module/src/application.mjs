/**
 * (#)application.mjs   1.0.0   09/16/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import { AxiosModule } from "./axios-module.mjs";

/**
 * The application class.
 */
class Application {
    /**
     * The run method.
     */
    run() {
        const axiosModule = new AxiosModule();

        axiosModule.invokeAxios();
    }
}

export { Application };