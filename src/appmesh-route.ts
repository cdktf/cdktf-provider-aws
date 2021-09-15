// https://www.terraform.io/docs/providers/aws/r/appmesh_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_name AppmeshRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#mesh_owner AppmeshRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags AppmeshRoute#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tags_all AppmeshRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_router_name AppmeshRoute#virtual_router_name}
  */
  readonly virtualRouterName: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#spec AppmeshRoute#spec}
  */
  readonly spec: AppmeshRouteSpec[];
}
export interface AppmeshRouteSpecGrpcRouteActionWeightedTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
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
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
}

function appmeshRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecGrpcRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method_name AppmeshRoute#method_name}
  */
  readonly methodName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#service_name AppmeshRoute#service_name}
  */
  readonly serviceName?: string;
  /**
  * metadata block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#metadata AppmeshRoute#metadata}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_retry_events AppmeshRoute#grpc_retry_events}
  */
  readonly grpcRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle[];
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
  */
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
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecGrpcRouteAction[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match?: AppmeshRouteSpecGrpcRouteMatch[];
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecGrpcRouteRetryPolicy[];
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
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
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
}

function appmeshRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttp2RouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle[];
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
  */
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
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecHttp2RouteAction[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match: AppmeshRouteSpecHttp2RouteMatch[];
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecHttp2RouteRetryPolicy[];
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
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
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}

function appmeshRouteSpecHttpRouteActionToTerraform(struct?: AppmeshRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecHttpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#end AppmeshRoute#end}
  */
  readonly end: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#start AppmeshRoute#start}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#exact AppmeshRoute#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#regex AppmeshRoute#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#suffix AppmeshRoute#suffix}
  */
  readonly suffix?: string;
  /**
  * range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#range AppmeshRoute#range}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#invert AppmeshRoute#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#name AppmeshRoute#name}
  */
  readonly name: string;
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#method AppmeshRoute#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#prefix AppmeshRoute#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#scheme AppmeshRoute#scheme}
  */
  readonly scheme?: string;
  /**
  * header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#header AppmeshRoute#header}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_retry_events AppmeshRoute#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#max_retries AppmeshRoute#max_retries}
  */
  readonly maxRetries: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_retry_events AppmeshRoute#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
  /**
  * per_retry_timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_retry_timeout AppmeshRoute#per_retry_timeout}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle[];
  /**
  * per_request block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#per_request AppmeshRoute#per_request}
  */
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
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecHttpRouteAction[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#match AppmeshRoute#match}
  */
  readonly match: AppmeshRouteSpecHttpRouteMatch[];
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#retry_policy AppmeshRoute#retry_policy}
  */
  readonly retryPolicy?: AppmeshRouteSpecHttpRouteRetryPolicy[];
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#virtual_node AppmeshRoute#virtual_node}
  */
  readonly virtualNode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weight AppmeshRoute#weight}
  */
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
  /**
  * weighted_target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#weighted_target AppmeshRoute#weighted_target}
  */
  readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}

function appmeshRouteSpecTcpRouteActionToTerraform(struct?: AppmeshRouteSpecTcpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    weighted_target: cdktf.listMapper(appmeshRouteSpecTcpRouteActionWeightedTargetToTerraform)(struct!.weightedTarget),
  }
}

export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#unit AppmeshRoute#unit}
  */
  readonly unit: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#value AppmeshRoute#value}
  */
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
  /**
  * idle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#idle AppmeshRoute#idle}
  */
  readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle[];
}

function appmeshRouteSpecTcpRouteTimeoutToTerraform(struct?: AppmeshRouteSpecTcpRouteTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle: cdktf.listMapper(appmeshRouteSpecTcpRouteTimeoutIdleToTerraform)(struct!.idle),
  }
}

export interface AppmeshRouteSpecTcpRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#action AppmeshRoute#action}
  */
  readonly action: AppmeshRouteSpecTcpRouteAction[];
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#timeout AppmeshRoute#timeout}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#priority AppmeshRoute#priority}
  */
  readonly priority?: number;
  /**
  * grpc_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#grpc_route AppmeshRoute#grpc_route}
  */
  readonly grpcRoute?: AppmeshRouteSpecGrpcRoute[];
  /**
  * http2_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http2_route AppmeshRoute#http2_route}
  */
  readonly http2Route?: AppmeshRouteSpecHttp2Route[];
  /**
  * http_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#http_route AppmeshRoute#http_route}
  */
  readonly httpRoute?: AppmeshRouteSpecHttpRoute[];
  /**
  * tcp_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html#tcp_route AppmeshRoute#tcp_route}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route}
*/
export class AppmeshRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_route.html aws_appmesh_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshRouteConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
      spec: cdktf.listMapper(appmeshRouteSpecToTerraform)(this._spec),
    };
  }
}
