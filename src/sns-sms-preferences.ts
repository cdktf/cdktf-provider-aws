// https://www.terraform.io/docs/providers/aws/r/sns_sms_preferences.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnsSmsPreferencesConfig extends cdktf.TerraformMetaArguments {
  readonly defaultSenderId?: string;
  readonly defaultSmsType?: string;
  readonly deliveryStatusIamRoleArn?: string;
  readonly deliveryStatusSuccessSamplingRate?: string;
  readonly monthlySpendLimit?: string;
  readonly usageReportS3Bucket?: string;
}

// Resource

export class SnsSmsPreferences extends cdktf.TerraformResource {

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
    return this.getStringAttribute('default_sender_id');
  }
  public set defaultSenderId(value: string ) {
    this._defaultSenderId = value;
  }
  public resetDefaultSenderId() {
    this._defaultSenderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSenderIdInput() {
    return this._defaultSenderId
  }

  // default_sms_type - computed: false, optional: true, required: false
  private _defaultSmsType?: string;
  public get defaultSmsType() {
    return this.getStringAttribute('default_sms_type');
  }
  public set defaultSmsType(value: string ) {
    this._defaultSmsType = value;
  }
  public resetDefaultSmsType() {
    this._defaultSmsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSmsTypeInput() {
    return this._defaultSmsType
  }

  // delivery_status_iam_role_arn - computed: false, optional: true, required: false
  private _deliveryStatusIamRoleArn?: string;
  public get deliveryStatusIamRoleArn() {
    return this.getStringAttribute('delivery_status_iam_role_arn');
  }
  public set deliveryStatusIamRoleArn(value: string ) {
    this._deliveryStatusIamRoleArn = value;
  }
  public resetDeliveryStatusIamRoleArn() {
    this._deliveryStatusIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStatusIamRoleArnInput() {
    return this._deliveryStatusIamRoleArn
  }

  // delivery_status_success_sampling_rate - computed: false, optional: true, required: false
  private _deliveryStatusSuccessSamplingRate?: string;
  public get deliveryStatusSuccessSamplingRate() {
    return this.getStringAttribute('delivery_status_success_sampling_rate');
  }
  public set deliveryStatusSuccessSamplingRate(value: string ) {
    this._deliveryStatusSuccessSamplingRate = value;
  }
  public resetDeliveryStatusSuccessSamplingRate() {
    this._deliveryStatusSuccessSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStatusSuccessSamplingRateInput() {
    return this._deliveryStatusSuccessSamplingRate
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // monthly_spend_limit - computed: false, optional: true, required: false
  private _monthlySpendLimit?: string;
  public get monthlySpendLimit() {
    return this.getStringAttribute('monthly_spend_limit');
  }
  public set monthlySpendLimit(value: string ) {
    this._monthlySpendLimit = value;
  }
  public resetMonthlySpendLimit() {
    this._monthlySpendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlySpendLimitInput() {
    return this._monthlySpendLimit
  }

  // usage_report_s3_bucket - computed: false, optional: true, required: false
  private _usageReportS3Bucket?: string;
  public get usageReportS3Bucket() {
    return this.getStringAttribute('usage_report_s3_bucket');
  }
  public set usageReportS3Bucket(value: string ) {
    this._usageReportS3Bucket = value;
  }
  public resetUsageReportS3Bucket() {
    this._usageReportS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageReportS3BucketInput() {
    return this._usageReportS3Bucket
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_sender_id: cdktf.stringToTerraform(this._defaultSenderId),
      default_sms_type: cdktf.stringToTerraform(this._defaultSmsType),
      delivery_status_iam_role_arn: cdktf.stringToTerraform(this._deliveryStatusIamRoleArn),
      delivery_status_success_sampling_rate: cdktf.stringToTerraform(this._deliveryStatusSuccessSamplingRate),
      monthly_spend_limit: cdktf.stringToTerraform(this._monthlySpendLimit),
      usage_report_s3_bucket: cdktf.stringToTerraform(this._usageReportS3Bucket),
    };
  }
}
