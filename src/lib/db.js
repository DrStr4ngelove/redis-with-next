import { createClient } from "redis";

const client = createClient({
  password: process.env.REDIS_PW,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
});

client.on("error", (error) => {
  console.error(error);
});

client.on("connect", () => {
  if (!client.isOpen) {
    client.connect();
    console.log("Connected to Redis");
  }
});

client.set("name", "mario");

export { client };
