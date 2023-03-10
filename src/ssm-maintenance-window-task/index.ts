// https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsmMaintenanceWindowTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cutoff_behavior SsmMaintenanceWindowTask#cutoff_behavior}
  */
  readonly cutoffBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#description SsmMaintenanceWindowTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#id SsmMaintenanceWindowTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_concurrency SsmMaintenanceWindowTask#max_concurrency}
  */
  readonly maxConcurrency?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#max_errors SsmMaintenanceWindowTask#max_errors}
  */
  readonly maxErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#priority SsmMaintenanceWindowTask#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_arn SsmMaintenanceWindowTask#task_arn}
  */
  readonly taskArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_type SsmMaintenanceWindowTask#task_type}
  */
  readonly taskType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#window_id SsmMaintenanceWindowTask#window_id}
  */
  readonly windowId: string;
  /**
  * targets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#targets SsmMaintenanceWindowTask#targets}
  */
  readonly targets?: SsmMaintenanceWindowTaskTargets[] | cdktf.IResolvable;
  /**
  * task_invocation_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#task_invocation_parameters SsmMaintenanceWindowTask#task_invocation_parameters}
  */
  readonly taskInvocationParameters?: SsmMaintenanceWindowTaskTaskInvocationParameters;
}
export interface SsmMaintenanceWindowTaskTargets {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#key SsmMaintenanceWindowTask#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTaskTargetsToTerraform(struct?: SsmMaintenanceWindowTaskTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class SsmMaintenanceWindowTaskTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmMaintenanceWindowTaskTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmMaintenanceWindowTaskTargetsList extends cdktf.ComplexList {
  public internalValue? : SsmMaintenanceWindowTaskTargets[] | cdktf.IResolvable

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
  public get(index: number): SsmMaintenanceWindowTaskTargetsOutputReference {
    return new SsmMaintenanceWindowTaskTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList extends cdktf.ComplexList {
  public internalValue? : SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | cdktf.IResolvable

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
  public get(index: number): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference {
    return new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}
  */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | cdktf.IResolvable;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterToTerraform, true)(struct!.parameter),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentVersion = this._documentVersion;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._documentVersion = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._documentVersion = value.documentVersion;
      this._parameter.internalValue = value.parameter;
    }
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#client_context SsmMaintenanceWindowTask#client_context}
  */
  readonly clientContext?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#payload SsmMaintenanceWindowTask#payload}
  */
  readonly payload?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#qualifier SsmMaintenanceWindowTask#qualifier}
  */
  readonly qualifier?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_context: cdktf.stringToTerraform(struct!.clientContext),
    payload: cdktf.stringToTerraform(struct!.payload),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientContext !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientContext = this._clientContext;
    }
    if (this._payload !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientContext = undefined;
      this._payload = undefined;
      this._qualifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientContext = value.clientContext;
      this._payload = value.payload;
      this._qualifier = value.qualifier;
    }
  }

  // client_context - computed: false, optional: true, required: false
  private _clientContext?: string; 
  public get clientContext() {
    return this.getStringAttribute('client_context');
  }
  public set clientContext(value: string) {
    this._clientContext = value;
  }
  public resetClientContext() {
    this._clientContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientContextInput() {
    return this._clientContext;
  }

  // payload - computed: false, optional: true, required: false
  private _payload?: string; 
  public get payload() {
    return this.getStringAttribute('payload');
  }
  public set payload(value: string) {
    this._payload = value;
  }
  public resetPayload() {
    this._payload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_log_group_name SsmMaintenanceWindowTask#cloudwatch_log_group_name}
  */
  readonly cloudwatchLogGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_output_enabled SsmMaintenanceWindowTask#cloudwatch_output_enabled}
  */
  readonly cloudwatchOutputEnabled?: boolean | cdktf.IResolvable;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_log_group_name: cdktf.stringToTerraform(struct!.cloudwatchLogGroupName),
    cloudwatch_output_enabled: cdktf.booleanToTerraform(struct!.cloudwatchOutputEnabled),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogGroupName = this._cloudwatchLogGroupName;
    }
    if (this._cloudwatchOutputEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchOutputEnabled = this._cloudwatchOutputEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogGroupName = undefined;
      this._cloudwatchOutputEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogGroupName = value.cloudwatchLogGroupName;
      this._cloudwatchOutputEnabled = value.cloudwatchOutputEnabled;
    }
  }

  // cloudwatch_log_group_name - computed: true, optional: true, required: false
  private _cloudwatchLogGroupName?: string; 
  public get cloudwatchLogGroupName() {
    return this.getStringAttribute('cloudwatch_log_group_name');
  }
  public set cloudwatchLogGroupName(value: string) {
    this._cloudwatchLogGroupName = value;
  }
  public resetCloudwatchLogGroupName() {
    this._cloudwatchLogGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogGroupNameInput() {
    return this._cloudwatchLogGroupName;
  }

  // cloudwatch_output_enabled - computed: false, optional: true, required: false
  private _cloudwatchOutputEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchOutputEnabled() {
    return this.getBooleanAttribute('cloudwatch_output_enabled');
  }
  public set cloudwatchOutputEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchOutputEnabled = value;
  }
  public resetCloudwatchOutputEnabled() {
    this._cloudwatchOutputEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchOutputEnabledInput() {
    return this._cloudwatchOutputEnabled;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_arn SsmMaintenanceWindowTask#notification_arn}
  */
  readonly notificationArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_events SsmMaintenanceWindowTask#notification_events}
  */
  readonly notificationEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_type SsmMaintenanceWindowTask#notification_type}
  */
  readonly notificationType?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_arn: cdktf.stringToTerraform(struct!.notificationArn),
    notification_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notificationEvents),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationArn = this._notificationArn;
    }
    if (this._notificationEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEvents = this._notificationEvents;
    }
    if (this._notificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationType = this._notificationType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notificationArn = undefined;
      this._notificationEvents = undefined;
      this._notificationType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notificationArn = value.notificationArn;
      this._notificationEvents = value.notificationEvents;
      this._notificationType = value.notificationType;
    }
  }

  // notification_arn - computed: false, optional: true, required: false
  private _notificationArn?: string; 
  public get notificationArn() {
    return this.getStringAttribute('notification_arn');
  }
  public set notificationArn(value: string) {
    this._notificationArn = value;
  }
  public resetNotificationArn() {
    this._notificationArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnInput() {
    return this._notificationArn;
  }

  // notification_events - computed: false, optional: true, required: false
  private _notificationEvents?: string[]; 
  public get notificationEvents() {
    return this.getListAttribute('notification_events');
  }
  public set notificationEvents(value: string[]) {
    this._notificationEvents = value;
  }
  public resetNotificationEvents() {
    this._notificationEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEventsInput() {
    return this._notificationEvents;
  }

  // notification_type - computed: false, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#values SsmMaintenanceWindowTask#values}
  */
  readonly values: string[];
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList extends cdktf.ComplexList {
  public internalValue? : SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | cdktf.IResolvable

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
  public get(index: number): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference {
    return new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#comment SsmMaintenanceWindowTask#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash SsmMaintenanceWindowTask#document_hash}
  */
  readonly documentHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_hash_type SsmMaintenanceWindowTask#document_hash_type}
  */
  readonly documentHashType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#document_version SsmMaintenanceWindowTask#document_version}
  */
  readonly documentVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_bucket SsmMaintenanceWindowTask#output_s3_bucket}
  */
  readonly outputS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#output_s3_key_prefix SsmMaintenanceWindowTask#output_s3_key_prefix}
  */
  readonly outputS3KeyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#service_role_arn SsmMaintenanceWindowTask#service_role_arn}
  */
  readonly serviceRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#timeout_seconds SsmMaintenanceWindowTask#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * cloudwatch_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#cloudwatch_config SsmMaintenanceWindowTask#cloudwatch_config}
  */
  readonly cloudwatchConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#notification_config SsmMaintenanceWindowTask#notification_config}
  */
  readonly notificationConfig?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig;
  /**
  * parameter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#parameter SsmMaintenanceWindowTask#parameter}
  */
  readonly parameter?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | cdktf.IResolvable;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    document_hash: cdktf.stringToTerraform(struct!.documentHash),
    document_hash_type: cdktf.stringToTerraform(struct!.documentHashType),
    document_version: cdktf.stringToTerraform(struct!.documentVersion),
    output_s3_bucket: cdktf.stringToTerraform(struct!.outputS3Bucket),
    output_s3_key_prefix: cdktf.stringToTerraform(struct!.outputS3KeyPrefix),
    service_role_arn: cdktf.stringToTerraform(struct!.serviceRoleArn),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    cloudwatch_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigToTerraform(struct!.cloudwatchConfig),
    notification_config: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigToTerraform(struct!.notificationConfig),
    parameter: cdktf.listMapper(ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterToTerraform, true)(struct!.parameter),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._documentHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentHash = this._documentHash;
    }
    if (this._documentHashType !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentHashType = this._documentHashType;
    }
    if (this._documentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentVersion = this._documentVersion;
    }
    if (this._outputS3Bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3Bucket = this._outputS3Bucket;
    }
    if (this._outputS3KeyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputS3KeyPrefix = this._outputS3KeyPrefix;
    }
    if (this._serviceRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceRoleArn = this._serviceRoleArn;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._cloudwatchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchConfig = this._cloudwatchConfig?.internalValue;
    }
    if (this._notificationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationConfig = this._notificationConfig?.internalValue;
    }
    if (this._parameter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameter = this._parameter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comment = undefined;
      this._documentHash = undefined;
      this._documentHashType = undefined;
      this._documentVersion = undefined;
      this._outputS3Bucket = undefined;
      this._outputS3KeyPrefix = undefined;
      this._serviceRoleArn = undefined;
      this._timeoutSeconds = undefined;
      this._cloudwatchConfig.internalValue = undefined;
      this._notificationConfig.internalValue = undefined;
      this._parameter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comment = value.comment;
      this._documentHash = value.documentHash;
      this._documentHashType = value.documentHashType;
      this._documentVersion = value.documentVersion;
      this._outputS3Bucket = value.outputS3Bucket;
      this._outputS3KeyPrefix = value.outputS3KeyPrefix;
      this._serviceRoleArn = value.serviceRoleArn;
      this._timeoutSeconds = value.timeoutSeconds;
      this._cloudwatchConfig.internalValue = value.cloudwatchConfig;
      this._notificationConfig.internalValue = value.notificationConfig;
      this._parameter.internalValue = value.parameter;
    }
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // document_hash - computed: false, optional: true, required: false
  private _documentHash?: string; 
  public get documentHash() {
    return this.getStringAttribute('document_hash');
  }
  public set documentHash(value: string) {
    this._documentHash = value;
  }
  public resetDocumentHash() {
    this._documentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentHashInput() {
    return this._documentHash;
  }

  // document_hash_type - computed: false, optional: true, required: false
  private _documentHashType?: string; 
  public get documentHashType() {
    return this.getStringAttribute('document_hash_type');
  }
  public set documentHashType(value: string) {
    this._documentHashType = value;
  }
  public resetDocumentHashType() {
    this._documentHashType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentHashTypeInput() {
    return this._documentHashType;
  }

  // document_version - computed: false, optional: true, required: false
  private _documentVersion?: string; 
  public get documentVersion() {
    return this.getStringAttribute('document_version');
  }
  public set documentVersion(value: string) {
    this._documentVersion = value;
  }
  public resetDocumentVersion() {
    this._documentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentVersionInput() {
    return this._documentVersion;
  }

  // output_s3_bucket - computed: false, optional: true, required: false
  private _outputS3Bucket?: string; 
  public get outputS3Bucket() {
    return this.getStringAttribute('output_s3_bucket');
  }
  public set outputS3Bucket(value: string) {
    this._outputS3Bucket = value;
  }
  public resetOutputS3Bucket() {
    this._outputS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3BucketInput() {
    return this._outputS3Bucket;
  }

  // output_s3_key_prefix - computed: false, optional: true, required: false
  private _outputS3KeyPrefix?: string; 
  public get outputS3KeyPrefix() {
    return this.getStringAttribute('output_s3_key_prefix');
  }
  public set outputS3KeyPrefix(value: string) {
    this._outputS3KeyPrefix = value;
  }
  public resetOutputS3KeyPrefix() {
    this._outputS3KeyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputS3KeyPrefixInput() {
    return this._outputS3KeyPrefix;
  }

  // service_role_arn - computed: false, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // cloudwatch_config - computed: false, optional: true, required: false
  private _cloudwatchConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfigOutputReference(this, "cloudwatch_config");
  public get cloudwatchConfig() {
    return this._cloudwatchConfig;
  }
  public putCloudwatchConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersCloudwatchConfig) {
    this._cloudwatchConfig.internalValue = value;
  }
  public resetCloudwatchConfig() {
    this._cloudwatchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchConfigInput() {
    return this._cloudwatchConfig.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // parameter - computed: false, optional: true, required: false
  private _parameter = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameterList(this, "parameter", true);
  public get parameter() {
    return this._parameter;
  }
  public putParameter(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersParameter[] | cdktf.IResolvable) {
    this._parameter.internalValue = value;
  }
  public resetParameter() {
    this._parameter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterInput() {
    return this._parameter.internalValue;
  }
}
export interface SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#input SsmMaintenanceWindowTask#input}
  */
  readonly input?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#name SsmMaintenanceWindowTask#name}
  */
  readonly name?: string;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input: cdktf.stringToTerraform(struct!.input),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._input !== undefined) {
      hasAnyValues = true;
      internalValueResult.input = this._input;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._input = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._input = value.input;
      this._name = value.name;
    }
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

  // name - computed: false, optional: true, required: false
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
}
export interface SsmMaintenanceWindowTaskTaskInvocationParameters {
  /**
  * automation_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#automation_parameters SsmMaintenanceWindowTask#automation_parameters}
  */
  readonly automationParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters;
  /**
  * lambda_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#lambda_parameters SsmMaintenanceWindowTask#lambda_parameters}
  */
  readonly lambdaParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters;
  /**
  * run_command_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#run_command_parameters SsmMaintenanceWindowTask#run_command_parameters}
  */
  readonly runCommandParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters;
  /**
  * step_functions_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task#step_functions_parameters SsmMaintenanceWindowTask#step_functions_parameters}
  */
  readonly stepFunctionsParameters?: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters;
}

export function ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(struct?: SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference | SsmMaintenanceWindowTaskTaskInvocationParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersToTerraform(struct!.automationParameters),
    lambda_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersToTerraform(struct!.lambdaParameters),
    run_command_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersToTerraform(struct!.runCommandParameters),
    step_functions_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersToTerraform(struct!.stepFunctionsParameters),
  }
}

export class SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SsmMaintenanceWindowTaskTaskInvocationParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automationParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationParameters = this._automationParameters?.internalValue;
    }
    if (this._lambdaParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaParameters = this._lambdaParameters?.internalValue;
    }
    if (this._runCommandParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runCommandParameters = this._runCommandParameters?.internalValue;
    }
    if (this._stepFunctionsParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepFunctionsParameters = this._stepFunctionsParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SsmMaintenanceWindowTaskTaskInvocationParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automationParameters.internalValue = undefined;
      this._lambdaParameters.internalValue = undefined;
      this._runCommandParameters.internalValue = undefined;
      this._stepFunctionsParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automationParameters.internalValue = value.automationParameters;
      this._lambdaParameters.internalValue = value.lambdaParameters;
      this._runCommandParameters.internalValue = value.runCommandParameters;
      this._stepFunctionsParameters.internalValue = value.stepFunctionsParameters;
    }
  }

  // automation_parameters - computed: false, optional: true, required: false
  private _automationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParametersOutputReference(this, "automation_parameters");
  public get automationParameters() {
    return this._automationParameters;
  }
  public putAutomationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersAutomationParameters) {
    this._automationParameters.internalValue = value;
  }
  public resetAutomationParameters() {
    this._automationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationParametersInput() {
    return this._automationParameters.internalValue;
  }

  // lambda_parameters - computed: false, optional: true, required: false
  private _lambdaParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParametersOutputReference(this, "lambda_parameters");
  public get lambdaParameters() {
    return this._lambdaParameters;
  }
  public putLambdaParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersLambdaParameters) {
    this._lambdaParameters.internalValue = value;
  }
  public resetLambdaParameters() {
    this._lambdaParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaParametersInput() {
    return this._lambdaParameters.internalValue;
  }

  // run_command_parameters - computed: false, optional: true, required: false
  private _runCommandParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParametersOutputReference(this, "run_command_parameters");
  public get runCommandParameters() {
    return this._runCommandParameters;
  }
  public putRunCommandParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersRunCommandParameters) {
    this._runCommandParameters.internalValue = value;
  }
  public resetRunCommandParameters() {
    this._runCommandParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runCommandParametersInput() {
    return this._runCommandParameters.internalValue;
  }

  // step_functions_parameters - computed: false, optional: true, required: false
  private _stepFunctionsParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParametersOutputReference(this, "step_functions_parameters");
  public get stepFunctionsParameters() {
    return this._stepFunctionsParameters;
  }
  public putStepFunctionsParameters(value: SsmMaintenanceWindowTaskTaskInvocationParametersStepFunctionsParameters) {
    this._stepFunctionsParameters.internalValue = value;
  }
  public resetStepFunctionsParameters() {
    this._stepFunctionsParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepFunctionsParametersInput() {
    return this._stepFunctionsParameters.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task aws_ssm_maintenance_window_task}
*/
export class SsmMaintenanceWindowTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_ssm_maintenance_window_task";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssm_maintenance_window_task aws_ssm_maintenance_window_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsmMaintenanceWindowTaskConfig
  */
  public constructor(scope: Construct, id: string, config: SsmMaintenanceWindowTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_maintenance_window_task',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._cutoffBehavior = config.cutoffBehavior;
    this._description = config.description;
    this._id = config.id;
    this._maxConcurrency = config.maxConcurrency;
    this._maxErrors = config.maxErrors;
    this._name = config.name;
    this._priority = config.priority;
    this._serviceRoleArn = config.serviceRoleArn;
    this._taskArn = config.taskArn;
    this._taskType = config.taskType;
    this._windowId = config.windowId;
    this._targets.internalValue = config.targets;
    this._taskInvocationParameters.internalValue = config.taskInvocationParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cutoff_behavior - computed: false, optional: true, required: false
  private _cutoffBehavior?: string; 
  public get cutoffBehavior() {
    return this.getStringAttribute('cutoff_behavior');
  }
  public set cutoffBehavior(value: string) {
    this._cutoffBehavior = value;
  }
  public resetCutoffBehavior() {
    this._cutoffBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cutoffBehaviorInput() {
    return this._cutoffBehavior;
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

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: string; 
  public get maxConcurrency() {
    return this.getStringAttribute('max_concurrency');
  }
  public set maxConcurrency(value: string) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_errors - computed: true, optional: true, required: false
  private _maxErrors?: string; 
  public get maxErrors() {
    return this.getStringAttribute('max_errors');
  }
  public set maxErrors(value: string) {
    this._maxErrors = value;
  }
  public resetMaxErrors() {
    this._maxErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxErrorsInput() {
    return this._maxErrors;
  }

  // name - computed: false, optional: true, required: false
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // service_role_arn - computed: true, optional: true, required: false
  private _serviceRoleArn?: string; 
  public get serviceRoleArn() {
    return this.getStringAttribute('service_role_arn');
  }
  public set serviceRoleArn(value: string) {
    this._serviceRoleArn = value;
  }
  public resetServiceRoleArn() {
    this._serviceRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceRoleArnInput() {
    return this._serviceRoleArn;
  }

  // task_arn - computed: false, optional: false, required: true
  private _taskArn?: string; 
  public get taskArn() {
    return this.getStringAttribute('task_arn');
  }
  public set taskArn(value: string) {
    this._taskArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskArnInput() {
    return this._taskArn;
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // window_id - computed: false, optional: false, required: true
  private _windowId?: string; 
  public get windowId() {
    return this.getStringAttribute('window_id');
  }
  public set windowId(value: string) {
    this._windowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowIdInput() {
    return this._windowId;
  }

  // window_task_id - computed: true, optional: false, required: false
  public get windowTaskId() {
    return this.getStringAttribute('window_task_id');
  }

  // targets - computed: false, optional: true, required: false
  private _targets = new SsmMaintenanceWindowTaskTargetsList(this, "targets", false);
  public get targets() {
    return this._targets;
  }
  public putTargets(value: SsmMaintenanceWindowTaskTargets[] | cdktf.IResolvable) {
    this._targets.internalValue = value;
  }
  public resetTargets() {
    this._targets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetsInput() {
    return this._targets.internalValue;
  }

  // task_invocation_parameters - computed: false, optional: true, required: false
  private _taskInvocationParameters = new SsmMaintenanceWindowTaskTaskInvocationParametersOutputReference(this, "task_invocation_parameters");
  public get taskInvocationParameters() {
    return this._taskInvocationParameters;
  }
  public putTaskInvocationParameters(value: SsmMaintenanceWindowTaskTaskInvocationParameters) {
    this._taskInvocationParameters.internalValue = value;
  }
  public resetTaskInvocationParameters() {
    this._taskInvocationParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInvocationParametersInput() {
    return this._taskInvocationParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cutoff_behavior: cdktf.stringToTerraform(this._cutoffBehavior),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      max_concurrency: cdktf.stringToTerraform(this._maxConcurrency),
      max_errors: cdktf.stringToTerraform(this._maxErrors),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      service_role_arn: cdktf.stringToTerraform(this._serviceRoleArn),
      task_arn: cdktf.stringToTerraform(this._taskArn),
      task_type: cdktf.stringToTerraform(this._taskType),
      window_id: cdktf.stringToTerraform(this._windowId),
      targets: cdktf.listMapper(ssmMaintenanceWindowTaskTargetsToTerraform, true)(this._targets.internalValue),
      task_invocation_parameters: ssmMaintenanceWindowTaskTaskInvocationParametersToTerraform(this._taskInvocationParameters.internalValue),
    };
  }
}
