/**
 * (#)application.mjs   1.0.0   09/16/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
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
        axiosModule.invokeAxiosWithSearch();
    }
}

export { Application };