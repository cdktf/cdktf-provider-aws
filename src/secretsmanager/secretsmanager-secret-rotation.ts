// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Secrets Manager
*/
export interface SecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}
  */
  readonly rotationLambdaArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation#secret_id SecretsmanagerSecretRotation#secret_id}
  */
  readonly secretId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation#tags SecretsmanagerSecretRotation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * rotation_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation#rotation_rules SecretsmanagerSecretRotation#rotation_rules}
  */
  readonly rotationRules: SecretsmanagerSecretRotationRotationRules;
}
export interface SecretsmanagerSecretRotationRotationRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}
  */
  readonly automaticallyAfterDays: number;
}

export function secretsmanagerSecretRotationRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRotationRulesOutputReference | SecretsmanagerSecretRotationRotationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatically_after_days: cdktf.numberToTerraform(struct!.automaticallyAfterDays),
  }
}

export class SecretsmanagerSecretRotationRotationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): SecretsmanagerSecretRotationRotationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticallyAfterDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticallyAfterDays = this._automaticallyAfterDays;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecretsmanagerSecretRotationRotationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticallyAfterDays = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticallyAfterDays = value.automaticallyAfterDays;
    }
  }

  // automatically_after_days - computed: false, optional: false, required: true
  private _automaticallyAfterDays?: number; 
  public get automaticallyAfterDays() {
    return this.getNumberAttribute('automatically_after_days');
  }
  public set automaticallyAfterDays(value: number) {
    this._automaticallyAfterDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticallyAfterDaysInput() {
    return this._automaticallyAfterDays;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation}
*/
export class SecretsmanagerSecretRotation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_secretsmanager_secret_rotation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation aws_secretsmanager_secret_rotation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsmanagerSecretRotationConfig
  */
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
    this._rotationRules.internalValue = config.rotationRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rotation_enabled - computed: true, optional: false, required: false
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }

  // rotation_lambda_arn - computed: false, optional: false, required: true
  private _rotationLambdaArn?: string; 
  public get rotationLambdaArn() {
    return this.getStringAttribute('rotation_lambda_arn');
  }
  public set rotationLambdaArn(value: string) {
    this._rotationLambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationLambdaArnInput() {
    return this._rotationLambdaArn;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // rotation_rules - computed: false, optional: false, required: true
  private _rotationRules = new SecretsmanagerSecretRotationRotationRulesOutputReference(this, "rotation_rules", true);
  public get rotationRules() {
    return this._rotationRules;
  }
  public putRotationRules(value: SecretsmanagerSecretRotationRotationRules) {
    this._rotationRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationRulesInput() {
    return this._rotationRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rotation_lambda_arn: cdktf.stringToTerraform(this._rotationLambdaArn),
      secret_id: cdktf.stringToTerraform(this._secretId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      rotation_rules: secretsmanagerSecretRotationRotationRulesToTerraform(this._rotationRules.internalValue),
    };
  }
}
