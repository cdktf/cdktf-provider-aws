// https://www.terraform.io/docs/providers/aws/r/lambda_function.html
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
      "description": {
        "type": "string",
        "optional": true
      },
      "filename": {
        "type": "string",
        "optional": true
      },
      "function_name": {
        "type": "string",
        "required": true
      },
      "handler": {
        "type": "string",
        "required": true
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
        "optional": true
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
        "optional": true
      },
      "memory_size": {
        "type": "number",
        "optional": true
      },
      "publish": {
        "type": "bool",
        "optional": true
      },
      "qualified_arn": {
        "type": "string",
        "computed": true
      },
      "reserved_concurrent_executions": {
        "type": "number",
        "optional": true
      },
      "role": {
        "type": "string",
        "required": true
      },
      "runtime": {
        "type": "string",
        "required": true
      },
      "s3_bucket": {
        "type": "string",
        "optional": true
      },
      "s3_key": {
        "type": "string",
        "optional": true
      },
      "s3_object_version": {
        "type": "string",
        "optional": true
      },
      "source_code_hash": {
        "type": "string",
        "optional": true,
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
        "optional": true
      },
      "timeout": {
        "type": "number",
        "optional": true
      },
      "version": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "dead_letter_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "target_arn": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "environment": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "variables": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "file_system_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "arn": {
              "type": "string",
              "required": true
            },
            "local_mount_path": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            }
          }
        }
      },
      "tracing_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "mode": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 1
      },
      "vpc_config": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "security_group_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "subnet_ids": {
              "type": [
                "set",
                "string"
              ],
              "required": true
            },
            "vpc_id": {
              "type": "string",
              "computed": true
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

export interface LambdaFunctionConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly filename?: string;
  readonly functionName: string;
  readonly handler: string;
  readonly kmsKeyArn?: string;
  readonly layers?: string[];
  readonly memorySize?: number;
  readonly publish?: boolean;
  readonly reservedConcurrentExecutions?: number;
  readonly role: string;
  readonly runtime: string;
  readonly s3Bucket?: string;
  readonly s3Key?: string;
  readonly s3ObjectVersion?: string;
  readonly sourceCodeHash?: string;
  readonly tags?: { [key: string]: string };
  readonly timeout?: number;
  /** dead_letter_config block */
  readonly deadLetterConfig?: LambdaFunctionDeadLetterConfig[];
  /** environment block */
  readonly environment?: LambdaFunctionEnvironment[];
  /** file_system_config block */
  readonly fileSystemConfig?: LambdaFunctionFileSystemConfig[];
  /** timeouts block */
  readonly timeouts?: LambdaFunctionTimeouts;
  /** tracing_config block */
  readonly tracingConfig?: LambdaFunctionTracingConfig[];
  /** vpc_config block */
  readonly vpcConfig?: LambdaFunctionVpcConfig[];
}
export interface LambdaFunctionDeadLetterConfig {
  readonly targetArn: string;
}
export interface LambdaFunctionEnvironment {
  readonly variables?: { [key: string]: string };
}
export interface LambdaFunctionFileSystemConfig {
  readonly arn: string;
  readonly localMountPath: string;
}
export interface LambdaFunctionTimeouts {
  readonly create?: string;
}
export interface LambdaFunctionTracingConfig {
  readonly mode: string;
}
export interface LambdaFunctionVpcConfig {
  readonly securityGroupIds: string[];
  readonly subnetIds: string[];
}

// Resource

