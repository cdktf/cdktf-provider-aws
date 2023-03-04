// https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminManagedPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment#id SsoadminManagedPolicyAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment#instance_arn SsoadminManagedPolicyAttachment#instance_arn}
  */
  readonly instanceArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment#managed_policy_arn SsoadminManagedPolicyAttachment#managed_policy_arn}
  */
  readonly managedPolicyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment#permission_set_arn SsoadminManagedPolicyAttachment#permission_set_arn}
  */
  readonly permissionSetArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment aws_ssoadmin_managed_policy_attachment}
*/
export class SsoadminManagedPolicyAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssoadmin_managed_policy_attachment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment aws_ssoadmin_managed_policy_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoadminManagedPolicyAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: SsoadminManagedPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_managed_policy_attachment',
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
    this._id = config.id;
    this._instanceArn = config.instanceArn;
    this._managedPolicyArn = config.managedPolicyArn;
    this._permissionSetArn = config.permissionSetArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managed_policy_arn - computed: false, optional: false, required: true
  private _managedPolicyArn?: string; 
  public get managedPolicyArn() {
    return this.getStringAttribute('managed_policy_arn');
  }
  public set managedPolicyArn(value: string) {
    this._managedPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPolicyArnInput() {
    return this._managedPolicyArn;
  }

  // managed_policy_name - computed: true, optional: false, required: false
  public get managedPolicyName() {
    return this.getStringAttribute('managed_policy_name');
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
      id: cdktf.stringToTerraform(this._id),
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      managed_policy_arn: cdktf.stringToTerraform(this._managedPolicyArn),
      permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
    };
  }
}
