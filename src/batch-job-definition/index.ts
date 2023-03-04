// https://www.terraform.io/docs/providers/aws/r/batch_job_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#container_properties BatchJobDefinition#container_properties}
  */
  readonly containerProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#id BatchJobDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#name BatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#parameters BatchJobDefinition#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#platform_capabilities BatchJobDefinition#platform_capabilities}
  */
  readonly platformCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#propagate_tags BatchJobDefinition#propagate_tags}
  */
  readonly propagateTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags BatchJobDefinition#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#tags_all BatchJobDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#type BatchJobDefinition#type}
  */
  readonly type: string;
  /**
  * retry_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#retry_strategy BatchJobDefinition#retry_strategy}
  */
  readonly retryStrategy?: BatchJobDefinitionRetryStrategy;
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#timeout BatchJobDefinition#timeout}
  */
  readonly timeout?: BatchJobDefinitionTimeout;
}
export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#action BatchJobDefinition#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_exit_code BatchJobDefinition#on_exit_code}
  */
  readonly onExitCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_reason BatchJobDefinition#on_reason}
  */
  readonly onReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#on_status_reason BatchJobDefinition#on_status_reason}
  */
  readonly onStatusReason?: string;
}

export function batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    on_exit_code: cdktf.stringToTerraform(struct!.onExitCode),
    on_reason: cdktf.stringToTerraform(struct!.onReason),
    on_status_reason: cdktf.stringToTerraform(struct!.onStatusReason),
  }
}

export class BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._onExitCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.onExitCode = this._onExitCode;
    }
    if (this._onReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onReason = this._onReason;
    }
    if (this._onStatusReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStatusReason = this._onStatusReason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionRetryStrategyEvaluateOnExit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._onExitCode = undefined;
      this._onReason = undefined;
      this._onStatusReason = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._onExitCode = value.onExitCode;
      this._onReason = value.onReason;
      this._onStatusReason = value.onStatusReason;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // on_exit_code - computed: false, optional: true, required: false
  private _onExitCode?: string; 
  public get onExitCode() {
    return this.getStringAttribute('on_exit_code');
  }
  public set onExitCode(value: string) {
    this._onExitCode = value;
  }
  public resetOnExitCode() {
    this._onExitCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onExitCodeInput() {
    return this._onExitCode;
  }

  // on_reason - computed: false, optional: true, required: false
  private _onReason?: string; 
  public get onReason() {
    return this.getStringAttribute('on_reason');
  }
  public set onReason(value: string) {
    this._onReason = value;
  }
  public resetOnReason() {
    this._onReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onReasonInput() {
    return this._onReason;
  }

  // on_status_reason - computed: false, optional: true, required: false
  private _onStatusReason?: string; 
  public get onStatusReason() {
    return this.getStringAttribute('on_status_reason');
  }
  public set onStatusReason(value: string) {
    this._onStatusReason = value;
  }
  public resetOnStatusReason() {
    this._onStatusReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStatusReasonInput() {
    return this._onStatusReason;
  }
}

export class BatchJobDefinitionRetryStrategyEvaluateOnExitList extends cdktf.ComplexList {
  public internalValue? : BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable

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
  public get(index: number): BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference {
    return new BatchJobDefinitionRetryStrategyEvaluateOnExitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchJobDefinitionRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempts BatchJobDefinition#attempts}
  */
  readonly attempts?: number;
  /**
  * evaluate_on_exit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}
  */
  readonly evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable;
}

export function batchJobDefinitionRetryStrategyToTerraform(struct?: BatchJobDefinitionRetryStrategyOutputReference | BatchJobDefinitionRetryStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    evaluate_on_exit: cdktf.listMapper(batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform, true)(struct!.evaluateOnExit),
  }
}

export class BatchJobDefinitionRetryStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchJobDefinitionRetryStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._evaluateOnExit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateOnExit = this._evaluateOnExit?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionRetryStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attempts = undefined;
      this._evaluateOnExit.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attempts = value.attempts;
      this._evaluateOnExit.internalValue = value.evaluateOnExit;
    }
  }

  // attempts - computed: false, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // evaluate_on_exit - computed: false, optional: true, required: false
  private _evaluateOnExit = new BatchJobDefinitionRetryStrategyEvaluateOnExitList(this, "evaluate_on_exit", false);
  public get evaluateOnExit() {
    return this._evaluateOnExit;
  }
  public putEvaluateOnExit(value: BatchJobDefinitionRetryStrategyEvaluateOnExit[] | cdktf.IResolvable) {
    this._evaluateOnExit.internalValue = value;
  }
  public resetEvaluateOnExit() {
    this._evaluateOnExit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateOnExitInput() {
    return this._evaluateOnExit.internalValue;
  }
}
export interface BatchJobDefinitionTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}
  */
  readonly attemptDurationSeconds?: number;
}

