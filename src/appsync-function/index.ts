// https://www.terraform.io/docs/providers/aws/r/appsync_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}
  */
  readonly dataSource: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}
  */
  readonly functionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}
  */
  readonly requestMappingTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}
  */
  readonly responseMappingTemplate?: string;
  /**
  * runtime block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime AppsyncFunction#runtime}
  */
  readonly runtime?: AppsyncFunctionRuntime;
  /**
  * sync_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#sync_config AppsyncFunction#sync_config}
  */
  readonly syncConfig?: AppsyncFunctionSyncConfig;
}
export interface AppsyncFunctionRuntime {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}
  */
  readonly runtimeVersion: string;
}

export function appsyncFunctionRuntimeToTerraform(struct?: AppsyncFunctionRuntimeOutputReference | AppsyncFunctionRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}

export class AppsyncFunctionRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncFunctionRuntime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncFunctionRuntime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._runtimeVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._runtimeVersion = value.runtimeVersion;
    }
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

  // runtime_version - computed: false, optional: false, required: true
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }
}
export interface AppsyncFunctionSyncConfigLambdaConflictHandlerConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}
  */
  readonly lambdaConflictHandlerArn?: string;
}

export function appsyncFunctionSyncConfigLambdaConflictHandlerConfigToTerraform(struct?: AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference | AppsyncFunctionSyncConfigLambdaConflictHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_conflict_handler_arn: cdktf.stringToTerraform(struct!.lambdaConflictHandlerArn),
  }
}

export class AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncFunctionSyncConfigLambdaConflictHandlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaConflictHandlerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConflictHandlerArn = this._lambdaConflictHandlerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lambdaConflictHandlerArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lambdaConflictHandlerArn = value.lambdaConflictHandlerArn;
    }
  }

  // lambda_conflict_handler_arn - computed: false, optional: true, required: false
  private _lambdaConflictHandlerArn?: string; 
  public get lambdaConflictHandlerArn() {
    return this.getStringAttribute('lambda_conflict_handler_arn');
  }
  public set lambdaConflictHandlerArn(value: string) {
    this._lambdaConflictHandlerArn = value;
  }
  public resetLambdaConflictHandlerArn() {
    this._lambdaConflictHandlerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConflictHandlerArnInput() {
    return this._lambdaConflictHandlerArn;
  }
}
export interface AppsyncFunctionSyncConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}
  */
  readonly conflictDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}
  */
  readonly conflictHandler?: string;
  /**
  * lambda_conflict_handler_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}
  */
  readonly lambdaConflictHandlerConfig?: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
}

export function appsyncFunctionSyncConfigToTerraform(struct?: AppsyncFunctionSyncConfigOutputReference | AppsyncFunctionSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_detection: cdktf.stringToTerraform(struct!.conflictDetection),
    conflict_handler: cdktf.stringToTerraform(struct!.conflictHandler),
    lambda_conflict_handler_config: appsyncFunctionSyncConfigLambdaConflictHandlerConfigToTerraform(struct!.lambdaConflictHandlerConfig),
  }
}

