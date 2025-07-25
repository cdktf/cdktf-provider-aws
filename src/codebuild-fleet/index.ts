/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildFleetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#base_capacity CodebuildFleet#base_capacity}
  */
  readonly baseCapacity: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#compute_type CodebuildFleet#compute_type}
  */
  readonly computeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#environment_type CodebuildFleet#environment_type}
  */
  readonly environmentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#fleet_service_role CodebuildFleet#fleet_service_role}
  */
  readonly fleetServiceRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#image_id CodebuildFleet#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#name CodebuildFleet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#overflow_behavior CodebuildFleet#overflow_behavior}
  */
  readonly overflowBehavior?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#region CodebuildFleet#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#tags CodebuildFleet#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#tags_all CodebuildFleet#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * compute_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#compute_configuration CodebuildFleet#compute_configuration}
  */
  readonly computeConfiguration?: CodebuildFleetComputeConfiguration;
  /**
  * scaling_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#scaling_configuration CodebuildFleet#scaling_configuration}
  */
  readonly scalingConfiguration?: CodebuildFleetScalingConfiguration;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#vpc_config CodebuildFleet#vpc_config}
  */
  readonly vpcConfig?: CodebuildFleetVpcConfig[] | cdktf.IResolvable;
}
export interface CodebuildFleetStatus {
}

export function codebuildFleetStatusToTerraform(struct?: CodebuildFleetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function codebuildFleetStatusToHclTerraform(struct?: CodebuildFleetStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CodebuildFleetStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildFleetStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildFleetStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context - computed: true, optional: false, required: false
  public get context() {
    return this.getStringAttribute('context');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class CodebuildFleetStatusList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildFleetStatusOutputReference {
    return new CodebuildFleetStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildFleetComputeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#disk CodebuildFleet#disk}
  */
  readonly disk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#machine_type CodebuildFleet#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#memory CodebuildFleet#memory}
  */
  readonly memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#vcpu CodebuildFleet#vcpu}
  */
  readonly vcpu?: number;
}

export function codebuildFleetComputeConfigurationToTerraform(struct?: CodebuildFleetComputeConfigurationOutputReference | CodebuildFleetComputeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk: cdktf.numberToTerraform(struct!.disk),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    memory: cdktf.numberToTerraform(struct!.memory),
    vcpu: cdktf.numberToTerraform(struct!.vcpu),
  }
}


export function codebuildFleetComputeConfigurationToHclTerraform(struct?: CodebuildFleetComputeConfigurationOutputReference | CodebuildFleetComputeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk: {
      value: cdktf.numberToHclTerraform(struct!.disk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vcpu: {
      value: cdktf.numberToHclTerraform(struct!.vcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildFleetComputeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildFleetComputeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disk !== undefined) {
      hasAnyValues = true;
      internalValueResult.disk = this._disk;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._vcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpu = this._vcpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildFleetComputeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disk = undefined;
      this._machineType = undefined;
      this._memory = undefined;
      this._vcpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disk = value.disk;
      this._machineType = value.machineType;
      this._memory = value.memory;
      this._vcpu = value.vcpu;
    }
  }

  // disk - computed: true, optional: true, required: false
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  public resetDisk() {
    this._disk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // vcpu - computed: true, optional: true, required: false
  private _vcpu?: number; 
  public get vcpu() {
    return this.getNumberAttribute('vcpu');
  }
  public set vcpu(value: number) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }
}
export interface CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#metric_type CodebuildFleet#metric_type}
  */
  readonly metricType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#target_value CodebuildFleet#target_value}
  */
  readonly targetValue?: number;
}

export function codebuildFleetScalingConfigurationTargetTrackingScalingConfigsToTerraform(struct?: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    target_value: cdktf.numberToTerraform(struct!.targetValue),
  }
}


export function codebuildFleetScalingConfigurationTargetTrackingScalingConfigsToHclTerraform(struct?: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_value: {
      value: cdktf.numberToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricType = undefined;
      this._targetValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricType = value.metricType;
      this._targetValue = value.targetValue;
    }
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // target_value - computed: false, optional: true, required: false
  private _targetValue?: number; 
  public get targetValue() {
    return this.getNumberAttribute('target_value');
  }
  public set targetValue(value: number) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }
}

export class CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList extends cdktf.ComplexList {
  public internalValue? : CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference {
    return new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CodebuildFleetScalingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#max_capacity CodebuildFleet#max_capacity}
  */
  readonly maxCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#scaling_type CodebuildFleet#scaling_type}
  */
  readonly scalingType?: string;
  /**
  * target_tracking_scaling_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#target_tracking_scaling_configs CodebuildFleet#target_tracking_scaling_configs}
  */
  readonly targetTrackingScalingConfigs?: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] | cdktf.IResolvable;
}

export function codebuildFleetScalingConfigurationToTerraform(struct?: CodebuildFleetScalingConfigurationOutputReference | CodebuildFleetScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_capacity: cdktf.numberToTerraform(struct!.maxCapacity),
    scaling_type: cdktf.stringToTerraform(struct!.scalingType),
    target_tracking_scaling_configs: cdktf.listMapper(codebuildFleetScalingConfigurationTargetTrackingScalingConfigsToTerraform, true)(struct!.targetTrackingScalingConfigs),
  }
}


