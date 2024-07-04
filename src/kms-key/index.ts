/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#bypass_policy_lockout_safety_check KmsKey#bypass_policy_lockout_safety_check}
  */
  readonly bypassPolicyLockoutSafetyCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#custom_key_store_id KmsKey#custom_key_store_id}
  */
  readonly customKeyStoreId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#customer_master_key_spec KmsKey#customer_master_key_spec}
  */
  readonly customerMasterKeySpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#deletion_window_in_days KmsKey#deletion_window_in_days}
  */
  readonly deletionWindowInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#description KmsKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#enable_key_rotation KmsKey#enable_key_rotation}
  */
  readonly enableKeyRotation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#id KmsKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#is_enabled KmsKey#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#key_usage KmsKey#key_usage}
  */
  readonly keyUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#multi_region KmsKey#multi_region}
  */
  readonly multiRegion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#policy KmsKey#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#rotation_period_in_days KmsKey#rotation_period_in_days}
  */
  readonly rotationPeriodInDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#tags KmsKey#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#tags_all KmsKey#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#xks_key_id KmsKey#xks_key_id}
  */
  readonly xksKeyId?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#timeouts KmsKey#timeouts}
  */
  readonly timeouts?: KmsKeyTimeouts;
}
export interface KmsKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#create KmsKey#create}
  */
  readonly create?: string;
}

export function kmsKeyTimeoutsToTerraform(struct?: KmsKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function kmsKeyTimeoutsToHclTerraform(struct?: KmsKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsKeyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key aws_kms_key}
*/
export class KmsKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kms_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsKey to import
  * @param importFromId The id of the existing KmsKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_kms_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/kms_key aws_kms_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KmsKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.57.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bypassPolicyLockoutSafetyCheck = config.bypassPolicyLockoutSafetyCheck;
    this._customKeyStoreId = config.customKeyStoreId;
    this._customerMasterKeySpec = config.customerMasterKeySpec;
    this._deletionWindowInDays = config.deletionWindowInDays;
    this._description = config.description;
    this._enableKeyRotation = config.enableKeyRotation;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._keyUsage = config.keyUsage;
    this._multiRegion = config.multiRegion;
    this._policy = config.policy;
    this._rotationPeriodInDays = config.rotationPeriodInDays;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._xksKeyId = config.xksKeyId;
    this._timeouts.internalValue = config.timeouts;
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
    return this.getBooleanAttribute('bypass_policy_lockout_safety_check');
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

  // custom_key_store_id - computed: false, optional: true, required: false
  private _customKeyStoreId?: string; 
  public get customKeyStoreId() {
    return this.getStringAttribute('custom_key_store_id');
  }
  public set customKeyStoreId(value: string) {
    this._customKeyStoreId = value;
  }
  public resetCustomKeyStoreId() {
    this._customKeyStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customKeyStoreIdInput() {
    return this._customKeyStoreId;
  }

  // customer_master_key_spec - computed: false, optional: true, required: false
  private _customerMasterKeySpec?: string; 
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }
  public set customerMasterKeySpec(value: string) {
    this._customerMasterKeySpec = value;
  }
  public resetCustomerMasterKeySpec() {
    this._customerMasterKeySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerMasterKeySpecInput() {
    return this._customerMasterKeySpec;
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

  // description - computed: true, optional: true, required: false
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

  // enable_key_rotation - computed: false, optional: true, required: false
  private _enableKeyRotation?: boolean | cdktf.IResolvable; 
  public get enableKeyRotation() {
    return this.getBooleanAttribute('enable_key_rotation');
  }
  public set enableKeyRotation(value: boolean | cdktf.IResolvable) {
    this._enableKeyRotation = value;
  }
  public resetEnableKeyRotation() {
    this._enableKeyRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyRotationInput() {
    return this._enableKeyRotation;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string; 
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }
  public set keyUsage(value: string) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage;
  }

  // multi_region - computed: true, optional: true, required: false
  private _multiRegion?: boolean | cdktf.IResolvable; 
  public get multiRegion() {
    return this.getBooleanAttribute('multi_region');
  }
  public set multiRegion(value: boolean | cdktf.IResolvable) {
    this._multiRegion = value;
  }
  public resetMultiRegion() {
    this._multiRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionInput() {
    return this._multiRegion;
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

  // rotation_period_in_days - computed: true, optional: true, required: false
  private _rotationPeriodInDays?: number; 
  public get rotationPeriodInDays() {
    return this.getNumberAttribute('rotation_period_in_days');
  }
  public set rotationPeriodInDays(value: number) {
    this._rotationPeriodInDays = value;
  }
  public resetRotationPeriodInDays() {
    this._rotationPeriodInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInDaysInput() {
    return this._rotationPeriodInDays;
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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // xks_key_id - computed: false, optional: true, required: false
  private _xksKeyId?: string; 
  public get xksKeyId() {
    return this.getStringAttribute('xks_key_id');
  }
  public set xksKeyId(value: string) {
    this._xksKeyId = value;
  }
  public resetXksKeyId() {
    this._xksKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xksKeyIdInput() {
    return this._xksKeyId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bypass_policy_lockout_safety_check: cdktf.booleanToTerraform(this._bypassPolicyLockoutSafetyCheck),
      custom_key_store_id: cdktf.stringToTerraform(this._customKeyStoreId),
      customer_master_key_spec: cdktf.stringToTerraform(this._customerMasterKeySpec),
      deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
      description: cdktf.stringToTerraform(this._description),
      enable_key_rotation: cdktf.booleanToTerraform(this._enableKeyRotation),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      multi_region: cdktf.booleanToTerraform(this._multiRegion),
      policy: cdktf.stringToTerraform(this._policy),
      rotation_period_in_days: cdktf.numberToTerraform(this._rotationPeriodInDays),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      xks_key_id: cdktf.stringToTerraform(this._xksKeyId),
      timeouts: kmsKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bypass_policy_lockout_safety_check: {
        value: cdktf.booleanToHclTerraform(this._bypassPolicyLockoutSafetyCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_key_store_id: {
        value: cdktf.stringToHclTerraform(this._customKeyStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_master_key_spec: {
        value: cdktf.stringToHclTerraform(this._customerMasterKeySpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_window_in_days: {
        value: cdktf.numberToHclTerraform(this._deletionWindowInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_key_rotation: {
        value: cdktf.booleanToHclTerraform(this._enableKeyRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_usage: {
        value: cdktf.stringToHclTerraform(this._keyUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_region: {
        value: cdktf.booleanToHclTerraform(this._multiRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period_in_days: {
        value: cdktf.numberToHclTerraform(this._rotationPeriodInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      xks_key_id: {
        value: cdktf.stringToHclTerraform(this._xksKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: kmsKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
