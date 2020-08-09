// https://www.terraform.io/docs/providers/aws/r/kms_external_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "deletion_window_in_days": {
        "type": "number",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "enabled": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "expiration_model": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_material_base64": {
        "type": "string",
        "optional": true,
        "sensitive": true
      },
      "key_state": {
        "type": "string",
        "computed": true
      },
      "key_usage": {
        "type": "string",
        "computed": true
      },
      "policy": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "valid_to": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsExternalKeyConfig extends TerraformMetaArguments {
  readonly deletionWindowInDays?: number;
  readonly description?: string;
  readonly enabled?: boolean;
  readonly keyMaterialBase64?: string;
  readonly policy?: string;
  readonly tags?: { [key: string]: string };
  readonly validTo?: string;
}

// Resource

export class KmsExternalKey extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // deletion_window_in_days - computed: false, optional: true, required: false
  private _deletionWindowInDays?: number;
  public get deletionWindowInDays() {
    return this._deletionWindowInDays;
  }
  public set deletionWindowInDays(value: number | undefined) {
    this._deletionWindowInDays = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled ?? this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // expiration_model - computed: true, optional: false, required: true
  public get expirationModel() {
    return this.getStringAttribute('expiration_model');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_material_base64 - computed: false, optional: true, required: false
  private _keyMaterialBase64?: string;
  public get keyMaterialBase64() {
    return this._keyMaterialBase64;
  }
  public set keyMaterialBase64(value: string | undefined) {
    this._keyMaterialBase64 = value;
  }

  // key_state - computed: true, optional: false, required: true
  public get keyState() {
    return this.getStringAttribute('key_state');
  }

  // key_usage - computed: true, optional: false, required: true
  public get keyUsage() {
    return this.getStringAttribute('key_usage');
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy ?? this.getStringAttribute('policy');
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // valid_to - computed: false, optional: true, required: false
  private _validTo?: string;
  public get validTo() {
    return this._validTo;
  }
  public set validTo(value: string | undefined) {
    this._validTo = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_window_in_days: this._deletionWindowInDays,
      description: this._description,
      enabled: this._enabled,
      key_material_base64: this._keyMaterialBase64,
      policy: this._policy,
      tags: this._tags,
      valid_to: this._validTo,
    };
  }
}
