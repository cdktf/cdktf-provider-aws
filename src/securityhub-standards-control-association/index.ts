/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubStandardsControlAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association#association_status SecurityhubStandardsControlAssociation#association_status}
  */
  readonly associationStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association#security_control_id SecurityhubStandardsControlAssociation#security_control_id}
  */
  readonly securityControlId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association#standards_arn SecurityhubStandardsControlAssociation#standards_arn}
  */
  readonly standardsArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association#updated_reason SecurityhubStandardsControlAssociation#updated_reason}
  */
  readonly updatedReason?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association aws_securityhub_standards_control_association}
*/
export class SecurityhubStandardsControlAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_securityhub_standards_control_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityhubStandardsControlAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityhubStandardsControlAssociation to import
  * @param importFromId The id of the existing SecurityhubStandardsControlAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityhubStandardsControlAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_securityhub_standards_control_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.80.0/docs/resources/securityhub_standards_control_association aws_securityhub_standards_control_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubStandardsControlAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubStandardsControlAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_standards_control_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.80.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associationStatus = config.associationStatus;
    this._securityControlId = config.securityControlId;
    this._standardsArn = config.standardsArn;
    this._updatedReason = config.updatedReason;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_status - computed: false, optional: false, required: true
  private _associationStatus?: string; 
  public get associationStatus() {
    return this.getStringAttribute('association_status');
  }
  public set associationStatus(value: string) {
    this._associationStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationStatusInput() {
    return this._associationStatus;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // security_control_id - computed: false, optional: false, required: true
  private _securityControlId?: string; 
  public get securityControlId() {
    return this.getStringAttribute('security_control_id');
  }
  public set securityControlId(value: string) {
    this._securityControlId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityControlIdInput() {
    return this._securityControlId;
  }

  // standards_arn - computed: false, optional: false, required: true
  private _standardsArn?: string; 
  public get standardsArn() {
    return this.getStringAttribute('standards_arn');
  }
  public set standardsArn(value: string) {
    this._standardsArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardsArnInput() {
    return this._standardsArn;
  }

  // updated_reason - computed: false, optional: true, required: false
  private _updatedReason?: string; 
  public get updatedReason() {
    return this.getStringAttribute('updated_reason');
  }
  public set updatedReason(value: string) {
    this._updatedReason = value;
  }
  public resetUpdatedReason() {
    this._updatedReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedReasonInput() {
    return this._updatedReason;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      association_status: cdktf.stringToTerraform(this._associationStatus),
      security_control_id: cdktf.stringToTerraform(this._securityControlId),
      standards_arn: cdktf.stringToTerraform(this._standardsArn),
      updated_reason: cdktf.stringToTerraform(this._updatedReason),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      association_status: {
        value: cdktf.stringToHclTerraform(this._associationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_control_id: {
        value: cdktf.stringToHclTerraform(this._securityControlId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standards_arn: {
        value: cdktf.stringToHclTerraform(this._standardsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_reason: {
        value: cdktf.stringToHclTerraform(this._updatedReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
