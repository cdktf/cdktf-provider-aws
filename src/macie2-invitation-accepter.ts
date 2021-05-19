// https://www.terraform.io/docs/providers/aws/r/macie2_invitation_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2InvitationAccepterConfig extends cdktf.TerraformMetaArguments {
  readonly administratorAccountId: string;
  /** timeouts block */
  readonly timeouts?: Macie2InvitationAccepterTimeouts;
}
export interface Macie2InvitationAccepterTimeouts {
  readonly create?: string;
}

function macie2InvitationAccepterTimeoutsToTerraform(struct?: Macie2InvitationAccepterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


// Resource

export class Macie2InvitationAccepter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Macie2InvitationAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_invitation_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._administratorAccountId = config.administratorAccountId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator_account_id - computed: false, optional: false, required: true
  private _administratorAccountId: string;
  public get administratorAccountId() {
    return this.getStringAttribute('administrator_account_id');
  }
  public set administratorAccountId(value: string) {
    this._administratorAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorAccountIdInput() {
    return this._administratorAccountId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitation_id - computed: true, optional: false, required: false
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: Macie2InvitationAccepterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: Macie2InvitationAccepterTimeouts ) {
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
      administrator_account_id: cdktf.stringToTerraform(this._administratorAccountId),
      timeouts: macie2InvitationAccepterTimeoutsToTerraform(this._timeouts),
    };
  }
}
