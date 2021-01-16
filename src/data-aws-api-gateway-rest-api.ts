// https://www.terraform.io/docs/providers/aws/r/data_aws_api_gateway_rest_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly tags?: { [key: string]: string };
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

// Resource

export class DataAwsApiGatewayRestApi extends cdktf.TerraformDataSource {

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
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
  private _tags?: { [key: string]: string }
  public get tags(): { [key: string]: string } {
    return this.interpolationForAttribute('tags') as any; // Getting the computed value is not yet implemented
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
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
