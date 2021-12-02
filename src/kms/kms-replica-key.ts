// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Key Management Service
*/
export interface KmsReplicaKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#bypass_policy_lockout_safety_check KmsReplicaKey#bypass_policy_lockout_safety_check}
  */
  readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#deletion_window_in_days KmsReplicaKey#deletion_window_in_days}
  */
  readonly deletionWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#description KmsReplicaKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#enabled KmsReplicaKey#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#policy KmsReplicaKey#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#primary_key_arn KmsReplicaKey#primary_key_arn}
  */
  readonly primaryKeyArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#tags KmsReplicaKey#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html#tags_all KmsReplicaKey#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html aws_kms_replica_key}
*/
export class KmsReplicaKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_kms_replica_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kms_replica_key.html aws_kms_replica_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsReplicaKeyConfig
  */
  public constructor(scope: Construct, id: string, config: KmsReplicaKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_replica_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
    this._deletionWindowInDays = config.deletionWindowInDays;
    this._description = config.description;
    this._enabled = config.enabled;
    this._policy = config.policy;
    this._primaryKeyArn = config.primaryKeyArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bypass_policy_lockout_safety_check - computed: false, optional: true, required: false
  private _bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable; 
  public get bypassPolicyLockoutSafetyCheck() {
    return this.getBooleanAttribute('bypass_policy_lockout_safety_check') as any;
  }
  public set bypassPolicyLockoutSafetyCheck(value: boolean | cdktf.IResolvable) {
    this._bypassPolicyLockoutSafetyCheck = value;
  }
  public resetBypassPolicyLockoutSafetyCheck() {
    this._bypassPolicyLockoutSafetyCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassPolicyLockoutSafetyCheckInput() {
    return this._bypassPolicyLockoutSafetyCheck;
  }

  // deletion_window_in_days - computed: false, optional: true, required: false
  private _deletionWindowInDays?: number; 
  public get deletionWindowInDays() {
    return this.getNumberAttribute('deletion_window_in_days');
  }
  public set deletionWindowInDays(value: number) {
    this._deletionWindowInDays = value;
  }
  public resetDeletionWindowInDays() {
    this._deletionWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionWindowInDaysInput() {
    return this._deletionWindowInDays;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_rotation_enabled - computed: true, optional: false, required: false
  public get keyRotationEnabled() {
    return this.getBooleanAttribute('key_rotation_enabled') as any;
  }

  // key_spec - computed: true, optional: false, required: false
  public get keySpec() {
    return this.getStringAttribute('key_spec');
  }

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // primary_key_arn - computed: false, optional: false, required: true
  private _primaryKeyArn?: string; 
  public get primaryKeyArn() {
    return this.getStringAttribute('primary_key_arn');
  }
  public set primaryKeyArn(value: string) {
    this._primaryKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyArnInput() {
    return this._primaryKeyArn;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
      deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      policy: cdktf.stringToTerraform(this._policy),
      primary_key_arn: cdktf.stringToTerraform(this._primaryKeyArn),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
