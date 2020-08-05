// https://www.terraform.io/docs/providers/aws/r/ecs_cluster.html
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
      "capacity_providers": {
        "type": [
          "set",
          "string"
        ],
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
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "default_capacity_provider_strategy": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "base": {
              "type": "number",
              "optional": true
            },
            "capacity_provider": {
              "type": "string",
              "required": true
            },
            "weight": {
              "type": "number",
              "optional": true
            }
          }
        }
      },
      "setting": {
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
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface EcsClusterConfig extends TerraformMetaArguments {
  readonly capacityProviders?: string[];
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** default_capacity_provider_strategy block */
  readonly defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  /** setting block */
  readonly setting?: EcsClusterSetting[];
}
export interface EcsClusterDefaultCapacityProviderStrategy {
  readonly base?: number;
  readonly capacityProvider: string;
  readonly weight?: number;
}
export interface EcsClusterSetting {
  readonly name: string;
  readonly value: string;
}

// Resource

export class EcsCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacityProviders = config.capacityProviders;
    this._name = config.name;
    this._tags = config.tags;
    this._defaultCapacityProviderStrategy = config.defaultCapacityProviderStrategy;
    this._setting = config.setting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity_providers - computed: false, optional: true, required: false
  private _capacityProviders?: string[];
  public get capacityProviders() {
    return this._capacityProviders;
  }
  public set capacityProviders(value: string[] | undefined) {
    this._capacityProviders = value;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // default_capacity_provider_strategy - computed: false, optional: true, required: false
  private _defaultCapacityProviderStrategy?: EcsClusterDefaultCapacityProviderStrategy[];
  public get defaultCapacityProviderStrategy() {
    return this._defaultCapacityProviderStrategy;
  }
  public set defaultCapacityProviderStrategy(value: EcsClusterDefaultCapacityProviderStrategy[] | undefined) {
    this._defaultCapacityProviderStrategy = value;
  }

  // setting - computed: false, optional: true, required: false
  private _setting?: EcsClusterSetting[];
  public get setting() {
    return this._setting;
  }
  public set setting(value: EcsClusterSetting[] | undefined) {
    this._setting = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity_providers: this._capacityProviders,
      name: this._name,
      tags: this._tags,
      default_capacity_provider_strategy: this._defaultCapacityProviderStrategy,
      setting: this._setting,
    };
  }
}
