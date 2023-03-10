// https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditmanagerFrameworkShareConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}
  */
  readonly destinationAccount: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}
  */
  readonly destinationRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}
  */
  readonly frameworkId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share aws_auditmanager_framework_share}
*/
export class AuditmanagerFrameworkShare extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_auditmanager_framework_share";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/auditmanager_framework_share aws_auditmanager_framework_share} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditmanagerFrameworkShareConfig
  */
  public constructor(scope: Construct, id: string, config: AuditmanagerFrameworkShareConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_auditmanager_framework_share',
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
    this._comment = config.comment;
    this._destinationAccount = config.destinationAccount;
    this._destinationRegion = config.destinationRegion;
    this._frameworkId = config.frameworkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // destination_account - computed: false, optional: false, required: true
  private _destinationAccount?: string; 
  public get destinationAccount() {
    return this.getStringAttribute('destination_account');
  }
  public set destinationAccount(value: string) {
    this._destinationAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAccountInput() {
    return this._destinationAccount;
  }

  // destination_region - computed: false, optional: false, required: true
  private _destinationRegion?: string; 
  public get destinationRegion() {
    return this.getStringAttribute('destination_region');
  }
  public set destinationRegion(value: string) {
    this._destinationRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationRegionInput() {
    return this._destinationRegion;
  }

  // framework_id - computed: false, optional: false, required: true
  private _frameworkId?: string; 
  public get frameworkId() {
    return this.getStringAttribute('framework_id');
  }
  public set frameworkId(value: string) {
    this._frameworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkIdInput() {
    return this._frameworkId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      comment: cdktf.stringToTerraform(this._comment),
      destination_account: cdktf.stringToTerraform(this._destinationAccount),
      destination_region: cdktf.stringToTerraform(this._destinationRegion),
      framework_id: cdktf.stringToTerraform(this._frameworkId),
    };
  }
}
