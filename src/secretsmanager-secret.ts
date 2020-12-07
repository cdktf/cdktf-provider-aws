// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
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

function secretsmanagerSecretRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    automatically_after_days: cdktf.numberToTerraform(struct!.automaticallyAfterDays),
  }
}


// Resource

export class SecretsmanagerSecret extends cdktf.TerraformResource {

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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string;
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string ) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string ) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // recovery_window_in_days - computed: false, optional: true, required: false
  private _recoveryWindowInDays?: number;
  public get recoveryWindowInDays() {
    return this.getNumberAttribute('recovery_window_in_days');
  }
  public set recoveryWindowInDays(value: number ) {
    this._recoveryWindowInDays = value;
  }
  public resetRecoveryWindowInDays() {
    this._recoveryWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryWindowInDaysInput() {
    return this._recoveryWindowInDays
  }

  // rotation_enabled - computed: true, optional: false, required: false
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }

  // rotation_lambda_arn - computed: true, optional: true, required: false
  private _rotationLambdaArn?: string;
  public get rotationLambdaArn() {
    return this.getStringAttribute('rotation_lambda_arn');
  }
  public set rotationLambdaArn(value: string) {
    this._rotationLambdaArn = value;
  }
  public resetRotationLambdaArn() {
    this._rotationLambdaArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationLambdaArnInput() {
    return this._rotationLambdaArn
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // rotation_rules - computed: false, optional: true, required: false
  private _rotationRules?: SecretsmanagerSecretRotationRules[];
  public get rotationRules() {
    return this.interpolationForAttribute('rotation_rules') as any;
  }
  public set rotationRules(value: SecretsmanagerSecretRotationRules[] ) {
    this._rotationRules = value;
  }
  public resetRotationRules() {
    this._rotationRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationRulesInput() {
    return this._rotationRules
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      policy: cdktf.stringToTerraform(this._policy),
      recovery_window_in_days: cdktf.numberToTerraform(this._recoveryWindowInDays),
      rotation_lambda_arn: cdktf.stringToTerraform(this._rotationLambdaArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      rotation_rules: cdktf.listMapper(secretsmanagerSecretRotationRulesToTerraform)(this._rotationRules),
    };
  }
}
