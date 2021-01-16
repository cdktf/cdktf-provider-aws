// https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsoadminAccountAssignmentConfig extends TerraformMetaArguments {
  readonly instanceArn: string;
  readonly permissionSetArn: string;
  readonly principalId: string;
  readonly principalType: string;
  readonly targetId: string;
  readonly targetType?: string;
}

// Resource

export class SsoadminAccountAssignment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsoadminAccountAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssoadmin_account_assignment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._instanceArn = config.instanceArn;
    this._permissionSetArn = config.permissionSetArn;
    this._principalId = config.principalId;
    this._principalType = config.principalType;
    this._targetId = config.targetId;
    this._targetType = config.targetType;
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

  // permission_set_arn - computed: false, optional: false, required: true
  private _permissionSetArn: string;
  public get permissionSetArn() {
    return this._permissionSetArn;
  }
  public set permissionSetArn(value: string) {
    this._permissionSetArn = value;
  }

  // principal_id - computed: false, optional: false, required: true
  private _principalId: string;
  public get principalId() {
    return this._principalId;
  }
  public set principalId(value: string) {
    this._principalId = value;
  }

  // principal_type - computed: false, optional: false, required: true
  private _principalType: string;
  public get principalType() {
    return this._principalType;
  }
  public set principalType(value: string) {
    this._principalType = value;
  }

  // target_id - computed: false, optional: false, required: true
  private _targetId: string;
  public get targetId() {
    return this._targetId;
  }
  public set targetId(value: string) {
    this._targetId = value;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string;
  public get targetType() {
    return this._targetType;
  }
  public set targetType(value: string | undefined) {
    this._targetType = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_arn: this._instanceArn,
      permission_set_arn: this._permissionSetArn,
      principal_id: this._principalId,
      principal_type: this._principalType,
      target_id: this._targetId,
      target_type: this._targetType,
    };
  }
}
