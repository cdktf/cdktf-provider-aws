// https://www.terraform.io/docs/providers/aws/r/data_aws_lambda_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLambdaFunctionConfig extends cdktf.TerraformMetaArguments {
  readonly functionName: string;
  readonly qualifier?: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsLambdaFunctionDeadLetterConfig extends cdktf.ComplexComputedList {

  // target_arn - computed: true, optional: false, required: false
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}
export class DataAwsLambdaFunctionEnvironment extends cdktf.ComplexComputedList {

  // variables - computed: true, optional: false, required: false
  public get variables() {
    return this.interpolationForAttribute('variables') as any;
  }
}
export class DataAwsLambdaFunctionFileSystemConfig extends cdktf.ComplexComputedList {

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // local_mount_path - computed: true, optional: false, required: false
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
}
export class DataAwsLambdaFunctionTracingConfig extends cdktf.ComplexComputedList {

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export class DataAwsLambdaFunctionVpcConfig extends cdktf.ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: false
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: false
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

// Resource

export class DataAwsLambdaFunction extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsLambdaFunctionConfig) {
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
    this._functionName = config.functionName;
    this._qualifier = config.qualifier;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dead_letter_config - computed: true, optional: false, required: false
  public deadLetterConfig(index: string) {
    return new DataAwsLambdaFunctionDeadLetterConfig(this, 'dead_letter_config', index);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: false
  public environment(index: string) {
    return new DataAwsLambdaFunctionEnvironment(this, 'environment', index);
  }

  // file_system_config - computed: true, optional: false, required: false
  public fileSystemConfig(index: string) {
    return new DataAwsLambdaFunctionFileSystemConfig(this, 'file_system_config', index);
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

  // handler - computed: true, optional: false, required: false
  public get handler() {
    return this.getStringAttribute('handler');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invoke_arn - computed: true, optional: false, required: false
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
  }

  // kms_key_arn - computed: true, optional: false, required: false
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // layers - computed: true, optional: false, required: false
  public get layers() {
    return this.getListAttribute('layers');
  }

  // memory_size - computed: true, optional: false, required: false
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // qualified_arn - computed: true, optional: false, required: false
  public get qualifiedArn() {
    return this.getStringAttribute('qualified_arn');
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

  // reserved_concurrent_executions - computed: true, optional: false, required: false
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // runtime - computed: true, optional: false, required: false
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // source_code_hash - computed: true, optional: false, required: false
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }

  // source_code_size - computed: true, optional: false, required: false
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // tracing_config - computed: true, optional: false, required: false
  public tracingConfig(index: string) {
    return new DataAwsLambdaFunctionTracingConfig(this, 'tracing_config', index);
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_config - computed: true, optional: false, required: false
  public vpcConfig(index: string) {
    return new DataAwsLambdaFunctionVpcConfig(this, 'vpc_config', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: cdktf.stringToTerraform(this._functionName),
      qualifier: cdktf.stringToTerraform(this._qualifier),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
