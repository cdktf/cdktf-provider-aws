// https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

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
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#tags_all ApiGatewayUsagePlan#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
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
  readonly quotaSettings?: ApiGatewayUsagePlanQuotaSettings[];
  /**
  * throttle_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#throttle_settings ApiGatewayUsagePlan#throttle_settings}
  */
  readonly throttleSettings?: ApiGatewayUsagePlanThrottleSettings[];
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

function apiGatewayUsagePlanQuotaSettingsToTerraform(struct?: ApiGatewayUsagePlanQuotaSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    limit: cdktf.numberToTerraform(struct!.limit),
    offset: cdktf.numberToTerraform(struct!.offset),
    period: cdktf.stringToTerraform(struct!.period),
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

function apiGatewayUsagePlanThrottleSettingsToTerraform(struct?: ApiGatewayUsagePlanThrottleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html aws_api_gateway_usage_plan}
*/
export class ApiGatewayUsagePlan extends cdktf.TerraformResource {

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

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }
  public get tagsAll(): { [key: string]: string } {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string }) {
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
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      api_stages: cdktf.listMapper(apiGatewayUsagePlanApiStagesToTerraform)(this._apiStages),
      quota_settings: cdktf.listMapper(apiGatewayUsagePlanQuotaSettingsToTerraform)(this._quotaSettings),
      throttle_settings: cdktf.listMapper(apiGatewayUsagePlanThrottleSettingsToTerraform)(this._throttleSettings),
    };
  }
}
