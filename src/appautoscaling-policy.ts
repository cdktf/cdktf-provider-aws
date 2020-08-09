// https://www.terraform.io/docs/providers/aws/r/appautoscaling_policy.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "adjustment_type": {
        "type": "string",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "cooldown": {
        "type": "number",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "metric_aggregation_type": {
        "type": "string",
        "optional": true
      },
      "min_adjustment_magnitude": {
        "type": "number",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "policy_type": {
        "type": "string",
        "optional": true
      },
      "resource_id": {
        "type": "string",
        "required": true
      },
      "scalable_dimension": {
        "type": "string",
        "required": true
      },
      "service_namespace": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "step_adjustment": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "metric_interval_lower_bound": {
              "type": "string",
              "optional": true
            },
            "metric_interval_upper_bound": {
              "type": "string",
              "optional": true
            },
            "scaling_adjustment": {
              "type": "number",
              "required": true
            }
          }
        }
      },
      "step_scaling_policy_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "adjustment_type": {
              "type": "string",
              "optional": true
            },
            "cooldown": {
              "type": "number",
              "optional": true
            },
            "metric_aggregation_type": {
              "type": "string",
              "optional": true
            },
            "min_adjustment_magnitude": {
              "type": "number",
              "optional": true
            }
          },
          "block_types": {
            "step_adjustment": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "metric_interval_lower_bound": {
                    "type": "string",
                    "optional": true
                  },
                  "metric_interval_upper_bound": {
                    "type": "string",
                    "optional": true
                  },
                  "scaling_adjustment": {
                    "type": "number",
                    "required": true
                  }
                }
              }
            }
          }
        },
        "max_items": 1
      },
      "target_tracking_scaling_policy_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "disable_scale_in": {
              "type": "bool",
              "optional": true
            },
            "scale_in_cooldown": {
              "type": "number",
              "optional": true
            },
            "scale_out_cooldown": {
              "type": "number",
              "optional": true
            },
            "target_value": {
              "type": "number",
              "required": true
            }
          },
          "block_types": {
            "customized_metric_specification": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "metric_name": {
                    "type": "string",
                    "required": true
                  },
                  "namespace": {
                    "type": "string",
                    "required": true
                  },
                  "statistic": {
                    "type": "string",
                    "required": true
                  },
                  "unit": {
                    "type": "string",
                    "optional": true
                  }
                },
                "block_types": {
                  "dimensions": {
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
              },
              "max_items": 1
            },
            "predefined_metric_specification": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "predefined_metric_type": {
                    "type": "string",
                    "required": true
                  },
                  "resource_label": {
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
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppautoscalingPolicyConfig extends TerraformMetaArguments {
  readonly adjustmentType?: string;
  readonly cooldown?: number;
  readonly metricAggregationType?: string;
  readonly minAdjustmentMagnitude?: number;
  readonly name: string;
  readonly policyType?: string;
  readonly resourceId: string;
  readonly scalableDimension: string;
  readonly serviceNamespace: string;
  /** step_adjustment block */
  readonly stepAdjustment?: AppautoscalingPolicyStepAdjustment[];
  /** step_scaling_policy_configuration block */
  readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration[];
  /** target_tracking_scaling_policy_configuration block */
  readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
}
export interface AppautoscalingPolicyStepAdjustment {
  readonly metricIntervalLowerBound?: string;
  readonly metricIntervalUpperBound?: string;
  readonly scalingAdjustment: number;
}
export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
  readonly metricIntervalLowerBound?: string;
  readonly metricIntervalUpperBound?: string;
  readonly scalingAdjustment: number;
}
export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
  readonly adjustmentType?: string;
  readonly cooldown?: number;
  readonly metricAggregationType?: string;
  readonly minAdjustmentMagnitude?: number;
  /** step_adjustment block */
  readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
  readonly name: string;
  readonly value: string;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
  /** dimensions block */
  readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[];
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
  readonly predefinedMetricType: string;
  readonly resourceLabel?: string;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
  readonly disableScaleIn?: boolean;
  readonly scaleInCooldown?: number;
  readonly scaleOutCooldown?: number;
  readonly targetValue: number;
  /** customized_metric_specification block */
  readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification[];
  /** predefined_metric_specification block */
  readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification[];
}

