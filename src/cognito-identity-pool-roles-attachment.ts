// https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool_roles_attachment.html
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
      "identity_pool_id": {
        "type": "string",
        "required": true
      },
      "roles": {
        "type": [
          "map",
          "string"
        ],
        "required": true
      }
    },
    "block_types": {
      "role_mapping": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "ambiguous_role_resolution": {
              "type": "string",
              "optional": true
            },
            "identity_provider": {
              "type": "string",
              "required": true
            },
            "type": {
              "type": "string",
              "required": true
            }
          },
          "block_types": {
            "mapping_rule": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "claim": {
                    "type": "string",
                    "required": true
                  },
                  "match_type": {
                    "type": "string",
                    "required": true
                  },
                  "role_arn": {
                    "type": "string",
                    "required": true
                  },
                  "value": {
                    "type": "string",
                    "required": true
                  }
                }
              },
              "max_items": 25
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CognitoIdentityPoolRolesAttachmentConfig extends TerraformMetaArguments {
  readonly identityPoolId: string;
  readonly roles: { [key: string]: string };
  /** role_mapping block */
  readonly roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[];
}
export interface CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule {
  readonly claim: string;
  readonly matchType: string;
  readonly roleArn: string;
  readonly value: string;
}
export interface CognitoIdentityPoolRolesAttachmentRoleMapping {
  readonly ambiguousRoleResolution?: string;
  readonly identityProvider: string;
  readonly type: string;
  /** mapping_rule block */
  readonly mappingRule?: CognitoIdentityPoolRolesAttachmentRoleMappingMappingRule[];
}

// Resource

export class CognitoIdentityPoolRolesAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CognitoIdentityPoolRolesAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cognito_identity_pool_roles_attachment',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._identityPoolId = config.identityPoolId;
    this._roles = config.roles;
    this._roleMapping = config.roleMapping;
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

  // identity_pool_id - computed: false, optional: false, required: true
  private _identityPoolId: string;
  public get identityPoolId() {
    return this._identityPoolId;
  }
  public set identityPoolId(value: string) {
    this._identityPoolId = value;
  }

  // roles - computed: false, optional: false, required: true
  private _roles: { [key: string]: string };
  public get roles() {
    return this._roles;
  }
  public set roles(value: { [key: string]: string }) {
    this._roles = value;
  }

  // role_mapping - computed: false, optional: true, required: false
  private _roleMapping?: CognitoIdentityPoolRolesAttachmentRoleMapping[];
  public get roleMapping() {
    return this._roleMapping;
  }
  public set roleMapping(value: CognitoIdentityPoolRolesAttachmentRoleMapping[] | undefined) {
    this._roleMapping = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      identity_pool_id: this._identityPoolId,
      roles: this._roles,
      role_mapping: this._roleMapping,
    };
  }
}
