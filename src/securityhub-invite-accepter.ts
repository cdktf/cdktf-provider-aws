// https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubInviteAccepterConfig extends cdktf.TerraformMetaArguments {
  readonly masterId: string;
}

// Resource

export class SecurityhubInviteAccepter extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityhubInviteAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_invite_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._masterId = config.masterId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invitation_id - computed: true, optional: false, required: false
  public get invitationId() {
    return this.getStringAttribute('invitation_id');
  }

  // master_id - computed: false, optional: false, required: true
  private _masterId: string;
  public get masterId() {
    return this.getStringAttribute('master_id');
  }
  public set masterId(value: string) {
    this._masterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIdInput() {
    return this._masterId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      master_id: cdktf.stringToTerraform(this._masterId),
    };
  }
}
