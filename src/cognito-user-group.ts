// https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "description": {
        "type": "string",
        "optional": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "precedence": {
        "type": "number",
        "optional": true
      },
      "role_arn": {
        "type": "string",
        "optional": true
      },
      "user_pool_id": {
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

export interface CognitoUserGroupConfig extends TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly precedence?: number;
  readonly roleArn?: string;
  readonly userPoolId: string;
}

// Resource

export class CognitoUserGroup extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitoUserGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_user_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._precedence = config.precedence;
    this._roleArn = config.roleArn;
    this._userPoolId = config.userPoolId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number;
  public get precedence() {
    return this._precedence;
  }
  public set precedence(value: number | undefined) {
    this._precedence = value;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this._roleArn;
  }
  public set roleArn(value: string | undefined) {
    this._roleArn = value;
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this._userPoolId;
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      precedence: this._precedence,
      role_arn: this._roleArn,
      user_pool_id: this._userPoolId,
    };
  }
}
