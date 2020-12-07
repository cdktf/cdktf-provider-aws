// https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchJobDefinitionConfig extends cdktf.TerraformMetaArguments {
  readonly containerProperties?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly type: string;
  /** retry_strategy block */
  readonly retryStrategy?: BatchJobDefinitionRetryStrategy[];
  /** timeout block */
  readonly timeout?: BatchJobDefinitionTimeout[];
}
export interface BatchJobDefinitionRetryStrategy {
  readonly attempts?: number;
}

function batchJobDefinitionRetryStrategyToTerraform(struct?: BatchJobDefinitionRetryStrategy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
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
      type: cdktf.stringToTerraform(this._type),
      retry_strategy: cdktf.listMapper(batchJobDefinitionRetryStrategyToTerraform)(this._retryStrategy),
      timeout: cdktf.listMapper(batchJobDefinitionTimeoutToTerraform)(this._timeout),
    };
  }
}
