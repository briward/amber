/**
 * The route options definition.
 */
export interface RouteOptions {
  /**
   * The name of the route.
   */
  name?: string;

  /**
   * The assigned URL pattern for the route.
   */
  pathname: URLPattern;

  /**
   * The HTTP method allowed to the route.
   */
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

  /**
   * The callback function when handling the route.
   */
  callback: CallableFunction;
}