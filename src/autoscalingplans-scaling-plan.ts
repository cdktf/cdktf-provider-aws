// https://www.terraform.io/docs/providers/aws/r/autoscalingplans_scaling_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoscalingplansScalingPlanConfig extends cdktf.TerraformMetaArguments {
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

function autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceTagFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface AutoscalingplansScalingPlanApplicationSource {
  readonly cloudformationStackArn?: string;
  /** tag_filter block */
  readonly tagFilter?: AutoscalingplansScalingPlanApplicationSourceTagFilter[];
}

function autoscalingplansScalingPlanApplicationSourceToTerraform(struct?: AutoscalingplansScalingPlanApplicationSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudformation_stack_arn: cdktf.stringToTerraform(struct!.cloudformationStackArn),
    tag_filter: cdktf.listMapper(autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform)(struct!.tagFilter),
  }
}

export interface AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification {
  readonly dimensions?: { [key: string]: string };
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
}

function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification {
  readonly predefinedLoadMetricType: string;
  readonly resourceLabel?: string;
}

function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    predefined_load_metric_type: cdktf.stringToTerraform(struct!.predefinedLoadMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
}

export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification {
  readonly dimensions?: { [key: string]: string };
  readonly metricName: string;
  readonly namespace: string;
  readonly statistic: string;
  readonly unit?: string;
}

function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dimensions: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.dimensions),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}

export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification {
  readonly predefinedScalingMetricType: string;
  readonly resourceLabel?: string;
}

function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    predefined_scaling_metric_type: cdktf.stringToTerraform(struct!.predefinedScalingMetricType),
    resource_label: cdktf.stringToTerraform(struct!.resourceLabel),
  }
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

function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_scale_in: cdktf.booleanToTerraform(struct!.disableScaleIn),
    estimated_instance_warmup: cdktf.numberToTerraform(struct!.estimatedInstanceWarmup),
    scale_in_cooldown: cdktf.numberToTerraform(struct!.scaleInCooldown),
    scale_out_cooldown: cdktf.numberToTerraform(struct!.scaleOutCooldown),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
    customized_scaling_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform)(struct!.customizedScalingMetricSpecification),
    predefined_scaling_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform)(struct!.predefinedScalingMetricSpecification),
  }
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

function autoscalingplansScalingPlanScalingInstructionToTerraform(struct?: AutoscalingplansScalingPlanScalingInstruction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disable_dynamic_scaling: cdktf.booleanToTerraform(struct!.disableDynamicScaling),
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    min_capacity: cdktf.numberToTerraform(struct!.minCapacity),
    predictive_scaling_max_capacity_behavior: cdktf.stringToTerraform(struct!.predictiveScalingMaxCapacityBehavior),
    predictive_scaling_max_capacity_buffer: cdktf.numberToTerraform(struct!.predictiveScalingMaxCapacityBuffer),
    predictive_scaling_mode: cdktf.stringToTerraform(struct!.predictiveScalingMode),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    scalable_dimension: cdktf.stringToTerraform(struct!.scalableDimension),
    scaling_policy_update_behavior: cdktf.stringToTerraform(struct!.scalingPolicyUpdateBehavior),
    scheduled_action_buffer_time: cdktf.numberToTerraform(struct!.scheduledActionBufferTime),
    service_namespace: cdktf.stringToTerraform(struct!.serviceNamespace),
    customized_load_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform)(struct!.customizedLoadMetricSpecification),
    predefined_load_metric_specification: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform)(struct!.predefinedLoadMetricSpecification),
    target_tracking_configuration: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform)(struct!.targetTrackingConfiguration),
  }
}


// Resource

export class AutoscalingplansScalingPlan extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scaling_plan_version - computed: true, optional: false, required: false
  public get scalingPlanVersion() {
    return this.getNumberAttribute('scaling_plan_version');
  }

  // application_source - computed: false, optional: false, required: true
  private _applicationSource: AutoscalingplansScalingPlanApplicationSource[];
  public get applicationSource() {
    return this.interpolationForAttribute('application_source') as any;
  }
  public set applicationSource(value: AutoscalingplansScalingPlanApplicationSource[]) {
    this._applicationSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationSourceInput() {
    return this._applicationSource
  }

  // scaling_instruction - computed: false, optional: false, required: true
  private _scalingInstruction: AutoscalingplansScalingPlanScalingInstruction[];
  public get scalingInstruction() {
    return this.interpolationForAttribute('scaling_instruction') as any;
  }
  public set scalingInstruction(value: AutoscalingplansScalingPlanScalingInstruction[]) {
    this._scalingInstruction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingInstructionInput() {
    return this._scalingInstruction
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      application_source: cdktf.listMapper(autoscalingplansScalingPlanApplicationSourceToTerraform)(this._applicationSource),
      scaling_instruction: cdktf.listMapper(autoscalingplansScalingPlanScalingInstructionToTerraform)(this._scalingInstruction),
    };
  }
}
