// https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpsworksPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission#allow_ssh OpsworksPermission#allow_ssh}
  */
  readonly allowSsh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission#allow_sudo OpsworksPermission#allow_sudo}
  */
  readonly allowSudo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission#id OpsworksPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission#level OpsworksPermission#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission#stack_id OpsworksPermission#stack_id}
  */
  readonly stackId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission#user_arn OpsworksPermission#user_arn}
  */
  readonly userArn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission aws_opsworks_permission}
*/
export class OpsworksPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_opsworks_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpsworksPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpsworksPermission to import
  * @param importFromId The id of the existing OpsworksPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpsworksPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_opsworks_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/opsworks_permission aws_opsworks_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpsworksPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: OpsworksPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.0',
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
    this._allowSsh = config.allowSsh;
    this._allowSudo = config.allowSudo;
    this._id = config.id;
    this._level = config.level;
    this._stackId = config.stackId;
    this._userArn = config.userArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ssh - computed: true, optional: true, required: false
  private _allowSsh?: boolean | cdktf.IResolvable; 
  public get allowSsh() {
    return this.getBooleanAttribute('allow_ssh');
  }
  public set allowSsh(value: boolean | cdktf.IResolvable) {
    this._allowSsh = value;
  }
  public resetAllowSsh() {
    this._allowSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSshInput() {
    return this._allowSsh;
  }

  // allow_sudo - computed: true, optional: true, required: false
  private _allowSudo?: boolean | cdktf.IResolvable; 
  public get allowSudo() {
    return this.getBooleanAttribute('allow_sudo');
  }
  public set allowSudo(value: boolean | cdktf.IResolvable) {
    this._allowSudo = value;
  }
  public resetAllowSudo() {
    this._allowSudo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSudoInput() {
    return this._allowSudo;
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

  // level - computed: true, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
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
      allow_ssh: cdktf.booleanToTerraform(this._allowSsh),
      allow_sudo: cdktf.booleanToTerraform(this._allowSudo),
      id: cdktf.stringToTerraform(this._id),
      level: cdktf.stringToTerraform(this._level),
      stack_id: cdktf.stringToTerraform(this._stackId),
      user_arn: cdktf.stringToTerraform(this._userArn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ssh: {
        value: cdktf.booleanToHclTerraform(this._allowSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_sudo: {
        value: cdktf.booleanToHclTerraform(this._allowSudo),
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
      level: {
        value: cdktf.stringToHclTerraform(this._level),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
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
