// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CloudWatch Event Bridge
*/
export namespace CloudWatchEventBridge {
  export interface CloudwatchEventApiDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#connection_arn CloudwatchEventApiDestination#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#description CloudwatchEventApiDestination#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#http_method CloudwatchEventApiDestination#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}
    */
    readonly invocationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}
    */
    readonly invocationRateLimitPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#name CloudwatchEventApiDestination#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination}
  */
  export class CloudwatchEventApiDestination extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_api_destination";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventApiDestinationConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventApiDestinationConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_api_destination',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._connectionArn = config.connectionArn;
      this._description = config.description;
      this._httpMethod = config.httpMethod;
      this._invocationEndpoint = config.invocationEndpoint;
      this._invocationRateLimitPerSecond = config.invocationRateLimitPerSecond;
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // connection_arn - computed: false, optional: false, required: true
    private _connectionArn?: string; 
    public get connectionArn() {
      return this.getStringAttribute('connection_arn');
    }
    public set connectionArn(value: string) {
      this._connectionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get connectionArnInput() {
      return this._connectionArn
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

    // invocation_endpoint - computed: false, optional: false, required: true
    private _invocationEndpoint?: string; 
    public get invocationEndpoint() {
      return this.getStringAttribute('invocation_endpoint');
    }
    public set invocationEndpoint(value: string) {
      this._invocationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationEndpointInput() {
      return this._invocationEndpoint
    }

    // invocation_rate_limit_per_second - computed: false, optional: true, required: false
    private _invocationRateLimitPerSecond?: number | undefined; 
    public get invocationRateLimitPerSecond() {
      return this.getNumberAttribute('invocation_rate_limit_per_second');
    }
    public set invocationRateLimitPerSecond(value: number | undefined) {
      this._invocationRateLimitPerSecond = value;
    }
    public resetInvocationRateLimitPerSecond() {
      this._invocationRateLimitPerSecond = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationRateLimitPerSecondInput() {
      return this._invocationRateLimitPerSecond
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        connection_arn: cdktf.stringToTerraform(this._connectionArn),
        description: cdktf.stringToTerraform(this._description),
        http_method: cdktf.stringToTerraform(this._httpMethod),
        invocation_endpoint: cdktf.stringToTerraform(this._invocationEndpoint),
        invocation_rate_limit_per_second: cdktf.numberToTerraform(this._invocationRateLimitPerSecond),
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface CloudwatchEventArchiveConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#description CloudwatchEventArchive#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#event_pattern CloudwatchEventArchive#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#event_source_arn CloudwatchEventArchive#event_source_arn}
    */
    readonly eventSourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#name CloudwatchEventArchive#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html#retention_days CloudwatchEventArchive#retention_days}
    */
    readonly retentionDays?: number;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive}
  */
  export class CloudwatchEventArchive extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_archive";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_archive.html aws_cloudwatch_event_archive} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventArchiveConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventArchiveConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_archive',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._eventPattern = config.eventPattern;
      this._eventSourceArn = config.eventSourceArn;
      this._name = config.name;
      this._retentionDays = config.retentionDays;
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

    // event_pattern - computed: false, optional: true, required: false
    private _eventPattern?: string | undefined; 
    public get eventPattern() {
      return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string | undefined) {
      this._eventPattern = value;
    }
    public resetEventPattern() {
      this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
      return this._eventPattern
    }

    // event_source_arn - computed: false, optional: false, required: true
    private _eventSourceArn?: string; 
    public get eventSourceArn() {
      return this.getStringAttribute('event_source_arn');
    }
    public set eventSourceArn(value: string) {
      this._eventSourceArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceArnInput() {
      return this._eventSourceArn
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

    // retention_days - computed: false, optional: true, required: false
    private _retentionDays?: number | undefined; 
    public get retentionDays() {
      return this.getNumberAttribute('retention_days');
    }
    public set retentionDays(value: number | undefined) {
      this._retentionDays = value;
    }
    public resetRetentionDays() {
      this._retentionDays = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retentionDaysInput() {
      return this._retentionDays
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        description: cdktf.stringToTerraform(this._description),
        event_pattern: cdktf.stringToTerraform(this._eventPattern),
        event_source_arn: cdktf.stringToTerraform(this._eventSourceArn),
        name: cdktf.stringToTerraform(this._name),
        retention_days: cdktf.numberToTerraform(this._retentionDays),
      };
    }
  }
  export interface CloudwatchEventBusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#event_source_name CloudwatchEventBus#event_source_name}
    */
    readonly eventSourceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#name CloudwatchEventBus#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#tags CloudwatchEventBus#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html#tags_all CloudwatchEventBus#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html aws_cloudwatch_event_bus}
  */
  export class CloudwatchEventBus extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_bus";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus.html aws_cloudwatch_event_bus} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventBusConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventBusConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_bus',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._eventSourceName = config.eventSourceName;
      this._name = config.name;
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

    // event_source_name - computed: false, optional: true, required: false
    private _eventSourceName?: string | undefined; 
    public get eventSourceName() {
      return this.getStringAttribute('event_source_name');
    }
    public set eventSourceName(value: string | undefined) {
      this._eventSourceName = value;
    }
    public resetEventSourceName() {
      this._eventSourceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventSourceNameInput() {
      return this._eventSourceName
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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        event_source_name: cdktf.stringToTerraform(this._eventSourceName),
        name: cdktf.stringToTerraform(this._name),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CloudwatchEventBusPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html#event_bus_name CloudwatchEventBusPolicy#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html#policy CloudwatchEventBusPolicy#policy}
    */
    readonly policy: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html aws_cloudwatch_event_bus_policy}
  */
  export class CloudwatchEventBusPolicy extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_bus_policy";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html aws_cloudwatch_event_bus_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventBusPolicyConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventBusPolicyConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_bus_policy',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._eventBusName = config.eventBusName;
      this._policy = config.policy;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string | undefined; 
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string | undefined) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
    }

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

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        policy: cdktf.stringToTerraform(this._policy),
      };
    }
  }
  export interface CloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_type CloudwatchEventConnection#authorization_type}
    */
    readonly authorizationType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#description CloudwatchEventConnection#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#name CloudwatchEventConnection#name}
    */
    readonly name: string;
    /**
    * auth_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#auth_parameters CloudwatchEventConnection#auth_parameters}
    */
    readonly authParameters: CloudwatchEventConnectionAuthParameters;
  }
  export interface CloudwatchEventConnectionAuthParametersApiKey {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value: string;
  }

  function cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct?: CloudwatchEventConnectionAuthParametersApiKeyOutputReference | CloudwatchEventConnectionAuthParametersApiKey): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export class CloudwatchEventConnectionAuthParametersApiKeyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
    }

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }
  export interface CloudwatchEventConnectionAuthParametersBasic {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#password CloudwatchEventConnection#password}
    */
    readonly password: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#username CloudwatchEventConnection#username}
    */
    readonly username: string;
  }

  function cloudwatchEventConnectionAuthParametersBasicToTerraform(struct?: CloudwatchEventConnectionAuthParametersBasicOutputReference | CloudwatchEventConnectionAuthParametersBasic): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      password: cdktf.stringToTerraform(struct!.password),
      username: cdktf.stringToTerraform(struct!.username),
    }
  }

  export class CloudwatchEventConnectionAuthParametersBasicOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // password - computed: false, optional: false, required: true
    private _password?: string; 
    public get password() {
      return this.getStringAttribute('password');
    }
    public set password(value: string) {
      this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    public get passwordInput() {
      return this._password
    }

    // username - computed: false, optional: false, required: true
    private _username?: string; 
    public get username() {
      return this.getStringAttribute('username');
    }
    public set username(value: string) {
      this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    public get usernameInput() {
      return this._username
    }
  }
  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersInvocationHttpParameters {
    /**
    * body block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[];
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[];
    /**
    * query_string block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[];
  }

  function cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersInvocationHttpParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersBodyToTerraform)(struct!.body),
      header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersHeaderToTerraform)(struct!.header),
      query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryStringToTerraform)(struct!.queryString),
    }
  }

  export class CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // body - computed: false, optional: true, required: false
    private _body?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | undefined; 
    public get body() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('body') as any;
    }
    public set body(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersBody[] | undefined) {
      this._body = value;
    }
    public resetBody() {
      this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
      return this._body
    }

    // header - computed: false, optional: true, required: false
    private _header?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | undefined; 
    public get header() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('header') as any;
    }
    public set header(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersHeader[] | undefined) {
      this._header = value;
    }
    public resetHeader() {
      this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
      return this._header
    }

    // query_string - computed: false, optional: true, required: false
    private _queryString?: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | undefined; 
    public get queryString() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('query_string') as any;
    }
    public set queryString(value: CloudwatchEventConnectionAuthParametersInvocationHttpParametersQueryString[] | undefined) {
      this._queryString = value;
    }
    public resetQueryString() {
      this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
      return this._queryString
    }
  }
  export interface CloudwatchEventConnectionAuthParametersOauthClientParameters {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_id CloudwatchEventConnection#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_secret CloudwatchEventConnection#client_secret}
    */
    readonly clientSecret: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthClientParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      client_id: cdktf.stringToTerraform(struct!.clientId),
      client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    }
  }

  export class CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // client_id - computed: false, optional: false, required: true
    private _clientId?: string; 
    public get clientId() {
      return this.getStringAttribute('client_id');
    }
    public set clientId(value: string) {
      this._clientId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientIdInput() {
      return this._clientId
    }

    // client_secret - computed: false, optional: false, required: true
    private _clientSecret?: string; 
    public get clientSecret() {
      return this.getStringAttribute('client_secret');
    }
    public set clientSecret(value: string) {
      this._clientSecret = value;
    }
    // Temporarily expose input value. Use with caution.
    public get clientSecretInput() {
      return this._clientSecret
    }
  }
  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#is_value_secret CloudwatchEventConnection#is_value_secret}
    */
    readonly isValueSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#key CloudwatchEventConnection#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#value CloudwatchEventConnection#value}
    */
    readonly value?: string;
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      is_value_secret: cdktf.booleanToTerraform(struct!.isValueSecret),
      key: cdktf.stringToTerraform(struct!.key),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export interface CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters {
    /**
    * body block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#body CloudwatchEventConnection#body}
    */
    readonly body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[];
    /**
    * header block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#header CloudwatchEventConnection#header}
    */
    readonly header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[];
    /**
    * query_string block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#query_string CloudwatchEventConnection#query_string}
    */
    readonly queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[];
  }

  function cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference | CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      body: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBodyToTerraform)(struct!.body),
      header: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeaderToTerraform)(struct!.header),
      query_string: cdktf.listMapper(cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryStringToTerraform)(struct!.queryString),
    }
  }

  export class CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // body - computed: false, optional: true, required: false
    private _body?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | undefined; 
    public get body() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('body') as any;
    }
    public set body(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersBody[] | undefined) {
      this._body = value;
    }
    public resetBody() {
      this._body = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get bodyInput() {
      return this._body
    }

    // header - computed: false, optional: true, required: false
    private _header?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | undefined; 
    public get header() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('header') as any;
    }
    public set header(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersHeader[] | undefined) {
      this._header = value;
    }
    public resetHeader() {
      this._header = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerInput() {
      return this._header
    }

    // query_string - computed: false, optional: true, required: false
    private _queryString?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | undefined; 
    public get queryString() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('query_string') as any;
    }
    public set queryString(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersQueryString[] | undefined) {
      this._queryString = value;
    }
    public resetQueryString() {
      this._queryString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringInput() {
      return this._queryString
    }
  }
  export interface CloudwatchEventConnectionAuthParametersOauth {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#authorization_endpoint CloudwatchEventConnection#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#http_method CloudwatchEventConnection#http_method}
    */
    readonly httpMethod: string;
    /**
    * client_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#client_parameters CloudwatchEventConnection#client_parameters}
    */
    readonly clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters;
    /**
    * oauth_http_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth_http_parameters CloudwatchEventConnection#oauth_http_parameters}
    */
    readonly oauthHttpParameters: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters;
  }

  function cloudwatchEventConnectionAuthParametersOauthToTerraform(struct?: CloudwatchEventConnectionAuthParametersOauthOutputReference | CloudwatchEventConnectionAuthParametersOauth): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
      http_method: cdktf.stringToTerraform(struct!.httpMethod),
      client_parameters: cloudwatchEventConnectionAuthParametersOauthClientParametersToTerraform(struct!.clientParameters),
      oauth_http_parameters: cloudwatchEventConnectionAuthParametersOauthOauthHttpParametersToTerraform(struct!.oauthHttpParameters),
    }
  }

  export class CloudwatchEventConnectionAuthParametersOauthOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // authorization_endpoint - computed: false, optional: false, required: true
    private _authorizationEndpoint?: string; 
    public get authorizationEndpoint() {
      return this.getStringAttribute('authorization_endpoint');
    }
    public set authorizationEndpoint(value: string) {
      this._authorizationEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationEndpointInput() {
      return this._authorizationEndpoint
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

    // client_parameters - computed: false, optional: true, required: false
    private _clientParameters?: CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined; 
    private __clientParametersOutput = new CloudwatchEventConnectionAuthParametersOauthClientParametersOutputReference(this as any, "client_parameters", true);
    public get clientParameters() {
      return this.__clientParametersOutput;
    }
    public putClientParameters(value: CloudwatchEventConnectionAuthParametersOauthClientParameters | undefined) {
      this._clientParameters = value;
    }
    public resetClientParameters() {
      this._clientParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get clientParametersInput() {
      return this._clientParameters
    }

    // oauth_http_parameters - computed: false, optional: false, required: true
    private _oauthHttpParameters?: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters; 
    private __oauthHttpParametersOutput = new CloudwatchEventConnectionAuthParametersOauthOauthHttpParametersOutputReference(this as any, "oauth_http_parameters", true);
    public get oauthHttpParameters() {
      return this.__oauthHttpParametersOutput;
    }
    public putOauthHttpParameters(value: CloudwatchEventConnectionAuthParametersOauthOauthHttpParameters) {
      this._oauthHttpParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get oauthHttpParametersInput() {
      return this._oauthHttpParameters
    }
  }
  export interface CloudwatchEventConnectionAuthParameters {
    /**
    * api_key block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#api_key CloudwatchEventConnection#api_key}
    */
    readonly apiKey?: CloudwatchEventConnectionAuthParametersApiKey;
    /**
    * basic block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#basic CloudwatchEventConnection#basic}
    */
    readonly basic?: CloudwatchEventConnectionAuthParametersBasic;
    /**
    * invocation_http_parameters block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#invocation_http_parameters CloudwatchEventConnection#invocation_http_parameters}
    */
    readonly invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters;
    /**
    * oauth block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html#oauth CloudwatchEventConnection#oauth}
    */
    readonly oauth?: CloudwatchEventConnectionAuthParametersOauth;
  }

  function cloudwatchEventConnectionAuthParametersToTerraform(struct?: CloudwatchEventConnectionAuthParametersOutputReference | CloudwatchEventConnectionAuthParameters): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      api_key: cloudwatchEventConnectionAuthParametersApiKeyToTerraform(struct!.apiKey),
      basic: cloudwatchEventConnectionAuthParametersBasicToTerraform(struct!.basic),
      invocation_http_parameters: cloudwatchEventConnectionAuthParametersInvocationHttpParametersToTerraform(struct!.invocationHttpParameters),
      oauth: cloudwatchEventConnectionAuthParametersOauthToTerraform(struct!.oauth),
    }
  }

  export class CloudwatchEventConnectionAuthParametersOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // api_key - computed: false, optional: true, required: false
    private _apiKey?: CloudwatchEventConnectionAuthParametersApiKey | undefined; 
    private __apiKeyOutput = new CloudwatchEventConnectionAuthParametersApiKeyOutputReference(this as any, "api_key", true);
    public get apiKey() {
      return this.__apiKeyOutput;
    }
    public putApiKey(value: CloudwatchEventConnectionAuthParametersApiKey | undefined) {
      this._apiKey = value;
    }
    public resetApiKey() {
      this._apiKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get apiKeyInput() {
      return this._apiKey
    }

    // basic - computed: false, optional: true, required: false
    private _basic?: CloudwatchEventConnectionAuthParametersBasic | undefined; 
    private __basicOutput = new CloudwatchEventConnectionAuthParametersBasicOutputReference(this as any, "basic", true);
    public get basic() {
      return this.__basicOutput;
    }
    public putBasic(value: CloudwatchEventConnectionAuthParametersBasic | undefined) {
      this._basic = value;
    }
    public resetBasic() {
      this._basic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get basicInput() {
      return this._basic
    }

    // invocation_http_parameters - computed: false, optional: true, required: false
    private _invocationHttpParameters?: CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined; 
    private __invocationHttpParametersOutput = new CloudwatchEventConnectionAuthParametersInvocationHttpParametersOutputReference(this as any, "invocation_http_parameters", true);
    public get invocationHttpParameters() {
      return this.__invocationHttpParametersOutput;
    }
    public putInvocationHttpParameters(value: CloudwatchEventConnectionAuthParametersInvocationHttpParameters | undefined) {
      this._invocationHttpParameters = value;
    }
    public resetInvocationHttpParameters() {
      this._invocationHttpParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get invocationHttpParametersInput() {
      return this._invocationHttpParameters
    }

    // oauth - computed: false, optional: true, required: false
    private _oauth?: CloudwatchEventConnectionAuthParametersOauth | undefined; 
    private __oauthOutput = new CloudwatchEventConnectionAuthParametersOauthOutputReference(this as any, "oauth", true);
    public get oauth() {
      return this.__oauthOutput;
    }
    public putOauth(value: CloudwatchEventConnectionAuthParametersOauth | undefined) {
      this._oauth = value;
    }
    public resetOauth() {
      this._oauth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get oauthInput() {
      return this._oauth
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection}
  */
  export class CloudwatchEventConnection extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._authorizationType = config.authorizationType;
      this._description = config.description;
      this._name = config.name;
      this._authParameters = config.authParameters;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // authorization_type - computed: false, optional: false, required: true
    private _authorizationType?: string; 
    public get authorizationType() {
      return this.getStringAttribute('authorization_type');
    }
    public set authorizationType(value: string) {
      this._authorizationType = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authorizationTypeInput() {
      return this._authorizationType
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
      return this.getStringAttribute('secret_arn');
    }

    // auth_parameters - computed: false, optional: false, required: true
    private _authParameters?: CloudwatchEventConnectionAuthParameters; 
    private __authParametersOutput = new CloudwatchEventConnectionAuthParametersOutputReference(this as any, "auth_parameters", true);
    public get authParameters() {
      return this.__authParametersOutput;
    }
    public putAuthParameters(value: CloudwatchEventConnectionAuthParameters) {
      this._authParameters = value;
    }
    // Temporarily expose input value. Use with caution.
    public get authParametersInput() {
      return this._authParameters
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        authorization_type: cdktf.stringToTerraform(this._authorizationType),
        description: cdktf.stringToTerraform(this._description),
        name: cdktf.stringToTerraform(this._name),
        auth_parameters: cloudwatchEventConnectionAuthParametersToTerraform(this._authParameters),
      };
    }
  }
  export interface CloudwatchEventPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#action CloudwatchEventPermission#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#event_bus_name CloudwatchEventPermission#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#principal CloudwatchEventPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#statement_id CloudwatchEventPermission#statement_id}
    */
    readonly statementId: string;
    /**
    * condition block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#condition CloudwatchEventPermission#condition}
    */
    readonly condition?: CloudwatchEventPermissionCondition;
  }
  export interface CloudwatchEventPermissionCondition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#key CloudwatchEventPermission#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#type CloudwatchEventPermission#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#value CloudwatchEventPermission#value}
    */
    readonly value: string;
  }

  function cloudwatchEventPermissionConditionToTerraform(struct?: CloudwatchEventPermissionConditionOutputReference | CloudwatchEventPermissionCondition): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      type: cdktf.stringToTerraform(struct!.type),
      value: cdktf.stringToTerraform(struct!.value),
    }
  }

  export class CloudwatchEventPermissionConditionOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // key - computed: false, optional: false, required: true
    private _key?: string; 
    public get key() {
      return this.getStringAttribute('key');
    }
    public set key(value: string) {
      this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    public get keyInput() {
      return this._key
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

    // value - computed: false, optional: false, required: true
    private _value?: string; 
    public get value() {
      return this.getStringAttribute('value');
    }
    public set value(value: string) {
      this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    public get valueInput() {
      return this._value
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission}
  */
  export class CloudwatchEventPermission extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_permission";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventPermissionConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventPermissionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_permission',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._action = config.action;
      this._eventBusName = config.eventBusName;
      this._principal = config.principal;
      this._statementId = config.statementId;
      this._condition = config.condition;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // action - computed: false, optional: true, required: false
    private _action?: string | undefined; 
    public get action() {
      return this.getStringAttribute('action');
    }
    public set action(value: string | undefined) {
      this._action = value;
    }
    public resetAction() {
      this._action = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get actionInput() {
      return this._action
    }

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string | undefined; 
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string | undefined) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // principal - computed: false, optional: false, required: true
    private _principal?: string; 
    public get principal() {
      return this.getStringAttribute('principal');
    }
    public set principal(value: string) {
      this._principal = value;
    }
    // Temporarily expose input value. Use with caution.
    public get principalInput() {
      return this._principal
    }

    // statement_id - computed: false, optional: false, required: true
    private _statementId?: string; 
    public get statementId() {
      return this.getStringAttribute('statement_id');
    }
    public set statementId(value: string) {
      this._statementId = value;
    }
    // Temporarily expose input value. Use with caution.
    public get statementIdInput() {
      return this._statementId
    }

    // condition - computed: false, optional: true, required: false
    private _condition?: CloudwatchEventPermissionCondition | undefined; 
    private __conditionOutput = new CloudwatchEventPermissionConditionOutputReference(this as any, "condition", true);
    public get condition() {
      return this.__conditionOutput;
    }
    public putCondition(value: CloudwatchEventPermissionCondition | undefined) {
      this._condition = value;
    }
    public resetCondition() {
      this._condition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get conditionInput() {
      return this._condition
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        action: cdktf.stringToTerraform(this._action),
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        principal: cdktf.stringToTerraform(this._principal),
        statement_id: cdktf.stringToTerraform(this._statementId),
        condition: cloudwatchEventPermissionConditionToTerraform(this._condition),
      };
    }
  }
  export interface CloudwatchEventRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#description CloudwatchEventRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#event_bus_name CloudwatchEventRule#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#event_pattern CloudwatchEventRule#event_pattern}
    */
    readonly eventPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#is_enabled CloudwatchEventRule#is_enabled}
    */
    readonly isEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#name CloudwatchEventRule#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#name_prefix CloudwatchEventRule#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#role_arn CloudwatchEventRule#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#schedule_expression CloudwatchEventRule#schedule_expression}
    */
    readonly scheduleExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#tags CloudwatchEventRule#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html#tags_all CloudwatchEventRule#tags_all}
    */
    readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule}
  */
  export class CloudwatchEventRule extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_rule";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_rule.html aws_cloudwatch_event_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventRuleConfig = {}
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventRuleConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_rule',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._description = config.description;
      this._eventBusName = config.eventBusName;
      this._eventPattern = config.eventPattern;
      this._isEnabled = config.isEnabled;
      this._name = config.name;
      this._namePrefix = config.namePrefix;
      this._roleArn = config.roleArn;
      this._scheduleExpression = config.scheduleExpression;
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

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string | undefined; 
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string | undefined) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
    }

    // event_pattern - computed: false, optional: true, required: false
    private _eventPattern?: string | undefined; 
    public get eventPattern() {
      return this.getStringAttribute('event_pattern');
    }
    public set eventPattern(value: string | undefined) {
      this._eventPattern = value;
    }
    public resetEventPattern() {
      this._eventPattern = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventPatternInput() {
      return this._eventPattern
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // is_enabled - computed: false, optional: true, required: false
    private _isEnabled?: boolean | cdktf.IResolvable | undefined; 
    public get isEnabled() {
      return this.getBooleanAttribute('is_enabled') as any;
    }
    public set isEnabled(value: boolean | cdktf.IResolvable | undefined) {
      this._isEnabled = value;
    }
    public resetIsEnabled() {
      this._isEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get isEnabledInput() {
      return this._isEnabled
    }

    // name - computed: true, optional: true, required: false
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

    // name_prefix - computed: true, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // role_arn - computed: false, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // schedule_expression - computed: false, optional: true, required: false
    private _scheduleExpression?: string | undefined; 
    public get scheduleExpression() {
      return this.getStringAttribute('schedule_expression');
    }
    public set scheduleExpression(value: string | undefined) {
      this._scheduleExpression = value;
    }
    public resetScheduleExpression() {
      this._scheduleExpression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get scheduleExpressionInput() {
      return this._scheduleExpression
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
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        event_pattern: cdktf.stringToTerraform(this._eventPattern),
        is_enabled: cdktf.booleanToTerraform(this._isEnabled),
        name: cdktf.stringToTerraform(this._name),
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        schedule_expression: cdktf.stringToTerraform(this._scheduleExpression),
        tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      };
    }
  }
  export interface CloudwatchEventTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#event_bus_name CloudwatchEventTarget#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input CloudwatchEventTarget#input}
    */
    readonly input?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_path CloudwatchEventTarget#input_path}
    */
    readonly inputPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#role_arn CloudwatchEventTarget#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#rule CloudwatchEventTarget#rule}
    */
    readonly rule: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#target_id CloudwatchEventTarget#target_id}
    */
    readonly targetId?: string;
    /**
    * batch_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#batch_target CloudwatchEventTarget#batch_target}
    */
    readonly batchTarget?: CloudwatchEventTargetBatchTarget;
    /**
    * dead_letter_config block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#dead_letter_config CloudwatchEventTarget#dead_letter_config}
    */
    readonly deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig;
    /**
    * ecs_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#ecs_target CloudwatchEventTarget#ecs_target}
    */
    readonly ecsTarget?: CloudwatchEventTargetEcsTarget;
    /**
    * http_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#http_target CloudwatchEventTarget#http_target}
    */
    readonly httpTarget?: CloudwatchEventTargetHttpTarget;
    /**
    * input_transformer block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_transformer CloudwatchEventTarget#input_transformer}
    */
    readonly inputTransformer?: CloudwatchEventTargetInputTransformer;
    /**
    * kinesis_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#kinesis_target CloudwatchEventTarget#kinesis_target}
    */
    readonly kinesisTarget?: CloudwatchEventTargetKinesisTarget;
    /**
    * redshift_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#redshift_target CloudwatchEventTarget#redshift_target}
    */
    readonly redshiftTarget?: CloudwatchEventTargetRedshiftTarget;
    /**
    * retry_policy block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#retry_policy CloudwatchEventTarget#retry_policy}
    */
    readonly retryPolicy?: CloudwatchEventTargetRetryPolicy;
    /**
    * run_command_targets block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#run_command_targets CloudwatchEventTarget#run_command_targets}
    */
    readonly runCommandTargets?: CloudwatchEventTargetRunCommandTargets[];
    /**
    * sqs_target block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sqs_target CloudwatchEventTarget#sqs_target}
    */
    readonly sqsTarget?: CloudwatchEventTargetSqsTarget;
  }
  export interface CloudwatchEventTargetBatchTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#array_size CloudwatchEventTarget#array_size}
    */
    readonly arraySize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_attempts CloudwatchEventTarget#job_attempts}
    */
    readonly jobAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_definition CloudwatchEventTarget#job_definition}
    */
    readonly jobDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#job_name CloudwatchEventTarget#job_name}
    */
    readonly jobName: string;
  }

  function cloudwatchEventTargetBatchTargetToTerraform(struct?: CloudwatchEventTargetBatchTargetOutputReference | CloudwatchEventTargetBatchTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      array_size: cdktf.numberToTerraform(struct!.arraySize),
      job_attempts: cdktf.numberToTerraform(struct!.jobAttempts),
      job_definition: cdktf.stringToTerraform(struct!.jobDefinition),
      job_name: cdktf.stringToTerraform(struct!.jobName),
    }
  }

  export class CloudwatchEventTargetBatchTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // array_size - computed: false, optional: true, required: false
    private _arraySize?: number | undefined; 
    public get arraySize() {
      return this.getNumberAttribute('array_size');
    }
    public set arraySize(value: number | undefined) {
      this._arraySize = value;
    }
    public resetArraySize() {
      this._arraySize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arraySizeInput() {
      return this._arraySize
    }

    // job_attempts - computed: false, optional: true, required: false
    private _jobAttempts?: number | undefined; 
    public get jobAttempts() {
      return this.getNumberAttribute('job_attempts');
    }
    public set jobAttempts(value: number | undefined) {
      this._jobAttempts = value;
    }
    public resetJobAttempts() {
      this._jobAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get jobAttemptsInput() {
      return this._jobAttempts
    }

    // job_definition - computed: false, optional: false, required: true
    private _jobDefinition?: string; 
    public get jobDefinition() {
      return this.getStringAttribute('job_definition');
    }
    public set jobDefinition(value: string) {
      this._jobDefinition = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobDefinitionInput() {
      return this._jobDefinition
    }

    // job_name - computed: false, optional: false, required: true
    private _jobName?: string; 
    public get jobName() {
      return this.getStringAttribute('job_name');
    }
    public set jobName(value: string) {
      this._jobName = value;
    }
    // Temporarily expose input value. Use with caution.
    public get jobNameInput() {
      return this._jobName
    }
  }
  export interface CloudwatchEventTargetDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#arn CloudwatchEventTarget#arn}
    */
    readonly arn?: string;
  }

  function cloudwatchEventTargetDeadLetterConfigToTerraform(struct?: CloudwatchEventTargetDeadLetterConfigOutputReference | CloudwatchEventTargetDeadLetterConfig): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      arn: cdktf.stringToTerraform(struct!.arn),
    }
  }

  export class CloudwatchEventTargetDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // arn - computed: false, optional: true, required: false
    private _arn?: string | undefined; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string | undefined) {
      this._arn = value;
    }
    public resetArn() {
      this._arn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }
  }
  export interface CloudwatchEventTargetEcsTargetNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#assign_public_ip CloudwatchEventTarget#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#security_groups CloudwatchEventTarget#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#subnets CloudwatchEventTarget#subnets}
    */
    readonly subnets: string[];
  }

  function cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct?: CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference | CloudwatchEventTargetEcsTargetNetworkConfiguration): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform)(struct!.securityGroups),
      subnets: cdktf.listMapper(cdktf.stringToTerraform)(struct!.subnets),
    }
  }

  export class CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // assign_public_ip - computed: false, optional: true, required: false
    private _assignPublicIp?: boolean | cdktf.IResolvable | undefined; 
    public get assignPublicIp() {
      return this.getBooleanAttribute('assign_public_ip') as any;
    }
    public set assignPublicIp(value: boolean | cdktf.IResolvable | undefined) {
      this._assignPublicIp = value;
    }
    public resetAssignPublicIp() {
      this._assignPublicIp = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get assignPublicIpInput() {
      return this._assignPublicIp
    }

    // security_groups - computed: false, optional: true, required: false
    private _securityGroups?: string[] | undefined; 
    public get securityGroups() {
      return this.getListAttribute('security_groups');
    }
    public set securityGroups(value: string[] | undefined) {
      this._securityGroups = value;
    }
    public resetSecurityGroups() {
      this._securityGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get securityGroupsInput() {
      return this._securityGroups
    }

    // subnets - computed: false, optional: false, required: true
    private _subnets?: string[]; 
    public get subnets() {
      return this.getListAttribute('subnets');
    }
    public set subnets(value: string[]) {
      this._subnets = value;
    }
    // Temporarily expose input value. Use with caution.
    public get subnetsInput() {
      return this._subnets
    }
  }
  export interface CloudwatchEventTargetEcsTargetPlacementConstraint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#expression CloudwatchEventTarget#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#type CloudwatchEventTarget#type}
    */
    readonly type: string;
  }

  function cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform(struct?: CloudwatchEventTargetEcsTargetPlacementConstraint): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      expression: cdktf.stringToTerraform(struct!.expression),
      type: cdktf.stringToTerraform(struct!.type),
    }
  }

  export interface CloudwatchEventTargetEcsTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_ecs_managed_tags CloudwatchEventTarget#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#enable_execute_command CloudwatchEventTarget#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#group CloudwatchEventTarget#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#launch_type CloudwatchEventTarget#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#platform_version CloudwatchEventTarget#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#propagate_tags CloudwatchEventTarget#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#tags CloudwatchEventTarget#tags}
    */
    readonly tags?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_count CloudwatchEventTarget#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#task_definition_arn CloudwatchEventTarget#task_definition_arn}
    */
    readonly taskDefinitionArn: string;
    /**
    * network_configuration block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#network_configuration CloudwatchEventTarget#network_configuration}
    */
    readonly networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration;
    /**
    * placement_constraint block
    * 
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#placement_constraint CloudwatchEventTarget#placement_constraint}
    */
    readonly placementConstraint?: CloudwatchEventTargetEcsTargetPlacementConstraint[];
  }

  function cloudwatchEventTargetEcsTargetToTerraform(struct?: CloudwatchEventTargetEcsTargetOutputReference | CloudwatchEventTargetEcsTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      enable_ecs_managed_tags: cdktf.booleanToTerraform(struct!.enableEcsManagedTags),
      enable_execute_command: cdktf.booleanToTerraform(struct!.enableExecuteCommand),
      group: cdktf.stringToTerraform(struct!.group),
      launch_type: cdktf.stringToTerraform(struct!.launchType),
      platform_version: cdktf.stringToTerraform(struct!.platformVersion),
      propagate_tags: cdktf.stringToTerraform(struct!.propagateTags),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.tags),
      task_count: cdktf.numberToTerraform(struct!.taskCount),
      task_definition_arn: cdktf.stringToTerraform(struct!.taskDefinitionArn),
      network_configuration: cloudwatchEventTargetEcsTargetNetworkConfigurationToTerraform(struct!.networkConfiguration),
      placement_constraint: cdktf.listMapper(cloudwatchEventTargetEcsTargetPlacementConstraintToTerraform)(struct!.placementConstraint),
    }
  }

  export class CloudwatchEventTargetEcsTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // enable_ecs_managed_tags - computed: false, optional: true, required: false
    private _enableEcsManagedTags?: boolean | cdktf.IResolvable | undefined; 
    public get enableEcsManagedTags() {
      return this.getBooleanAttribute('enable_ecs_managed_tags') as any;
    }
    public set enableEcsManagedTags(value: boolean | cdktf.IResolvable | undefined) {
      this._enableEcsManagedTags = value;
    }
    public resetEnableEcsManagedTags() {
      this._enableEcsManagedTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableEcsManagedTagsInput() {
      return this._enableEcsManagedTags
    }

    // enable_execute_command - computed: false, optional: true, required: false
    private _enableExecuteCommand?: boolean | cdktf.IResolvable | undefined; 
    public get enableExecuteCommand() {
      return this.getBooleanAttribute('enable_execute_command') as any;
    }
    public set enableExecuteCommand(value: boolean | cdktf.IResolvable | undefined) {
      this._enableExecuteCommand = value;
    }
    public resetEnableExecuteCommand() {
      this._enableExecuteCommand = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get enableExecuteCommandInput() {
      return this._enableExecuteCommand
    }

    // group - computed: false, optional: true, required: false
    private _group?: string | undefined; 
    public get group() {
      return this.getStringAttribute('group');
    }
    public set group(value: string | undefined) {
      this._group = value;
    }
    public resetGroup() {
      this._group = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get groupInput() {
      return this._group
    }

    // launch_type - computed: false, optional: true, required: false
    private _launchType?: string | undefined; 
    public get launchType() {
      return this.getStringAttribute('launch_type');
    }
    public set launchType(value: string | undefined) {
      this._launchType = value;
    }
    public resetLaunchType() {
      this._launchType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get launchTypeInput() {
      return this._launchType
    }

    // platform_version - computed: false, optional: true, required: false
    private _platformVersion?: string | undefined; 
    public get platformVersion() {
      return this.getStringAttribute('platform_version');
    }
    public set platformVersion(value: string | undefined) {
      this._platformVersion = value;
    }
    public resetPlatformVersion() {
      this._platformVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get platformVersionInput() {
      return this._platformVersion
    }

    // propagate_tags - computed: false, optional: true, required: false
    private _propagateTags?: string | undefined; 
    public get propagateTags() {
      return this.getStringAttribute('propagate_tags');
    }
    public set propagateTags(value: string | undefined) {
      this._propagateTags = value;
    }
    public resetPropagateTags() {
      this._propagateTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get propagateTagsInput() {
      return this._propagateTags
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

    // task_count - computed: false, optional: true, required: false
    private _taskCount?: number | undefined; 
    public get taskCount() {
      return this.getNumberAttribute('task_count');
    }
    public set taskCount(value: number | undefined) {
      this._taskCount = value;
    }
    public resetTaskCount() {
      this._taskCount = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get taskCountInput() {
      return this._taskCount
    }

    // task_definition_arn - computed: false, optional: false, required: true
    private _taskDefinitionArn?: string; 
    public get taskDefinitionArn() {
      return this.getStringAttribute('task_definition_arn');
    }
    public set taskDefinitionArn(value: string) {
      this._taskDefinitionArn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get taskDefinitionArnInput() {
      return this._taskDefinitionArn
    }

    // network_configuration - computed: false, optional: true, required: false
    private _networkConfiguration?: CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined; 
    private __networkConfigurationOutput = new CloudwatchEventTargetEcsTargetNetworkConfigurationOutputReference(this as any, "network_configuration", true);
    public get networkConfiguration() {
      return this.__networkConfigurationOutput;
    }
    public putNetworkConfiguration(value: CloudwatchEventTargetEcsTargetNetworkConfiguration | undefined) {
      this._networkConfiguration = value;
    }
    public resetNetworkConfiguration() {
      this._networkConfiguration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get networkConfigurationInput() {
      return this._networkConfiguration
    }

    // placement_constraint - computed: false, optional: true, required: false
    private _placementConstraint?: CloudwatchEventTargetEcsTargetPlacementConstraint[] | undefined; 
    public get placementConstraint() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('placement_constraint') as any;
    }
    public set placementConstraint(value: CloudwatchEventTargetEcsTargetPlacementConstraint[] | undefined) {
      this._placementConstraint = value;
    }
    public resetPlacementConstraint() {
      this._placementConstraint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get placementConstraintInput() {
      return this._placementConstraint
    }
  }
  export interface CloudwatchEventTargetHttpTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#header_parameters CloudwatchEventTarget#header_parameters}
    */
    readonly headerParameters?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#path_parameter_values CloudwatchEventTarget#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#query_string_parameters CloudwatchEventTarget#query_string_parameters}
    */
    readonly queryStringParameters?: { [key: string]: string } | cdktf.IResolvable;
  }

  function cloudwatchEventTargetHttpTargetToTerraform(struct?: CloudwatchEventTargetHttpTargetOutputReference | CloudwatchEventTargetHttpTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      header_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.headerParameters),
      path_parameter_values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.pathParameterValues),
      query_string_parameters: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.queryStringParameters),
    }
  }

  export class CloudwatchEventTargetHttpTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // header_parameters - computed: false, optional: true, required: false
    private _headerParameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get headerParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('header_parameters') as any;
    }
    public set headerParameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._headerParameters = value;
    }
    public resetHeaderParameters() {
      this._headerParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get headerParametersInput() {
      return this._headerParameters
    }

    // path_parameter_values - computed: false, optional: true, required: false
    private _pathParameterValues?: string[] | undefined; 
    public get pathParameterValues() {
      return this.getListAttribute('path_parameter_values');
    }
    public set pathParameterValues(value: string[] | undefined) {
      this._pathParameterValues = value;
    }
    public resetPathParameterValues() {
      this._pathParameterValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get pathParameterValuesInput() {
      return this._pathParameterValues
    }

    // query_string_parameters - computed: false, optional: true, required: false
    private _queryStringParameters?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get queryStringParameters() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('query_string_parameters') as any;
    }
    public set queryStringParameters(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._queryStringParameters = value;
    }
    public resetQueryStringParameters() {
      this._queryStringParameters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get queryStringParametersInput() {
      return this._queryStringParameters
    }
  }
  export interface CloudwatchEventTargetInputTransformer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_paths CloudwatchEventTarget#input_paths}
    */
    readonly inputPaths?: { [key: string]: string } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#input_template CloudwatchEventTarget#input_template}
    */
    readonly inputTemplate: string;
  }

  function cloudwatchEventTargetInputTransformerToTerraform(struct?: CloudwatchEventTargetInputTransformerOutputReference | CloudwatchEventTargetInputTransformer): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      input_paths: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.inputPaths),
      input_template: cdktf.stringToTerraform(struct!.inputTemplate),
    }
  }

  export class CloudwatchEventTargetInputTransformerOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // input_paths - computed: false, optional: true, required: false
    private _inputPaths?: { [key: string]: string } | cdktf.IResolvable | undefined; 
    public get inputPaths() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('input_paths') as any;
    }
    public set inputPaths(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
      this._inputPaths = value;
    }
    public resetInputPaths() {
      this._inputPaths = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputPathsInput() {
      return this._inputPaths
    }

    // input_template - computed: false, optional: false, required: true
    private _inputTemplate?: string; 
    public get inputTemplate() {
      return this.getStringAttribute('input_template');
    }
    public set inputTemplate(value: string) {
      this._inputTemplate = value;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTemplateInput() {
      return this._inputTemplate
    }
  }
  export interface CloudwatchEventTargetKinesisTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#partition_key_path CloudwatchEventTarget#partition_key_path}
    */
    readonly partitionKeyPath?: string;
  }

  function cloudwatchEventTargetKinesisTargetToTerraform(struct?: CloudwatchEventTargetKinesisTargetOutputReference | CloudwatchEventTargetKinesisTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      partition_key_path: cdktf.stringToTerraform(struct!.partitionKeyPath),
    }
  }

  export class CloudwatchEventTargetKinesisTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // partition_key_path - computed: false, optional: true, required: false
    private _partitionKeyPath?: string | undefined; 
    public get partitionKeyPath() {
      return this.getStringAttribute('partition_key_path');
    }
    public set partitionKeyPath(value: string | undefined) {
      this._partitionKeyPath = value;
    }
    public resetPartitionKeyPath() {
      this._partitionKeyPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get partitionKeyPathInput() {
      return this._partitionKeyPath
    }
  }
  export interface CloudwatchEventTargetRedshiftTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#database CloudwatchEventTarget#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#db_user CloudwatchEventTarget#db_user}
    */
    readonly dbUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#secrets_manager_arn CloudwatchEventTarget#secrets_manager_arn}
    */
    readonly secretsManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#sql CloudwatchEventTarget#sql}
    */
    readonly sql?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#statement_name CloudwatchEventTarget#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#with_event CloudwatchEventTarget#with_event}
    */
    readonly withEvent?: boolean | cdktf.IResolvable;
  }

  function cloudwatchEventTargetRedshiftTargetToTerraform(struct?: CloudwatchEventTargetRedshiftTargetOutputReference | CloudwatchEventTargetRedshiftTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      database: cdktf.stringToTerraform(struct!.database),
      db_user: cdktf.stringToTerraform(struct!.dbUser),
      secrets_manager_arn: cdktf.stringToTerraform(struct!.secretsManagerArn),
      sql: cdktf.stringToTerraform(struct!.sql),
      statement_name: cdktf.stringToTerraform(struct!.statementName),
      with_event: cdktf.booleanToTerraform(struct!.withEvent),
    }
  }

  export class CloudwatchEventTargetRedshiftTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // database - computed: false, optional: false, required: true
    private _database?: string; 
    public get database() {
      return this.getStringAttribute('database');
    }
    public set database(value: string) {
      this._database = value;
    }
    // Temporarily expose input value. Use with caution.
    public get databaseInput() {
      return this._database
    }

    // db_user - computed: false, optional: true, required: false
    private _dbUser?: string | undefined; 
    public get dbUser() {
      return this.getStringAttribute('db_user');
    }
    public set dbUser(value: string | undefined) {
      this._dbUser = value;
    }
    public resetDbUser() {
      this._dbUser = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get dbUserInput() {
      return this._dbUser
    }

    // secrets_manager_arn - computed: false, optional: true, required: false
    private _secretsManagerArn?: string | undefined; 
    public get secretsManagerArn() {
      return this.getStringAttribute('secrets_manager_arn');
    }
    public set secretsManagerArn(value: string | undefined) {
      this._secretsManagerArn = value;
    }
    public resetSecretsManagerArn() {
      this._secretsManagerArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get secretsManagerArnInput() {
      return this._secretsManagerArn
    }

    // sql - computed: false, optional: true, required: false
    private _sql?: string | undefined; 
    public get sql() {
      return this.getStringAttribute('sql');
    }
    public set sql(value: string | undefined) {
      this._sql = value;
    }
    public resetSql() {
      this._sql = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqlInput() {
      return this._sql
    }

    // statement_name - computed: false, optional: true, required: false
    private _statementName?: string | undefined; 
    public get statementName() {
      return this.getStringAttribute('statement_name');
    }
    public set statementName(value: string | undefined) {
      this._statementName = value;
    }
    public resetStatementName() {
      this._statementName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get statementNameInput() {
      return this._statementName
    }

    // with_event - computed: false, optional: true, required: false
    private _withEvent?: boolean | cdktf.IResolvable | undefined; 
    public get withEvent() {
      return this.getBooleanAttribute('with_event') as any;
    }
    public set withEvent(value: boolean | cdktf.IResolvable | undefined) {
      this._withEvent = value;
    }
    public resetWithEvent() {
      this._withEvent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get withEventInput() {
      return this._withEvent
    }
  }
  export interface CloudwatchEventTargetRetryPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_event_age_in_seconds CloudwatchEventTarget#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#maximum_retry_attempts CloudwatchEventTarget#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
  }

  function cloudwatchEventTargetRetryPolicyToTerraform(struct?: CloudwatchEventTargetRetryPolicyOutputReference | CloudwatchEventTargetRetryPolicy): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      maximum_event_age_in_seconds: cdktf.numberToTerraform(struct!.maximumEventAgeInSeconds),
      maximum_retry_attempts: cdktf.numberToTerraform(struct!.maximumRetryAttempts),
    }
  }

  export class CloudwatchEventTargetRetryPolicyOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // maximum_event_age_in_seconds - computed: false, optional: true, required: false
    private _maximumEventAgeInSeconds?: number | undefined; 
    public get maximumEventAgeInSeconds() {
      return this.getNumberAttribute('maximum_event_age_in_seconds');
    }
    public set maximumEventAgeInSeconds(value: number | undefined) {
      this._maximumEventAgeInSeconds = value;
    }
    public resetMaximumEventAgeInSeconds() {
      this._maximumEventAgeInSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumEventAgeInSecondsInput() {
      return this._maximumEventAgeInSeconds
    }

    // maximum_retry_attempts - computed: false, optional: true, required: false
    private _maximumRetryAttempts?: number | undefined; 
    public get maximumRetryAttempts() {
      return this.getNumberAttribute('maximum_retry_attempts');
    }
    public set maximumRetryAttempts(value: number | undefined) {
      this._maximumRetryAttempts = value;
    }
    public resetMaximumRetryAttempts() {
      this._maximumRetryAttempts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get maximumRetryAttemptsInput() {
      return this._maximumRetryAttempts
    }
  }
  export interface CloudwatchEventTargetRunCommandTargets {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#key CloudwatchEventTarget#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#values CloudwatchEventTarget#values}
    */
    readonly values: string[];
  }

  function cloudwatchEventTargetRunCommandTargetsToTerraform(struct?: CloudwatchEventTargetRunCommandTargets): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      key: cdktf.stringToTerraform(struct!.key),
      values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
    }
  }

  export interface CloudwatchEventTargetSqsTarget {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html#message_group_id CloudwatchEventTarget#message_group_id}
    */
    readonly messageGroupId?: string;
  }

  function cloudwatchEventTargetSqsTargetToTerraform(struct?: CloudwatchEventTargetSqsTargetOutputReference | CloudwatchEventTargetSqsTarget): any {
    if (!cdktf.canInspect(struct)) { return struct; }
    if (cdktf.isComplexElement(struct)) {
      throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
      message_group_id: cdktf.stringToTerraform(struct!.messageGroupId),
    }
  }

  export class CloudwatchEventTargetSqsTargetOutputReference extends cdktf.ComplexObject {
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
      super(terraformResource, terraformAttribute, isSingleItem);
    }

    // message_group_id - computed: false, optional: true, required: false
    private _messageGroupId?: string | undefined; 
    public get messageGroupId() {
      return this.getStringAttribute('message_group_id');
    }
    public set messageGroupId(value: string | undefined) {
      this._messageGroupId = value;
    }
    public resetMessageGroupId() {
      this._messageGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get messageGroupIdInput() {
      return this._messageGroupId
    }
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target}
  */
  export class CloudwatchEventTarget extends cdktf.TerraformResource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_target";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_target.html aws_cloudwatch_event_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventTargetConfig
    */
    public constructor(scope: Construct, id: string, config: CloudwatchEventTargetConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_target',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._arn = config.arn;
      this._eventBusName = config.eventBusName;
      this._input = config.input;
      this._inputPath = config.inputPath;
      this._roleArn = config.roleArn;
      this._rule = config.rule;
      this._targetId = config.targetId;
      this._batchTarget = config.batchTarget;
      this._deadLetterConfig = config.deadLetterConfig;
      this._ecsTarget = config.ecsTarget;
      this._httpTarget = config.httpTarget;
      this._inputTransformer = config.inputTransformer;
      this._kinesisTarget = config.kinesisTarget;
      this._redshiftTarget = config.redshiftTarget;
      this._retryPolicy = config.retryPolicy;
      this._runCommandTargets = config.runCommandTargets;
      this._sqsTarget = config.sqsTarget;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: false, optional: false, required: true
    private _arn?: string; 
    public get arn() {
      return this.getStringAttribute('arn');
    }
    public set arn(value: string) {
      this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    public get arnInput() {
      return this._arn
    }

    // event_bus_name - computed: false, optional: true, required: false
    private _eventBusName?: string | undefined; 
    public get eventBusName() {
      return this.getStringAttribute('event_bus_name');
    }
    public set eventBusName(value: string | undefined) {
      this._eventBusName = value;
    }
    public resetEventBusName() {
      this._eventBusName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get eventBusNameInput() {
      return this._eventBusName
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // input - computed: false, optional: true, required: false
    private _input?: string | undefined; 
    public get input() {
      return this.getStringAttribute('input');
    }
    public set input(value: string | undefined) {
      this._input = value;
    }
    public resetInput() {
      this._input = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputInput() {
      return this._input
    }

    // input_path - computed: false, optional: true, required: false
    private _inputPath?: string | undefined; 
    public get inputPath() {
      return this.getStringAttribute('input_path');
    }
    public set inputPath(value: string | undefined) {
      this._inputPath = value;
    }
    public resetInputPath() {
      this._inputPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputPathInput() {
      return this._inputPath
    }

    // role_arn - computed: false, optional: true, required: false
    private _roleArn?: string | undefined; 
    public get roleArn() {
      return this.getStringAttribute('role_arn');
    }
    public set roleArn(value: string | undefined) {
      this._roleArn = value;
    }
    public resetRoleArn() {
      this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get roleArnInput() {
      return this._roleArn
    }

    // rule - computed: false, optional: false, required: true
    private _rule?: string; 
    public get rule() {
      return this.getStringAttribute('rule');
    }
    public set rule(value: string) {
      this._rule = value;
    }
    // Temporarily expose input value. Use with caution.
    public get ruleInput() {
      return this._rule
    }

    // target_id - computed: true, optional: true, required: false
    private _targetId?: string | undefined; 
    public get targetId() {
      return this.getStringAttribute('target_id');
    }
    public set targetId(value: string | undefined) {
      this._targetId = value;
    }
    public resetTargetId() {
      this._targetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get targetIdInput() {
      return this._targetId
    }

    // batch_target - computed: false, optional: true, required: false
    private _batchTarget?: CloudwatchEventTargetBatchTarget | undefined; 
    private __batchTargetOutput = new CloudwatchEventTargetBatchTargetOutputReference(this as any, "batch_target", true);
    public get batchTarget() {
      return this.__batchTargetOutput;
    }
    public putBatchTarget(value: CloudwatchEventTargetBatchTarget | undefined) {
      this._batchTarget = value;
    }
    public resetBatchTarget() {
      this._batchTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get batchTargetInput() {
      return this._batchTarget
    }

    // dead_letter_config - computed: false, optional: true, required: false
    private _deadLetterConfig?: CloudwatchEventTargetDeadLetterConfig | undefined; 
    private __deadLetterConfigOutput = new CloudwatchEventTargetDeadLetterConfigOutputReference(this as any, "dead_letter_config", true);
    public get deadLetterConfig() {
      return this.__deadLetterConfigOutput;
    }
    public putDeadLetterConfig(value: CloudwatchEventTargetDeadLetterConfig | undefined) {
      this._deadLetterConfig = value;
    }
    public resetDeadLetterConfig() {
      this._deadLetterConfig = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get deadLetterConfigInput() {
      return this._deadLetterConfig
    }

    // ecs_target - computed: false, optional: true, required: false
    private _ecsTarget?: CloudwatchEventTargetEcsTarget | undefined; 
    private __ecsTargetOutput = new CloudwatchEventTargetEcsTargetOutputReference(this as any, "ecs_target", true);
    public get ecsTarget() {
      return this.__ecsTargetOutput;
    }
    public putEcsTarget(value: CloudwatchEventTargetEcsTarget | undefined) {
      this._ecsTarget = value;
    }
    public resetEcsTarget() {
      this._ecsTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get ecsTargetInput() {
      return this._ecsTarget
    }

    // http_target - computed: false, optional: true, required: false
    private _httpTarget?: CloudwatchEventTargetHttpTarget | undefined; 
    private __httpTargetOutput = new CloudwatchEventTargetHttpTargetOutputReference(this as any, "http_target", true);
    public get httpTarget() {
      return this.__httpTargetOutput;
    }
    public putHttpTarget(value: CloudwatchEventTargetHttpTarget | undefined) {
      this._httpTarget = value;
    }
    public resetHttpTarget() {
      this._httpTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get httpTargetInput() {
      return this._httpTarget
    }

    // input_transformer - computed: false, optional: true, required: false
    private _inputTransformer?: CloudwatchEventTargetInputTransformer | undefined; 
    private __inputTransformerOutput = new CloudwatchEventTargetInputTransformerOutputReference(this as any, "input_transformer", true);
    public get inputTransformer() {
      return this.__inputTransformerOutput;
    }
    public putInputTransformer(value: CloudwatchEventTargetInputTransformer | undefined) {
      this._inputTransformer = value;
    }
    public resetInputTransformer() {
      this._inputTransformer = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get inputTransformerInput() {
      return this._inputTransformer
    }

    // kinesis_target - computed: false, optional: true, required: false
    private _kinesisTarget?: CloudwatchEventTargetKinesisTarget | undefined; 
    private __kinesisTargetOutput = new CloudwatchEventTargetKinesisTargetOutputReference(this as any, "kinesis_target", true);
    public get kinesisTarget() {
      return this.__kinesisTargetOutput;
    }
    public putKinesisTarget(value: CloudwatchEventTargetKinesisTarget | undefined) {
      this._kinesisTarget = value;
    }
    public resetKinesisTarget() {
      this._kinesisTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get kinesisTargetInput() {
      return this._kinesisTarget
    }

    // redshift_target - computed: false, optional: true, required: false
    private _redshiftTarget?: CloudwatchEventTargetRedshiftTarget | undefined; 
    private __redshiftTargetOutput = new CloudwatchEventTargetRedshiftTargetOutputReference(this as any, "redshift_target", true);
    public get redshiftTarget() {
      return this.__redshiftTargetOutput;
    }
    public putRedshiftTarget(value: CloudwatchEventTargetRedshiftTarget | undefined) {
      this._redshiftTarget = value;
    }
    public resetRedshiftTarget() {
      this._redshiftTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get redshiftTargetInput() {
      return this._redshiftTarget
    }

    // retry_policy - computed: false, optional: true, required: false
    private _retryPolicy?: CloudwatchEventTargetRetryPolicy | undefined; 
    private __retryPolicyOutput = new CloudwatchEventTargetRetryPolicyOutputReference(this as any, "retry_policy", true);
    public get retryPolicy() {
      return this.__retryPolicyOutput;
    }
    public putRetryPolicy(value: CloudwatchEventTargetRetryPolicy | undefined) {
      this._retryPolicy = value;
    }
    public resetRetryPolicy() {
      this._retryPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get retryPolicyInput() {
      return this._retryPolicy
    }

    // run_command_targets - computed: false, optional: true, required: false
    private _runCommandTargets?: CloudwatchEventTargetRunCommandTargets[] | undefined; 
    public get runCommandTargets() {
      // Getting the computed value is not yet implemented
      return this.interpolationForAttribute('run_command_targets') as any;
    }
    public set runCommandTargets(value: CloudwatchEventTargetRunCommandTargets[] | undefined) {
      this._runCommandTargets = value;
    }
    public resetRunCommandTargets() {
      this._runCommandTargets = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get runCommandTargetsInput() {
      return this._runCommandTargets
    }

    // sqs_target - computed: false, optional: true, required: false
    private _sqsTarget?: CloudwatchEventTargetSqsTarget | undefined; 
    private __sqsTargetOutput = new CloudwatchEventTargetSqsTargetOutputReference(this as any, "sqs_target", true);
    public get sqsTarget() {
      return this.__sqsTargetOutput;
    }
    public putSqsTarget(value: CloudwatchEventTargetSqsTarget | undefined) {
      this._sqsTarget = value;
    }
    public resetSqsTarget() {
      this._sqsTarget = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get sqsTargetInput() {
      return this._sqsTarget
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        arn: cdktf.stringToTerraform(this._arn),
        event_bus_name: cdktf.stringToTerraform(this._eventBusName),
        input: cdktf.stringToTerraform(this._input),
        input_path: cdktf.stringToTerraform(this._inputPath),
        role_arn: cdktf.stringToTerraform(this._roleArn),
        rule: cdktf.stringToTerraform(this._rule),
        target_id: cdktf.stringToTerraform(this._targetId),
        batch_target: cloudwatchEventTargetBatchTargetToTerraform(this._batchTarget),
        dead_letter_config: cloudwatchEventTargetDeadLetterConfigToTerraform(this._deadLetterConfig),
        ecs_target: cloudwatchEventTargetEcsTargetToTerraform(this._ecsTarget),
        http_target: cloudwatchEventTargetHttpTargetToTerraform(this._httpTarget),
        input_transformer: cloudwatchEventTargetInputTransformerToTerraform(this._inputTransformer),
        kinesis_target: cloudwatchEventTargetKinesisTargetToTerraform(this._kinesisTarget),
        redshift_target: cloudwatchEventTargetRedshiftTargetToTerraform(this._redshiftTarget),
        retry_policy: cloudwatchEventTargetRetryPolicyToTerraform(this._retryPolicy),
        run_command_targets: cdktf.listMapper(cloudwatchEventTargetRunCommandTargetsToTerraform)(this._runCommandTargets),
        sqs_target: cloudwatchEventTargetSqsTargetToTerraform(this._sqsTarget),
      };
    }
  }
  export interface DataAwsCloudwatchEventConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_connection.html#name DataAwsCloudwatchEventConnection#name}
    */
    readonly name: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_connection.html aws_cloudwatch_event_connection}
  */
  export class DataAwsCloudwatchEventConnection extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_connection";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_connection.html aws_cloudwatch_event_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventConnectionConfig
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudwatchEventConnectionConfig) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_connection',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._name = config.name;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // authorization_type - computed: true, optional: false, required: false
    public get authorizationType() {
      return this.getStringAttribute('authorization_type');
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

    // secret_arn - computed: true, optional: false, required: false
    public get secretArn() {
      return this.getStringAttribute('secret_arn');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name: cdktf.stringToTerraform(this._name),
      };
    }
  }
  export interface DataAwsCloudwatchEventSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html#name_prefix DataAwsCloudwatchEventSource#name_prefix}
    */
    readonly namePrefix?: string;
  }

  /**
  * Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source}
  */
  export class DataAwsCloudwatchEventSource extends cdktf.TerraformDataSource {

    // =================
    // STATIC PROPERTIES
    // =================
    public static readonly tfResourceType: string = "aws_cloudwatch_event_source";

    // ===========
    // INITIALIZER
    // ===========

    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventSourceConfig = {}
    */
    public constructor(scope: Construct, id: string, config: DataAwsCloudwatchEventSourceConfig = {}) {
      super(scope, id, {
        terraformResourceType: 'aws_cloudwatch_event_source',
        terraformGeneratorMetadata: {
          providerName: 'aws'
        },
        provider: config.provider,
        dependsOn: config.dependsOn,
        count: config.count,
        lifecycle: config.lifecycle
      });
      this._namePrefix = config.namePrefix;
    }

    // ==========
    // ATTRIBUTES
    // ==========

    // arn - computed: true, optional: false, required: false
    public get arn() {
      return this.getStringAttribute('arn');
    }

    // created_by - computed: true, optional: false, required: false
    public get createdBy() {
      return this.getStringAttribute('created_by');
    }

    // id - computed: true, optional: true, required: false
    public get id() {
      return this.getStringAttribute('id');
    }

    // name - computed: true, optional: false, required: false
    public get name() {
      return this.getStringAttribute('name');
    }

    // name_prefix - computed: false, optional: true, required: false
    private _namePrefix?: string | undefined; 
    public get namePrefix() {
      return this.getStringAttribute('name_prefix');
    }
    public set namePrefix(value: string | undefined) {
      this._namePrefix = value;
    }
    public resetNamePrefix() {
      this._namePrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    public get namePrefixInput() {
      return this._namePrefix
    }

    // state - computed: true, optional: false, required: false
    public get state() {
      return this.getStringAttribute('state');
    }

    // =========
    // SYNTHESIS
    // =========

    protected synthesizeAttributes(): { [name: string]: any } {
      return {
        name_prefix: cdktf.stringToTerraform(this._namePrefix),
      };
    }
  }
}
