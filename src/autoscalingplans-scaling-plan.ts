// https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AutoscalingplansScalingPlanConfig extends TerraformMetaArguments {
  readonly name: string;
  /** application_source block */
  readonly applicationSource: AutoscalingplansScalingPlanApplicationSource[];
  /** scaling_instruction block */
  readonly scalingInstruction: AutoscalingplansScalingPlanScalingInstruction[];
}
export interface AutoscalingplansScalingPlanApplicationSourceTagFilter {
  readonly key: string;
  readonly values?: string[];
}
export interface AutoscalingplansScalingPlanApplicationSource {
  readonly cloudformationStackArn?: string;
  /** tag_filter block */
  readonly tagFilter?: AutoscalingplansScalingPlanApplicationSourceTagFilter[];
}
export interface AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification {
  readonly dimensions?: { [key: string]: string };
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification {
  readonly predefinedLoadMetricType: string;
  readonly resourceLabel?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification {
  readonly dimensions?: { [key: string]: string };
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification {
  readonly predefinedScalingMetricType: string;
  readonly resourceLabel?: string;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration {
  readonly disableScaleIn?: boolean;
  readonly estimatedInstanceWarmup?: number;
  readonly scaleInCooldown?: number;
  readonly scaleOutCooldown?: number;
  readonly targetValue: number;
  /** customized_scaling_metric_specification block */
  readonly customizedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification[];
  /** predefined_scaling_metric_specification block */
  readonly predefinedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification[];
}
export interface AutoscalingplansScalingPlanScalingInstruction {
  readonly disableDynamicScaling?: boolean;
  readonly maxCapacity: number;
  readonly minCapacity: number;
  readonly predictiveScalingMaxCapacityBehavior?: string;
  readonly predictiveScalingMaxCapacityBuffer?: number;
  readonly predictiveScalingMode?: string;
  readonly resourceId: string;
  readonly scalableDimension: string;
  readonly scalingPolicyUpdateBehavior?: string;
  readonly scheduledActionBufferTime?: number;
  readonly serviceNamespace: string;
  /** customized_load_metric_specification block */
  readonly customizedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification[];
  /** predefined_load_metric_specification block */
  readonly predefinedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification[];
  /** target_tracking_configuration block */
  readonly targetTrackingConfiguration: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[];
}

// Resource

export class AutoscalingplansScalingPlan extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AutoscalingplansScalingPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_autoscalingplans_scaling_plan',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._applicationSource = config.applicationSource;
    this._scalingInstruction = config.scalingInstruction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // scaling_plan_version - computed: true, optional: false, required: true
  public get scalingPlanVersion() {
    return this.getNumberAttribute('scaling_plan_version');
  }

  // application_source - computed: false, optional: false, required: true
  private _applicationSource: AutoscalingplansScalingPlanApplicationSource[];
  public get applicationSource() {
    return this._applicationSource;
  }
  public set applicationSource(value: AutoscalingplansScalingPlanApplicationSource[]) {
    this._applicationSource = value;
  }

  // scaling_instruction - computed: false, optional: false, required: true
  private _scalingInstruction: AutoscalingplansScalingPlanScalingInstruction[];
  public get scalingInstruction() {
    return this._scalingInstruction;
  }
  public set scalingInstruction(value: AutoscalingplansScalingPlanScalingInstruction[]) {
    this._scalingInstruction = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      application_source: this._applicationSource,
      scaling_instruction: this._scalingInstruction,
    };
  }
}
