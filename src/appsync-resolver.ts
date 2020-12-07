// https://www.terraform.io/docs/providers/aws/r/appsync_resolver.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsyncResolverConfig extends cdktf.TerraformMetaArguments {
  readonly apiId: string;
  readonly dataSource?: string;
  readonly field: string;
  readonly kind?: string;
  readonly requestTemplate: string;
  readonly responseTemplate: string;
  readonly type: string;
  /** caching_config block */
  readonly cachingConfig?: AppsyncResolverCachingConfig[];
  /** pipeline_config block */
  readonly pipelineConfig?: AppsyncResolverPipelineConfig[];
}
export interface AppsyncResolverCachingConfig {
  readonly cachingKeys?: string[];
  readonly ttl?: number;
}

function appsyncResolverCachingConfigToTerraform(struct?: AppsyncResolverCachingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    caching_keys: cdktf.listMapper(cdktf.stringToTerraform)(struct!.cachingKeys),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}

export interface AppsyncResolverPipelineConfig {
  readonly functions?: string[];
}

function appsyncResolverPipelineConfigToTerraform(struct?: AppsyncResolverPipelineConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    functions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.functions),
  }
}


// Resource

export class AppsyncResolver extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._cachingConfig = config.cachingConfig;
    this._pipelineConfig = config.pipelineConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId: string;
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource?: string;
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string ) {
    this._dataSource = value;
  }
  public resetDataSource() {
    this._dataSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource
  }

  // field - computed: false, optional: false, required: true
  private _field: string;
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field
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
  public set kind(value: string ) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind
  }

  // request_template - computed: false, optional: false, required: true
  private _requestTemplate: string;
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate
  }

  // response_template - computed: false, optional: false, required: true
  private _responseTemplate: string;
  public get responseTemplate() {
    return this.getStringAttribute('response_template');
  }
  public set responseTemplate(value: string) {
    this._responseTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTemplateInput() {
    return this._responseTemplate
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
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

  // caching_config - computed: false, optional: true, required: false
  private _cachingConfig?: AppsyncResolverCachingConfig[];
  public get cachingConfig() {
    return this.interpolationForAttribute('caching_config') as any;
  }
  public set cachingConfig(value: AppsyncResolverCachingConfig[] ) {
    this._cachingConfig = value;
  }
  public resetCachingConfig() {
    this._cachingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingConfigInput() {
    return this._cachingConfig
  }

  // pipeline_config - computed: false, optional: true, required: false
  private _pipelineConfig?: AppsyncResolverPipelineConfig[];
  public get pipelineConfig() {
    return this.interpolationForAttribute('pipeline_config') as any;
  }
  public set pipelineConfig(value: AppsyncResolverPipelineConfig[] ) {
    this._pipelineConfig = value;
  }
  public resetPipelineConfig() {
    this._pipelineConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineConfigInput() {
    return this._pipelineConfig
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
      caching_config: cdktf.listMapper(appsyncResolverCachingConfigToTerraform)(this._cachingConfig),
      pipeline_config: cdktf.listMapper(appsyncResolverPipelineConfigToTerraform)(this._pipelineConfig),
    };
  }
}
