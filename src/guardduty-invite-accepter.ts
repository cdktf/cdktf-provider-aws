// https://www.terraform.io/docs/providers/aws/r/guardduty_invite_accepter.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "detector_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "master_account_id": {
        "type": "string",
        "required": true
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

export interface GuarddutyInviteAccepterConfig extends TerraformMetaArguments {
  readonly detectorId: string;
  readonly masterAccountId: string;
  /** timeouts block */
  readonly timeouts?: GuarddutyInviteAccepterTimeouts;
}
export interface GuarddutyInviteAccepterTimeouts {
  readonly create?: string;
}

// Resource

export class GuarddutyInviteAccepter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    return this._detectorId;
  }
  public set detectorId(value: string) {
    this._detectorId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // master_account_id - computed: false, optional: false, required: true
  private _masterAccountId: string;
  public get masterAccountId() {
    return this._masterAccountId;
  }
  public set masterAccountId(value: string) {
    this._masterAccountId = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GuarddutyInviteAccepterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GuarddutyInviteAccepterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      detector_id: this._detectorId,
      master_account_id: this._masterAccountId,
      timeouts: this._timeouts,
    };
  }
}
