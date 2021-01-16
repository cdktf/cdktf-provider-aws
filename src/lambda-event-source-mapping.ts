// https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
  readonly batchSize?: number;
  readonly bisectBatchOnFunctionError?: boolean;
  readonly enabled?: boolean;
  readonly eventSourceArn: string;
  readonly functionName: string;
  readonly maximumBatchingWindowInSeconds?: number;
  readonly maximumRecordAgeInSeconds?: number;
  readonly maximumRetryAttempts?: number;
  readonly parallelizationFactor?: number;
  readonly startingPosition?: string;
  readonly startingPositionTimestamp?: string;
  /** destination_config block */
  readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig[];
}
export interface LambdaEventSourceMappingDestinationConfigOnFailure {
  readonly destinationArn: string;
}

function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
  }
}

export interface LambdaEventSourceMappingDestinationConfig {
  /** on_failure block */
  readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure[];
}

function lambdaEventSourceMappingDestinationConfigToTerraform(struct?: LambdaEventSourceMappingDestinationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_failure: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigOnFailureToTerraform)(struct!.onFailure),
  }
}


// Resource

export class LambdaEventSourceMapping extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._maximumBatchingWindowInSeconds = config.maximumBatchingWindowInSeconds;
    this._maximumRecordAgeInSeconds = config.maximumRecordAgeInSeconds;
    this._maximumRetryAttempts = config.maximumRetryAttempts;
    this._parallelizationFactor = config.parallelizationFactor;
    this._startingPosition = config.startingPosition;
    this._startingPositionTimestamp = config.startingPositionTimestamp;
    this._destinationConfig = config.destinationConfig;
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
  private _bisectBatchOnFunctionError?: boolean;
  public get bisectBatchOnFunctionError() {
    return this.getBooleanAttribute('bisect_batch_on_function_error');
  }
  public set bisectBatchOnFunctionError(value: boolean ) {
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
  private _enabled?: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean ) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // event_source_arn - computed: false, optional: false, required: true
  private _eventSourceArn: string;
  public get eventSourceArn() {
    return this.getStringAttribute('event_source_arn');
  }
  public set eventSourceArn(value: string) {
    this._eventSourceArn = value;
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
      maximum_batching_window_in_seconds: cdktf.numberToTerraform(this._maximumBatchingWindowInSeconds),
      maximum_record_age_in_seconds: cdktf.numberToTerraform(this._maximumRecordAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
      parallelization_factor: cdktf.numberToTerraform(this._parallelizationFactor),
      starting_position: cdktf.stringToTerraform(this._startingPosition),
      starting_position_timestamp: cdktf.stringToTerraform(this._startingPositionTimestamp),
      destination_config: cdktf.listMapper(lambdaEventSourceMappingDestinationConfigToTerraform)(this._destinationConfig),
    };
  }
}
