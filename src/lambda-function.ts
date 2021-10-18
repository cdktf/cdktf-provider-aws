// https://www.terraform.io/docs/providers/aws/r/lambda_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LambdaFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#architectures LambdaFunction#architectures}
  */
  readonly architectures?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#code_signing_config_arn LambdaFunction#code_signing_config_arn}
  */
  readonly codeSigningConfigArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#description LambdaFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#filename LambdaFunction#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#function_name LambdaFunction#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#handler LambdaFunction#handler}
  */
  readonly handler?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_uri LambdaFunction#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#kms_key_arn LambdaFunction#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#layers LambdaFunction#layers}
  */
  readonly layers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#memory_size LambdaFunction#memory_size}
  */
  readonly memorySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#package_type LambdaFunction#package_type}
  */
  readonly packageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#publish LambdaFunction#publish}
  */
  readonly publish?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#reserved_concurrent_executions LambdaFunction#reserved_concurrent_executions}
  */
  readonly reservedConcurrentExecutions?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#role LambdaFunction#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#runtime LambdaFunction#runtime}
  */
  readonly runtime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_bucket LambdaFunction#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_key LambdaFunction#s3_key}
  */
  readonly s3Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#s3_object_version LambdaFunction#s3_object_version}
  */
  readonly s3ObjectVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#source_code_hash LambdaFunction#source_code_hash}
  */
  readonly sourceCodeHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags LambdaFunction#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tags_all LambdaFunction#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeout LambdaFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * dead_letter_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#dead_letter_config LambdaFunction#dead_letter_config}
  */
  readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig[];
  /**
  * environment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#environment LambdaFunction#environment}
  */
  readonly environment?: LambdaFunctionEnvironment[];
  /**
  * file_system_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#file_system_config LambdaFunction#file_system_config}
  */
  readonly fileSystemConfig?: LambdaFunctionFileSystemConfig[];
  /**
  * image_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#image_config LambdaFunction#image_config}
  */
  readonly imageConfig?: LambdaFunctionImageConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#timeouts LambdaFunction#timeouts}
  */
  readonly timeouts?: LambdaFunctionTimeouts;
  /**
  * tracing_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#tracing_config LambdaFunction#tracing_config}
  */
  readonly tracingConfig?: LambdaFunctionTracingConfig[];
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#vpc_config LambdaFunction#vpc_config}
  */
  readonly vpcConfig?: LambdaFunctionVpcConfig[];
}
export interface LambdaFunctionDeadLetterConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#target_arn LambdaFunction#target_arn}
  */
  readonly targetArn: string;
}

function lambdaFunctionDeadLetterConfigToTerraform(struct?: LambdaFunctionDeadLetterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target_arn: cdktf.stringToTerraform(struct!.targetArn),
  }
}

export interface LambdaFunctionEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#variables LambdaFunction#variables}
  */
  readonly variables?: { [key: string]: string } | cdktf.IResolvable;
}

function lambdaFunctionEnvironmentToTerraform(struct?: LambdaFunctionEnvironment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.variables),
  }
}

export interface LambdaFunctionFileSystemConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#arn LambdaFunction#arn}
  */
  readonly arn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#local_mount_path LambdaFunction#local_mount_path}
  */
  readonly localMountPath: string;
}

function lambdaFunctionFileSystemConfigToTerraform(struct?: LambdaFunctionFileSystemConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    local_mount_path: cdktf.stringToTerraform(struct!.localMountPath),
  }
}

export interface LambdaFunctionImageConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#command LambdaFunction#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#entry_point LambdaFunction#entry_point}
  */
  readonly entryPoint?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#working_directory LambdaFunction#working_directory}
  */
  readonly workingDirectory?: string;
}

function lambdaFunctionImageConfigToTerraform(struct?: LambdaFunctionImageConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform)(struct!.command),
    entry_point: cdktf.listMapper(cdktf.stringToTerraform)(struct!.entryPoint),
    working_directory: cdktf.stringToTerraform(struct!.workingDirectory),
  }
}

export interface LambdaFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#create LambdaFunction#create}
  */
  readonly create?: string;
}

function lambdaFunctionTimeoutsToTerraform(struct?: LambdaFunctionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}

export interface LambdaFunctionTracingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#mode LambdaFunction#mode}
  */
  readonly mode: string;
}

