// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export interface DataAwsApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html#name DataAwsApiGatewayRestApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html#tags DataAwsApiGatewayRestApi#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
}
export class DataAwsApiGatewayRestApiEndpointConfiguration extends cdktf.ComplexComputedList {

  // types - computed: true, optional: false, required: false
  public get types() {
    return this.getListAttribute('types');
  }

  // vpc_endpoint_ids - computed: true, optional: false, required: false
  public get vpcEndpointIds() {
    return this.getListAttribute('vpc_endpoint_ids');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html aws_api_gateway_rest_api}
*/
export class DataAwsApiGatewayRestApi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_rest_api";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_rest_api.html aws_api_gateway_rest_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsApiGatewayRestApiConfig
  */
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

  // api_key_source - computed: true, optional: false, required: false
  public get apiKeySource() {
    return this.getStringAttribute('api_key_source');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // binary_media_types - computed: true, optional: false, required: false
  public get binaryMediaTypes() {
    return this.getListAttribute('binary_media_types');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // endpoint_configuration - computed: true, optional: false, required: false
  public endpointConfiguration(index: string) {
    return new DataAwsApiGatewayRestApiEndpointConfiguration(this, 'endpoint_configuration', index);
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_compression_size - computed: true, optional: false, required: false
  public get minimumCompressionSize() {
    return this.getNumberAttribute('minimum_compression_size');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // root_resource_id - computed: true, optional: false, required: false
  public get rootResourceId() {
    return this.getStringAttribute('root_resource_id');
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
    };
  }
}
