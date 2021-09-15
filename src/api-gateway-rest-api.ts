// https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#api_key_source ApiGatewayRestApi#api_key_source}
  */
  readonly apiKeySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#binary_media_types ApiGatewayRestApi#binary_media_types}
  */
  readonly binaryMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#body ApiGatewayRestApi#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#description ApiGatewayRestApi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}
  */
  readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}
  */
  readonly minimumCompressionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#name ApiGatewayRestApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#parameters ApiGatewayRestApi#parameters}
  */
  readonly parameters?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#policy ApiGatewayRestApi#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#tags ApiGatewayRestApi#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#tags_all ApiGatewayRestApi#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}
  */
  readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration[];
}
export interface ApiGatewayRestApiEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#types ApiGatewayRestApi#types}
  */
  readonly types: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}
  */
  readonly vpcEndpointIds?: string[];
}

function apiGatewayRestApiEndpointConfigurationToTerraform(struct?: ApiGatewayRestApiEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
    vpc_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpcEndpointIds),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api}
*/
export class ApiGatewayRestApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_api_gateway_rest_api";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api.html aws_api_gateway_rest_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayRestApiConfig
  */
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
    this._tagsAll = config.tagsAll;
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
  private _disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
  public get disableExecuteApiEndpoint() {
    return this.getBooleanAttribute('disable_execute_api_endpoint');
  }
  public set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable) {
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
  private _parameters?: { [key: string]: string } | cdktf.IResolvable;
  public get parameters() {
    return this.interpolationForAttribute('parameters') as any;
  }
  public set parameters(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      endpoint_configuration: cdktf.listMapper(apiGatewayRestApiEndpointConfigurationToTerraform)(this._endpointConfiguration),
    };
  }
}
