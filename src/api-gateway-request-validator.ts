// https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
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
      "validate_request_body": {
        "type": "bool",
        "optional": true
      },
      "validate_request_parameters": {
        "type": "bool",
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

export interface ApiGatewayRequestValidatorConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly restApiId: string;
  readonly validateRequestBody?: boolean;
  readonly validateRequestParameters?: boolean;
}

// Resource

export class ApiGatewayRequestValidator extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_request_validator',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._restApiId = config.restApiId;
    this._validateRequestBody = config.validateRequestBody;
    this._validateRequestParameters = config.validateRequestParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // validate_request_body - computed: false, optional: true, required: false
  private _validateRequestBody?: boolean;
  public get validateRequestBody() {
    return this._validateRequestBody;
  }
  public set validateRequestBody(value: boolean | undefined) {
    this._validateRequestBody = value;
  }

  // validate_request_parameters - computed: false, optional: true, required: false
  private _validateRequestParameters?: boolean;
  public get validateRequestParameters() {
    return this._validateRequestParameters;
  }
  public set validateRequestParameters(value: boolean | undefined) {
    this._validateRequestParameters = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      rest_api_id: this._restApiId,
      validate_request_body: this._validateRequestBody,
      validate_request_parameters: this._validateRequestParameters,
    };
  }
}
