// https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "body": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "server_id": {
        "type": "string",
        "required": true
      },
      "user_name": {
        "type": "string",
        "required": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface TransferSshKeyConfig extends TerraformMetaArguments {
  readonly body: string;
  readonly serverId: string;
  readonly userName: string;
}

// Resource

export class TransferSshKey extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TransferSshKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_ssh_key',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._body = config.body;
    this._serverId = config.serverId;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // body - computed: false, optional: false, required: true
  private _body: string;
  public get body() {
    return this._body;
  }
  public set body(value: string) {
    this._body = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this._serverId;
  }
  public set serverId(value: string) {
    this._serverId = value;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName: string;
  public get userName() {
    return this._userName;
  }
  public set userName(value: string) {
    this._userName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      body: this._body,
      server_id: this._serverId,
      user_name: this._userName,
    };
  }
}
