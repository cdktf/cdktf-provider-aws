// https://www.terraform.io/docs/providers/aws/r/ecs_service.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "cluster": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "deployment_maximum_percent": {
        "type": "number",
        "optional": true
      },
      "deployment_minimum_healthy_percent": {
        "type": "number",
        "optional": true
      },
      "desired_count": {
        "type": "number",
        "optional": true
      },
      "enable_ecs_managed_tags": {
        "type": "bool",
        "optional": true
      },
      "force_new_deployment": {
        "type": "bool",
        "optional": true
      },
      "health_check_grace_period_seconds": {
        "type": "number",
        "optional": true
      },
      "iam_role": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "launch_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "platform_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "propagate_tags": {
        "type": "string",
        "optional": true
      },
      "scheduling_strategy": {
        "type": "string",
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "task_definition": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "capacity_provider_strategy": {
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
      "deployment_controller": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "type": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "load_balancer": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "container_name": {
              "type": "string",
              "required": true
            },
            "container_port": {
              "type": "number",
              "required": true
            },
            "elb_name": {
              "type": "string",
              "optional": true
            },
            "target_group_arn": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "network_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "assign_public_ip": {
              "type": "bool",
              "optional": true
            },
            "security_groups": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
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
      },
      "ordered_placement_strategy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "field": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 5
      },
      "placement_constraints": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "expression": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 10
      },
      "placement_strategy": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "field": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 5
      },
      "service_registries": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "container_name": {
              "type": "string",
              "optional": true
            },
            "container_port": {
              "type": "number",
              "optional": true
            },
            "port": {
              "type": "number",
              "optional": true
            },
            "registry_arn": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
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

export interface EcsServiceConfig extends TerraformMetaArguments {
  readonly cluster?: string;
  readonly deploymentMaximumPercent?: number;
  readonly deploymentMinimumHealthyPercent?: number;
  readonly desiredCount?: number;
  readonly enableEcsManagedTags?: boolean;
  readonly forceNewDeployment?: boolean;
  readonly healthCheckGracePeriodSeconds?: number;
  readonly iamRole?: string;
  readonly launchType?: string;
  readonly name: string;
  readonly platformVersion?: string;
  readonly propagateTags?: string;
  readonly schedulingStrategy?: string;
  readonly tags?: { [key: string]: string };
  readonly taskDefinition?: string;
  /** capacity_provider_strategy block */
  readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
  /** deployment_controller block */
  readonly deploymentController?: EcsServiceDeploymentController[];
  /** load_balancer block */
  readonly loadBalancer?: EcsServiceLoadBalancer[];
  /** network_configuration block */
  readonly networkConfiguration?: EcsServiceNetworkConfiguration[];
  /** ordered_placement_strategy block */
  readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
  /** placement_constraints block */
  readonly placementConstraints?: EcsServicePlacementConstraints[];
  /** placement_strategy block */
  readonly placementStrategy?: EcsServicePlacementStrategy[];
  /** service_registries block */
  readonly serviceRegistries?: EcsServiceServiceRegistries[];
  /** timeouts block */
  readonly timeouts?: EcsServiceTimeouts;
}
export interface EcsServiceCapacityProviderStrategy {
  readonly base?: number;
  readonly capacityProvider: string;
  readonly weight?: number;
}
export interface EcsServiceDeploymentController {
  readonly type?: string;
}
export interface EcsServiceLoadBalancer {
  readonly containerName: string;
  readonly containerPort: number;
  readonly elbName?: string;
  readonly targetGroupArn?: string;
}
export interface EcsServiceNetworkConfiguration {
  readonly assignPublicIp?: boolean;
  readonly securityGroups?: string[];
  readonly subnets: string[];
}
export interface EcsServiceOrderedPlacementStrategy {
  readonly field?: string;
  readonly type: string;
}
export interface EcsServicePlacementConstraints {
  readonly expression?: string;
  readonly type: string;
}
export interface EcsServicePlacementStrategy {
  readonly field?: string;
  readonly type: string;
}
export interface EcsServiceServiceRegistries {
  readonly containerName?: string;
  readonly containerPort?: number;
  readonly port?: number;
  readonly registryArn: string;
}
export interface EcsServiceTimeouts {
  readonly delete?: string;
}

// Resource

