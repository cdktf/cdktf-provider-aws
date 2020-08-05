// https://www.terraform.io/docs/providers/aws/r/batch_job_definition.html
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
      "container_properties": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "parameters": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "revision": {
        "type": "number",
        "computed": true
      },
      "type": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "retry_strategy": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "attempts": {
              "type": "number",
              "optional": true
            }
          }
        },
        "max_items": 1
      },
      "timeout": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "attempt_duration_seconds": {
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

export interface BatchJobDefinitionConfig extends TerraformMetaArguments {
  readonly containerProperties?: string;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly type: string;
  /** retry_strategy block */
  readonly retryStrategy?: BatchJobDefinitionRetryStrategy[];
  /** timeout block */
  readonly timeout?: BatchJobDefinitionTimeout[];
}
export interface BatchJobDefinitionRetryStrategy {
  readonly attempts?: number;
}
export interface BatchJobDefinitionTimeout {
  readonly attemptDurationSeconds?: number;
}

// Resource

export class BatchJobDefinition extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: BatchJobDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_batch_job_definition',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._containerProperties = config.containerProperties;
    this._name = config.name;
    this._parameters = config.parameters;
    this._type = config.type;
    this._retryStrategy = config.retryStrategy;
    this._timeout = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // container_properties - computed: false, optional: true, required: false
  private _containerProperties?: string;
  public get containerProperties() {
    return this._containerProperties;
  }
  public set containerProperties(value: string | undefined) {
    this._containerProperties = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this._parameters;
  }
  public set parameters(value: { [key: string]: string } | undefined) {
    this._parameters = value;
  }

  // revision - computed: true, optional: false, required: true
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // retry_strategy - computed: false, optional: true, required: false
  private _retryStrategy?: BatchJobDefinitionRetryStrategy[];
  public get retryStrategy() {
    return this._retryStrategy;
  }
  public set retryStrategy(value: BatchJobDefinitionRetryStrategy[] | undefined) {
    this._retryStrategy = value;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: BatchJobDefinitionTimeout[];
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: BatchJobDefinitionTimeout[] | undefined) {
    this._timeout = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      container_properties: this._containerProperties,
      name: this._name,
      parameters: this._parameters,
      type: this._type,
      retry_strategy: this._retryStrategy,
      timeout: this._timeout,
    };
  }
}
