// https://www.terraform.io/docs/providers/aws/r/transfer_user.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "arn": {
        "type": "string",
        "computed": true
      },
      "home_directory": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "policy": {
        "type": "string",
        "optional": true
      },
      "role": {
        "type": "string",
        "required": true
      },
      "server_id": {
        "type": "string",
        "required": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
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

export interface TransferUserConfig extends TerraformMetaArguments {
  readonly homeDirectory?: string;
  readonly policy?: string;
  readonly role: string;
  readonly serverId: string;
  readonly tags?: { [key: string]: string };
  readonly userName: string;
}

// Resource

export class TransferUser extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TransferUserConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transfer_user',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._homeDirectory = config.homeDirectory;
    this._policy = config.policy;
    this._role = config.role;
    this._serverId = config.serverId;
    this._tags = config.tags;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // home_directory - computed: false, optional: true, required: false
  private _homeDirectory?: string;
  public get homeDirectory() {
    return this._homeDirectory;
  }
  public set homeDirectory(value: string | undefined) {
    this._homeDirectory = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string;
  public get policy() {
    return this._policy;
  }
  public set policy(value: string | undefined) {
    this._policy = value;
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this._role;
  }
  public set role(value: string) {
    this._role = value;
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this._serverId;
  }
  public set serverId(value: string) {
    this._serverId = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
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
      home_directory: this._homeDirectory,
      policy: this._policy,
      role: this._role,
      server_id: this._serverId,
      tags: this._tags,
      user_name: this._userName,
    };
  }
}
