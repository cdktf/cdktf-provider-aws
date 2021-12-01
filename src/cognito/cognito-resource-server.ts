// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Cognito
*/
export interface CognitoResourceServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#identifier CognitoResourceServer#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#name CognitoResourceServer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#user_pool_id CognitoResourceServer#user_pool_id}
  */
  readonly userPoolId: string;
  /**
  * scope block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope CognitoResourceServer#scope}
  */
  readonly scope?: CognitoResourceServerScope[];
}
export interface CognitoResourceServerScope {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope_description CognitoResourceServer#scope_description}
  */
  readonly scopeDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html#scope_name CognitoResourceServer#scope_name}
  */
  readonly scopeName: string;
}

export function cognitoResourceServerScopeToTerraform(struct?: CognitoResourceServerScope): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope_description: cdktf.stringToTerraform(struct!.scopeDescription),
    scope_name: cdktf.stringToTerraform(struct!.scopeName),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server}
*/
export class CognitoResourceServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cognito_resource_server";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CognitoResourceServerConfig
  */
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
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scope_identifiers - computed: true, optional: false, required: false
  public get scopeIdentifiers() {
    return this.getListAttribute('scope_identifiers');
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: CognitoResourceServerScope[]; 
  public get scope() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scope') as any;
  }
  public set scope(value: CognitoResourceServerScope[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
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
