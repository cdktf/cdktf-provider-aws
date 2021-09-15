// https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshGatewayRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_name AppmeshGatewayRoute#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#mesh_owner AppmeshGatewayRoute#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#name AppmeshGatewayRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags AppmeshGatewayRoute#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#tags_all AppmeshGatewayRoute#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_gateway_name AppmeshGatewayRoute#virtual_gateway_name}
  */
  readonly virtualGatewayName: string;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#spec AppmeshGatewayRoute#spec}
  */
  readonly spec: AppmeshGatewayRouteSpec[];
}
export interface AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

function appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}

export interface AppmeshGatewayRouteSpecGrpcRouteActionTarget {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecGrpcRouteActionTargetVirtualService[];
}

function appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteActionTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionTargetVirtualServiceToTerraform)(struct!.virtualService),
  }
}

export interface AppmeshGatewayRouteSpecGrpcRouteAction {
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecGrpcRouteActionTarget[];
}

function appmeshGatewayRouteSpecGrpcRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionTargetToTerraform)(struct!.target),
  }
}

export interface AppmeshGatewayRouteSpecGrpcRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#service_name AppmeshGatewayRoute#service_name}
  */
  readonly serviceName: string;
}

function appmeshGatewayRouteSpecGrpcRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export interface AppmeshGatewayRouteSpecGrpcRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecGrpcRouteAction[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecGrpcRouteMatch[];
}

function appmeshGatewayRouteSpecGrpcRouteToTerraform(struct?: AppmeshGatewayRouteSpecGrpcRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteActionToTerraform)(struct!.action),
    match: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

function appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}

export interface AppmeshGatewayRouteSpecHttp2RouteActionTarget {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecHttp2RouteActionTargetVirtualService[];
}

function appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteActionTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionTargetVirtualServiceToTerraform)(struct!.virtualService),
  }
}

export interface AppmeshGatewayRouteSpecHttp2RouteAction {
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecHttp2RouteActionTarget[];
}

function appmeshGatewayRouteSpecHttp2RouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionTargetToTerraform)(struct!.target),
  }
}

export interface AppmeshGatewayRouteSpecHttp2RouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
  */
  readonly prefix: string;
}

function appmeshGatewayRouteSpecHttp2RouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttp2RouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface AppmeshGatewayRouteSpecHttp2Route {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecHttp2RouteAction[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecHttp2RouteMatch[];
}

function appmeshGatewayRouteSpecHttp2RouteToTerraform(struct?: AppmeshGatewayRouteSpecHttp2Route): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteActionToTerraform)(struct!.action),
    match: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service_name AppmeshGatewayRoute#virtual_service_name}
  */
  readonly virtualServiceName: string;
}

function appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service_name: cdktf.stringToTerraform(struct!.virtualServiceName),
  }
}

export interface AppmeshGatewayRouteSpecHttpRouteActionTarget {
  /**
  * virtual_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#virtual_service AppmeshGatewayRoute#virtual_service}
  */
  readonly virtualService: AppmeshGatewayRouteSpecHttpRouteActionTargetVirtualService[];
}

function appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteActionTarget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_service: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionTargetVirtualServiceToTerraform)(struct!.virtualService),
  }
}

export interface AppmeshGatewayRouteSpecHttpRouteAction {
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#target AppmeshGatewayRoute#target}
  */
  readonly target: AppmeshGatewayRouteSpecHttpRouteActionTarget[];
}

function appmeshGatewayRouteSpecHttpRouteActionToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionTargetToTerraform)(struct!.target),
  }
}

export interface AppmeshGatewayRouteSpecHttpRouteMatch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#prefix AppmeshGatewayRoute#prefix}
  */
  readonly prefix: string;
}

function appmeshGatewayRouteSpecHttpRouteMatchToTerraform(struct?: AppmeshGatewayRouteSpecHttpRouteMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}

export interface AppmeshGatewayRouteSpecHttpRoute {
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#action AppmeshGatewayRoute#action}
  */
  readonly action: AppmeshGatewayRouteSpecHttpRouteAction[];
  /**
  * match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#match AppmeshGatewayRoute#match}
  */
  readonly match: AppmeshGatewayRouteSpecHttpRouteMatch[];
}

function appmeshGatewayRouteSpecHttpRouteToTerraform(struct?: AppmeshGatewayRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteActionToTerraform)(struct!.action),
    match: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteMatchToTerraform)(struct!.match),
  }
}

export interface AppmeshGatewayRouteSpec {
  /**
  * grpc_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#grpc_route AppmeshGatewayRoute#grpc_route}
  */
  readonly grpcRoute?: AppmeshGatewayRouteSpecGrpcRoute[];
  /**
  * http2_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http2_route AppmeshGatewayRoute#http2_route}
  */
  readonly http2Route?: AppmeshGatewayRouteSpecHttp2Route[];
  /**
  * http_route block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html#http_route AppmeshGatewayRoute#http_route}
  */
  readonly httpRoute?: AppmeshGatewayRouteSpecHttpRoute[];
}

function appmeshGatewayRouteSpecToTerraform(struct?: AppmeshGatewayRouteSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    grpc_route: cdktf.listMapper(appmeshGatewayRouteSpecGrpcRouteToTerraform)(struct!.grpcRoute),
    http2_route: cdktf.listMapper(appmeshGatewayRouteSpecHttp2RouteToTerraform)(struct!.http2Route),
    http_route: cdktf.listMapper(appmeshGatewayRouteSpecHttpRouteToTerraform)(struct!.httpRoute),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route}
*/
export class AppmeshGatewayRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_gateway_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_gateway_route.html aws_appmesh_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshGatewayRouteConfig
  */
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
    this._tagsAll = config.tagsAll;
    this._virtualGatewayName = config.virtualGatewayName;
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

  // virtual_gateway_name - computed: false, optional: false, required: true
  private _virtualGatewayName: string;
  public get virtualGatewayName() {
    return this.getStringAttribute('virtual_gateway_name');
  }
  public set virtualGatewayName(value: string) {
    this._virtualGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualGatewayNameInput() {
    return this._virtualGatewayName
  }

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshGatewayRouteSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshGatewayRouteSpec[]) {
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
      virtual_gateway_name: cdktf.stringToTerraform(this._virtualGatewayName),
      spec: cdktf.listMapper(appmeshGatewayRouteSpecToTerraform)(this._spec),
    };
  }
}