export class AppsyncFunctionSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncFunctionSyncConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conflictDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictDetection = this._conflictDetection;
    }
    if (this._conflictHandler !== undefined) {
      hasAnyValues = true;
      internalValueResult.conflictHandler = this._conflictHandler;
    }
    if (this._lambdaConflictHandlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConflictHandlerConfig = this._lambdaConflictHandlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncFunctionSyncConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conflictDetection = undefined;
      this._conflictHandler = undefined;
      this._lambdaConflictHandlerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conflictDetection = value.conflictDetection;
      this._conflictHandler = value.conflictHandler;
      this._lambdaConflictHandlerConfig.internalValue = value.lambdaConflictHandlerConfig;
    }
  }

  // conflict_detection - computed: false, optional: true, required: false
  private _conflictDetection?: string; 
  public get conflictDetection() {
    return this.getStringAttribute('conflict_detection');
  }
  public set conflictDetection(value: string) {
    this._conflictDetection = value;
  }
  public resetConflictDetection() {
    this._conflictDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictDetectionInput() {
    return this._conflictDetection;
  }

  // conflict_handler - computed: false, optional: true, required: false
  private _conflictHandler?: string; 
  public get conflictHandler() {
    return this.getStringAttribute('conflict_handler');
  }
  public set conflictHandler(value: string) {
    this._conflictHandler = value;
  }
  public resetConflictHandler() {
    this._conflictHandler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conflictHandlerInput() {
    return this._conflictHandler;
  }

  // lambda_conflict_handler_config - computed: false, optional: true, required: false
  private _lambdaConflictHandlerConfig = new AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference(this, "lambda_conflict_handler_config");
  public get lambdaConflictHandlerConfig() {
    return this._lambdaConflictHandlerConfig;
  }
  public putLambdaConflictHandlerConfig(value: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig) {
    this._lambdaConflictHandlerConfig.internalValue = value;
  }
  public resetLambdaConflictHandlerConfig() {
    this._lambdaConflictHandlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConflictHandlerConfigInput() {
    return this._lambdaConflictHandlerConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_function aws_appsync_function}
*/
export class AppsyncFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_function aws_appsync_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_function',
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
    this._apiId = config.apiId;
    this._code = config.code;
    this._dataSource = config.dataSource;
    this._description = config.description;
    this._functionVersion = config.functionVersion;
    this._id = config.id;
    this._maxBatchSize = config.maxBatchSize;
    this._name = config.name;
    this._requestMappingTemplate = config.requestMappingTemplate;
    this._responseMappingTemplate = config.responseMappingTemplate;
    this._runtime.internalValue = config.runtime;
    this._syncConfig.internalValue = config.syncConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // function_id - computed: true, optional: false, required: false
  public get functionId() {
    return this.getStringAttribute('function_id');
  }

  // function_version - computed: true, optional: true, required: false
  private _functionVersion?: string; 
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }
  public resetFunctionVersion() {
    this._functionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion;
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

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
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

  // request_mapping_template - computed: false, optional: true, required: false
  private _requestMappingTemplate?: string; 
  public get requestMappingTemplate() {
    return this.getStringAttribute('request_mapping_template');
  }
  public set requestMappingTemplate(value: string) {
    this._requestMappingTemplate = value;
  }
  public resetRequestMappingTemplate() {
    this._requestMappingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMappingTemplateInput() {
    return this._requestMappingTemplate;
  }

  // response_mapping_template - computed: false, optional: true, required: false
  private _responseMappingTemplate?: string; 
  public get responseMappingTemplate() {
    return this.getStringAttribute('response_mapping_template');
  }
  public set responseMappingTemplate(value: string) {
    this._responseMappingTemplate = value;
  }
  public resetResponseMappingTemplate() {
    this._responseMappingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseMappingTemplateInput() {
    return this._responseMappingTemplate;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new AppsyncFunctionRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: AppsyncFunctionRuntime) {
    this._runtime.internalValue = value;
  }
  public resetRuntime() {
    this._runtime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime.internalValue;
  }

  // sync_config - computed: false, optional: true, required: false
  private _syncConfig = new AppsyncFunctionSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: AppsyncFunctionSyncConfig) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      code: cdktf.stringToTerraform(this._code),
      data_source: cdktf.stringToTerraform(this._dataSource),
      description: cdktf.stringToTerraform(this._description),
      function_version: cdktf.stringToTerraform(this._functionVersion),
      id: cdktf.stringToTerraform(this._id),
      max_batch_size: cdktf.numberToTerraform(this._maxBatchSize),
      name: cdktf.stringToTerraform(this._name),
      request_mapping_template: cdktf.stringToTerraform(this._requestMappingTemplate),
      response_mapping_template: cdktf.stringToTerraform(this._responseMappingTemplate),
      runtime: appsyncFunctionRuntimeToTerraform(this._runtime.internalValue),
      sync_config: appsyncFunctionSyncConfigToTerraform(this._syncConfig.internalValue),
    };
  }
}
