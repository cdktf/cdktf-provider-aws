// https://www.terraform.io/docs/providers/aws/r/appmesh_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
  readonly meshName: string;
  readonly meshOwner?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly virtualRouterName: string;
  /** spec block */
  readonly spec: AppmeshRouteSpec[];
}
export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}

function appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecGrpcRouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecGrpcRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
}

function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
  readonly end: number;
  readonly start: number;
}

function appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
  readonly exact?: string;
  readonly prefix?: string;
  readonly regex?: string;
  readonly suffix?: string;
  /** range block */
  readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange[];
}

function appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchRangeToTerraform)(struct!.range),
  }
}

export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
  readonly invert?: boolean;
  readonly name: string;
  /** match block */
  readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch[];
}

function appmeshRouteSpecGrpcRouteMatchMetadataToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatchMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshRouteSpecGrpcRouteMatch {
  readonly methodName?: string;
  readonly prefix?: string;
  readonly serviceName?: string;
  /** metadata block */
  readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[];
}

function appmeshRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshRouteSpecGrpcRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method_name: cdktf.stringToTerraform(struct!.methodName),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    metadata: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchMetadataToTerraform)(struct!.metadata),
  }
}

export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
  readonly grpcRetryEvents?: string[];
  readonly httpRetryEvents?: string[];
  readonly maxRetries: number;
  readonly tcpRetryEvents?: string[];
  /** per_retry_timeout block */
  readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout[];
}

function appmeshRouteSpecGrpcRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecGrpcRouteRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.grpcRetryEvents),
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
    per_retry_timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeoutToTerraform)(struct!.perRetryTimeout),
  }
}

export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecGrpcRouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest[];
}

function appmeshRouteSpecGrpcRouteTimeoutToTerraform(struct?: AppmeshRouteSpecGrpcRouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutIdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutPerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshRouteSpecGrpcRoute {
  /** action block */
  readonly action: AppmeshRouteSpecGrpcRouteAction[];
  /** match block */
  readonly match?: AppmeshRouteSpecGrpcRouteMatch[];
  /** retry_policy block */
  readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy[];
  /** timeout block */
  readonly timeout?: AppmeshRouteSpecGrpcRouteTimeout[];
}

function appmeshRouteSpecGrpcRouteToTerraform(struct?: AppmeshRouteSpecGrpcRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionToTerraform)(struct!.action),
    match: cdktf.listMapper(appmeshRouteSpecGrpcRouteMatchToTerraform)(struct!.match),
    retry_policy: cdktf.listMapper(appmeshRouteSpecGrpcRouteRetryPolicyToTerraform)(struct!.retryPolicy),
    timeout: cdktf.listMapper(appmeshRouteSpecGrpcRouteTimeoutToTerraform)(struct!.timeout),
  }
}

export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}

function appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttp2RouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecHttp2RouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
}

function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
  readonly end: number;
  readonly start: number;
}

function appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
  readonly exact?: string;
  readonly prefix?: string;
  readonly regex?: string;
  readonly suffix?: string;
  /** range block */
  readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange[];
}

function appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchRangeToTerraform)(struct!.range),
  }
}

export interface AppmeshRouteSpecHttp2RouteMatchHeader {
  readonly invert?: boolean;
  readonly name: string;
  /** match block */
  readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch[];
}

function appmeshRouteSpecHttp2RouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatchHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshRouteSpecHttp2RouteMatch {
  readonly method?: string;
  readonly prefix: string;
  readonly scheme?: string;
  /** header block */
  readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[];
}

function appmeshRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshRouteSpecHttp2RouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    header: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchHeaderToTerraform)(struct!.header),
  }
}

export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
  readonly httpRetryEvents?: string[];
  readonly maxRetries: number;
  readonly tcpRetryEvents?: string[];
  /** per_retry_timeout block */
  readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout[];
}

function appmeshRouteSpecHttp2RouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttp2RouteRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
    per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeoutToTerraform)(struct!.perRetryTimeout),
  }
}

export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecHttp2RouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest[];
}

function appmeshRouteSpecHttp2RouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttp2RouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutIdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutPerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshRouteSpecHttp2Route {
  /** action block */
  readonly action: AppmeshRouteSpecHttp2RouteAction[];
  /** match block */
  readonly match: AppmeshRouteSpecHttp2RouteMatch[];
  /** retry_policy block */
  readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy[];
  /** timeout block */
  readonly timeout?: AppmeshRouteSpecHttp2RouteTimeout[];
}

function appmeshRouteSpecHttp2RouteToTerraform(struct?: AppmeshRouteSpecHttp2Route): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionToTerraform)(struct!.action),
    match: cdktf.listMapper(appmeshRouteSpecHttp2RouteMatchToTerraform)(struct!.match),
    retry_policy: cdktf.listMapper(appmeshRouteSpecHttp2RouteRetryPolicyToTerraform)(struct!.retryPolicy),
    timeout: cdktf.listMapper(appmeshRouteSpecHttp2RouteTimeoutToTerraform)(struct!.timeout),
  }
}

export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}

function appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecHttpRouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecHttpRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}

function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
  readonly end: number;
  readonly start: number;
}

function appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}