export class EcsService extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: EcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_service',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._deploymentMaximumPercent = config.deploymentMaximumPercent;
    this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
    this._desiredCount = config.desiredCount;
    this._enableEcsManagedTags = config.enableEcsManagedTags;
    this._forceNewDeployment = config.forceNewDeployment;
    this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
    this._iamRole = config.iamRole;
    this._launchType = config.launchType;
    this._name = config.name;
    this._platformVersion = config.platformVersion;
    this._propagateTags = config.propagateTags;
    this._schedulingStrategy = config.schedulingStrategy;
    this._tags = config.tags;
    this._taskDefinition = config.taskDefinition;
    this._capacityProviderStrategy = config.capacityProviderStrategy;
    this._deploymentController = config.deploymentController;
    this._loadBalancer = config.loadBalancer;
    this._networkConfiguration = config.networkConfiguration;
    this._orderedPlacementStrategy = config.orderedPlacementStrategy;
    this._placementConstraints = config.placementConstraints;
    this._placementStrategy = config.placementStrategy;
    this._serviceRegistries = config.serviceRegistries;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string;
  public get cluster() {
    return this._cluster ?? this.getStringAttribute('cluster');
  }
  public set cluster(value: string | undefined) {
    this._cluster = value;
  }

  // deployment_maximum_percent - computed: false, optional: true, required: false
  private _deploymentMaximumPercent?: number;
  public get deploymentMaximumPercent() {
    return this._deploymentMaximumPercent;
  }
  public set deploymentMaximumPercent(value: number | undefined) {
    this._deploymentMaximumPercent = value;
  }

  // deployment_minimum_healthy_percent - computed: false, optional: true, required: false
  private _deploymentMinimumHealthyPercent?: number;
  public get deploymentMinimumHealthyPercent() {
    return this._deploymentMinimumHealthyPercent;
  }
  public set deploymentMinimumHealthyPercent(value: number | undefined) {
    this._deploymentMinimumHealthyPercent = value;
  }

  // desired_count - computed: false, optional: true, required: false
  private _desiredCount?: number;
  public get desiredCount() {
    return this._desiredCount;
  }
  public set desiredCount(value: number | undefined) {
    this._desiredCount = value;
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean;
  public get enableEcsManagedTags() {
    return this._enableEcsManagedTags;
  }
  public set enableEcsManagedTags(value: boolean | undefined) {
    this._enableEcsManagedTags = value;
  }

  // force_new_deployment - computed: false, optional: true, required: false
  private _forceNewDeployment?: boolean;
  public get forceNewDeployment() {
    return this._forceNewDeployment;
  }
  public set forceNewDeployment(value: boolean | undefined) {
    this._forceNewDeployment = value;
  }

  // health_check_grace_period_seconds - computed: false, optional: true, required: false
  private _healthCheckGracePeriodSeconds?: number;
  public get healthCheckGracePeriodSeconds() {
    return this._healthCheckGracePeriodSeconds;
  }
  public set healthCheckGracePeriodSeconds(value: number | undefined) {
    this._healthCheckGracePeriodSeconds = value;
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole?: string;
  public get iamRole() {
    return this._iamRole ?? this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string | undefined) {
    this._iamRole = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // launch_type - computed: true, optional: true, required: false
  private _launchType?: string;
  public get launchType() {
    return this._launchType ?? this.getStringAttribute('launch_type');
  }
  public set launchType(value: string | undefined) {
    this._launchType = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // platform_version - computed: true, optional: true, required: false
  private _platformVersion?: string;
  public get platformVersion() {
    return this._platformVersion ?? this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string | undefined) {
    this._platformVersion = value;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string;
  public get propagateTags() {
    return this._propagateTags;
  }
  public set propagateTags(value: string | undefined) {
    this._propagateTags = value;
  }

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string;
  public get schedulingStrategy() {
    return this._schedulingStrategy;
  }
  public set schedulingStrategy(value: string | undefined) {
    this._schedulingStrategy = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // task_definition - computed: false, optional: true, required: false
  private _taskDefinition?: string;
  public get taskDefinition() {
    return this._taskDefinition;
  }
  public set taskDefinition(value: string | undefined) {
    this._taskDefinition = value;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] | undefined) {
    this._capacityProviderStrategy = value;
  }

  // deployment_controller - computed: false, optional: true, required: false
  private _deploymentController?: EcsServiceDeploymentController[];
  public get deploymentController() {
    return this._deploymentController;
  }
  public set deploymentController(value: EcsServiceDeploymentController[] | undefined) {
    this._deploymentController = value;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer?: EcsServiceLoadBalancer[];
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public set loadBalancer(value: EcsServiceLoadBalancer[] | undefined) {
    this._loadBalancer = value;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: EcsServiceNetworkConfiguration[];
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public set networkConfiguration(value: EcsServiceNetworkConfiguration[] | undefined) {
    this._networkConfiguration = value;
  }

  // ordered_placement_strategy - computed: false, optional: true, required: false
  private _orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
  public get orderedPlacementStrategy() {
    return this._orderedPlacementStrategy;
  }
  public set orderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[] | undefined) {
    this._orderedPlacementStrategy = value;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints?: EcsServicePlacementConstraints[];
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public set placementConstraints(value: EcsServicePlacementConstraints[] | undefined) {
    this._placementConstraints = value;
  }

  // placement_strategy - computed: false, optional: true, required: false
  private _placementStrategy?: EcsServicePlacementStrategy[];
  public get placementStrategy() {
    return this._placementStrategy;
  }
  public set placementStrategy(value: EcsServicePlacementStrategy[] | undefined) {
    this._placementStrategy = value;
  }

  // service_registries - computed: false, optional: true, required: false
  private _serviceRegistries?: EcsServiceServiceRegistries[];
  public get serviceRegistries() {
    return this._serviceRegistries;
  }
  public set serviceRegistries(value: EcsServiceServiceRegistries[] | undefined) {
    this._serviceRegistries = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EcsServiceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: EcsServiceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: this._cluster,
      deployment_maximum_percent: this._deploymentMaximumPercent,
      deployment_minimum_healthy_percent: this._deploymentMinimumHealthyPercent,
      desired_count: this._desiredCount,
      enable_ecs_managed_tags: this._enableEcsManagedTags,
      force_new_deployment: this._forceNewDeployment,
      health_check_grace_period_seconds: this._healthCheckGracePeriodSeconds,
      iam_role: this._iamRole,
      launch_type: this._launchType,
      name: this._name,
      platform_version: this._platformVersion,
      propagate_tags: this._propagateTags,
      scheduling_strategy: this._schedulingStrategy,
      tags: this._tags,
      task_definition: this._taskDefinition,
      capacity_provider_strategy: this._capacityProviderStrategy,
      deployment_controller: this._deploymentController,
      load_balancer: this._loadBalancer,
      network_configuration: this._networkConfiguration,
      ordered_placement_strategy: this._orderedPlacementStrategy,
      placement_constraints: this._placementConstraints,
      placement_strategy: this._placementStrategy,
      service_registries: this._serviceRegistries,
      timeouts: this._timeouts,
    };
  }
}
