// https://www.terraform.io/docs/providers/aws/r/ssm_parameter.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allowed_pattern": {
        "type": "string",
        "optional": true
      },
      "arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "overwrite": {
        "type": "bool",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "tier": {
        "type": "string",
        "optional": true
      },
      "type": {
        "type": "string",
        "required": true
      },
      "value": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "version": {
        "type": "number",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmParameterConfig extends TerraformMetaArguments {
  readonly allowedPattern?: string;
  readonly description?: string;
  readonly keyId?: string;
  readonly name: string;
  readonly overwrite?: boolean;
  readonly tags?: { [key: string]: string };
  readonly tier?: string;
  readonly type: string;
  readonly value: string;
}

// Resource

export class SsmParameter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmParameterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_parameter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowedPattern = config.allowedPattern;
    this._description = config.description;
    this._keyId = config.keyId;
    this._name = config.name;
    this._overwrite = config.overwrite;
    this._tags = config.tags;
    this._tier = config.tier;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_pattern - computed: false, optional: true, required: false
  private _allowedPattern?: string;
  public get allowedPattern() {
    return this._allowedPattern;
  }
  public set allowedPattern(value: string | undefined) {
    this._allowedPattern = value;
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string;
  public get arn() {
    return this._arn ?? this.getStringAttribute('arn');
  }
  public set arn(value: string | undefined) {
    this._arn = value;
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

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string;
  public get keyId() {
    return this._keyId ?? this.getStringAttribute('key_id');
  }
  public set keyId(value: string | undefined) {
    this._keyId = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // overwrite - computed: false, optional: true, required: false
  private _overwrite?: boolean;
  public get overwrite() {
    return this._overwrite;
  }
  public set overwrite(value: boolean | undefined) {
    this._overwrite = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string;
  public get tier() {
    return this._tier;
  }
  public set tier(value: string | undefined) {
    this._tier = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // value - computed: false, optional: false, required: true
  private _value: string;
  public get value() {
    return this._value;
  }
  public set value(value: string) {
    this._value = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_pattern: this._allowedPattern,
      description: this._description,
      key_id: this._keyId,
      name: this._name,
      overwrite: this._overwrite,
      tags: this._tags,
      tier: this._tier,
      type: this._type,
      value: this._value,
    };
  }
}
