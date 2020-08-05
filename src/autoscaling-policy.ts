// https://www.terraform.io/docs/providers/aws/r/autoscaling_policy.html
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
      "autoscaling_group_name": {
        "type": "string",
        "required": true
      },
      "cooldown": {
        "type": "number",
        "optional": true
      },
      "estimated_instance_warmup": {
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
        "optional": true,
        "computed": true
      },
      "min_adjustment_magnitude": {
        "type": "number",
        "optional": true
      },
      "min_adjustment_step": {
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
      "scaling_adjustment": {
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
      },
      "target_tracking_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "disable_scale_in": {
              "type": "bool",
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
                  "metric_dimension": {
                    "nesting_mode": "list",
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

export interface AutoscalingPolicyConfig extends TerraformMetaArguments {
  readonly adjustmentType?: string;
  readonly autoscalingGroupName: string;
  readonly cooldown?: number;
  readonly estimatedInstanceWarmup?: number;
  readonly metricAggregationType?: string;
  readonly minAdjustmentMagnitude?: number;
  readonly minAdjustmentStep?: number;
  readonly name: string;
  readonly policyType?: string;
  readonly scalingAdjustment?: number;
  /** step_adjustment block */
  readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[];
  /** target_tracking_configuration block */
  readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
}
export interface AutoscalingPolicyStepAdjustment {
  readonly metricIntervalLowerBound?: string;
  readonly metricIntervalUpperBound?: string;
  readonly scalingAdjustment: number;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
  readonly name: string;
  readonly value: string;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
  /** metric_dimension block */
  readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[];
}
export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
  readonly predefinedMetricType: string;
  readonly resourceLabel?: string;
}
export interface AutoscalingPolicyTargetTrackingConfiguration {
  readonly disableScaleIn?: boolean;
  readonly targetValue: number;
  /** customized_metric_specification block */
  readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification[];
  /** predefined_metric_specification block */
  readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification[];
}

// Resource

export class AutoscalingPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adjustmentType = config.adjustmentType;
    this._autoscalingGroupName = config.autoscalingGroupName;
    this._cooldown = config.cooldown;
    this._estimatedInstanceWarmup = config.estimatedInstanceWarmup;
    this._metricAggregationType = config.metricAggregationType;
    this._minAdjustmentMagnitude = config.minAdjustmentMagnitude;
    this._minAdjustmentStep = config.minAdjustmentStep;
    this._name = config.name;
    this._policyType = config.policyType;
    this._scalingAdjustment = config.scalingAdjustment;
    this._stepAdjustment = config.stepAdjustment;
    this._targetTrackingConfiguration = config.targetTrackingConfiguration;
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

  // autoscaling_group_name - computed: false, optional: false, required: true
  private _autoscalingGroupName: string;
  public get autoscalingGroupName() {
    return this._autoscalingGroupName;
  }
  public set autoscalingGroupName(value: string) {
    this._autoscalingGroupName = value;
  }

  // cooldown - computed: false, optional: true, required: false
  private _cooldown?: number;
  public get cooldown() {
    return this._cooldown;
  }
  public set cooldown(value: number | undefined) {
    this._cooldown = value;
  }

  // estimated_instance_warmup - computed: false, optional: true, required: false
  private _estimatedInstanceWarmup?: number;
  public get estimatedInstanceWarmup() {
    return this._estimatedInstanceWarmup;
  }
  public set estimatedInstanceWarmup(value: number | undefined) {
    this._estimatedInstanceWarmup = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // metric_aggregation_type - computed: true, optional: true, required: false
  private _metricAggregationType?: string;
  public get metricAggregationType() {
    return this._metricAggregationType ?? this.getStringAttribute('metric_aggregation_type');
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

  // min_adjustment_step - computed: false, optional: true, required: false
  private _minAdjustmentStep?: number;
  public get minAdjustmentStep() {
    return this._minAdjustmentStep;
  }
  public set minAdjustmentStep(value: number | undefined) {
    this._minAdjustmentStep = value;
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

  // scaling_adjustment - computed: false, optional: true, required: false
  private _scalingAdjustment?: number;
  public get scalingAdjustment() {
    return this._scalingAdjustment;
  }
  public set scalingAdjustment(value: number | undefined) {
    this._scalingAdjustment = value;
  }

  // step_adjustment - computed: false, optional: true, required: false
  private _stepAdjustment?: AutoscalingPolicyStepAdjustment[];
  public get stepAdjustment() {
    return this._stepAdjustment;
  }
  public set stepAdjustment(value: AutoscalingPolicyStepAdjustment[] | undefined) {
    this._stepAdjustment = value;
  }

  // target_tracking_configuration - computed: false, optional: true, required: false
  private _targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration[];
  public get targetTrackingConfiguration() {
    return this._targetTrackingConfiguration;
  }
  public set targetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration[] | undefined) {
    this._targetTrackingConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      adjustment_type: this._adjustmentType,
      autoscaling_group_name: this._autoscalingGroupName,
      cooldown: this._cooldown,
      estimated_instance_warmup: this._estimatedInstanceWarmup,
      metric_aggregation_type: this._metricAggregationType,
      min_adjustment_magnitude: this._minAdjustmentMagnitude,
      min_adjustment_step: this._minAdjustmentStep,
      name: this._name,
      policy_type: this._policyType,
      scaling_adjustment: this._scalingAdjustment,
      step_adjustment: this._stepAdjustment,
      target_tracking_configuration: this._targetTrackingConfiguration,
    };
  }
}
