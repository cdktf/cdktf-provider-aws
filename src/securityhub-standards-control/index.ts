// https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubStandardsControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}
  */
  readonly controlStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}
  */
  readonly disabledReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#id SecurityhubStandardsControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}
  */
  readonly standardsControlArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control aws_securityhub_standards_control}
*/
export class SecurityhubStandardsControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_standards_control";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_standards_control aws_securityhub_standards_control} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubStandardsControlConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubStandardsControlConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_standards_control',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlStatus = config.controlStatus;
    this._disabledReason = config.disabledReason;
    this._id = config.id;
    this._standardsControlArn = config.standardsControlArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // control_id - computed: true, optional: false, required: false
  public get controlId() {
    return this.getStringAttribute('control_id');
  }

  // control_status - computed: false, optional: false, required: true
  private _controlStatus?: string; 
  public get controlStatus() {
    return this.getStringAttribute('control_status');
  }
  public set controlStatus(value: string) {
    this._controlStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlStatusInput() {
    return this._controlStatus;
  }

  // control_status_updated_at - computed: true, optional: false, required: false
  public get controlStatusUpdatedAt() {
    return this.getStringAttribute('control_status_updated_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disabled_reason - computed: true, optional: true, required: false
  private _disabledReason?: string; 
  public get disabledReason() {
    return this.getStringAttribute('disabled_reason');
  }
  public set disabledReason(value: string) {
    this._disabledReason = value;
  }
  public resetDisabledReason() {
    this._disabledReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledReasonInput() {
    return this._disabledReason;
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

  // related_requirements - computed: true, optional: false, required: false
  public get relatedRequirements() {
    return this.getListAttribute('related_requirements');
  }

  // remediation_url - computed: true, optional: false, required: false
  public get remediationUrl() {
    return this.getStringAttribute('remediation_url');
  }

  // severity_rating - computed: true, optional: false, required: false
  public get severityRating() {
    return this.getStringAttribute('severity_rating');
  }

  // standards_control_arn - computed: false, optional: false, required: true
  private _standardsControlArn?: string; 
  public get standardsControlArn() {
    return this.getStringAttribute('standards_control_arn');
  }
  public set standardsControlArn(value: string) {
    this._standardsControlArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsControlArnInput() {
    return this._standardsControlArn;
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_status: cdktf.stringToTerraform(this._controlStatus),
      disabled_reason: cdktf.stringToTerraform(this._disabledReason),
      id: cdktf.stringToTerraform(this._id),
      standards_control_arn: cdktf.stringToTerraform(this._standardsControlArn),
    };
  }
}
