// https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuarddutyInviteAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#detector_id GuarddutyInviteAccepter#detector_id}
  */
  readonly detectorId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#master_account_id GuarddutyInviteAccepter#master_account_id}
  */
  readonly masterAccountId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#timeouts GuarddutyInviteAccepter#timeouts}
  */
  readonly timeouts?: GuarddutyInviteAccepterTimeouts;
}
export interface GuarddutyInviteAccepterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html#create GuarddutyInviteAccepter#create}
  */
  readonly create?: string;
}

function guarddutyInviteAccepterTimeoutsToTerraform(struct?: GuarddutyInviteAccepterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter}
*/
export class GuarddutyInviteAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_guardduty_invite_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html aws_guardduty_invite_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuarddutyInviteAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: GuarddutyInviteAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_invite_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._detectorId = config.detectorId;
    this._masterAccountId = config.masterAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this.getStringAttribute('detector_id');
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorIdInput() {
    return this._detectorId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // master_account_id - computed: false, optional: false, required: true
  private _masterAccountId: string;
  public get masterAccountId() {
    return this.getStringAttribute('master_account_id');
  }
  public set masterAccountId(value: string) {
    this._masterAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAccountIdInput() {
    return this._masterAccountId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GuarddutyInviteAccepterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GuarddutyInviteAccepterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detector_id: cdktf.stringToTerraform(this._detectorId),
      master_account_id: cdktf.stringToTerraform(this._masterAccountId),
      timeouts: guarddutyInviteAccepterTimeoutsToTerraform(this._timeouts),
    };
  }
}