export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
  readonly exact?: string;
  readonly prefix?: string;
  readonly regex?: string;
  readonly suffix?: string;
  /** range block */
  readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange[];
}

function appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeaderMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
    range: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchRangeToTerraform)(struct!.range),
  }
}

export interface AppmeshRouteSpecHttpRouteMatchHeader {
  readonly invert?: boolean;
  readonly name: string;
  /** match block */
  readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch[];
}

function appmeshRouteSpecHttpRouteMatchHeaderToTerraform(struct?: AppmeshRouteSpecHttpRouteMatchHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    name: cdktf.stringToTerraform(struct!.name),
    match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshRouteSpecHttpRouteMatch {
  readonly method?: string;
  readonly prefix: string;
  readonly scheme?: string;
  /** header block */
  readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[];
}

function appmeshRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshRouteSpecHttpRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    header: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchHeaderToTerraform)(struct!.header),
  }
}

export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecHttpRouteRetryPolicy {
  readonly httpRetryEvents?: string[];
  readonly maxRetries: number;
  readonly tcpRetryEvents?: string[];
  /** per_retry_timeout block */
  readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout[];
}

function appmeshRouteSpecHttpRouteRetryPolicyToTerraform(struct?: AppmeshRouteSpecHttpRouteRetryPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tcpRetryEvents),
    per_retry_timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeoutToTerraform)(struct!.perRetryTimeout),
  }
}

export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecHttpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeoutPerRequest): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecHttpRouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest[];
}

function appmeshRouteSpecHttpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecHttpRouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutIdleToTerraform)(struct!.idle),
    per_request: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutPerRequestToTerraform)(struct!.perRequest),
  }
}

export interface AppmeshRouteSpecHttpRoute {
  /** action block */
  readonly action: AppmeshRouteSpecHttpRouteAction[];
  /** match block */
  readonly match: AppmeshRouteSpecHttpRouteMatch[];
  /** retry_policy block */
  readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy[];
  /** timeout block */
  readonly timeout?: AppmeshRouteSpecHttpRouteTimeout[];
}

function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshRouteSpecHttpRouteActionToTerraform)(struct!.action),
    match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchToTerraform)(struct!.match),
    retry_policy: cdktf.listMapper(appmeshRouteSpecHttpRouteRetryPolicyToTerraform)(struct!.retryPolicy),
    timeout: cdktf.listMapper(appmeshRouteSpecHttpRouteTimeoutToTerraform)(struct!.timeout),
  }
}

export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}

function appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform(struct?: AppmeshRouteSpecTcpRouteActionWeightedTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_node: cdktf.stringToTerraform(struct!.virtualNode),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export interface AppmeshRouteSpecTcpRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}

function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}

function appmeshRouteSpecTcpRouteTimeoutIdleToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeoutIdle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface AppmeshRouteSpecTcpRouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle[];
}

function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutIdleToTerraform)(struct!.idle),
  }
}

export interface AppmeshRouteSpecTcpRoute {
  /** action block */
  readonly action: AppmeshRouteSpecTcpRouteAction[];
  /** timeout block */
  readonly timeout?: AppmeshRouteSpecTcpRouteTimeout[];
}

function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshRouteSpecTcpRouteActionToTerraform)(struct!.action),
    timeout: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutToTerraform)(struct!.timeout),
  }
}

export interface AppmeshRouteSpec {
  readonly priority?: number;
  /** grpc_route block */
  readonly grpcRoute?: AppmeshRouteSpecGrpcRoute[];
  /** http2_route block */
  readonly http2Route?: AppmeshRouteSpecHttp2Route[];
  /** http_route block */
  readonly httpRoute?: AppmeshRouteSpecHttpRoute[];
  /** tcp_route block */
  readonly tcpRoute?: AppmeshRouteSpecTcpRoute[];
}

function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    grpc_route: cdktf.listMapper(appmeshRouteSpecGrpcRouteToTerraform)(struct!.grpcRoute),
    http2_route: cdktf.listMapper(appmeshRouteSpecHttp2RouteToTerraform)(struct!.http2Route),
    http_route: cdktf.listMapper(appmeshRouteSpecHttpRouteToTerraform)(struct!.httpRoute),
    tcp_route: cdktf.listMapper(appmeshRouteSpecTcpRouteToTerraform)(struct!.tcpRoute),
  }
}


// Resource

export class AppmeshRoute extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_route',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._meshName = config.meshName;
    this._meshOwner = config.meshOwner;
    this._name = config.name;
    this._tags = config.tags;
    this._virtualRouterName = config.virtualRouterName;
    this._spec = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_date - computed: true, optional: false, required: false
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName: string;
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string;
  public get meshOwner() {
    return this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string) {
    this._meshOwner = value;
  }
  public resetMeshOwner() {
    this._meshOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshOwnerInput() {
    return this._meshOwner
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // virtual_router_name - computed: false, optional: false, required: true
  private _virtualRouterName: string;
  public get virtualRouterName() {
    return this.getStringAttribute('virtual_router_name');
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterNameInput() {
    return this._virtualRouterName
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshRouteSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshRouteSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
      spec: cdktf.listMapper(appmeshRouteSpecToTerraform)(this._spec),
    };
  }
}
