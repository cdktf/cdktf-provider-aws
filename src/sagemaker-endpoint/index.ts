// https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#endpoint_config_name SagemakerEndpoint#endpoint_config_name}
  */
  readonly endpointConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#id SagemakerEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#name SagemakerEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#tags SagemakerEndpoint#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#tags_all SagemakerEndpoint#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * deployment_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#deployment_config SagemakerEndpoint#deployment_config}
  */
  readonly deploymentConfig?: SagemakerEndpointDeploymentConfig;
}
export interface SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#alarm_name SagemakerEndpoint#alarm_name}
  */
  readonly alarmName: string;
}

export function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarm_name: cdktf.stringToTerraform(struct!.alarmName),
  }
}

export class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmName = this._alarmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alarmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alarmName = value.alarmName;
    }
  }

  // alarm_name - computed: false, optional: false, required: true
  private _alarmName?: string; 
  public get alarmName() {
    return this.getStringAttribute('alarm_name');
  }
  public set alarmName(value: string) {
    this._alarmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmNameInput() {
    return this._alarmName;
  }
}

export class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList extends cdktf.ComplexList {
  public internalValue? : SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable

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
  public get(index: number): SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference {
    return new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SagemakerEndpointDeploymentConfigAutoRollbackConfiguration {
  /**
  * alarms block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#alarms SagemakerEndpoint#alarms}
  */
  readonly alarms?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable;
}

export function sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference | SagemakerEndpointDeploymentConfigAutoRollbackConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alarms: cdktf.listMapper(sagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsToTerraform, true)(struct!.alarms),
  }
}

export class SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alarms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarms = this._alarms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alarms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alarms.internalValue = value.alarms;
    }
  }

  // alarms - computed: false, optional: true, required: false
  private _alarms = new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarmsList(this, "alarms", true);
  public get alarms() {
    return this._alarms;
  }
  public putAlarms(value: SagemakerEndpointDeploymentConfigAutoRollbackConfigurationAlarms[] | cdktf.IResolvable) {
    this._alarms.internalValue = value;
  }
  public resetAlarms() {
    this._alarms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmsInput() {
    return this._alarms.internalValue;
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#type SagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#value SagemakerEndpoint#value}
  */
  readonly value: number;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#type SagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#value SagemakerEndpoint#value}
  */
  readonly value: number;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#type SagemakerEndpoint#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#wait_interval_in_seconds SagemakerEndpoint#wait_interval_in_seconds}
  */
  readonly waitIntervalInSeconds: number;
  /**
  * canary_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#canary_size SagemakerEndpoint#canary_size}
  */
  readonly canarySize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize;
  /**
  * linear_step_size block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#linear_step_size SagemakerEndpoint#linear_step_size}
  */
  readonly linearStepSize?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    wait_interval_in_seconds: cdktf.numberToTerraform(struct!.waitIntervalInSeconds),
    canary_size: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeToTerraform(struct!.canarySize),
    linear_step_size: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeToTerraform(struct!.linearStepSize),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._waitIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIntervalInSeconds = this._waitIntervalInSeconds;
    }
    if (this._canarySize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canarySize = this._canarySize?.internalValue;
    }
    if (this._linearStepSize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linearStepSize = this._linearStepSize?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._waitIntervalInSeconds = undefined;
      this._canarySize.internalValue = undefined;
      this._linearStepSize.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._waitIntervalInSeconds = value.waitIntervalInSeconds;
      this._canarySize.internalValue = value.canarySize;
      this._linearStepSize.internalValue = value.linearStepSize;
    }
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

  // wait_interval_in_seconds - computed: false, optional: false, required: true
  private _waitIntervalInSeconds?: number; 
  public get waitIntervalInSeconds() {
    return this.getNumberAttribute('wait_interval_in_seconds');
  }
  public set waitIntervalInSeconds(value: number) {
    this._waitIntervalInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIntervalInSecondsInput() {
    return this._waitIntervalInSeconds;
  }

  // canary_size - computed: false, optional: true, required: false
  private _canarySize = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySizeOutputReference(this, "canary_size");
  public get canarySize() {
    return this._canarySize;
  }
  public putCanarySize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationCanarySize) {
    this._canarySize.internalValue = value;
  }
  public resetCanarySize() {
    this._canarySize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canarySizeInput() {
    return this._canarySize.internalValue;
  }

  // linear_step_size - computed: false, optional: true, required: false
  private _linearStepSize = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSizeOutputReference(this, "linear_step_size");
  public get linearStepSize() {
    return this._linearStepSize;
  }
  public putLinearStepSize(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationLinearStepSize) {
    this._linearStepSize.internalValue = value;
  }
  public resetLinearStepSize() {
    this._linearStepSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linearStepSizeInput() {
    return this._linearStepSize.internalValue;
  }
}
export interface SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#maximum_execution_timeout_in_seconds SagemakerEndpoint#maximum_execution_timeout_in_seconds}
  */
  readonly maximumExecutionTimeoutInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#termination_wait_in_seconds SagemakerEndpoint#termination_wait_in_seconds}
  */
  readonly terminationWaitInSeconds?: number;
  /**
  * traffic_routing_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#traffic_routing_configuration SagemakerEndpoint#traffic_routing_configuration}
  */
  readonly trafficRoutingConfiguration: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration;
}

export function sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct?: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference | SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_execution_timeout_in_seconds: cdktf.numberToTerraform(struct!.maximumExecutionTimeoutInSeconds),
    termination_wait_in_seconds: cdktf.numberToTerraform(struct!.terminationWaitInSeconds),
    traffic_routing_configuration: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationToTerraform(struct!.trafficRoutingConfiguration),
  }
}

