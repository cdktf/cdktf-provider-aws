// https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransferSshKeyConfig extends cdktf.TerraformMetaArguments {
  readonly body: string;
  readonly serverId: string;
  readonly userName: string;
}

// Resource

export class TransferSshKey extends cdktf.TerraformResource {

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
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // server_id - computed: false, optional: false, required: true
  private _serverId: string;
  public get serverId() {
    return this.getStringAttribute('server_id');
  }
  public set serverId(value: string) {
    this._serverId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdInput() {
    return this._serverId
  }

  // user_name - computed: false, optional: false, required: true
  private _userName: string;
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
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
      body: cdktf.stringToTerraform(this._body),
      server_id: cdktf.stringToTerraform(this._serverId),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }
}
