// https://www.terraform.io/docs/providers/aws/r/apigatewayv2_model.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_id": {
        "type": "string",
        "required": true
      },
      "content_type": {
        "type": "string",
        "required": true
      },
      "description": {
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
      "schema": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface Apigatewayv2ModelConfig extends TerraformMetaArguments {
  readonly apiId: string;
  readonly contentType: string;
  readonly description?: string;
  readonly name: string;
  readonly schema: string;
}

// Resource

export class Apigatewayv2Model extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Apigatewayv2ModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apigatewayv2_model',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._contentType = config.contentType;
    this._description = config.description;
    this._name = config.name;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
  public get apiId() {
    return this._apiId;
  }
  public set apiId(value: string) {
    this._apiId = value;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType: string;
  public get contentType() {
    return this._contentType;
  }
  public set contentType(value: string) {
    this._contentType = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
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

  // schema - computed: false, optional: false, required: true
  private _schema: string;
  public get schema() {
    return this._schema;
  }
  public set schema(value: string) {
    this._schema = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: this._apiId,
      content_type: this._contentType,
      description: this._description,
      name: this._name,
      schema: this._schema,
    };
  }
}
