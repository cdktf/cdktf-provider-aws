// https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "default_sender_id": {
        "type": "string",
        "optional": true
      },
      "default_sms_type": {
        "type": "string",
        "optional": true
      },
      "delivery_status_iam_role_arn": {
        "type": "string",
        "optional": true
      },
      "delivery_status_success_sampling_rate": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "monthly_spend_limit": {
        "type": "string",
        "optional": true
      },
      "usage_report_s3_bucket": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SnsSmsPreferencesConfig extends TerraformMetaArguments {
  readonly defaultSenderId?: string;
  readonly defaultSmsType?: string;
  readonly deliveryStatusIamRoleArn?: string;
  readonly deliveryStatusSuccessSamplingRate?: string;
  readonly monthlySpendLimit?: string;
  readonly usageReportS3Bucket?: string;
}

// Resource

export class SnsSmsPreferences extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SnsSmsPreferencesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_sms_preferences',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultSenderId = config.defaultSenderId;
    this._defaultSmsType = config.defaultSmsType;
    this._deliveryStatusIamRoleArn = config.deliveryStatusIamRoleArn;
    this._deliveryStatusSuccessSamplingRate = config.deliveryStatusSuccessSamplingRate;
    this._monthlySpendLimit = config.monthlySpendLimit;
    this._usageReportS3Bucket = config.usageReportS3Bucket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_sender_id - computed: false, optional: true, required: false
  private _defaultSenderId?: string;
  public get defaultSenderId() {
    return this._defaultSenderId;
  }
  public set defaultSenderId(value: string | undefined) {
    this._defaultSenderId = value;
  }

  // default_sms_type - computed: false, optional: true, required: false
  private _defaultSmsType?: string;
  public get defaultSmsType() {
    return this._defaultSmsType;
  }
  public set defaultSmsType(value: string | undefined) {
    this._defaultSmsType = value;
  }

  // delivery_status_iam_role_arn - computed: false, optional: true, required: false
  private _deliveryStatusIamRoleArn?: string;
  public get deliveryStatusIamRoleArn() {
    return this._deliveryStatusIamRoleArn;
  }
  public set deliveryStatusIamRoleArn(value: string | undefined) {
    this._deliveryStatusIamRoleArn = value;
  }

  // delivery_status_success_sampling_rate - computed: false, optional: true, required: false
  private _deliveryStatusSuccessSamplingRate?: string;
  public get deliveryStatusSuccessSamplingRate() {
    return this._deliveryStatusSuccessSamplingRate;
  }
  public set deliveryStatusSuccessSamplingRate(value: string | undefined) {
    this._deliveryStatusSuccessSamplingRate = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // monthly_spend_limit - computed: false, optional: true, required: false
  private _monthlySpendLimit?: string;
  public get monthlySpendLimit() {
    return this._monthlySpendLimit;
  }
  public set monthlySpendLimit(value: string | undefined) {
    this._monthlySpendLimit = value;
  }

  // usage_report_s3_bucket - computed: false, optional: true, required: false
  private _usageReportS3Bucket?: string;
  public get usageReportS3Bucket() {
    return this._usageReportS3Bucket;
  }
  public set usageReportS3Bucket(value: string | undefined) {
    this._usageReportS3Bucket = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      default_sender_id: this._defaultSenderId,
      default_sms_type: this._defaultSmsType,
      delivery_status_iam_role_arn: this._deliveryStatusIamRoleArn,
      delivery_status_success_sampling_rate: this._deliveryStatusSuccessSamplingRate,
      monthly_spend_limit: this._monthlySpendLimit,
      usage_report_s3_bucket: this._usageReportS3Bucket,
    };
  }
}
