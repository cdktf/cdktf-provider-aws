/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#cluster EcsService#cluster}
  */
  readonly cluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#deployment_maximum_percent EcsService#deployment_maximum_percent}
  */
  readonly deploymentMaximumPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}
  */
  readonly deploymentMinimumHealthyPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#desired_count EcsService#desired_count}
  */
  readonly desiredCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#enable_execute_command EcsService#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#force_new_deployment EcsService#force_new_deployment}
  */
  readonly forceNewDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
  */
  readonly healthCheckGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#iam_role EcsService#iam_role}
  */
  readonly iamRole?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#id EcsService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#launch_type EcsService#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#name EcsService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#platform_version EcsService#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#propagate_tags EcsService#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#scheduling_strategy EcsService#scheduling_strategy}
  */
  readonly schedulingStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#tags EcsService#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#tags_all EcsService#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#task_definition EcsService#task_definition}
  */
  readonly taskDefinition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#triggers EcsService#triggers}
  */
  readonly triggers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#wait_for_steady_state EcsService#wait_for_steady_state}
  */
  readonly waitForSteadyState?: boolean | cdktf.IResolvable;
  /**
  * alarms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#alarms EcsService#alarms}
  */
  readonly alarms?: EcsServiceAlarms;
  /**
  * capacity_provider_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#capacity_provider_strategy EcsService#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable;
  /**
  * deployment_circuit_breaker block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
  */
  readonly deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker;
  /**
  * deployment_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#deployment_controller EcsService#deployment_controller}
  */
  readonly deploymentController?: EcsServiceDeploymentController;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#load_balancer EcsService#load_balancer}
  */
  readonly loadBalancer?: EcsServiceLoadBalancer[] | cdktf.IResolvable;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#network_configuration EcsService#network_configuration}
  */
  readonly networkConfiguration?: EcsServiceNetworkConfiguration;
  /**
  * ordered_placement_strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#ordered_placement_strategy EcsService#ordered_placement_strategy}
  */
  readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[] | cdktf.IResolvable;
  /**
  * placement_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#placement_constraints EcsService#placement_constraints}
  */
  readonly placementConstraints?: EcsServicePlacementConstraints[] | cdktf.IResolvable;
  /**
  * service_connect_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#service_connect_configuration EcsService#service_connect_configuration}
  */
  readonly serviceConnectConfiguration?: EcsServiceServiceConnectConfiguration;
  /**
  * service_registries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#service_registries EcsService#service_registries}
  */
  readonly serviceRegistries?: EcsServiceServiceRegistries;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#timeouts EcsService#timeouts}
  */
  readonly timeouts?: EcsServiceTimeouts;
  /**
  * volume_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#volume_configuration EcsService#volume_configuration}
  */
  readonly volumeConfiguration?: EcsServiceVolumeConfiguration;
}
export interface EcsServiceAlarms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#alarm_names EcsService#alarm_names}
  */
  readonly alarmNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#enable EcsService#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#rollback EcsService#rollback}
  */
  readonly rollback: boolean | cdktf.IResolvable;
}

export function ecsServiceAlarmsToTerraform(struct?: EcsServiceAlarmsOutputReference | EcsServiceAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarmNames),
    enable: cdktf.booleanToTerraform(struct!.enable),
    rollback: cdktf.booleanToTerraform(struct!.rollback),
  }
}


