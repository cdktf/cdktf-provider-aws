// https://www.terraform.io/docs/providers/aws/r/scheduler_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchedulerScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#description SchedulerSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#end_date SchedulerSchedule#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group_name SchedulerSchedule#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#id SchedulerSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kms_key_arn SchedulerSchedule#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name_prefix SchedulerSchedule#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression SchedulerSchedule#schedule_expression}
  */
  readonly scheduleExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#schedule_expression_timezone SchedulerSchedule#schedule_expression_timezone}
  */
  readonly scheduleExpressionTimezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#start_date SchedulerSchedule#start_date}
  */
  readonly startDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#state SchedulerSchedule#state}
  */
  readonly state?: string;
  /**
  * flexible_time_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#flexible_time_window SchedulerSchedule#flexible_time_window}
  */
  readonly flexibleTimeWindow: SchedulerScheduleFlexibleTimeWindow;
  /**
  * target block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#target SchedulerSchedule#target}
  */
  readonly target: SchedulerScheduleTarget;
}
export interface SchedulerScheduleFlexibleTimeWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_window_in_minutes SchedulerSchedule#maximum_window_in_minutes}
  */
  readonly maximumWindowInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#mode SchedulerSchedule#mode}
  */
  readonly mode: string;
}

export function schedulerScheduleFlexibleTimeWindowToTerraform(struct?: SchedulerScheduleFlexibleTimeWindowOutputReference | SchedulerScheduleFlexibleTimeWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_window_in_minutes: cdktf.numberToTerraform(struct!.maximumWindowInMinutes),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class SchedulerScheduleFlexibleTimeWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleFlexibleTimeWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumWindowInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumWindowInMinutes = this._maximumWindowInMinutes;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleFlexibleTimeWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumWindowInMinutes = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumWindowInMinutes = value.maximumWindowInMinutes;
      this._mode = value.mode;
    }
  }

  // maximum_window_in_minutes - computed: false, optional: true, required: false
  private _maximumWindowInMinutes?: number; 
  public get maximumWindowInMinutes() {
    return this.getNumberAttribute('maximum_window_in_minutes');
  }
  public set maximumWindowInMinutes(value: number) {
    this._maximumWindowInMinutes = value;
  }
  public resetMaximumWindowInMinutes() {
    this._maximumWindowInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumWindowInMinutesInput() {
    return this._maximumWindowInMinutes;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface SchedulerScheduleTargetDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}
  */
  readonly arn?: string;
}

export function schedulerScheduleTargetDeadLetterConfigToTerraform(struct?: SchedulerScheduleTargetDeadLetterConfigOutputReference | SchedulerScheduleTargetDeadLetterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export class SchedulerScheduleTargetDeadLetterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
    }
  }

  // arn - computed: false, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }
}
export interface SchedulerScheduleTargetEcsParametersCapacityProviderStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#base SchedulerSchedule#base}
  */
  readonly base?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#capacity_provider SchedulerSchedule#capacity_provider}
  */
  readonly capacityProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#weight SchedulerSchedule#weight}
  */
  readonly weight?: number;
}

