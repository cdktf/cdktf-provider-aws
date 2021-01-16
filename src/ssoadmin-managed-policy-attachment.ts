// https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoadminManagedPolicyAttachmentConfig extends cdktf.TerraformMetaArguments {
  readonly instanceArn: string;
  readonly managedPolicyArn: string;
  readonly permissionSetArn: string;
}

// Resource

export class SsoadminManagedPolicyAttachment extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsoadminManagedPolicyAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_managed_policy_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceArn = config.instanceArn;
    this._managedPolicyArn = config.managedPolicyArn;
    this._permissionSetArn = config.permissionSetArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn: string;
  public get instanceArn() {
    return this.getStringAttribute('instance_arn');
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceArnInput() {
    return this._instanceArn
  }

  // managed_policy_arn - computed: false, optional: false, required: true
  private _managedPolicyArn: string;
  public get managedPolicyArn() {
    return this.getStringAttribute('managed_policy_arn');
  }
  public set managedPolicyArn(value: string) {
    this._managedPolicyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPolicyArnInput() {
    return this._managedPolicyArn
  }

  // managed_policy_name - computed: true, optional: false, required: false
  public get managedPolicyName() {
    return this.getStringAttribute('managed_policy_name');
  }

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn: string;
  public get permissionSetArn() {
    return this.getStringAttribute('permission_set_arn');
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionSetArnInput() {
    return this._permissionSetArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_arn: cdktf.stringToTerraform(this._instanceArn),
      managed_policy_arn: cdktf.stringToTerraform(this._managedPolicyArn),
      permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
    };
  }
}
