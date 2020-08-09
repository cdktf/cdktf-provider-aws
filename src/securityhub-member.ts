// https://www.terraform.io/docs/providers/aws/r/securityhub_member.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "account_id": {
        "type": "string",
        "required": true
      },
      "email": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invite": {
        "type": "bool",
        "optional": true
      },
      "master_id": {
        "type": "string",
        "computed": true
      },
      "member_status": {
        "type": "string",
        "computed": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SecurityhubMemberConfig extends TerraformMetaArguments {
  readonly accountId: string;
  readonly email: string;
  readonly invite?: boolean;
}

// Resource

export class SecurityhubMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _accountId: string;
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string) {
    this._accountId = value;
  }

  // email - computed: false, optional: false, required: true
  private _email: string;
  public get email() {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: boolean;
  public get invite() {
    return this._invite;
  }
  public set invite(value: boolean | undefined) {
    this._invite = value;
  }

  // master_id - computed: true, optional: false, required: true
  public get masterId() {
    return this.getStringAttribute('master_id');
  }

  // member_status - computed: true, optional: false, required: true
  public get memberStatus() {
    return this.getStringAttribute('member_status');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      email: this._email,
      invite: this._invite,
    };
  }
}
