// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS WorkSpaces
*/
export interface DataAwsWorkspacesBundleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#bundle_id DataAwsWorkspacesBundle#bundle_id}
  */
  readonly bundleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#name DataAwsWorkspacesBundle#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle#owner DataAwsWorkspacesBundle#owner}
  */
  readonly owner?: string;
}
export class DataAwsWorkspacesBundleComputeType extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}
export class DataAwsWorkspacesBundleRootStorage extends cdktf.ComplexComputedList {

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
}
export class DataAwsWorkspacesBundleUserStorage extends cdktf.ComplexComputedList {

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle aws_workspaces_bundle}
*/
export class DataAwsWorkspacesBundle extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_workspaces_bundle";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/workspaces_bundle aws_workspaces_bundle} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsWorkspacesBundleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsWorkspacesBundleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_workspaces_bundle',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bundleId = config.bundleId;
    this._name = config.name;
    this._owner = config.owner;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle_id - computed: false, optional: true, required: false
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  public resetBundleId() {
    this._bundleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // compute_type - computed: true, optional: false, required: false
  public computeType(index: string) {
    return new DataAwsWorkspacesBundleComputeType(this, 'compute_type', index, false);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // root_storage - computed: true, optional: false, required: false
  public rootStorage(index: string) {
    return new DataAwsWorkspacesBundleRootStorage(this, 'root_storage', index, false);
  }

  // user_storage - computed: true, optional: false, required: false
  public userStorage(index: string) {
    return new DataAwsWorkspacesBundleUserStorage(this, 'user_storage', index, false);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      name: cdktf.stringToTerraform(this._name),
      owner: cdktf.stringToTerraform(this._owner),
    };
  }
}
