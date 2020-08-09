// https://www.terraform.io/docs/providers/aws/r/glue_job.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allocated_capacity": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "connections": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "default_arguments": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "glue_version": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "max_capacity": {
        "type": "number",
        "optional": true,
        "computed": true
      },
      "max_retries": {
        "type": "number",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "number_of_workers": {
        "type": "number",
        "optional": true
      },
      "role_arn": {
        "type": "string",
        "required": true
      },
      "security_configuration": {
        "type": "string",
        "optional": true
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
      "worker_type": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "command": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "name": {
              "type": "string",
              "optional": true
            },
            "python_version": {
              "type": "string",
              "optional": true,
              "computed": true
            },
            "script_location": {
              "type": "string",
              "required": true
            }
          }
        },
        "min_items": 1,
        "max_items": 1
      },
      "execution_property": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "max_concurrent_runs": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "notification_property": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "notify_delay_after": {
              "type": "number",
              "optional": true
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

export interface GlueJobConfig extends TerraformMetaArguments {
  readonly allocatedCapacity?: number;
  readonly connections?: string[];
  readonly defaultArguments?: { [key: string]: string };
  readonly description?: string;
  readonly glueVersion?: string;
  readonly maxCapacity?: number;
  readonly maxRetries?: number;
  readonly name: string;
  readonly numberOfWorkers?: number;
  readonly roleArn: string;
  readonly securityConfiguration?: string;
  readonly tags?: { [key: string]: string };
  readonly timeout?: number;
  readonly workerType?: string;
  /** command block */
  readonly command: GlueJobCommand[];
  /** execution_property block */
  readonly executionProperty?: GlueJobExecutionProperty[];
  /** notification_property block */
  readonly notificationProperty?: GlueJobNotificationProperty[];
}
export interface GlueJobCommand {
  readonly name?: string;
  readonly pythonVersion?: string;
  readonly scriptLocation: string;
}
export interface GlueJobExecutionProperty {
  readonly maxConcurrentRuns?: number;
}
export interface GlueJobNotificationProperty {
  readonly notifyDelayAfter?: number;
}

// Resource

export class GlueJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GlueJobConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_glue_job',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allocatedCapacity = config.allocatedCapacity;
    this._connections = config.connections;
    this._defaultArguments = config.defaultArguments;
    this._description = config.description;
    this._glueVersion = config.glueVersion;
    this._maxCapacity = config.maxCapacity;
    this._maxRetries = config.maxRetries;
    this._name = config.name;
    this._numberOfWorkers = config.numberOfWorkers;
    this._roleArn = config.roleArn;
    this._securityConfiguration = config.securityConfiguration;
    this._tags = config.tags;
    this._timeout = config.timeout;
    this._workerType = config.workerType;
    this._command = config.command;
    this._executionProperty = config.executionProperty;
    this._notificationProperty = config.notificationProperty;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocated_capacity - computed: true, optional: true, required: false
  private _allocatedCapacity?: number;
  public get allocatedCapacity() {
    return this._allocatedCapacity ?? this.getNumberAttribute('allocated_capacity');
  }
  public set allocatedCapacity(value: number | undefined) {
    this._allocatedCapacity = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // connections - computed: false, optional: true, required: false
  private _connections?: string[];
  public get connections() {
    return this._connections;
  }
  public set connections(value: string[] | undefined) {
    this._connections = value;
  }

  // default_arguments - computed: false, optional: true, required: false
  private _defaultArguments?: { [key: string]: string };
  public get defaultArguments() {
    return this._defaultArguments;
  }
  public set defaultArguments(value: { [key: string]: string } | undefined) {
    this._defaultArguments = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // glue_version - computed: true, optional: true, required: false
  private _glueVersion?: string;
  public get glueVersion() {
    return this._glueVersion ?? this.getStringAttribute('glue_version');
  }
  public set glueVersion(value: string | undefined) {
    this._glueVersion = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // max_capacity - computed: true, optional: true, required: false
  private _maxCapacity?: number;
  public get maxCapacity() {
    return this._maxCapacity ?? this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number | undefined) {
    this._maxCapacity = value;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number;
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // number_of_workers - computed: false, optional: true, required: false
  private _numberOfWorkers?: number;
  public get numberOfWorkers() {
    return this._numberOfWorkers;
  }
  public set numberOfWorkers(value: number | undefined) {
    this._numberOfWorkers = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // security_configuration - computed: false, optional: true, required: false
  private _securityConfiguration?: string;
  public get securityConfiguration() {
    return this._securityConfiguration;
  }
  public set securityConfiguration(value: string | undefined) {
    this._securityConfiguration = value;
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

  // worker_type - computed: false, optional: true, required: false
  private _workerType?: string;
  public get workerType() {
    return this._workerType;
  }
  public set workerType(value: string | undefined) {
    this._workerType = value;
  }

  // command - computed: false, optional: false, required: true
  private _command: GlueJobCommand[];
  public get command() {
    return this._command;
  }
  public set command(value: GlueJobCommand[]) {
    this._command = value;
  }

  // execution_property - computed: false, optional: true, required: false
  private _executionProperty?: GlueJobExecutionProperty[];
  public get executionProperty() {
    return this._executionProperty;
  }
  public set executionProperty(value: GlueJobExecutionProperty[] | undefined) {
    this._executionProperty = value;
  }

  // notification_property - computed: false, optional: true, required: false
  private _notificationProperty?: GlueJobNotificationProperty[];
  public get notificationProperty() {
    return this._notificationProperty;
  }
  public set notificationProperty(value: GlueJobNotificationProperty[] | undefined) {
    this._notificationProperty = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allocated_capacity: this._allocatedCapacity,
      connections: this._connections,
      default_arguments: this._defaultArguments,
      description: this._description,
      glue_version: this._glueVersion,
      max_capacity: this._maxCapacity,
      max_retries: this._maxRetries,
      name: this._name,
      number_of_workers: this._numberOfWorkers,
      role_arn: this._roleArn,
      security_configuration: this._securityConfiguration,
      tags: this._tags,
      timeout: this._timeout,
      worker_type: this._workerType,
      command: this._command,
      execution_property: this._executionProperty,
      notification_property: this._notificationProperty,
    };
  }
}
