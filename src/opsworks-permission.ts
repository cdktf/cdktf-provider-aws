// https://www.terraform.io/docs/providers/aws/r/opsworks_permission.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "allow_ssh": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "allow_sudo": {
        "type": "bool",
        "optional": true,
        "computed": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "level": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "stack_id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "user_arn": {
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

export interface OpsworksPermissionConfig extends TerraformMetaArguments {
  readonly allowSsh?: boolean;
  readonly allowSudo?: boolean;
  readonly level?: string;
  readonly stackId?: string;
  readonly userArn: string;
}

// Resource

export class OpsworksPermission extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OpsworksPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_opsworks_permission',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._allowSsh = config.allowSsh;
    this._allowSudo = config.allowSudo;
    this._level = config.level;
    this._stackId = config.stackId;
    this._userArn = config.userArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ssh - computed: true, optional: true, required: false
  private _allowSsh?: boolean;
  public get allowSsh() {
    return this._allowSsh ?? this.getBooleanAttribute('allow_ssh');
  }
  public set allowSsh(value: boolean | undefined) {
    this._allowSsh = value;
  }

  // allow_sudo - computed: true, optional: true, required: false
  private _allowSudo?: boolean;
  public get allowSudo() {
    return this._allowSudo ?? this.getBooleanAttribute('allow_sudo');
  }
  public set allowSudo(value: boolean | undefined) {
    this._allowSudo = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // level - computed: true, optional: true, required: false
  private _level?: string;
  public get level() {
    return this._level ?? this.getStringAttribute('level');
  }
  public set level(value: string | undefined) {
    this._level = value;
  }

  // stack_id - computed: true, optional: true, required: false
  private _stackId?: string;
  public get stackId() {
    return this._stackId ?? this.getStringAttribute('stack_id');
  }
  public set stackId(value: string | undefined) {
    this._stackId = value;
  }

  // user_arn - computed: false, optional: false, required: true
  private _userArn: string;
  public get userArn() {
    return this._userArn;
  }
  public set userArn(value: string) {
    this._userArn = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ssh: this._allowSsh,
      allow_sudo: this._allowSudo,
      level: this._level,
      stack_id: this._stackId,
      user_arn: this._userArn,
    };
  }
}
