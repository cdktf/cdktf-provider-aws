// https://www.terraform.io/docs/providers/aws/r/lambda_event_source_mapping.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "batch_size": {
        "type": "number",
        "optional": true
      },
      "bisect_batch_on_function_error": {
        "type": "bool",
        "optional": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "event_source_arn": {
        "type": "string",
        "required": true
      },
      "function_arn": {
        "type": "string",
        "computed": true
      },
      "function_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_modified": {
        "type": "string",
        "computed": true
      },
      "last_processing_result": {
        "type": "string",
        "computed": true
      },
      "maximum_batching_window_in_seconds": {
        "type": "number",
        "optional": true
      },
      "maximum_record_age_in_seconds": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "maximum_retry_attempts": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "parallelization_factor": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "starting_position": {
        "type": "string",
        "optional": true
      },
      "starting_position_timestamp": {
        "type": "string",
        "optional": true
      },
      "state": {
        "type": "string",
        "computed": true
      },
      "state_transition_reason": {
        "type": "string",
        "computed": true
      },
      "uuid": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "destination_config": {
        "nesting_mode": "list",
        "block": {
          "block_types": {
            "on_failure": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "destination_arn": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            }
          }
        },
        "max_items": 1
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LambdaEventSourceMappingConfig extends TerraformMetaArguments {
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
export interface LambdaEventSourceMappingDestinationConfig {
  /** on_failure block */
  readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure[];
}

// Resource

export class LambdaEventSourceMapping extends TerraformResource {

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
    return this._batchSize;
  }
  public set batchSize(value: number | undefined) {
    this._batchSize = value;
  }

  // bisect_batch_on_function_error - computed: false, optional: true, required: false
  private _bisectBatchOnFunctionError?: boolean;
  public get bisectBatchOnFunctionError() {
    return this._bisectBatchOnFunctionError;
  }
  public set bisectBatchOnFunctionError(value: boolean | undefined) {
    this._bisectBatchOnFunctionError = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // event_source_arn - computed: false, optional: false, required: true
  private _eventSourceArn: string;
  public get eventSourceArn() {
    return this._eventSourceArn;
  }
  public set eventSourceArn(value: string) {
    this._eventSourceArn = value;
  }

  // function_arn - computed: true, optional: false, required: true
  public get functionArn() {
    return this.getStringAttribute('function_arn');
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this._functionName;
  }
  public set functionName(value: string) {
    this._functionName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_modified - computed: true, optional: false, required: true
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // last_processing_result - computed: true, optional: false, required: true
  public get lastProcessingResult() {
    return this.getStringAttribute('last_processing_result');
  }

  // maximum_batching_window_in_seconds - computed: false, optional: true, required: false
  private _maximumBatchingWindowInSeconds?: number;
  public get maximumBatchingWindowInSeconds() {
    return this._maximumBatchingWindowInSeconds;
  }
  public set maximumBatchingWindowInSeconds(value: number | undefined) {
    this._maximumBatchingWindowInSeconds = value;
  }

  // maximum_record_age_in_seconds - computed: true, optional: true, required: false
  private _maximumRecordAgeInSeconds?: number;
  public get maximumRecordAgeInSeconds() {
    return this._maximumRecordAgeInSeconds ?? this.getNumberAttribute('maximum_record_age_in_seconds');
  }
  public set maximumRecordAgeInSeconds(value: number | undefined) {
    this._maximumRecordAgeInSeconds = value;
  }

  // maximum_retry_attempts - computed: true, optional: true, required: false
  private _maximumRetryAttempts?: number;
  public get maximumRetryAttempts() {
    return this._maximumRetryAttempts ?? this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number | undefined) {
    this._maximumRetryAttempts = value;
  }

  // parallelization_factor - computed: true, optional: true, required: false
  private _parallelizationFactor?: number;
  public get parallelizationFactor() {
    return this._parallelizationFactor ?? this.getNumberAttribute('parallelization_factor');
  }
  public set parallelizationFactor(value: number | undefined) {
    this._parallelizationFactor = value;
  }

  // starting_position - computed: false, optional: true, required: false
  private _startingPosition?: string;
  public get startingPosition() {
    return this._startingPosition;
  }
  public set startingPosition(value: string | undefined) {
    this._startingPosition = value;
  }

  // starting_position_timestamp - computed: false, optional: true, required: false
  private _startingPositionTimestamp?: string;
  public get startingPositionTimestamp() {
    return this._startingPositionTimestamp;
  }
  public set startingPositionTimestamp(value: string | undefined) {
    this._startingPositionTimestamp = value;
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_transition_reason - computed: true, optional: false, required: true
  public get stateTransitionReason() {
    return this.getStringAttribute('state_transition_reason');
  }

  // uuid - computed: true, optional: false, required: true
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig?: LambdaEventSourceMappingDestinationConfig[];
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public set destinationConfig(value: LambdaEventSourceMappingDestinationConfig[] | undefined) {
    this._destinationConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      batch_size: this._batchSize,
      bisect_batch_on_function_error: this._bisectBatchOnFunctionError,
      enabled: this._enabled,
      event_source_arn: this._eventSourceArn,
      function_name: this._functionName,
      maximum_batching_window_in_seconds: this._maximumBatchingWindowInSeconds,
      maximum_record_age_in_seconds: this._maximumRecordAgeInSeconds,
      maximum_retry_attempts: this._maximumRetryAttempts,
      parallelization_factor: this._parallelizationFactor,
      starting_position: this._startingPosition,
      starting_position_timestamp: this._startingPositionTimestamp,
      destination_config: this._destinationConfig,
    };
  }
}
