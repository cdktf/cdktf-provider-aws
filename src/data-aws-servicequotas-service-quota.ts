// https://www.terraform.io/docs/providers/aws/r/data_aws_servicequotas_service_quota.html
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
      "global_quota": {
        "type": "bool",
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "quota_code": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "quota_name": {
        "type": "string",
        "optional": true,
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
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsServicequotasServiceQuotaConfig extends TerraformMetaArguments {
  readonly quotaCode?: string;
  readonly quotaName?: string;
  readonly serviceCode: string;
}

// Resource

export class DataAwsServicequotasServiceQuota extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

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

  // global_quota - computed: true, optional: false, required: true
  public get globalQuota() {
    return this.getBooleanAttribute('global_quota');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // quota_code - computed: true, optional: true, required: false
  private _quotaCode?: string;
  public get quotaCode() {
    return this._quotaCode ?? this.getStringAttribute('quota_code');
  }
  public set quotaCode(value: string | undefined) {
    this._quotaCode = value;
  }

  // quota_name - computed: true, optional: true, required: false
  private _quotaName?: string;
  public get quotaName() {
    return this._quotaName ?? this.getStringAttribute('quota_name');
  }
  public set quotaName(value: string | undefined) {
    this._quotaName = value;
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

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getNumberAttribute('value');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      quota_code: this._quotaCode,
      quota_name: this._quotaName,
      service_code: this._serviceCode,
    };
  }
}
