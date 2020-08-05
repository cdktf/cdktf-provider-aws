// https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "schema": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayModelConfig extends TerraformMetaArguments {
  readonly contentType: string;
  readonly description?: string;
  readonly name: string;
  readonly restApiId: string;
  readonly schema?: string;
}

// Resource

export class ApiGatewayModel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_model',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contentType = config.contentType;
    this._description = config.description;
    this._name = config.name;
    this._restApiId = config.restApiId;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string;
  public get schema() {
    return this._schema;
  }
  public set schema(value: string | undefined) {
    this._schema = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      content_type: this._contentType,
      description: this._description,
      name: this._name,
      rest_api_id: this._restApiId,
      schema: this._schema,
    };
  }
}
