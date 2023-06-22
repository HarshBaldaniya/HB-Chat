import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: 'https://daring-doberman-32696.upstash.io',
  token: 'AX-4ASQgZGRjZTNjMWUtOTQyMC00OTM0LWFmMGMtYzhjY2E4NjNlNTJmNGU4MDhkYjQ2YjkyNDNiNzgxYTQ4Mjg2ODYyMjZiMjI=',
  // url: process.env.UPSTASH_REDIS_REST_URL,
  // token: process.env.UPSTASH_REDIS_REST_TOKEN,
});