export function schedulerScheduleTargetEcsParametersCapacityProviderStrategyToTerraform(struct?: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy | cdktf.IResolvable): any {
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

export class SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchedulerScheduleTargetEcsParametersCapacityProviderStrategy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy | cdktf.IResolvable | undefined) {
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

export class SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList extends cdktf.ComplexList {
  public internalValue? : SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[] | cdktf.IResolvable

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
  public get(index: number): SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference {
    return new SchedulerScheduleTargetEcsParametersCapacityProviderStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulerScheduleTargetEcsParametersNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#assign_public_ip SchedulerSchedule#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#security_groups SchedulerSchedule#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#subnets SchedulerSchedule#subnets}
  */
  readonly subnets: string[];
}

export function schedulerScheduleTargetEcsParametersNetworkConfigurationToTerraform(struct?: SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference | SchedulerScheduleTargetEcsParametersNetworkConfiguration): any {
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

export class SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetEcsParametersNetworkConfiguration | undefined {
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

  public set internalValue(value: SchedulerScheduleTargetEcsParametersNetworkConfiguration | undefined) {
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
export interface SchedulerScheduleTargetEcsParametersPlacementConstraints {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#expression SchedulerSchedule#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#type SchedulerSchedule#type}
  */
  readonly type: string;
}

export function schedulerScheduleTargetEcsParametersPlacementConstraintsToTerraform(struct?: SchedulerScheduleTargetEcsParametersPlacementConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchedulerScheduleTargetEcsParametersPlacementConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SchedulerScheduleTargetEcsParametersPlacementConstraints | cdktf.IResolvable | undefined) {
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

export class SchedulerScheduleTargetEcsParametersPlacementConstraintsList extends cdktf.ComplexList {
  public internalValue? : SchedulerScheduleTargetEcsParametersPlacementConstraints[] | cdktf.IResolvable

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
  public get(index: number): SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference {
    return new SchedulerScheduleTargetEcsParametersPlacementConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulerScheduleTargetEcsParametersPlacementStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#field SchedulerSchedule#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#type SchedulerSchedule#type}
  */
  readonly type: string;
}

export function schedulerScheduleTargetEcsParametersPlacementStrategyToTerraform(struct?: SchedulerScheduleTargetEcsParametersPlacementStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchedulerScheduleTargetEcsParametersPlacementStrategy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SchedulerScheduleTargetEcsParametersPlacementStrategy | cdktf.IResolvable | undefined) {
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

export class SchedulerScheduleTargetEcsParametersPlacementStrategyList extends cdktf.ComplexList {
  public internalValue? : SchedulerScheduleTargetEcsParametersPlacementStrategy[] | cdktf.IResolvable

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
  public get(index: number): SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference {
    return new SchedulerScheduleTargetEcsParametersPlacementStrategyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulerScheduleTargetEcsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_ecs_managed_tags SchedulerSchedule#enable_ecs_managed_tags}
  */
  readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#enable_execute_command SchedulerSchedule#enable_execute_command}
  */
  readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#group SchedulerSchedule#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#launch_type SchedulerSchedule#launch_type}
  */
  readonly launchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#platform_version SchedulerSchedule#platform_version}
  */
  readonly platformVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#propagate_tags SchedulerSchedule#propagate_tags}
  */
  readonly propagateTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#reference_id SchedulerSchedule#reference_id}
  */
  readonly referenceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#tags SchedulerSchedule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_count SchedulerSchedule#task_count}
  */
  readonly taskCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#task_definition_arn SchedulerSchedule#task_definition_arn}
  */
  readonly taskDefinitionArn: string;
  /**
  * capacity_provider_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#capacity_provider_strategy SchedulerSchedule#capacity_provider_strategy}
  */
  readonly capacityProviderStrategy?: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[] | cdktf.IResolvable;
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#network_configuration SchedulerSchedule#network_configuration}
  */
  readonly networkConfiguration?: SchedulerScheduleTargetEcsParametersNetworkConfiguration;
  /**
  * placement_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#placement_constraints SchedulerSchedule#placement_constraints}
  */
  readonly placementConstraints?: SchedulerScheduleTargetEcsParametersPlacementConstraints[] | cdktf.IResolvable;
  /**
  * placement_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#placement_strategy SchedulerSchedule#placement_strategy}
  */
  readonly placementStrategy?: SchedulerScheduleTargetEcsParametersPlacementStrategy[] | cdktf.IResolvable;
}

export function schedulerScheduleTargetEcsParametersToTerraform(struct?: SchedulerScheduleTargetEcsParametersOutputReference | SchedulerScheduleTargetEcsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ecs_managed_tags: cdktf.booleanToTerraform(struct!.enableEcsManagedTags),
    enable_execute_command: cdktf.booleanToTerraform(struct!.enableExecuteCommand),
    group: cdktf.stringToTerraform(struct!.group),
    launch_type: cdktf.stringToTerraform(struct!.launchType),
    platform_version: cdktf.stringToTerraform(struct!.platformVersion),
    propagate_tags: cdktf.stringToTerraform(struct!.propagateTags),
    reference_id: cdktf.stringToTerraform(struct!.referenceId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    task_definition_arn: cdktf.stringToTerraform(struct!.taskDefinitionArn),
    capacity_provider_strategy: cdktf.listMapper(schedulerScheduleTargetEcsParametersCapacityProviderStrategyToTerraform, true)(struct!.capacityProviderStrategy),
    network_configuration: schedulerScheduleTargetEcsParametersNetworkConfigurationToTerraform(struct!.networkConfiguration),
    placement_constraints: cdktf.listMapper(schedulerScheduleTargetEcsParametersPlacementConstraintsToTerraform, true)(struct!.placementConstraints),
    placement_strategy: cdktf.listMapper(schedulerScheduleTargetEcsParametersPlacementStrategyToTerraform, true)(struct!.placementStrategy),
  }
}

export class SchedulerScheduleTargetEcsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetEcsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableEcsManagedTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEcsManagedTags = this._enableEcsManagedTags;
    }
    if (this._enableExecuteCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExecuteCommand = this._enableExecuteCommand;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._launchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.launchType = this._launchType;
    }
    if (this._platformVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformVersion = this._platformVersion;
    }
    if (this._propagateTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateTags = this._propagateTags;
    }
    if (this._referenceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceId = this._referenceId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._taskDefinitionArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskDefinitionArn = this._taskDefinitionArn;
    }
    if (this._capacityProviderStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityProviderStrategy = this._capacityProviderStrategy?.internalValue;
    }
    if (this._networkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfiguration = this._networkConfiguration?.internalValue;
    }
    if (this._placementConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementConstraints = this._placementConstraints?.internalValue;
    }
    if (this._placementStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementStrategy = this._placementStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetEcsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableEcsManagedTags = undefined;
      this._enableExecuteCommand = undefined;
      this._group = undefined;
      this._launchType = undefined;
      this._platformVersion = undefined;
      this._propagateTags = undefined;
      this._referenceId = undefined;
      this._tags = undefined;
      this._taskCount = undefined;
      this._taskDefinitionArn = undefined;
      this._capacityProviderStrategy.internalValue = undefined;
      this._networkConfiguration.internalValue = undefined;
      this._placementConstraints.internalValue = undefined;
      this._placementStrategy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableEcsManagedTags = value.enableEcsManagedTags;
      this._enableExecuteCommand = value.enableExecuteCommand;
      this._group = value.group;
      this._launchType = value.launchType;
      this._platformVersion = value.platformVersion;
      this._propagateTags = value.propagateTags;
      this._referenceId = value.referenceId;
      this._tags = value.tags;
      this._taskCount = value.taskCount;
      this._taskDefinitionArn = value.taskDefinitionArn;
      this._capacityProviderStrategy.internalValue = value.capacityProviderStrategy;
      this._networkConfiguration.internalValue = value.networkConfiguration;
      this._placementConstraints.internalValue = value.placementConstraints;
      this._placementStrategy.internalValue = value.placementStrategy;
    }
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

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // launch_type - computed: false, optional: true, required: false
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

  // platform_version - computed: false, optional: true, required: false
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

  // reference_id - computed: false, optional: true, required: false
  private _referenceId?: string; 
  public get referenceId() {
    return this.getStringAttribute('reference_id');
  }
  public set referenceId(value: string) {
    this._referenceId = value;
  }
  public resetReferenceId() {
    this._referenceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceIdInput() {
    return this._referenceId;
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

  // task_count - computed: false, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // task_definition_arn - computed: false, optional: false, required: true
  private _taskDefinitionArn?: string; 
  public get taskDefinitionArn() {
    return this.getStringAttribute('task_definition_arn');
  }
  public set taskDefinitionArn(value: string) {
    this._taskDefinitionArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDefinitionArnInput() {
    return this._taskDefinitionArn;
  }

  // capacity_provider_strategy - computed: false, optional: true, required: false
  private _capacityProviderStrategy = new SchedulerScheduleTargetEcsParametersCapacityProviderStrategyList(this, "capacity_provider_strategy", true);
  public get capacityProviderStrategy() {
    return this._capacityProviderStrategy;
  }
  public putCapacityProviderStrategy(value: SchedulerScheduleTargetEcsParametersCapacityProviderStrategy[] | cdktf.IResolvable) {
    this._capacityProviderStrategy.internalValue = value;
  }
  public resetCapacityProviderStrategy() {
    this._capacityProviderStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityProviderStrategyInput() {
    return this._capacityProviderStrategy.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new SchedulerScheduleTargetEcsParametersNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: SchedulerScheduleTargetEcsParametersNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // placement_constraints - computed: false, optional: true, required: false
  private _placementConstraints = new SchedulerScheduleTargetEcsParametersPlacementConstraintsList(this, "placement_constraints", true);
  public get placementConstraints() {
    return this._placementConstraints;
  }
  public putPlacementConstraints(value: SchedulerScheduleTargetEcsParametersPlacementConstraints[] | cdktf.IResolvable) {
    this._placementConstraints.internalValue = value;
  }
  public resetPlacementConstraints() {
    this._placementConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementConstraintsInput() {
    return this._placementConstraints.internalValue;
  }

  // placement_strategy - computed: false, optional: true, required: false
  private _placementStrategy = new SchedulerScheduleTargetEcsParametersPlacementStrategyList(this, "placement_strategy", true);
  public get placementStrategy() {
    return this._placementStrategy;
  }
  public putPlacementStrategy(value: SchedulerScheduleTargetEcsParametersPlacementStrategy[] | cdktf.IResolvable) {
    this._placementStrategy.internalValue = value;
  }
  public resetPlacementStrategy() {
    this._placementStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementStrategyInput() {
    return this._placementStrategy.internalValue;
  }
}
export interface SchedulerScheduleTargetEventbridgeParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#detail_type SchedulerSchedule#detail_type}
  */
  readonly detailType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#source SchedulerSchedule#source}
  */
  readonly source: string;
}

export function schedulerScheduleTargetEventbridgeParametersToTerraform(struct?: SchedulerScheduleTargetEventbridgeParametersOutputReference | SchedulerScheduleTargetEventbridgeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_type: cdktf.stringToTerraform(struct!.detailType),
    source: cdktf.stringToTerraform(struct!.source),
  }
}

export class SchedulerScheduleTargetEventbridgeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetEventbridgeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailType !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailType = this._detailType;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetEventbridgeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detailType = undefined;
      this._source = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detailType = value.detailType;
      this._source = value.source;
    }
  }

  // detail_type - computed: false, optional: false, required: true
  private _detailType?: string; 
  public get detailType() {
    return this.getStringAttribute('detail_type');
  }
  public set detailType(value: string) {
    this._detailType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailTypeInput() {
    return this._detailType;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface SchedulerScheduleTargetKinesisParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#partition_key SchedulerSchedule#partition_key}
  */
  readonly partitionKey: string;
}

export function schedulerScheduleTargetKinesisParametersToTerraform(struct?: SchedulerScheduleTargetKinesisParametersOutputReference | SchedulerScheduleTargetKinesisParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    partition_key: cdktf.stringToTerraform(struct!.partitionKey),
  }
}

export class SchedulerScheduleTargetKinesisParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetKinesisParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetKinesisParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._partitionKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._partitionKey = value.partitionKey;
    }
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }
}
export interface SchedulerScheduleTargetRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_event_age_in_seconds SchedulerSchedule#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#maximum_retry_attempts SchedulerSchedule#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
}

export function schedulerScheduleTargetRetryPolicyToTerraform(struct?: SchedulerScheduleTargetRetryPolicyOutputReference | SchedulerScheduleTargetRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_event_age_in_seconds: cdktf.numberToTerraform(struct!.maximumEventAgeInSeconds),
    maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
  }
}

export class SchedulerScheduleTargetRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumEventAgeInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumEventAgeInSeconds = this._maximumEventAgeInSeconds;
    }
    if (this._maximumRetryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumRetryAttempts = this._maximumRetryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumEventAgeInSeconds = undefined;
      this._maximumRetryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumEventAgeInSeconds = value.maximumEventAgeInSeconds;
      this._maximumRetryAttempts = value.maximumRetryAttempts;
    }
  }

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number; 
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts;
  }
}
export interface SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#name SchedulerSchedule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#value SchedulerSchedule#value}
  */
  readonly value: string;
}

