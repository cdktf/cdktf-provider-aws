// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS OpsWorks
*/
export interface OpsworksUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile#allow_self_management OpsworksUserProfile#allow_self_management}
  */
  readonly allowSelfManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile#ssh_public_key OpsworksUserProfile#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile#ssh_username OpsworksUserProfile#ssh_username}
  */
  readonly sshUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile#user_arn OpsworksUserProfile#user_arn}
  */
  readonly userArn: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile aws_opsworks_user_profile}
*/
export class OpsworksUserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_opsworks_user_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/opsworks_user_profile aws_opsworks_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksUserProfileConfig
  */
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
  private _allowSelfManagement?: boolean | cdktf.IResolvable; 
  public get allowSelfManagement() {
    return this.getBooleanAttribute('allow_self_management');
  }
  public set allowSelfManagement(value: boolean | cdktf.IResolvable) {
    this._allowSelfManagement = value;
  }
  public resetAllowSelfManagement() {
    this._allowSelfManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSelfManagementInput() {
    return this._allowSelfManagement;
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
  public set sshPublicKey(value: string) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // ssh_username - computed: false, optional: false, required: true
  private _sshUsername?: string; 
  public get sshUsername() {
    return this.getStringAttribute('ssh_username');
  }
  public set sshUsername(value: string) {
    this._sshUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUsernameInput() {
    return this._sshUsername;
  }

  // user_arn - computed: false, optional: false, required: true
  private _userArn?: string; 
  public get userArn() {
    return this.getStringAttribute('user_arn');
  }
  public set userArn(value: string) {
    this._userArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userArnInput() {
    return this._userArn;
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
