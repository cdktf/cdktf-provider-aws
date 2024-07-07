// https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#architectures LambdaFunction#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#code_signing_config_arn LambdaFunction#code_signing_config_arn}
  */
  readonly codeSigningConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#description LambdaFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#filename LambdaFunction#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#function_name LambdaFunction#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#handler LambdaFunction#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#id LambdaFunction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#image_uri LambdaFunction#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#kms_key_arn LambdaFunction#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#layers LambdaFunction#layers}
  */
  readonly layers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#memory_size LambdaFunction#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#package_type LambdaFunction#package_type}
  */
  readonly packageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#publish LambdaFunction#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#replace_security_groups_on_destroy LambdaFunction#replace_security_groups_on_destroy}
  */
  readonly replaceSecurityGroupsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#replacement_security_group_ids LambdaFunction#replacement_security_group_ids}
  */
  readonly replacementSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}
  */
  readonly reservedConcurrentExecutions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#role LambdaFunction#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#runtime LambdaFunction#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#s3_bucket LambdaFunction#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#s3_key LambdaFunction#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#s3_object_version LambdaFunction#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#skip_destroy LambdaFunction#skip_destroy}
  */
  readonly skipDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#source_code_hash LambdaFunction#source_code_hash}
  */
  readonly sourceCodeHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#tags LambdaFunction#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#tags_all LambdaFunction#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#timeout LambdaFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * dead_letter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#dead_letter_config LambdaFunction#dead_letter_config}
  */
  readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#environment LambdaFunction#environment}
  */
  readonly environment?: LambdaFunctionEnvironment;
  /**
  * ephemeral_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#ephemeral_storage LambdaFunction#ephemeral_storage}
  */
  readonly ephemeralStorage?: LambdaFunctionEphemeralStorage;
  /**
  * file_system_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#file_system_config LambdaFunction#file_system_config}
  */
  readonly fileSystemConfig?: LambdaFunctionFileSystemConfig;
  /**
  * image_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#image_config LambdaFunction#image_config}
  */
  readonly imageConfig?: LambdaFunctionImageConfig;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#logging_config LambdaFunction#logging_config}
  */
  readonly loggingConfig?: LambdaFunctionLoggingConfig;
  /**
  * snap_start block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#snap_start LambdaFunction#snap_start}
  */
  readonly snapStart?: LambdaFunctionSnapStart;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#timeouts LambdaFunction#timeouts}
  */
  readonly timeouts?: LambdaFunctionTimeouts;
  /**
  * tracing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#tracing_config LambdaFunction#tracing_config}
  */
  readonly tracingConfig?: LambdaFunctionTracingConfig;
  /**
  * vpc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#vpc_config LambdaFunction#vpc_config}
  */
  readonly vpcConfig?: LambdaFunctionVpcConfig;
}
export interface LambdaFunctionDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#target_arn LambdaFunction#target_arn}
  */
  readonly targetArn: string;
}

export function lambdaFunctionDeadLetterConfigToTerraform(struct?: LambdaFunctionDeadLetterConfigOutputReference | LambdaFunctionDeadLetterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}


export function lambdaFunctionDeadLetterConfigToHclTerraform(struct?: LambdaFunctionDeadLetterConfigOutputReference | LambdaFunctionDeadLetterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionDeadLetterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionDeadLetterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetArn = this._targetArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionDeadLetterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetArn = value.targetArn;
    }
  }

  // target_arn - computed: false, optional: false, required: true
  private _targetArn?: string; 
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
  public set targetArn(value: string) {
    this._targetArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetArnInput() {
    return this._targetArn;
  }
}
export interface LambdaFunctionEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#variables LambdaFunction#variables}
  */
  readonly variables?: { [key: string]: string };
}

export function lambdaFunctionEnvironmentToTerraform(struct?: LambdaFunctionEnvironmentOutputReference | LambdaFunctionEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.variables),
  }
}


export function lambdaFunctionEnvironmentToHclTerraform(struct?: LambdaFunctionEnvironmentOutputReference | LambdaFunctionEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.variables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._variables !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._variables = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._variables = value.variables;
    }
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: { [key: string]: string }; 
  public get variables() {
    return this.getStringMapAttribute('variables');
  }
  public set variables(value: { [key: string]: string }) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }
}
export interface LambdaFunctionEphemeralStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#size LambdaFunction#size}
  */
  readonly size?: number;
}