export function schedulerScheduleTargetSagemakerPipelineParametersPipelineParameterToTerraform(struct?: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList extends cdktf.ComplexList {
  public internalValue? : SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable

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
  public get(index: number): SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference {
    return new SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchedulerScheduleTargetSagemakerPipelineParameters {
  /**
  * pipeline_parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#pipeline_parameter SchedulerSchedule#pipeline_parameter}
  */
  readonly pipelineParameter?: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable;
}

export function schedulerScheduleTargetSagemakerPipelineParametersToTerraform(struct?: SchedulerScheduleTargetSagemakerPipelineParametersOutputReference | SchedulerScheduleTargetSagemakerPipelineParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pipeline_parameter: cdktf.listMapper(schedulerScheduleTargetSagemakerPipelineParametersPipelineParameterToTerraform, true)(struct!.pipelineParameter),
  }
}

export class SchedulerScheduleTargetSagemakerPipelineParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetSagemakerPipelineParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pipelineParameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineParameter = this._pipelineParameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetSagemakerPipelineParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pipelineParameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pipelineParameter.internalValue = value.pipelineParameter;
    }
  }

  // pipeline_parameter - computed: false, optional: true, required: false
  private _pipelineParameter = new SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameterList(this, "pipeline_parameter", true);
  public get pipelineParameter() {
    return this._pipelineParameter;
  }
  public putPipelineParameter(value: SchedulerScheduleTargetSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable) {
    this._pipelineParameter.internalValue = value;
  }
  public resetPipelineParameter() {
    this._pipelineParameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineParameterInput() {
    return this._pipelineParameter.internalValue;
  }
}
export interface SchedulerScheduleTargetSqsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#message_group_id SchedulerSchedule#message_group_id}
  */
  readonly messageGroupId?: string;
}