export class LambdaFunction extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._description = config.description;
    this._filename = config.filename;
    this._functionName = config.functionName;
    this._handler = config.handler;
    this._kmsKeyArn = config.kmsKeyArn;
    this._layers = config.layers;
    this._memorySize = config.memorySize;
    this._publish = config.publish;
    this._reservedConcurrentExecutions = config.reservedConcurrentExecutions;
    this._role = config.role;
    this._runtime = config.runtime;
    this._s3Bucket = config.s3Bucket;
    this._s3Key = config.s3Key;
    this._s3ObjectVersion = config.s3ObjectVersion;
    this._sourceCodeHash = config.sourceCodeHash;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._deadLetterConfig = config.deadLetterConfig;
    this._environment = config.environment;
    this._fileSystemConfig = config.fileSystemConfig;
    this._timeouts = config.timeouts;
    this._tracingConfig = config.tracingConfig;
    this._vpcConfig = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string;
  public get filename() {
    return this._filename;
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName: string;
  public get functionName() {
    return this._functionName;
  }
  public set functionName(value: string) {
    this._functionName = value;
  }

  // handler - computed: false, optional: false, required: true
  private _handler: string;
  public get handler() {
    return this._handler;
  }
  public set handler(value: string) {
    this._handler = value;
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

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string;
  public get kmsKeyArn() {
    return this._kmsKeyArn;
  }
  public set kmsKeyArn(value: string | undefined) {
    this._kmsKeyArn = value;
  }

  // last_modified - computed: true, optional: false, required: true
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // layers - computed: false, optional: true, required: false
  private _layers?: string[];
  public get layers() {
    return this._layers;
  }
  public set layers(value: string[] | undefined) {
    this._layers = value;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: number;
  public get memorySize() {
    return this._memorySize;
  }
  public set memorySize(value: number | undefined) {
    this._memorySize = value;
  }

  // publish - computed: false, optional: true, required: false
  private _publish?: boolean;
  public get publish() {
    return this._publish;
  }
  public set publish(value: boolean | undefined) {
    this._publish = value;
  }

  // qualified_arn - computed: true, optional: false, required: true
  public get qualifiedArn() {
    return this.getStringAttribute('qualified_arn');
  }

  // reserved_concurrent_executions - computed: false, optional: true, required: false
  private _reservedConcurrentExecutions?: number;
  public get reservedConcurrentExecutions() {
    return this._reservedConcurrentExecutions;
  }
  public set reservedConcurrentExecutions(value: number | undefined) {
    this._reservedConcurrentExecutions = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime: string;
  public get runtime() {
    return this._runtime;
  }
  public set runtime(value: string) {
    this._runtime = value;
  }

  // s3_bucket - computed: false, optional: true, required: false
  private _s3Bucket?: string;
  public get s3Bucket() {
    return this._s3Bucket;
  }
  public set s3Bucket(value: string | undefined) {
    this._s3Bucket = value;
  }

  // s3_key - computed: false, optional: true, required: false
  private _s3Key?: string;
  public get s3Key() {
    return this._s3Key;
  }
  public set s3Key(value: string | undefined) {
    this._s3Key = value;
  }

  // s3_object_version - computed: false, optional: true, required: false
  private _s3ObjectVersion?: string;
  public get s3ObjectVersion() {
    return this._s3ObjectVersion;
  }
  public set s3ObjectVersion(value: string | undefined) {
    this._s3ObjectVersion = value;
  }

  // source_code_hash - computed: true, optional: true, required: false
  private _sourceCodeHash?: string;
  public get sourceCodeHash() {
    return this._sourceCodeHash ?? this.getStringAttribute('source_code_hash');
  }
  public set sourceCodeHash(value: string | undefined) {
    this._sourceCodeHash = value;
  }

  // source_code_size - computed: true, optional: false, required: true
  public get sourceCodeSize() {
    return this.getNumberAttribute('source_code_size');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }

  // dead_letter_config - computed: false, optional: true, required: false
  private _deadLetterConfig?: LambdaFunctionDeadLetterConfig[];
  public get deadLetterConfig() {
    return this._deadLetterConfig;
  }
  public set deadLetterConfig(value: LambdaFunctionDeadLetterConfig[] | undefined) {
    this._deadLetterConfig = value;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: LambdaFunctionEnvironment[];
  public get environment() {
    return this._environment;
  }
  public set environment(value: LambdaFunctionEnvironment[] | undefined) {
    this._environment = value;
  }

  // file_system_config - computed: false, optional: true, required: false
  private _fileSystemConfig?: LambdaFunctionFileSystemConfig[];
  public get fileSystemConfig() {
    return this._fileSystemConfig;
  }
  public set fileSystemConfig(value: LambdaFunctionFileSystemConfig[] | undefined) {
    this._fileSystemConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: LambdaFunctionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: LambdaFunctionTimeouts | undefined) {
    this._timeouts = value;
  }

  // tracing_config - computed: false, optional: true, required: false
  private _tracingConfig?: LambdaFunctionTracingConfig[];
  public get tracingConfig() {
    return this._tracingConfig;
  }
  public set tracingConfig(value: LambdaFunctionTracingConfig[] | undefined) {
    this._tracingConfig = value;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig?: LambdaFunctionVpcConfig[];
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public set vpcConfig(value: LambdaFunctionVpcConfig[] | undefined) {
    this._vpcConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      filename: this._filename,
      function_name: this._functionName,
      handler: this._handler,
      kms_key_arn: this._kmsKeyArn,
      layers: this._layers,
      memory_size: this._memorySize,
      publish: this._publish,
      reserved_concurrent_executions: this._reservedConcurrentExecutions,
      role: this._role,
      runtime: this._runtime,
      s3_bucket: this._s3Bucket,
      s3_key: this._s3Key,
      s3_object_version: this._s3ObjectVersion,
      source_code_hash: this._sourceCodeHash,
      tags: this._tags,
      timeout: this._timeout,
      dead_letter_config: this._deadLetterConfig,
      environment: this._environment,
      file_system_config: this._fileSystemConfig,
      timeouts: this._timeouts,
      tracing_config: this._tracingConfig,
      vpc_config: this._vpcConfig,
    };
  }
}
