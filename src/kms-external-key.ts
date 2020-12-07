// https://www.terraform.io/docs/providers/aws/r/kms_external_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsExternalKeyConfig extends cdktf.TerraformMetaArguments {
  readonly deletionWindowInDays?: number;
  readonly description?: string;
  readonly enabled?: boolean;
  readonly keyMaterialBase64?: string;
  readonly policy?: string;
  readonly tags?: { [key: string]: string };
  readonly validTo?: string;
}

// Resource

export class KmsExternalKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsExternalKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_external_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deletionWindowInDays = config.deletionWindowInDays;
    this._description = config.description;
    this._enabled = config.enabled;
    this._keyMaterialBase64 = config.keyMaterialBase64;
    this._policy = config.policy;
    this._tags = config.tags;
    this._validTo = config.validTo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // expiration_model - computed: true, optional: false, required: false
  public get expirationModel() {
    return this.getStringAttribute('expiration_model');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_material_base64 - computed: false, optional: true, required: false
  private _keyMaterialBase64?: string;
  public get keyMaterialBase64() {
    return this.getStringAttribute('key_material_base64');
  }
  public set keyMaterialBase64(value: string ) {
    this._keyMaterialBase64 = value;
  }
  public resetKeyMaterialBase64() {
    this._keyMaterialBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyMaterialBase64Input() {
    return this._keyMaterialBase64
  }

  // key_state - computed: true, optional: false, required: false
  public get keyState() {
    return this.getStringAttribute('key_state');
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

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: string;
  public get validTo() {
    return this.getStringAttribute('valid_to');
  }
  public set validTo(value: string ) {
    this._validTo = value;
  }
  public resetValidTo() {
    this._validTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validToInput() {
    return this._validTo
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_window_in_days: cdktf.numberToTerraform(this._deletionWindowInDays),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      key_material_base64: cdktf.stringToTerraform(this._keyMaterialBase64),
      policy: cdktf.stringToTerraform(this._policy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      valid_to: cdktf.stringToTerraform(this._validTo),
    };
  }
}
