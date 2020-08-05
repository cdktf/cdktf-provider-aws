// https://www.terraform.io/docs/providers/aws/r/codedeploy_deployment_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "app_name": {
        "type": "string",
        "required": true
      },
      "autoscaling_groups": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "deployment_config_name": {
        "type": "string",
        "optional": true
      },
      "deployment_group_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "service_role_arn": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "alarm_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "alarms": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "ignore_poll_alarm_failure": {
              "type": "bool",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "auto_rollback_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "enabled": {
              "type": "bool",
              "optional": true
            },
            "events": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "blue_green_deployment_config": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "deployment_ready_option": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action_on_timeout": {
                    "type": "string",
                    "optional": true
                  },
                  "wait_time_in_minutes": {
                    "type": "number",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "green_fleet_provisioning_option": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            },
            "terminate_blue_instances_on_deployment_success": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "action": {
                    "type": "string",
                    "optional": true
                  },
                  "termination_wait_time_in_minutes": {
                    "type": "number",
                    "optional": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "deployment_style": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "deployment_option": {
              "type": "string",
              "optional": true
            },
            "deployment_type": {
              "type": "string",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "ec2_tag_filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "optional": true
            },
            "value": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "ec2_tag_set": {
        "nesting_mode": "set",
        "block": {
          "block_types": {
            "ec2_tag_filter": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "key": {
                    "type": "string",
                    "optional": true
                  },
                  "type": {
                    "type": "string",
                    "optional": true
                  },
                  "value": {
                    "type": "string",
                    "optional": true
                  }
                }
              }
            }
          }
        }
      },
      "ecs_service": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "cluster_name": {
              "type": "string",
              "required": true
            },
            "service_name": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "load_balancer_info": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "elb_info": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "optional": true
                  }
                }
              }
            },
            "target_group_info": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "name": {
                    "type": "string",
                    "optional": true
                  }
                }
              }
            },
            "target_group_pair_info": {
              "nesting_mode": "list",
              "block": {
                "block_types": {
                  "prod_traffic_route": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "listener_arns": {
                          "type": [
                            "set",
                            "string"
                          ],
                          "required": true
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 1
                  },
                  "target_group": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "name": {
                          "type": "string",
                          "required": true
                        }
                      }
                    },
                    "min_items": 1,
                    "max_items": 2
                  },
                  "test_traffic_route": {
                    "nesting_mode": "list",
                    "block": {
                      "attributes": {
                        "listener_arns": {
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
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      },
      "on_premises_instance_tag_filter": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "optional": true
            },
            "type": {
              "type": "string",
              "optional": true
            },
            "value": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "trigger_configuration": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "trigger_events": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "trigger_name": {
              "type": "string",
              "required": true
            },
            "trigger_target_arn": {
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

export interface CodedeployDeploymentGroupConfig extends TerraformMetaArguments {
  readonly appName: string;
  readonly autoscalingGroups?: string[];
  readonly deploymentConfigName?: string;
  readonly deploymentGroupName: string;
  readonly serviceRoleArn: string;
  /** alarm_configuration block */
  readonly alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration[];
  /** auto_rollback_configuration block */
  readonly autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration[];
  /** blue_green_deployment_config block */
  readonly blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig[];
  /** deployment_style block */
  readonly deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle[];
  /** ec2_tag_filter block */
  readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[];
  /** ec2_tag_set block */
  readonly ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[];
  /** ecs_service block */
  readonly ecsService?: CodedeployDeploymentGroupEcsService[];
  /** load_balancer_info block */
  readonly loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo[];
  /** on_premises_instance_tag_filter block */
  readonly onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
  /** trigger_configuration block */
  readonly triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[];
}
export interface CodedeployDeploymentGroupAlarmConfiguration {
  readonly alarms?: string[];
  readonly enabled?: boolean;
  readonly ignorePollAlarmFailure?: boolean;
}
export interface CodedeployDeploymentGroupAutoRollbackConfiguration {
  readonly enabled?: boolean;
  readonly events?: string[];
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption {
  readonly actionOnTimeout?: string;
  readonly waitTimeInMinutes?: number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption {
  readonly action?: string;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess {
  readonly action?: string;
  readonly terminationWaitTimeInMinutes?: number;
}
export interface CodedeployDeploymentGroupBlueGreenDeploymentConfig {
  /** deployment_ready_option block */
  readonly deploymentReadyOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigDeploymentReadyOption[];
  /** green_fleet_provisioning_option block */
  readonly greenFleetProvisioningOption?: CodedeployDeploymentGroupBlueGreenDeploymentConfigGreenFleetProvisioningOption[];
  /** terminate_blue_instances_on_deployment_success block */
  readonly terminateBlueInstancesOnDeploymentSuccess?: CodedeployDeploymentGroupBlueGreenDeploymentConfigTerminateBlueInstancesOnDeploymentSuccess[];
}
export interface CodedeployDeploymentGroupDeploymentStyle {
  readonly deploymentOption?: string;
  readonly deploymentType?: string;
}
export interface CodedeployDeploymentGroupEc2TagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}
export interface CodedeployDeploymentGroupEc2TagSetEc2TagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}
export interface CodedeployDeploymentGroupEc2TagSet {
  /** ec2_tag_filter block */
  readonly ec2TagFilter?: CodedeployDeploymentGroupEc2TagSetEc2TagFilter[];
}
export interface CodedeployDeploymentGroupEcsService {
  readonly clusterName: string;
  readonly serviceName: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoElbInfo {
  readonly name?: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo {
  readonly name?: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute {
  readonly listenerArns: string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup {
  readonly name: string;
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute {
  readonly listenerArns: string[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo {
  /** prod_traffic_route block */
  readonly prodTrafficRoute: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoProdTrafficRoute[];
  /** target_group block */
  readonly targetGroup: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTargetGroup[];
  /** test_traffic_route block */
  readonly testTrafficRoute?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfoTestTrafficRoute[];
}
export interface CodedeployDeploymentGroupLoadBalancerInfo {
  /** elb_info block */
  readonly elbInfo?: CodedeployDeploymentGroupLoadBalancerInfoElbInfo[];
  /** target_group_info block */
  readonly targetGroupInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupInfo[];
  /** target_group_pair_info block */
  readonly targetGroupPairInfo?: CodedeployDeploymentGroupLoadBalancerInfoTargetGroupPairInfo[];
}
export interface CodedeployDeploymentGroupOnPremisesInstanceTagFilter {
  readonly key?: string;
  readonly type?: string;
  readonly value?: string;
}
export interface CodedeployDeploymentGroupTriggerConfiguration {
  readonly triggerEvents: string[];
  readonly triggerName: string;
  readonly triggerTargetArn: string;
}

// Resource

export class CodedeployDeploymentGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CodedeployDeploymentGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codedeploy_deployment_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appName = config.appName;
    this._autoscalingGroups = config.autoscalingGroups;
    this._deploymentConfigName = config.deploymentConfigName;
    this._deploymentGroupName = config.deploymentGroupName;
    this._serviceRoleArn = config.serviceRoleArn;
    this._alarmConfiguration = config.alarmConfiguration;
    this._autoRollbackConfiguration = config.autoRollbackConfiguration;
    this._blueGreenDeploymentConfig = config.blueGreenDeploymentConfig;
    this._deploymentStyle = config.deploymentStyle;
    this._ec2TagFilter = config.ec2TagFilter;
    this._ec2TagSet = config.ec2TagSet;
    this._ecsService = config.ecsService;
    this._loadBalancerInfo = config.loadBalancerInfo;
    this._onPremisesInstanceTagFilter = config.onPremisesInstanceTagFilter;
    this._triggerConfiguration = config.triggerConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName: string;
  public get appName() {
    return this._appName;
  }
  public set appName(value: string) {
    this._appName = value;
  }

  // autoscaling_groups - computed: false, optional: true, required: false
  private _autoscalingGroups?: string[];
  public get autoscalingGroups() {
    return this._autoscalingGroups;
  }
  public set autoscalingGroups(value: string[] | undefined) {
    this._autoscalingGroups = value;
  }

  // deployment_config_name - computed: false, optional: true, required: false
  private _deploymentConfigName?: string;
  public get deploymentConfigName() {
    return this._deploymentConfigName;
  }
  public set deploymentConfigName(value: string | undefined) {
    this._deploymentConfigName = value;
  }

  // deployment_group_name - computed: false, optional: false, required: true
  private _deploymentGroupName: string;
  public get deploymentGroupName() {
    return this._deploymentGroupName;
  }
  public set deploymentGroupName(value: string) {
    this._deploymentGroupName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // service_role_arn - computed: false, optional: false, required: true
  private _serviceRoleArn: string;
  public get serviceRoleArn() {
    return this._serviceRoleArn;
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }

  // alarm_configuration - computed: false, optional: true, required: false
  private _alarmConfiguration?: CodedeployDeploymentGroupAlarmConfiguration[];
  public get alarmConfiguration() {
    return this._alarmConfiguration;
  }
  public set alarmConfiguration(value: CodedeployDeploymentGroupAlarmConfiguration[] | undefined) {
    this._alarmConfiguration = value;
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration?: CodedeployDeploymentGroupAutoRollbackConfiguration[];
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public set autoRollbackConfiguration(value: CodedeployDeploymentGroupAutoRollbackConfiguration[] | undefined) {
    this._autoRollbackConfiguration = value;
  }

  // blue_green_deployment_config - computed: false, optional: true, required: false
  private _blueGreenDeploymentConfig?: CodedeployDeploymentGroupBlueGreenDeploymentConfig[];
  public get blueGreenDeploymentConfig() {
    return this._blueGreenDeploymentConfig;
  }
  public set blueGreenDeploymentConfig(value: CodedeployDeploymentGroupBlueGreenDeploymentConfig[] | undefined) {
    this._blueGreenDeploymentConfig = value;
  }

  // deployment_style - computed: false, optional: true, required: false
  private _deploymentStyle?: CodedeployDeploymentGroupDeploymentStyle[];
  public get deploymentStyle() {
    return this._deploymentStyle;
  }
  public set deploymentStyle(value: CodedeployDeploymentGroupDeploymentStyle[] | undefined) {
    this._deploymentStyle = value;
  }

  // ec2_tag_filter - computed: false, optional: true, required: false
  private _ec2TagFilter?: CodedeployDeploymentGroupEc2TagFilter[];
  public get ec2TagFilter() {
    return this._ec2TagFilter;
  }
  public set ec2TagFilter(value: CodedeployDeploymentGroupEc2TagFilter[] | undefined) {
    this._ec2TagFilter = value;
  }

  // ec2_tag_set - computed: false, optional: true, required: false
  private _ec2TagSet?: CodedeployDeploymentGroupEc2TagSet[];
  public get ec2TagSet() {
    return this._ec2TagSet;
  }
  public set ec2TagSet(value: CodedeployDeploymentGroupEc2TagSet[] | undefined) {
    this._ec2TagSet = value;
  }

  // ecs_service - computed: false, optional: true, required: false
  private _ecsService?: CodedeployDeploymentGroupEcsService[];
  public get ecsService() {
    return this._ecsService;
  }
  public set ecsService(value: CodedeployDeploymentGroupEcsService[] | undefined) {
    this._ecsService = value;
  }

  // load_balancer_info - computed: false, optional: true, required: false
  private _loadBalancerInfo?: CodedeployDeploymentGroupLoadBalancerInfo[];
  public get loadBalancerInfo() {
    return this._loadBalancerInfo;
  }
  public set loadBalancerInfo(value: CodedeployDeploymentGroupLoadBalancerInfo[] | undefined) {
    this._loadBalancerInfo = value;
  }

  // on_premises_instance_tag_filter - computed: false, optional: true, required: false
  private _onPremisesInstanceTagFilter?: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[];
  public get onPremisesInstanceTagFilter() {
    return this._onPremisesInstanceTagFilter;
  }
  public set onPremisesInstanceTagFilter(value: CodedeployDeploymentGroupOnPremisesInstanceTagFilter[] | undefined) {
    this._onPremisesInstanceTagFilter = value;
  }

  // trigger_configuration - computed: false, optional: true, required: false
  private _triggerConfiguration?: CodedeployDeploymentGroupTriggerConfiguration[];
  public get triggerConfiguration() {
    return this._triggerConfiguration;
  }
  public set triggerConfiguration(value: CodedeployDeploymentGroupTriggerConfiguration[] | undefined) {
    this._triggerConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: this._appName,
      autoscaling_groups: this._autoscalingGroups,
      deployment_config_name: this._deploymentConfigName,
      deployment_group_name: this._deploymentGroupName,
      service_role_arn: this._serviceRoleArn,
      alarm_configuration: this._alarmConfiguration,
      auto_rollback_configuration: this._autoRollbackConfiguration,
      blue_green_deployment_config: this._blueGreenDeploymentConfig,
      deployment_style: this._deploymentStyle,
      ec2_tag_filter: this._ec2TagFilter,
      ec2_tag_set: this._ec2TagSet,
      ecs_service: this._ecsService,
      load_balancer_info: this._loadBalancerInfo,
      on_premises_instance_tag_filter: this._onPremisesInstanceTagFilter,
      trigger_configuration: this._triggerConfiguration,
    };
  }
}
