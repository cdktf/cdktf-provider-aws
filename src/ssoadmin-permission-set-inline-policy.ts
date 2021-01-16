// https://www.terraform.io/docs/providers/aws/r/ssoadmin_permission_set_inline_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsoadminPermissionSetInlinePolicyConfig extends TerraformMetaArguments {
  readonly inlinePolicy: string;
  readonly instanceArn: string;
  readonly permissionSetArn: string;
}

// Resource

export class SsoadminPermissionSetInlinePolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // inline_policy - computed: false, optional: false, required: true
  private _inlinePolicy: string;
  public get inlinePolicy() {
    return this._inlinePolicy;
  }
  public set inlinePolicy(value: string) {
    this._inlinePolicy = value;
  }

  // instance_arn - computed: false, optional: false, required: true
  private _instanceArn: string;
  public get instanceArn() {
    return this._instanceArn;
  }
  public set instanceArn(value: string) {
    this._instanceArn = value;
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
      inline_policy: this._inlinePolicy,
      instance_arn: this._instanceArn,
      permission_set_arn: this._permissionSetArn,
    };
  }
}
