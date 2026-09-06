import { LogLevel, Rit, TransportOptions } from "@krallite/rit";

export const logger = new Rit({
    level: LogLevel.DEBUG,
    transports: [TransportOptions.CONSOLE_FILE],
});
