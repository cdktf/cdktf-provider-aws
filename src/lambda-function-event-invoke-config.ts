// https://www.terraform.io/docs/providers/aws/r/lambda_function_event_invoke_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaFunctionEventInvokeConfigConfig extends cdktf.TerraformMetaArguments {
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

function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
  readonly destination: string;
}

function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export interface LambdaFunctionEventInvokeConfigDestinationConfig {
  /** on_failure block */
  readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure[];
  /** on_success block */
  readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess[];
}

function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    on_failure: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform)(struct!.onFailure),
    on_success: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform)(struct!.onSuccess),
  }
}


// Resource

export class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {

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

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number;
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number ) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
  private _maximumRetryAttempts?: number;
  public get maximumRetryAttempts() {
    return this.getNumberAttribute('maximum_retry_attempts');
  }
  public set maximumRetryAttempts(value: number ) {
    this._maximumRetryAttempts = value;
  }
  public resetMaximumRetryAttempts() {
    this._maximumRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumRetryAttemptsInput() {
    return this._maximumRetryAttempts
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string;
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string ) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig[];
  public get destinationConfig() {
    return this.interpolationForAttribute('destination_config') as any;
  }
  public set destinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig[] ) {
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
      function_name: cdktf.stringToTerraform(this._functionName),
      maximum_event_age_in_seconds: cdktf.numberToTerraform(this._maximumEventAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      destination_config: cdktf.listMapper(lambdaFunctionEventInvokeConfigDestinationConfigToTerraform)(this._destinationConfig),
    };
  }
}
