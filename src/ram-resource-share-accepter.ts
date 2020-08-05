// https://www.terraform.io/docs/providers/aws/r/ram_resource_share_accepter.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invitation_arn": {
        "type": "string",
        "computed": true
      },
      "receiver_account_id": {
        "type": "string",
        "computed": true
      },
      "resources": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "sender_account_id": {
        "type": "string",
        "computed": true
      },
      "share_arn": {
        "type": "string",
        "required": true
      },
      "share_id": {
        "type": "string",
        "computed": true
      },
      "share_name": {
        "type": "string",
        "computed": true
      },
      "status": {
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
            "delete": {
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

export interface RamResourceShareAccepterConfig extends TerraformMetaArguments {
  readonly shareArn: string;
  /** timeouts block */
  readonly timeouts?: RamResourceShareAccepterTimeouts;
}
export interface RamResourceShareAccepterTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class RamResourceShareAccepter extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: RamResourceShareAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ram_resource_share_accepter',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._shareArn = config.shareArn;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // invitation_arn - computed: true, optional: false, required: true
  public get invitationArn() {
    return this.getStringAttribute('invitation_arn');
  }

  // receiver_account_id - computed: true, optional: false, required: true
  public get receiverAccountId() {
    return this.getStringAttribute('receiver_account_id');
  }

  // resources - computed: true, optional: false, required: true
  public get resources() {
    return this.getListAttribute('resources');
  }

  // sender_account_id - computed: true, optional: false, required: true
  public get senderAccountId() {
    return this.getStringAttribute('sender_account_id');
  }

  // share_arn - computed: false, optional: false, required: true
  private _shareArn: string;
  public get shareArn() {
    return this._shareArn;
  }
  public set shareArn(value: string) {
    this._shareArn = value;
  }

  // share_id - computed: true, optional: false, required: true
  public get shareId() {
    return this.getStringAttribute('share_id');
  }

  // share_name - computed: true, optional: false, required: true
  public get shareName() {
    return this.getStringAttribute('share_name');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: RamResourceShareAccepterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: RamResourceShareAccepterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      share_arn: this._shareArn,
      timeouts: this._timeouts,
    };
  }
}
