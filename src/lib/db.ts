import { Redis } from "@upstash/redis";

export const db = new Redis({
  url: 'https://daring-doberman-32696.upstash.io',
  token: 'AX-4ASQgZGRjZTNjMWUtOTQyMC00OTM0LWFmMGMtYzhjY2E4NjNlNTJmNGU4MDhkYjQ2YjkyNDNiNzgxYTQ4Mjg2ODYyMjZiMjI=',
});
