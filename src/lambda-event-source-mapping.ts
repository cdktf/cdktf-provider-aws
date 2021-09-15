// https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#batch_size LambdaEventSourceMapping#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}
  */
  readonly bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#enabled LambdaEventSourceMapping#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#event_source_arn LambdaEventSourceMapping#event_source_arn}
  */
  readonly eventSourceArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#function_name LambdaEventSourceMapping#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#function_response_types LambdaEventSourceMapping#function_response_types}
  */
  readonly functionResponseTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}
  */
  readonly maximumBatchingWindowInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}
  */
  readonly maximumRecordAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#parallelization_factor LambdaEventSourceMapping#parallelization_factor}
  */
  readonly parallelizationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#queues LambdaEventSourceMapping#queues}
  */
  readonly queues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position LambdaEventSourceMapping#starting_position}
  */
  readonly startingPosition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}
  */
  readonly startingPositionTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#topics LambdaEventSourceMapping#topics}
  */
  readonly topics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}
  */
  readonly tumblingWindowInSeconds?: number;
  /**
  * destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_config LambdaEventSourceMapping#destination_config}
  */
  readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig[];
  /**
  * self_managed_event_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}
  */
  readonly selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource[];
  /**
  * source_access_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#source_access_configuration LambdaEventSourceMapping#source_access_configuration}
  */
  readonly sourceAccessConfiguration?: LambdaEventSourceMappingSourceAccessConfiguration[];
}
export interface LambdaEventSourceMappingDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#destination_arn LambdaEventSourceMapping#destination_arn}
  */
  readonly destinationArn: string;
}

function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
  }
}

export interface LambdaEventSourceMappingDestinationConfig {
  /**
  * on_failure block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#on_failure LambdaEventSourceMapping#on_failure}
  */
  readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure[];
}

function lambdaEventSourceMappingDestinationConfigToTerraform(struct?: LambdaEventSourceMappingDestinationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_failure: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigOnFailureToTerraform)(struct!.onFailure),
  }
}

export interface LambdaEventSourceMappingSelfManagedEventSource {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#endpoints LambdaEventSourceMapping#endpoints}
  */
  readonly endpoints: { [key: string]: string } | cdktf.IResolvable;
}

function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    endpoints: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.endpoints),
  }
}

export interface LambdaEventSourceMappingSourceAccessConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#type LambdaEventSourceMapping#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html#uri LambdaEventSourceMapping#uri}
  */
  readonly uri: string;
}

