// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
export namespace APIGateway {
  export interface ApiGatewayAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html#cloudwatch_role_arn ApiGatewayAccount#cloudwatch_role_arn}
    */
    readonly cloudwatchRoleArn?: string;
  }
  export class ApiGatewayAccountThrottleSettings extends cdktf.ComplexComputedList {

    // burst_limit - computed: true, optional: false, required: false
    public get burstLimit() {
      return this.getNumberAttribute('burst_limit');
    }

    // rate_limit - computed: true, optional: false, required: false
    public get rateLimit() {
      return this.getNumberAttribute('rate_limit');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account}
  */
  export class ApiGatewayAccount extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_account";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_account.html aws_api_gateway_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayAccountConfig = {}
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayAccountConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_account',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cloudwatchRoleArn = config.cloudwatchRoleArn;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cloudwatch_role_arn - computed: false, optional: true, required: false
    private _cloudwatchRoleArn?: string | undefined; 
    public get cloudwatchRoleArn() {
      return this.getStringAttribute('cloudwatch_role_arn');
    }
    public set cloudwatchRoleArn(value: string | undefined) {
      this._cloudwatchRoleArn = value;
    }
    public resetCloudwatchRoleArn() {
      this._cloudwatchRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cloudwatchRoleArnInput() {
      return this._cloudwatchRoleArn
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // throttle_settings - computed: true, optional: false, required: false
    public throttleSettings(index: string) {
      return new ApiGatewayAccountThrottleSettings(this, 'throttle_settings', index);
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cloudwatch_role_arn: cdktf.stringToTerraform(this._cloudwatchRoleArn),
      };
    }
  }
  export interface ApiGatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html#description ApiGatewayApiKey#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html#enabled ApiGatewayApiKey#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html#name ApiGatewayApiKey#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html#tags ApiGatewayApiKey#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html#tags_all ApiGatewayApiKey#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html#value ApiGatewayApiKey#value}
    */
    readonly value?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html aws_api_gateway_api_key}
  */
  export class ApiGatewayApiKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_api_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_api_key.html aws_api_gateway_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayApiKeyConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayApiKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_api_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._enabled = config.enabled;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._value = config.value;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // enabled - computed: false, optional: true, required: false
    private _enabled?: boolean | cdktf.IResolvable | undefined; 
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }
    public set enabled(value: boolean | cdktf.IResolvable | undefined) {
      this._enabled = value;
    }
    public resetEnabled() {
      this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enabledInput() {
      return this._enabled
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // value - computed: true, optional: true, required: false
    private _value?: string | undefined; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string | undefined) {
      this._value = value;
    }
    public resetValue() {
      this._value = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        enabled: cdktf.booleanToTerraform(this._enabled),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        value: cdktf.stringToTerraform(this._value),
      };
    }
  }
  export interface ApiGatewayAuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}
    */
    readonly authorizerCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#identity_source ApiGatewayAuthorizer#identity_source}
    */
    readonly identitySource?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}
    */
    readonly identityValidationExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#name ApiGatewayAuthorizer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#provider_arns ApiGatewayAuthorizer#provider_arns}
    */
    readonly providerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#rest_api_id ApiGatewayAuthorizer#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html#type ApiGatewayAuthorizer#type}
    */
    readonly type?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html aws_api_gateway_authorizer}
  */
  export class ApiGatewayAuthorizer extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_authorizer";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_authorizer.html aws_api_gateway_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayAuthorizerConfig
    */
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
    private _authorizerCredentials?: string | undefined; 
    public get authorizerCredentials() {
      return this.getStringAttribute('authorizer_credentials');
    }
    public set authorizerCredentials(value: string | undefined) {
      this._authorizerCredentials = value;
    }
    public resetAuthorizerCredentials() {
      this._authorizerCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerCredentialsInput() {
      return this._authorizerCredentials
    }

    // authorizer_result_ttl_in_seconds - computed: false, optional: true, required: false
    private _authorizerResultTtlInSeconds?: number | undefined; 
    public get authorizerResultTtlInSeconds() {
      return this.getNumberAttribute('authorizer_result_ttl_in_seconds');
    }
    public set authorizerResultTtlInSeconds(value: number | undefined) {
      this._authorizerResultTtlInSeconds = value;
    }
    public resetAuthorizerResultTtlInSeconds() {
      this._authorizerResultTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerResultTtlInSecondsInput() {
      return this._authorizerResultTtlInSeconds
    }

    // authorizer_uri - computed: false, optional: true, required: false
    private _authorizerUri?: string | undefined; 
    public get authorizerUri() {
      return this.getStringAttribute('authorizer_uri');
    }
    public set authorizerUri(value: string | undefined) {
      this._authorizerUri = value;
    }
    public resetAuthorizerUri() {
      this._authorizerUri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerUriInput() {
      return this._authorizerUri
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // identity_source - computed: false, optional: true, required: false
    private _identitySource?: string | undefined; 
    public get identitySource() {
      return this.getStringAttribute('identity_source');
    }
    public set identitySource(value: string | undefined) {
      this._identitySource = value;
    }
    public resetIdentitySource() {
      this._identitySource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identitySourceInput() {
      return this._identitySource
    }

    // identity_validation_expression - computed: false, optional: true, required: false
    private _identityValidationExpression?: string | undefined; 
    public get identityValidationExpression() {
      return this.getStringAttribute('identity_validation_expression');
    }
    public set identityValidationExpression(value: string | undefined) {
      this._identityValidationExpression = value;
    }
    public resetIdentityValidationExpression() {
      this._identityValidationExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get identityValidationExpressionInput() {
      return this._identityValidationExpression
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
      return this._name
    }

    // provider_arns - computed: false, optional: true, required: false
    private _providerArns?: string[] | undefined; 
    public get providerArns() {
      return this.getListAttribute('provider_arns');
    }
    public set providerArns(value: string[] | undefined) {
      this._providerArns = value;
    }
    public resetProviderArns() {
      this._providerArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get providerArnsInput() {
      return this._providerArns
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // type - computed: false, optional: true, required: false
    private _type?: string | undefined; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string | undefined) {
      this._type = value;
    }
    public resetType() {
      this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        authorizer_credentials: cdktf.stringToTerraform(this._authorizerCredentials),
        authorizer_result_ttl_in_seconds: cdktf.numberToTerraform(this._authorizerResultTtlInSeconds),
        authorizer_uri: cdktf.stringToTerraform(this._authorizerUri),
        identity_source: cdktf.stringToTerraform(this._identitySource),
        identity_validation_expression: cdktf.stringToTerraform(this._identityValidationExpression),
        name: cdktf.stringToTerraform(this._name),
        provider_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._providerArns),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        type: cdktf.stringToTerraform(this._type),
      };
    }
  }
  export interface ApiGatewayBasePathMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#api_id ApiGatewayBasePathMapping#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#base_path ApiGatewayBasePathMapping#base_path}
    */
    readonly basePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#domain_name ApiGatewayBasePathMapping#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html#stage_name ApiGatewayBasePathMapping#stage_name}
    */
    readonly stageName?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html aws_api_gateway_base_path_mapping}
  */
  export class ApiGatewayBasePathMapping extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_base_path_mapping";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_base_path_mapping.html aws_api_gateway_base_path_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayBasePathMappingConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayBasePathMappingConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_base_path_mapping',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiId = config.apiId;
      this._basePath = config.basePath;
      this._domainName = config.domainName;
      this._stageName = config.stageName;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_id - computed: false, optional: false, required: true
    private _apiId?: string; 
    public get apiId() {
      return this.getStringAttribute('api_id');
    }
    public set apiId(value: string) {
      this._apiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get apiIdInput() {
      return this._apiId
    }

    // base_path - computed: false, optional: true, required: false
    private _basePath?: string | undefined; 
    public get basePath() {
      return this.getStringAttribute('base_path');
    }
    public set basePath(value: string | undefined) {
      this._basePath = value;
    }
    public resetBasePath() {
      this._basePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basePathInput() {
      return this._basePath
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // stage_name - computed: false, optional: true, required: false
    private _stageName?: string | undefined; 
    public get stageName() {
      return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string | undefined) {
      this._stageName = value;
    }
    public resetStageName() {
      this._stageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
      return this._stageName
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_id: cdktf.stringToTerraform(this._apiId),
        base_path: cdktf.stringToTerraform(this._basePath),
        domain_name: cdktf.stringToTerraform(this._domainName),
        stage_name: cdktf.stringToTerraform(this._stageName),
      };
    }
  }
  export interface ApiGatewayClientCertificateConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html#description ApiGatewayClientCertificate#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html#tags ApiGatewayClientCertificate#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html#tags_all ApiGatewayClientCertificate#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html aws_api_gateway_client_certificate}
  */
  export class ApiGatewayClientCertificate extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_client_certificate";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_client_certificate.html aws_api_gateway_client_certificate} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayClientCertificateConfig = {}
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayClientCertificateConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_client_certificate',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // expiration_date - computed: true, optional: false, required: false
    public get expirationDate() {
      return this.getStringAttribute('expiration_date');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // pem_encoded_certificate - computed: true, optional: false, required: false
    public get pemEncodedCertificate() {
      return this.getStringAttribute('pem_encoded_certificate');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface ApiGatewayDeploymentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#description ApiGatewayDeployment#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#rest_api_id ApiGatewayDeployment#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#stage_description ApiGatewayDeployment#stage_description}
    */
    readonly stageDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#stage_name ApiGatewayDeployment#stage_name}
    */
    readonly stageName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#triggers ApiGatewayDeployment#triggers}
    */
    readonly triggers?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html#variables ApiGatewayDeployment#variables}
    */
    readonly variables?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html aws_api_gateway_deployment}
  */
  export class ApiGatewayDeployment extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_deployment";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_deployment.html aws_api_gateway_deployment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDeploymentConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayDeploymentConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_deployment',
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
      this._stageDescription = config.stageDescription;
      this._stageName = config.stageName;
      this._triggers = config.triggers;
      this._variables = config.variables;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // execution_arn - computed: true, optional: false, required: false
    public get executionArn() {
      return this.getStringAttribute('execution_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invoke_url - computed: true, optional: false, required: false
    public get invokeUrl() {
      return this.getStringAttribute('invoke_url');
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // stage_description - computed: false, optional: true, required: false
    private _stageDescription?: string | undefined; 
    public get stageDescription() {
      return this.getStringAttribute('stage_description');
    }
    public set stageDescription(value: string | undefined) {
      this._stageDescription = value;
    }
    public resetStageDescription() {
      this._stageDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageDescriptionInput() {
      return this._stageDescription
    }

    // stage_name - computed: false, optional: true, required: false
    private _stageName?: string | undefined; 
    public get stageName() {
      return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string | undefined) {
      this._stageName = value;
    }
    public resetStageName() {
      this._stageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
      return this._stageName
    }

    // triggers - computed: false, optional: true, required: false
    private _triggers?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get triggers() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('triggers') as any;
    }
    public set triggers(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._triggers = value;
    }
    public resetTriggers() {
      this._triggers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get triggersInput() {
      return this._triggers
    }

    // variables - computed: false, optional: true, required: false
    private _variables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get variables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('variables') as any;
    }
    public set variables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._variables = value;
    }
    public resetVariables() {
      this._variables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
      return this._variables
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        stage_description: cdktf.stringToTerraform(this._stageDescription),
        stage_name: cdktf.stringToTerraform(this._stageName),
        triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
        variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
      };
    }
  }
  export interface ApiGatewayDocumentationPartConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#properties ApiGatewayDocumentationPart#properties}
    */
    readonly properties: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#rest_api_id ApiGatewayDocumentationPart#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * location block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#location ApiGatewayDocumentationPart#location}
    */
    readonly location: ApiGatewayDocumentationPartLocation;
  }
  export interface ApiGatewayDocumentationPartLocation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#method ApiGatewayDocumentationPart#method}
    */
    readonly method?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#name ApiGatewayDocumentationPart#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#path ApiGatewayDocumentationPart#path}
    */
    readonly path?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#status_code ApiGatewayDocumentationPart#status_code}
    */
    readonly statusCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html#type ApiGatewayDocumentationPart#type}
    */
    readonly type: string;
  }

  function apiGatewayDocumentationPartLocationToTerraform(struct?: ApiGatewayDocumentationPartLocationOutputReference | ApiGatewayDocumentationPartLocation): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      method: cdktf.stringToTerraform(struct!.method),
      name: cdktf.stringToTerraform(struct!.name),
      path: cdktf.stringToTerraform(struct!.path),
      status_code: cdktf.stringToTerraform(struct!.statusCode),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export class ApiGatewayDocumentationPartLocationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // method - computed: false, optional: true, required: false
    private _method?: string | undefined; 
    public get method() {
      return this.getStringAttribute('method');
    }
    public set method(value: string | undefined) {
      this._method = value;
    }
    public resetMethod() {
      this._method = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get methodInput() {
      return this._method
    }

    // name - computed: false, optional: true, required: false
    private _name?: string | undefined; 
    public get name() {
      return this.getStringAttribute('name');
    }
    public set name(value: string | undefined) {
      this._name = value;
    }
    public resetName() {
      this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get nameInput() {
      return this._name
    }

    // path - computed: false, optional: true, required: false
    private _path?: string | undefined; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string | undefined) {
      this._path = value;
    }
    public resetPath() {
      this._path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // status_code - computed: false, optional: true, required: false
    private _statusCode?: string | undefined; 
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string | undefined) {
      this._statusCode = value;
    }
    public resetStatusCode() {
      this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
      return this._statusCode
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part}
  */
  export class ApiGatewayDocumentationPart extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_documentation_part";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_part.html aws_api_gateway_documentation_part} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDocumentationPartConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayDocumentationPartConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_documentation_part',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._properties = config.properties;
      this._restApiId = config.restApiId;
      this._location = config.location;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // properties - computed: false, optional: false, required: true
    private _properties?: string; 
    public get properties() {
      return this.getStringAttribute('properties');
    }
    public set properties(value: string) {
      this._properties = value;
    }
    // Temporarily expose input value. Use with caution.
    public get propertiesInput() {
      return this._properties
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // location - computed: false, optional: false, required: true
    private _location?: ApiGatewayDocumentationPartLocation; 
    private __locationOutput = new ApiGatewayDocumentationPartLocationOutputReference(this as any, "location", true);
    public get location() {
      return this.__locationOutput;
    }
    public putLocation(value: ApiGatewayDocumentationPartLocation) {
      this._location = value;
    }
    // Temporarily expose input value. Use with caution.
    public get locationInput() {
      return this._location
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        properties: cdktf.stringToTerraform(this._properties),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        location: apiGatewayDocumentationPartLocationToTerraform(this._location),
      };
    }
  }
  export interface ApiGatewayDocumentationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html#description ApiGatewayDocumentationVersion#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html#rest_api_id ApiGatewayDocumentationVersion#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html#version ApiGatewayDocumentationVersion#version}
    */
    readonly version: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html aws_api_gateway_documentation_version}
  */
  export class ApiGatewayDocumentationVersion extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_documentation_version";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_documentation_version.html aws_api_gateway_documentation_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDocumentationVersionConfig
    */
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // version - computed: false, optional: false, required: true
    private _version?: string; 
    public get version() {
      return this.getStringAttribute('version');
    }
    public set version(value: string) {
      this._version = value;
    }
    // Temporarily expose input value. Use with caution.
    public get versionInput() {
      return this._version
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        version: cdktf.stringToTerraform(this._version),
      };
    }
  }
  export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_arn ApiGatewayDomainName#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_body ApiGatewayDomainName#certificate_body}
    */
    readonly certificateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_chain ApiGatewayDomainName#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_name ApiGatewayDomainName#certificate_name}
    */
    readonly certificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_private_key ApiGatewayDomainName#certificate_private_key}
    */
    readonly certificatePrivateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#domain_name ApiGatewayDomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}
    */
    readonly regionalCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}
    */
    readonly regionalCertificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#security_policy ApiGatewayDomainName#security_policy}
    */
    readonly securityPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags ApiGatewayDomainName#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags_all ApiGatewayDomainName#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * endpoint_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}
    */
    readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
    /**
    * mutual_tls_authentication block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
  }
  export interface ApiGatewayDomainNameEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#types ApiGatewayDomainName#types}
    */
    readonly types: string[];
  }

  function apiGatewayDomainNameEndpointConfigurationToTerraform(struct?: ApiGatewayDomainNameEndpointConfigurationOutputReference | ApiGatewayDomainNameEndpointConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
    }
  }

  export class ApiGatewayDomainNameEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._types
    }
  }
  export interface ApiGatewayDomainNameMutualTlsAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_uri ApiGatewayDomainName#truststore_uri}
    */
    readonly truststoreUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_version ApiGatewayDomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
  }

  function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference | ApiGatewayDomainNameMutualTlsAuthentication): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
      truststore_version: cdktf.stringToTerraform(struct!.truststoreVersion),
    }
  }

  export class ApiGatewayDomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // truststore_uri - computed: false, optional: false, required: true
    private _truststoreUri?: string; 
    public get truststoreUri() {
      return this.getStringAttribute('truststore_uri');
    }
    public set truststoreUri(value: string) {
      this._truststoreUri = value;
    }
    // Temporarily expose input value. Use with caution.
    public get truststoreUriInput() {
      return this._truststoreUri
    }

    // truststore_version - computed: false, optional: true, required: false
    private _truststoreVersion?: string | undefined; 
    public get truststoreVersion() {
      return this.getStringAttribute('truststore_version');
    }
    public set truststoreVersion(value: string | undefined) {
      this._truststoreVersion = value;
    }
    public resetTruststoreVersion() {
      this._truststoreVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get truststoreVersionInput() {
      return this._truststoreVersion
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name}
  */
  export class ApiGatewayDomainName extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_domain_name";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDomainNameConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_domain_name',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._certificateArn = config.certificateArn;
      this._certificateBody = config.certificateBody;
      this._certificateChain = config.certificateChain;
      this._certificateName = config.certificateName;
      this._certificatePrivateKey = config.certificatePrivateKey;
      this._domainName = config.domainName;
      this._regionalCertificateArn = config.regionalCertificateArn;
      this._regionalCertificateName = config.regionalCertificateName;
      this._securityPolicy = config.securityPolicy;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._endpointConfiguration = config.endpointConfiguration;
      this._mutualTlsAuthentication = config.mutualTlsAuthentication;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_arn - computed: false, optional: true, required: false
    private _certificateArn?: string | undefined; 
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }
    public set certificateArn(value: string | undefined) {
      this._certificateArn = value;
    }
    public resetCertificateArn() {
      this._certificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateArnInput() {
      return this._certificateArn
    }

    // certificate_body - computed: false, optional: true, required: false
    private _certificateBody?: string | undefined; 
    public get certificateBody() {
      return this.getStringAttribute('certificate_body');
    }
    public set certificateBody(value: string | undefined) {
      this._certificateBody = value;
    }
    public resetCertificateBody() {
      this._certificateBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateBodyInput() {
      return this._certificateBody
    }

    // certificate_chain - computed: false, optional: true, required: false
    private _certificateChain?: string | undefined; 
    public get certificateChain() {
      return this.getStringAttribute('certificate_chain');
    }
    public set certificateChain(value: string | undefined) {
      this._certificateChain = value;
    }
    public resetCertificateChain() {
      this._certificateChain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateChainInput() {
      return this._certificateChain
    }

    // certificate_name - computed: false, optional: true, required: false
    private _certificateName?: string | undefined; 
    public get certificateName() {
      return this.getStringAttribute('certificate_name');
    }
    public set certificateName(value: string | undefined) {
      this._certificateName = value;
    }
    public resetCertificateName() {
      this._certificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificateNameInput() {
      return this._certificateName
    }

    // certificate_private_key - computed: false, optional: true, required: false
    private _certificatePrivateKey?: string | undefined; 
    public get certificatePrivateKey() {
      return this.getStringAttribute('certificate_private_key');
    }
    public set certificatePrivateKey(value: string | undefined) {
      this._certificatePrivateKey = value;
    }
    public resetCertificatePrivateKey() {
      this._certificatePrivateKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get certificatePrivateKeyInput() {
      return this._certificatePrivateKey
    }

    // certificate_upload_date - computed: true, optional: false, required: false
    public get certificateUploadDate() {
      return this.getStringAttribute('certificate_upload_date');
    }

    // cloudfront_domain_name - computed: true, optional: false, required: false
    public get cloudfrontDomainName() {
      return this.getStringAttribute('cloudfront_domain_name');
    }

    // cloudfront_zone_id - computed: true, optional: false, required: false
    public get cloudfrontZoneId() {
      return this.getStringAttribute('cloudfront_zone_id');
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // regional_certificate_arn - computed: false, optional: true, required: false
    private _regionalCertificateArn?: string | undefined; 
    public get regionalCertificateArn() {
      return this.getStringAttribute('regional_certificate_arn');
    }
    public set regionalCertificateArn(value: string | undefined) {
      this._regionalCertificateArn = value;
    }
    public resetRegionalCertificateArn() {
      this._regionalCertificateArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionalCertificateArnInput() {
      return this._regionalCertificateArn
    }

    // regional_certificate_name - computed: false, optional: true, required: false
    private _regionalCertificateName?: string | undefined; 
    public get regionalCertificateName() {
      return this.getStringAttribute('regional_certificate_name');
    }
    public set regionalCertificateName(value: string | undefined) {
      this._regionalCertificateName = value;
    }
    public resetRegionalCertificateName() {
      this._regionalCertificateName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get regionalCertificateNameInput() {
      return this._regionalCertificateName
    }

    // regional_domain_name - computed: true, optional: false, required: false
    public get regionalDomainName() {
      return this.getStringAttribute('regional_domain_name');
    }

    // regional_zone_id - computed: true, optional: false, required: false
    public get regionalZoneId() {
      return this.getStringAttribute('regional_zone_id');
    }

    // security_policy - computed: true, optional: true, required: false
    private _securityPolicy?: string | undefined; 
    public get securityPolicy() {
      return this.getStringAttribute('security_policy');
    }
    public set securityPolicy(value: string | undefined) {
      this._securityPolicy = value;
    }
    public resetSecurityPolicy() {
      this._securityPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityPolicyInput() {
      return this._securityPolicy
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration | undefined; 
    private __endpointConfigurationOutput = new ApiGatewayDomainNameEndpointConfigurationOutputReference(this as any, "endpoint_configuration", true);
    public get endpointConfiguration() {
      return this.__endpointConfigurationOutput;
    }
    public putEndpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration | undefined) {
      this._endpointConfiguration = value;
    }
    public resetEndpointConfiguration() {
      this._endpointConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get endpointConfigurationInput() {
      return this._endpointConfiguration
    }

    // mutual_tls_authentication - computed: false, optional: true, required: false
    private _mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication | undefined; 
    private __mutualTlsAuthenticationOutput = new ApiGatewayDomainNameMutualTlsAuthenticationOutputReference(this as any, "mutual_tls_authentication", true);
    public get mutualTlsAuthentication() {
      return this.__mutualTlsAuthenticationOutput;
    }
    public putMutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication | undefined) {
      this._mutualTlsAuthentication = value;
    }
    public resetMutualTlsAuthentication() {
      this._mutualTlsAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get mutualTlsAuthenticationInput() {
      return this._mutualTlsAuthentication
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        certificate_arn: cdktf.stringToTerraform(this._certificateArn),
        certificate_body: cdktf.stringToTerraform(this._certificateBody),
        certificate_chain: cdktf.stringToTerraform(this._certificateChain),
        certificate_name: cdktf.stringToTerraform(this._certificateName),
        certificate_private_key: cdktf.stringToTerraform(this._certificatePrivateKey),
        domain_name: cdktf.stringToTerraform(this._domainName),
        regional_certificate_arn: cdktf.stringToTerraform(this._regionalCertificateArn),
        regional_certificate_name: cdktf.stringToTerraform(this._regionalCertificateName),
        security_policy: cdktf.stringToTerraform(this._securityPolicy),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        endpoint_configuration: apiGatewayDomainNameEndpointConfigurationToTerraform(this._endpointConfiguration),
        mutual_tls_authentication: apiGatewayDomainNameMutualTlsAuthenticationToTerraform(this._mutualTlsAuthentication),
      };
    }
  }
  export interface ApiGatewayGatewayResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#response_parameters ApiGatewayGatewayResponse#response_parameters}
    */
    readonly responseParameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#response_templates ApiGatewayGatewayResponse#response_templates}
    */
    readonly responseTemplates?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#response_type ApiGatewayGatewayResponse#response_type}
    */
    readonly responseType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#rest_api_id ApiGatewayGatewayResponse#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html#status_code ApiGatewayGatewayResponse#status_code}
    */
    readonly statusCode?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response}
  */
  export class ApiGatewayGatewayResponse extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_gateway_response";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_gateway_response.html aws_api_gateway_gateway_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayGatewayResponseConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayGatewayResponseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_gateway_response',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._responseParameters = config.responseParameters;
      this._responseTemplates = config.responseTemplates;
      this._responseType = config.responseType;
      this._restApiId = config.restApiId;
      this._statusCode = config.statusCode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // response_parameters - computed: false, optional: true, required: false
    private _responseParameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get responseParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_parameters') as any;
    }
    public set responseParameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._responseParameters = value;
    }
    public resetResponseParameters() {
      this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
      return this._responseParameters
    }

    // response_templates - computed: false, optional: true, required: false
    private _responseTemplates?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get responseTemplates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_templates') as any;
    }
    public set responseTemplates(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._responseTemplates = value;
    }
    public resetResponseTemplates() {
      this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTemplatesInput() {
      return this._responseTemplates
    }

    // response_type - computed: false, optional: false, required: true
    private _responseType?: string; 
    public get responseType() {
      return this.getStringAttribute('response_type');
    }
    public set responseType(value: string) {
      this._responseType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTypeInput() {
      return this._responseType
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // status_code - computed: false, optional: true, required: false
    private _statusCode?: string | undefined; 
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string | undefined) {
      this._statusCode = value;
    }
    public resetStatusCode() {
      this._statusCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
      return this._statusCode
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
        response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
        response_type: cdktf.stringToTerraform(this._responseType),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        status_code: cdktf.stringToTerraform(this._statusCode),
      };
    }
  }
  export interface ApiGatewayIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}
    */
    readonly cacheKeyParameters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#cache_namespace ApiGatewayIntegration#cache_namespace}
    */
    readonly cacheNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_id ApiGatewayIntegration#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#connection_type ApiGatewayIntegration#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#content_handling ApiGatewayIntegration#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#credentials ApiGatewayIntegration#credentials}
    */
    readonly credentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#http_method ApiGatewayIntegration#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#integration_http_method ApiGatewayIntegration#integration_http_method}
    */
    readonly integrationHttpMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}
    */
    readonly passthroughBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_parameters ApiGatewayIntegration#request_parameters}
    */
    readonly requestParameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#request_templates ApiGatewayIntegration#request_templates}
    */
    readonly requestTemplates?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#resource_id ApiGatewayIntegration#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#rest_api_id ApiGatewayIntegration#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}
    */
    readonly timeoutMilliseconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#type ApiGatewayIntegration#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#uri ApiGatewayIntegration#uri}
    */
    readonly uri?: string;
    /**
    * tls_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#tls_config ApiGatewayIntegration#tls_config}
    */
    readonly tlsConfig?: ApiGatewayIntegrationTlsConfig;
  }
  export interface ApiGatewayIntegrationTlsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}
    */
    readonly insecureSkipVerification?: boolean | cdktf.IResolvable;
  }

  function apiGatewayIntegrationTlsConfigToTerraform(struct?: ApiGatewayIntegrationTlsConfigOutputReference | ApiGatewayIntegrationTlsConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      insecure_skip_verification: cdktf.booleanToTerraform(struct!.insecureSkipVerification),
    }
  }

  export class ApiGatewayIntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // insecure_skip_verification - computed: false, optional: true, required: false
    private _insecureSkipVerification?: boolean | cdktf.IResolvable | undefined; 
    public get insecureSkipVerification() {
      return this.getBooleanAttribute('insecure_skip_verification') as any;
    }
    public set insecureSkipVerification(value: boolean | cdktf.IResolvable | undefined) {
      this._insecureSkipVerification = value;
    }
    public resetInsecureSkipVerification() {
      this._insecureSkipVerification = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get insecureSkipVerificationInput() {
      return this._insecureSkipVerification
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration}
  */
  export class ApiGatewayIntegration extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_integration";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration.html aws_api_gateway_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_integration',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cacheKeyParameters = config.cacheKeyParameters;
      this._cacheNamespace = config.cacheNamespace;
      this._connectionId = config.connectionId;
      this._connectionType = config.connectionType;
      this._contentHandling = config.contentHandling;
      this._credentials = config.credentials;
      this._httpMethod = config.httpMethod;
      this._integrationHttpMethod = config.integrationHttpMethod;
      this._passthroughBehavior = config.passthroughBehavior;
      this._requestParameters = config.requestParameters;
      this._requestTemplates = config.requestTemplates;
      this._resourceId = config.resourceId;
      this._restApiId = config.restApiId;
      this._timeoutMilliseconds = config.timeoutMilliseconds;
      this._type = config.type;
      this._uri = config.uri;
      this._tlsConfig = config.tlsConfig;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // cache_key_parameters - computed: false, optional: true, required: false
    private _cacheKeyParameters?: string[] | undefined; 
    public get cacheKeyParameters() {
      return this.getListAttribute('cache_key_parameters');
    }
    public set cacheKeyParameters(value: string[] | undefined) {
      this._cacheKeyParameters = value;
    }
    public resetCacheKeyParameters() {
      this._cacheKeyParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheKeyParametersInput() {
      return this._cacheKeyParameters
    }

    // cache_namespace - computed: true, optional: true, required: false
    private _cacheNamespace?: string | undefined; 
    public get cacheNamespace() {
      return this.getStringAttribute('cache_namespace');
    }
    public set cacheNamespace(value: string | undefined) {
      this._cacheNamespace = value;
    }
    public resetCacheNamespace() {
      this._cacheNamespace = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheNamespaceInput() {
      return this._cacheNamespace
    }

    // connection_id - computed: false, optional: true, required: false
    private _connectionId?: string | undefined; 
    public get connectionId() {
      return this.getStringAttribute('connection_id');
    }
    public set connectionId(value: string | undefined) {
      this._connectionId = value;
    }
    public resetConnectionId() {
      this._connectionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionIdInput() {
      return this._connectionId
    }

    // connection_type - computed: false, optional: true, required: false
    private _connectionType?: string | undefined; 
    public get connectionType() {
      return this.getStringAttribute('connection_type');
    }
    public set connectionType(value: string | undefined) {
      this._connectionType = value;
    }
    public resetConnectionType() {
      this._connectionType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionTypeInput() {
      return this._connectionType
    }

    // content_handling - computed: false, optional: true, required: false
    private _contentHandling?: string | undefined; 
    public get contentHandling() {
      return this.getStringAttribute('content_handling');
    }
    public set contentHandling(value: string | undefined) {
      this._contentHandling = value;
    }
    public resetContentHandling() {
      this._contentHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHandlingInput() {
      return this._contentHandling
    }

    // credentials - computed: false, optional: true, required: false
    private _credentials?: string | undefined; 
    public get credentials() {
      return this.getStringAttribute('credentials');
    }
    public set credentials(value: string | undefined) {
      this._credentials = value;
    }
    public resetCredentials() {
      this._credentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get credentialsInput() {
      return this._credentials
    }

    // http_method - computed: false, optional: false, required: true
    private _httpMethod?: string; 
    public get httpMethod() {
      return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
      this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
      return this._httpMethod
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // integration_http_method - computed: false, optional: true, required: false
    private _integrationHttpMethod?: string | undefined; 
    public get integrationHttpMethod() {
      return this.getStringAttribute('integration_http_method');
    }
    public set integrationHttpMethod(value: string | undefined) {
      this._integrationHttpMethod = value;
    }
    public resetIntegrationHttpMethod() {
      this._integrationHttpMethod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get integrationHttpMethodInput() {
      return this._integrationHttpMethod
    }

    // passthrough_behavior - computed: true, optional: true, required: false
    private _passthroughBehavior?: string | undefined; 
    public get passthroughBehavior() {
      return this.getStringAttribute('passthrough_behavior');
    }
    public set passthroughBehavior(value: string | undefined) {
      this._passthroughBehavior = value;
    }
    public resetPassthroughBehavior() {
      this._passthroughBehavior = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get passthroughBehaviorInput() {
      return this._passthroughBehavior
    }

    // request_parameters - computed: false, optional: true, required: false
    private _requestParameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get requestParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('request_parameters') as any;
    }
    public set requestParameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._requestParameters = value;
    }
    public resetRequestParameters() {
      this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParametersInput() {
      return this._requestParameters
    }

    // request_templates - computed: false, optional: true, required: false
    private _requestTemplates?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get requestTemplates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('request_templates') as any;
    }
    public set requestTemplates(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._requestTemplates = value;
    }
    public resetRequestTemplates() {
      this._requestTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestTemplatesInput() {
      return this._requestTemplates
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // timeout_milliseconds - computed: false, optional: true, required: false
    private _timeoutMilliseconds?: number | undefined; 
    public get timeoutMilliseconds() {
      return this.getNumberAttribute('timeout_milliseconds');
    }
    public set timeoutMilliseconds(value: number | undefined) {
      this._timeoutMilliseconds = value;
    }
    public resetTimeoutMilliseconds() {
      this._timeoutMilliseconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get timeoutMillisecondsInput() {
      return this._timeoutMilliseconds
    }

    // type - computed: false, optional: false, required: true
    private _type?: string; 
    public get type() {
      return this.getStringAttribute('type');
    }
    public set type(value: string) {
      this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    public get typeInput() {
      return this._type
    }

    // uri - computed: false, optional: true, required: false
    private _uri?: string | undefined; 
    public get uri() {
      return this.getStringAttribute('uri');
    }
    public set uri(value: string | undefined) {
      this._uri = value;
    }
    public resetUri() {
      this._uri = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get uriInput() {
      return this._uri
    }

    // tls_config - computed: false, optional: true, required: false
    private _tlsConfig?: ApiGatewayIntegrationTlsConfig | undefined; 
    private __tlsConfigOutput = new ApiGatewayIntegrationTlsConfigOutputReference(this as any, "tls_config", true);
    public get tlsConfig() {
      return this.__tlsConfigOutput;
    }
    public putTlsConfig(value: ApiGatewayIntegrationTlsConfig | undefined) {
      this._tlsConfig = value;
    }
    public resetTlsConfig() {
      this._tlsConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tlsConfigInput() {
      return this._tlsConfig
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cache_key_parameters: cdktf.listMapper(cdktf.stringToTerraform)(this._cacheKeyParameters),
        cache_namespace: cdktf.stringToTerraform(this._cacheNamespace),
        connection_id: cdktf.stringToTerraform(this._connectionId),
        connection_type: cdktf.stringToTerraform(this._connectionType),
        content_handling: cdktf.stringToTerraform(this._contentHandling),
        credentials: cdktf.stringToTerraform(this._credentials),
        http_method: cdktf.stringToTerraform(this._httpMethod),
        integration_http_method: cdktf.stringToTerraform(this._integrationHttpMethod),
        passthrough_behavior: cdktf.stringToTerraform(this._passthroughBehavior),
        request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
        request_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestTemplates),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        timeout_milliseconds: cdktf.numberToTerraform(this._timeoutMilliseconds),
        type: cdktf.stringToTerraform(this._type),
        uri: cdktf.stringToTerraform(this._uri),
        tls_config: apiGatewayIntegrationTlsConfigToTerraform(this._tlsConfig),
      };
    }
  }
  export interface ApiGatewayIntegrationResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#content_handling ApiGatewayIntegrationResponse#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#http_method ApiGatewayIntegrationResponse#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#resource_id ApiGatewayIntegrationResponse#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#response_parameters ApiGatewayIntegrationResponse#response_parameters}
    */
    readonly responseParameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#response_templates ApiGatewayIntegrationResponse#response_templates}
    */
    readonly responseTemplates?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}
    */
    readonly selectionPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html#status_code ApiGatewayIntegrationResponse#status_code}
    */
    readonly statusCode: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html aws_api_gateway_integration_response}
  */
  export class ApiGatewayIntegrationResponse extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_integration_response";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_integration_response.html aws_api_gateway_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationResponseConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_integration_response',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._contentHandling = config.contentHandling;
      this._httpMethod = config.httpMethod;
      this._resourceId = config.resourceId;
      this._responseParameters = config.responseParameters;
      this._responseTemplates = config.responseTemplates;
      this._restApiId = config.restApiId;
      this._selectionPattern = config.selectionPattern;
      this._statusCode = config.statusCode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // content_handling - computed: false, optional: true, required: false
    private _contentHandling?: string | undefined; 
    public get contentHandling() {
      return this.getStringAttribute('content_handling');
    }
    public set contentHandling(value: string | undefined) {
      this._contentHandling = value;
    }
    public resetContentHandling() {
      this._contentHandling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get contentHandlingInput() {
      return this._contentHandling
    }

    // http_method - computed: false, optional: false, required: true
    private _httpMethod?: string; 
    public get httpMethod() {
      return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
      this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
      return this._httpMethod
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // response_parameters - computed: false, optional: true, required: false
    private _responseParameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get responseParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_parameters') as any;
    }
    public set responseParameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._responseParameters = value;
    }
    public resetResponseParameters() {
      this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
      return this._responseParameters
    }

    // response_templates - computed: false, optional: true, required: false
    private _responseTemplates?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get responseTemplates() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_templates') as any;
    }
    public set responseTemplates(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._responseTemplates = value;
    }
    public resetResponseTemplates() {
      this._responseTemplates = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseTemplatesInput() {
      return this._responseTemplates
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // selection_pattern - computed: false, optional: true, required: false
    private _selectionPattern?: string | undefined; 
    public get selectionPattern() {
      return this.getStringAttribute('selection_pattern');
    }
    public set selectionPattern(value: string | undefined) {
      this._selectionPattern = value;
    }
    public resetSelectionPattern() {
      this._selectionPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get selectionPatternInput() {
      return this._selectionPattern
    }

    // status_code - computed: false, optional: false, required: true
    private _statusCode?: string; 
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
      this._statusCode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
      return this._statusCode
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        content_handling: cdktf.stringToTerraform(this._contentHandling),
        http_method: cdktf.stringToTerraform(this._httpMethod),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
        response_templates: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseTemplates),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        selection_pattern: cdktf.stringToTerraform(this._selectionPattern),
        status_code: cdktf.stringToTerraform(this._statusCode),
      };
    }
  }
  export interface ApiGatewayMethodConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#api_key_required ApiGatewayMethod#api_key_required}
    */
    readonly apiKeyRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#authorization ApiGatewayMethod#authorization}
    */
    readonly authorization: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#authorization_scopes ApiGatewayMethod#authorization_scopes}
    */
    readonly authorizationScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#authorizer_id ApiGatewayMethod#authorizer_id}
    */
    readonly authorizerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#http_method ApiGatewayMethod#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#operation_name ApiGatewayMethod#operation_name}
    */
    readonly operationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#request_models ApiGatewayMethod#request_models}
    */
    readonly requestModels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#request_parameters ApiGatewayMethod#request_parameters}
    */
    readonly requestParameters?: { [key: string]: boolean } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#request_validator_id ApiGatewayMethod#request_validator_id}
    */
    readonly requestValidatorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#resource_id ApiGatewayMethod#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html#rest_api_id ApiGatewayMethod#rest_api_id}
    */
    readonly restApiId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method}
  */
  export class ApiGatewayMethod extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_method";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method.html aws_api_gateway_method} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayMethodConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_method',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._apiKeyRequired = config.apiKeyRequired;
      this._authorization = config.authorization;
      this._authorizationScopes = config.authorizationScopes;
      this._authorizerId = config.authorizerId;
      this._httpMethod = config.httpMethod;
      this._operationName = config.operationName;
      this._requestModels = config.requestModels;
      this._requestParameters = config.requestParameters;
      this._requestValidatorId = config.requestValidatorId;
      this._resourceId = config.resourceId;
      this._restApiId = config.restApiId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // api_key_required - computed: false, optional: true, required: false
    private _apiKeyRequired?: boolean | cdktf.IResolvable | undefined; 
    public get apiKeyRequired() {
      return this.getBooleanAttribute('api_key_required') as any;
    }
    public set apiKeyRequired(value: boolean | cdktf.IResolvable | undefined) {
      this._apiKeyRequired = value;
    }
    public resetApiKeyRequired() {
      this._apiKeyRequired = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyRequiredInput() {
      return this._apiKeyRequired
    }

    // authorization - computed: false, optional: false, required: true
    private _authorization?: string; 
    public get authorization() {
      return this.getStringAttribute('authorization');
    }
    public set authorization(value: string) {
      this._authorization = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationInput() {
      return this._authorization
    }

    // authorization_scopes - computed: false, optional: true, required: false
    private _authorizationScopes?: string[] | undefined; 
    public get authorizationScopes() {
      return this.getListAttribute('authorization_scopes');
    }
    public set authorizationScopes(value: string[] | undefined) {
      this._authorizationScopes = value;
    }
    public resetAuthorizationScopes() {
      this._authorizationScopes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationScopesInput() {
      return this._authorizationScopes
    }

    // authorizer_id - computed: false, optional: true, required: false
    private _authorizerId?: string | undefined; 
    public get authorizerId() {
      return this.getStringAttribute('authorizer_id');
    }
    public set authorizerId(value: string | undefined) {
      this._authorizerId = value;
    }
    public resetAuthorizerId() {
      this._authorizerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizerIdInput() {
      return this._authorizerId
    }

    // http_method - computed: false, optional: false, required: true
    private _httpMethod?: string; 
    public get httpMethod() {
      return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
      this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
      return this._httpMethod
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // operation_name - computed: false, optional: true, required: false
    private _operationName?: string | undefined; 
    public get operationName() {
      return this.getStringAttribute('operation_name');
    }
    public set operationName(value: string | undefined) {
      this._operationName = value;
    }
    public resetOperationName() {
      this._operationName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get operationNameInput() {
      return this._operationName
    }

    // request_models - computed: false, optional: true, required: false
    private _requestModels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get requestModels() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('request_models') as any;
    }
    public set requestModels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._requestModels = value;
    }
    public resetRequestModels() {
      this._requestModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestModelsInput() {
      return this._requestModels
    }

    // request_parameters - computed: false, optional: true, required: false
    private _requestParameters?: { [key: string]: boolean } | cdktf.IResolvable | undefined; 
    public get requestParameters() {
      return this.getBooleanAttribute('request_parameters') as any;
    }
    public set requestParameters(value: { [key: string]: boolean } | cdktf.IResolvable | undefined) {
      this._requestParameters = value;
    }
    public resetRequestParameters() {
      this._requestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestParametersInput() {
      return this._requestParameters
    }

    // request_validator_id - computed: false, optional: true, required: false
    private _requestValidatorId?: string | undefined; 
    public get requestValidatorId() {
      return this.getStringAttribute('request_validator_id');
    }
    public set requestValidatorId(value: string | undefined) {
      this._requestValidatorId = value;
    }
    public resetRequestValidatorId() {
      this._requestValidatorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requestValidatorIdInput() {
      return this._requestValidatorId
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
        authorization: cdktf.stringToTerraform(this._authorization),
        authorization_scopes: cdktf.listMapper(cdktf.stringToTerraform)(this._authorizationScopes),
        authorizer_id: cdktf.stringToTerraform(this._authorizerId),
        http_method: cdktf.stringToTerraform(this._httpMethod),
        operation_name: cdktf.stringToTerraform(this._operationName),
        request_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestModels),
        request_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestParameters),
        request_validator_id: cdktf.stringToTerraform(this._requestValidatorId),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
      };
    }
  }
  export interface ApiGatewayMethodResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#http_method ApiGatewayMethodResponse#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#resource_id ApiGatewayMethodResponse#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#response_models ApiGatewayMethodResponse#response_models}
    */
    readonly responseModels?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#response_parameters ApiGatewayMethodResponse#response_parameters}
    */
    readonly responseParameters?: { [key: string]: boolean } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#rest_api_id ApiGatewayMethodResponse#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html#status_code ApiGatewayMethodResponse#status_code}
    */
    readonly statusCode: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html aws_api_gateway_method_response}
  */
  export class ApiGatewayMethodResponse extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_method_response";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_response.html aws_api_gateway_method_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodResponseConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayMethodResponseConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_method_response',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._httpMethod = config.httpMethod;
      this._resourceId = config.resourceId;
      this._responseModels = config.responseModels;
      this._responseParameters = config.responseParameters;
      this._restApiId = config.restApiId;
      this._statusCode = config.statusCode;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // http_method - computed: false, optional: false, required: true
    private _httpMethod?: string; 
    public get httpMethod() {
      return this.getStringAttribute('http_method');
    }
    public set httpMethod(value: string) {
      this._httpMethod = value;
    }
    // Temporarily expose input value. Use with caution.
    public get httpMethodInput() {
      return this._httpMethod
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // resource_id - computed: false, optional: false, required: true
    private _resourceId?: string; 
    public get resourceId() {
      return this.getStringAttribute('resource_id');
    }
    public set resourceId(value: string) {
      this._resourceId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get resourceIdInput() {
      return this._resourceId
    }

    // response_models - computed: false, optional: true, required: false
    private _responseModels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get responseModels() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('response_models') as any;
    }
    public set responseModels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._responseModels = value;
    }
    public resetResponseModels() {
      this._responseModels = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseModelsInput() {
      return this._responseModels
    }

    // response_parameters - computed: false, optional: true, required: false
    private _responseParameters?: { [key: string]: boolean } | cdktf.IResolvable | undefined; 
    public get responseParameters() {
      return this.getBooleanAttribute('response_parameters') as any;
    }
    public set responseParameters(value: { [key: string]: boolean } | cdktf.IResolvable | undefined) {
      this._responseParameters = value;
    }
    public resetResponseParameters() {
      this._responseParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get responseParametersInput() {
      return this._responseParameters
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // status_code - computed: false, optional: false, required: true
    private _statusCode?: string; 
    public get statusCode() {
      return this.getStringAttribute('status_code');
    }
    public set statusCode(value: string) {
      this._statusCode = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statusCodeInput() {
      return this._statusCode
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        http_method: cdktf.stringToTerraform(this._httpMethod),
        resource_id: cdktf.stringToTerraform(this._resourceId),
        response_models: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseModels),
        response_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._responseParameters),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        status_code: cdktf.stringToTerraform(this._statusCode),
      };
    }
  }
  export interface ApiGatewayMethodSettingsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#method_path ApiGatewayMethodSettings#method_path}
    */
    readonly methodPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#rest_api_id ApiGatewayMethodSettings#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#stage_name ApiGatewayMethodSettings#stage_name}
    */
    readonly stageName: string;
    /**
    * settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#settings ApiGatewayMethodSettings#settings}
    */
    readonly settings: ApiGatewayMethodSettingsSettings;
  }
  export interface ApiGatewayMethodSettingsSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_data_encrypted ApiGatewayMethodSettings#cache_data_encrypted}
    */
    readonly cacheDataEncrypted?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#cache_ttl_in_seconds ApiGatewayMethodSettings#cache_ttl_in_seconds}
    */
    readonly cacheTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#caching_enabled ApiGatewayMethodSettings#caching_enabled}
    */
    readonly cachingEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#data_trace_enabled ApiGatewayMethodSettings#data_trace_enabled}
    */
    readonly dataTraceEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#logging_level ApiGatewayMethodSettings#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#metrics_enabled ApiGatewayMethodSettings#metrics_enabled}
    */
    readonly metricsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#require_authorization_for_cache_control ApiGatewayMethodSettings#require_authorization_for_cache_control}
    */
    readonly requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_burst_limit ApiGatewayMethodSettings#throttling_burst_limit}
    */
    readonly throttlingBurstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#throttling_rate_limit ApiGatewayMethodSettings#throttling_rate_limit}
    */
    readonly throttlingRateLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html#unauthorized_cache_control_header_strategy ApiGatewayMethodSettings#unauthorized_cache_control_header_strategy}
    */
    readonly unauthorizedCacheControlHeaderStrategy?: string;
  }

  function apiGatewayMethodSettingsSettingsToTerraform(struct?: ApiGatewayMethodSettingsSettingsOutputReference | ApiGatewayMethodSettingsSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      cache_data_encrypted: cdktf.booleanToTerraform(struct!.cacheDataEncrypted),
      cache_ttl_in_seconds: cdktf.numberToTerraform(struct!.cacheTtlInSeconds),
      caching_enabled: cdktf.booleanToTerraform(struct!.cachingEnabled),
      data_trace_enabled: cdktf.booleanToTerraform(struct!.dataTraceEnabled),
      logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
      metrics_enabled: cdktf.booleanToTerraform(struct!.metricsEnabled),
      require_authorization_for_cache_control: cdktf.booleanToTerraform(struct!.requireAuthorizationForCacheControl),
      throttling_burst_limit: cdktf.numberToTerraform(struct!.throttlingBurstLimit),
      throttling_rate_limit: cdktf.numberToTerraform(struct!.throttlingRateLimit),
      unauthorized_cache_control_header_strategy: cdktf.stringToTerraform(struct!.unauthorizedCacheControlHeaderStrategy),
    }
  }

  export class ApiGatewayMethodSettingsSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // cache_data_encrypted - computed: true, optional: true, required: false
    private _cacheDataEncrypted?: boolean | cdktf.IResolvable | undefined; 
    public get cacheDataEncrypted() {
      return this.getBooleanAttribute('cache_data_encrypted') as any;
    }
    public set cacheDataEncrypted(value: boolean | cdktf.IResolvable | undefined) {
      this._cacheDataEncrypted = value;
    }
    public resetCacheDataEncrypted() {
      this._cacheDataEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheDataEncryptedInput() {
      return this._cacheDataEncrypted
    }

    // cache_ttl_in_seconds - computed: true, optional: true, required: false
    private _cacheTtlInSeconds?: number | undefined; 
    public get cacheTtlInSeconds() {
      return this.getNumberAttribute('cache_ttl_in_seconds');
    }
    public set cacheTtlInSeconds(value: number | undefined) {
      this._cacheTtlInSeconds = value;
    }
    public resetCacheTtlInSeconds() {
      this._cacheTtlInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheTtlInSecondsInput() {
      return this._cacheTtlInSeconds
    }

    // caching_enabled - computed: true, optional: true, required: false
    private _cachingEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get cachingEnabled() {
      return this.getBooleanAttribute('caching_enabled') as any;
    }
    public set cachingEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._cachingEnabled = value;
    }
    public resetCachingEnabled() {
      this._cachingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cachingEnabledInput() {
      return this._cachingEnabled
    }

    // data_trace_enabled - computed: true, optional: true, required: false
    private _dataTraceEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get dataTraceEnabled() {
      return this.getBooleanAttribute('data_trace_enabled') as any;
    }
    public set dataTraceEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._dataTraceEnabled = value;
    }
    public resetDataTraceEnabled() {
      this._dataTraceEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dataTraceEnabledInput() {
      return this._dataTraceEnabled
    }

    // logging_level - computed: true, optional: true, required: false
    private _loggingLevel?: string | undefined; 
    public get loggingLevel() {
      return this.getStringAttribute('logging_level');
    }
    public set loggingLevel(value: string | undefined) {
      this._loggingLevel = value;
    }
    public resetLoggingLevel() {
      this._loggingLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get loggingLevelInput() {
      return this._loggingLevel
    }

    // metrics_enabled - computed: true, optional: true, required: false
    private _metricsEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get metricsEnabled() {
      return this.getBooleanAttribute('metrics_enabled') as any;
    }
    public set metricsEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._metricsEnabled = value;
    }
    public resetMetricsEnabled() {
      this._metricsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get metricsEnabledInput() {
      return this._metricsEnabled
    }

    // require_authorization_for_cache_control - computed: true, optional: true, required: false
    private _requireAuthorizationForCacheControl?: boolean | cdktf.IResolvable | undefined; 
    public get requireAuthorizationForCacheControl() {
      return this.getBooleanAttribute('require_authorization_for_cache_control') as any;
    }
    public set requireAuthorizationForCacheControl(value: boolean | cdktf.IResolvable | undefined) {
      this._requireAuthorizationForCacheControl = value;
    }
    public resetRequireAuthorizationForCacheControl() {
      this._requireAuthorizationForCacheControl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get requireAuthorizationForCacheControlInput() {
      return this._requireAuthorizationForCacheControl
    }

    // throttling_burst_limit - computed: false, optional: true, required: false
    private _throttlingBurstLimit?: number | undefined; 
    public get throttlingBurstLimit() {
      return this.getNumberAttribute('throttling_burst_limit');
    }
    public set throttlingBurstLimit(value: number | undefined) {
      this._throttlingBurstLimit = value;
    }
    public resetThrottlingBurstLimit() {
      this._throttlingBurstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingBurstLimitInput() {
      return this._throttlingBurstLimit
    }

    // throttling_rate_limit - computed: false, optional: true, required: false
    private _throttlingRateLimit?: number | undefined; 
    public get throttlingRateLimit() {
      return this.getNumberAttribute('throttling_rate_limit');
    }
    public set throttlingRateLimit(value: number | undefined) {
      this._throttlingRateLimit = value;
    }
    public resetThrottlingRateLimit() {
      this._throttlingRateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttlingRateLimitInput() {
      return this._throttlingRateLimit
    }

    // unauthorized_cache_control_header_strategy - computed: true, optional: true, required: false
    private _unauthorizedCacheControlHeaderStrategy?: string | undefined; 
    public get unauthorizedCacheControlHeaderStrategy() {
      return this.getStringAttribute('unauthorized_cache_control_header_strategy');
    }
    public set unauthorizedCacheControlHeaderStrategy(value: string | undefined) {
      this._unauthorizedCacheControlHeaderStrategy = value;
    }
    public resetUnauthorizedCacheControlHeaderStrategy() {
      this._unauthorizedCacheControlHeaderStrategy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get unauthorizedCacheControlHeaderStrategyInput() {
      return this._unauthorizedCacheControlHeaderStrategy
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings}
  */
  export class ApiGatewayMethodSettings extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_method_settings";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_method_settings.html aws_api_gateway_method_settings} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodSettingsConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayMethodSettingsConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_method_settings',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._methodPath = config.methodPath;
      this._restApiId = config.restApiId;
      this._stageName = config.stageName;
      this._settings = config.settings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // method_path - computed: false, optional: false, required: true
    private _methodPath?: string; 
    public get methodPath() {
      return this.getStringAttribute('method_path');
    }
    public set methodPath(value: string) {
      this._methodPath = value;
    }
    // Temporarily expose input value. Use with caution.
    public get methodPathInput() {
      return this._methodPath
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // stage_name - computed: false, optional: false, required: true
    private _stageName?: string; 
    public get stageName() {
      return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string) {
      this._stageName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
      return this._stageName
    }

    // settings - computed: false, optional: false, required: true
    private _settings?: ApiGatewayMethodSettingsSettings; 
    private __settingsOutput = new ApiGatewayMethodSettingsSettingsOutputReference(this as any, "settings", true);
    public get settings() {
      return this.__settingsOutput;
    }
    public putSettings(value: ApiGatewayMethodSettingsSettings) {
      this._settings = value;
    }
    // Temporarily expose input value. Use with caution.
    public get settingsInput() {
      return this._settings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        method_path: cdktf.stringToTerraform(this._methodPath),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        stage_name: cdktf.stringToTerraform(this._stageName),
        settings: apiGatewayMethodSettingsSettingsToTerraform(this._settings),
      };
    }
  }
  export interface ApiGatewayModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#content_type ApiGatewayModel#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#description ApiGatewayModel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#name ApiGatewayModel#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#rest_api_id ApiGatewayModel#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html#schema ApiGatewayModel#schema}
    */
    readonly schema?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html aws_api_gateway_model}
  */
  export class ApiGatewayModel extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_model";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_model.html aws_api_gateway_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayModelConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayModelConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_model',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._contentType = config.contentType;
      this._description = config.description;
      this._name = config.name;
      this._restApiId = config.restApiId;
      this._schema = config.schema;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // content_type - computed: false, optional: false, required: true
    private _contentType?: string; 
    public get contentType() {
      return this.getStringAttribute('content_type');
    }
    public set contentType(value: string) {
      this._contentType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get contentTypeInput() {
      return this._contentType
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // schema - computed: false, optional: true, required: false
    private _schema?: string | undefined; 
    public get schema() {
      return this.getStringAttribute('schema');
    }
    public set schema(value: string | undefined) {
      this._schema = value;
    }
    public resetSchema() {
      this._schema = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get schemaInput() {
      return this._schema
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        content_type: cdktf.stringToTerraform(this._contentType),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        schema: cdktf.stringToTerraform(this._schema),
      };
    }
  }
  export interface ApiGatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#name ApiGatewayRequestValidator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#rest_api_id ApiGatewayRequestValidator#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_body ApiGatewayRequestValidator#validate_request_body}
    */
    readonly validateRequestBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}
    */
    readonly validateRequestParameters?: boolean | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator}
  */
  export class ApiGatewayRequestValidator extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_request_validator";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_request_validator.html aws_api_gateway_request_validator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRequestValidatorConfig
    */
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
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // validate_request_body - computed: false, optional: true, required: false
    private _validateRequestBody?: boolean | cdktf.IResolvable | undefined; 
    public get validateRequestBody() {
      return this.getBooleanAttribute('validate_request_body') as any;
    }
    public set validateRequestBody(value: boolean | cdktf.IResolvable | undefined) {
      this._validateRequestBody = value;
    }
    public resetValidateRequestBody() {
      this._validateRequestBody = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateRequestBodyInput() {
      return this._validateRequestBody
    }

    // validate_request_parameters - computed: false, optional: true, required: false
    private _validateRequestParameters?: boolean | cdktf.IResolvable | undefined; 
    public get validateRequestParameters() {
      return this.getBooleanAttribute('validate_request_parameters') as any;
    }
    public set validateRequestParameters(value: boolean | cdktf.IResolvable | undefined) {
      this._validateRequestParameters = value;
    }
    public resetValidateRequestParameters() {
      this._validateRequestParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get validateRequestParametersInput() {
      return this._validateRequestParameters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        validate_request_body: cdktf.booleanToTerraform(this._validateRequestBody),
        validate_request_parameters: cdktf.booleanToTerraform(this._validateRequestParameters),
      };
    }
  }
  export interface ApiGatewayResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html#parent_id ApiGatewayResource#parent_id}
    */
    readonly parentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html#path_part ApiGatewayResource#path_part}
    */
    readonly pathPart: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html#rest_api_id ApiGatewayResource#rest_api_id}
    */
    readonly restApiId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html aws_api_gateway_resource}
  */
  export class ApiGatewayResource extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_resource";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_resource.html aws_api_gateway_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayResourceConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayResourceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_resource',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._parentId = config.parentId;
      this._pathPart = config.pathPart;
      this._restApiId = config.restApiId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // parent_id - computed: false, optional: false, required: true
    private _parentId?: string; 
    public get parentId() {
      return this.getStringAttribute('parent_id');
    }
    public set parentId(value: string) {
      this._parentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get parentIdInput() {
      return this._parentId
    }

    // path - computed: true, optional: false, required: false
    public get path() {
      return this.getStringAttribute('path');
    }

    // path_part - computed: false, optional: false, required: true
    private _pathPart?: string; 
    public get pathPart() {
      return this.getStringAttribute('path_part');
    }
    public set pathPart(value: string) {
      this._pathPart = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pathPartInput() {
      return this._pathPart
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        parent_id: cdktf.stringToTerraform(this._parentId),
        path_part: cdktf.stringToTerraform(this._pathPart),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
      };
    }
  }
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
    readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration;
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

  function apiGatewayRestApiEndpointConfigurationToTerraform(struct?: ApiGatewayRestApiEndpointConfigurationOutputReference | ApiGatewayRestApiEndpointConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      types: cdktf.listMapper(cdktf.stringToTerraform)(struct!.types),
      vpc_endpoint_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct!.vpcEndpointIds),
    }
  }

  export class ApiGatewayRestApiEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
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
      return this._types
    }

    // vpc_endpoint_ids - computed: true, optional: true, required: false
    private _vpcEndpointIds?: string[] | undefined; 
    public get vpcEndpointIds() {
      return this.getListAttribute('vpc_endpoint_ids');
    }
    public set vpcEndpointIds(value: string[] | undefined) {
      this._vpcEndpointIds = value;
    }
    public resetVpcEndpointIds() {
      this._vpcEndpointIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get vpcEndpointIdsInput() {
      return this._vpcEndpointIds
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
    private _apiKeySource?: string | undefined; 
    public get apiKeySource() {
      return this.getStringAttribute('api_key_source');
    }
    public set apiKeySource(value: string | undefined) {
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
    private _binaryMediaTypes?: string[] | undefined; 
    public get binaryMediaTypes() {
      return this.getListAttribute('binary_media_types');
    }
    public set binaryMediaTypes(value: string[] | undefined) {
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
    private _body?: string | undefined; 
    public get body() {
      return this.getStringAttribute('body');
    }
    public set body(value: string | undefined) {
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
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
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
    private _disableExecuteApiEndpoint?: boolean | cdktf.IResolvable | undefined; 
    public get disableExecuteApiEndpoint() {
      return this.getBooleanAttribute('disable_execute_api_endpoint') as any;
    }
    public set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable | undefined) {
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
    private _minimumCompressionSize?: number | undefined; 
    public get minimumCompressionSize() {
      return this.getNumberAttribute('minimum_compression_size');
    }
    public set minimumCompressionSize(value: number | undefined) {
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
    private _name?: string; 
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
    private _parameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get parameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('parameters') as any;
    }
    public set parameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _policy?: string | undefined; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string | undefined) {
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration | undefined; 
    private __endpointConfigurationOutput = new ApiGatewayRestApiEndpointConfigurationOutputReference(this as any, "endpoint_configuration", true);
    public get endpointConfiguration() {
      return this.__endpointConfigurationOutput;
    }
    public putEndpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration | undefined) {
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
        endpoint_configuration: apiGatewayRestApiEndpointConfigurationToTerraform(this._endpointConfiguration),
      };
    }
  }
  export interface ApiGatewayRestApiPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html#policy ApiGatewayRestApiPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html#rest_api_id ApiGatewayRestApiPolicy#rest_api_id}
    */
    readonly restApiId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html aws_api_gateway_rest_api_policy}
  */
  export class ApiGatewayRestApiPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_rest_api_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_rest_api_policy.html aws_api_gateway_rest_api_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRestApiPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayRestApiPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_rest_api_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._policy = config.policy;
      this._restApiId = config.restApiId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // policy - computed: false, optional: false, required: true
    private _policy?: string; 
    public get policy() {
      return this.getStringAttribute('policy');
    }
    public set policy(value: string) {
      this._policy = value;
    }
    // Temporarily expose input value. Use with caution.
    public get policyInput() {
      return this._policy
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        policy: cdktf.stringToTerraform(this._policy),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
      };
    }
  }
  export interface ApiGatewayStageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}
    */
    readonly cacheClusterEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#cache_cluster_size ApiGatewayStage#cache_cluster_size}
    */
    readonly cacheClusterSize?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#client_certificate_id ApiGatewayStage#client_certificate_id}
    */
    readonly clientCertificateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#deployment_id ApiGatewayStage#deployment_id}
    */
    readonly deploymentId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#description ApiGatewayStage#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#documentation_version ApiGatewayStage#documentation_version}
    */
    readonly documentationVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#rest_api_id ApiGatewayStage#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#stage_name ApiGatewayStage#stage_name}
    */
    readonly stageName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#tags ApiGatewayStage#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#tags_all ApiGatewayStage#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#variables ApiGatewayStage#variables}
    */
    readonly variables?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}
    */
    readonly xrayTracingEnabled?: boolean | cdktf.IResolvable;
    /**
    * access_log_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#access_log_settings ApiGatewayStage#access_log_settings}
    */
    readonly accessLogSettings?: ApiGatewayStageAccessLogSettings;
  }
  export interface ApiGatewayStageAccessLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#destination_arn ApiGatewayStage#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html#format ApiGatewayStage#format}
    */
    readonly format: string;
  }

  function apiGatewayStageAccessLogSettingsToTerraform(struct?: ApiGatewayStageAccessLogSettingsOutputReference | ApiGatewayStageAccessLogSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      destination_arn: cdktf.stringToTerraform(struct!.destinationArn),
      format: cdktf.stringToTerraform(struct!.format),
    }
  }

  export class ApiGatewayStageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // destination_arn - computed: false, optional: false, required: true
    private _destinationArn?: string; 
    public get destinationArn() {
      return this.getStringAttribute('destination_arn');
    }
    public set destinationArn(value: string) {
      this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get destinationArnInput() {
      return this._destinationArn
    }

    // format - computed: false, optional: false, required: true
    private _format?: string; 
    public get format() {
      return this.getStringAttribute('format');
    }
    public set format(value: string) {
      this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    public get formatInput() {
      return this._format
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage}
  */
  export class ApiGatewayStage extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_stage";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayStageConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayStageConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_stage',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._cacheClusterEnabled = config.cacheClusterEnabled;
      this._cacheClusterSize = config.cacheClusterSize;
      this._clientCertificateId = config.clientCertificateId;
      this._deploymentId = config.deploymentId;
      this._description = config.description;
      this._documentationVersion = config.documentationVersion;
      this._restApiId = config.restApiId;
      this._stageName = config.stageName;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._variables = config.variables;
      this._xrayTracingEnabled = config.xrayTracingEnabled;
      this._accessLogSettings = config.accessLogSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // cache_cluster_enabled - computed: false, optional: true, required: false
    private _cacheClusterEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get cacheClusterEnabled() {
      return this.getBooleanAttribute('cache_cluster_enabled') as any;
    }
    public set cacheClusterEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._cacheClusterEnabled = value;
    }
    public resetCacheClusterEnabled() {
      this._cacheClusterEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheClusterEnabledInput() {
      return this._cacheClusterEnabled
    }

    // cache_cluster_size - computed: false, optional: true, required: false
    private _cacheClusterSize?: string | undefined; 
    public get cacheClusterSize() {
      return this.getStringAttribute('cache_cluster_size');
    }
    public set cacheClusterSize(value: string | undefined) {
      this._cacheClusterSize = value;
    }
    public resetCacheClusterSize() {
      this._cacheClusterSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get cacheClusterSizeInput() {
      return this._cacheClusterSize
    }

    // client_certificate_id - computed: false, optional: true, required: false
    private _clientCertificateId?: string | undefined; 
    public get clientCertificateId() {
      return this.getStringAttribute('client_certificate_id');
    }
    public set clientCertificateId(value: string | undefined) {
      this._clientCertificateId = value;
    }
    public resetClientCertificateId() {
      this._clientCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientCertificateIdInput() {
      return this._clientCertificateId
    }

    // deployment_id - computed: false, optional: false, required: true
    private _deploymentId?: string; 
    public get deploymentId() {
      return this.getStringAttribute('deployment_id');
    }
    public set deploymentId(value: string) {
      this._deploymentId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get deploymentIdInput() {
      return this._deploymentId
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // documentation_version - computed: false, optional: true, required: false
    private _documentationVersion?: string | undefined; 
    public get documentationVersion() {
      return this.getStringAttribute('documentation_version');
    }
    public set documentationVersion(value: string | undefined) {
      this._documentationVersion = value;
    }
    public resetDocumentationVersion() {
      this._documentationVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get documentationVersionInput() {
      return this._documentationVersion
    }

    // execution_arn - computed: true, optional: false, required: false
    public get executionArn() {
      return this.getStringAttribute('execution_arn');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // invoke_url - computed: true, optional: false, required: false
    public get invokeUrl() {
      return this.getStringAttribute('invoke_url');
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // stage_name - computed: false, optional: false, required: true
    private _stageName?: string; 
    public get stageName() {
      return this.getStringAttribute('stage_name');
    }
    public set stageName(value: string) {
      this._stageName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get stageNameInput() {
      return this._stageName
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // variables - computed: false, optional: true, required: false
    private _variables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get variables() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('variables') as any;
    }
    public set variables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._variables = value;
    }
    public resetVariables() {
      this._variables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get variablesInput() {
      return this._variables
    }

    // xray_tracing_enabled - computed: false, optional: true, required: false
    private _xrayTracingEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get xrayTracingEnabled() {
      return this.getBooleanAttribute('xray_tracing_enabled') as any;
    }
    public set xrayTracingEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._xrayTracingEnabled = value;
    }
    public resetXrayTracingEnabled() {
      this._xrayTracingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get xrayTracingEnabledInput() {
      return this._xrayTracingEnabled
    }

    // access_log_settings - computed: false, optional: true, required: false
    private _accessLogSettings?: ApiGatewayStageAccessLogSettings | undefined; 
    private __accessLogSettingsOutput = new ApiGatewayStageAccessLogSettingsOutputReference(this as any, "access_log_settings", true);
    public get accessLogSettings() {
      return this.__accessLogSettingsOutput;
    }
    public putAccessLogSettings(value: ApiGatewayStageAccessLogSettings | undefined) {
      this._accessLogSettings = value;
    }
    public resetAccessLogSettings() {
      this._accessLogSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get accessLogSettingsInput() {
      return this._accessLogSettings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        cache_cluster_enabled: cdktf.booleanToTerraform(this._cacheClusterEnabled),
        cache_cluster_size: cdktf.stringToTerraform(this._cacheClusterSize),
        client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
        deployment_id: cdktf.stringToTerraform(this._deploymentId),
        description: cdktf.stringToTerraform(this._description),
        documentation_version: cdktf.stringToTerraform(this._documentationVersion),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
        stage_name: cdktf.stringToTerraform(this._stageName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
        xray_tracing_enabled: cdktf.booleanToTerraform(this._xrayTracingEnabled),
        access_log_settings: apiGatewayStageAccessLogSettingsToTerraform(this._accessLogSettings),
      };
    }
  }
  export interface ApiGatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#description ApiGatewayUsagePlan#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#name ApiGatewayUsagePlan#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#product_code ApiGatewayUsagePlan#product_code}
    */
    readonly productCode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#tags ApiGatewayUsagePlan#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#tags_all ApiGatewayUsagePlan#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * api_stages block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#api_stages ApiGatewayUsagePlan#api_stages}
    */
    readonly apiStages?: ApiGatewayUsagePlanApiStages[];
    /**
    * quota_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#quota_settings ApiGatewayUsagePlan#quota_settings}
    */
    readonly quotaSettings?: ApiGatewayUsagePlanQuotaSettings;
    /**
    * throttle_settings block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#throttle_settings ApiGatewayUsagePlan#throttle_settings}
    */
    readonly throttleSettings?: ApiGatewayUsagePlanThrottleSettings;
  }
  export interface ApiGatewayUsagePlanApiStages {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#api_id ApiGatewayUsagePlan#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#stage ApiGatewayUsagePlan#stage}
    */
    readonly stage: string;
  }

  function apiGatewayUsagePlanApiStagesToTerraform(struct?: ApiGatewayUsagePlanApiStages): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      api_id: cdktf.stringToTerraform(struct!.apiId),
      stage: cdktf.stringToTerraform(struct!.stage),
    }
  }

  export interface ApiGatewayUsagePlanQuotaSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#limit ApiGatewayUsagePlan#limit}
    */
    readonly limit: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#offset ApiGatewayUsagePlan#offset}
    */
    readonly offset?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#period ApiGatewayUsagePlan#period}
    */
    readonly period: string;
  }

  function apiGatewayUsagePlanQuotaSettingsToTerraform(struct?: ApiGatewayUsagePlanQuotaSettingsOutputReference | ApiGatewayUsagePlanQuotaSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      limit: cdktf.numberToTerraform(struct!.limit),
      offset: cdktf.numberToTerraform(struct!.offset),
      period: cdktf.stringToTerraform(struct!.period),
    }
  }

  export class ApiGatewayUsagePlanQuotaSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // limit - computed: false, optional: false, required: true
    private _limit?: number; 
    public get limit() {
      return this.getNumberAttribute('limit');
    }
    public set limit(value: number) {
      this._limit = value;
    }
    // Temporarily expose input value. Use with caution.
    public get limitInput() {
      return this._limit
    }

    // offset - computed: false, optional: true, required: false
    private _offset?: number | undefined; 
    public get offset() {
      return this.getNumberAttribute('offset');
    }
    public set offset(value: number | undefined) {
      this._offset = value;
    }
    public resetOffset() {
      this._offset = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get offsetInput() {
      return this._offset
    }

    // period - computed: false, optional: false, required: true
    private _period?: string; 
    public get period() {
      return this.getStringAttribute('period');
    }
    public set period(value: string) {
      this._period = value;
    }
    // Temporarily expose input value. Use with caution.
    public get periodInput() {
      return this._period
    }
  }
  export interface ApiGatewayUsagePlanThrottleSettings {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#burst_limit ApiGatewayUsagePlan#burst_limit}
    */
    readonly burstLimit?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#rate_limit ApiGatewayUsagePlan#rate_limit}
    */
    readonly rateLimit?: number;
  }

  function apiGatewayUsagePlanThrottleSettingsToTerraform(struct?: ApiGatewayUsagePlanThrottleSettingsOutputReference | ApiGatewayUsagePlanThrottleSettings): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
      rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    }
  }

  export class ApiGatewayUsagePlanThrottleSettingsOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // burst_limit - computed: false, optional: true, required: false
    private _burstLimit?: number | undefined; 
    public get burstLimit() {
      return this.getNumberAttribute('burst_limit');
    }
    public set burstLimit(value: number | undefined) {
      this._burstLimit = value;
    }
    public resetBurstLimit() {
      this._burstLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get burstLimitInput() {
      return this._burstLimit
    }

    // rate_limit - computed: false, optional: true, required: false
    private _rateLimit?: number | undefined; 
    public get rateLimit() {
      return this.getNumberAttribute('rate_limit');
    }
    public set rateLimit(value: number | undefined) {
      this._rateLimit = value;
    }
    public resetRateLimit() {
      this._rateLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get rateLimitInput() {
      return this._rateLimit
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan}
  */
  export class ApiGatewayUsagePlan extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_usage_plan";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayUsagePlanConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_usage_plan',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._productCode = config.productCode;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._apiStages = config.apiStages;
      this._quotaSettings = config.quotaSettings;
      this._throttleSettings = config.throttleSettings;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // product_code - computed: false, optional: true, required: false
    private _productCode?: string | undefined; 
    public get productCode() {
      return this.getStringAttribute('product_code');
    }
    public set productCode(value: string | undefined) {
      this._productCode = value;
    }
    public resetProductCode() {
      this._productCode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get productCodeInput() {
      return this._productCode
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // api_stages - computed: false, optional: true, required: false
    private _apiStages?: ApiGatewayUsagePlanApiStages[] | undefined; 
    public get apiStages() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('api_stages') as any;
    }
    public set apiStages(value: ApiGatewayUsagePlanApiStages[] | undefined) {
      this._apiStages = value;
    }
    public resetApiStages() {
      this._apiStages = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiStagesInput() {
      return this._apiStages
    }

    // quota_settings - computed: false, optional: true, required: false
    private _quotaSettings?: ApiGatewayUsagePlanQuotaSettings | undefined; 
    private __quotaSettingsOutput = new ApiGatewayUsagePlanQuotaSettingsOutputReference(this as any, "quota_settings", true);
    public get quotaSettings() {
      return this.__quotaSettingsOutput;
    }
    public putQuotaSettings(value: ApiGatewayUsagePlanQuotaSettings | undefined) {
      this._quotaSettings = value;
    }
    public resetQuotaSettings() {
      this._quotaSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get quotaSettingsInput() {
      return this._quotaSettings
    }

    // throttle_settings - computed: false, optional: true, required: false
    private _throttleSettings?: ApiGatewayUsagePlanThrottleSettings | undefined; 
    private __throttleSettingsOutput = new ApiGatewayUsagePlanThrottleSettingsOutputReference(this as any, "throttle_settings", true);
    public get throttleSettings() {
      return this.__throttleSettingsOutput;
    }
    public putThrottleSettings(value: ApiGatewayUsagePlanThrottleSettings | undefined) {
      this._throttleSettings = value;
    }
    public resetThrottleSettings() {
      this._throttleSettings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get throttleSettingsInput() {
      return this._throttleSettings
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        product_code: cdktf.stringToTerraform(this._productCode),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        api_stages: cdktf.listMapper(apiGatewayUsagePlanApiStagesToTerraform)(this._apiStages),
        quota_settings: apiGatewayUsagePlanQuotaSettingsToTerraform(this._quotaSettings),
        throttle_settings: apiGatewayUsagePlanThrottleSettingsToTerraform(this._throttleSettings),
      };
    }
  }
  export interface ApiGatewayUsagePlanKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#key_id ApiGatewayUsagePlanKey#key_id}
    */
    readonly keyId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#key_type ApiGatewayUsagePlanKey#key_type}
    */
    readonly keyType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html#usage_plan_id ApiGatewayUsagePlanKey#usage_plan_id}
    */
    readonly usagePlanId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key}
  */
  export class ApiGatewayUsagePlanKey extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_usage_plan_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan_key.html aws_api_gateway_usage_plan_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayUsagePlanKeyConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayUsagePlanKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_usage_plan_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._keyId = config.keyId;
      this._keyType = config.keyType;
      this._usagePlanId = config.usagePlanId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // key_id - computed: false, optional: false, required: true
    private _keyId?: string; 
    public get keyId() {
      return this.getStringAttribute('key_id');
    }
    public set keyId(value: string) {
      this._keyId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyIdInput() {
      return this._keyId
    }

    // key_type - computed: false, optional: false, required: true
    private _keyType?: string; 
    public get keyType() {
      return this.getStringAttribute('key_type');
    }
    public set keyType(value: string) {
      this._keyType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyTypeInput() {
      return this._keyType
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // usage_plan_id - computed: false, optional: false, required: true
    private _usagePlanId?: string; 
    public get usagePlanId() {
      return this.getStringAttribute('usage_plan_id');
    }
    public set usagePlanId(value: string) {
      this._usagePlanId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usagePlanIdInput() {
      return this._usagePlanId
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        key_id: cdktf.stringToTerraform(this._keyId),
        key_type: cdktf.stringToTerraform(this._keyType),
        usage_plan_id: cdktf.stringToTerraform(this._usagePlanId),
      };
    }
  }
  export interface ApiGatewayVpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#description ApiGatewayVpcLink#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#name ApiGatewayVpcLink#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#tags ApiGatewayVpcLink#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#tags_all ApiGatewayVpcLink#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html#target_arns ApiGatewayVpcLink#target_arns}
    */
    readonly targetArns: string[];
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html aws_api_gateway_vpc_link}
  */
  export class ApiGatewayVpcLink extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_vpc_link";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_vpc_link.html aws_api_gateway_vpc_link} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayVpcLinkConfig
    */
    public constructor(scope: Construct, id: string, config: ApiGatewayVpcLinkConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_vpc_link',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._name = config.name;
      this._tags = config.tags;
      this._tagsAll = config.tagsAll;
      this._targetArns = config.targetArns;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // description - computed: false, optional: true, required: false
    private _description?: string | undefined; 
    public get description() {
      return this.getStringAttribute('description');
    }
    public set description(value: string | undefined) {
      this._description = value;
    }
    public resetDescription() {
      this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get descriptionInput() {
      return this._description
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
    private _tagsAll?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tagsAll() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags_all') as any;
    }
    public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tagsAll = value;
    }
    public resetTagsAll() {
      this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsAllInput() {
      return this._tagsAll
    }

    // target_arns - computed: false, optional: false, required: true
    private _targetArns?: string[]; 
    public get targetArns() {
      return this.getListAttribute('target_arns');
    }
    public set targetArns(value: string[]) {
      this._targetArns = value;
    }
    // Temporarily expose input value. Use with caution.
    public get targetArnsInput() {
      return this._targetArns
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        target_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._targetArns),
      };
    }
  }
  export interface DataAwsApiGatewayApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html#id DataAwsApiGatewayApiKey#id}
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html#tags DataAwsApiGatewayApiKey#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html aws_api_gateway_api_key}
  */
  export class DataAwsApiGatewayApiKey extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_api_key";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_api_key.html aws_api_gateway_api_key} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayApiKeyConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsApiGatewayApiKeyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_api_key',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._id = config.id;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // created_date - computed: true, optional: false, required: false
    public get createdDate() {
      return this.getStringAttribute('created_date');
    }

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // enabled - computed: true, optional: false, required: false
    public get enabled() {
      return this.getBooleanAttribute('enabled') as any;
    }

    // id - computed: false, optional: false, required: true
    private _id?: string; 
    public get id() {
      return this.getStringAttribute('id');
    }
    public set id(value: string) {
      this._id = value;
    }
    // Temporarily expose input value. Use with caution.
    public get idInput() {
      return this._id
    }

    // last_updated_date - computed: true, optional: false, required: false
    public get lastUpdatedDate() {
      return this.getStringAttribute('last_updated_date');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // value - computed: true, optional: false, required: false
    public get value() {
      return this.getStringAttribute('value');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        id: cdktf.stringToTerraform(this._id),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html#domain_name DataAwsApiGatewayDomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html#tags DataAwsApiGatewayDomainName#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }
  export class DataAwsApiGatewayDomainNameEndpointConfiguration extends cdktf.ComplexComputedList {

    // types - computed: true, optional: false, required: false
    public get types() {
      return this.getListAttribute('types');
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html aws_api_gateway_domain_name}
  */
  export class DataAwsApiGatewayDomainName extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_domain_name";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_domain_name.html aws_api_gateway_domain_name} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayDomainNameConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsApiGatewayDomainNameConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_domain_name',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._domainName = config.domainName;
      this._tags = config.tags;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // certificate_arn - computed: true, optional: false, required: false
    public get certificateArn() {
      return this.getStringAttribute('certificate_arn');
    }

    // certificate_name - computed: true, optional: false, required: false
    public get certificateName() {
      return this.getStringAttribute('certificate_name');
    }

    // certificate_upload_date - computed: true, optional: false, required: false
    public get certificateUploadDate() {
      return this.getStringAttribute('certificate_upload_date');
    }

    // cloudfront_domain_name - computed: true, optional: false, required: false
    public get cloudfrontDomainName() {
      return this.getStringAttribute('cloudfront_domain_name');
    }

    // cloudfront_zone_id - computed: true, optional: false, required: false
    public get cloudfrontZoneId() {
      return this.getStringAttribute('cloudfront_zone_id');
    }

    // domain_name - computed: false, optional: false, required: true
    private _domainName?: string; 
    public get domainName() {
      return this.getStringAttribute('domain_name');
    }
    public set domainName(value: string) {
      this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get domainNameInput() {
      return this._domainName
    }

    // endpoint_configuration - computed: true, optional: false, required: false
    public endpointConfiguration(index: string) {
      return new DataAwsApiGatewayDomainNameEndpointConfiguration(this, 'endpoint_configuration', index);
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // regional_certificate_arn - computed: true, optional: false, required: false
    public get regionalCertificateArn() {
      return this.getStringAttribute('regional_certificate_arn');
    }

    // regional_certificate_name - computed: true, optional: false, required: false
    public get regionalCertificateName() {
      return this.getStringAttribute('regional_certificate_name');
    }

    // regional_domain_name - computed: true, optional: false, required: false
    public get regionalDomainName() {
      return this.getStringAttribute('regional_domain_name');
    }

    // regional_zone_id - computed: true, optional: false, required: false
    public get regionalZoneId() {
      return this.getStringAttribute('regional_zone_id');
    }

    // security_policy - computed: true, optional: false, required: false
    public get securityPolicy() {
      return this.getStringAttribute('security_policy');
    }

    // tags - computed: false, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
        domain_name: cdktf.stringToTerraform(this._domainName),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      };
    }
  }
  export interface DataAwsApiGatewayResourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html#path DataAwsApiGatewayResource#path}
    */
    readonly path: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html#rest_api_id DataAwsApiGatewayResource#rest_api_id}
    */
    readonly restApiId: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html aws_api_gateway_resource}
  */
  export class DataAwsApiGatewayResource extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_resource";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_resource.html aws_api_gateway_resource} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayResourceConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsApiGatewayResourceConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_resource',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._path = config.path;
      this._restApiId = config.restApiId;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // parent_id - computed: true, optional: false, required: false
    public get parentId() {
      return this.getStringAttribute('parent_id');
    }

    // path - computed: false, optional: false, required: true
    private _path?: string; 
    public get path() {
      return this.getStringAttribute('path');
    }
    public set path(value: string) {
      this._path = value;
    }
    // Temporarily expose input value. Use with caution.
    public get pathInput() {
      return this._path
    }

    // path_part - computed: true, optional: false, required: false
    public get pathPart() {
      return this.getStringAttribute('path_part');
    }

    // rest_api_id - computed: false, optional: false, required: true
    private _restApiId?: string; 
    public get restApiId() {
      return this.getStringAttribute('rest_api_id');
    }
    public set restApiId(value: string) {
      this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get restApiIdInput() {
      return this._restApiId
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        path: cdktf.stringToTerraform(this._path),
        rest_api_id: cdktf.stringToTerraform(this._restApiId),
      };
    }
  }
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
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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
  export interface DataAwsApiGatewayVpcLinkConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html#name DataAwsApiGatewayVpcLink#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html#tags DataAwsApiGatewayVpcLink#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html aws_api_gateway_vpc_link}
  */
  export class DataAwsApiGatewayVpcLink extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_api_gateway_vpc_link";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/api_gateway_vpc_link.html aws_api_gateway_vpc_link} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsApiGatewayVpcLinkConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsApiGatewayVpcLinkConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_api_gateway_vpc_link',
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

    // description - computed: true, optional: false, required: false
    public get description() {
      return this.getStringAttribute('description');
    }

    // id - computed: true, optional: false, required: false
    public get id() {
      return this.getStringAttribute('id');
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
      return this._name
    }

    // status - computed: true, optional: false, required: false
    public get status() {
      return this.getStringAttribute('status');
    }

    // status_message - computed: true, optional: false, required: false
    public get statusMessage() {
      return this.getStringAttribute('status_message');
    }

    // tags - computed: true, optional: true, required: false
    private _tags?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get tags() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('tags') as any;
    }
    public set tags(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._tags = value;
    }
    public resetTags() {
      this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get tagsInput() {
      return this._tags
    }

    // target_arns - computed: true, optional: false, required: false
    public get targetArns() {
      return this.getListAttribute('target_arns');
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
}
