// https://www.terraform.io/docs/providers/aws/r/kms_key.html
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
      "customer_master_key_spec": {
        "type": "string",
        "optional": true
      },
      "deletion_window_in_days": {
        "type": "number",
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "enable_key_rotation": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "is_enabled": {
        "type": "bool",
        "optional": true
      },
      "key_id": {
        "type": "string",
        "computed": true
      },
      "key_usage": {
        "type": "string",
        "optional": true
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
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface KmsKeyConfig extends TerraformMetaArguments {
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

export class KmsKey extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_master_key_spec - computed: false, optional: true, required: false
  private _customerMasterKeySpec?: string;
  public get customerMasterKeySpec() {
    return this._customerMasterKeySpec;
  }
  public set customerMasterKeySpec(value: string | undefined) {
    this._customerMasterKeySpec = value;
  }

  // deletion_window_in_days - computed: false, optional: true, required: false
  private _deletionWindowInDays?: number;
  public get deletionWindowInDays() {
    return this._deletionWindowInDays;
  }
  public set deletionWindowInDays(value: number | undefined) {
    this._deletionWindowInDays = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enable_key_rotation - computed: false, optional: true, required: false
  private _enableKeyRotation?: boolean;
  public get enableKeyRotation() {
    return this._enableKeyRotation;
  }
  public set enableKeyRotation(value: boolean | undefined) {
    this._enableKeyRotation = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean;
  public get isEnabled() {
    return this._isEnabled;
  }
  public set isEnabled(value: boolean | undefined) {
    this._isEnabled = value;
  }

  // key_id - computed: true, optional: false, required: true
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: string;
  public get keyUsage() {
    return this._keyUsage;
  }
  public set keyUsage(value: string | undefined) {
    this._keyUsage = value;
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

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_master_key_spec: this._customerMasterKeySpec,
      deletion_window_in_days: this._deletionWindowInDays,
      description: this._description,
      enable_key_rotation: this._enableKeyRotation,
      is_enabled: this._isEnabled,
      key_usage: this._keyUsage,
      policy: this._policy,
      tags: this._tags,
    };
  }
}
