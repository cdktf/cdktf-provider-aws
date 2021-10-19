// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Secrets Manager
*/
export namespace SecretsManager {
  export interface SecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#description SecretsmanagerSecret#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#force_overwrite_replica_secret SecretsmanagerSecret#force_overwrite_replica_secret}
    */
    readonly forceOverwriteReplicaSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#kms_key_id SecretsmanagerSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#name SecretsmanagerSecret#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#name_prefix SecretsmanagerSecret#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#policy SecretsmanagerSecret#policy}
    */
    readonly policy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#recovery_window_in_days SecretsmanagerSecret#recovery_window_in_days}
    */
    readonly recoveryWindowInDays?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#rotation_lambda_arn SecretsmanagerSecret#rotation_lambda_arn}
    */
    readonly rotationLambdaArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#tags SecretsmanagerSecret#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#tags_all SecretsmanagerSecret#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * replica block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#replica SecretsmanagerSecret#replica}
    */
    readonly replica?: SecretsmanagerSecretReplica[];
    /**
    * rotation_rules block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#rotation_rules SecretsmanagerSecret#rotation_rules}
    */
    readonly rotationRules?: SecretsmanagerSecretRotationRules;
  }
  export interface SecretsmanagerSecretReplica {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#kms_key_id SecretsmanagerSecret#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#region SecretsmanagerSecret#region}
    */
    readonly region: string;
  }

  function secretsmanagerSecretReplicaToTerraform(struct?: SecretsmanagerSecretReplica): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
      region: cdktf.stringToTerraform(struct!.region),
    }
  }

  export interface SecretsmanagerSecretRotationRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html#automatically_after_days SecretsmanagerSecret#automatically_after_days}
    */
    readonly automaticallyAfterDays: number;
  }

  function secretsmanagerSecretRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRulesOutputReference | SecretsmanagerSecretRotationRules): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      automatically_after_days: cdktf.numberToTerraform(struct!.automaticallyAfterDays),
    }
  }

  export class SecretsmanagerSecretRotationRulesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._automaticallyAfterDays
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret}
  */
  export class SecretsmanagerSecret extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_secretsmanager_secret";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretConfig = {}
    */
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
      this._forceOverwriteReplicaSecret = config.forceOverwriteReplicaSecret;
      this._kmsKeyId = config.kmsKeyId;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._policy = config.policy;
      this._recoveryWindowInDays = config.recoveryWindowInDays;
      this._rotationLambdaArn = config.rotationLambdaArn;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._replica = config.replica;
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // force_overwrite_replica_secret - computed: false, optional: true, required: false
    private _forceOverwriteReplicaSecret?: boolean | cdktf.IResolvable | undefined; 
    public get forceOverwriteReplicaSecret() {
      return this.getBooleanAttribute('force_overwrite_replica_secret') as any;
    }
    public set forceOverwriteReplicaSecret(value: boolean | cdktf.IResolvable | undefined) {
      this._forceOverwriteReplicaSecret = value;
    }
    public resetForceOverwriteReplicaSecret() {
      this._forceOverwriteReplicaSecret = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get forceOverwriteReplicaSecretInput() {
      return this._forceOverwriteReplicaSecret
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: false, optional: true, required: false
    private _kmsKeyId?: string | undefined; 
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }
    public set kmsKeyId(value: string | undefined) {
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
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
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
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // policy - computed: true, optional: true, required: false
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
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
    private _recoveryWindowInDays?: number | undefined; 
    public get recoveryWindowInDays() {
      return this.getNumberAttribute('recovery_window_in_days');
    }
    public set recoveryWindowInDays(value: number | undefined) {
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
      return this.getBooleanAttribute('rotation_enabled') as any;
    }

    // rotation_lambda_arn - computed: true, optional: true, required: false
    private _rotationLambdaArn?: string | undefined; 
    public get rotationLambdaArn() {
      return this.getStringAttribute('rotation_lambda_arn');
    }
    public set rotationLambdaArn(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // tags_all - computed: true, optional: true, required: false
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // replica - computed: false, optional: true, required: false
    private _replica?: SecretsmanagerSecretReplica[] | undefined; 
    public get replica() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('replica') as any;
    }
    public set replica(value: SecretsmanagerSecretReplica[] | undefined) {
      this._replica = value;
    }
    public resetReplica() {
      this._replica = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get replicaInput() {
      return this._replica
    }

    // rotation_rules - computed: false, optional: true, required: false
    private _rotationRules?: SecretsmanagerSecretRotationRules | undefined; 
    private __rotationRulesOutput = new SecretsmanagerSecretRotationRulesOutputReference(this as any, "rotation_rules", true);
    public get rotationRules() {
      return this.__rotationRulesOutput;
    }
    public putRotationRules(value: SecretsmanagerSecretRotationRules | undefined) {
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
        force_overwrite_replica_secret: cdktf.booleanToTerraform(this._forceOverwriteReplicaSecret),
        kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        policy: cdktf.stringToTerraform(this._policy),
        recovery_window_in_days: cdktf.numberToTerraform(this._recoveryWindowInDays),
        rotation_lambda_arn: cdktf.stringToTerraform(this._rotationLambdaArn),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        replica: cdktf.listMapper(secretsmanagerSecretReplicaToTerraform)(this._replica),
        rotation_rules: secretsmanagerSecretRotationRulesToTerraform(this._rotationRules),
      };
    }
  }
  export interface SecretsmanagerSecretPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#block_public_policy SecretsmanagerSecretPolicy#block_public_policy}
    */
    readonly blockPublicPolicy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#policy SecretsmanagerSecretPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html#secret_arn SecretsmanagerSecretPolicy#secret_arn}
    */
    readonly secretArn: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy}
  */
  export class SecretsmanagerSecretPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_secretsmanager_secret_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_policy.html aws_secretsmanager_secret_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: SecretsmanagerSecretPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_secretsmanager_secret_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._blockPublicPolicy = config.blockPublicPolicy;
      this._policy = config.policy;
      this._secretArn = config.secretArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // block_public_policy - computed: false, optional: true, required: false
    private _blockPublicPolicy?: boolean | cdktf.IResolvable | undefined; 
    public get blockPublicPolicy() {
      return this.getBooleanAttribute('block_public_policy') as any;
    }
    public set blockPublicPolicy(value: boolean | cdktf.IResolvable | undefined) {
      this._blockPublicPolicy = value;
    }
    public resetBlockPublicPolicy() {
      this._blockPublicPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get blockPublicPolicyInput() {
      return this._blockPublicPolicy
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // secret_arn - computed: false, optional: false, required: true
    private _secretArn?: string; 
    public get secretArn() {
      return this.getStringAttribute('secret_arn');
    }
    public set secretArn(value: string) {
      this._secretArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get secretArnInput() {
      return this._secretArn
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        block_public_policy: cdktf.booleanToTerraform(this._blockPublicPolicy),
        policy: cdktf.stringToTerraform(this._policy),
        secret_arn: cdktf.stringToTerraform(this._secretArn),
      };
    }
  }
  export interface SecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_lambda_arn SecretsmanagerSecretRotation#rotation_lambda_arn}
    */
    readonly rotationLambdaArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#secret_id SecretsmanagerSecretRotation#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#tags SecretsmanagerSecretRotation#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * rotation_rules block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#rotation_rules SecretsmanagerSecretRotation#rotation_rules}
    */
    readonly rotationRules: SecretsmanagerSecretRotationRotationRules;
  }
  export interface SecretsmanagerSecretRotationRotationRules {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html#automatically_after_days SecretsmanagerSecretRotation#automatically_after_days}
    */
    readonly automaticallyAfterDays: number;
  }

  function secretsmanagerSecretRotationRotationRulesToTerraform(struct?: SecretsmanagerSecretRotationRotationRulesOutputReference | SecretsmanagerSecretRotationRotationRules): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      automatically_after_days: cdktf.numberToTerraform(struct!.automaticallyAfterDays),
    }
  }

  export class SecretsmanagerSecretRotationRotationRulesOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._automaticallyAfterDays
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}
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
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Resource
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
      this._rotationRules = config.rotationRules;
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
      return this.getBooleanAttribute('rotation_enabled') as any;
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
      return this._rotationLambdaArn
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
      return this._secretId
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // rotation_rules - computed: false, optional: false, required: true
    private _rotationRules?: SecretsmanagerSecretRotationRotationRules; 
    private __rotationRulesOutput = new SecretsmanagerSecretRotationRotationRulesOutputReference(this as any, "rotation_rules", true);
    public get rotationRules() {
      return this.__rotationRulesOutput;
    }
    public putRotationRules(value: SecretsmanagerSecretRotationRotationRules) {
      this._rotationRules = value;
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
        rotation_lambda_arn: cdktf.stringToTerraform(this._rotationLambdaArn),
        secret_id: cdktf.stringToTerraform(this._secretId),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        rotation_rules: secretsmanagerSecretRotationRotationRulesToTerraform(this._rotationRules),
      };
    }
  }
  export interface SecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#secret_binary SecretsmanagerSecretVersion#secret_binary}
    */
    readonly secretBinary?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#secret_id SecretsmanagerSecretVersion#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#secret_string SecretsmanagerSecretVersion#secret_string}
    */
    readonly secretString?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html#version_stages SecretsmanagerSecretVersion#version_stages}
    */
    readonly versionStages?: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version}
  */
  export class SecretsmanagerSecretVersion extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_secretsmanager_secret_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret_version.html aws_secretsmanager_secret_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretVersionConfig
    */
    public constructor(scope: Construct, id: string, config: SecretsmanagerSecretVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_secretsmanager_secret_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._secretBinary = config.secretBinary;
      this._secretId = config.secretId;
      this._secretString = config.secretString;
      this._versionStages = config.versionStages;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // secret_binary - computed: false, optional: true, required: false
    private _secretBinary?: string | undefined; 
    public get secretBinary() {
      return this.getStringAttribute('secret_binary');
    }
    public set secretBinary(value: string | undefined) {
      this._secretBinary = value;
    }
    public resetSecretBinary() {
      this._secretBinary = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretBinaryInput() {
      return this._secretBinary
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
      return this._secretId
    }

    // secret_string - computed: false, optional: true, required: false
    private _secretString?: string | undefined; 
    public get secretString() {
      return this.getStringAttribute('secret_string');
    }
    public set secretString(value: string | undefined) {
      this._secretString = value;
    }
    public resetSecretString() {
      this._secretString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretStringInput() {
      return this._secretString
    }

    // version_id - computed: true, optional: false, required: false
    public get versionId() {
      return this.getStringAttribute('version_id');
    }

    // version_stages - computed: true, optional: true, required: false
    private _versionStages?: string[] | undefined; 
    public get versionStages() {
      return this.getListAttribute('version_stages');
    }
    public set versionStages(value: string[] | undefined) {
      this._versionStages = value;
    }
    public resetVersionStages() {
      this._versionStages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionStagesInput() {
      return this._versionStages
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        secret_binary: cdktf.stringToTerraform(this._secretBinary),
        secret_id: cdktf.stringToTerraform(this._secretId),
        secret_string: cdktf.stringToTerraform(this._secretString),
        version_stages: cdktf.listMapper(cdktf.stringToTerraform)(this._versionStages),
      };
    }
  }
  export interface DataAwsSecretsmanagerSecretConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html#name DataAwsSecretsmanagerSecret#name}
    */
    readonly name?: string;
  }
  export class DataAwsSecretsmanagerSecretRotationRules extends cdktf.ComplexComputedList {

    // automatically_after_days - computed: true, optional: false, required: false
    public get automaticallyAfterDays() {
      return this.getNumberAttribute('automatically_after_days');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html aws_secretsmanager_secret}
  */
  export class DataAwsSecretsmanagerSecret extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_secretsmanager_secret";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret.html aws_secretsmanager_secret} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretConfig = {}) {
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
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: true, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // kms_key_id - computed: true, optional: false, required: false
    public get kmsKeyId() {
      return this.getStringAttribute('kms_key_id');
    }

    // name - computed: true, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // policy - computed: true, optional: false, required: false
    public get policy() {
      return this.getStringAttribute('policy');
    }

    // rotation_enabled - computed: true, optional: false, required: false
    public get rotationEnabled() {
      return this.getBooleanAttribute('rotation_enabled') as any;
    }

    // rotation_lambda_arn - computed: true, optional: false, required: false
    public get rotationLambdaArn() {
      return this.getStringAttribute('rotation_lambda_arn');
    }

    // rotation_rules - computed: true, optional: false, required: false
    public rotationRules(index: string) {
      return new DataAwsSecretsmanagerSecretRotationRules(this, 'rotation_rules', index);
    }

    // tags - computed: true, optional: false, required: false
    public tags(key: string): string {
      return new cdktf.StringMap(this, 'tags').lookup(key);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsSecretsmanagerSecretRotationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html#secret_id DataAwsSecretsmanagerSecretRotation#secret_id}
    */
    readonly secretId: string;
  }
  export class DataAwsSecretsmanagerSecretRotationRotationRules extends cdktf.ComplexComputedList {

    // automatically_after_days - computed: true, optional: false, required: false
    public get automaticallyAfterDays() {
      return this.getNumberAttribute('automatically_after_days');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation}
  */
  export class DataAwsSecretsmanagerSecretRotation extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_secretsmanager_secret_rotation";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_rotation.html aws_secretsmanager_secret_rotation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretRotationConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretRotationConfig) {
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
      this._secretId = config.secretId;
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
      return this.getBooleanAttribute('rotation_enabled') as any;
    }

    // rotation_lambda_arn - computed: true, optional: false, required: false
    public get rotationLambdaArn() {
      return this.getStringAttribute('rotation_lambda_arn');
    }

    // rotation_rules - computed: true, optional: false, required: false
    public rotationRules(index: string) {
      return new DataAwsSecretsmanagerSecretRotationRotationRules(this, 'rotation_rules', index);
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
      return this._secretId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        secret_id: cdktf.stringToTerraform(this._secretId),
      };
    }
  }
  export interface DataAwsSecretsmanagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html#secret_id DataAwsSecretsmanagerSecretVersion#secret_id}
    */
    readonly secretId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html#version_id DataAwsSecretsmanagerSecretVersion#version_id}
    */
    readonly versionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html#version_stage DataAwsSecretsmanagerSecretVersion#version_stage}
    */
    readonly versionStage?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html aws_secretsmanager_secret_version}
  */
  export class DataAwsSecretsmanagerSecretVersion extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_secretsmanager_secret_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_secret_version.html aws_secretsmanager_secret_version} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecretsmanagerSecretVersionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerSecretVersionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_secretsmanager_secret_version',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._secretId = config.secretId;
      this._versionId = config.versionId;
      this._versionStage = config.versionStage;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // secret_binary - computed: true, optional: false, required: false
    public get secretBinary() {
      return this.getStringAttribute('secret_binary');
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
      return this._secretId
    }

    // secret_string - computed: true, optional: false, required: false
    public get secretString() {
      return this.getStringAttribute('secret_string');
    }

    // version_id - computed: true, optional: true, required: false
    private _versionId?: string | undefined; 
    public get versionId() {
      return this.getStringAttribute('version_id');
    }
    public set versionId(value: string | undefined) {
      this._versionId = value;
    }
    public resetVersionId() {
      this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionIdInput() {
      return this._versionId
    }

    // version_stage - computed: false, optional: true, required: false
    private _versionStage?: string | undefined; 
    public get versionStage() {
      return this.getStringAttribute('version_stage');
    }
    public set versionStage(value: string | undefined) {
      this._versionStage = value;
    }
    public resetVersionStage() {
      this._versionStage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get versionStageInput() {
      return this._versionStage
    }

    // version_stages - computed: true, optional: false, required: false
    public get versionStages() {
      return this.getListAttribute('version_stages');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        secret_id: cdktf.stringToTerraform(this._secretId),
        version_id: cdktf.stringToTerraform(this._versionId),
        version_stage: cdktf.stringToTerraform(this._versionStage),
      };
    }
  }
}
