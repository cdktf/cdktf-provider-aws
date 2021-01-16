// https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IotRoleAliasConfig extends cdktf.TerraformMetaArguments {
  readonly alias: string;
  readonly credentialDuration?: number;
  readonly roleArn: string;
}

// Resource

export class IotRoleAlias extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IotRoleAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iot_role_alias',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._alias = config.alias;
    this._credentialDuration = config.credentialDuration;
    this._roleArn = config.roleArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias: string;
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // credential_duration - computed: false, optional: true, required: false
  private _credentialDuration?: number;
  public get credentialDuration() {
    return this.getNumberAttribute('credential_duration');
  }
  public set credentialDuration(value: number ) {
    this._credentialDuration = value;
  }
  public resetCredentialDuration() {
    this._credentialDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialDurationInput() {
    return this._credentialDuration
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      credential_duration: cdktf.numberToTerraform(this._credentialDuration),
      role_arn: cdktf.stringToTerraform(this._roleArn),
    };
  }
}
