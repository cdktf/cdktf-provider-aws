// https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html
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
      "build_id": {
        "type": "string",
        "required": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "ec2_instance_type": {
        "type": "string",
        "required": true
      },
      "fleet_type": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "instance_role_arn": {
        "type": "string",
        "optional": true
      },
      "log_paths": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "metric_groups": {
        "type": [
          "list",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "new_game_session_protection_policy": {
        "type": "string",
        "optional": true
      },
      "operating_system": {
        "type": "string",
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
      "ec2_inbound_permission": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "from_port": {
              "type": "number",
              "required": true
            },
            "ip_range": {
              "type": "string",
              "required": true
            },
            "protocol": {
              "type": "string",
              "required": true
            },
            "to_port": {
              "type": "number",
              "required": true
            }
          }
        },
        "max_items": 50
      },
      "resource_creation_limit_policy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "new_game_sessions_per_creator": {
              "type": "number",
              "optional": true
            },
            "policy_period_in_minutes": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "runtime_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "game_session_activation_timeout_seconds": {
              "type": "number",
              "optional": true
            },
            "max_concurrent_game_session_activations": {
              "type": "number",
              "optional": true
            }
          },
          "block_types": {
            "server_process": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "concurrent_executions": {
                    "type": "number",
                    "required": true
                  },
                  "launch_path": {
                    "type": "string",
                    "required": true
                  },
                  "parameters": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 50
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
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

export interface GameliftFleetConfig extends TerraformMetaArguments {
  readonly buildId: string;
  readonly description?: string;
  readonly ec2InstanceType: string;
  readonly fleetType?: string;
  readonly instanceRoleArn?: string;
  readonly metricGroups?: string[];
  readonly name: string;
  readonly newGameSessionProtectionPolicy?: string;
  readonly tags?: { [key: string]: string };
  /** ec2_inbound_permission block */
  readonly ec2InboundPermission?: GameliftFleetEc2InboundPermission[];
  /** resource_creation_limit_policy block */
  readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy[];
  /** runtime_configuration block */
  readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration[];
  /** timeouts block */
  readonly timeouts?: GameliftFleetTimeouts;
}
export interface GameliftFleetEc2InboundPermission {
  readonly fromPort: number;
  readonly ipRange: string;
  readonly protocol: string;
  readonly toPort: number;
}
export interface GameliftFleetResourceCreationLimitPolicy {
  readonly newGameSessionsPerCreator?: number;
  readonly policyPeriodInMinutes?: number;
}
export interface GameliftFleetRuntimeConfigurationServerProcess {
  readonly concurrentExecutions: number;
  readonly launchPath: string;
  readonly parameters?: string;
}
export interface GameliftFleetRuntimeConfiguration {
  readonly gameSessionActivationTimeoutSeconds?: number;
  readonly maxConcurrentGameSessionActivations?: number;
  /** server_process block */
  readonly serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[];
}
export interface GameliftFleetTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class GameliftFleet extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameliftFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_gamelift_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._buildId = config.buildId;
    this._description = config.description;
    this._ec2InstanceType = config.ec2InstanceType;
    this._fleetType = config.fleetType;
    this._instanceRoleArn = config.instanceRoleArn;
    this._metricGroups = config.metricGroups;
    this._name = config.name;
    this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
    this._tags = config.tags;
    this._ec2InboundPermission = config.ec2InboundPermission;
    this._resourceCreationLimitPolicy = config.resourceCreationLimitPolicy;
    this._runtimeConfiguration = config.runtimeConfiguration;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // build_id - computed: false, optional: false, required: true
  private _buildId: string;
  public get buildId() {
    return this._buildId;
  }
  public set buildId(value: string) {
    this._buildId = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // ec2_instance_type - computed: false, optional: false, required: true
  private _ec2InstanceType: string;
  public get ec2InstanceType() {
    return this._ec2InstanceType;
  }
  public set ec2InstanceType(value: string) {
    this._ec2InstanceType = value;
  }

  // fleet_type - computed: false, optional: true, required: false
  private _fleetType?: string;
  public get fleetType() {
    return this._fleetType;
  }
  public set fleetType(value: string | undefined) {
    this._fleetType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance_role_arn - computed: false, optional: true, required: false
  private _instanceRoleArn?: string;
  public get instanceRoleArn() {
    return this._instanceRoleArn;
  }
  public set instanceRoleArn(value: string | undefined) {
    this._instanceRoleArn = value;
  }

  // log_paths - computed: true, optional: false, required: true
  public get logPaths() {
    return this.getListAttribute('log_paths');
  }

  // metric_groups - computed: true, optional: true, required: false
  private _metricGroups?: string[];
  public get metricGroups() {
    return this._metricGroups ?? this.getListAttribute('metric_groups');
  }
  public set metricGroups(value: string[] | undefined) {
    this._metricGroups = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // new_game_session_protection_policy - computed: false, optional: true, required: false
  private _newGameSessionProtectionPolicy?: string;
  public get newGameSessionProtectionPolicy() {
    return this._newGameSessionProtectionPolicy;
  }
  public set newGameSessionProtectionPolicy(value: string | undefined) {
    this._newGameSessionProtectionPolicy = value;
  }

  // operating_system - computed: true, optional: false, required: true
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // ec2_inbound_permission - computed: false, optional: true, required: false
  private _ec2InboundPermission?: GameliftFleetEc2InboundPermission[];
  public get ec2InboundPermission() {
    return this._ec2InboundPermission;
  }
  public set ec2InboundPermission(value: GameliftFleetEc2InboundPermission[] | undefined) {
    this._ec2InboundPermission = value;
  }

  // resource_creation_limit_policy - computed: false, optional: true, required: false
  private _resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy[];
  public get resourceCreationLimitPolicy() {
    return this._resourceCreationLimitPolicy;
  }
  public set resourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy[] | undefined) {
    this._resourceCreationLimitPolicy = value;
  }

  // runtime_configuration - computed: false, optional: true, required: false
  private _runtimeConfiguration?: GameliftFleetRuntimeConfiguration[];
  public get runtimeConfiguration() {
    return this._runtimeConfiguration;
  }
  public set runtimeConfiguration(value: GameliftFleetRuntimeConfiguration[] | undefined) {
    this._runtimeConfiguration = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameliftFleetTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GameliftFleetTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      build_id: this._buildId,
      description: this._description,
      ec2_instance_type: this._ec2InstanceType,
      fleet_type: this._fleetType,
      instance_role_arn: this._instanceRoleArn,
      metric_groups: this._metricGroups,
      name: this._name,
      new_game_session_protection_policy: this._newGameSessionProtectionPolicy,
      tags: this._tags,
      ec2_inbound_permission: this._ec2InboundPermission,
      resource_creation_limit_policy: this._resourceCreationLimitPolicy,
      runtime_configuration: this._runtimeConfiguration,
      timeouts: this._timeouts,
    };
  }
}