export class SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumExecutionTimeoutInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumExecutionTimeoutInSeconds = this._maximumExecutionTimeoutInSeconds;
    }
    if (this._terminationWaitInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationWaitInSeconds = this._terminationWaitInSeconds;
    }
    if (this._trafficRoutingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficRoutingConfiguration = this._trafficRoutingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumExecutionTimeoutInSeconds = undefined;
      this._terminationWaitInSeconds = undefined;
      this._trafficRoutingConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumExecutionTimeoutInSeconds = value.maximumExecutionTimeoutInSeconds;
      this._terminationWaitInSeconds = value.terminationWaitInSeconds;
      this._trafficRoutingConfiguration.internalValue = value.trafficRoutingConfiguration;
    }
  }

  // maximum_execution_timeout_in_seconds - computed: false, optional: true, required: false
  private _maximumExecutionTimeoutInSeconds?: number; 
  public get maximumExecutionTimeoutInSeconds() {
    return this.getNumberAttribute('maximum_execution_timeout_in_seconds');
  }
  public set maximumExecutionTimeoutInSeconds(value: number) {
    this._maximumExecutionTimeoutInSeconds = value;
  }
  public resetMaximumExecutionTimeoutInSeconds() {
    this._maximumExecutionTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumExecutionTimeoutInSecondsInput() {
    return this._maximumExecutionTimeoutInSeconds;
  }

  // termination_wait_in_seconds - computed: false, optional: true, required: false
  private _terminationWaitInSeconds?: number; 
  public get terminationWaitInSeconds() {
    return this.getNumberAttribute('termination_wait_in_seconds');
  }
  public set terminationWaitInSeconds(value: number) {
    this._terminationWaitInSeconds = value;
  }
  public resetTerminationWaitInSeconds() {
    this._terminationWaitInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationWaitInSecondsInput() {
    return this._terminationWaitInSeconds;
  }

  // traffic_routing_configuration - computed: false, optional: false, required: true
  private _trafficRoutingConfiguration = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfigurationOutputReference(this, "traffic_routing_configuration");
  public get trafficRoutingConfiguration() {
    return this._trafficRoutingConfiguration;
  }
  public putTrafficRoutingConfiguration(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyTrafficRoutingConfiguration) {
    this._trafficRoutingConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficRoutingConfigurationInput() {
    return this._trafficRoutingConfiguration.internalValue;
  }
}
export interface SagemakerEndpointDeploymentConfig {
  /**
  * auto_rollback_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#auto_rollback_configuration SagemakerEndpoint#auto_rollback_configuration}
  */
  readonly autoRollbackConfiguration?: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration;
  /**
  * blue_green_update_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint#blue_green_update_policy SagemakerEndpoint#blue_green_update_policy}
  */
  readonly blueGreenUpdatePolicy: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy;
}

export function sagemakerEndpointDeploymentConfigToTerraform(struct?: SagemakerEndpointDeploymentConfigOutputReference | SagemakerEndpointDeploymentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_rollback_configuration: sagemakerEndpointDeploymentConfigAutoRollbackConfigurationToTerraform(struct!.autoRollbackConfiguration),
    blue_green_update_policy: sagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyToTerraform(struct!.blueGreenUpdatePolicy),
  }
}

export class SagemakerEndpointDeploymentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerEndpointDeploymentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRollbackConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRollbackConfiguration = this._autoRollbackConfiguration?.internalValue;
    }
    if (this._blueGreenUpdatePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenUpdatePolicy = this._blueGreenUpdatePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerEndpointDeploymentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRollbackConfiguration.internalValue = undefined;
      this._blueGreenUpdatePolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRollbackConfiguration.internalValue = value.autoRollbackConfiguration;
      this._blueGreenUpdatePolicy.internalValue = value.blueGreenUpdatePolicy;
    }
  }

  // auto_rollback_configuration - computed: false, optional: true, required: false
  private _autoRollbackConfiguration = new SagemakerEndpointDeploymentConfigAutoRollbackConfigurationOutputReference(this, "auto_rollback_configuration");
  public get autoRollbackConfiguration() {
    return this._autoRollbackConfiguration;
  }
  public putAutoRollbackConfiguration(value: SagemakerEndpointDeploymentConfigAutoRollbackConfiguration) {
    this._autoRollbackConfiguration.internalValue = value;
  }
  public resetAutoRollbackConfiguration() {
    this._autoRollbackConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRollbackConfigurationInput() {
    return this._autoRollbackConfiguration.internalValue;
  }

  // blue_green_update_policy - computed: false, optional: false, required: true
  private _blueGreenUpdatePolicy = new SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicyOutputReference(this, "blue_green_update_policy");
  public get blueGreenUpdatePolicy() {
    return this._blueGreenUpdatePolicy;
  }
  public putBlueGreenUpdatePolicy(value: SagemakerEndpointDeploymentConfigBlueGreenUpdatePolicy) {
    this._blueGreenUpdatePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenUpdatePolicyInput() {
    return this._blueGreenUpdatePolicy.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint aws_sagemaker_endpoint}
*/
export class SagemakerEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_endpoint";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_endpoint aws_sagemaker_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_endpoint',
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
    this._endpointConfigName = config.endpointConfigName;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._deploymentConfig.internalValue = config.deploymentConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // endpoint_config_name - computed: false, optional: false, required: true
  private _endpointConfigName?: string; 
  public get endpointConfigName() {
    return this.getStringAttribute('endpoint_config_name');
  }
  public set endpointConfigName(value: string) {
    this._endpointConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigNameInput() {
    return this._endpointConfigName;
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

  // deployment_config - computed: false, optional: true, required: false
  private _deploymentConfig = new SagemakerEndpointDeploymentConfigOutputReference(this, "deployment_config");
  public get deploymentConfig() {
    return this._deploymentConfig;
  }
  public putDeploymentConfig(value: SagemakerEndpointDeploymentConfig) {
    this._deploymentConfig.internalValue = value;
  }
  public resetDeploymentConfig() {
    this._deploymentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigInput() {
    return this._deploymentConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_config_name: cdktf.stringToTerraform(this._endpointConfigName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      deployment_config: sagemakerEndpointDeploymentConfigToTerraform(this._deploymentConfig.internalValue),
    };
  }
}
