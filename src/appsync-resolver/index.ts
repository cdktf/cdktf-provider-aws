/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncResolverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#api_id AppsyncResolver#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#code AppsyncResolver#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#data_source AppsyncResolver#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#field AppsyncResolver#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#id AppsyncResolver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#kind AppsyncResolver#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#max_batch_size AppsyncResolver#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#region AppsyncResolver#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#request_template AppsyncResolver#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#response_template AppsyncResolver#response_template}
  */
  readonly responseTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#type AppsyncResolver#type}
  */
  readonly type: string;
  /**
  * caching_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#caching_config AppsyncResolver#caching_config}
  */
  readonly cachingConfig?: AppsyncResolverCachingConfig;
  /**
  * pipeline_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#pipeline_config AppsyncResolver#pipeline_config}
  */
  readonly pipelineConfig?: AppsyncResolverPipelineConfig;
  /**
  * runtime block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#runtime AppsyncResolver#runtime}
  */
  readonly runtime?: AppsyncResolverRuntime;
  /**
  * sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#sync_config AppsyncResolver#sync_config}
  */
  readonly syncConfig?: AppsyncResolverSyncConfig;
}
export interface AppsyncResolverCachingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#caching_keys AppsyncResolver#caching_keys}
  */
  readonly cachingKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#ttl AppsyncResolver#ttl}
  */
  readonly ttl?: number;
}

export function appsyncResolverCachingConfigToTerraform(struct?: AppsyncResolverCachingConfigOutputReference | AppsyncResolverCachingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cachingKeys),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function appsyncResolverCachingConfigToHclTerraform(struct?: AppsyncResolverCachingConfigOutputReference | AppsyncResolverCachingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cachingKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncResolverCachingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncResolverCachingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingKeys = this._cachingKeys;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncResolverCachingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cachingKeys = undefined;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cachingKeys = value.cachingKeys;
      this._ttl = value.ttl;
    }
  }

  // caching_keys - computed: false, optional: true, required: false
  private _cachingKeys?: string[]; 
  public get cachingKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('caching_keys'));
  }
  public set cachingKeys(value: string[]) {
    this._cachingKeys = value;
  }
  public resetCachingKeys() {
    this._cachingKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingKeysInput() {
    return this._cachingKeys;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface AppsyncResolverPipelineConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#functions AppsyncResolver#functions}
  */
  readonly functions?: string[];
}

export function appsyncResolverPipelineConfigToTerraform(struct?: AppsyncResolverPipelineConfigOutputReference | AppsyncResolverPipelineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functions),
  }
}


export function appsyncResolverPipelineConfigToHclTerraform(struct?: AppsyncResolverPipelineConfigOutputReference | AppsyncResolverPipelineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncResolverPipelineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncResolverPipelineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._functions !== undefined) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncResolverPipelineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._functions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._functions = value.functions;
    }
  }

  // functions - computed: false, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return this.getListAttribute('functions');
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }
}
export interface AppsyncResolverRuntime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#name AppsyncResolver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#runtime_version AppsyncResolver#runtime_version}
  */
  readonly runtimeVersion: string;
}

export function appsyncResolverRuntimeToTerraform(struct?: AppsyncResolverRuntimeOutputReference | AppsyncResolverRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
  }
}


