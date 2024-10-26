import type HttpRequest from "@amber/http/request.ts";
import type HttpResponse from "@amber/http/response.ts";

export interface Params {
  [key: string]: string;
};

export interface Context {
  request: HttpRequest;
  response: HttpResponse;
  params: Params;
};
