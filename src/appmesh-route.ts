// https://www.terraform.io/docs/providers/aws/r/appmesh_route.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshRouteConfig extends cdktf.TerraformMetaArguments {
  readonly meshName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly virtualRouterName: string;
  /** spec block */
  readonly spec: AppmeshRouteSpec[];
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

export interface AppmeshRouteSpecHttpRoute {
  /** action block */
  readonly action: AppmeshRouteSpecHttpRouteAction[];
  /** match block */
  readonly match: AppmeshRouteSpecHttpRouteMatch[];
}

function appmeshRouteSpecHttpRouteToTerraform(struct?: AppmeshRouteSpecHttpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshRouteSpecHttpRouteActionToTerraform)(struct!.action),
    match: cdktf.listMapper(appmeshRouteSpecHttpRouteMatchToTerraform)(struct!.match),
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

export interface AppmeshRouteSpecTcpRoute {
  /** action block */
  readonly action: AppmeshRouteSpecTcpRouteAction[];
}

function appmeshRouteSpecTcpRouteToTerraform(struct?: AppmeshRouteSpecTcpRoute): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.listMapper(appmeshRouteSpecTcpRouteActionToTerraform)(struct!.action),
  }
}

export interface AppmeshRouteSpec {
  readonly priority?: number;
  /** http_route block */
  readonly httpRoute?: AppmeshRouteSpecHttpRoute[];
  /** tcp_route block */
  readonly tcpRoute?: AppmeshRouteSpecTcpRoute[];
}

function appmeshRouteSpecToTerraform(struct?: AppmeshRouteSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
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
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_router_name: cdktf.stringToTerraform(this._virtualRouterName),
      spec: cdktf.listMapper(appmeshRouteSpecToTerraform)(this._spec),
    };
  }
}
