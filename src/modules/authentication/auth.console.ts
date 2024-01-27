import { Command, Console } from "nestjs-console";

@Console()
export class AuthConsole {

    constructor(
    ) {
    }

    @Command({ command: "register <email> <password> <role>" })
    async autoCompleteStake(
        email: string,
        password: string,
    ): Promise<void> {
        console.log("User created");
    }
}