function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct?: LambdaEventSourceMappingSourceAccessConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping}
*/
export class LambdaEventSourceMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lambda_event_source_mapping";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html aws_lambda_event_source_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaEventSourceMappingConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaEventSourceMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_event_source_mapping',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._batchSize = config.batchSize;
    this._bisectBatchOnFunctionError = config.bisectBatchOnFunctionError;
    this._enabled = config.enabled;
    this._eventSourceArn = config.eventSourceArn;
    this._functionName = config.functionName;
    this._functionResponseTypes = config.functionResponseTypes;
    this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
    this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
    this._maximumRetryAttempts = config.maximumRetryAttempts;
    this._parallelizationFactor = config.parallelizationFactor;
    this._queues = config.queues;
    this._startingPosition = config.startingPosition;
    this._startingPositionTimestamp = config.startingPositionTimestamp;
    this._topics = config.topics;
    this._tumblingWindowInSeconds = config.tumblingWindowInSeconds;
    this._destinationConfig = config.destinationConfig;
    this._selfManagedEventSource = config.selfManagedEventSource;
    this._sourceAccessConfiguration = config.sourceAccessConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number;
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number ) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize
  }

  // bisect_batch_on_function_error - computed: false, optional: true, required: false
  private _bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
  public get bisectBatchOnFunctionError() {
    return this.getBooleanAttribute('bisect_batch_on_function_error');
  }
  public set bisectBatchOnFunctionError(value: boolean | cdktf.IResolvable ) {
    this._bisectBatchOnFunctionError = value;
  }
  public resetBisectBatchOnFunctionError() {
    this._bisectBatchOnFunctionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bisectBatchOnFunctionErrorInput() {
    return this._bisectBatchOnFunctionError
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // event_source_arn - computed: false, optional: true, required: false
  private _eventSourceArn?: string;
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }
  public set eventSourceArn(value: string ) {
    this._eventSourceArn = value;
  }
  public resetEventSourceArn() {
    this._eventSourceArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSourceArnInput() {
    return this._eventSourceArn
  }

  // function_arn - computed: true, optional: false, required: false
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName
  }

  // function_response_types - computed: false, optional: true, required: false
  private _functionResponseTypes?: string[];
  public get functionResponseTypes() {
    return this.getListAttribute('function_response_types');
  }
  public set functionResponseTypes(value: string[] ) {
    this._functionResponseTypes = value;
  }
  public resetFunctionResponseTypes() {
    this._functionResponseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionResponseTypesInput() {
    return this._functionResponseTypes
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_processing_result - computed: true, optional: false, required: false
  public get lastProcessingResult() {
    return this.getStringAttribute('last_processing_result');
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number;
  public get maximumBatchingWindowInSeconds() {
    return this.getNumberAttribute('maximum_batching_window_in_seconds');
  }
  public set maximumBatchingWindowInSeconds(value: number ) {
    this._maximumBatchingWindowInSeconds = value;
  }
  public resetMaximumBatchingWindowInSeconds() {
    this._maximumBatchingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBatchingWindowInSecondsInput() {
    return this._maximumBatchingWindowInSeconds
  }

  // maximum_record_age_in_seconds - computed: true, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number;
  public get maximumRecordAgeInSeconds() {
    return this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number) {
    this._maximumRecordAgeInSeconds = value;
  }
  public resetMaximumRecordAgeInSeconds() {
    this._maximumRecordAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRecordAgeInSecondsInput() {
    return this._maximumRecordAgeInSeconds
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
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
    return this._maximumRetryAttempts
  }

  // parallelization_factor - computed: true, optional: true, required: false
  private _parallelizationFactor?: number;
  public get parallelizationFactor() {
    return this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number) {
    this._parallelizationFactor = value;
  }
  public resetParallelizationFactor() {
    this._parallelizationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelizationFactorInput() {
    return this._parallelizationFactor
  }

  // queues - computed: false, optional: true, required: false
  private _queues?: string[];
  public get queues() {
    return this.getListAttribute('queues');
  }
  public set queues(value: string[] ) {
    this._queues = value;
  }
  public resetQueues() {
    this._queues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queuesInput() {
    return this._queues
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string;
  public get startingPosition() {
    return this.getStringAttribute('starting_position');
  }
  public set startingPosition(value: string ) {
    this._startingPosition = value;
  }
  public resetStartingPosition() {
    this._startingPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionInput() {
    return this._startingPosition
  }

  // starting_position_timestamp - computed: false, optional: true, required: false
  private _startingPositionTimestamp?: string;
  public get startingPositionTimestamp() {
    return this.getStringAttribute('starting_position_timestamp');
  }
  public set startingPositionTimestamp(value: string ) {
    this._startingPositionTimestamp = value;
  }
  public resetStartingPositionTimestamp() {
    this._startingPositionTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingPositionTimestampInput() {
    return this._startingPositionTimestamp
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_transition_reason - computed: true, optional: false, required: false
  public get stateTransitionReason() {
    return this.getStringAttribute('state_transition_reason');
  }

  // topics - computed: false, optional: true, required: false
  private _topics?: string[];
  public get topics() {
    return this.getListAttribute('topics');
  }
  public set topics(value: string[] ) {
    this._topics = value;
  }
  public resetTopics() {
    this._topics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics
  }

  // tumbling_window_in_seconds - computed: false, optional: true, required: false
  private _tumblingWindowInSeconds?: number;
  public get tumblingWindowInSeconds() {
    return this.getNumberAttribute('tumbling_window_in_seconds');
  }
  public set tumblingWindowInSeconds(value: number ) {
    this._tumblingWindowInSeconds = value;
  }
  public resetTumblingWindowInSeconds() {
    this._tumblingWindowInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tumblingWindowInSecondsInput() {
    return this._tumblingWindowInSeconds
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig?: LambdaEventSourceMappingDestinationConfig[];
  public get destinationConfig() {
    return this.interpolationForAttribute('destination_config') as any;
  }
  public set destinationConfig(value: LambdaEventSourceMappingDestinationConfig[] ) {
    this._destinationConfig = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig
  }

  // self_managed_event_source - computed: false, optional: true, required: false
  private _selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource[];
  public get selfManagedEventSource() {
    return this.interpolationForAttribute('self_managed_event_source') as any;
  }
  public set selfManagedEventSource(value: LambdaEventSourceMappingSelfManagedEventSource[] ) {
    this._selfManagedEventSource = value;
  }
  public resetSelfManagedEventSource() {
    this._selfManagedEventSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedEventSourceInput() {
    return this._selfManagedEventSource
  }

  // source_access_configuration - computed: false, optional: true, required: false
  private _sourceAccessConfiguration?: LambdaEventSourceMappingSourceAccessConfiguration[];
  public get sourceAccessConfiguration() {
    return this.interpolationForAttribute('source_access_configuration') as any;
  }
  public set sourceAccessConfiguration(value: LambdaEventSourceMappingSourceAccessConfiguration[] ) {
    this._sourceAccessConfiguration = value;
  }
  public resetSourceAccessConfiguration() {
    this._sourceAccessConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAccessConfigurationInput() {
    return this._sourceAccessConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_size: cdktf.numberToTerraform(this._batchSize),
      bisect_batch_on_function_error: cdktf.booleanToTerraform(this._bisectBatchOnFunctionError),
      enabled: cdktf.booleanToTerraform(this._enabled),
      event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
      function_name: cdktf.stringToTerraform(this._functionName),
      function_response_types: cdktf.listMapper(cdktf.stringToTerraform)(this._functionResponseTypes),
      maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
      maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
      parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
      queues: cdktf.listMapper(cdktf.stringToTerraform)(this._queues),
      starting_position: cdktf.stringToTerraform(this._startingPosition),
      starting_position_timestamp: cdktf.stringToTerraform(this._startingPositionTimestamp),
      topics: cdktf.listMapper(cdktf.stringToTerraform)(this._topics),
      tumbling_window_in_seconds: cdktf.numberToTerraform(this._tumblingWindowInSeconds),
      destination_config: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigToTerraform)(this._destinationConfig),
      self_managed_event_source: cdktf.listMapper(lambdaEventSourceMappingSelfManagedEventSourceToTerraform)(this._selfManagedEventSource),
      source_access_configuration: cdktf.listMapper(lambdaEventSourceMappingSourceAccessConfigurationToTerraform)(this._sourceAccessConfiguration),
    };
  }
}
