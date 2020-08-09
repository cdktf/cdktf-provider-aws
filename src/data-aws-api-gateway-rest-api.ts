// https://www.terraform.io/docs/providers/aws/r/data_aws_api_gateway_rest_api.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "api_key_source": {
        "type": "string",
        "computed": true
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
        "computed": true
      },
      "description": {
        "type": "string",
        "computed": true
      },
      "endpoint_configuration": {
        "type": [
          "list",
          [
            "object",
            {
              "types": [
                "list",
                "string"
              ],
              "vpc_endpoint_ids": [
                "set",
                "string"
              ]
            }
          ]
        ],
        "computed": true
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
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "policy": {
        "type": "string",
        "computed": true
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
        "optional": true,
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataAwsApiGatewayRestApiConfig extends TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
}
export class DataAwsApiGatewayRestApiEndpointConfiguration extends ComplexComputedList {

  // types - computed: true, optional: false, required: true
  public get types() {
    return this.getListAttribute('types');
  }

  // vpc_endpoint_ids - computed: true, optional: false, required: true
  public get vpcEndpointIds() {
    return this.getListAttribute('vpc_endpoint_ids');
  }
}

// Resource

export class DataAwsApiGatewayRestApi extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsApiGatewayRestApiConfig) {
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
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_source - computed: true, optional: false, required: true
  public get apiKeySource() {
    return this.getStringAttribute('api_key_source');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // binary_media_types - computed: true, optional: false, required: true
  public get binaryMediaTypes() {
    return this.getListAttribute('binary_media_types');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint_configuration - computed: true, optional: false, required: true
  public endpointConfiguration(index: string) {
    return new DataAwsApiGatewayRestApiEndpointConfiguration(this, 'endpoint_configuration', index);
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

  // minimum_compression_size - computed: true, optional: false, required: true
  public get minimumCompressionSize() {
    return this.getNumberAttribute('minimum_compression_size');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // policy - computed: true, optional: false, required: true
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // root_resource_id - computed: true, optional: false, required: true
  public get rootResourceId() {
    return this.getStringAttribute('root_resource_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } | undefined {
    return this._tags; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      tags: this._tags,
    };
  }
}
