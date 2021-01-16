// https://www.terraform.io/docs/providers/aws/r/ssoadmin_managed_policy_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsoadminManagedPolicyAttachmentConfig extends TerraformMetaArguments {
  readonly instanceArn: string;
  readonly managedPolicyArn: string;
  readonly permissionSetArn: string;
}

// Resource

export class SsoadminManagedPolicyAttachment extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn: string;
  public get instanceArn() {
    return this._instanceArn;
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
  }

  // managed_policy_arn - computed: false, optional: false, required: true
  private _managedPolicyArn: string;
  public get managedPolicyArn() {
    return this._managedPolicyArn;
  }
  public set managedPolicyArn(value: string) {
    this._managedPolicyArn = value;
  }

  // managed_policy_name - computed: true, optional: false, required: true
  public get managedPolicyName() {
    return this.getStringAttribute('managed_policy_name');
  }

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn: string;
  public get permissionSetArn() {
    return this._permissionSetArn;
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_arn: this._instanceArn,
      managed_policy_arn: this._managedPolicyArn,
      permission_set_arn: this._permissionSetArn,
    };
  }
}
