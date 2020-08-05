// https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html
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
      "auto_scaling_group_provider": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "auto_scaling_group_arn": {
              "type": "string",
              "required": true
            },
            "managed_termination_protection": {
              "type": "string",
              "optional": true,
              "computed": true
            }
          },
          "block_types": {
            "managed_scaling": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "maximum_scaling_step_size": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "minimum_scaling_step_size": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "status": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "target_capacity": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "min_items": 1,
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

export interface EcsCapacityProviderConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
  /** auto_scaling_group_provider block */
  readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider[];
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
  readonly maximumScalingStepSize?: number;
  readonly minimumScalingStepSize?: number;
  readonly status?: string;
  readonly targetCapacity?: number;
}
export interface EcsCapacityProviderAutoScalingGroupProvider {
  readonly autoScalingGroupArn: string;
  readonly managedTerminationProtection?: string;
  /** managed_scaling block */
  readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling[];
}

// Resource

export class EcsCapacityProvider extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_capacity_provider',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._tags = config.tags;
    this._autoScalingGroupProvider = config.autoScalingGroupProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
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

  // auto_scaling_group_provider - computed: false, optional: false, required: true
  private _autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider[];
  public get autoScalingGroupProvider() {
    return this._autoScalingGroupProvider;
  }
  public set autoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider[]) {
    this._autoScalingGroupProvider = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
      auto_scaling_group_provider: this._autoScalingGroupProvider,
    };
  }
}
