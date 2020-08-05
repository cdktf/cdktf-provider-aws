// https://www.terraform.io/docs/providers/aws/r/autoscaling_group.html
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
      "availability_zones": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "default_cooldown": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "desired_capacity": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "enabled_metrics": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "force_delete": {
        "type": "bool",
        "optional": true
      },
      "health_check_grace_period": {
        "type": "number",
        "optional": true
      },
      "health_check_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "launch_configuration": {
        "type": "string",
        "optional": true
      },
      "load_balancers": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "max_instance_lifetime": {
        "type": "number",
        "optional": true
      },
      "max_size": {
        "type": "number",
        "required": true
      },
      "metrics_granularity": {
        "type": "string",
        "optional": true
      },
      "min_elb_capacity": {
        "type": "number",
        "optional": true
      },
      "min_size": {
        "type": "number",
        "required": true
      },
      "name": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name_prefix": {
        "type": "string",
        "optional": true
      },
      "placement_group": {
        "type": "string",
        "optional": true
      },
      "protect_from_scale_in": {
        "type": "bool",
        "optional": true
      },
      "service_linked_role_arn": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "suspended_processes": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "set",
          [
            "map",
            "string"
          ]
        ],
        "optional": true
      },
      "target_group_arns": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "termination_policies": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "vpc_zone_identifier": {
        "type": [
          "set",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "wait_for_capacity_timeout": {
        "type": "string",
        "optional": true
      },
      "wait_for_elb_capacity": {
        "type": "number",
        "optional": true
      }
    },
    "block_types": {
      "initial_lifecycle_hook": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "default_result": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "heartbeat_timeout": {
              "type": "number",
              "optional": true
            },
            "lifecycle_transition": {
              "type": "string",
              "required": true
            },
            "name": {
              "type": "string",
              "required": true
            },
            "notification_metadata": {
              "type": "string",
              "optional": true
            },
            "notification_target_arn": {
              "type": "string",
              "optional": true
            },
            "role_arn": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "launch_template": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
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
            "version": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "mixed_instances_policy": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "instances_distribution": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "on_demand_allocation_strategy": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "on_demand_base_capacity": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "on_demand_percentage_above_base_capacity": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "spot_allocation_strategy": {
                    "type": "string",
                    "optional": true,
                    "computed": true
                  },
                  "spot_instance_pools": {
                    "type": "number",
                    "optional": true,
                    "computed": true
                  },
                  "spot_max_price": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "launch_template": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "launch_template_specification": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "launch_template_id": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "launch_template_name": {
                          "type": "string",
                          "optional": true,
                          "computed": true
                        },
                        "version": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  },
                  "override": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "instance_type": {
                          "type": "string",
                          "optional": true
                        },
                        "weighted_capacity": {
                          "type": "string",
                          "optional": true
                        }
                      }
                    }
                  }
                }
              },
              "min_items": 1,
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "tag": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "propagate_at_launch": {
              "type": "bool",
              "required": true
            },
            "value": {
              "type": "string",
              "required": true
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

export interface AutoscalingGroupConfig extends TerraformMetaArguments {
  readonly availabilityZones?: string[];
  readonly defaultCooldown?: number;
  readonly desiredCapacity?: number;
  readonly enabledMetrics?: string[];
  readonly forceDelete?: boolean;
  readonly healthCheckGracePeriod?: number;
  readonly healthCheckType?: string;
  readonly launchConfiguration?: string;
  readonly loadBalancers?: string[];
  readonly maxInstanceLifetime?: number;
  readonly maxSize: number;
  readonly metricsGranularity?: string;
  readonly minElbCapacity?: number;
  readonly minSize: number;
  readonly name?: string;
  readonly namePrefix?: string;
  readonly placementGroup?: string;
  readonly protectFromScaleIn?: boolean;
  readonly serviceLinkedRoleArn?: string;
  readonly suspendedProcesses?: string[];
  readonly tags?: { [key: string]: string };
  readonly targetGroupArns?: string[];
  readonly terminationPolicies?: string[];
  readonly vpcZoneIdentifier?: string[];
  readonly waitForCapacityTimeout?: string;
  readonly waitForElbCapacity?: number;
  /** initial_lifecycle_hook block */
  readonly initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
  /** launch_template block */
  readonly launchTemplate?: AutoscalingGroupLaunchTemplate[];
  /** mixed_instances_policy block */
  readonly mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
  /** tag block */
  readonly tag?: AutoscalingGroupTag[];
  /** timeouts block */
  readonly timeouts?: AutoscalingGroupTimeouts;
}
export interface AutoscalingGroupInitialLifecycleHook {
  readonly defaultResult?: string;
  readonly heartbeatTimeout?: number;
  readonly lifecycleTransition: string;
  readonly name: string;
  readonly notificationMetadata?: string;
  readonly notificationTargetArn?: string;
  readonly roleArn?: string;
}
export interface AutoscalingGroupLaunchTemplate {
  readonly id?: string;
  readonly name?: string;
  readonly version?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyInstancesDistribution {
  readonly onDemandAllocationStrategy?: string;
  readonly onDemandBaseCapacity?: number;
  readonly onDemandPercentageAboveBaseCapacity?: number;
  readonly spotAllocationStrategy?: string;
  readonly spotInstancePools?: number;
  readonly spotMaxPrice?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  readonly launchTemplateId?: string;
  readonly launchTemplateName?: string;
  readonly version?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride {
  readonly instanceType?: string;
  readonly weightedCapacity?: string;
}
export interface AutoscalingGroupMixedInstancesPolicyLaunchTemplate {
  /** launch_template_specification block */
  readonly launchTemplateSpecification: AutoscalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification[];
  /** override block */
  readonly override?: AutoscalingGroupMixedInstancesPolicyLaunchTemplateOverride[];
}
export interface AutoscalingGroupMixedInstancesPolicy {
  /** instances_distribution block */
  readonly instancesDistribution?: AutoscalingGroupMixedInstancesPolicyInstancesDistribution[];
  /** launch_template block */
  readonly launchTemplate: AutoscalingGroupMixedInstancesPolicyLaunchTemplate[];
}
export interface AutoscalingGroupTag {
  readonly key: string;
  readonly propagateAtLaunch: boolean;
  readonly value: string;
}
export interface AutoscalingGroupTimeouts {
  readonly delete?: string;
}

// Resource

export class AutoscalingGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availabilityZones = config.availabilityZones;
    this._defaultCooldown = config.defaultCooldown;
    this._desiredCapacity = config.desiredCapacity;
    this._enabledMetrics = config.enabledMetrics;
    this._forceDelete = config.forceDelete;
    this._healthCheckGracePeriod = config.healthCheckGracePeriod;
    this._healthCheckType = config.healthCheckType;
    this._launchConfiguration = config.launchConfiguration;
    this._loadBalancers = config.loadBalancers;
    this._maxInstanceLifetime = config.maxInstanceLifetime;
    this._maxSize = config.maxSize;
    this._metricsGranularity = config.metricsGranularity;
    this._minElbCapacity = config.minElbCapacity;
    this._minSize = config.minSize;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._placementGroup = config.placementGroup;
    this._protectFromScaleIn = config.protectFromScaleIn;
    this._serviceLinkedRoleArn = config.serviceLinkedRoleArn;
    this._suspendedProcesses = config.suspendedProcesses;
    this._tags = config.tags;
    this._targetGroupArns = config.targetGroupArns;
    this._terminationPolicies = config.terminationPolicies;
    this._vpcZoneIdentifier = config.vpcZoneIdentifier;
    this._waitForCapacityTimeout = config.waitForCapacityTimeout;
    this._waitForElbCapacity = config.waitForElbCapacity;
    this._initialLifecycleHook = config.initialLifecycleHook;
    this._launchTemplate = config.launchTemplate;
    this._mixedInstancesPolicy = config.mixedInstancesPolicy;
    this._tag = config.tag;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // availability_zones - computed: true, optional: true, required: false
  private _availabilityZones?: string[];
  public get availabilityZones() {
    return this._availabilityZones ?? this.getListAttribute('availability_zones');
  }
  public set availabilityZones(value: string[] | undefined) {
    this._availabilityZones = value;
  }

  // default_cooldown - computed: true, optional: true, required: false
  private _defaultCooldown?: number;
  public get defaultCooldown() {
    return this._defaultCooldown ?? this.getNumberAttribute('default_cooldown');
  }
  public set defaultCooldown(value: number | undefined) {
    this._defaultCooldown = value;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: number;
  public get desiredCapacity() {
    return this._desiredCapacity ?? this.getNumberAttribute('desired_capacity');
  }
  public set desiredCapacity(value: number | undefined) {
    this._desiredCapacity = value;
  }

  // enabled_metrics - computed: false, optional: true, required: false
  private _enabledMetrics?: string[];
  public get enabledMetrics() {
    return this._enabledMetrics;
  }
  public set enabledMetrics(value: string[] | undefined) {
    this._enabledMetrics = value;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this._forceDelete;
  }
  public set forceDelete(value: boolean | undefined) {
    this._forceDelete = value;
  }

  // health_check_grace_period - computed: false, optional: true, required: false
  private _healthCheckGracePeriod?: number;
  public get healthCheckGracePeriod() {
    return this._healthCheckGracePeriod;
  }
  public set healthCheckGracePeriod(value: number | undefined) {
    this._healthCheckGracePeriod = value;
  }

  // health_check_type - computed: true, optional: true, required: false
  private _healthCheckType?: string;
  public get healthCheckType() {
    return this._healthCheckType ?? this.getStringAttribute('health_check_type');
  }
  public set healthCheckType(value: string | undefined) {
    this._healthCheckType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // launch_configuration - computed: false, optional: true, required: false
  private _launchConfiguration?: string;
  public get launchConfiguration() {
    return this._launchConfiguration;
  }
  public set launchConfiguration(value: string | undefined) {
    this._launchConfiguration = value;
  }

  // load_balancers - computed: true, optional: true, required: false
  private _loadBalancers?: string[];
  public get loadBalancers() {
    return this._loadBalancers ?? this.getListAttribute('load_balancers');
  }
  public set loadBalancers(value: string[] | undefined) {
    this._loadBalancers = value;
  }

  // max_instance_lifetime - computed: false, optional: true, required: false
  private _maxInstanceLifetime?: number;
  public get maxInstanceLifetime() {
    return this._maxInstanceLifetime;
  }
  public set maxInstanceLifetime(value: number | undefined) {
    this._maxInstanceLifetime = value;
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize: number;
  public get maxSize() {
    return this._maxSize;
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }

  // metrics_granularity - computed: false, optional: true, required: false
  private _metricsGranularity?: string;
  public get metricsGranularity() {
    return this._metricsGranularity;
  }
  public set metricsGranularity(value: string | undefined) {
    this._metricsGranularity = value;
  }

  // min_elb_capacity - computed: false, optional: true, required: false
  private _minElbCapacity?: number;
  public get minElbCapacity() {
    return this._minElbCapacity;
  }
  public set minElbCapacity(value: number | undefined) {
    this._minElbCapacity = value;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize: number;
  public get minSize() {
    return this._minSize;
  }
  public set minSize(value: number) {
    this._minSize = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix;
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // placement_group - computed: false, optional: true, required: false
  private _placementGroup?: string;
  public get placementGroup() {
    return this._placementGroup;
  }
  public set placementGroup(value: string | undefined) {
    this._placementGroup = value;
  }

  // protect_from_scale_in - computed: false, optional: true, required: false
  private _protectFromScaleIn?: boolean;
  public get protectFromScaleIn() {
    return this._protectFromScaleIn;
  }
  public set protectFromScaleIn(value: boolean | undefined) {
    this._protectFromScaleIn = value;
  }

  // service_linked_role_arn - computed: true, optional: true, required: false
  private _serviceLinkedRoleArn?: string;
  public get serviceLinkedRoleArn() {
    return this._serviceLinkedRoleArn ?? this.getStringAttribute('service_linked_role_arn');
  }
  public set serviceLinkedRoleArn(value: string | undefined) {
    this._serviceLinkedRoleArn = value;
  }

  // suspended_processes - computed: false, optional: true, required: false
  private _suspendedProcesses?: string[];
  public get suspendedProcesses() {
    return this._suspendedProcesses;
  }
  public set suspendedProcesses(value: string[] | undefined) {
    this._suspendedProcesses = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // target_group_arns - computed: true, optional: true, required: false
  private _targetGroupArns?: string[];
  public get targetGroupArns() {
    return this._targetGroupArns ?? this.getListAttribute('target_group_arns');
  }
  public set targetGroupArns(value: string[] | undefined) {
    this._targetGroupArns = value;
  }

  // termination_policies - computed: false, optional: true, required: false
  private _terminationPolicies?: string[];
  public get terminationPolicies() {
    return this._terminationPolicies;
  }
  public set terminationPolicies(value: string[] | undefined) {
    this._terminationPolicies = value;
  }

  // vpc_zone_identifier - computed: true, optional: true, required: false
  private _vpcZoneIdentifier?: string[];
  public get vpcZoneIdentifier() {
    return this._vpcZoneIdentifier ?? this.getListAttribute('vpc_zone_identifier');
  }
  public set vpcZoneIdentifier(value: string[] | undefined) {
    this._vpcZoneIdentifier = value;
  }

  // wait_for_capacity_timeout - computed: false, optional: true, required: false
  private _waitForCapacityTimeout?: string;
  public get waitForCapacityTimeout() {
    return this._waitForCapacityTimeout;
  }
  public set waitForCapacityTimeout(value: string | undefined) {
    this._waitForCapacityTimeout = value;
  }

  // wait_for_elb_capacity - computed: false, optional: true, required: false
  private _waitForElbCapacity?: number;
  public get waitForElbCapacity() {
    return this._waitForElbCapacity;
  }
  public set waitForElbCapacity(value: number | undefined) {
    this._waitForElbCapacity = value;
  }

  // initial_lifecycle_hook - computed: false, optional: true, required: false
  private _initialLifecycleHook?: AutoscalingGroupInitialLifecycleHook[];
  public get initialLifecycleHook() {
    return this._initialLifecycleHook;
  }
  public set initialLifecycleHook(value: AutoscalingGroupInitialLifecycleHook[] | undefined) {
    this._initialLifecycleHook = value;
  }

  // launch_template - computed: false, optional: true, required: false
  private _launchTemplate?: AutoscalingGroupLaunchTemplate[];
  public get launchTemplate() {
    return this._launchTemplate;
  }
  public set launchTemplate(value: AutoscalingGroupLaunchTemplate[] | undefined) {
    this._launchTemplate = value;
  }

  // mixed_instances_policy - computed: false, optional: true, required: false
  private _mixedInstancesPolicy?: AutoscalingGroupMixedInstancesPolicy[];
  public get mixedInstancesPolicy() {
    return this._mixedInstancesPolicy;
  }
  public set mixedInstancesPolicy(value: AutoscalingGroupMixedInstancesPolicy[] | undefined) {
    this._mixedInstancesPolicy = value;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: AutoscalingGroupTag[];
  public get tag() {
    return this._tag;
  }
  public set tag(value: AutoscalingGroupTag[] | undefined) {
    this._tag = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AutoscalingGroupTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AutoscalingGroupTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      availability_zones: this._availabilityZones,
      default_cooldown: this._defaultCooldown,
      desired_capacity: this._desiredCapacity,
      enabled_metrics: this._enabledMetrics,
      force_delete: this._forceDelete,
      health_check_grace_period: this._healthCheckGracePeriod,
      health_check_type: this._healthCheckType,
      launch_configuration: this._launchConfiguration,
      load_balancers: this._loadBalancers,
      max_instance_lifetime: this._maxInstanceLifetime,
      max_size: this._maxSize,
      metrics_granularity: this._metricsGranularity,
      min_elb_capacity: this._minElbCapacity,
      min_size: this._minSize,
      name: this._name,
      name_prefix: this._namePrefix,
      placement_group: this._placementGroup,
      protect_from_scale_in: this._protectFromScaleIn,
      service_linked_role_arn: this._serviceLinkedRoleArn,
      suspended_processes: this._suspendedProcesses,
      tags: this._tags,
      target_group_arns: this._targetGroupArns,
      termination_policies: this._terminationPolicies,
      vpc_zone_identifier: this._vpcZoneIdentifier,
      wait_for_capacity_timeout: this._waitForCapacityTimeout,
      wait_for_elb_capacity: this._waitForElbCapacity,
      initial_lifecycle_hook: this._initialLifecycleHook,
      launch_template: this._launchTemplate,
      mixed_instances_policy: this._mixedInstancesPolicy,
      tag: this._tag,
      timeouts: this._timeouts,
    };
  }
}