export function ecsServiceAlarmsToHclTerraform(struct?: EcsServiceAlarmsOutputReference | EcsServiceAlarms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alarm_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alarmNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollback: {
      value: cdktf.booleanToHclTerraform(struct!.rollback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceAlarmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceAlarms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmNames = this._alarmNames;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceAlarms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarmNames = undefined;
      this._enable = undefined;
      this._rollback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarmNames = value.alarmNames;
      this._enable = value.enable;
      this._rollback = value.rollback;
    }
  }

  // alarm_names - computed: false, optional: false, required: true
  private _alarmNames?: string[]; 
  public get alarmNames() {
    return cdktf.Fn.tolist(this.getListAttribute('alarm_names'));
  }
  public set alarmNames(value: string[]) {
    this._alarmNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNamesInput() {
    return this._alarmNames;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rollback - computed: false, optional: false, required: true
  private _rollback?: boolean | cdktf.IResolvable; 
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
  public set rollback(value: boolean | cdktf.IResolvable) {
    this._rollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }
}
export interface EcsServiceCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#base EcsService#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#capacity_provider EcsService#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#weight EcsService#weight}
  */
  readonly weight?: number;
}

export function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base: cdktf.numberToTerraform(struct!.base),
    capacity_provider: cdktf.stringToTerraform(struct!.capacityProvider),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function ecsServiceCapacityProviderStrategyToHclTerraform(struct?: EcsServiceCapacityProviderStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base: {
      value: cdktf.numberToHclTerraform(struct!.base),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_provider: {
      value: cdktf.stringToHclTerraform(struct!.capacityProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServiceCapacityProviderStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base !== undefined) {
      hasAnyValues = true;
      internalValueResult.base = this._base;
    }
    if (this._capacityProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProvider = this._capacityProvider;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceCapacityProviderStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._base = undefined;
      this._capacityProvider = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._base = value.base;
      this._capacityProvider = value.capacityProvider;
      this._weight = value.weight;
    }
  }

  // base - computed: false, optional: true, required: false
  private _base?: number; 
  public get base() {
    return this.getNumberAttribute('base');
  }
  public set base(value: number) {
    this._base = value;
  }
  public resetBase() {
    this._base = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseInput() {
    return this._base;
  }

  // capacity_provider - computed: false, optional: false, required: true
  private _capacityProvider?: string; 
  public get capacityProvider() {
    return this.getStringAttribute('capacity_provider');
  }
  public set capacityProvider(value: string) {
    this._capacityProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderInput() {
    return this._capacityProvider;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class EcsServiceCapacityProviderStrategyList extends cdktf.ComplexList {
  public internalValue? : EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable

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
  public get(index: number): EcsServiceCapacityProviderStrategyOutputReference {
    return new EcsServiceCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceDeploymentCircuitBreaker {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#enable EcsService#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#rollback EcsService#rollback}
  */
  readonly rollback: boolean | cdktf.IResolvable;
}

export function ecsServiceDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentCircuitBreakerOutputReference | EcsServiceDeploymentCircuitBreaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    rollback: cdktf.booleanToTerraform(struct!.rollback),
  }
}


export function ecsServiceDeploymentCircuitBreakerToHclTerraform(struct?: EcsServiceDeploymentCircuitBreakerOutputReference | EcsServiceDeploymentCircuitBreaker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rollback: {
      value: cdktf.booleanToHclTerraform(struct!.rollback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceDeploymentCircuitBreakerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceDeploymentCircuitBreaker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._rollback !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollback = this._rollback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceDeploymentCircuitBreaker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._rollback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._rollback = value.rollback;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // rollback - computed: false, optional: false, required: true
  private _rollback?: boolean | cdktf.IResolvable; 
  public get rollback() {
    return this.getBooleanAttribute('rollback');
  }
  public set rollback(value: boolean | cdktf.IResolvable) {
    this._rollback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rollbackInput() {
    return this._rollback;
  }
}
export interface EcsServiceDeploymentController {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#type EcsService#type}
  */
  readonly type?: string;
}

export function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentControllerOutputReference | EcsServiceDeploymentController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ecsServiceDeploymentControllerToHclTerraform(struct?: EcsServiceDeploymentControllerOutputReference | EcsServiceDeploymentController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceDeploymentControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceDeploymentController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceDeploymentController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface EcsServiceLoadBalancer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#container_name EcsService#container_name}
  */
  readonly containerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#container_port EcsService#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#elb_name EcsService#elb_name}
  */
  readonly elbName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#target_group_arn EcsService#target_group_arn}
  */
  readonly targetGroupArn?: string;
}

export function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    elb_name: cdktf.stringToTerraform(struct!.elbName),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
  }
}


export function ecsServiceLoadBalancerToHclTerraform(struct?: EcsServiceLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    elb_name: {
      value: cdktf.stringToHclTerraform(struct!.elbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServiceLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._elbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.elbName = this._elbName;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._containerPort = undefined;
      this._elbName = undefined;
      this._targetGroupArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._containerPort = value.containerPort;
      this._elbName = value.elbName;
      this._targetGroupArn = value.targetGroupArn;
    }
  }

  // container_name - computed: false, optional: false, required: true
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // elb_name - computed: false, optional: true, required: false
  private _elbName?: string; 
  public get elbName() {
    return this.getStringAttribute('elb_name');
  }
  public set elbName(value: string) {
    this._elbName = value;
  }
  public resetElbName() {
    this._elbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elbNameInput() {
    return this._elbName;
  }

  // target_group_arn - computed: false, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }
}

export class EcsServiceLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : EcsServiceLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): EcsServiceLoadBalancerOutputReference {
    return new EcsServiceLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#assign_public_ip EcsService#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#security_groups EcsService#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#subnets EcsService#subnets}
  */
  readonly subnets: string[];
}

export function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfigurationOutputReference | EcsServiceNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}


export function ecsServiceNetworkConfigurationToHclTerraform(struct?: EcsServiceNetworkConfigurationOutputReference | EcsServiceNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignPublicIp = undefined;
      this._securityGroups = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignPublicIp = value.assignPublicIp;
      this._securityGroups = value.securityGroups;
      this._subnets = value.subnets;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
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
}
export interface EcsServiceOrderedPlacementStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#field EcsService#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#type EcsService#type}
  */
  readonly type: string;
}

export function ecsServiceOrderedPlacementStrategyToTerraform(struct?: EcsServiceOrderedPlacementStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ecsServiceOrderedPlacementStrategyToHclTerraform(struct?: EcsServiceOrderedPlacementStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceOrderedPlacementStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServiceOrderedPlacementStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceOrderedPlacementStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._field = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._field = value.field;
      this._type = value.type;
    }
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EcsServiceOrderedPlacementStrategyList extends cdktf.ComplexList {
  public internalValue? : EcsServiceOrderedPlacementStrategy[] | cdktf.IResolvable

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
  public get(index: number): EcsServiceOrderedPlacementStrategyOutputReference {
    return new EcsServiceOrderedPlacementStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServicePlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#expression EcsService#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#type EcsService#type}
  */
  readonly type: string;
}

export function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function ecsServicePlacementConstraintsToHclTerraform(struct?: EcsServicePlacementConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServicePlacementConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServicePlacementConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServicePlacementConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expression = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expression = value.expression;
      this._type = value.type;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EcsServicePlacementConstraintsList extends cdktf.ComplexList {
  public internalValue? : EcsServicePlacementConstraints[] | cdktf.IResolvable

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
  public get(index: number): EcsServicePlacementConstraintsOutputReference {
    return new EcsServicePlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceServiceConnectConfigurationLogConfigurationSecretOption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#name EcsService#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#value_from EcsService#value_from}
  */
  readonly valueFrom: string;
}

export function ecsServiceServiceConnectConfigurationLogConfigurationSecretOptionToTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value_from: cdktf.stringToTerraform(struct!.valueFrom),
  }
}


export function ecsServiceServiceConnectConfigurationLogConfigurationSecretOptionToHclTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: cdktf.stringToHclTerraform(struct!.valueFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._valueFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._valueFrom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._valueFrom = value.valueFrom;
    }
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

  // value_from - computed: false, optional: false, required: true
  private _valueFrom?: string; 
  public get valueFrom() {
    return this.getStringAttribute('value_from');
  }
  public set valueFrom(value: string) {
    this._valueFrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom;
  }
}

export class EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList extends cdktf.ComplexList {
  public internalValue? : EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[] | cdktf.IResolvable

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
  public get(index: number): EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference {
    return new EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceServiceConnectConfigurationLogConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#log_driver EcsService#log_driver}
  */
  readonly logDriver: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#options EcsService#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * secret_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#secret_option EcsService#secret_option}
  */
  readonly secretOption?: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[] | cdktf.IResolvable;
}

export function ecsServiceServiceConnectConfigurationLogConfigurationToTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationOutputReference | EcsServiceServiceConnectConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_driver: cdktf.stringToTerraform(struct!.logDriver),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    secret_option: cdktf.listMapper(ecsServiceServiceConnectConfigurationLogConfigurationSecretOptionToTerraform, true)(struct!.secretOption),
  }
}


export function ecsServiceServiceConnectConfigurationLogConfigurationToHclTerraform(struct?: EcsServiceServiceConnectConfigurationLogConfigurationOutputReference | EcsServiceServiceConnectConfigurationLogConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_driver: {
      value: cdktf.stringToHclTerraform(struct!.logDriver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_option: {
      value: cdktf.listMapperHcl(ecsServiceServiceConnectConfigurationLogConfigurationSecretOptionToHclTerraform, true)(struct!.secretOption),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationLogConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceServiceConnectConfigurationLogConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDriver = this._logDriver;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._secretOption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretOption = this._secretOption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfigurationLogConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logDriver = undefined;
      this._options = undefined;
      this._secretOption.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logDriver = value.logDriver;
      this._options = value.options;
      this._secretOption.internalValue = value.secretOption;
    }
  }

  // log_driver - computed: false, optional: false, required: true
  private _logDriver?: string; 
  public get logDriver() {
    return this.getStringAttribute('log_driver');
  }
  public set logDriver(value: string) {
    this._logDriver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logDriverInput() {
    return this._logDriver;
  }

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // secret_option - computed: false, optional: true, required: false
  private _secretOption = new EcsServiceServiceConnectConfigurationLogConfigurationSecretOptionList(this, "secret_option", false);
  public get secretOption() {
    return this._secretOption;
  }
  public putSecretOption(value: EcsServiceServiceConnectConfigurationLogConfigurationSecretOption[] | cdktf.IResolvable) {
    this._secretOption.internalValue = value;
  }
  public resetSecretOption() {
    this._secretOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretOptionInput() {
    return this._secretOption.internalValue;
  }
}
export interface EcsServiceServiceConnectConfigurationServiceClientAlias {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#dns_name EcsService#dns_name}
  */
  readonly dnsName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#port EcsService#port}
  */
  readonly port: number;
}

export function ecsServiceServiceConnectConfigurationServiceClientAliasToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference | EcsServiceServiceConnectConfigurationServiceClientAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function ecsServiceServiceConnectConfigurationServiceClientAliasToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference | EcsServiceServiceConnectConfigurationServiceClientAlias): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceServiceConnectConfigurationServiceClientAlias | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfigurationServiceClientAlias | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._port = value.port;
    }
  }

  // dns_name - computed: false, optional: true, required: false
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  public resetDnsName() {
    this._dnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface EcsServiceServiceConnectConfigurationServiceTimeout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#idle_timeout_seconds EcsService#idle_timeout_seconds}
  */
  readonly idleTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#per_request_timeout_seconds EcsService#per_request_timeout_seconds}
  */
  readonly perRequestTimeoutSeconds?: number;
}

export function ecsServiceServiceConnectConfigurationServiceTimeoutToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference | EcsServiceServiceConnectConfigurationServiceTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle_timeout_seconds: cdktf.numberToTerraform(struct!.idleTimeoutSeconds),
    per_request_timeout_seconds: cdktf.numberToTerraform(struct!.perRequestTimeoutSeconds),
  }
}


export function ecsServiceServiceConnectConfigurationServiceTimeoutToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference | EcsServiceServiceConnectConfigurationServiceTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_request_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.perRequestTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceServiceConnectConfigurationServiceTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idleTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeoutSeconds = this._idleTimeoutSeconds;
    }
    if (this._perRequestTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequestTimeoutSeconds = this._perRequestTimeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfigurationServiceTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idleTimeoutSeconds = undefined;
      this._perRequestTimeoutSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idleTimeoutSeconds = value.idleTimeoutSeconds;
      this._perRequestTimeoutSeconds = value.perRequestTimeoutSeconds;
    }
  }

  // idle_timeout_seconds - computed: false, optional: true, required: false
  private _idleTimeoutSeconds?: number; 
  public get idleTimeoutSeconds() {
    return this.getNumberAttribute('idle_timeout_seconds');
  }
  public set idleTimeoutSeconds(value: number) {
    this._idleTimeoutSeconds = value;
  }
  public resetIdleTimeoutSeconds() {
    this._idleTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutSecondsInput() {
    return this._idleTimeoutSeconds;
  }

  // per_request_timeout_seconds - computed: false, optional: true, required: false
  private _perRequestTimeoutSeconds?: number; 
  public get perRequestTimeoutSeconds() {
    return this.getNumberAttribute('per_request_timeout_seconds');
  }
  public set perRequestTimeoutSeconds(value: number) {
    this._perRequestTimeoutSeconds = value;
  }
  public resetPerRequestTimeoutSeconds() {
    this._perRequestTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestTimeoutSecondsInput() {
    return this._perRequestTimeoutSeconds;
  }
}
export interface EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#aws_pca_authority_arn EcsService#aws_pca_authority_arn}
  */
  readonly awsPcaAuthorityArn: string;
}

export function ecsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference | EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_pca_authority_arn: cdktf.stringToTerraform(struct!.awsPcaAuthorityArn),
  }
}


