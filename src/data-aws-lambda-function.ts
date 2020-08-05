// https://www.terraform.io/docs/providers/aws/r/data_aws_lambda_function.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "dead_letter_config": {
        "type": [
          "list",
          [
            "object",
            {
              "target_arn": "string"
            }
          ]
        ],
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "environment": {
        "type": [
          "list",
          [
            "object",
            {
              "variables": [
                "map",
                "string"
              ]
            }
          ]
        ],
        "computed": true
      },
      "file_system_config": {
        "type": [
          "list",
          [
            "object",
            {
              "arn": "string",
              "local_mount_path": "string"
            }
          ]
        ],
        "computed": true
      },
      "function_name": {
        "type": "string",
        "required": true
      },
      "handler": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invoke_arn": {
        "type": "string",
        "computed": true
      },
      "kms_key_arn": {
        "type": "string",
        "computed": true
      },
      "last_modified": {
        "type": "string",
        "computed": true
      },
      "layers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "memory_size": {
        "type": "number",
        "computed": true
      },
      "qualified_arn": {
        "type": "string",
        "computed": true
      },
      "qualifier": {
        "type": "string",
        "optional": true
      },
      "reserved_concurrent_executions": {
        "type": "number",
        "computed": true
      },
      "role": {
        "type": "string",
        "computed": true
      },
      "runtime": {
        "type": "string",
        "computed": true
      },
      "source_code_hash": {
        "type": "string",
        "computed": true
      },
      "source_code_size": {
        "type": "number",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true,
        "computed": true
      },
      "timeout": {
        "type": "number",
        "computed": true
      },
      "tracing_config": {
        "type": [
          "list",
          [
            "object",
            {
              "mode": "string"
            }
          ]
        ],
        "computed": true
      },
      "version": {
        "type": "string",
        "computed": true
      },
      "vpc_config": {
        "type": [
          "list",
          [
            "object",
            {
              "security_group_ids": [
                "set",
                "string"
              ],
              "subnet_ids": [
                "set",
                "string"
              ],
              "vpc_id": "string"
            }
          ]
        ],
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsLambdaFunctionConfig extends TerraformMetaArguments {
  readonly functionName: string;
  readonly qualifier?: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsLambdaFunctionDeadLetterConfig extends ComplexComputedList {

  // target_arn - computed: true, optional: false, required: true
  public get targetArn() {
    return this.getStringAttribute('target_arn');
  }
}
export class DataAwsLambdaFunctionEnvironment extends ComplexComputedList {

  // variables - computed: true, optional: false, required: true
  public get variables() {
    return 'not implemented' as any;
  }
}
export class DataAwsLambdaFunctionFileSystemConfig extends ComplexComputedList {

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // local_mount_path - computed: true, optional: false, required: true
  public get localMountPath() {
    return this.getStringAttribute('local_mount_path');
  }
}
export class DataAwsLambdaFunctionTracingConfig extends ComplexComputedList {

  // mode - computed: true, optional: false, required: true
  public get mode() {
    return this.getStringAttribute('mode');
  }
}
export class DataAwsLambdaFunctionVpcConfig extends ComplexComputedList {

  // security_group_ids - computed: true, optional: false, required: true
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }

  // subnet_ids - computed: true, optional: false, required: true
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }

  // vpc_id - computed: true, optional: false, required: true
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
}

// Resource

export class DataAwsLambdaFunction extends TerraformDataSource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // dead_letter_config - computed: true, optional: false, required: true
  public deadLetterConfig(index: string) {
    return new DataAwsLambdaFunctionDeadLetterConfig(this, 'dead_letter_config', index);
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // environment - computed: true, optional: false, required: true
  public environment(index: string) {
    return new DataAwsLambdaFunctionEnvironment(this, 'environment', index);
  }

  // file_system_config - computed: true, optional: false, required: true
  public fileSystemConfig(index: string) {
    return new DataAwsLambdaFunctionFileSystemConfig(this, 'file_system_config', index);
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this._functionName;
  }
  public set functionName(value: string) {
    this._functionName = value;
  }

  // handler - computed: true, optional: false, required: true
  public get handler() {
    return this.getStringAttribute('handler');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invoke_arn - computed: true, optional: false, required: true
  public get invokeArn() {
    return this.getStringAttribute('invoke_arn');
  }

  // kms_key_arn - computed: true, optional: false, required: true
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }

  // last_modified - computed: true, optional: false, required: true
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // layers - computed: true, optional: false, required: true
  public get layers() {
    return this.getListAttribute('layers');
  }

  // memory_size - computed: true, optional: false, required: true
  public get memorySize() {
    return this.getNumberAttribute('memory_size');
  }

  // qualified_arn - computed: true, optional: false, required: true
  public get qualifiedArn() {
    return this.getStringAttribute('qualified_arn');
  }

  // qualifier - computed: false, optional: true, required: false
  private _qualifier?: string;
  public get qualifier() {
    return this._qualifier;
  }
  public set qualifier(value: string | undefined) {
    this._qualifier = value;
  }

  // reserved_concurrent_executions - computed: true, optional: false, required: true
  public get reservedConcurrentExecutions() {
    return this.getNumberAttribute('reserved_concurrent_executions');
  }

  // role - computed: true, optional: false, required: true
  public get role() {
    return this.getStringAttribute('role');
  }

  // runtime - computed: true, optional: false, required: true
  public get runtime() {
    return this.getStringAttribute('runtime');
  }

  // source_code_hash - computed: true, optional: false, required: true
  public get sourceCodeHash() {
    return this.getStringAttribute('source_code_hash');
  }

  // source_code_size - computed: true, optional: false, required: true
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeout - computed: true, optional: false, required: true
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // tracing_config - computed: true, optional: false, required: true
  public tracingConfig(index: string) {
    return new DataAwsLambdaFunctionTracingConfig(this, 'tracing_config', index);
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // vpc_config - computed: true, optional: false, required: true
  public vpcConfig(index: string) {
    return new DataAwsLambdaFunctionVpcConfig(this, 'vpc_config', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      function_name: this._functionName,
      qualifier: this._qualifier,
      tags: this._tags,
    };
  }
}
