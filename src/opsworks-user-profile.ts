// https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksUserProfileConfig extends cdktf.TerraformMetaArguments {
  readonly allowSelfManagement?: boolean;
  readonly sshPublicKey?: string;
  readonly sshUsername: string;
  readonly userArn: string;
}

// Resource

export class OpsworksUserProfile extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('allow_self_management');
  }
  public set allowSelfManagement(value: boolean ) {
    this._allowSelfManagement = value;
  }
  public resetAllowSelfManagement() {
    this._allowSelfManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSelfManagementInput() {
    return this._allowSelfManagement
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string;
  public get sshPublicKey() {
    return this.getStringAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string ) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey
  }

  // ssh_username - computed: false, optional: false, required: true
  private _sshUsername: string;
  public get sshUsername() {
    return this.getStringAttribute('ssh_username');
  }
  public set sshUsername(value: string) {
    this._sshUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUsernameInput() {
    return this._sshUsername
  }

  // user_arn - computed: false, optional: false, required: true
  private _userArn: string;
  public get userArn() {
    return this.getStringAttribute('user_arn');
  }
  public set userArn(value: string) {
    this._userArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userArnInput() {
    return this._userArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_self_management: cdktf.booleanToTerraform(this._allowSelfManagement),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      ssh_username: cdktf.stringToTerraform(this._sshUsername),
      user_arn: cdktf.stringToTerraform(this._userArn),
    };
  }
}