export function ecsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference | EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_pca_authority_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsPcaAuthorityArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsPcaAuthorityArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsPcaAuthorityArn = this._awsPcaAuthorityArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsPcaAuthorityArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsPcaAuthorityArn = value.awsPcaAuthorityArn;
    }
  }

  // aws_pca_authority_arn - computed: false, optional: false, required: true
  private _awsPcaAuthorityArn?: string; 
  public get awsPcaAuthorityArn() {
    return this.getStringAttribute('aws_pca_authority_arn');
  }
  public set awsPcaAuthorityArn(value: string) {
    this._awsPcaAuthorityArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPcaAuthorityArnInput() {
    return this._awsPcaAuthorityArn;
  }
}
export interface EcsServiceServiceConnectConfigurationServiceTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#kms_key EcsService#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#role_arn EcsService#role_arn}
  */
  readonly roleArn?: string;
  /**
  * issuer_cert_authority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#issuer_cert_authority EcsService#issuer_cert_authority}
  */
  readonly issuerCertAuthority: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority;
}

export function ecsServiceServiceConnectConfigurationServiceTlsToTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsOutputReference | EcsServiceServiceConnectConfigurationServiceTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    issuer_cert_authority: ecsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityToTerraform(struct!.issuerCertAuthority),
  }
}