function lambdaFunctionTracingConfigToTerraform(struct?: LambdaFunctionTracingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export interface LambdaFunctionVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#security_group_ids LambdaFunction#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html#subnet_ids LambdaFunction#subnet_ids}
  */
  readonly subnetIds: string[];
}

function lambdaFunctionVpcConfigToTerraform(struct?: LambdaFunctionVpcConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnetIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function}
*/
export class LambdaFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_lambda_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_function.html aws_lambda_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LambdaFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: LambdaFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lambda_function',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._architectures = config.architectures;
    this._codeSigningConfigArn = config.codeSigningConfigArn;
    this._description = config.description;
    this._filename = config.filename;
    this._functionName = config.functionName;
    this._handler = config.handler;
    this._imageUri = config.imageUri;
    this._kmsKeyArn = config.kmsKeyArn;
    this._layers = config.layers;
    this._memorySize = config.memorySize;
    this._packageType = config.packageType;
    this._publish = config.publish;
    this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
    this._role = config.role;
    this._runtime = config.runtime;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3ObjectVersion = config.s3ObjectVersion;
    this._sourceCodeHash = config.sourceCodeHash;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._timeout = config.timeout;
    this._deadLetterConfig = config.deadLetterConfig;
    this._environment = config.environment;
    this._fileSystemConfig = config.fileSystemConfig;
    this._imageConfig = config.imageConfig;
    this._timeouts = config.timeouts;
    this._tracingConfig = config.tracingConfig;
    this._vpcConfig = config.vpcConfig;
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
    return this._architectures
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_signing_config_arn - computed: false, optional: true, required: false
  private _codeSigningConfigArn?: string;
  public get codeSigningConfigArn() {
    return this.getStringAttribute('code_signing_config_arn');
  }
  public set codeSigningConfigArn(value: string ) {
    this._codeSigningConfigArn = value;
  }
  public resetCodeSigningConfigArn() {
    this._codeSigningConfigArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningConfigArnInput() {
    return this._codeSigningConfigArn
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string;
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string ) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
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

  // handler - computed: false, optional: true, required: false
  private _handler?: string;
  public get handler() {
    return this.getStringAttribute('handler');
  }
  public set handler(value: string ) {
    this._handler = value;
  }
  public resetHandler() {
    this._handler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerInput() {
    return this._handler
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string;
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string ) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri
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
  public set kmsKeyArn(value: string ) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn
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
  public set layers(value: string[] ) {
    this._layers = value;
  }
  public resetLayers() {
    this._layers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layersInput() {
    return this._layers
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: number;
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }
  public set memorySize(value: number ) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string;
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string ) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean | cdktf.IResolvable;
  public get publish() {
    return this.getBooleanAttribute('publish');
  }
  public set publish(value: boolean | cdktf.IResolvable ) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish
  }

  // qualified_arn - computed: true, optional: false, required: false
  public get qualifiedArn() {
    return this.getStringAttribute('qualified_arn');
  }

  // reserved_concurrent_executions - computed: false, optional: true, required: false
  private _reservedConcurrentExecutions?: number;
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }
  public set reservedConcurrentExecutions(value: number ) {
    this._reservedConcurrentExecutions = value;
  }
  public resetReservedConcurrentExecutions() {
    this._reservedConcurrentExecutions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedConcurrentExecutionsInput() {
    return this._reservedConcurrentExecutions
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // runtime - computed: false, optional: true, required: false
  private _runtime?: string;
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string ) {
    this._runtime = value;
  }
  public resetRuntime() {
    this._runtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string ) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string;
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
  public set s3Key(value: string ) {
    this._s3Key = value;
  }
  public resetS3Key() {
    this._s3Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3KeyInput() {
    return this._s3Key
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string;
  public get s3ObjectVersion() {
    return this.getStringAttribute('s3_object_version');
  }
  public set s3ObjectVersion(value: string ) {
    this._s3ObjectVersion = value;
  }
  public resetS3ObjectVersion() {
    this._s3ObjectVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ObjectVersionInput() {
    return this._s3ObjectVersion
  }

  // signing_job_arn - computed: true, optional: false, required: false
  public get signingJobArn() {
    return this.getStringAttribute('signing_job_arn');
  }

  // signing_profile_version_arn - computed: true, optional: false, required: false
  public get signingProfileVersionArn() {
    return this.getStringAttribute('signing_profile_version_arn');
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
    return this._sourceCodeHash
  }

  // source_code_size - computed: true, optional: false, required: false
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number ) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig?: LambdaFunctionDeadLetterConfig[];
  public get deadLetterConfig() {
    return this.interpolationForAttribute('dead_letter_config') as any;
  }
  public set deadLetterConfig(value: LambdaFunctionDeadLetterConfig[] ) {
    this._deadLetterConfig = value;
  }
  public resetDeadLetterConfig() {
    this._deadLetterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterConfigInput() {
    return this._deadLetterConfig
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: LambdaFunctionEnvironment[];
  public get environment() {
    return this.interpolationForAttribute('environment') as any;
  }
  public set environment(value: LambdaFunctionEnvironment[] ) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig?: LambdaFunctionFileSystemConfig[];
  public get fileSystemConfig() {
    return this.interpolationForAttribute('file_system_config') as any;
  }
  public set fileSystemConfig(value: LambdaFunctionFileSystemConfig[] ) {
    this._fileSystemConfig = value;
  }
  public resetFileSystemConfig() {
    this._fileSystemConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemConfigInput() {
    return this._fileSystemConfig
  }

  // image_config - computed: false, optional: true, required: false
  private _imageConfig?: LambdaFunctionImageConfig[];
  public get imageConfig() {
    return this.interpolationForAttribute('image_config') as any;
  }
  public set imageConfig(value: LambdaFunctionImageConfig[] ) {
    this._imageConfig = value;
  }
  public resetImageConfig() {
    this._imageConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageConfigInput() {
    return this._imageConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LambdaFunctionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: LambdaFunctionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig?: LambdaFunctionTracingConfig[];
  public get tracingConfig() {
    return this.interpolationForAttribute('tracing_config') as any;
  }
  public set tracingConfig(value: LambdaFunctionTracingConfig[] ) {
    this._tracingConfig = value;
  }
  public resetTracingConfig() {
    this._tracingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracingConfigInput() {
    return this._tracingConfig
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: LambdaFunctionVpcConfig[];
  public get vpcConfig() {
    return this.interpolationForAttribute('vpc_config') as any;
  }
  public set vpcConfig(value: LambdaFunctionVpcConfig[] ) {
    this._vpcConfig = value;
  }
  public resetVpcConfig() {
    this._vpcConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      architectures: cdktf.listMapper(cdktf.stringToTerraform)(this._architectures),
      code_signing_config_arn: cdktf.stringToTerraform(this._codeSigningConfigArn),
      description: cdktf.stringToTerraform(this._description),
      filename: cdktf.stringToTerraform(this._filename),
      function_name: cdktf.stringToTerraform(this._functionName),
      handler: cdktf.stringToTerraform(this._handler),
      image_uri: cdktf.stringToTerraform(this._imageUri),
      kms_key_arn: cdktf.stringToTerraform(this._kmsKeyArn),
      layers: cdktf.listMapper(cdktf.stringToTerraform)(this._layers),
      memory_size: cdktf.numberToTerraform(this._memorySize),
      package_type: cdktf.stringToTerraform(this._packageType),
      publish: cdktf.booleanToTerraform(this._publish),
      reserved_concurrent_executions: cdktf.numberToTerraform(this._reservedConcurrentExecutions),
      role: cdktf.stringToTerraform(this._role),
      runtime: cdktf.stringToTerraform(this._runtime),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_key: cdktf.stringToTerraform(this._s3Key),
      s3_object_version: cdktf.stringToTerraform(this._s3ObjectVersion),
      source_code_hash: cdktf.stringToTerraform(this._sourceCodeHash),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      timeout: cdktf.numberToTerraform(this._timeout),
      dead_letter_config: cdktf.listMapper(lambdaFunctionDeadLetterConfigToTerraform)(this._deadLetterConfig),
      environment: cdktf.listMapper(lambdaFunctionEnvironmentToTerraform)(this._environment),
      file_system_config: cdktf.listMapper(lambdaFunctionFileSystemConfigToTerraform)(this._fileSystemConfig),
      image_config: cdktf.listMapper(lambdaFunctionImageConfigToTerraform)(this._imageConfig),
      timeouts: lambdaFunctionTimeoutsToTerraform(this._timeouts),
      tracing_config: cdktf.listMapper(lambdaFunctionTracingConfigToTerraform)(this._tracingConfig),
      vpc_config: cdktf.listMapper(lambdaFunctionVpcConfigToTerraform)(this._vpcConfig),
    };
  }
}