export function appsyncResolverRuntimeToHclTerraform(struct?: AppsyncResolverRuntimeOutputReference | AppsyncResolverRuntime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncResolverRuntimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncResolverRuntime | undefined {
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

  public set internalValue(value: AppsyncResolverRuntime | undefined) {
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
export interface AppsyncResolverSyncConfigLambdaConflictHandlerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#lambda_conflict_handler_arn AppsyncResolver#lambda_conflict_handler_arn}
  */
  readonly lambdaConflictHandlerArn?: string;
}

export function appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform(struct?: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference | AppsyncResolverSyncConfigLambdaConflictHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_conflict_handler_arn: cdktf.stringToTerraform(struct!.lambdaConflictHandlerArn),
  }
}


export function appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform(struct?: AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference | AppsyncResolverSyncConfigLambdaConflictHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lambda_conflict_handler_arn: {
      value: cdktf.stringToHclTerraform(struct!.lambdaConflictHandlerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncResolverSyncConfigLambdaConflictHandlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaConflictHandlerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaConflictHandlerArn = this._lambdaConflictHandlerArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncResolverSyncConfigLambdaConflictHandlerConfig | undefined) {
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
export interface AppsyncResolverSyncConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#conflict_detection AppsyncResolver#conflict_detection}
  */
  readonly conflictDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#conflict_handler AppsyncResolver#conflict_handler}
  */
  readonly conflictHandler?: string;
  /**
  * lambda_conflict_handler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#lambda_conflict_handler_config AppsyncResolver#lambda_conflict_handler_config}
  */
  readonly lambdaConflictHandlerConfig?: AppsyncResolverSyncConfigLambdaConflictHandlerConfig;
}

export function appsyncResolverSyncConfigToTerraform(struct?: AppsyncResolverSyncConfigOutputReference | AppsyncResolverSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conflict_detection: cdktf.stringToTerraform(struct!.conflictDetection),
    conflict_handler: cdktf.stringToTerraform(struct!.conflictHandler),
    lambda_conflict_handler_config: appsyncResolverSyncConfigLambdaConflictHandlerConfigToTerraform(struct!.lambdaConflictHandlerConfig),
  }
}


export function appsyncResolverSyncConfigToHclTerraform(struct?: AppsyncResolverSyncConfigOutputReference | AppsyncResolverSyncConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conflict_detection: {
      value: cdktf.stringToHclTerraform(struct!.conflictDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conflict_handler: {
      value: cdktf.stringToHclTerraform(struct!.conflictHandler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_conflict_handler_config: {
      value: appsyncResolverSyncConfigLambdaConflictHandlerConfigToHclTerraform(struct!.lambdaConflictHandlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AppsyncResolverSyncConfigLambdaConflictHandlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsyncResolverSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsyncResolverSyncConfig | undefined {
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

  public set internalValue(value: AppsyncResolverSyncConfig | undefined) {
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
  private _lambdaConflictHandlerConfig = new AppsyncResolverSyncConfigLambdaConflictHandlerConfigOutputReference(this, "lambda_conflict_handler_config");
  public get lambdaConflictHandlerConfig() {
    return this._lambdaConflictHandlerConfig;
  }
  public putLambdaConflictHandlerConfig(value: AppsyncResolverSyncConfigLambdaConflictHandlerConfig) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver aws_appsync_resolver}
*/
export class AppsyncResolver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appsync_resolver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsyncResolver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsyncResolver to import
  * @param importFromId The id of the existing AppsyncResolver that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsyncResolver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appsync_resolver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/appsync_resolver aws_appsync_resolver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncResolverConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_resolver',
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
    this._apiId = config.apiId;
    this._code = config.code;
    this._dataSource = config.dataSource;
    this._field = config.field;
    this._id = config.id;
    this._kind = config.kind;
    this._maxBatchSize = config.maxBatchSize;
    this._region = config.region;
    this._requestTemplate = config.requestTemplate;
    this._responseTemplate = config.responseTemplate;
    this._type = config.type;
    this._cachingConfig.internalValue = config.cachingConfig;
    this._pipelineConfig.internalValue = config.pipelineConfig;
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

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // request_template - computed: false, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // response_template - computed: false, optional: true, required: false
  private _responseTemplate?: string; 
  public get responseTemplate() {
    return this.getStringAttribute('response_template');
  }
  public set responseTemplate(value: string) {
    this._responseTemplate = value;
  }
  public resetResponseTemplate() {
    this._responseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplateInput() {
    return this._responseTemplate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // caching_config - computed: false, optional: true, required: false
  private _cachingConfig = new AppsyncResolverCachingConfigOutputReference(this, "caching_config");
  public get cachingConfig() {
    return this._cachingConfig;
  }
  public putCachingConfig(value: AppsyncResolverCachingConfig) {
    this._cachingConfig.internalValue = value;
  }
  public resetCachingConfig() {
    this._cachingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingConfigInput() {
    return this._cachingConfig.internalValue;
  }

  // pipeline_config - computed: false, optional: true, required: false
  private _pipelineConfig = new AppsyncResolverPipelineConfigOutputReference(this, "pipeline_config");
  public get pipelineConfig() {
    return this._pipelineConfig;
  }
  public putPipelineConfig(value: AppsyncResolverPipelineConfig) {
    this._pipelineConfig.internalValue = value;
  }
  public resetPipelineConfig() {
    this._pipelineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigInput() {
    return this._pipelineConfig.internalValue;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime = new AppsyncResolverRuntimeOutputReference(this, "runtime");
  public get runtime() {
    return this._runtime;
  }
  public putRuntime(value: AppsyncResolverRuntime) {
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
  private _syncConfig = new AppsyncResolverSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: AppsyncResolverSyncConfig) {
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
      field: cdktf.stringToTerraform(this._field),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      max_batch_size: cdktf.numberToTerraform(this._maxBatchSize),
      region: cdktf.stringToTerraform(this._region),
      request_template: cdktf.stringToTerraform(this._requestTemplate),
      response_template: cdktf.stringToTerraform(this._responseTemplate),
      type: cdktf.stringToTerraform(this._type),
      caching_config: appsyncResolverCachingConfigToTerraform(this._cachingConfig.internalValue),
      pipeline_config: appsyncResolverPipelineConfigToTerraform(this._pipelineConfig.internalValue),
      runtime: appsyncResolverRuntimeToTerraform(this._runtime.internalValue),
      sync_config: appsyncResolverSyncConfigToTerraform(this._syncConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code: {
        value: cdktf.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source: {
        value: cdktf.stringToHclTerraform(this._dataSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      field: {
        value: cdktf.stringToHclTerraform(this._field),
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
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_batch_size: {
        value: cdktf.numberToHclTerraform(this._maxBatchSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_template: {
        value: cdktf.stringToHclTerraform(this._requestTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_template: {
        value: cdktf.stringToHclTerraform(this._responseTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      caching_config: {
        value: appsyncResolverCachingConfigToHclTerraform(this._cachingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncResolverCachingConfigList",
      },
      pipeline_config: {
        value: appsyncResolverPipelineConfigToHclTerraform(this._pipelineConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncResolverPipelineConfigList",
      },
      runtime: {
        value: appsyncResolverRuntimeToHclTerraform(this._runtime.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncResolverRuntimeList",
      },
      sync_config: {
        value: appsyncResolverSyncConfigToHclTerraform(this._syncConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsyncResolverSyncConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