export function ecsServiceServiceConnectConfigurationServiceTlsToHclTerraform(struct?: EcsServiceServiceConnectConfigurationServiceTlsOutputReference | EcsServiceServiceConnectConfigurationServiceTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_cert_authority: {
      value: ecsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityToHclTerraform(struct!.issuerCertAuthority),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationServiceTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceServiceConnectConfigurationServiceTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._issuerCertAuthority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerCertAuthority = this._issuerCertAuthority?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfigurationServiceTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
      this._roleArn = undefined;
      this._issuerCertAuthority.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
      this._roleArn = value.roleArn;
      this._issuerCertAuthority.internalValue = value.issuerCertAuthority;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // issuer_cert_authority - computed: false, optional: false, required: true
  private _issuerCertAuthority = new EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthorityOutputReference(this, "issuer_cert_authority");
  public get issuerCertAuthority() {
    return this._issuerCertAuthority;
  }
  public putIssuerCertAuthority(value: EcsServiceServiceConnectConfigurationServiceTlsIssuerCertAuthority) {
    this._issuerCertAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerCertAuthorityInput() {
    return this._issuerCertAuthority.internalValue;
  }
}
export interface EcsServiceServiceConnectConfigurationService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#discovery_name EcsService#discovery_name}
  */
  readonly discoveryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#ingress_port_override EcsService#ingress_port_override}
  */
  readonly ingressPortOverride?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#port_name EcsService#port_name}
  */
  readonly portName: string;
  /**
  * client_alias block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#client_alias EcsService#client_alias}
  */
  readonly clientAlias?: EcsServiceServiceConnectConfigurationServiceClientAlias;
  /**
  * timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#timeout EcsService#timeout}
  */
  readonly timeout?: EcsServiceServiceConnectConfigurationServiceTimeout;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#tls EcsService#tls}
  */
  readonly tls?: EcsServiceServiceConnectConfigurationServiceTls;
}

export function ecsServiceServiceConnectConfigurationServiceToTerraform(struct?: EcsServiceServiceConnectConfigurationService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discovery_name: cdktf.stringToTerraform(struct!.discoveryName),
    ingress_port_override: cdktf.numberToTerraform(struct!.ingressPortOverride),
    port_name: cdktf.stringToTerraform(struct!.portName),
    client_alias: ecsServiceServiceConnectConfigurationServiceClientAliasToTerraform(struct!.clientAlias),
    timeout: ecsServiceServiceConnectConfigurationServiceTimeoutToTerraform(struct!.timeout),
    tls: ecsServiceServiceConnectConfigurationServiceTlsToTerraform(struct!.tls),
  }
}


