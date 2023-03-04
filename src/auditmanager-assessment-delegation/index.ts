// https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerAssessmentDelegationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#assessment_id AuditmanagerAssessmentDelegation#assessment_id}
  */
  readonly assessmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#comment AuditmanagerAssessmentDelegation#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#control_set_id AuditmanagerAssessmentDelegation#control_set_id}
  */
  readonly controlSetId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_arn AuditmanagerAssessmentDelegation#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation#role_type AuditmanagerAssessmentDelegation#role_type}
  */
  readonly roleType: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation}
*/
export class AuditmanagerAssessmentDelegation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_assessment_delegation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_assessment_delegation aws_auditmanager_assessment_delegation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerAssessmentDelegationConfig
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerAssessmentDelegationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_assessment_delegation',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._assessmentId = config.assessmentId;
    this._comment = config.comment;
    this._controlSetId = config.controlSetId;
    this._roleArn = config.roleArn;
    this._roleType = config.roleType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assessment_id - computed: false, optional: false, required: true
  private _assessmentId?: string; 
  public get assessmentId() {
    return this.getStringAttribute('assessment_id');
  }
  public set assessmentId(value: string) {
    this._assessmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assessmentIdInput() {
    return this._assessmentId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // control_set_id - computed: false, optional: false, required: true
  private _controlSetId?: string; 
  public get controlSetId() {
    return this.getStringAttribute('control_set_id');
  }
  public set controlSetId(value: string) {
    this._controlSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlSetIdInput() {
    return this._controlSetId;
  }

  // delegation_id - computed: true, optional: false, required: false
  public get delegationId() {
    return this.getStringAttribute('delegation_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_type - computed: false, optional: false, required: true
  private _roleType?: string; 
  public get roleType() {
    return this.getStringAttribute('role_type');
  }
  public set roleType(value: string) {
    this._roleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleTypeInput() {
    return this._roleType;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assessment_id: cdktf.stringToTerraform(this._assessmentId),
      comment: cdktf.stringToTerraform(this._comment),
      control_set_id: cdktf.stringToTerraform(this._controlSetId),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      role_type: cdktf.stringToTerraform(this._roleType),
    };
  }
}
