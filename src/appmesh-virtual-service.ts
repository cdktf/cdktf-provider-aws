// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_name AppmeshVirtualService#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#mesh_owner AppmeshVirtualService#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#name AppmeshVirtualService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags AppmeshVirtualService#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#tags_all AppmeshVirtualService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#spec AppmeshVirtualService#spec}
  */
  readonly spec: AppmeshVirtualServiceSpec[];
}
export interface AppmeshVirtualServiceSpecProviderVirtualNode {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node_name AppmeshVirtualService#virtual_node_name}
  */
  readonly virtualNodeName: string;
}

function appmeshVirtualServiceSpecProviderVirtualNodeToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualNode): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_node_name: cdktf.stringToTerraform(struct!.virtualNodeName),
  }
}

export interface AppmeshVirtualServiceSpecProviderVirtualRouter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router_name AppmeshVirtualService#virtual_router_name}
  */
  readonly virtualRouterName: string;
}

function appmeshVirtualServiceSpecProviderVirtualRouterToTerraform(struct?: AppmeshVirtualServiceSpecProviderVirtualRouter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_router_name: cdktf.stringToTerraform(struct!.virtualRouterName),
  }
}

export interface AppmeshVirtualServiceSpecProvider {
  /**
  * virtual_node block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_node AppmeshVirtualService#virtual_node}
  */
  readonly virtualNode?: AppmeshVirtualServiceSpecProviderVirtualNode[];
  /**
  * virtual_router block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#virtual_router AppmeshVirtualService#virtual_router}
  */
  readonly virtualRouter?: AppmeshVirtualServiceSpecProviderVirtualRouter[];
}

function appmeshVirtualServiceSpecProviderToTerraform(struct?: AppmeshVirtualServiceSpecProvider): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    virtual_node: cdktf.listMapper(appmeshVirtualServiceSpecProviderVirtualNodeToTerraform)(struct!.virtualNode),
    virtual_router: cdktf.listMapper(appmeshVirtualServiceSpecProviderVirtualRouterToTerraform)(struct!.virtualRouter),
  }
}

export interface AppmeshVirtualServiceSpec {
  /**
  * provider block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html#provider AppmeshVirtualService#provider}
  */
  readonly provider?: AppmeshVirtualServiceSpecProvider[];
}

function appmeshVirtualServiceSpecToTerraform(struct?: AppmeshVirtualServiceSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    provider: cdktf.listMapper(appmeshVirtualServiceSpecProviderToTerraform)(struct!.provider),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service}
*/
export class AppmeshVirtualService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_virtual_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_service.html aws_appmesh_virtual_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppmeshVirtualServiceConfig
  */
  public constructor(scope: Construct, id: string, config: AppmeshVirtualServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appmesh_virtual_service',
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

  // spec - computed: false, optional: false, required: true
  private _spec: AppmeshVirtualServiceSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: AppmeshVirtualServiceSpec[]) {
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
      spec: cdktf.listMapper(appmeshVirtualServiceSpecToTerraform)(this._spec),
    };
  }
}
