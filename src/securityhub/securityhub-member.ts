// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Security Hub
*/
export interface SecurityhubMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html#account_id SecurityhubMember#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html#email SecurityhubMember#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html#invite SecurityhubMember#invite}
  */
  readonly invite?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html aws_securityhub_member}
*/
export class SecurityhubMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_securityhub_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_member.html aws_securityhub_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityhubMemberConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityhubMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_member',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._email = config.email;
    this._invite = config.invite;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: boolean | cdktf.IResolvable; 
  public get invite() {
    return this.getBooleanAttribute('invite') as any;
  }
  public set invite(value: boolean | cdktf.IResolvable) {
    this._invite = value;
  }
  public resetInvite() {
    this._invite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inviteInput() {
    return this._invite;
  }

  // master_id - computed: true, optional: false, required: false
  public get masterId() {
    return this.getStringAttribute('master_id');
  }

  // member_status - computed: true, optional: false, required: false
  public get memberStatus() {
    return this.getStringAttribute('member_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      email: cdktf.stringToTerraform(this._email),
      invite: cdktf.booleanToTerraform(this._invite),
    };
  }
}