export function schedulerScheduleTargetSqsParametersToTerraform(struct?: SchedulerScheduleTargetSqsParametersOutputReference | SchedulerScheduleTargetSqsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
  }
}

export class SchedulerScheduleTargetSqsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTargetSqsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageGroupId = this._messageGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTargetSqsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageGroupId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageGroupId = value.messageGroupId;
    }
  }

  // message_group_id - computed: false, optional: true, required: false
  private _messageGroupId?: string; 
  public get messageGroupId() {
    return this.getStringAttribute('message_group_id');
  }
  public set messageGroupId(value: string) {
    this._messageGroupId = value;
  }
  public resetMessageGroupId() {
    this._messageGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageGroupIdInput() {
    return this._messageGroupId;
  }
}
export interface SchedulerScheduleTarget {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#arn SchedulerSchedule#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#input SchedulerSchedule#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#role_arn SchedulerSchedule#role_arn}
  */
  readonly roleArn: string;
  /**
  * dead_letter_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#dead_letter_config SchedulerSchedule#dead_letter_config}
  */
  readonly deadLetterConfig?: SchedulerScheduleTargetDeadLetterConfig;
  /**
  * ecs_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#ecs_parameters SchedulerSchedule#ecs_parameters}
  */
  readonly ecsParameters?: SchedulerScheduleTargetEcsParameters;
  /**
  * eventbridge_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#eventbridge_parameters SchedulerSchedule#eventbridge_parameters}
  */
  readonly eventbridgeParameters?: SchedulerScheduleTargetEventbridgeParameters;
  /**
  * kinesis_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#kinesis_parameters SchedulerSchedule#kinesis_parameters}
  */
  readonly kinesisParameters?: SchedulerScheduleTargetKinesisParameters;
  /**
  * retry_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#retry_policy SchedulerSchedule#retry_policy}
  */
  readonly retryPolicy?: SchedulerScheduleTargetRetryPolicy;
  /**
  * sagemaker_pipeline_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#sagemaker_pipeline_parameters SchedulerSchedule#sagemaker_pipeline_parameters}
  */
  readonly sagemakerPipelineParameters?: SchedulerScheduleTargetSagemakerPipelineParameters;
  /**
  * sqs_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule#sqs_parameters SchedulerSchedule#sqs_parameters}
  */
  readonly sqsParameters?: SchedulerScheduleTargetSqsParameters;
}

