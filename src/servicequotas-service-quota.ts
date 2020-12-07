// https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicequotasServiceQuotaConfig extends cdktf.TerraformMetaArguments {
  readonly quotaCode: string;
  readonly serviceCode: string;
  readonly value: number;
}

// Resource

export class ServicequotasServiceQuota extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ServicequotasServiceQuotaConfig) {
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
    this._serviceCode = config.serviceCode;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adjustable - computed: true, optional: false, required: false
  public get adjustable() {
    return this.getBooleanAttribute('adjustable');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // quota_code - computed: false, optional: false, required: true
  private _quotaCode: string;
  public get quotaCode() {
    return this.getStringAttribute('quota_code');
  }
  public set quotaCode(value: string) {
    this._quotaCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaCodeInput() {
    return this._quotaCode
  }

  // quota_name - computed: true, optional: false, required: false
  public get quotaName() {
    return this.getStringAttribute('quota_name');
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // request_status - computed: true, optional: false, required: false
  public get requestStatus() {
    return this.getStringAttribute('request_status');
  }

  // service_code - computed: false, optional: false, required: true
  private _serviceCode: string;
  public get serviceCode() {
    return this.getStringAttribute('service_code');
  }
  public set serviceCode(value: string) {
    this._serviceCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCodeInput() {
    return this._serviceCode
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // value - computed: false, optional: false, required: true
  private _value: number;
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
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
      quota_code: cdktf.stringToTerraform(this._quotaCode),
      service_code: cdktf.stringToTerraform(this._serviceCode),
      value: cdktf.numberToTerraform(this._value),
    };
  }
}
