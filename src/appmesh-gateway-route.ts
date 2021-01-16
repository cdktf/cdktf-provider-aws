// https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppmeshGatewayRouteConfig extends TerraformMetaArguments {
  readonly meshName: string;
  readonly meshOwner?: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly virtualGatewayName: string;
  /** spec block */
  readonly spec: AppmeshGatewayRouteSpec[];
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
  readonly virtualServiceName: string;
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
  /** virtual_service block */
  readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService[];
}
export interface AppmeshGatewayRouteSpecGrpcRouteAction {
  /** target block */
  readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget[];
}
export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
  readonly serviceName: string;
}
export interface AppmeshGatewayRouteSpecGrpcRoute {
  /** action block */
  readonly action: AppmeshGatewayRouteSpecGrpcRouteAction[];
  /** match block */
  readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch[];
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
  readonly virtualServiceName: string;
}
export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
  /** virtual_service block */
  readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService[];
}
export interface AppmeshGatewayRouteSpecHttp2RouteAction {
  /** target block */
  readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget[];
}
export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
  readonly prefix: string;
}
export interface AppmeshGatewayRouteSpecHttp2Route {
  /** action block */
  readonly action: AppmeshGatewayRouteSpecHttp2RouteAction[];
  /** match block */
  readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch[];
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
  readonly virtualServiceName: string;
}
export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
  /** virtual_service block */
  readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService[];
}
export interface AppmeshGatewayRouteSpecHttpRouteAction {
  /** target block */
  readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget[];
}
export interface AppmeshGatewayRouteSpecHttpRouteMatch {
  readonly prefix: string;
}
export interface AppmeshGatewayRouteSpecHttpRoute {
  /** action block */
  readonly action: AppmeshGatewayRouteSpecHttpRouteAction[];
  /** match block */
  readonly match: AppmeshGatewayRouteSpecHttpRouteMatch[];
}
export interface AppmeshGatewayRouteSpec {
  /** grpc_route block */
  readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute[];
  /** http2_route block */
  readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route[];
  /** http_route block */
  readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute[];
}

// Resource

export class AppmeshGatewayRoute extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshGatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_gateway_route',
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
    this._virtualGatewayName = config.virtualGatewayName;
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

  // virtual_gateway_name - computed: false, optional: false, required: true
  private _virtualGatewayName: string;
  public get virtualGatewayName() {
    return this._virtualGatewayName;
  }
  public set virtualGatewayName(value: string) {
    this._virtualGatewayName = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshGatewayRouteSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: AppmeshGatewayRouteSpec[]) {
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
      virtual_gateway_name: this._virtualGatewayName,
      spec: this._spec,
    };
  }
}
