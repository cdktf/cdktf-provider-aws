// https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CognitoResourceServerConfig extends cdktf.TerraformMetaArguments {
  readonly identifier: string;
  readonly name: string;
  readonly userPoolId: string;
  /** scope block */
  readonly scope?: CognitoResourceServerScope[];
}
export interface CognitoResourceServerScope {
  readonly scopeDescription: string;
  readonly scopeName: string;
}

function cognitoResourceServerScopeToTerraform(struct?: CognitoResourceServerScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    scope_description: cdktf.stringToTerraform(struct!.scopeDescription),
    scope_name: cdktf.stringToTerraform(struct!.scopeName),
  }
}


// Resource

export class CognitoResourceServer extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitoResourceServerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_resource_server',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._identifier = config.identifier;
    this._name = config.name;
    this._userPoolId = config.userPoolId;
    this._scope = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier: string;
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier
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

  // scope_identifiers - computed: true, optional: false, required: false
  public get scopeIdentifiers() {
    return this.getListAttribute('scope_identifiers');
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

  // scope - computed: false, optional: true, required: false
  private _scope?: CognitoResourceServerScope[];
  public get scope() {
    return this.interpolationForAttribute('scope') as any;
  }
  public set scope(value: CognitoResourceServerScope[] ) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      user_pool_id: cdktf.stringToTerraform(this._userPoolId),
      scope: cdktf.listMapper(cognitoResourceServerScopeToTerraform)(this._scope),
    };
  }
}
