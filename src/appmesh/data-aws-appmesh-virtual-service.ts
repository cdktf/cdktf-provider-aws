// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* App Mesh
*/
export interface DataAwsAppmeshVirtualServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_name DataAwsAppmeshVirtualService#mesh_name}
  */
  readonly meshName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#mesh_owner DataAwsAppmeshVirtualService#mesh_owner}
  */
  readonly meshOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#name DataAwsAppmeshVirtualService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service#tags DataAwsAppmeshVirtualService#tags}
  */
  readonly tags?: { [key: string]: string };
}
export class DataAwsAppmeshVirtualServiceSpecProviderVirtualNode extends cdktf.ComplexComputedList {

  // virtual_node_name - computed: true, optional: false, required: false
  public get virtualNodeName() {
    return this.getStringAttribute('virtual_node_name');
  }
}
export class DataAwsAppmeshVirtualServiceSpecProviderVirtualRouter extends cdktf.ComplexComputedList {

  // virtual_router_name - computed: true, optional: false, required: false
  public get virtualRouterName() {
    return this.getStringAttribute('virtual_router_name');
  }
}
export class DataAwsAppmeshVirtualServiceSpecProvider extends cdktf.ComplexComputedList {

  // virtual_node - computed: true, optional: false, required: false
  public get virtualNode() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('virtual_node');
  }

  // virtual_router - computed: true, optional: false, required: false
  public get virtualRouter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('virtual_router');
  }
}
export class DataAwsAppmeshVirtualServiceSpec extends cdktf.ComplexComputedList {

  // provider - computed: true, optional: false, required: false
  public get provider() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('provider');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service aws_appmesh_virtual_service}
*/
export class DataAwsAppmeshVirtualService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appmesh_virtual_service";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/appmesh_virtual_service aws_appmesh_virtual_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAppmeshVirtualServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsAppmeshVirtualServiceConfig) {
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
  private _meshName?: string; 
  public get meshName() {
    return this.getStringAttribute('mesh_name');
  }
  public set meshName(value: string) {
    this._meshName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get meshNameInput() {
    return this._meshName;
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
    return this._meshOwner;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_owner - computed: true, optional: false, required: false
  public get resourceOwner() {
    return this.getStringAttribute('resource_owner');
  }

  // spec - computed: true, optional: false, required: false
  public spec(index: string) {
    return new DataAwsAppmeshVirtualServiceSpec(this, 'spec', index, false);
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mesh_name: cdktf.stringToTerraform(this._meshName),
      mesh_owner: cdktf.stringToTerraform(this._meshOwner),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }
}
