// https://www.terraform.io/docs/providers/aws/r/guardduty_member.html
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
      "detector_id": {
        "type": "string",
        "required": true
      },
      "disable_email_notification": {
        "type": "bool",
        "optional": true
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
      "invitation_message": {
        "type": "string",
        "optional": true
      },
      "invite": {
        "type": "bool",
        "optional": true
      },
      "relationship_status": {
        "type": "string",
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GuarddutyMemberConfig extends TerraformMetaArguments {
  readonly accountId: string;
  readonly detectorId: string;
  readonly disableEmailNotification?: boolean;
  readonly email: string;
  readonly invitationMessage?: string;
  readonly invite?: boolean;
  /** timeouts block */
  readonly timeouts?: GuarddutyMemberTimeouts;
}
export interface GuarddutyMemberTimeouts {
  readonly create?: string;
  readonly update?: string;
}

// Resource

export class GuarddutyMember extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GuarddutyMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_guardduty_member',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountId = config.accountId;
    this._detectorId = config.detectorId;
    this._disableEmailNotification = config.disableEmailNotification;
    this._email = config.email;
    this._invitationMessage = config.invitationMessage;
    this._invite = config.invite;
    this._timeouts = config.timeouts;
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

  // detector_id - computed: false, optional: false, required: true
  private _detectorId: string;
  public get detectorId() {
    return this._detectorId;
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }

  // disable_email_notification - computed: false, optional: true, required: false
  private _disableEmailNotification?: boolean;
  public get disableEmailNotification() {
    return this._disableEmailNotification;
  }
  public set disableEmailNotification(value: boolean | undefined) {
    this._disableEmailNotification = value;
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

  // invitation_message - computed: false, optional: true, required: false
  private _invitationMessage?: string;
  public get invitationMessage() {
    return this._invitationMessage;
  }
  public set invitationMessage(value: string | undefined) {
    this._invitationMessage = value;
  }

  // invite - computed: false, optional: true, required: false
  private _invite?: boolean;
  public get invite() {
    return this._invite;
  }
  public set invite(value: boolean | undefined) {
    this._invite = value;
  }

  // relationship_status - computed: true, optional: false, required: true
  public get relationshipStatus() {
    return this.getStringAttribute('relationship_status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GuarddutyMemberTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GuarddutyMemberTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: this._accountId,
      detector_id: this._detectorId,
      disable_email_notification: this._disableEmailNotification,
      email: this._email,
      invitation_message: this._invitationMessage,
      invite: this._invite,
      timeouts: this._timeouts,
    };
  }
}
