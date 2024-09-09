// https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_permission_sets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSsoadminPermissionSetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_permission_sets#instance_arn DataAwsSsoadminPermissionSets#instance_arn}
  */
  readonly instanceArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_permission_sets aws_ssoadmin_permission_sets}
*/
export class DataAwsSsoadminPermissionSets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_permission_sets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsSsoadminPermissionSets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsSsoadminPermissionSets to import
  * @param importFromId The id of the existing DataAwsSsoadminPermissionSets that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_permission_sets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsSsoadminPermissionSets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ssoadmin_permission_sets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.66.0/docs/data-sources/ssoadmin_permission_sets aws_ssoadmin_permission_sets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSsoadminPermissionSetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsSsoadminPermissionSetsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_permission_sets',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.66.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceArn = config.instanceArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return this.getListAttribute('arns');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn?: string; 
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_arn: {
        value: cdktf.stringToHclTerraform(this._instanceArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