export function schedulerScheduleTargetToTerraform(struct?: SchedulerScheduleTargetOutputReference | SchedulerScheduleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    input: cdktf.stringToTerraform(struct!.input),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    dead_letter_config: schedulerScheduleTargetDeadLetterConfigToTerraform(struct!.deadLetterConfig),
    ecs_parameters: schedulerScheduleTargetEcsParametersToTerraform(struct!.ecsParameters),
    eventbridge_parameters: schedulerScheduleTargetEventbridgeParametersToTerraform(struct!.eventbridgeParameters),
    kinesis_parameters: schedulerScheduleTargetKinesisParametersToTerraform(struct!.kinesisParameters),
    retry_policy: schedulerScheduleTargetRetryPolicyToTerraform(struct!.retryPolicy),
    sagemaker_pipeline_parameters: schedulerScheduleTargetSagemakerPipelineParametersToTerraform(struct!.sagemakerPipelineParameters),
    sqs_parameters: schedulerScheduleTargetSqsParametersToTerraform(struct!.sqsParameters),
  }
}

export class SchedulerScheduleTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchedulerScheduleTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._deadLetterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterConfig = this._deadLetterConfig?.internalValue;
    }
    if (this._ecsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ecsParameters = this._ecsParameters?.internalValue;
    }
    if (this._eventbridgeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventbridgeParameters = this._eventbridgeParameters?.internalValue;
    }
    if (this._kinesisParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisParameters = this._kinesisParameters?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._sagemakerPipelineParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sagemakerPipelineParameters = this._sagemakerPipelineParameters?.internalValue;
    }
    if (this._sqsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsParameters = this._sqsParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchedulerScheduleTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._input = undefined;
      this._roleArn = undefined;
      this._deadLetterConfig.internalValue = undefined;
      this._ecsParameters.internalValue = undefined;
      this._eventbridgeParameters.internalValue = undefined;
      this._kinesisParameters.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._sagemakerPipelineParameters.internalValue = undefined;
      this._sqsParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._input = value.input;
      this._roleArn = value.roleArn;
      this._deadLetterConfig.internalValue = value.deadLetterConfig;
      this._ecsParameters.internalValue = value.ecsParameters;
      this._eventbridgeParameters.internalValue = value.eventbridgeParameters;
      this._kinesisParameters.internalValue = value.kinesisParameters;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._sagemakerPipelineParameters.internalValue = value.sagemakerPipelineParameters;
      this._sqsParameters.internalValue = value.sqsParameters;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // input - computed: false, optional: true, required: false
  private _input?: string; 
  public get input() {
    return this.getStringAttribute('input');
  }
  public set input(value: string) {
    this._input = value;
  }
  public resetInput() {
    this._input = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input;
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

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new SchedulerScheduleTargetDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: SchedulerScheduleTargetDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // ecs_parameters - computed: false, optional: true, required: false
  private _ecsParameters = new SchedulerScheduleTargetEcsParametersOutputReference(this, "ecs_parameters");
  public get ecsParameters() {
    return this._ecsParameters;
  }
  public putEcsParameters(value: SchedulerScheduleTargetEcsParameters) {
    this._ecsParameters.internalValue = value;
  }
  public resetEcsParameters() {
    this._ecsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecsParametersInput() {
    return this._ecsParameters.internalValue;
  }

  // eventbridge_parameters - computed: false, optional: true, required: false
  private _eventbridgeParameters = new SchedulerScheduleTargetEventbridgeParametersOutputReference(this, "eventbridge_parameters");
  public get eventbridgeParameters() {
    return this._eventbridgeParameters;
  }
  public putEventbridgeParameters(value: SchedulerScheduleTargetEventbridgeParameters) {
    this._eventbridgeParameters.internalValue = value;
  }
  public resetEventbridgeParameters() {
    this._eventbridgeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventbridgeParametersInput() {
    return this._eventbridgeParameters.internalValue;
  }

  // kinesis_parameters - computed: false, optional: true, required: false
  private _kinesisParameters = new SchedulerScheduleTargetKinesisParametersOutputReference(this, "kinesis_parameters");
  public get kinesisParameters() {
    return this._kinesisParameters;
  }
  public putKinesisParameters(value: SchedulerScheduleTargetKinesisParameters) {
    this._kinesisParameters.internalValue = value;
  }
  public resetKinesisParameters() {
    this._kinesisParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisParametersInput() {
    return this._kinesisParameters.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new SchedulerScheduleTargetRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: SchedulerScheduleTargetRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // sagemaker_pipeline_parameters - computed: false, optional: true, required: false
  private _sagemakerPipelineParameters = new SchedulerScheduleTargetSagemakerPipelineParametersOutputReference(this, "sagemaker_pipeline_parameters");
  public get sagemakerPipelineParameters() {
    return this._sagemakerPipelineParameters;
  }
  public putSagemakerPipelineParameters(value: SchedulerScheduleTargetSagemakerPipelineParameters) {
    this._sagemakerPipelineParameters.internalValue = value;
  }
  public resetSagemakerPipelineParameters() {
    this._sagemakerPipelineParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sagemakerPipelineParametersInput() {
    return this._sagemakerPipelineParameters.internalValue;
  }

  // sqs_parameters - computed: false, optional: true, required: false
  private _sqsParameters = new SchedulerScheduleTargetSqsParametersOutputReference(this, "sqs_parameters");
  public get sqsParameters() {
    return this._sqsParameters;
  }
  public putSqsParameters(value: SchedulerScheduleTargetSqsParameters) {
    this._sqsParameters.internalValue = value;
  }
  public resetSqsParameters() {
    this._sqsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsParametersInput() {
    return this._sqsParameters.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule aws_scheduler_schedule}
*/
export class SchedulerSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_scheduler_schedule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/scheduler_schedule aws_scheduler_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchedulerScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: SchedulerScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_scheduler_schedule',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._endDate = config.endDate;
    this._groupName = config.groupName;
    this._id = config.id;
    this._kmsKeyArn = config.kmsKeyArn;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._scheduleExpression = config.scheduleExpression;
    this._scheduleExpressionTimezone = config.scheduleExpressionTimezone;
    this._startDate = config.startDate;
    this._state = config.state;
    this._flexibleTimeWindow.internalValue = config.flexibleTimeWindow;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_date - computed: false, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // schedule_expression - computed: false, optional: false, required: true
  private _scheduleExpression?: string; 
  public get scheduleExpression() {
    return this.getStringAttribute('schedule_expression');
  }
  public set scheduleExpression(value: string) {
    this._scheduleExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionInput() {
    return this._scheduleExpression;
  }

  // schedule_expression_timezone - computed: false, optional: true, required: false
  private _scheduleExpressionTimezone?: string; 
  public get scheduleExpressionTimezone() {
    return this.getStringAttribute('schedule_expression_timezone');
  }
  public set scheduleExpressionTimezone(value: string) {
    this._scheduleExpressionTimezone = value;
  }
  public resetScheduleExpressionTimezone() {
    this._scheduleExpressionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleExpressionTimezoneInput() {
    return this._scheduleExpressionTimezone;
  }

  // start_date - computed: false, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // flexible_time_window - computed: false, optional: false, required: true
  private _flexibleTimeWindow = new SchedulerScheduleFlexibleTimeWindowOutputReference(this, "flexible_time_window");
  public get flexibleTimeWindow() {
    return this._flexibleTimeWindow;
  }
  public putFlexibleTimeWindow(value: SchedulerScheduleFlexibleTimeWindow) {
    this._flexibleTimeWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flexibleTimeWindowInput() {
    return this._flexibleTimeWindow.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new SchedulerScheduleTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: SchedulerScheduleTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      end_date: cdktf.stringToTerraform(this._endDate),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
      schedule_expression_timezone: cdktf.stringToTerraform(this._scheduleExpressionTimezone),
      start_date: cdktf.stringToTerraform(this._startDate),
      state: cdktf.stringToTerraform(this._state),
      flexible_time_window: schedulerScheduleFlexibleTimeWindowToTerraform(this._flexibleTimeWindow.internalValue),
      target: schedulerScheduleTargetToTerraform(this._target.internalValue),
    };
  }
}
