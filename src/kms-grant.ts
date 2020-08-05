// https://www.terraform.io/docs/providers/aws/r/kms_grant.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "grant_creation_tokens": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "grant_id": {
        "type": "string",
        "computed": true
      },
      "grant_token": {
        "type": "string",
        "computed": true
      },
      "grantee_principal": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "key_id": {
        "type": "string",
        "required": true
      },
      "name": {
        "type": "string",
        "optional": true
      },
      "operations": {
        "type": [
          "set",
          "string"
        ],
        "required": true
      },
      "retire_on_delete": {
        "type": "bool",
        "optional": true
      },
      "retiring_principal": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "constraints": {
        "nesting_mode": "set",
        "block": {
          "attributes": {
            "encryption_context_equals": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
            },
            "encryption_context_subset": {
              "type": [
                "map",
                "string"
              ],
              "optional": true
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

export interface KmsGrantConfig extends TerraformMetaArguments {
  readonly grantCreationTokens?: string[];
  readonly granteePrincipal: string;
  readonly keyId: string;
  readonly name?: string;
  readonly operations: string[];
  readonly retireOnDelete?: boolean;
  readonly retiringPrincipal?: string;
  /** constraints block */
  readonly constraints?: KmsGrantConstraints[];
}
export interface KmsGrantConstraints {
  readonly encryptionContextEquals?: { [key: string]: string };
  readonly encryptionContextSubset?: { [key: string]: string };
}

// Resource

export class KmsGrant extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kms_grant',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._grantCreationTokens = config.grantCreationTokens;
    this._granteePrincipal = config.granteePrincipal;
    this._keyId = config.keyId;
    this._name = config.name;
    this._operations = config.operations;
    this._retireOnDelete = config.retireOnDelete;
    this._retiringPrincipal = config.retiringPrincipal;
    this._constraints = config.constraints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grant_creation_tokens - computed: false, optional: true, required: false
  private _grantCreationTokens?: string[];
  public get grantCreationTokens() {
    return this._grantCreationTokens;
  }
  public set grantCreationTokens(value: string[] | undefined) {
    this._grantCreationTokens = value;
  }

  // grant_id - computed: true, optional: false, required: true
  public get grantId() {
    return this.getStringAttribute('grant_id');
  }

  // grant_token - computed: true, optional: false, required: true
  public get grantToken() {
    return this.getStringAttribute('grant_token');
  }

  // grantee_principal - computed: false, optional: false, required: true
  private _granteePrincipal: string;
  public get granteePrincipal() {
    return this._granteePrincipal;
  }
  public set granteePrincipal(value: string) {
    this._granteePrincipal = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId: string;
  public get keyId() {
    return this._keyId;
  }
  public set keyId(value: string) {
    this._keyId = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // operations - computed: false, optional: false, required: true
  private _operations: string[];
  public get operations() {
    return this._operations;
  }
  public set operations(value: string[]) {
    this._operations = value;
  }

  // retire_on_delete - computed: false, optional: true, required: false
  private _retireOnDelete?: boolean;
  public get retireOnDelete() {
    return this._retireOnDelete;
  }
  public set retireOnDelete(value: boolean | undefined) {
    this._retireOnDelete = value;
  }

  // retiring_principal - computed: false, optional: true, required: false
  private _retiringPrincipal?: string;
  public get retiringPrincipal() {
    return this._retiringPrincipal;
  }
  public set retiringPrincipal(value: string | undefined) {
    this._retiringPrincipal = value;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints?: KmsGrantConstraints[];
  public get constraints() {
    return this._constraints;
  }
  public set constraints(value: KmsGrantConstraints[] | undefined) {
    this._constraints = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      grant_creation_tokens: this._grantCreationTokens,
      grantee_principal: this._granteePrincipal,
      key_id: this._keyId,
      name: this._name,
      operations: this._operations,
      retire_on_delete: this._retireOnDelete,
      retiring_principal: this._retiringPrincipal,
      constraints: this._constraints,
    };
  }
}
