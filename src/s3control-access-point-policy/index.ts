// https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ControlAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy#access_point_arn S3ControlAccessPointPolicy#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy#id S3ControlAccessPointPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy#policy S3ControlAccessPointPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy aws_s3control_access_point_policy}
*/
export class S3ControlAccessPointPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3control_access_point_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy aws_s3control_access_point_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlAccessPointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_access_point_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPointArn = config.accessPointArn;
    this._id = config.id;
    this._policy = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_arn - computed: false, optional: false, required: true
  private _accessPointArn?: string; 
  public get accessPointArn() {
    return this.getStringAttribute('access_point_arn');
  }
  public set accessPointArn(value: string) {
    this._accessPointArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointArnInput() {
    return this._accessPointArn;
  }

  // has_public_access_policy - computed: true, optional: false, required: false
  public get hasPublicAccessPolicy() {
    return this.getBooleanAttribute('has_public_access_policy');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_arn: cdktf.stringToTerraform(this._accessPointArn),
      id: cdktf.stringToTerraform(this._id),
      policy: cdktf.stringToTerraform(this._policy),
    };
  }
}
