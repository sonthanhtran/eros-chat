import { get } from "env-var";

const serverConfig = {
  host: get("HOST").required().asString(),
  port: get("PORT").required().asIntPositive(),
};

export default serverConfig;