export function lambdaFunctionEphemeralStorageToTerraform(struct?: LambdaFunctionEphemeralStorageOutputReference | LambdaFunctionEphemeralStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function lambdaFunctionEphemeralStorageToHclTerraform(struct?: LambdaFunctionEphemeralStorageOutputReference | LambdaFunctionEphemeralStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionEphemeralStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionEphemeralStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionEphemeralStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
    }
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface LambdaFunctionFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#arn LambdaFunction#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#local_mount_path LambdaFunction#local_mount_path}
  */
  readonly localMountPath: string;
}

export function lambdaFunctionFileSystemConfigToTerraform(struct?: LambdaFunctionFileSystemConfigOutputReference | LambdaFunctionFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
  }
}


export function lambdaFunctionFileSystemConfigToHclTerraform(struct?: LambdaFunctionFileSystemConfigOutputReference | LambdaFunctionFileSystemConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_mount_path: {
      value: cdktf.stringToHclTerraform(struct!.localMountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionFileSystemConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionFileSystemConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._localMountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localMountPath = this._localMountPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionFileSystemConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._localMountPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._localMountPath = value.localMountPath;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // local_mount_path - computed: false, optional: false, required: true
  private _localMountPath?: string; 
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
  public set localMountPath(value: string) {
    this._localMountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localMountPathInput() {
    return this._localMountPath;
  }
}
export interface LambdaFunctionImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#command LambdaFunction#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#entry_point LambdaFunction#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#working_directory LambdaFunction#working_directory}
  */
  readonly workingDirectory?: string;
}

export function lambdaFunctionImageConfigToTerraform(struct?: LambdaFunctionImageConfigOutputReference | LambdaFunctionImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    entry_point: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.entryPoint),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}


export function lambdaFunctionImageConfigToHclTerraform(struct?: LambdaFunctionImageConfigOutputReference | LambdaFunctionImageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    entry_point: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.entryPoint),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    working_directory: {
      value: cdktf.stringToHclTerraform(struct!.workingDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionImageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionImageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._entryPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryPoint = this._entryPoint;
    }
    if (this._workingDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirectory = this._workingDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionImageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
      this._entryPoint = undefined;
      this._workingDirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
      this._entryPoint = value.entryPoint;
      this._workingDirectory = value.workingDirectory;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string[]; 
  public get entryPoint() {
    return this.getListAttribute('entry_point');
  }
  public set entryPoint(value: string[]) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint;
  }

  // working_directory - computed: false, optional: true, required: false
  private _workingDirectory?: string; 
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
  public set workingDirectory(value: string) {
    this._workingDirectory = value;
  }
  public resetWorkingDirectory() {
    this._workingDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirectoryInput() {
    return this._workingDirectory;
  }
}
export interface LambdaFunctionLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#application_log_level LambdaFunction#application_log_level}
  */
  readonly applicationLogLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#log_format LambdaFunction#log_format}
  */
  readonly logFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#log_group LambdaFunction#log_group}
  */
  readonly logGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#system_log_level LambdaFunction#system_log_level}
  */
  readonly systemLogLevel?: string;
}

export function lambdaFunctionLoggingConfigToTerraform(struct?: LambdaFunctionLoggingConfigOutputReference | LambdaFunctionLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_log_level: cdktf.stringToTerraform(struct!.applicationLogLevel),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_group: cdktf.stringToTerraform(struct!.logGroup),
    system_log_level: cdktf.stringToTerraform(struct!.systemLogLevel),
  }
}


