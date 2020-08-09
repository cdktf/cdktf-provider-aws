// https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_key_source": {
        "type": "string",
        "optional": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "binary_media_types": {
        "type": [
          "list",
          "string"
        ],
        "optional": true
      },
      "body": {
        "type": "string",
        "optional": true
      },
      "created_date": {
        "type": "string",
        "computed": true
      },
      "description": {
        "type": "string",
        "optional": true
      },
      "execution_arn": {
        "type": "string",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "minimum_compression_size": {
        "type": "number",
        "optional": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "policy": {
        "type": "string",
        "optional": true
      },
      "root_resource_id": {
        "type": "string",
        "computed": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "endpoint_configuration": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "types": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            },
            "vpc_endpoint_ids": {
              "type": [
                "set",
                "string"
              ],
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

export interface ApiGatewayRestApiConfig extends TerraformMetaArguments {
  readonly apiKeySource?: string;
  readonly binaryMediaTypes?: string[];
  readonly body?: string;
  readonly description?: string;
  readonly minimumCompressionSize?: number;
  readonly name: string;
  readonly policy?: string;
  readonly tags?: { [key: string]: string };
  /** endpoint_configuration block */
  readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration[];
}
export interface ApiGatewayRestApiEndpointConfiguration {
  readonly types: string[];
  readonly vpcEndpointIds?: string[];
}

// Resource

export class ApiGatewayRestApi extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiGatewayRestApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_rest_api',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiKeySource = config.apiKeySource;
    this._binaryMediaTypes = config.binaryMediaTypes;
    this._body = config.body;
    this._description = config.description;
    this._minimumCompressionSize = config.minimumCompressionSize;
    this._name = config.name;
    this._policy = config.policy;
    this._tags = config.tags;
    this._endpointConfiguration = config.endpointConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_source - computed: false, optional: true, required: false
  private _apiKeySource?: string;
  public get apiKeySource() {
    return this._apiKeySource;
  }
  public set apiKeySource(value: string | undefined) {
    this._apiKeySource = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // binary_media_types - computed: false, optional: true, required: false
  private _binaryMediaTypes?: string[];
  public get binaryMediaTypes() {
    return this._binaryMediaTypes;
  }
  public set binaryMediaTypes(value: string[] | undefined) {
    this._binaryMediaTypes = value;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string;
  public get body() {
    return this._body;
  }
  public set body(value: string | undefined) {
    this._body = value;
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

  // execution_arn - computed: true, optional: false, required: true
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // minimum_compression_size - computed: false, optional: true, required: false
  private _minimumCompressionSize?: number;
  public get minimumCompressionSize() {
    return this._minimumCompressionSize;
  }
  public set minimumCompressionSize(value: number | undefined) {
    this._minimumCompressionSize = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // root_resource_id - computed: true, optional: false, required: true
  public get rootResourceId() {
    return this.getStringAttribute('root_resource_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration[];
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public set endpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration[] | undefined) {
    this._endpointConfiguration = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_source: this._apiKeySource,
      binary_media_types: this._binaryMediaTypes,
      body: this._body,
      description: this._description,
      minimum_compression_size: this._minimumCompressionSize,
      name: this._name,
      policy: this._policy,
      tags: this._tags,
      endpoint_configuration: this._endpointConfiguration,
    };
  }
}
