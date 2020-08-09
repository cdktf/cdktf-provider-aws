// https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html
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
      "created_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "enabled": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "last_updated_date": {
        "type": "string",
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      },
      "value": {
        "type": "string",
        "optional": true,
        "computed": true,
        "sensitive": true
      }
    },
    "block_types": {
      "stage_key": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "rest_api_id": {
              "type": "string",
              "required": true
            },
            "stage_name": {
              "type": "string",
              "required": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayApiKeyConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly enabled?: boolean;
  readonly name: string;
  readonly tags?: { [key: string]: string };
  readonly value?: string;
  /** stage_key block */
  readonly stageKey?: ApiGatewayApiKeyStageKey[];
}
export interface ApiGatewayApiKeyStageKey {
  readonly restApiId: string;
  readonly stageName: string;
}

// Resource

export class ApiGatewayApiKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_api_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._name = config.name;
    this._tags = config.tags;
    this._value = config.value;
    this._stageKey = config.stageKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_date - computed: true, optional: false, required: true
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean;
  public get enabled() {
    return this._enabled;
  }
  public set enabled(value: boolean | undefined) {
    this._enabled = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_updated_date - computed: true, optional: false, required: true
  public get lastUpdatedDate() {
    return this.getStringAttribute('last_updated_date');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string;
  public get value() {
    return this._value ?? this.getStringAttribute('value');
  }
  public set value(value: string | undefined) {
    this._value = value;
  }

  // stage_key - computed: false, optional: true, required: false
  private _stageKey?: ApiGatewayApiKeyStageKey[];
  public get stageKey() {
    return this._stageKey;
  }
  public set stageKey(value: ApiGatewayApiKeyStageKey[] | undefined) {
    this._stageKey = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      enabled: this._enabled,
      name: this._name,
      tags: this._tags,
      value: this._value,
      stage_key: this._stageKey,
    };
  }
}
