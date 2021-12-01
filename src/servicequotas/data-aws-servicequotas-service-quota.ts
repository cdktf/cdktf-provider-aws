// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Service Quotas
*/
export interface DataAwsServicequotasServiceQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html#quota_code DataAwsServicequotasServiceQuota#quota_code}
  */
  readonly quotaCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html#quota_name DataAwsServicequotasServiceQuota#quota_name}
  */
  readonly quotaName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html#service_code DataAwsServicequotasServiceQuota#service_code}
  */
  readonly serviceCode: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota}
*/
export class DataAwsServicequotasServiceQuota extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_servicequotas_service_quota";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/servicequotas_service_quota.html aws_servicequotas_service_quota} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsServicequotasServiceQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsServicequotasServiceQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicequotas_service_quota',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._quotaCode = config.quotaCode;
    this._quotaName = config.quotaName;
    this._serviceCode = config.serviceCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustable - computed: true, optional: false, required: false
  public get adjustable() {
    return this.getBooleanAttribute('adjustable') as any;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }

  // global_quota - computed: true, optional: false, required: false
  public get globalQuota() {
    return this.getBooleanAttribute('global_quota') as any;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quota_code - computed: true, optional: true, required: false
  private _quotaCode?: string; 
  public get quotaCode() {
    return this.getStringAttribute('quota_code');
  }
  public set quotaCode(value: string) {
    this._quotaCode = value;
  }
  public resetQuotaCode() {
    this._quotaCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaCodeInput() {
    return this._quotaCode;
  }

  // quota_name - computed: true, optional: true, required: false
  private _quotaName?: string; 
  public get quotaName() {
    return this.getStringAttribute('quota_name');
  }
  public set quotaName(value: string) {
    this._quotaName = value;
  }
  public resetQuotaName() {
    this._quotaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaNameInput() {
    return this._quotaName;
  }

  // service_code - computed: false, optional: false, required: true
  private _serviceCode?: string; 
  public get serviceCode() {
    return this.getStringAttribute('service_code');
  }
  public set serviceCode(value: string) {
    this._serviceCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCodeInput() {
    return this._serviceCode;
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      quota_code: cdktf.stringToTerraform(this._quotaCode),
      quota_name: cdktf.stringToTerraform(this._quotaName),
      service_code: cdktf.stringToTerraform(this._serviceCode),
    };
  }
}
