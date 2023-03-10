// https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#api_key_source ApiGatewayRestApi#api_key_source}
  */
  readonly apiKeySource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#binary_media_types ApiGatewayRestApi#binary_media_types}
  */
  readonly binaryMediaTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#body ApiGatewayRestApi#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#description ApiGatewayRestApi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#disable_execute_api_endpoint ApiGatewayRestApi#disable_execute_api_endpoint}
  */
  readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#id ApiGatewayRestApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#minimum_compression_size ApiGatewayRestApi#minimum_compression_size}
  */
  readonly minimumCompressionSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#name ApiGatewayRestApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#parameters ApiGatewayRestApi#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#policy ApiGatewayRestApi#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#put_rest_api_mode ApiGatewayRestApi#put_rest_api_mode}
  */
  readonly putRestApiMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags ApiGatewayRestApi#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#tags_all ApiGatewayRestApi#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#endpoint_configuration ApiGatewayRestApi#endpoint_configuration}
  */
  readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration;
}
export interface ApiGatewayRestApiEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#types ApiGatewayRestApi#types}
  */
  readonly types: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api#vpc_endpoint_ids ApiGatewayRestApi#vpc_endpoint_ids}
  */
  readonly vpcEndpointIds?: string[];
}

export function apiGatewayRestApiEndpointConfigurationToTerraform(struct?: ApiGatewayRestApiEndpointConfigurationOutputReference | ApiGatewayRestApiEndpointConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    vpc_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcEndpointIds),
  }
}

export class ApiGatewayRestApiEndpointConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayRestApiEndpointConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._vpcEndpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcEndpointIds = this._vpcEndpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayRestApiEndpointConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._types = undefined;
      this._vpcEndpointIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._types = value.types;
      this._vpcEndpointIds = value.vpcEndpointIds;
    }
  }

  // types - computed: false, optional: false, required: true
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // vpc_endpoint_ids - computed: true, optional: true, required: false
  private _vpcEndpointIds?: string[]; 
  public get vpcEndpointIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vpc_endpoint_ids'));
  }
  public set vpcEndpointIds(value: string[]) {
    this._vpcEndpointIds = value;
  }
  public resetVpcEndpointIds() {
    this._vpcEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcEndpointIdsInput() {
    return this._vpcEndpointIds;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api aws_api_gateway_rest_api}
*/
export class ApiGatewayRestApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_api_gateway_rest_api";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api aws_api_gateway_rest_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayRestApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayRestApiConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_api_gateway_rest_api',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeySource = config.apiKeySource;
    this._binaryMediaTypes = config.binaryMediaTypes;
    this._body = config.body;
    this._description = config.description;
    this._disableExecuteApiEndpoint = config.disableExecuteApiEndpoint;
    this._id = config.id;
    this._minimumCompressionSize = config.minimumCompressionSize;
    this._name = config.name;
    this._parameters = config.parameters;
    this._policy = config.policy;
    this._putRestApiMode = config.putRestApiMode;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._endpointConfiguration.internalValue = config.endpointConfiguration;
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
    return this._apiKeySource;
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
    return this._binaryMediaTypes;
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
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
    return this._description;
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
    return this._disableExecuteApiEndpoint;
  }

  // execution_arn - computed: true, optional: false, required: false
  public get executionArn() {
    return this.getStringAttribute('execution_arn');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // minimum_compression_size - computed: false, optional: true, required: false
  private _minimumCompressionSize?: number; 
  public get minimumCompressionSize() {
    return this.getNumberAttribute('minimum_compression_size');
  }
  public set minimumCompressionSize(value: number) {
    this._minimumCompressionSize = value;
  }
  public resetMinimumCompressionSize() {
    this._minimumCompressionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumCompressionSizeInput() {
    return this._minimumCompressionSize;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
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
    return this._policy;
  }

  // put_rest_api_mode - computed: false, optional: true, required: false
  private _putRestApiMode?: string; 
  public get putRestApiMode() {
    return this.getStringAttribute('put_rest_api_mode');
  }
  public set putRestApiMode(value: string) {
    this._putRestApiMode = value;
  }
  public resetPutRestApiMode() {
    this._putRestApiMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putRestApiModeInput() {
    return this._putRestApiMode;
  }

  // root_resource_id - computed: true, optional: false, required: false
  public get rootResourceId() {
    return this.getStringAttribute('root_resource_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // endpoint_configuration - computed: false, optional: true, required: false
  private _endpointConfiguration = new ApiGatewayRestApiEndpointConfigurationOutputReference(this, "endpoint_configuration");
  public get endpointConfiguration() {
    return this._endpointConfiguration;
  }
  public putEndpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration) {
    this._endpointConfiguration.internalValue = value;
  }
  public resetEndpointConfiguration() {
    this._endpointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigurationInput() {
    return this._endpointConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_source: cdktf.stringToTerraform(this._apiKeySource),
      binary_media_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._binaryMediaTypes),
      body: cdktf.stringToTerraform(this._body),
      description: cdktf.stringToTerraform(this._description),
      disable_execute_api_endpoint: cdktf.booleanToTerraform(this._disableExecuteApiEndpoint),
      id: cdktf.stringToTerraform(this._id),
      minimum_compression_size: cdktf.numberToTerraform(this._minimumCompressionSize),
      name: cdktf.stringToTerraform(this._name),
      parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._parameters),
      policy: cdktf.stringToTerraform(this._policy),
      put_rest_api_mode: cdktf.stringToTerraform(this._putRestApiMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      endpoint_configuration: apiGatewayRestApiEndpointConfigurationToTerraform(this._endpointConfiguration.internalValue),
    };
  }
}
