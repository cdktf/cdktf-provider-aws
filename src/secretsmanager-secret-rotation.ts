// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecretsmanagerSecretRotationConfig extends TerraformMetaArguments {
  readonly rotationLambdaArn: string;
  readonly secretId: string;
  readonly tags?: { [key: string]: string };
  /** rotation_rules block */
  readonly rotationRules: SecretsmanagerSecretRotationRotationRules[];
}
export interface SecretsmanagerSecretRotationRotationRules {
  readonly automaticallyAfterDays: number;
}

// Resource

export class SecretsmanagerSecretRotation extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretRotationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret_rotation',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._rotationLambdaArn = config.rotationLambdaArn;
    this._secretId = config.secretId;
    this._tags = config.tags;
    this._rotationRules = config.rotationRules;
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

  // rotation_enabled - computed: true, optional: false, required: true
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }

  // rotation_lambda_arn - computed: false, optional: false, required: true
  private _rotationLambdaArn: string;
  public get rotationLambdaArn() {
    return this._rotationLambdaArn;
  }
  public set rotationLambdaArn(value: string) {
    this._rotationLambdaArn = value;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId: string;
  public get secretId() {
    return this._secretId;
  }
  public set secretId(value: string) {
    this._secretId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // rotation_rules - computed: false, optional: false, required: true
  private _rotationRules: SecretsmanagerSecretRotationRotationRules[];
  public get rotationRules() {
    return this._rotationRules;
  }
  public set rotationRules(value: SecretsmanagerSecretRotationRotationRules[]) {
    this._rotationRules = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      rotation_lambda_arn: this._rotationLambdaArn,
      secret_id: this._secretId,
      tags: this._tags,
      rotation_rules: this._rotationRules,
    };
  }
}
