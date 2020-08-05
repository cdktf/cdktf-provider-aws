// https://www.terraform.io/docs/providers/aws/r/sagemaker_model.html
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
      "enable_network_isolation": {
        "type": "bool",
        "optional": true
      },
      "execution_role_arn": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
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
    },
    "block_types": {
      "container": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "container_hostname": {
              "type": "string",
              "optional": true
            },
            "environment": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "image": {
              "type": "string",
              "required": true
            },
            "model_data_url": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "primary_container": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "container_hostname": {
              "type": "string",
              "optional": true
            },
            "environment": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "image": {
              "type": "string",
              "required": true
            },
            "model_data_url": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "vpc_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "security_group_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "subnets": {
              "type": [
                "set",
                "string"
              ],
              "required": true
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

export interface SagemakerModelConfig extends TerraformMetaArguments {
  readonly enableNetworkIsolation?: boolean;
  readonly executionRoleArn: string;
  readonly name?: string;
  readonly tags?: { [key: string]: string };
  /** container block */
  readonly container?: SagemakerModelContainer[];
  /** primary_container block */
  readonly primaryContainer?: SagemakerModelPrimaryContainer[];
  /** vpc_config block */
  readonly vpcConfig?: SagemakerModelVpcConfig[];
}
export interface SagemakerModelContainer {
  readonly containerHostname?: string;
  readonly environment?: { [key: string]: string };
  readonly image: string;
  readonly modelDataUrl?: string;
}
export interface SagemakerModelPrimaryContainer {
  readonly containerHostname?: string;
  readonly environment?: { [key: string]: string };
  readonly image: string;
  readonly modelDataUrl?: string;
}
export interface SagemakerModelVpcConfig {
  readonly securityGroupIds: string[];
  readonly subnets: string[];
}

// Resource

export class SagemakerModel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SagemakerModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_model',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enableNetworkIsolation = config.enableNetworkIsolation;
    this._executionRoleArn = config.executionRoleArn;
    this._name = config.name;
    this._tags = config.tags;
    this._container = config.container;
    this._primaryContainer = config.primaryContainer;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // enable_network_isolation - computed: false, optional: true, required: false
  private _enableNetworkIsolation?: boolean;
  public get enableNetworkIsolation() {
    return this._enableNetworkIsolation;
  }
  public set enableNetworkIsolation(value: boolean | undefined) {
    this._enableNetworkIsolation = value;
  }

  // execution_role_arn - computed: false, optional: false, required: true
  private _executionRoleArn: string;
  public get executionRoleArn() {
    return this._executionRoleArn;
  }
  public set executionRoleArn(value: string) {
    this._executionRoleArn = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // container - computed: false, optional: true, required: false
  private _container?: SagemakerModelContainer[];
  public get container() {
    return this._container;
  }
  public set container(value: SagemakerModelContainer[] | undefined) {
    this._container = value;
  }

  // primary_container - computed: false, optional: true, required: false
  private _primaryContainer?: SagemakerModelPrimaryContainer[];
  public get primaryContainer() {
    return this._primaryContainer;
  }
  public set primaryContainer(value: SagemakerModelPrimaryContainer[] | undefined) {
    this._primaryContainer = value;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: SagemakerModelVpcConfig[];
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public set vpcConfig(value: SagemakerModelVpcConfig[] | undefined) {
    this._vpcConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_network_isolation: this._enableNetworkIsolation,
      execution_role_arn: this._executionRoleArn,
      name: this._name,
      tags: this._tags,
      container: this._container,
      primary_container: this._primaryContainer,
      vpc_config: this._vpcConfig,
    };
  }
}
