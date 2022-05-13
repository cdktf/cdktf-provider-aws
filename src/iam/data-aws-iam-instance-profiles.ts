// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Identity and Access Management
*/
export interface DataAwsIamInstanceProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profiles#role_name DataAwsIamInstanceProfiles#role_name}
  */
  readonly roleName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profiles aws_iam_instance_profiles}
*/
export class DataAwsIamInstanceProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_instance_profiles";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/iam_instance_profiles aws_iam_instance_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsIamInstanceProfilesConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsIamInstanceProfilesConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_instance_profiles',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.14.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return cdktf.Fn.tolist(this.getListAttribute('arns'));
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return cdktf.Fn.tolist(this.getListAttribute('names'));
  }

  // paths - computed: true, optional: false, required: false
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }
}
