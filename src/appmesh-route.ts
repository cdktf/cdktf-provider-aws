// https://www.terraform.io/docs/providers/aws/r/appmesh_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppmeshRouteConfig extends TerraformMetaArguments {
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
export interface AppmeshRouteSpecGrpcRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecGrpcRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange {
  readonly end: number;
  readonly start: number;
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadataMatch {
  readonly exact?: string;
  readonly prefix?: string;
  readonly regex?: string;
  readonly suffix?: string;
  /** range block */
  readonly range?: AppmeshRouteSpecGrpcRouteMatchMetadataMatchRange[];
}
export interface AppmeshRouteSpecGrpcRouteMatchMetadata {
  readonly invert?: boolean;
  readonly name: string;
  /** match block */
  readonly match?: AppmeshRouteSpecGrpcRouteMatchMetadataMatch[];
}
export interface AppmeshRouteSpecGrpcRouteMatch {
  readonly methodName?: string;
  readonly prefix?: string;
  readonly serviceName?: string;
  /** metadata block */
  readonly metadata?: AppmeshRouteSpecGrpcRouteMatchMetadata[];
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecGrpcRouteRetryPolicy {
  readonly grpcRetryEvents?: string[];
  readonly httpRetryEvents?: string[];
  readonly maxRetries: number;
  readonly tcpRetryEvents?: string[];
  /** per_retry_timeout block */
  readonly perRetryTimeout: AppmeshRouteSpecGrpcRouteRetryPolicyPerRetryTimeout[];
}
export interface AppmeshRouteSpecGrpcRouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecGrpcRouteTimeoutPerRequest {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecGrpcRouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecGrpcRouteTimeoutIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshRouteSpecGrpcRouteTimeoutPerRequest[];
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
export interface AppmeshRouteSpecHttp2RouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}
export interface AppmeshRouteSpecHttp2RouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecHttp2RouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange {
  readonly end: number;
  readonly start: number;
}
export interface AppmeshRouteSpecHttp2RouteMatchHeaderMatch {
  readonly exact?: string;
  readonly prefix?: string;
  readonly regex?: string;
  readonly suffix?: string;
  /** range block */
  readonly range?: AppmeshRouteSpecHttp2RouteMatchHeaderMatchRange[];
}
export interface AppmeshRouteSpecHttp2RouteMatchHeader {
  readonly invert?: boolean;
  readonly name: string;
  /** match block */
  readonly match?: AppmeshRouteSpecHttp2RouteMatchHeaderMatch[];
}
export interface AppmeshRouteSpecHttp2RouteMatch {
  readonly method?: string;
  readonly prefix: string;
  readonly scheme?: string;
  /** header block */
  readonly header?: AppmeshRouteSpecHttp2RouteMatchHeader[];
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecHttp2RouteRetryPolicy {
  readonly httpRetryEvents?: string[];
  readonly maxRetries: number;
  readonly tcpRetryEvents?: string[];
  /** per_retry_timeout block */
  readonly perRetryTimeout: AppmeshRouteSpecHttp2RouteRetryPolicyPerRetryTimeout[];
}
export interface AppmeshRouteSpecHttp2RouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecHttp2RouteTimeoutPerRequest {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecHttp2RouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecHttp2RouteTimeoutIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshRouteSpecHttp2RouteTimeoutPerRequest[];
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
export interface AppmeshRouteSpecHttpRouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}
export interface AppmeshRouteSpecHttpRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecHttpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatchRange {
  readonly end: number;
  readonly start: number;
}
export interface AppmeshRouteSpecHttpRouteMatchHeaderMatch {
  readonly exact?: string;
  readonly prefix?: string;
  readonly regex?: string;
  readonly suffix?: string;
  /** range block */
  readonly range?: AppmeshRouteSpecHttpRouteMatchHeaderMatchRange[];
}
export interface AppmeshRouteSpecHttpRouteMatchHeader {
  readonly invert?: boolean;
  readonly name: string;
  /** match block */
  readonly match?: AppmeshRouteSpecHttpRouteMatchHeaderMatch[];
}
export interface AppmeshRouteSpecHttpRouteMatch {
  readonly method?: string;
  readonly prefix: string;
  readonly scheme?: string;
  /** header block */
  readonly header?: AppmeshRouteSpecHttpRouteMatchHeader[];
}
export interface AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecHttpRouteRetryPolicy {
  readonly httpRetryEvents?: string[];
  readonly maxRetries: number;
  readonly tcpRetryEvents?: string[];
  /** per_retry_timeout block */
  readonly perRetryTimeout: AppmeshRouteSpecHttpRouteRetryPolicyPerRetryTimeout[];
}
export interface AppmeshRouteSpecHttpRouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecHttpRouteTimeoutPerRequest {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecHttpRouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecHttpRouteTimeoutIdle[];
  /** per_request block */
  readonly perRequest?: AppmeshRouteSpecHttpRouteTimeoutPerRequest[];
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
export interface AppmeshRouteSpecTcpRouteActionWeightedTarget {
  readonly virtualNode: string;
  readonly weight: number;
}
export interface AppmeshRouteSpecTcpRouteAction {
  /** weighted_target block */
  readonly weightedTarget: AppmeshRouteSpecTcpRouteActionWeightedTarget[];
}
export interface AppmeshRouteSpecTcpRouteTimeoutIdle {
  readonly unit: string;
  readonly value: number;
}
export interface AppmeshRouteSpecTcpRouteTimeout {
  /** idle block */
  readonly idle?: AppmeshRouteSpecTcpRouteTimeoutIdle[];
}
export interface AppmeshRouteSpecTcpRoute {
  /** action block */
  readonly action: AppmeshRouteSpecTcpRouteAction[];
  /** timeout block */
  readonly timeout?: AppmeshRouteSpecTcpRouteTimeout[];
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

// Resource

export class AppmeshRoute extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // mesh_name - computed: false, optional: false, required: true
  private _meshName: string;
  public get meshName() {
    return this._meshName;
  }
  public set meshName(value: string) {
    this._meshName = value;
  }

  // mesh_owner - computed: true, optional: true, required: false
  private _meshOwner?: string;
  public get meshOwner() {
    return this._meshOwner ?? this.getStringAttribute('mesh_owner');
  }
  public set meshOwner(value: string | undefined) {
    this._meshOwner = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // resource_owner - computed: true, optional: false, required: true
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // virtual_router_name - computed: false, optional: false, required: true
  private _virtualRouterName: string;
  public get virtualRouterName() {
    return this._virtualRouterName;
  }
  public set virtualRouterName(value: string) {
    this._virtualRouterName = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshRouteSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshRouteSpec[]) {
    this._spec = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: this._meshName,
      mesh_owner: this._meshOwner,
      name: this._name,
      tags: this._tags,
      virtual_router_name: this._virtualRouterName,
      spec: this._spec,
    };
  }
}
