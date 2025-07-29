/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubStandardsControlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control#control_status SecurityhubStandardsControl#control_status}
  */
  readonly controlStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control#disabled_reason SecurityhubStandardsControl#disabled_reason}
  */
  readonly disabledReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control#id SecurityhubStandardsControl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control#region SecurityhubStandardsControl#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control#standards_control_arn SecurityhubStandardsControl#standards_control_arn}
  */
  readonly standardsControlArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control aws_securityhub_standards_control}
*/
export class SecurityhubStandardsControl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_standards_control";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityhubStandardsControl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubStandardsControl to import
  * @param importFromId The id of the existing SecurityhubStandardsControl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubStandardsControl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_standards_control", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/securityhub_standards_control aws_securityhub_standards_control} Resource
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
        providerVersion: '6.6.0',
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
    this._controlStatus = config.controlStatus;
    this._disabledReason = config.disabledReason;
    this._id = config.id;
    this._region = config.region;
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
      region: cdktf.stringToTerraform(this._region),
      standards_control_arn: cdktf.stringToTerraform(this._standardsControlArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_status: {
        value: cdktf.stringToHclTerraform(this._controlStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled_reason: {
        value: cdktf.stringToHclTerraform(this._disabledReason),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standards_control_arn: {
        value: cdktf.stringToHclTerraform(this._standardsControlArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