export function codebuildFleetScalingConfigurationToHclTerraform(struct?: CodebuildFleetScalingConfigurationOutputReference | CodebuildFleetScalingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_capacity: {
      value: cdktf.numberToHclTerraform(struct!.maxCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_type: {
      value: cdktf.stringToHclTerraform(struct!.scalingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_tracking_scaling_configs: {
      value: cdktf.listMapperHcl(codebuildFleetScalingConfigurationTargetTrackingScalingConfigsToHclTerraform, true)(struct!.targetTrackingScalingConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildFleetScalingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CodebuildFleetScalingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCapacity = this._maxCapacity;
    }
    if (this._scalingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingType = this._scalingType;
    }
    if (this._targetTrackingScalingConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTrackingScalingConfigs = this._targetTrackingScalingConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildFleetScalingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxCapacity = undefined;
      this._scalingType = undefined;
      this._targetTrackingScalingConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxCapacity = value.maxCapacity;
      this._scalingType = value.scalingType;
      this._targetTrackingScalingConfigs.internalValue = value.targetTrackingScalingConfigs;
    }
  }

  // desired_capacity - computed: true, optional: false, required: false
  public get desiredCapacity() {
    return this.getNumberAttribute('desired_capacity');
  }

  // max_capacity - computed: false, optional: true, required: false
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  public resetMaxCapacity() {
    this._maxCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // scaling_type - computed: false, optional: true, required: false
  private _scalingType?: string; 
  public get scalingType() {
    return this.getStringAttribute('scaling_type');
  }
  public set scalingType(value: string) {
    this._scalingType = value;
  }
  public resetScalingType() {
    this._scalingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingTypeInput() {
    return this._scalingType;
  }

  // target_tracking_scaling_configs - computed: false, optional: true, required: false
  private _targetTrackingScalingConfigs = new CodebuildFleetScalingConfigurationTargetTrackingScalingConfigsList(this, "target_tracking_scaling_configs", false);
  public get targetTrackingScalingConfigs() {
    return this._targetTrackingScalingConfigs;
  }
  public putTargetTrackingScalingConfigs(value: CodebuildFleetScalingConfigurationTargetTrackingScalingConfigs[] | cdktf.IResolvable) {
    this._targetTrackingScalingConfigs.internalValue = value;
  }
  public resetTargetTrackingScalingConfigs() {
    this._targetTrackingScalingConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTrackingScalingConfigsInput() {
    return this._targetTrackingScalingConfigs.internalValue;
  }
}
export interface CodebuildFleetVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#security_group_ids CodebuildFleet#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#subnets CodebuildFleet#subnets}
  */
  readonly subnets: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#vpc_id CodebuildFleet#vpc_id}
  */
  readonly vpcId: string;
}

export function codebuildFleetVpcConfigToTerraform(struct?: CodebuildFleetVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function codebuildFleetVpcConfigToHclTerraform(struct?: CodebuildFleetVpcConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnets),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CodebuildFleetVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CodebuildFleetVpcConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CodebuildFleetVpcConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
      this._vpcId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
      this._vpcId = value.vpcId;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

export class CodebuildFleetVpcConfigList extends cdktf.ComplexList {
  public internalValue? : CodebuildFleetVpcConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CodebuildFleetVpcConfigOutputReference {
    return new CodebuildFleetVpcConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet aws_codebuild_fleet}
*/
export class CodebuildFleet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_codebuild_fleet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CodebuildFleet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CodebuildFleet to import
  * @param importFromId The id of the existing CodebuildFleet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CodebuildFleet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_codebuild_fleet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/codebuild_fleet aws_codebuild_fleet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodebuildFleetConfig
  */
  public constructor(scope: Construct, id: string, config: CodebuildFleetConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_fleet',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseCapacity = config.baseCapacity;
    this._computeType = config.computeType;
    this._environmentType = config.environmentType;
    this._fleetServiceRole = config.fleetServiceRole;
    this._imageId = config.imageId;
    this._name = config.name;
    this._overflowBehavior = config.overflowBehavior;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._computeConfiguration.internalValue = config.computeConfiguration;
    this._scalingConfiguration.internalValue = config.scalingConfiguration;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_capacity - computed: false, optional: false, required: true
  private _baseCapacity?: number; 
  public get baseCapacity() {
    return this.getNumberAttribute('base_capacity');
  }
  public set baseCapacity(value: number) {
    this._baseCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseCapacityInput() {
    return this._baseCapacity;
  }

  // compute_type - computed: false, optional: false, required: true
  private _computeType?: string; 
  public get computeType() {
    return this.getStringAttribute('compute_type');
  }
  public set computeType(value: string) {
    this._computeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeTypeInput() {
    return this._computeType;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // environment_type - computed: false, optional: false, required: true
  private _environmentType?: string; 
  public get environmentType() {
    return this.getStringAttribute('environment_type');
  }
  public set environmentType(value: string) {
    this._environmentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentTypeInput() {
    return this._environmentType;
  }

  // fleet_service_role - computed: false, optional: true, required: false
  private _fleetServiceRole?: string; 
  public get fleetServiceRole() {
    return this.getStringAttribute('fleet_service_role');
  }
  public set fleetServiceRole(value: string) {
    this._fleetServiceRole = value;
  }
  public resetFleetServiceRole() {
    this._fleetServiceRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetServiceRoleInput() {
    return this._fleetServiceRole;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overflow_behavior - computed: true, optional: true, required: false
  private _overflowBehavior?: string; 
  public get overflowBehavior() {
    return this.getStringAttribute('overflow_behavior');
  }
  public set overflowBehavior(value: string) {
    this._overflowBehavior = value;
  }
  public resetOverflowBehavior() {
    this._overflowBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overflowBehaviorInput() {
    return this._overflowBehavior;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  private _status = new CodebuildFleetStatusList(this, "status", true);
  public get status() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // compute_configuration - computed: false, optional: true, required: false
  private _computeConfiguration = new CodebuildFleetComputeConfigurationOutputReference(this, "compute_configuration");
  public get computeConfiguration() {
    return this._computeConfiguration;
  }
  public putComputeConfiguration(value: CodebuildFleetComputeConfiguration) {
    this._computeConfiguration.internalValue = value;
  }
  public resetComputeConfiguration() {
    this._computeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeConfigurationInput() {
    return this._computeConfiguration.internalValue;
  }

  // scaling_configuration - computed: false, optional: true, required: false
  private _scalingConfiguration = new CodebuildFleetScalingConfigurationOutputReference(this, "scaling_configuration");
  public get scalingConfiguration() {
    return this._scalingConfiguration;
  }
  public putScalingConfiguration(value: CodebuildFleetScalingConfiguration) {
    this._scalingConfiguration.internalValue = value;
  }
  public resetScalingConfiguration() {
    this._scalingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingConfigurationInput() {
    return this._scalingConfiguration.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new CodebuildFleetVpcConfigList(this, "vpc_config", false);
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: CodebuildFleetVpcConfig[] | cdktf.IResolvable) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_capacity: cdktf.numberToTerraform(this._baseCapacity),
      compute_type: cdktf.stringToTerraform(this._computeType),
      environment_type: cdktf.stringToTerraform(this._environmentType),
      fleet_service_role: cdktf.stringToTerraform(this._fleetServiceRole),
      image_id: cdktf.stringToTerraform(this._imageId),
      name: cdktf.stringToTerraform(this._name),
      overflow_behavior: cdktf.stringToTerraform(this._overflowBehavior),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      compute_configuration: codebuildFleetComputeConfigurationToTerraform(this._computeConfiguration.internalValue),
      scaling_configuration: codebuildFleetScalingConfigurationToTerraform(this._scalingConfiguration.internalValue),
      vpc_config: cdktf.listMapper(codebuildFleetVpcConfigToTerraform, true)(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_capacity: {
        value: cdktf.numberToHclTerraform(this._baseCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compute_type: {
        value: cdktf.stringToHclTerraform(this._computeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_type: {
        value: cdktf.stringToHclTerraform(this._environmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleet_service_role: {
        value: cdktf.stringToHclTerraform(this._fleetServiceRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overflow_behavior: {
        value: cdktf.stringToHclTerraform(this._overflowBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      compute_configuration: {
        value: codebuildFleetComputeConfigurationToHclTerraform(this._computeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildFleetComputeConfigurationList",
      },
      scaling_configuration: {
        value: codebuildFleetScalingConfigurationToHclTerraform(this._scalingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildFleetScalingConfigurationList",
      },
      vpc_config: {
        value: cdktf.listMapperHcl(codebuildFleetVpcConfigToHclTerraform, true)(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CodebuildFleetVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
