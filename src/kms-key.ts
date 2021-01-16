// https://www.terraform.io/docs/providers/aws/r/kms_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyConfig extends cdktf.TerraformMetaArguments {
  readonly customerMasterKeySpec?: string;
  readonly deletionWindowInDays?: number;
  readonly description?: string;
  readonly enableKeyRotation?: boolean;
  readonly isEnabled?: boolean;
  readonly keyUsage?: string;
  readonly policy?: string;
  readonly tags?: { [key: string]: string };
}

// Resource

export class KmsKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerMasterKeySpec = config.customerMasterKeySpec;
    this._deletionWindowInDays = config.deletionWindowInDays;
    this._description = config.description;
    this._enableKeyRotation = config.enableKeyRotation;
    this._isEnabled = config.isEnabled;
    this._keyUsage = config.keyUsage;
    this._policy = config.policy;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_master_key_spec - computed: false, optional: true, required: false
  private _customerMasterKeySpec?: string;
  public get customerMasterKeySpec() {
    return this.getStringAttribute('customer_master_key_spec');
  }
  public set customerMasterKeySpec(value: string ) {
    this._customerMasterKeySpec = value;
  }
  public resetCustomerMasterKeySpec() {
    this._customerMasterKeySpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerMasterKeySpecInput() {
    return this._customerMasterKeySpec
  }

  // deletion_window_in_days - computed: false, optional: true, required: false
  private _deletionWindowInDays?: number;
  public get deletionWindowInDays() {
    return this.getNumberAttribute('deletion_window_in_days');
  }
  public set deletionWindowInDays(value: number ) {
    this._deletionWindowInDays = value;
  }
  public resetDeletionWindowInDays() {
    this._deletionWindowInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionWindowInDaysInput() {
    return this._deletionWindowInDays
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
    return this._description
  }

  // enable_key_rotation - computed: false, optional: true, required: false
  private _enableKeyRotation?: boolean;
  public get enableKeyRotation() {
    return this.getBooleanAttribute('enable_key_rotation');
  }
  public set enableKeyRotation(value: boolean ) {
    this._enableKeyRotation = value;
  }
  public resetEnableKeyRotation() {
    this._enableKeyRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKeyRotationInput() {
    return this._enableKeyRotation
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean;
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean ) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled
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
  public set keyUsage(value: string ) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage
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
    return this._policy
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_master_key_spec: cdktf.stringToTerraform(this._customerMasterKeySpec),
      deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
      description: cdktf.stringToTerraform(this._description),
      enable_key_rotation: cdktf.booleanToTerraform(this._enableKeyRotation),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key_usage: cdktf.stringToTerraform(this._keyUsage),
      policy: cdktf.stringToTerraform(this._policy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