export function batchJobDefinitionTimeoutToTerraform(struct?: BatchJobDefinitionTimeoutOutputReference | BatchJobDefinitionTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempt_duration_seconds: cdktf.numberToTerraform(struct!.attemptDurationSeconds),
  }
}

export class BatchJobDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchJobDefinitionTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attemptDurationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.attemptDurationSeconds = this._attemptDurationSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchJobDefinitionTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attemptDurationSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attemptDurationSeconds = value.attemptDurationSeconds;
    }
  }

  // attempt_duration_seconds - computed: false, optional: true, required: false
  private _attemptDurationSeconds?: number; 
  public get attemptDurationSeconds() {
    return this.getNumberAttribute('attempt_duration_seconds');
  }
  public set attemptDurationSeconds(value: number) {
    this._attemptDurationSeconds = value;
  }
  public resetAttemptDurationSeconds() {
    this._attemptDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptDurationSecondsInput() {
    return this._attemptDurationSeconds;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition aws_batch_job_definition}
*/
export class BatchJobDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_batch_job_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition aws_batch_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_job_definition',
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
    this._containerProperties = config.containerProperties;
    this._id = config.id;
    this._name = config.name;
    this._parameters = config.parameters;
    this._platformCapabilities = config.platformCapabilities;
    this._propagateTags = config.propagateTags;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._retryStrategy.internalValue = config.retryStrategy;
    this._timeout.internalValue = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_properties - computed: false, optional: true, required: false
  private _containerProperties?: string; 
  public get containerProperties() {
    return this.getStringAttribute('container_properties');
  }
  public set containerProperties(value: string) {
    this._containerProperties = value;
  }
  public resetContainerProperties() {
    this._containerProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPropertiesInput() {
    return this._containerProperties;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // platform_capabilities - computed: false, optional: true, required: false
  private _platformCapabilities?: string[]; 
  public get platformCapabilities() {
    return cdktf.Fn.tolist(this.getListAttribute('platform_capabilities'));
  }
  public set platformCapabilities(value: string[]) {
    this._platformCapabilities = value;
  }
  public resetPlatformCapabilities() {
    this._platformCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformCapabilitiesInput() {
    return this._platformCapabilities;
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: boolean | cdktf.IResolvable; 
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }
  public set propagateTags(value: boolean | cdktf.IResolvable) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
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

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy = new BatchJobDefinitionRetryStrategyOutputReference(this, "retry_strategy");
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public putRetryStrategy(value: BatchJobDefinitionRetryStrategy) {
    this._retryStrategy.internalValue = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new BatchJobDefinitionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: BatchJobDefinitionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_properties: cdktf.stringToTerraform(this._containerProperties),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      platform_capabilities: cdktf.listMapper(cdktf.stringToTerraform, false)(this._platformCapabilities),
      propagate_tags: cdktf.booleanToTerraform(this._propagateTags),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      retry_strategy: batchJobDefinitionRetryStrategyToTerraform(this._retryStrategy.internalValue),
      timeout: batchJobDefinitionTimeoutToTerraform(this._timeout.internalValue),
    };
  }
}
