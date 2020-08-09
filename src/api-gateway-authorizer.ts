// https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "authorizer_credentials": {
        "type": "string",
        "optional": true
      },
      "authorizer_result_ttl_in_seconds": {
        "type": "number",
        "optional": true
      },
      "authorizer_uri": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identity_source": {
        "type": "string",
        "optional": true
      },
      "identity_validation_expression": {
        "type": "string",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "provider_arns": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "rest_api_id": {
        "type": "string",
        "required": true
      },
      "type": {
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

export interface ApiGatewayAuthorizerConfig extends TerraformMetaArguments {
  readonly authorizerCredentials?: string;
  readonly authorizerResultTtlInSeconds?: number;
  readonly authorizerUri?: string;
  readonly identitySource?: string;
  readonly identityValidationExpression?: string;
  readonly name: string;
  readonly providerArns?: string[];
  readonly restApiId: string;
  readonly type?: string;
}

// Resource

export class ApiGatewayAuthorizer extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayAuthorizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_authorizer',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorizerCredentials = config.authorizerCredentials;
    this._authorizerResultTtlInSeconds = config.authorizerResultTtlInSeconds;
    this._authorizerUri = config.authorizerUri;
    this._identitySource = config.identitySource;
    this._identityValidationExpression = config.identityValidationExpression;
    this._name = config.name;
    this._providerArns = config.providerArns;
    this._restApiId = config.restApiId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorizer_credentials - computed: false, optional: true, required: false
  private _authorizerCredentials?: string;
  public get authorizerCredentials() {
    return this._authorizerCredentials;
  }
  public set authorizerCredentials(value: string | undefined) {
    this._authorizerCredentials = value;
  }

  // authorizer_result_ttl_in_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlInSeconds?: number;
  public get authorizerResultTtlInSeconds() {
    return this._authorizerResultTtlInSeconds;
  }
  public set authorizerResultTtlInSeconds(value: number | undefined) {
    this._authorizerResultTtlInSeconds = value;
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string;
  public get authorizerUri() {
    return this._authorizerUri;
  }
  public set authorizerUri(value: string | undefined) {
    this._authorizerUri = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identity_source - computed: false, optional: true, required: false
  private _identitySource?: string;
  public get identitySource() {
    return this._identitySource;
  }
  public set identitySource(value: string | undefined) {
    this._identitySource = value;
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string;
  public get identityValidationExpression() {
    return this._identityValidationExpression;
  }
  public set identityValidationExpression(value: string | undefined) {
    this._identityValidationExpression = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // provider_arns - computed: false, optional: true, required: false
  private _providerArns?: string[];
  public get providerArns() {
    return this._providerArns;
  }
  public set providerArns(value: string[] | undefined) {
    this._providerArns = value;
  }

  // rest_api_id - computed: false, optional: false, required: true
  private _restApiId: string;
  public get restApiId() {
    return this._restApiId;
  }
  public set restApiId(value: string) {
    this._restApiId = value;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type;
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_credentials: this._authorizerCredentials,
      authorizer_result_ttl_in_seconds: this._authorizerResultTtlInSeconds,
      authorizer_uri: this._authorizerUri,
      identity_source: this._identitySource,
      identity_validation_expression: this._identityValidationExpression,
      name: this._name,
      provider_arns: this._providerArns,
      rest_api_id: this._restApiId,
      type: this._type,
    };
  }
}
