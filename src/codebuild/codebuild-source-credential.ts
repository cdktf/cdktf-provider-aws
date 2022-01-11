// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS CodeBuild
*/
export interface CodebuildSourceCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential#auth_type CodebuildSourceCredential#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential#server_type CodebuildSourceCredential#server_type}
  */
  readonly serverType: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential#token CodebuildSourceCredential#token}
  */
  readonly token: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential#user_name CodebuildSourceCredential#user_name}
  */
  readonly userName?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential aws_codebuild_source_credential}
*/
export class CodebuildSourceCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_codebuild_source_credential";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential aws_codebuild_source_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CodebuildSourceCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CodebuildSourceCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_codebuild_source_credential',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authType = config.authType;
    this._serverType = config.serverType;
    this._token = config.token;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      server_type: cdktf.stringToTerraform(this._serverType),
      token: cdktf.stringToTerraform(this._token),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
