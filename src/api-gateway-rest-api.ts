// https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
  readonly apiKeySource?: string;
  readonly binaryMediaTypes?: string[];
  readonly body?: string;
  readonly description?: string;
  readonly disableExecuteApiEndpoint?: boolean;
  readonly minimumCompressionSize?: number;
  readonly name: string;
  readonly parameters?: { [key: string]: string };
  readonly policy?: string;
  readonly tags?: { [key: string]: string };
  /** endpoint_configuration block */
  readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration[];
}
export interface ApiGatewayRestApiEndpointConfiguration {
  readonly types: string[];
  readonly vpcEndpointIds?: string[];
}

function apiGatewayRestApiEndpointConfigurationToTerraform(struct?: ApiGatewayRestApiEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
    vpc_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpcEndpointIds),
  }
}


// Resource

export class ApiGatewayRestApi extends cdktf.TerraformResource {

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
    this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
    this._minimumCompressionSize = config.minimumCompressionSize;
    this._name = config.name;
    this._parameters = config.parameters;
    this._policy = config.policy;
    this._tags = config.tags;
    this._endpointConfiguration = config.endpointConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_source - computed: true, optional: true, required: false
  private _apiKeySource?: string;
  public get apiKeySource() {
    return this.getStringAttribute('api_key_source');
  }
  public set apiKeySource(value: string) {
    this._apiKeySource = value;
  }
  public resetApiKeySource() {
    this._apiKeySource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeySourceInput() {
    return this._apiKeySource
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // binary_media_types - computed: true, optional: true, required: false
  private _binaryMediaTypes?: string[];
  public get binaryMediaTypes() {
    return this.getListAttribute('binary_media_types');
  }
  public set binaryMediaTypes(value: string[]) {
    this._binaryMediaTypes = value;
  }
  public resetBinaryMediaTypes() {
    this._binaryMediaTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryMediaTypesInput() {
    return this._binaryMediaTypes
  }

  // body - computed: false, optional: true, required: false
  private _body?: string;
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string ) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getStringAttribute('created_date');
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // disable_execute_api_endpoint - computed: true, optional: true, required: false
  private _disableExecuteApiEndpoint?: boolean;
  public get disableExecuteApiEndpoint() {
    return this.getBooleanAttribute('disable_execute_api_endpoint');
  }
  public set disableExecuteApiEndpoint(value: boolean) {
    this._disableExecuteApiEndpoint = value;
  }
  public resetDisableExecuteApiEndpoint() {
    this._disableExecuteApiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableExecuteApiEndpointInput() {
    return this._disableExecuteApiEndpoint
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // minimum_compression_size - computed: false, optional: true, required: false
  private _minimumCompressionSize?: number;
  public get minimumCompressionSize() {
    return this.getNumberAttribute('minimum_compression_size');
  }
  public set minimumCompressionSize(value: number ) {
    this._minimumCompressionSize = value;
  }
  public resetMinimumCompressionSize() {
    this._minimumCompressionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCompressionSizeInput() {
    return this._minimumCompressionSize
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string };
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } ) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy
  }

  // root_resource_id - computed: true, optional: false, required: false
  public get rootResourceId() {
    return this.getStringAttribute('root_resource_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration[];
  public get endpointConfiguration() {
    return this.interpolationForAttribute('endpoint_configuration') as any;
  }
  public set endpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration[] ) {
    this._endpointConfiguration = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_source: cdktf.stringToTerraform(this._apiKeySource),
      binary_media_types: cdktf.listMapper(cdktf.stringToTerraform)(this._binaryMediaTypes),
      body: cdktf.stringToTerraform(this._body),
      description: cdktf.stringToTerraform(this._description),
      disable_execute_api_endpoint: cdktf.booleanToTerraform(this._disableExecuteApiEndpoint),
      minimum_compression_size: cdktf.numberToTerraform(this._minimumCompressionSize),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
      policy: cdktf.stringToTerraform(this._policy),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      endpoint_configuration: cdktf.listMapper(apiGatewayRestApiEndpointConfigurationToTerraform)(this._endpointConfiguration),
    };
  }
}
