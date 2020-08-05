// https://www.terraform.io/docs/providers/aws/r/iot_role_alias.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "alias": {
        "type": "string",
        "required": true
      },
      "arn": {
        "type": "string",
        "computed": true
      },
      "credential_duration": {
        "type": "number",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "role_arn": {
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

export interface IotRoleAliasConfig extends TerraformMetaArguments {
  readonly alias: string;
  readonly credentialDuration?: number;
  readonly roleArn: string;
}

// Resource

export class IotRoleAlias extends TerraformResource {

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
    return this._alias;
  }
  public set alias(value: string) {
    this._alias = value;
  }

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // credential_duration - computed: false, optional: true, required: false
  private _credentialDuration?: number;
  public get credentialDuration() {
    return this._credentialDuration;
  }
  public set credentialDuration(value: number | undefined) {
    this._credentialDuration = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: this._alias,
      credential_duration: this._credentialDuration,
      role_arn: this._roleArn,
    };
  }
}
