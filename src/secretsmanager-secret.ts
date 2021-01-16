// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecretsmanagerSecretConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly kmsKeyId?: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly policy?: string;
  readonly recoveryWindowInDays?: number;
  readonly rotationLambdaArn?: string;
  readonly tags?: { [key: string]: string };
  /** rotation_rules block */
  readonly rotationRules?: SecretsmanagerSecretRotationRules[];
}
export interface SecretsmanagerSecretRotationRules {
  readonly automaticallyAfterDays: number;
}

// Resource

export class SecretsmanagerSecret extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecretsmanagerSecretConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_secret',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._kmsKeyId = config.kmsKeyId;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._policy = config.policy;
    this._recoveryWindowInDays = config.recoveryWindowInDays;
    this._rotationLambdaArn = config.rotationLambdaArn;
    this._tags = config.tags;
    this._rotationRules = config.rotationRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this._kmsKeyId;
  }
  public set kmsKeyId(value: string | undefined) {
    this._kmsKeyId = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix ?? this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy ?? this.getStringAttribute('policy');
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // recovery_window_in_days - computed: false, optional: true, required: false
  private _recoveryWindowInDays?: number;
  public get recoveryWindowInDays() {
    return this._recoveryWindowInDays;
  }
  public set recoveryWindowInDays(value: number | undefined) {
    this._recoveryWindowInDays = value;
  }

  // rotation_enabled - computed: true, optional: false, required: true
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }

  // rotation_lambda_arn - computed: true, optional: true, required: false
  private _rotationLambdaArn?: string;
  public get rotationLambdaArn() {
    return this._rotationLambdaArn ?? this.getStringAttribute('rotation_lambda_arn');
  }
  public set rotationLambdaArn(value: string | undefined) {
    this._rotationLambdaArn = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // rotation_rules - computed: false, optional: true, required: false
  private _rotationRules?: SecretsmanagerSecretRotationRules[];
  public get rotationRules() {
    return this._rotationRules;
  }
  public set rotationRules(value: SecretsmanagerSecretRotationRules[] | undefined) {
    this._rotationRules = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      kms_key_id: this._kmsKeyId,
      name: this._name,
      name_prefix: this._namePrefix,
      policy: this._policy,
      recovery_window_in_days: this._recoveryWindowInDays,
      rotation_lambda_arn: this._rotationLambdaArn,
      tags: this._tags,
      rotation_rules: this._rotationRules,
    };
  }
}
