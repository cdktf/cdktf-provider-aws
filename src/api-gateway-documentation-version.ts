// https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "version": {
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

export interface ApiGatewayDocumentationVersionConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly restApiId: string;
  readonly version: string;
}

// Resource

export class ApiGatewayDocumentationVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayDocumentationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_documentation_version',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._restApiId = config.restApiId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // version - computed: false, optional: false, required: true
  private _version: string;
  public get version() {
    return this._version;
  }
  public set version(value: string) {
    this._version = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      rest_api_id: this._restApiId,
      version: this._version,
    };
  }
}