export function lambdaFunctionLoggingConfigToHclTerraform(struct?: LambdaFunctionLoggingConfigOutputReference | LambdaFunctionLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_log_level: {
      value: cdktf.stringToHclTerraform(struct!.applicationLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_group: {
      value: cdktf.stringToHclTerraform(struct!.logGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_log_level: {
      value: cdktf.stringToHclTerraform(struct!.systemLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationLogLevel = this._applicationLogLevel;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroup = this._logGroup;
    }
    if (this._systemLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLogLevel = this._systemLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationLogLevel = undefined;
      this._logFormat = undefined;
      this._logGroup = undefined;
      this._systemLogLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationLogLevel = value.applicationLogLevel;
      this._logFormat = value.logFormat;
      this._logGroup = value.logGroup;
      this._systemLogLevel = value.systemLogLevel;
    }
  }

  // application_log_level - computed: false, optional: true, required: false
  private _applicationLogLevel?: string; 
  public get applicationLogLevel() {
    return this.getStringAttribute('application_log_level');
  }
  public set applicationLogLevel(value: string) {
    this._applicationLogLevel = value;
  }
  public resetApplicationLogLevel() {
    this._applicationLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLogLevelInput() {
    return this._applicationLogLevel;
  }

  // log_format - computed: false, optional: false, required: true
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_group - computed: true, optional: true, required: false
  private _logGroup?: string; 
  public get logGroup() {
    return this.getStringAttribute('log_group');
  }
  public set logGroup(value: string) {
    this._logGroup = value;
  }
  public resetLogGroup() {
    this._logGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupInput() {
    return this._logGroup;
  }

  // system_log_level - computed: false, optional: true, required: false
  private _systemLogLevel?: string; 
  public get systemLogLevel() {
    return this.getStringAttribute('system_log_level');
  }
  public set systemLogLevel(value: string) {
    this._systemLogLevel = value;
  }
  public resetSystemLogLevel() {
    this._systemLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLogLevelInput() {
    return this._systemLogLevel;
  }
}
export interface LambdaFunctionSnapStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#apply_on LambdaFunction#apply_on}
  */
  readonly applyOn: string;
}

export function lambdaFunctionSnapStartToTerraform(struct?: LambdaFunctionSnapStartOutputReference | LambdaFunctionSnapStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply_on: cdktf.stringToTerraform(struct!.applyOn),
  }
}


export function lambdaFunctionSnapStartToHclTerraform(struct?: LambdaFunctionSnapStartOutputReference | LambdaFunctionSnapStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply_on: {
      value: cdktf.stringToHclTerraform(struct!.applyOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionSnapStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionSnapStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applyOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.applyOn = this._applyOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionSnapStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applyOn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applyOn = value.applyOn;
    }
  }

  // apply_on - computed: false, optional: false, required: true
  private _applyOn?: string; 
  public get applyOn() {
    return this.getStringAttribute('apply_on');
  }
  public set applyOn(value: string) {
    this._applyOn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applyOnInput() {
    return this._applyOn;
  }

  // optimization_status - computed: true, optional: false, required: false
  public get optimizationStatus() {
    return this.getStringAttribute('optimization_status');
  }
}
export interface LambdaFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#create LambdaFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#delete LambdaFunction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#update LambdaFunction#update}
  */
  readonly update?: string;
}

export function lambdaFunctionTimeoutsToTerraform(struct?: LambdaFunctionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function lambdaFunctionTimeoutsToHclTerraform(struct?: LambdaFunctionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LambdaFunctionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface LambdaFunctionTracingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#mode LambdaFunction#mode}
  */
  readonly mode: string;
}

export function lambdaFunctionTracingConfigToTerraform(struct?: LambdaFunctionTracingConfigOutputReference | LambdaFunctionTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function lambdaFunctionTracingConfigToHclTerraform(struct?: LambdaFunctionTracingConfigOutputReference | LambdaFunctionTracingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionTracingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionTracingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionTracingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface LambdaFunctionVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#ipv6_allowed_for_dual_stack LambdaFunction#ipv6_allowed_for_dual_stack}
  */
  readonly ipv6AllowedForDualStack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#security_group_ids LambdaFunction#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#subnet_ids LambdaFunction#subnet_ids}
  */
  readonly subnetIds: string[];
}

export function lambdaFunctionVpcConfigToTerraform(struct?: LambdaFunctionVpcConfigOutputReference | LambdaFunctionVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_allowed_for_dual_stack: cdktf.booleanToTerraform(struct!.ipv6AllowedForDualStack),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
  }
}


export function lambdaFunctionVpcConfigToHclTerraform(struct?: LambdaFunctionVpcConfigOutputReference | LambdaFunctionVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_allowed_for_dual_stack: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6AllowedForDualStack),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LambdaFunctionVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LambdaFunctionVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6AllowedForDualStack !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AllowedForDualStack = this._ipv6AllowedForDualStack;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LambdaFunctionVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6AllowedForDualStack = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6AllowedForDualStack = value.ipv6AllowedForDualStack;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
    }
  }

  // ipv6_allowed_for_dual_stack - computed: false, optional: true, required: false
  private _ipv6AllowedForDualStack?: boolean | cdktf.IResolvable; 
  public get ipv6AllowedForDualStack() {
    return this.getBooleanAttribute('ipv6_allowed_for_dual_stack');
  }
  public set ipv6AllowedForDualStack(value: boolean | cdktf.IResolvable) {
    this._ipv6AllowedForDualStack = value;
  }
  public resetIpv6AllowedForDualStack() {
    this._ipv6AllowedForDualStack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AllowedForDualStackInput() {
    return this._ipv6AllowedForDualStack;
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function aws_lambda_function}
*/
export class LambdaFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lambda_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LambdaFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LambdaFunction to import
  * @param importFromId The id of the existing LambdaFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LambdaFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_lambda_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.57.0/docs/resources/lambda_function aws_lambda_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.57.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._architectures = config.architectures;
    this._codeSigningConfigArn = config.codeSigningConfigArn;
    this._description = config.description;
    this._filename = config.filename;
    this._functionName = config.functionName;
    this._handler = config.handler;
    this._id = config.id;
    this._imageUri = config.imageUri;
    this._kmsKeyArn = config.kmsKeyArn;
    this._layers = config.layers;
    this._memorySize = config.memorySize;
    this._packageType = config.packageType;
    this._publish = config.publish;
    this._replaceSecurityGroupsOnDestroy = config.replaceSecurityGroupsOnDestroy;
    this._replacementSecurityGroupIds = config.replacementSecurityGroupIds;
    this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
    this._role = config.role;
    this._runtime = config.runtime;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3ObjectVersion = config.s3ObjectVersion;
    this._skipDestroy = config.skipDestroy;
    this._sourceCodeHash = config.sourceCodeHash;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._deadLetterConfig.internalValue = config.deadLetterConfig;
    this._environment.internalValue = config.environment;
    this._ephemeralStorage.internalValue = config.ephemeralStorage;
    this._fileSystemConfig.internalValue = config.fileSystemConfig;
    this._imageConfig.internalValue = config.imageConfig;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._snapStart.internalValue = config.snapStart;
    this._timeouts.internalValue = config.timeouts;
    this._tracingConfig.internalValue = config.tracingConfig;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // architectures - computed: true, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_sha256 - computed: true, optional: false, required: false
  public get codeSha256() {
    return this.getStringAttribute('code_sha256');
  }

  // code_signing_config_arn - computed: false, optional: true, required: false
  private _codeSigningConfigArn?: string; 
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }
  public set codeSigningConfigArn(value: string) {
    this._codeSigningConfigArn = value;
  }
  public resetCodeSigningConfigArn() {
    this._codeSigningConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningConfigArnInput() {
    return this._codeSigningConfigArn;
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

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

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

  // handler - computed: false, optional: true, required: false
  private _handler?: string; 
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler;
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

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // invoke_arn - computed: true, optional: false, required: false
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // layers - computed: false, optional: true, required: false
  private _layers?: string[]; 
  public get layers() {
    return this.getListAttribute('layers');
  }
  public set layers(value: string[]) {
    this._layers = value;
  }
  public resetLayers() {
    this._layers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: number; 
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable; 
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // qualified_arn - computed: true, optional: false, required: false
  public get qualifiedArn() {
    return this.getStringAttribute('qualified_arn');
  }

  // qualified_invoke_arn - computed: true, optional: false, required: false
  public get qualifiedInvokeArn() {
    return this.getStringAttribute('qualified_invoke_arn');
  }

  // replace_security_groups_on_destroy - computed: false, optional: true, required: false
  private _replaceSecurityGroupsOnDestroy?: boolean | cdktf.IResolvable; 
  public get replaceSecurityGroupsOnDestroy() {
    return this.getBooleanAttribute('replace_security_groups_on_destroy');
  }
  public set replaceSecurityGroupsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._replaceSecurityGroupsOnDestroy = value;
  }
  public resetReplaceSecurityGroupsOnDestroy() {
    this._replaceSecurityGroupsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceSecurityGroupsOnDestroyInput() {
    return this._replaceSecurityGroupsOnDestroy;
  }

  // replacement_security_group_ids - computed: false, optional: true, required: false
  private _replacementSecurityGroupIds?: string[]; 
  public get replacementSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('replacement_security_group_ids'));
  }
  public set replacementSecurityGroupIds(value: string[]) {
    this._replacementSecurityGroupIds = value;
  }
  public resetReplacementSecurityGroupIds() {
    this._replacementSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementSecurityGroupIdsInput() {
    return this._replacementSecurityGroupIds;
  }

  // reserved_concurrent_executions - computed: false, optional: true, required: false
  private _reservedConcurrentExecutions?: number; 
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }
  public set reservedConcurrentExecutions(value: number) {
    this._reservedConcurrentExecutions = value;
  }
  public resetReservedConcurrentExecutions() {
    this._reservedConcurrentExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedConcurrentExecutionsInput() {
    return this._reservedConcurrentExecutions;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string; 
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string; 
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string; 
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion;
  }

  // signing_job_arn - computed: true, optional: false, required: false
  public get signingJobArn() {
    return this.getStringAttribute('signing_job_arn');
  }

  // signing_profile_version_arn - computed: true, optional: false, required: false
  public get signingProfileVersionArn() {
    return this.getStringAttribute('signing_profile_version_arn');
  }

  // skip_destroy - computed: false, optional: true, required: false
  private _skipDestroy?: boolean | cdktf.IResolvable; 
  public get skipDestroy() {
    return this.getBooleanAttribute('skip_destroy');
  }
  public set skipDestroy(value: boolean | cdktf.IResolvable) {
    this._skipDestroy = value;
  }
  public resetSkipDestroy() {
    this._skipDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDestroyInput() {
    return this._skipDestroy;
  }

  // source_code_hash - computed: true, optional: true, required: false
  private _sourceCodeHash?: string; 
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string) {
    this._sourceCodeHash = value;
  }
  public resetSourceCodeHash() {
    this._sourceCodeHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeHashInput() {
    return this._sourceCodeHash;
  }

  // source_code_size - computed: true, optional: false, required: false
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig = new LambdaFunctionDeadLetterConfigOutputReference(this, "dead_letter_config");
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public putDeadLetterConfig(value: LambdaFunctionDeadLetterConfig) {
    this._deadLetterConfig.internalValue = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new LambdaFunctionEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: LambdaFunctionEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // ephemeral_storage - computed: false, optional: true, required: false
  private _ephemeralStorage = new LambdaFunctionEphemeralStorageOutputReference(this, "ephemeral_storage");
  public get ephemeralStorage() {
    return this._ephemeralStorage;
  }
  public putEphemeralStorage(value: LambdaFunctionEphemeralStorage) {
    this._ephemeralStorage.internalValue = value;
  }
  public resetEphemeralStorage() {
    this._ephemeralStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageInput() {
    return this._ephemeralStorage.internalValue;
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig = new LambdaFunctionFileSystemConfigOutputReference(this, "file_system_config");
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public putFileSystemConfig(value: LambdaFunctionFileSystemConfig) {
    this._fileSystemConfig.internalValue = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig.internalValue;
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig = new LambdaFunctionImageConfigOutputReference(this, "image_config");
  public get imageConfig() {
    return this._imageConfig;
  }
  public putImageConfig(value: LambdaFunctionImageConfig) {
    this._imageConfig.internalValue = value;
  }
  public resetImageConfig() {
    this._imageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new LambdaFunctionLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: LambdaFunctionLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // snap_start - computed: false, optional: true, required: false
  private _snapStart = new LambdaFunctionSnapStartOutputReference(this, "snap_start");
  public get snapStart() {
    return this._snapStart;
  }
  public putSnapStart(value: LambdaFunctionSnapStart) {
    this._snapStart.internalValue = value;
  }
  public resetSnapStart() {
    this._snapStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapStartInput() {
    return this._snapStart.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LambdaFunctionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LambdaFunctionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig = new LambdaFunctionTracingConfigOutputReference(this, "tracing_config");
  public get tracingConfig() {
    return this._tracingConfig;
  }
  public putTracingConfig(value: LambdaFunctionTracingConfig) {
    this._tracingConfig.internalValue = value;
  }
  public resetTracingConfig() {
    this._tracingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new LambdaFunctionVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: LambdaFunctionVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(this._architectures),
      code_signing_config_arn: cdktf.stringToTerraform(this._codeSigningConfigArn),
      description: cdktf.stringToTerraform(this._description),
      filename: cdktf.stringToTerraform(this._filename),
      function_name: cdktf.stringToTerraform(this._functionName),
      handler: cdktf.stringToTerraform(this._handler),
      id: cdktf.stringToTerraform(this._id),
      image_uri: cdktf.stringToTerraform(this._imageUri),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      layers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._layers),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      package_type: cdktf.stringToTerraform(this._packageType),
      publish: cdktf.booleanToTerraform(this._publish),
      replace_security_groups_on_destroy: cdktf.booleanToTerraform(this._replaceSecurityGroupsOnDestroy),
      replacement_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replacementSecurityGroupIds),
      reserved_concurrent_executions: cdktf.numberToTerraform(this._reservedConcurrentExecutions),
      role: cdktf.stringToTerraform(this._role),
      runtime: cdktf.stringToTerraform(this._runtime),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_key: cdktf.stringToTerraform(this._s3Key),
      s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
      skip_destroy: cdktf.booleanToTerraform(this._skipDestroy),
      source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      timeout: cdktf.numberToTerraform(this._timeout),
      dead_letter_config: lambdaFunctionDeadLetterConfigToTerraform(this._deadLetterConfig.internalValue),
      environment: lambdaFunctionEnvironmentToTerraform(this._environment.internalValue),
      ephemeral_storage: lambdaFunctionEphemeralStorageToTerraform(this._ephemeralStorage.internalValue),
      file_system_config: lambdaFunctionFileSystemConfigToTerraform(this._fileSystemConfig.internalValue),
      image_config: lambdaFunctionImageConfigToTerraform(this._imageConfig.internalValue),
      logging_config: lambdaFunctionLoggingConfigToTerraform(this._loggingConfig.internalValue),
      snap_start: lambdaFunctionSnapStartToTerraform(this._snapStart.internalValue),
      timeouts: lambdaFunctionTimeoutsToTerraform(this._timeouts.internalValue),
      tracing_config: lambdaFunctionTracingConfigToTerraform(this._tracingConfig.internalValue),
      vpc_config: lambdaFunctionVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      architectures: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._architectures),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      code_signing_config_arn: {
        value: cdktf.stringToHclTerraform(this._codeSigningConfigArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      handler: {
        value: cdktf.stringToHclTerraform(this._handler),
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
      image_uri: {
        value: cdktf.stringToHclTerraform(this._imageUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_arn: {
        value: cdktf.stringToHclTerraform(this._kmsKeyArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._layers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      memory_size: {
        value: cdktf.numberToHclTerraform(this._memorySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publish: {
        value: cdktf.booleanToHclTerraform(this._publish),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replace_security_groups_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._replaceSecurityGroupsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      replacement_security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replacementSecurityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reserved_concurrent_executions: {
        value: cdktf.numberToHclTerraform(this._reservedConcurrentExecutions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      runtime: {
        value: cdktf.stringToHclTerraform(this._runtime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_bucket: {
        value: cdktf.stringToHclTerraform(this._s3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_key: {
        value: cdktf.stringToHclTerraform(this._s3Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_object_version: {
        value: cdktf.stringToHclTerraform(this._s3ObjectVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_destroy: {
        value: cdktf.booleanToHclTerraform(this._skipDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      source_code_hash: {
        value: cdktf.stringToHclTerraform(this._sourceCodeHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_letter_config: {
        value: lambdaFunctionDeadLetterConfigToHclTerraform(this._deadLetterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionDeadLetterConfigList",
      },
      environment: {
        value: lambdaFunctionEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionEnvironmentList",
      },
      ephemeral_storage: {
        value: lambdaFunctionEphemeralStorageToHclTerraform(this._ephemeralStorage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionEphemeralStorageList",
      },
      file_system_config: {
        value: lambdaFunctionFileSystemConfigToHclTerraform(this._fileSystemConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionFileSystemConfigList",
      },
      image_config: {
        value: lambdaFunctionImageConfigToHclTerraform(this._imageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionImageConfigList",
      },
      logging_config: {
        value: lambdaFunctionLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionLoggingConfigList",
      },
      snap_start: {
        value: lambdaFunctionSnapStartToHclTerraform(this._snapStart.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionSnapStartList",
      },
      timeouts: {
        value: lambdaFunctionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LambdaFunctionTimeouts",
      },
      tracing_config: {
        value: lambdaFunctionTracingConfigToHclTerraform(this._tracingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionTracingConfigList",
      },
      vpc_config: {
        value: lambdaFunctionVpcConfigToHclTerraform(this._vpcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LambdaFunctionVpcConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
