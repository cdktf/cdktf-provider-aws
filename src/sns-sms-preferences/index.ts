/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnsSmsPreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#default_sender_id SnsSmsPreferences#default_sender_id}
  */
  readonly defaultSenderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#default_sms_type SnsSmsPreferences#default_sms_type}
  */
  readonly defaultSmsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#delivery_status_iam_role_arn SnsSmsPreferences#delivery_status_iam_role_arn}
  */
  readonly deliveryStatusIamRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#delivery_status_success_sampling_rate SnsSmsPreferences#delivery_status_success_sampling_rate}
  */
  readonly deliveryStatusSuccessSamplingRate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#id SnsSmsPreferences#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#monthly_spend_limit SnsSmsPreferences#monthly_spend_limit}
  */
  readonly monthlySpendLimit?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#region SnsSmsPreferences#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#usage_report_s3_bucket SnsSmsPreferences#usage_report_s3_bucket}
  */
  readonly usageReportS3Bucket?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences aws_sns_sms_preferences}
*/
export class SnsSmsPreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sns_sms_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnsSmsPreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnsSmsPreferences to import
  * @param importFromId The id of the existing SnsSmsPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnsSmsPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sns_sms_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/sns_sms_preferences aws_sns_sms_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnsSmsPreferencesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnsSmsPreferencesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_sns_sms_preferences',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.10.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultSenderId = config.defaultSenderId;
    this._defaultSmsType = config.defaultSmsType;
    this._deliveryStatusIamRoleArn = config.deliveryStatusIamRoleArn;
    this._deliveryStatusSuccessSamplingRate = config.deliveryStatusSuccessSamplingRate;
    this._id = config.id;
    this._monthlySpendLimit = config.monthlySpendLimit;
    this._region = config.region;
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
  public set defaultSenderId(value: string) {
    this._defaultSenderId = value;
  }
  public resetDefaultSenderId() {
    this._defaultSenderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSenderIdInput() {
    return this._defaultSenderId;
  }

  // default_sms_type - computed: false, optional: true, required: false
  private _defaultSmsType?: string; 
  public get defaultSmsType() {
    return this.getStringAttribute('default_sms_type');
  }
  public set defaultSmsType(value: string) {
    this._defaultSmsType = value;
  }
  public resetDefaultSmsType() {
    this._defaultSmsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSmsTypeInput() {
    return this._defaultSmsType;
  }

  // delivery_status_iam_role_arn - computed: false, optional: true, required: false
  private _deliveryStatusIamRoleArn?: string; 
  public get deliveryStatusIamRoleArn() {
    return this.getStringAttribute('delivery_status_iam_role_arn');
  }
  public set deliveryStatusIamRoleArn(value: string) {
    this._deliveryStatusIamRoleArn = value;
  }
  public resetDeliveryStatusIamRoleArn() {
    this._deliveryStatusIamRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStatusIamRoleArnInput() {
    return this._deliveryStatusIamRoleArn;
  }

  // delivery_status_success_sampling_rate - computed: false, optional: true, required: false
  private _deliveryStatusSuccessSamplingRate?: string; 
  public get deliveryStatusSuccessSamplingRate() {
    return this.getStringAttribute('delivery_status_success_sampling_rate');
  }
  public set deliveryStatusSuccessSamplingRate(value: string) {
    this._deliveryStatusSuccessSamplingRate = value;
  }
  public resetDeliveryStatusSuccessSamplingRate() {
    this._deliveryStatusSuccessSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryStatusSuccessSamplingRateInput() {
    return this._deliveryStatusSuccessSamplingRate;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // monthly_spend_limit - computed: true, optional: true, required: false
  private _monthlySpendLimit?: number; 
  public get monthlySpendLimit() {
    return this.getNumberAttribute('monthly_spend_limit');
  }
  public set monthlySpendLimit(value: number) {
    this._monthlySpendLimit = value;
  }
  public resetMonthlySpendLimit() {
    this._monthlySpendLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlySpendLimitInput() {
    return this._monthlySpendLimit;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // usage_report_s3_bucket - computed: false, optional: true, required: false
  private _usageReportS3Bucket?: string; 
  public get usageReportS3Bucket() {
    return this.getStringAttribute('usage_report_s3_bucket');
  }
  public set usageReportS3Bucket(value: string) {
    this._usageReportS3Bucket = value;
  }
  public resetUsageReportS3Bucket() {
    this._usageReportS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageReportS3BucketInput() {
    return this._usageReportS3Bucket;
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
      id: cdktf.stringToTerraform(this._id),
      monthly_spend_limit: cdktf.numberToTerraform(this._monthlySpendLimit),
      region: cdktf.stringToTerraform(this._region),
      usage_report_s3_bucket: cdktf.stringToTerraform(this._usageReportS3Bucket),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_sender_id: {
        value: cdktf.stringToHclTerraform(this._defaultSenderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_sms_type: {
        value: cdktf.stringToHclTerraform(this._defaultSmsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_status_iam_role_arn: {
        value: cdktf.stringToHclTerraform(this._deliveryStatusIamRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_status_success_sampling_rate: {
        value: cdktf.stringToHclTerraform(this._deliveryStatusSuccessSamplingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monthly_spend_limit: {
        value: cdktf.numberToHclTerraform(this._monthlySpendLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_report_s3_bucket: {
        value: cdktf.stringToHclTerraform(this._usageReportS3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
