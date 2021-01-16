// https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CodebuildSourceCredentialConfig extends cdktf.TerraformMetaArguments {
  readonly authType: string;
  readonly serverType: string;
  readonly token: string;
  readonly userName?: string;
}

// Resource

export class CodebuildSourceCredential extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _authType: string;
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType: string;
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType
  }

  // token - computed: false, optional: false, required: true
  private _token: string;
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string;
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string ) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName
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
