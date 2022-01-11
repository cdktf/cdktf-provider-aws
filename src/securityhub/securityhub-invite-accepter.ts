// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Security Hub
*/
export interface SecurityhubInviteAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter#master_id SecurityhubInviteAccepter#master_id}
  */
  readonly masterId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter aws_securityhub_invite_accepter}
*/
export class SecurityhubInviteAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_securityhub_invite_accepter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_invite_accepter aws_securityhub_invite_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubInviteAccepterConfig
  */
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
  private _masterId?: string; 
  public get masterId() {
    return this.getStringAttribute('master_id');
  }
  public set masterId(value: string) {
    this._masterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIdInput() {
    return this._masterId;
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