export function ecsServiceServiceConnectConfigurationServiceToHclTerraform(struct?: EcsServiceServiceConnectConfigurationService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discovery_name: {
      value: cdktf.stringToHclTerraform(struct!.discoveryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_port_override: {
      value: cdktf.numberToHclTerraform(struct!.ingressPortOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_alias: {
      value: ecsServiceServiceConnectConfigurationServiceClientAliasToHclTerraform(struct!.clientAlias),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceServiceConnectConfigurationServiceClientAliasList",
    },
    timeout: {
      value: ecsServiceServiceConnectConfigurationServiceTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceServiceConnectConfigurationServiceTimeoutList",
    },
    tls: {
      value: ecsServiceServiceConnectConfigurationServiceTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceServiceConnectConfigurationServiceTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EcsServiceServiceConnectConfigurationService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoveryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryName = this._discoveryName;
    }
    if (this._ingressPortOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPortOverride = this._ingressPortOverride;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._clientAlias?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAlias = this._clientAlias?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfigurationService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoveryName = undefined;
      this._ingressPortOverride = undefined;
      this._portName = undefined;
      this._clientAlias.internalValue = undefined;
      this._timeout.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoveryName = value.discoveryName;
      this._ingressPortOverride = value.ingressPortOverride;
      this._portName = value.portName;
      this._clientAlias.internalValue = value.clientAlias;
      this._timeout.internalValue = value.timeout;
      this._tls.internalValue = value.tls;
    }
  }

  // discovery_name - computed: false, optional: true, required: false
  private _discoveryName?: string; 
  public get discoveryName() {
    return this.getStringAttribute('discovery_name');
  }
  public set discoveryName(value: string) {
    this._discoveryName = value;
  }
  public resetDiscoveryName() {
    this._discoveryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryNameInput() {
    return this._discoveryName;
  }

  // ingress_port_override - computed: false, optional: true, required: false
  private _ingressPortOverride?: number; 
  public get ingressPortOverride() {
    return this.getNumberAttribute('ingress_port_override');
  }
  public set ingressPortOverride(value: number) {
    this._ingressPortOverride = value;
  }
  public resetIngressPortOverride() {
    this._ingressPortOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPortOverrideInput() {
    return this._ingressPortOverride;
  }

  // port_name - computed: false, optional: false, required: true
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // client_alias - computed: false, optional: true, required: false
  private _clientAlias = new EcsServiceServiceConnectConfigurationServiceClientAliasOutputReference(this, "client_alias");
  public get clientAlias() {
    return this._clientAlias;
  }
  public putClientAlias(value: EcsServiceServiceConnectConfigurationServiceClientAlias) {
    this._clientAlias.internalValue = value;
  }
  public resetClientAlias() {
    this._clientAlias.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAliasInput() {
    return this._clientAlias.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new EcsServiceServiceConnectConfigurationServiceTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: EcsServiceServiceConnectConfigurationServiceTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new EcsServiceServiceConnectConfigurationServiceTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: EcsServiceServiceConnectConfigurationServiceTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class EcsServiceServiceConnectConfigurationServiceList extends cdktf.ComplexList {
  public internalValue? : EcsServiceServiceConnectConfigurationService[] | cdktf.IResolvable

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
  public get(index: number): EcsServiceServiceConnectConfigurationServiceOutputReference {
    return new EcsServiceServiceConnectConfigurationServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EcsServiceServiceConnectConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#enabled EcsService#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#namespace EcsService#namespace}
  */
  readonly namespace?: string;
  /**
  * log_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#log_configuration EcsService#log_configuration}
  */
  readonly logConfiguration?: EcsServiceServiceConnectConfigurationLogConfiguration;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#service EcsService#service}
  */
  readonly service?: EcsServiceServiceConnectConfigurationService[] | cdktf.IResolvable;
}

export function ecsServiceServiceConnectConfigurationToTerraform(struct?: EcsServiceServiceConnectConfigurationOutputReference | EcsServiceServiceConnectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    log_configuration: ecsServiceServiceConnectConfigurationLogConfigurationToTerraform(struct!.logConfiguration),
    service: cdktf.listMapper(ecsServiceServiceConnectConfigurationServiceToTerraform, true)(struct!.service),
  }
}


export function ecsServiceServiceConnectConfigurationToHclTerraform(struct?: EcsServiceServiceConnectConfigurationOutputReference | EcsServiceServiceConnectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_configuration: {
      value: ecsServiceServiceConnectConfigurationLogConfigurationToHclTerraform(struct!.logConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceServiceConnectConfigurationLogConfigurationList",
    },
    service: {
      value: cdktf.listMapperHcl(ecsServiceServiceConnectConfigurationServiceToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceServiceConnectConfigurationServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceConnectConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceServiceConnectConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._logConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logConfiguration = this._logConfiguration?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceConnectConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._namespace = undefined;
      this._logConfiguration.internalValue = undefined;
      this._service.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._namespace = value.namespace;
      this._logConfiguration.internalValue = value.logConfiguration;
      this._service.internalValue = value.service;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // log_configuration - computed: false, optional: true, required: false
  private _logConfiguration = new EcsServiceServiceConnectConfigurationLogConfigurationOutputReference(this, "log_configuration");
  public get logConfiguration() {
    return this._logConfiguration;
  }
  public putLogConfiguration(value: EcsServiceServiceConnectConfigurationLogConfiguration) {
    this._logConfiguration.internalValue = value;
  }
  public resetLogConfiguration() {
    this._logConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigurationInput() {
    return this._logConfiguration.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new EcsServiceServiceConnectConfigurationServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: EcsServiceServiceConnectConfigurationService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }
}
export interface EcsServiceServiceRegistries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#container_name EcsService#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#container_port EcsService#container_port}
  */
  readonly containerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#port EcsService#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#registry_arn EcsService#registry_arn}
  */
  readonly registryArn: string;
}

export function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistriesOutputReference | EcsServiceServiceRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    port: cdktf.numberToTerraform(struct!.port),
    registry_arn: cdktf.stringToTerraform(struct!.registryArn),
  }
}


export function ecsServiceServiceRegistriesToHclTerraform(struct?: EcsServiceServiceRegistriesOutputReference | EcsServiceServiceRegistries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registry_arn: {
      value: cdktf.stringToHclTerraform(struct!.registryArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceServiceRegistriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceServiceRegistries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._registryArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryArn = this._registryArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceServiceRegistries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerName = undefined;
      this._containerPort = undefined;
      this._port = undefined;
      this._registryArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerName = value.containerName;
      this._containerPort = value.containerPort;
      this._port = value.port;
      this._registryArn = value.registryArn;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // registry_arn - computed: false, optional: false, required: true
  private _registryArn?: string; 
  public get registryArn() {
    return this.getStringAttribute('registry_arn');
  }
  public set registryArn(value: string) {
    this._registryArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryArnInput() {
    return this._registryArn;
  }
}
export interface EcsServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#create EcsService#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#delete EcsService#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#update EcsService#update}
  */
  readonly update?: string;
}

export function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function ecsServiceTimeoutsToHclTerraform(struct?: EcsServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EcsServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface EcsServiceVolumeConfigurationManagedEbsVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#encrypted EcsService#encrypted}
  */
  readonly encrypted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#file_system_type EcsService#file_system_type}
  */
  readonly fileSystemType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#iops EcsService#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#kms_key_id EcsService#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#role_arn EcsService#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#size_in_gb EcsService#size_in_gb}
  */
  readonly sizeInGb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#snapshot_id EcsService#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#throughput EcsService#throughput}
  */
  readonly throughput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#volume_type EcsService#volume_type}
  */
  readonly volumeType?: string;
}

export function ecsServiceVolumeConfigurationManagedEbsVolumeToTerraform(struct?: EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference | EcsServiceVolumeConfigurationManagedEbsVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.booleanToTerraform(struct!.encrypted),
    file_system_type: cdktf.stringToTerraform(struct!.fileSystemType),
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput: cdktf.stringToTerraform(struct!.throughput),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function ecsServiceVolumeConfigurationManagedEbsVolumeToHclTerraform(struct?: EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference | EcsServiceVolumeConfigurationManagedEbsVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_system_type: {
      value: cdktf.stringToHclTerraform(struct!.fileSystemType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_gb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.stringToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceVolumeConfigurationManagedEbsVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._fileSystemType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemType = this._fileSystemType;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sizeInGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInGb = this._sizeInGb;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceVolumeConfigurationManagedEbsVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encrypted = undefined;
      this._fileSystemType = undefined;
      this._iops = undefined;
      this._kmsKeyId = undefined;
      this._roleArn = undefined;
      this._sizeInGb = undefined;
      this._snapshotId = undefined;
      this._throughput = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encrypted = value.encrypted;
      this._fileSystemType = value.fileSystemType;
      this._iops = value.iops;
      this._kmsKeyId = value.kmsKeyId;
      this._roleArn = value.roleArn;
      this._sizeInGb = value.sizeInGb;
      this._snapshotId = value.snapshotId;
      this._throughput = value.throughput;
      this._volumeType = value.volumeType;
    }
  }

  // encrypted - computed: false, optional: true, required: false
  private _encrypted?: boolean | cdktf.IResolvable; 
  public get encrypted() {
    return this.getBooleanAttribute('encrypted');
  }
  public set encrypted(value: boolean | cdktf.IResolvable) {
    this._encrypted = value;
  }
  public resetEncrypted() {
    this._encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // file_system_type - computed: false, optional: true, required: false
  private _fileSystemType?: string; 
  public get fileSystemType() {
    return this.getStringAttribute('file_system_type');
  }
  public set fileSystemType(value: string) {
    this._fileSystemType = value;
  }
  public resetFileSystemType() {
    this._fileSystemType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemTypeInput() {
    return this._fileSystemType;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // size_in_gb - computed: false, optional: true, required: false
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  public resetSizeInGb() {
    this._sizeInGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb;
  }

  // snapshot_id - computed: false, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput - computed: false, optional: true, required: false
  private _throughput?: string; 
  public get throughput() {
    return this.getStringAttribute('throughput');
  }
  public set throughput(value: string) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface EcsServiceVolumeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#name EcsService#name}
  */
  readonly name: string;
  /**
  * managed_ebs_volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#managed_ebs_volume EcsService#managed_ebs_volume}
  */
  readonly managedEbsVolume: EcsServiceVolumeConfigurationManagedEbsVolume;
}

export function ecsServiceVolumeConfigurationToTerraform(struct?: EcsServiceVolumeConfigurationOutputReference | EcsServiceVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    managed_ebs_volume: ecsServiceVolumeConfigurationManagedEbsVolumeToTerraform(struct!.managedEbsVolume),
  }
}


export function ecsServiceVolumeConfigurationToHclTerraform(struct?: EcsServiceVolumeConfigurationOutputReference | EcsServiceVolumeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_ebs_volume: {
      value: ecsServiceVolumeConfigurationManagedEbsVolumeToHclTerraform(struct!.managedEbsVolume),
      isBlock: true,
      type: "list",
      storageClassType: "EcsServiceVolumeConfigurationManagedEbsVolumeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EcsServiceVolumeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EcsServiceVolumeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._managedEbsVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedEbsVolume = this._managedEbsVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EcsServiceVolumeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._managedEbsVolume.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._managedEbsVolume.internalValue = value.managedEbsVolume;
    }
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

  // managed_ebs_volume - computed: false, optional: false, required: true
  private _managedEbsVolume = new EcsServiceVolumeConfigurationManagedEbsVolumeOutputReference(this, "managed_ebs_volume");
  public get managedEbsVolume() {
    return this._managedEbsVolume;
  }
  public putManagedEbsVolume(value: EcsServiceVolumeConfigurationManagedEbsVolume) {
    this._managedEbsVolume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedEbsVolumeInput() {
    return this._managedEbsVolume.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service aws_ecs_service}
*/
export class EcsService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ecs_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsService to import
  * @param importFromId The id of the existing EcsService that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_ecs_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.52.0/docs/resources/ecs_service aws_ecs_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsServiceConfig
  */
  public constructor(scope: Construct, id: string, config: EcsServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ecs_service',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.52.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cluster = config.cluster;
    this._deploymentMaximumPercent = config.deploymentMaximumPercent;
    this._deploymentMinimumHealthyPercent = config.deploymentMinimumHealthyPercent;
    this._desiredCount = config.desiredCount;
    this._enableEcsManagedTags = config.enableEcsManagedTags;
    this._enableExecuteCommand = config.enableExecuteCommand;
    this._forceNewDeployment = config.forceNewDeployment;
    this._healthCheckGracePeriodSeconds = config.healthCheckGracePeriodSeconds;
    this._iamRole = config.iamRole;
    this._id = config.id;
    this._launchType = config.launchType;
    this._name = config.name;
    this._platformVersion = config.platformVersion;
    this._propagateTags = config.propagateTags;
    this._schedulingStrategy = config.schedulingStrategy;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._taskDefinition = config.taskDefinition;
    this._triggers = config.triggers;
    this._waitForSteadyState = config.waitForSteadyState;
    this._alarms.internalValue = config.alarms;
    this._capacityProviderStrategy.internalValue = config.capacityProviderStrategy;
    this._deploymentCircuitBreaker.internalValue = config.deploymentCircuitBreaker;
    this._deploymentController.internalValue = config.deploymentController;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._orderedPlacementStrategy.internalValue = config.orderedPlacementStrategy;
    this._placementConstraints.internalValue = config.placementConstraints;
    this._serviceConnectConfiguration.internalValue = config.serviceConnectConfiguration;
    this._serviceRegistries.internalValue = config.serviceRegistries;
    this._timeouts.internalValue = config.timeouts;
    this._volumeConfiguration.internalValue = config.volumeConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: true, optional: true, required: false
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // deployment_maximum_percent - computed: false, optional: true, required: false
  private _deploymentMaximumPercent?: number; 
  public get deploymentMaximumPercent() {
    return this.getNumberAttribute('deployment_maximum_percent');
  }
  public set deploymentMaximumPercent(value: number) {
    this._deploymentMaximumPercent = value;
  }
  public resetDeploymentMaximumPercent() {
    this._deploymentMaximumPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMaximumPercentInput() {
    return this._deploymentMaximumPercent;
  }

  // deployment_minimum_healthy_percent - computed: false, optional: true, required: false
  private _deploymentMinimumHealthyPercent?: number; 
  public get deploymentMinimumHealthyPercent() {
    return this.getNumberAttribute('deployment_minimum_healthy_percent');
  }
  public set deploymentMinimumHealthyPercent(value: number) {
    this._deploymentMinimumHealthyPercent = value;
  }
  public resetDeploymentMinimumHealthyPercent() {
    this._deploymentMinimumHealthyPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMinimumHealthyPercentInput() {
    return this._deploymentMinimumHealthyPercent;
  }

  // desired_count - computed: false, optional: true, required: false
  private _desiredCount?: number; 
  public get desiredCount() {
    return this.getNumberAttribute('desired_count');
  }
  public set desiredCount(value: number) {
    this._desiredCount = value;
  }
  public resetDesiredCount() {
    this._desiredCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCountInput() {
    return this._desiredCount;
  }

  // enable_ecs_managed_tags - computed: false, optional: true, required: false
  private _enableEcsManagedTags?: boolean | cdktf.IResolvable; 
  public get enableEcsManagedTags() {
    return this.getBooleanAttribute('enable_ecs_managed_tags');
  }
  public set enableEcsManagedTags(value: boolean | cdktf.IResolvable) {
    this._enableEcsManagedTags = value;
  }
  public resetEnableEcsManagedTags() {
    this._enableEcsManagedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEcsManagedTagsInput() {
    return this._enableEcsManagedTags;
  }

  // enable_execute_command - computed: false, optional: true, required: false
  private _enableExecuteCommand?: boolean | cdktf.IResolvable; 
  public get enableExecuteCommand() {
    return this.getBooleanAttribute('enable_execute_command');
  }
  public set enableExecuteCommand(value: boolean | cdktf.IResolvable) {
    this._enableExecuteCommand = value;
  }
  public resetEnableExecuteCommand() {
    this._enableExecuteCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExecuteCommandInput() {
    return this._enableExecuteCommand;
  }

  // force_new_deployment - computed: false, optional: true, required: false
  private _forceNewDeployment?: boolean | cdktf.IResolvable; 
  public get forceNewDeployment() {
    return this.getBooleanAttribute('force_new_deployment');
  }
  public set forceNewDeployment(value: boolean | cdktf.IResolvable) {
    this._forceNewDeployment = value;
  }
  public resetForceNewDeployment() {
    this._forceNewDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNewDeploymentInput() {
    return this._forceNewDeployment;
  }

  // health_check_grace_period_seconds - computed: false, optional: true, required: false
  private _healthCheckGracePeriodSeconds?: number; 
  public get healthCheckGracePeriodSeconds() {
    return this.getNumberAttribute('health_check_grace_period_seconds');
  }
  public set healthCheckGracePeriodSeconds(value: number) {
    this._healthCheckGracePeriodSeconds = value;
  }
  public resetHealthCheckGracePeriodSeconds() {
    this._healthCheckGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckGracePeriodSecondsInput() {
    return this._healthCheckGracePeriodSeconds;
  }

  // iam_role - computed: true, optional: true, required: false
  private _iamRole?: string; 
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
  public set iamRole(value: string) {
    this._iamRole = value;
  }
  public resetIamRole() {
    this._iamRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleInput() {
    return this._iamRole;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // launch_type - computed: true, optional: true, required: false
  private _launchType?: string; 
  public get launchType() {
    return this.getStringAttribute('launch_type');
  }
  public set launchType(value: string) {
    this._launchType = value;
  }
  public resetLaunchType() {
    this._launchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTypeInput() {
    return this._launchType;
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

  // platform_version - computed: true, optional: true, required: false
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  public resetPlatformVersion() {
    this._platformVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: string; 
  public get propagateTags() {
    return this.getStringAttribute('propagate_tags');
  }
  public set propagateTags(value: string) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // scheduling_strategy - computed: false, optional: true, required: false
  private _schedulingStrategy?: string; 
  public get schedulingStrategy() {
    return this.getStringAttribute('scheduling_strategy');
  }
  public set schedulingStrategy(value: string) {
    this._schedulingStrategy = value;
  }
  public resetSchedulingStrategy() {
    this._schedulingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingStrategyInput() {
    return this._schedulingStrategy;
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

  // task_definition - computed: false, optional: true, required: false
  private _taskDefinition?: string; 
  public get taskDefinition() {
    return this.getStringAttribute('task_definition');
  }
  public set taskDefinition(value: string) {
    this._taskDefinition = value;
  }
  public resetTaskDefinition() {
    this._taskDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionInput() {
    return this._taskDefinition;
  }

  // triggers - computed: true, optional: true, required: false
  private _triggers?: { [key: string]: string }; 
  public get triggers() {
    return this.getStringMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: string }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // wait_for_steady_state - computed: false, optional: true, required: false
  private _waitForSteadyState?: boolean | cdktf.IResolvable; 
  public get waitForSteadyState() {
    return this.getBooleanAttribute('wait_for_steady_state');
  }
  public set waitForSteadyState(value: boolean | cdktf.IResolvable) {
    this._waitForSteadyState = value;
  }
  public resetWaitForSteadyState() {
    this._waitForSteadyState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForSteadyStateInput() {
    return this._waitForSteadyState;
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms = new EcsServiceAlarmsOutputReference(this, "alarms");
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: EcsServiceAlarms) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new EcsServiceCapacityProviderStrategyList(this, "capacity_provider_strategy", true);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[] | cdktf.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // deployment_circuit_breaker - computed: false, optional: true, required: false
  private _deploymentCircuitBreaker = new EcsServiceDeploymentCircuitBreakerOutputReference(this, "deployment_circuit_breaker");
  public get deploymentCircuitBreaker() {
    return this._deploymentCircuitBreaker;
  }
  public putDeploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker) {
    this._deploymentCircuitBreaker.internalValue = value;
  }
  public resetDeploymentCircuitBreaker() {
    this._deploymentCircuitBreaker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentCircuitBreakerInput() {
    return this._deploymentCircuitBreaker.internalValue;
  }

  // deployment_controller - computed: false, optional: true, required: false
  private _deploymentController = new EcsServiceDeploymentControllerOutputReference(this, "deployment_controller");
  public get deploymentController() {
    return this._deploymentController;
  }
  public putDeploymentController(value: EcsServiceDeploymentController) {
    this._deploymentController.internalValue = value;
  }
  public resetDeploymentController() {
    this._deploymentController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentControllerInput() {
    return this._deploymentController.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new EcsServiceLoadBalancerList(this, "load_balancer", true);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: EcsServiceLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new EcsServiceNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: EcsServiceNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // ordered_placement_strategy - computed: false, optional: true, required: false
  private _orderedPlacementStrategy = new EcsServiceOrderedPlacementStrategyList(this, "ordered_placement_strategy", false);
  public get orderedPlacementStrategy() {
    return this._orderedPlacementStrategy;
  }
  public putOrderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[] | cdktf.IResolvable) {
    this._orderedPlacementStrategy.internalValue = value;
  }
  public resetOrderedPlacementStrategy() {
    this._orderedPlacementStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedPlacementStrategyInput() {
    return this._orderedPlacementStrategy.internalValue;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints = new EcsServicePlacementConstraintsList(this, "placement_constraints", true);
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public putPlacementConstraints(value: EcsServicePlacementConstraints[] | cdktf.IResolvable) {
    this._placementConstraints.internalValue = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints.internalValue;
  }

  // service_connect_configuration - computed: false, optional: true, required: false
  private _serviceConnectConfiguration = new EcsServiceServiceConnectConfigurationOutputReference(this, "service_connect_configuration");
  public get serviceConnectConfiguration() {
    return this._serviceConnectConfiguration;
  }
  public putServiceConnectConfiguration(value: EcsServiceServiceConnectConfiguration) {
    this._serviceConnectConfiguration.internalValue = value;
  }
  public resetServiceConnectConfiguration() {
    this._serviceConnectConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectConfigurationInput() {
    return this._serviceConnectConfiguration.internalValue;
  }

  // service_registries - computed: false, optional: true, required: false
  private _serviceRegistries = new EcsServiceServiceRegistriesOutputReference(this, "service_registries");
  public get serviceRegistries() {
    return this._serviceRegistries;
  }
  public putServiceRegistries(value: EcsServiceServiceRegistries) {
    this._serviceRegistries.internalValue = value;
  }
  public resetServiceRegistries() {
    this._serviceRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRegistriesInput() {
    return this._serviceRegistries.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EcsServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EcsServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume_configuration - computed: false, optional: true, required: false
  private _volumeConfiguration = new EcsServiceVolumeConfigurationOutputReference(this, "volume_configuration");
  public get volumeConfiguration() {
    return this._volumeConfiguration;
  }
  public putVolumeConfiguration(value: EcsServiceVolumeConfiguration) {
    this._volumeConfiguration.internalValue = value;
  }
  public resetVolumeConfiguration() {
    this._volumeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeConfigurationInput() {
    return this._volumeConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      deployment_maximum_percent: cdktf.numberToTerraform(this._deploymentMaximumPercent),
      deployment_minimum_healthy_percent: cdktf.numberToTerraform(this._deploymentMinimumHealthyPercent),
      desired_count: cdktf.numberToTerraform(this._desiredCount),
      enable_ecs_managed_tags: cdktf.booleanToTerraform(this._enableEcsManagedTags),
      enable_execute_command: cdktf.booleanToTerraform(this._enableExecuteCommand),
      force_new_deployment: cdktf.booleanToTerraform(this._forceNewDeployment),
      health_check_grace_period_seconds: cdktf.numberToTerraform(this._healthCheckGracePeriodSeconds),
      iam_role: cdktf.stringToTerraform(this._iamRole),
      id: cdktf.stringToTerraform(this._id),
      launch_type: cdktf.stringToTerraform(this._launchType),
      name: cdktf.stringToTerraform(this._name),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      propagate_tags: cdktf.stringToTerraform(this._propagateTags),
      scheduling_strategy: cdktf.stringToTerraform(this._schedulingStrategy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      task_definition: cdktf.stringToTerraform(this._taskDefinition),
      triggers: cdktf.hashMapper(cdktf.stringToTerraform)(this._triggers),
      wait_for_steady_state: cdktf.booleanToTerraform(this._waitForSteadyState),
      alarms: ecsServiceAlarmsToTerraform(this._alarms.internalValue),
      capacity_provider_strategy: cdktf.listMapper(ecsServiceCapacityProviderStrategyToTerraform, true)(this._capacityProviderStrategy.internalValue),
      deployment_circuit_breaker: ecsServiceDeploymentCircuitBreakerToTerraform(this._deploymentCircuitBreaker.internalValue),
      deployment_controller: ecsServiceDeploymentControllerToTerraform(this._deploymentController.internalValue),
      load_balancer: cdktf.listMapper(ecsServiceLoadBalancerToTerraform, true)(this._loadBalancer.internalValue),
      network_configuration: ecsServiceNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      ordered_placement_strategy: cdktf.listMapper(ecsServiceOrderedPlacementStrategyToTerraform, true)(this._orderedPlacementStrategy.internalValue),
      placement_constraints: cdktf.listMapper(ecsServicePlacementConstraintsToTerraform, true)(this._placementConstraints.internalValue),
      service_connect_configuration: ecsServiceServiceConnectConfigurationToTerraform(this._serviceConnectConfiguration.internalValue),
      service_registries: ecsServiceServiceRegistriesToTerraform(this._serviceRegistries.internalValue),
      timeouts: ecsServiceTimeoutsToTerraform(this._timeouts.internalValue),
      volume_configuration: ecsServiceVolumeConfigurationToTerraform(this._volumeConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_maximum_percent: {
        value: cdktf.numberToHclTerraform(this._deploymentMaximumPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_minimum_healthy_percent: {
        value: cdktf.numberToHclTerraform(this._deploymentMinimumHealthyPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_count: {
        value: cdktf.numberToHclTerraform(this._desiredCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_ecs_managed_tags: {
        value: cdktf.booleanToHclTerraform(this._enableEcsManagedTags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_execute_command: {
        value: cdktf.booleanToHclTerraform(this._enableExecuteCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_new_deployment: {
        value: cdktf.booleanToHclTerraform(this._forceNewDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      health_check_grace_period_seconds: {
        value: cdktf.numberToHclTerraform(this._healthCheckGracePeriodSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      iam_role: {
        value: cdktf.stringToHclTerraform(this._iamRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_type: {
        value: cdktf.stringToHclTerraform(this._launchType),
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
      platform_version: {
        value: cdktf.stringToHclTerraform(this._platformVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      propagate_tags: {
        value: cdktf.stringToHclTerraform(this._propagateTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduling_strategy: {
        value: cdktf.stringToHclTerraform(this._schedulingStrategy),
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
      task_definition: {
        value: cdktf.stringToHclTerraform(this._taskDefinition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      wait_for_steady_state: {
        value: cdktf.booleanToHclTerraform(this._waitForSteadyState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alarms: {
        value: ecsServiceAlarmsToHclTerraform(this._alarms.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceAlarmsList",
      },
      capacity_provider_strategy: {
        value: cdktf.listMapperHcl(ecsServiceCapacityProviderStrategyToHclTerraform, true)(this._capacityProviderStrategy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsServiceCapacityProviderStrategyList",
      },
      deployment_circuit_breaker: {
        value: ecsServiceDeploymentCircuitBreakerToHclTerraform(this._deploymentCircuitBreaker.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceDeploymentCircuitBreakerList",
      },
      deployment_controller: {
        value: ecsServiceDeploymentControllerToHclTerraform(this._deploymentController.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceDeploymentControllerList",
      },
      load_balancer: {
        value: cdktf.listMapperHcl(ecsServiceLoadBalancerToHclTerraform, true)(this._loadBalancer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsServiceLoadBalancerList",
      },
      network_configuration: {
        value: ecsServiceNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceNetworkConfigurationList",
      },
      ordered_placement_strategy: {
        value: cdktf.listMapperHcl(ecsServiceOrderedPlacementStrategyToHclTerraform, true)(this._orderedPlacementStrategy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceOrderedPlacementStrategyList",
      },
      placement_constraints: {
        value: cdktf.listMapperHcl(ecsServicePlacementConstraintsToHclTerraform, true)(this._placementConstraints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EcsServicePlacementConstraintsList",
      },
      service_connect_configuration: {
        value: ecsServiceServiceConnectConfigurationToHclTerraform(this._serviceConnectConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceServiceConnectConfigurationList",
      },
      service_registries: {
        value: ecsServiceServiceRegistriesToHclTerraform(this._serviceRegistries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceServiceRegistriesList",
      },
      timeouts: {
        value: ecsServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EcsServiceTimeouts",
      },
      volume_configuration: {
        value: ecsServiceVolumeConfigurationToHclTerraform(this._volumeConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EcsServiceVolumeConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
