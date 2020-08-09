// https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "function_name": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "maximum_event_age_in_seconds": {
        "type": "number",
        "optional": true
      },
      "maximum_retry_attempts": {
        "type": "number",
        "optional": true
      },
      "qualifier": {
        "type": "string",
        "optional": true
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
                  "destination": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 1
            },
            "on_success": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "destination": {
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

export interface LambdaFunctionEventInvokeConfigConfig extends TerraformMetaArguments {
  readonly functionName: string;
  readonly maximumEventAgeInSeconds?: number;
  readonly maximumRetryAttempts?: number;
  readonly qualifier?: string;
  /** destination_config block */
  readonly destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig[];
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
  readonly destination: string;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
  readonly destination: string;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfig {
  /** on_failure block */
  readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure[];
  /** on_success block */
  readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess[];
}

// Resource

export class LambdaFunctionEventInvokeConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LambdaFunctionEventInvokeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function_event_invoke_config',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._functionName = config.functionName;
    this._maximumEventAgeInSeconds = config.maximumEventAgeInSeconds;
    this._maximumRetryAttempts = config.maximumRetryAttempts;
    this._qualifier = config.qualifier;
    this._destinationConfig = config.destinationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number;
  public get maximumEventAgeInSeconds() {
    return this._maximumEventAgeInSeconds;
  }
  public set maximumEventAgeInSeconds(value: number | undefined) {
    this._maximumEventAgeInSeconds = value;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number;
  public get maximumRetryAttempts() {
    return this._maximumRetryAttempts;
  }
  public set maximumRetryAttempts(value: number | undefined) {
    this._maximumRetryAttempts = value;
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string;
  public get qualifier() {
    return this._qualifier;
  }
  public set qualifier(value: string | undefined) {
    this._qualifier = value;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig[];
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public set destinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig[] | undefined) {
    this._destinationConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: this._functionName,
      maximum_event_age_in_seconds: this._maximumEventAgeInSeconds,
      maximum_retry_attempts: this._maximumRetryAttempts,
      qualifier: this._qualifier,
      destination_config: this._destinationConfig,
    };
  }
}
