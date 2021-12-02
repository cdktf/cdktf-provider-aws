// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Simple Storage Service
*/
export interface S3ControlAccessPointPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html#access_point_arn S3ControlAccessPointPolicy#access_point_arn}
  */
  readonly accessPointArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html#policy S3ControlAccessPointPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html aws_s3control_access_point_policy}
*/
export class S3ControlAccessPointPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_s3control_access_point_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3control_access_point_policy.html aws_s3control_access_point_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ControlAccessPointPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: S3ControlAccessPointPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3control_access_point_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessPointArn = config.accessPointArn;
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
    return this.getBooleanAttribute('has_public_access_policy') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      policy: cdktf.stringToTerraform(this._policy),
    };
  }
}
