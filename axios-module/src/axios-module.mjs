/**
 * (#)axios-module.mjs  1.0.0   09/16/2023
 *
 * Copyright (c) Jonathan M. Parker
 * All Rights Reserved.
 * 
 * @author    Jonathan Parker
 * @version   1.0.0
 * @since     1.0.0
 */

import axios from 'axios';
import Yargs from 'yargs';

import { config } from "../config.mjs";
import { hideBin } from "yargs/helpers";

/**
 * The application class.
 */
class AxiosModule {
    /**
     * The invoke axios method.
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

        this.greet(args.name);

        axios.get(config.joke.url, { headers: { Accept: config.joke.accept } })
            .then(response => {
                console.log(response.data.joke);
            });
    }

    /**
     * Invoke axios with a search parameter.
     */
    invokeAxiosWithSearch() {
        const args = Yargs(hideBin(process.argv))
            .command('invoke [name] [search]', 'invoke axios', (yargs) => {
                return yargs
                    .option('n', {
                        alias: 'name',
                        type: 'string',
                        description: 'Your name',
                        demandOption: true
                    })
                    .option('s', {
                        alias: 'search',
                        type: 'string',
                        description: 'Search term'
                })
            })
            .help()
            .argv;

        if (args.search) {
            this.greet(args.name);

            const url = `${config.joke.url}search?term=${escape(args.search)}`

            axios.get(url, { headers: { Accept: config.joke.accept } })
                .then(response => {
                    response.data.results.forEach( j => {
                        console.log("\n" + j.joke);
                    });

                    if (response.data.results.length === 0) {
                        console.log(`No ${args.search} jokes found`);
                    }
                });
        }
    }

    /**
     * Greet the named or unnamed individual.
     *
     * @param   {string}    name
     */
    greet(name) {
        if (name)
            console.log(`Hello ${name}, here's a random joke...`);
        else
            console.log(`Hello, here's a random joke...`);
    }
}

export { AxiosModule };