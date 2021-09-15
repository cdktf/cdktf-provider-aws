// https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#container_properties BatchJobDefinition#container_properties}
  */
  readonly containerProperties?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#name BatchJobDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#parameters BatchJobDefinition#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#platform_capabilities BatchJobDefinition#platform_capabilities}
  */
  readonly platformCapabilities?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#propagate_tags BatchJobDefinition#propagate_tags}
  */
  readonly propagateTags?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags BatchJobDefinition#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#tags_all BatchJobDefinition#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#type BatchJobDefinition#type}
  */
  readonly type: string;
  /**
  * retry_strategy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#retry_strategy BatchJobDefinition#retry_strategy}
  */
  readonly retryStrategy?: BatchJobDefinitionRetryStrategy[];
  /**
  * timeout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#timeout BatchJobDefinition#timeout}
  */
  readonly timeout?: BatchJobDefinitionTimeout[];
}
export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#action BatchJobDefinition#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_exit_code BatchJobDefinition#on_exit_code}
  */
  readonly onExitCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_reason BatchJobDefinition#on_reason}
  */
  readonly onReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#on_status_reason BatchJobDefinition#on_status_reason}
  */
  readonly onStatusReason?: string;
}

function batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform(struct?: BatchJobDefinitionRetryStrategyEvaluateOnExit): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    on_exit_code: cdktf.stringToTerraform(struct!.onExitCode),
    on_reason: cdktf.stringToTerraform(struct!.onReason),
    on_status_reason: cdktf.stringToTerraform(struct!.onStatusReason),
  }
}

export interface BatchJobDefinitionRetryStrategy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempts BatchJobDefinition#attempts}
  */
  readonly attempts?: number;
  /**
  * evaluate_on_exit block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#evaluate_on_exit BatchJobDefinition#evaluate_on_exit}
  */
  readonly evaluateOnExit?: BatchJobDefinitionRetryStrategyEvaluateOnExit[];
}

function batchJobDefinitionRetryStrategyToTerraform(struct?: BatchJobDefinitionRetryStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    evaluate_on_exit: cdktf.listMapper(batchJobDefinitionRetryStrategyEvaluateOnExitToTerraform)(struct!.evaluateOnExit),
  }
}

export interface BatchJobDefinitionTimeout {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html#attempt_duration_seconds BatchJobDefinition#attempt_duration_seconds}
  */
  readonly attemptDurationSeconds?: number;
}

function batchJobDefinitionTimeoutToTerraform(struct?: BatchJobDefinitionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attempt_duration_seconds: cdktf.numberToTerraform(struct!.attemptDurationSeconds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition}
*/
export class BatchJobDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_batch_job_definition";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html aws_batch_job_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchJobDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_job_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerProperties = config.containerProperties;
    this._name = config.name;
    this._parameters = config.parameters;
    this._platformCapabilities = config.platformCapabilities;
    this._propagateTags = config.propagateTags;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._type = config.type;
    this._retryStrategy = config.retryStrategy;
    this._timeout = config.timeout;
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
  public set containerProperties(value: string ) {
    this._containerProperties = value;
  }
  public resetContainerProperties() {
    this._containerProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPropertiesInput() {
    return this._containerProperties
  }

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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string } | cdktf.IResolvable;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // platform_capabilities - computed: false, optional: true, required: false
  private _platformCapabilities?: string[];
  public get platformCapabilities() {
    return this.getListAttribute('platform_capabilities');
  }
  public set platformCapabilities(value: string[] ) {
    this._platformCapabilities = value;
  }
  public resetPlatformCapabilities() {
    this._platformCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformCapabilitiesInput() {
    return this._platformCapabilities
  }

  // propagate_tags - computed: false, optional: true, required: false
  private _propagateTags?: boolean | cdktf.IResolvable;
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }
  public set propagateTags(value: boolean | cdktf.IResolvable ) {
    this._propagateTags = value;
  }
  public resetPropagateTags() {
    this._propagateTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateTagsInput() {
    return this._propagateTags
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy?: BatchJobDefinitionRetryStrategy[];
  public get retryStrategy() {
    return this.interpolationForAttribute('retry_strategy') as any;
  }
  public set retryStrategy(value: BatchJobDefinitionRetryStrategy[] ) {
    this._retryStrategy = value;
  }
  public resetRetryStrategy() {
    this._retryStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryStrategyInput() {
    return this._retryStrategy
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: BatchJobDefinitionTimeout[];
  public get timeout() {
    return this.interpolationForAttribute('timeout') as any;
  }
  public set timeout(value: BatchJobDefinitionTimeout[] ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_properties: cdktf.stringToTerraform(this._containerProperties),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      platform_capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._platformCapabilities),
      propagate_tags: cdktf.booleanToTerraform(this._propagateTags),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      type: cdktf.stringToTerraform(this._type),
      retry_strategy: cdktf.listMapper(batchJobDefinitionRetryStrategyToTerraform)(this._retryStrategy),
      timeout: cdktf.listMapper(batchJobDefinitionTimeoutToTerraform)(this._timeout),
    };
  }
}
