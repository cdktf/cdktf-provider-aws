// https://www.terraform.io/docs/providers/aws/r/db_option_group.html
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
      "engine_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "major_engine_version": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "option_group_description": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "option": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "db_security_group_memberships": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "option_name": {
              "type": "string",
              "required": true
            },
            "port": {
              "type": "number",
              "optional": true
            },
            "version": {
              "type": "string",
              "optional": true
            },
            "vpc_security_group_memberships": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            }
          },
          "block_types": {
            "option_settings": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "required": true
                  },
                  "value": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            }
          }
        }
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "delete": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DbOptionGroupConfig extends TerraformMetaArguments {
  readonly engineName: string;
  readonly majorEngineVersion: string;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly optionGroupDescription?: string;
  readonly tags?: { [key: string]: string };
  /** option block */
  readonly option?: DbOptionGroupOption[];
  /** timeouts block */
  readonly timeouts?: DbOptionGroupTimeouts;
}
export interface DbOptionGroupOptionOptionSettings {
  readonly name: string;
  readonly value: string;
}
export interface DbOptionGroupOption {
  readonly dbSecurityGroupMemberships?: string[];
  readonly optionName: string;
  readonly port?: number;
  readonly version?: string;
  readonly vpcSecurityGroupMemberships?: string[];
  /** option_settings block */
  readonly optionSettings?: DbOptionGroupOptionOptionSettings[];
}
export interface DbOptionGroupTimeouts {
  readonly delete?: string;
}

// Resource

export class DbOptionGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DbOptionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_db_option_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._engineName = config.engineName;
    this._majorEngineVersion = config.majorEngineVersion;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._optionGroupDescription = config.optionGroupDescription;
    this._tags = config.tags;
    this._option = config.option;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // engine_name - computed: false, optional: false, required: true
  private _engineName: string;
  public get engineName() {
    return this._engineName;
  }
  public set engineName(value: string) {
    this._engineName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // major_engine_version - computed: false, optional: false, required: true
  private _majorEngineVersion: string;
  public get majorEngineVersion() {
    return this._majorEngineVersion;
  }
  public set majorEngineVersion(value: string) {
    this._majorEngineVersion = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix ?? this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // option_group_description - computed: false, optional: true, required: false
  private _optionGroupDescription?: string;
  public get optionGroupDescription() {
    return this._optionGroupDescription;
  }
  public set optionGroupDescription(value: string | undefined) {
    this._optionGroupDescription = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // option - computed: false, optional: true, required: false
  private _option?: DbOptionGroupOption[];
  public get option() {
    return this._option;
  }
  public set option(value: DbOptionGroupOption[] | undefined) {
    this._option = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DbOptionGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DbOptionGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_name: this._engineName,
      major_engine_version: this._majorEngineVersion,
      name: this._name,
      name_prefix: this._namePrefix,
      option_group_description: this._optionGroupDescription,
      tags: this._tags,
      option: this._option,
      timeouts: this._timeouts,
    };
  }
}
