// https://www.terraform.io/docs/providers/aws/r/athena_workgroup.html
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
      "description": {
        "type": "string",
        "optional": true
      },
      "force_destroy": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "state": {
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
      "configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "bytes_scanned_cutoff_per_query": {
              "type": "number",
              "optional": true
            },
            "enforce_workgroup_configuration": {
              "type": "bool",
              "optional": true
            },
            "publish_cloudwatch_metrics_enabled": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "result_configuration": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "output_location": {
                    "type": "string",
                    "optional": true
                  }
                },
                "block_types": {
                  "encryption_configuration": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "encryption_option": {
                          "type": "string",
                          "optional": true
                        },
                        "kms_key_arn": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "max_items": 1
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AthenaWorkgroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly forceDestroy?: boolean;
  readonly name: string;
  readonly state?: string;
  readonly tags?: { [key: string]: string };
  /** configuration block */
  readonly configuration?: AthenaWorkgroupConfiguration[];
}
export interface AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration {
  readonly encryptionOption?: string;
  readonly kmsKeyArn?: string;
}
export interface AthenaWorkgroupConfigurationResultConfiguration {
  readonly outputLocation?: string;
  /** encryption_configuration block */
  readonly encryptionConfiguration?: AthenaWorkgroupConfigurationResultConfigurationEncryptionConfiguration[];
}
export interface AthenaWorkgroupConfiguration {
  readonly bytesScannedCutoffPerQuery?: number;
  readonly enforceWorkgroupConfiguration?: boolean;
  readonly publishCloudwatchMetricsEnabled?: boolean;
  /** result_configuration block */
  readonly resultConfiguration?: AthenaWorkgroupConfigurationResultConfiguration[];
}

// Resource

export class AthenaWorkgroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AthenaWorkgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_athena_workgroup',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._forceDestroy = config.forceDestroy;
    this._name = config.name;
    this._state = config.state;
    this._tags = config.tags;
    this._configuration = config.configuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // force_destroy - computed: false, optional: true, required: false
  private _forceDestroy?: boolean;
  public get forceDestroy() {
    return this._forceDestroy;
  }
  public set forceDestroy(value: boolean | undefined) {
    this._forceDestroy = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string;
  public get state() {
    return this._state;
  }
  public set state(value: string | undefined) {
    this._state = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: AthenaWorkgroupConfiguration[];
  public get configuration() {
    return this._configuration;
  }
  public set configuration(value: AthenaWorkgroupConfiguration[] | undefined) {
    this._configuration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      force_destroy: this._forceDestroy,
      name: this._name,
      state: this._state,
      tags: this._tags,
      configuration: this._configuration,
    };
  }
}
