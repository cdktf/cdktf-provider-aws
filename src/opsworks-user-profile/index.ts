// https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksUserProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile#allow_self_management OpsworksUserProfile#allow_self_management}
  */
  readonly allowSelfManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile#id OpsworksUserProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile#ssh_public_key OpsworksUserProfile#ssh_public_key}
  */
  readonly sshPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile#ssh_username OpsworksUserProfile#ssh_username}
  */
  readonly sshUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile#user_arn OpsworksUserProfile#user_arn}
  */
  readonly userArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile aws_opsworks_user_profile}
*/
export class OpsworksUserProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opsworks_user_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsworksUserProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsworksUserProfile to import
  * @param importFromId The id of the existing OpsworksUserProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsworksUserProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_opsworks_user_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.37.0/docs/resources/opsworks_user_profile aws_opsworks_user_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksUserProfileConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksUserProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_user_profile',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.37.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowSelfManagement = config.allowSelfManagement;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
      id: cdktf.stringToTerraform(this._id),
      ssh_public_key: cdktf.stringToTerraform(this._sshPublicKey),
      ssh_username: cdktf.stringToTerraform(this._sshUsername),
      user_arn: cdktf.stringToTerraform(this._userArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_self_management: {
        value: cdktf.booleanToHclTerraform(this._allowSelfManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_public_key: {
        value: cdktf.stringToHclTerraform(this._sshPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_username: {
        value: cdktf.stringToHclTerraform(this._sshUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_arn: {
        value: cdktf.stringToHclTerraform(this._userArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
