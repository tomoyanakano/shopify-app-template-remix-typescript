import type { LoaderArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export async function loader({ request }: LoaderArgs) {
  await authenticate.admin(request);

  return null;
}
