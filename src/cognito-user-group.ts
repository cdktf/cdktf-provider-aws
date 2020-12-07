// https://www.terraform.io/docs/providers/aws/r/cognito_user_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoUserGroupConfig extends cdktf.TerraformMetaArguments {
  readonly description?: string;
  readonly name: string;
  readonly precedence?: number;
  readonly roleArn?: string;
  readonly userPoolId: string;
}

// Resource

export class CognitoUserGroup extends cdktf.TerraformResource {

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
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number;
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number ) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string;
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string ) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      precedence: cdktf.numberToTerraform(this._precedence),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
    };
  }
}
