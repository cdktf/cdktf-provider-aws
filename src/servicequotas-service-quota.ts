// https://www.terraform.io/docs/providers/aws/r/servicequotas_service_quota.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "adjustable": {
        "type": "bool",
        "computed": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "default_value": {
        "type": "number",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "quota_code": {
        "type": "string",
        "required": true
      },
      "quota_name": {
        "type": "string",
        "computed": true
      },
      "request_id": {
        "type": "string",
        "computed": true
      },
      "request_status": {
        "type": "string",
        "computed": true
      },
      "service_code": {
        "type": "string",
        "required": true
      },
      "service_name": {
        "type": "string",
        "computed": true
      },
      "value": {
        "type": "number",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ServicequotasServiceQuotaConfig extends TerraformMetaArguments {
  readonly quotaCode: string;
  readonly serviceCode: string;
  readonly value: number;
}

// Resource

export class ServicequotasServiceQuota extends TerraformResource {

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

  // adjustable - computed: true, optional: false, required: true
  public get adjustable() {
    return this.getBooleanAttribute('adjustable');
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // default_value - computed: true, optional: false, required: true
  public get defaultValue() {
    return this.getNumberAttribute('default_value');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // quota_code - computed: false, optional: false, required: true
  private _quotaCode: string;
  public get quotaCode() {
    return this._quotaCode;
  }
  public set quotaCode(value: string) {
    this._quotaCode = value;
  }

  // quota_name - computed: true, optional: false, required: true
  public get quotaName() {
    return this.getStringAttribute('quota_name');
  }

  // request_id - computed: true, optional: false, required: true
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // request_status - computed: true, optional: false, required: true
  public get requestStatus() {
    return this.getStringAttribute('request_status');
  }

  // service_code - computed: false, optional: false, required: true
  private _serviceCode: string;
  public get serviceCode() {
    return this._serviceCode;
  }
  public set serviceCode(value: string) {
    this._serviceCode = value;
  }

  // service_name - computed: true, optional: false, required: true
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // value - computed: false, optional: false, required: true
  private _value: number;
  public get value() {
    return this._value;
  }
  public set value(value: number) {
    this._value = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      quota_code: this._quotaCode,
      service_code: this._serviceCode,
      value: this._value,
    };
  }
}
