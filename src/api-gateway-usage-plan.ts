// https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayUsagePlanConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly productCode?: string;
  readonly tags?: { [key: string]: string };
  /** api_stages block */
  readonly apiStages?: ApiGatewayUsagePlanApiStages[];
  /** quota_settings block */
  readonly quotaSettings?: ApiGatewayUsagePlanQuotaSettings[];
  /** throttle_settings block */
  readonly throttleSettings?: ApiGatewayUsagePlanThrottleSettings[];
}
export interface ApiGatewayUsagePlanApiStages {
  readonly apiId: string;
  readonly stage: string;
}

function apiGatewayUsagePlanApiStagesToTerraform(struct?: ApiGatewayUsagePlanApiStages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    stage: cdktf.stringToTerraform(struct!.stage),
  }
}

export interface ApiGatewayUsagePlanQuotaSettings {
  readonly limit: number;
  readonly offset?: number;
  readonly period: string;
}

function apiGatewayUsagePlanQuotaSettingsToTerraform(struct?: ApiGatewayUsagePlanQuotaSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    period: cdktf.stringToTerraform(struct!.period),
  }
}

export interface ApiGatewayUsagePlanThrottleSettings {
  readonly burstLimit?: number;
  readonly rateLimit?: number;
}

function apiGatewayUsagePlanThrottleSettingsToTerraform(struct?: ApiGatewayUsagePlanThrottleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


// Resource

export class ApiGatewayUsagePlan extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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

  // product_code - computed: false, optional: true, required: false
  private _productCode?: string;
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string ) {
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

  // api_stages - computed: false, optional: true, required: false
  private _apiStages?: ApiGatewayUsagePlanApiStages[];
  public get apiStages() {
    return this.interpolationForAttribute('api_stages') as any;
  }
  public set apiStages(value: ApiGatewayUsagePlanApiStages[] ) {
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
  private _quotaSettings?: ApiGatewayUsagePlanQuotaSettings[];
  public get quotaSettings() {
    return this.interpolationForAttribute('quota_settings') as any;
  }
  public set quotaSettings(value: ApiGatewayUsagePlanQuotaSettings[] ) {
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
  private _throttleSettings?: ApiGatewayUsagePlanThrottleSettings[];
  public get throttleSettings() {
    return this.interpolationForAttribute('throttle_settings') as any;
  }
  public set throttleSettings(value: ApiGatewayUsagePlanThrottleSettings[] ) {
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
      api_stages: cdktf.listMapper(apiGatewayUsagePlanApiStagesToTerraform)(this._apiStages),
      quota_settings: cdktf.listMapper(apiGatewayUsagePlanQuotaSettingsToTerraform)(this._quotaSettings),
      throttle_settings: cdktf.listMapper(apiGatewayUsagePlanThrottleSettingsToTerraform)(this._throttleSettings),
    };
  }
}
