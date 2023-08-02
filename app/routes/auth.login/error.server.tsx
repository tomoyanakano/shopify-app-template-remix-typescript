import type { LoginError } from "@shopify/shopify-app-remix";
import { LoginErrorType } from "@shopify/shopify-app-remix";

export function loginErrorMessage(loginErrors: LoginError) {
  if (loginErrors?.shop === LoginErrorType.MissingShop) {
    return { shop: "Please enter your shop domain to log in" };
  } else if (loginErrors?.shop === LoginErrorType.InvalidShop) {
    return { shop: "Please enter a valid shop domain to log in" };
  }

  return {};
}
