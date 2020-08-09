// https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_self_management": {
        "type": "bool",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "ssh_public_key": {
        "type": "string",
        "optional": true
      },
      "ssh_username": {
        "type": "string",
        "required": true
      },
      "user_arn": {
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

export interface OpsworksUserProfileConfig extends TerraformMetaArguments {
  readonly allowSelfManagement?: boolean;
  readonly sshPublicKey?: string;
  readonly sshUsername: string;
  readonly userArn: string;
}

// Resource

export class OpsworksUserProfile extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowSelfManagement = config.allowSelfManagement;
    this._sshPublicKey = config.sshPublicKey;
    this._sshUsername = config.sshUsername;
    this._userArn = config.userArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_self_management - computed: false, optional: true, required: false
  private _allowSelfManagement?: boolean;
  public get allowSelfManagement() {
    return this._allowSelfManagement;
  }
  public set allowSelfManagement(value: boolean | undefined) {
    this._allowSelfManagement = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string;
  public get sshPublicKey() {
    return this._sshPublicKey;
  }
  public set sshPublicKey(value: string | undefined) {
    this._sshPublicKey = value;
  }

  // ssh_username - computed: false, optional: false, required: true
  private _sshUsername: string;
  public get sshUsername() {
    return this._sshUsername;
  }
  public set sshUsername(value: string) {
    this._sshUsername = value;
  }

  // user_arn - computed: false, optional: false, required: true
  private _userArn: string;
  public get userArn() {
    return this._userArn;
  }
  public set userArn(value: string) {
    this._userArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_self_management: this._allowSelfManagement,
      ssh_public_key: this._sshPublicKey,
      ssh_username: this._sshUsername,
      user_arn: this._userArn,
    };
  }
}
