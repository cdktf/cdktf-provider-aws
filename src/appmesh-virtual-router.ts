// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualRouterConfig extends cdktf.TerraformMetaArguments {
  readonly meshName: string;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** spec block */
  readonly spec: AppmeshVirtualRouterSpec[];
}
export interface AppmeshVirtualRouterSpecListenerPortMapping {
  readonly port: number;
  readonly protocol: string;
}

function appmeshVirtualRouterSpecListenerPortMappingToTerraform(struct?: AppmeshVirtualRouterSpecListenerPortMapping): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export interface AppmeshVirtualRouterSpecListener {
  /** port_mapping block */
  readonly portMapping: AppmeshVirtualRouterSpecListenerPortMapping[];
}

function appmeshVirtualRouterSpecListenerToTerraform(struct?: AppmeshVirtualRouterSpecListener): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    port_mapping: cdktf.listMapper(appmeshVirtualRouterSpecListenerPortMappingToTerraform)(struct!.portMapping),
  }
}

export interface AppmeshVirtualRouterSpec {
  readonly serviceNames?: string[];
  /** listener block */
  readonly listener: AppmeshVirtualRouterSpecListener[];
}

function appmeshVirtualRouterSpecToTerraform(struct?: AppmeshVirtualRouterSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    service_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceNames),
    listener: cdktf.listMapper(appmeshVirtualRouterSpecListenerToTerraform)(struct!.listener),
  }
}


// Resource

export class AppmeshVirtualRouter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppmeshVirtualRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_router',
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

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshVirtualRouterSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshVirtualRouterSpec[]) {
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
      spec: cdktf.listMapper(appmeshVirtualRouterSpecToTerraform)(this._spec),
    };
  }
}
