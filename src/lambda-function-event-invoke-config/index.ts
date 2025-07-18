/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaFunctionEventInvokeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}
  */
  readonly maximumEventAgeInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}
  */
  readonly maximumRetryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#region LambdaFunctionEventInvokeConfig#region}
  */
  readonly region?: string;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#destination_config LambdaFunctionEventInvokeConfig#destination_config}
  */
  readonly destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}
  */
  readonly destination: string;
}

export function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}
  */
  readonly destination: string;
}

export function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}


export function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: cdktf.stringToHclTerraform(struct!.destination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface LambdaFunctionEventInvokeConfigDestinationConfig {
  /**
  * on_failure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#on_failure LambdaFunctionEventInvokeConfig#on_failure}
  */
  readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
  /**
  * on_success block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#on_success LambdaFunctionEventInvokeConfig#on_success}
  */
  readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
}

export function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference | LambdaFunctionEventInvokeConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    on_failure: lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct!.onFailure),
    on_success: lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct!.onSuccess),
  }
}


export function lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference | LambdaFunctionEventInvokeConfigDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    on_failure: {
      value: lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct!.onFailure),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaFunctionEventInvokeConfigDestinationConfigOnFailureList",
    },
    on_success: {
      value: lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct!.onSuccess),
      isBlock: true,
      type: "list",
      storageClassType: "LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._onFailure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure?.internalValue;
    }
    if (this._onSuccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onSuccess = this._onSuccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._onFailure.internalValue = undefined;
      this._onSuccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._onFailure.internalValue = value.onFailure;
      this._onSuccess.internalValue = value.onSuccess;
    }
  }

  // on_failure - computed: false, optional: true, required: false
  private _onFailure = new LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference(this, "on_failure");
  public get onFailure() {
    return this._onFailure;
  }
  public putOnFailure(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure) {
    this._onFailure.internalValue = value;
  }
  public resetOnFailure() {
    this._onFailure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure.internalValue;
  }

  // on_success - computed: false, optional: true, required: false
  private _onSuccess = new LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference(this, "on_success");
  public get onSuccess() {
    return this._onSuccess;
  }
  public putOnSuccess(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess) {
    this._onSuccess.internalValue = value;
  }
  public resetOnSuccess() {
    this._onSuccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onSuccessInput() {
    return this._onSuccess.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config}
*/
export class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_function_event_invoke_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaFunctionEventInvokeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaFunctionEventInvokeConfig to import
  * @param importFromId The id of the existing LambdaFunctionEventInvokeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaFunctionEventInvokeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_function_event_invoke_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaFunctionEventInvokeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaFunctionEventInvokeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function_event_invoke_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._functionName = config.functionName;
    this._id = config.id;
    this._maximumEventAgeInSeconds = config.maximumEventAgeInSeconds;
    this._maximumRetryAttempts = config.maximumRetryAttempts;
    this._qualifier = config.qualifier;
    this._region = config.region;
    this._destinationConfig.internalValue = config.destinationConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // maximum_event_age_in_seconds - computed: false, optional: true, required: false
  private _maximumEventAgeInSeconds?: number; 
  public get maximumEventAgeInSeconds() {
    return this.getNumberAttribute('maximum_event_age_in_seconds');
  }
  public set maximumEventAgeInSeconds(value: number) {
    this._maximumEventAgeInSeconds = value;
  }
  public resetMaximumEventAgeInSeconds() {
    this._maximumEventAgeInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumEventAgeInSecondsInput() {
    return this._maximumEventAgeInSeconds;
  }

  // maximum_retry_attempts - computed: false, optional: true, required: false
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
    return this._maximumRetryAttempts;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new LambdaFunctionEventInvokeConfigDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      maximum_event_age_in_seconds: cdktf.numberToTerraform(this._maximumEventAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(this._maximumRetryAttempts),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      region: cdktf.stringToTerraform(this._region),
      destination_config: lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(this._destinationConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maximum_event_age_in_seconds: {
        value: cdktf.numberToHclTerraform(this._maximumEventAgeInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maximum_retry_attempts: {
        value: cdktf.numberToHclTerraform(this._maximumRetryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      qualifier: {
        value: cdktf.stringToHclTerraform(this._qualifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_config: {
        value: lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionEventInvokeConfigDestinationConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