// Resource

export class AppautoscalingPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appautoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adjustmentType = config.adjustmentType;
    this._cooldown = config.cooldown;
    this._metricAggregationType = config.metricAggregationType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._name = config.name;
    this._policyType = config.policyType;
    this._resourceId = config.resourceId;
    this._scalableDimension = config.scalableDimension;
    this._serviceNamespace = config.serviceNamespace;
    this._stepAdjustment = config.stepAdjustment;
    this._stepScalingPolicyConfiguration = config.stepScalingPolicyConfiguration;
    this._targetTrackingScalingPolicyConfiguration = config.targetTrackingScalingPolicyConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustment_type - computed: false, optional: true, required: false
  private _adjustmentType?: string;
  public get adjustmentType() {
    return this._adjustmentType;
  }
  public set adjustmentType(value: string | undefined) {
    this._adjustmentType = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number;
  public get cooldown() {
    return this._cooldown;
  }
  public set cooldown(value: number | undefined) {
    this._cooldown = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metric_aggregation_type - computed: false, optional: true, required: false
  private _metricAggregationType?: string;
  public get metricAggregationType() {
    return this._metricAggregationType;
  }
  public set metricAggregationType(value: string | undefined) {
    this._metricAggregationType = value;
  }

  // min_adjustment_magnitude - computed: false, optional: true, required: false
  private _minAdjustmentMagnitude?: number;
  public get minAdjustmentMagnitude() {
    return this._minAdjustmentMagnitude;
  }
  public set minAdjustmentMagnitude(value: number | undefined) {
    this._minAdjustmentMagnitude = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy_type - computed: false, optional: true, required: false
  private _policyType?: string;
  public get policyType() {
    return this._policyType;
  }
  public set policyType(value: string | undefined) {
    this._policyType = value;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId: string;
  public get resourceId() {
    return this._resourceId;
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }

  // scalable_dimension - computed: false, optional: false, required: true
  private _scalableDimension: string;
  public get scalableDimension() {
    return this._scalableDimension;
  }
  public set scalableDimension(value: string) {
    this._scalableDimension = value;
  }

  // service_namespace - computed: false, optional: false, required: true
  private _serviceNamespace: string;
  public get serviceNamespace() {
    return this._serviceNamespace;
  }
  public set serviceNamespace(value: string) {
    this._serviceNamespace = value;
  }

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment?: AppautoscalingPolicyStepAdjustment[];
  public get stepAdjustment() {
    return this._stepAdjustment;
  }
  public set stepAdjustment(value: AppautoscalingPolicyStepAdjustment[] | undefined) {
    this._stepAdjustment = value;
  }

  // step_scaling_policy_configuration - computed: false, optional: true, required: false
  private _stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration[];
  public get stepScalingPolicyConfiguration() {
    return this._stepScalingPolicyConfiguration;
  }
  public set stepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration[] | undefined) {
    this._stepScalingPolicyConfiguration = value;
  }

  // target_tracking_scaling_policy_configuration - computed: false, optional: true, required: false
  private _targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[];
  public get targetTrackingScalingPolicyConfiguration() {
    return this._targetTrackingScalingPolicyConfiguration;
  }
  public set targetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration[] | undefined) {
    this._targetTrackingScalingPolicyConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: this._adjustmentType,
      cooldown: this._cooldown,
      metric_aggregation_type: this._metricAggregationType,
      min_adjustment_magnitude: this._minAdjustmentMagnitude,
      name: this._name,
      policy_type: this._policyType,
      resource_id: this._resourceId,
      scalable_dimension: this._scalableDimension,
      service_namespace: this._serviceNamespace,
      step_adjustment: this._stepAdjustment,
      step_scaling_policy_configuration: this._stepScalingPolicyConfiguration,
      target_tracking_scaling_policy_configuration: this._targetTrackingScalingPolicyConfiguration,
    };
  }
}
