// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS SSO Admin
*/
export interface SsoadminPermissionSetInlinePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#inline_policy SsoadminPermissionSetInlinePolicy#inline_policy}
  */
  readonly inlinePolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#instance_arn SsoadminPermissionSetInlinePolicy#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy#permission_set_arn SsoadminPermissionSetInlinePolicy#permission_set_arn}
  */
  readonly permissionSetArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy}
*/
export class SsoadminPermissionSetInlinePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_ssoadmin_permission_set_inline_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy aws_ssoadmin_permission_set_inline_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminPermissionSetInlinePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminPermissionSetInlinePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_permission_set_inline_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._inlinePolicy = config.inlinePolicy;
    this._instanceArn = config.instanceArn;
    this._permissionSetArn = config.permissionSetArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inline_policy - computed: false, optional: false, required: true
  private _inlinePolicy?: string; 
  public get inlinePolicy() {
    return this.getStringAttribute('inline_policy');
  }
  public set inlinePolicy(value: string) {
    this._inlinePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inlinePolicyInput() {
    return this._inlinePolicy;
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

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn?: string; 
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetArnInput() {
    return this._permissionSetArn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      inline_policy: cdktf.stringToTerraform(this._inlinePolicy),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
    };
  }
}
