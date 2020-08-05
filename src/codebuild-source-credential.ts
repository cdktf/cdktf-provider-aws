// https://www.terraform.io/docs/providers/aws/r/codebuild_source_credential.html
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
      "auth_type": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "server_type": {
        "type": "string",
        "required": true
      },
      "token": {
        "type": "string",
        "required": true,
        "sensitive": true
      },
      "user_name": {
        "type": "string",
        "optional": true
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CodebuildSourceCredentialConfig extends TerraformMetaArguments {
  readonly authType: string;
  readonly serverType: string;
  readonly token: string;
  readonly userName?: string;
}

// Resource

export class CodebuildSourceCredential extends TerraformResource {

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

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType: string;
  public get authType() {
    return this._authType;
  }
  public set authType(value: string) {
    this._authType = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType: string;
  public get serverType() {
    return this._serverType;
  }
  public set serverType(value: string) {
    this._serverType = value;
  }

  // token - computed: false, optional: false, required: true
  private _token: string;
  public get token() {
    return this._token;
  }
  public set token(value: string) {
    this._token = value;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string;
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: this._authType,
      server_type: this._serverType,
      token: this._token,
      user_name: this._userName,
    };
  }
}
