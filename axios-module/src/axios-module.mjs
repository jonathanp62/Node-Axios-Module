/**
 * (#)axios-module.mjs  1.0.0   09/16/2023
 *
 * Copyright (c) Jonathan M. Parker
 * 324 Lantana Drive
 * Owings Mills, MD  21117 U.S.A
 * All Rights Reserved.
 */

import axios from 'axios';
import Yargs from 'yargs';

import { hideBin } from "yargs/helpers";

/**
 * The application class.
 */
class AxiosModule {
    /**
     * The run method.
     */
    invokeAxios() {
        const args = Yargs(hideBin(process.argv))
            .command('invoke [name]', 'invoke axios', (yargs) => {
                return yargs
                    .option('n', {
                        alias: 'name',
                        type: 'string',
                        description: 'Your name',
                        demandOption: true
                    })
            })
            .help()
            .argv;

        if (args.name !== undefined)
            console.log(`Hello, ${args.name}. Here's a random joke...`);
        else
            console.log(`Hello here's a random joke...`);

        const url = 'https://icanhazdadjoke.com/';

        axios.get(url, { headers: { Accept: 'application/json' } })
            .then(response => {
                console.log(response.data.joke);
            });
    }
}

export { AxiosModule };