// https://www.terraform.io/docs/providers/aws/r/api_gateway_usage_plan.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiGatewayUsagePlanConfig extends TerraformMetaArguments {
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
export interface ApiGatewayUsagePlanQuotaSettings {
  readonly limit: number;
  readonly offset?: number;
  readonly period: string;
}
export interface ApiGatewayUsagePlanThrottleSettings {
  readonly burstLimit?: number;
  readonly rateLimit?: number;
}

// Resource

export class ApiGatewayUsagePlan extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // product_code - computed: false, optional: true, required: false
  private _productCode?: string;
  public get productCode() {
    return this._productCode;
  }
  public set productCode(value: string | undefined) {
    this._productCode = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // api_stages - computed: false, optional: true, required: false
  private _apiStages?: ApiGatewayUsagePlanApiStages[];
  public get apiStages() {
    return this._apiStages;
  }
  public set apiStages(value: ApiGatewayUsagePlanApiStages[] | undefined) {
    this._apiStages = value;
  }

  // quota_settings - computed: false, optional: true, required: false
  private _quotaSettings?: ApiGatewayUsagePlanQuotaSettings[];
  public get quotaSettings() {
    return this._quotaSettings;
  }
  public set quotaSettings(value: ApiGatewayUsagePlanQuotaSettings[] | undefined) {
    this._quotaSettings = value;
  }

  // throttle_settings - computed: false, optional: true, required: false
  private _throttleSettings?: ApiGatewayUsagePlanThrottleSettings[];
  public get throttleSettings() {
    return this._throttleSettings;
  }
  public set throttleSettings(value: ApiGatewayUsagePlanThrottleSettings[] | undefined) {
    this._throttleSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      product_code: this._productCode,
      tags: this._tags,
      api_stages: this._apiStages,
      quota_settings: this._quotaSettings,
      throttle_settings: this._throttleSettings,
    };
  }
}
