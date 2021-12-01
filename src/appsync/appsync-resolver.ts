// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS AppSync
*/
export interface AppsyncResolverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#api_id AppsyncResolver#api_id}
  */
  readonly apiId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#data_source AppsyncResolver#data_source}
  */
  readonly dataSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#field AppsyncResolver#field}
  */
  readonly field: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#kind AppsyncResolver#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#request_template AppsyncResolver#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#response_template AppsyncResolver#response_template}
  */
  readonly responseTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#type AppsyncResolver#type}
  */
  readonly type: string;
  /**
  * caching_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#caching_config AppsyncResolver#caching_config}
  */
  readonly cachingConfig?: AppsyncResolverCachingConfig;
  /**
  * pipeline_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#pipeline_config AppsyncResolver#pipeline_config}
  */
  readonly pipelineConfig?: AppsyncResolverPipelineConfig;
}
export interface AppsyncResolverCachingConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#caching_keys AppsyncResolver#caching_keys}
  */
  readonly cachingKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#ttl AppsyncResolver#ttl}
  */
  readonly ttl?: number;
}

export function appsyncResolverCachingConfigToTerraform(struct?: AppsyncResolverCachingConfigOutputReference | AppsyncResolverCachingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachingKeys),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export class AppsyncResolverCachingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncResolverCachingConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cachingKeys) {
      hasAnyValues = true;
      internalValueResult.cachingKeys = this._cachingKeys;
    }
    if (this._ttl) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncResolverCachingConfig | undefined) {
    if (value === undefined) {
      this._cachingKeys = undefined;
      this._ttl = undefined;
    }
    else {
      this._cachingKeys = value.cachingKeys;
      this._ttl = value.ttl;
    }
  }

  // caching_keys - computed: false, optional: true, required: false
  private _cachingKeys?: string[]; 
  public get cachingKeys() {
    return this.getListAttribute('caching_keys');
  }
  public set cachingKeys(value: string[]) {
    this._cachingKeys = value;
  }
  public resetCachingKeys() {
    this._cachingKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingKeysInput() {
    return this._cachingKeys;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface AppsyncResolverPipelineConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html#functions AppsyncResolver#functions}
  */
  readonly functions?: string[];
}

export function appsyncResolverPipelineConfigToTerraform(struct?: AppsyncResolverPipelineConfigOutputReference | AppsyncResolverPipelineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    functions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.functions),
  }
}

export class AppsyncResolverPipelineConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): AppsyncResolverPipelineConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._functions) {
      hasAnyValues = true;
      internalValueResult.functions = this._functions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsyncResolverPipelineConfig | undefined) {
    if (value === undefined) {
      this._functions = undefined;
    }
    else {
      this._functions = value.functions;
    }
  }

  // functions - computed: false, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return this.getListAttribute('functions');
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver}
*/
export class AppsyncResolver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_appsync_resolver";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html aws_appsync_resolver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsyncResolverConfig
  */
  public constructor(scope: Construct, id: string, config: AppsyncResolverConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_appsync_resolver',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiId = config.apiId;
    this._dataSource = config.dataSource;
    this._field = config.field;
    this._kind = config.kind;
    this._requestTemplate = config.requestTemplate;
    this._responseTemplate = config.responseTemplate;
    this._type = config.type;
    this._cachingConfig.internalValue = config.cachingConfig;
    this._pipelineConfig.internalValue = config.pipelineConfig;
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
    return this._apiId;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // request_template - computed: false, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // response_template - computed: false, optional: true, required: false
  private _responseTemplate?: string; 
  public get responseTemplate() {
    return this.getStringAttribute('response_template');
  }
  public set responseTemplate(value: string) {
    this._responseTemplate = value;
  }
  public resetResponseTemplate() {
    this._responseTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplateInput() {
    return this._responseTemplate;
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
    return this._type;
  }

  // caching_config - computed: false, optional: true, required: false
  private _cachingConfig = new AppsyncResolverCachingConfigOutputReference(this as any, "caching_config", true);
  public get cachingConfig() {
    return this._cachingConfig;
  }
  public putCachingConfig(value: AppsyncResolverCachingConfig) {
    this._cachingConfig.internalValue = value;
  }
  public resetCachingConfig() {
    this._cachingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingConfigInput() {
    return this._cachingConfig.internalValue;
  }

  // pipeline_config - computed: false, optional: true, required: false
  private _pipelineConfig = new AppsyncResolverPipelineConfigOutputReference(this as any, "pipeline_config", true);
  public get pipelineConfig() {
    return this._pipelineConfig;
  }
  public putPipelineConfig(value: AppsyncResolverPipelineConfig) {
    this._pipelineConfig.internalValue = value;
  }
  public resetPipelineConfig() {
    this._pipelineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigInput() {
    return this._pipelineConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      data_source: cdktf.stringToTerraform(this._dataSource),
      field: cdktf.stringToTerraform(this._field),
      kind: cdktf.stringToTerraform(this._kind),
      request_template: cdktf.stringToTerraform(this._requestTemplate),
      response_template: cdktf.stringToTerraform(this._responseTemplate),
      type: cdktf.stringToTerraform(this._type),
      caching_config: appsyncResolverCachingConfigToTerraform(this._cachingConfig.internalValue),
      pipeline_config: appsyncResolverPipelineConfigToTerraform(this._pipelineConfig.internalValue),
    };
  }
}
