// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* API Gateway
*/
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
export interface ApiGatewayUsagePlanApiStagesThrottle {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#burst_limit ApiGatewayUsagePlan#burst_limit}
  */
  readonly burstLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#path ApiGatewayUsagePlan#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#rate_limit ApiGatewayUsagePlan#rate_limit}
  */
  readonly rateLimit?: number;
}

export function apiGatewayUsagePlanApiStagesThrottleToTerraform(struct?: ApiGatewayUsagePlanApiStagesThrottle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_limit: cdktf.numberToTerraform(struct!.burstLimit),
    path: cdktf.stringToTerraform(struct!.path),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
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
  /**
  * throttle block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html#throttle ApiGatewayUsagePlan#throttle}
  */
  readonly throttle?: ApiGatewayUsagePlanApiStagesThrottle[];
}

export function apiGatewayUsagePlanApiStagesToTerraform(struct?: ApiGatewayUsagePlanApiStages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_id: cdktf.stringToTerraform(struct!.apiId),
    stage: cdktf.stringToTerraform(struct!.stage),
    throttle: cdktf.listMapper(apiGatewayUsagePlanApiStagesThrottleToTerraform)(struct!.throttle),
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

export function apiGatewayUsagePlanQuotaSettingsToTerraform(struct?: ApiGatewayUsagePlanQuotaSettingsOutputReference | ApiGatewayUsagePlanQuotaSettings): any {
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

  public get internalValue(): ApiGatewayUsagePlanQuotaSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._limit) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._offset) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._period) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayUsagePlanQuotaSettings | undefined) {
    if (value === undefined) {
      this._limit = undefined;
      this._offset = undefined;
      this._period = undefined;
    }
    else {
      this._limit = value.limit;
      this._offset = value.offset;
      this._period = value.period;
    }
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
    return this._limit;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
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
    return this._period;
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

export function apiGatewayUsagePlanThrottleSettingsToTerraform(struct?: ApiGatewayUsagePlanThrottleSettingsOutputReference | ApiGatewayUsagePlanThrottleSettings): any {
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

  public get internalValue(): ApiGatewayUsagePlanThrottleSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._burstLimit) {
      hasAnyValues = true;
      internalValueResult.burstLimit = this._burstLimit;
    }
    if (this._rateLimit) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayUsagePlanThrottleSettings | undefined) {
    if (value === undefined) {
      this._burstLimit = undefined;
      this._rateLimit = undefined;
    }
    else {
      this._burstLimit = value.burstLimit;
      this._rateLimit = value.rateLimit;
    }
  }

  // burst_limit - computed: false, optional: true, required: false
  private _burstLimit?: number; 
  public get burstLimit() {
    return this.getNumberAttribute('burst_limit');
  }
  public set burstLimit(value: number) {
    this._burstLimit = value;
  }
  public resetBurstLimit() {
    this._burstLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstLimitInput() {
    return this._burstLimit;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
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
    this._quotaSettings.internalValue = config.quotaSettings;
    this._throttleSettings.internalValue = config.throttleSettings;
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
    return this._name;
  }

  // product_code - computed: false, optional: true, required: false
  private _productCode?: string; 
  public get productCode() {
    return this.getStringAttribute('product_code');
  }
  public set productCode(value: string) {
    this._productCode = value;
  }
  public resetProductCode() {
    this._productCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productCodeInput() {
    return this._productCode;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // api_stages - computed: false, optional: true, required: false
  private _apiStages?: ApiGatewayUsagePlanApiStages[]; 
  public get apiStages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('api_stages') as any;
  }
  public set apiStages(value: ApiGatewayUsagePlanApiStages[]) {
    this._apiStages = value;
  }
  public resetApiStages() {
    this._apiStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiStagesInput() {
    return this._apiStages;
  }

  // quota_settings - computed: false, optional: true, required: false
  private _quotaSettings = new ApiGatewayUsagePlanQuotaSettingsOutputReference(this as any, "quota_settings", true);
  public get quotaSettings() {
    return this._quotaSettings;
  }
  public putQuotaSettings(value: ApiGatewayUsagePlanQuotaSettings) {
    this._quotaSettings.internalValue = value;
  }
  public resetQuotaSettings() {
    this._quotaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaSettingsInput() {
    return this._quotaSettings.internalValue;
  }

  // throttle_settings - computed: false, optional: true, required: false
  private _throttleSettings = new ApiGatewayUsagePlanThrottleSettingsOutputReference(this as any, "throttle_settings", true);
  public get throttleSettings() {
    return this._throttleSettings;
  }
  public putThrottleSettings(value: ApiGatewayUsagePlanThrottleSettings) {
    this._throttleSettings.internalValue = value;
  }
  public resetThrottleSettings() {
    this._throttleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleSettingsInput() {
    return this._throttleSettings.internalValue;
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
      quota_settings: apiGatewayUsagePlanQuotaSettingsToTerraform(this._quotaSettings.internalValue),
      throttle_settings: apiGatewayUsagePlanThrottleSettingsToTerraform(this._throttleSettings.internalValue),
    };
  }
}
