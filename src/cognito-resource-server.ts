// https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "identifier": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "required": true
      },
      "scope_identifiers": {
        "type": [
          "list",
          "string"
        ],
        "computed": true
      },
      "user_pool_id": {
        "type": "string",
        "required": true
      }
    },
    "block_types": {
      "scope": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "scope_description": {
              "type": "string",
              "required": true
            },
            "scope_name": {
              "type": "string",
              "required": true
            }
          }
        },
        "max_items": 100
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CognitoResourceServerConfig extends TerraformMetaArguments {
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

// Resource

export class CognitoResourceServer extends TerraformResource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // identifier - computed: false, optional: false, required: true
  private _identifier: string;
  public get identifier() {
    return this._identifier;
  }
  public set identifier(value: string) {
    this._identifier = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // scope_identifiers - computed: true, optional: false, required: true
  public get scopeIdentifiers() {
    return this.getListAttribute('scope_identifiers');
  }

  // user_pool_id - computed: false, optional: false, required: true
  private _userPoolId: string;
  public get userPoolId() {
    return this._userPoolId;
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: CognitoResourceServerScope[];
  public get scope() {
    return this._scope;
  }
  public set scope(value: CognitoResourceServerScope[] | undefined) {
    this._scope = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      identifier: this._identifier,
      name: this._name,
      user_pool_id: this._userPoolId,
      scope: this._scope,
    };
  }
}
