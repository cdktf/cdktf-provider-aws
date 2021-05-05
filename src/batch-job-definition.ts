// https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly containerProperties?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly platformCapabilities?: string[];
  readonly propagateTags?: boolean;
  readonly tags?: { [key: string]: string };
  readonly tagsAll?: { [key: string]: string };
  readonly type: string;
  /** retry_strategy block */
  readonly retryStrategy?: BatchJobDefinitionRetryStrategy[];
  /** timeout block */
  readonly timeout?: BatchJobDefinitionTimeout[];
}
export interface BatchJobDefinitionRetryStrategyEvaluateOnExit {
  readonly action: string;
  readonly onExitCode?: string;
  readonly onReason?: string;
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
  readonly attempts?: number;
  /** evaluate_on_exit block */
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
  readonly attemptDurationSeconds?: number;
}

function batchJobDefinitionTimeoutToTerraform(struct?: BatchJobDefinitionTimeout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attempt_duration_seconds: cdktf.numberToTerraform(struct!.attemptDurationSeconds),
  }
}


// Resource

export class BatchJobDefinition extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
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
  private _propagateTags?: boolean;
  public get propagateTags() {
    return this.getBooleanAttribute('propagate_tags');
  }
  public set propagateTags(value: boolean ) {
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
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
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
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
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
