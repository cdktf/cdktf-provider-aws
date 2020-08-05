// https://www.terraform.io/docs/providers/aws/r/data_aws_iam_policy_document.html
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
      "json": {
        "type": "string",
        "computed": true
      },
      "override_json": {
        "type": "string",
        "optional": true
      },
      "policy_id": {
        "type": "string",
        "optional": true
      },
      "source_json": {
        "type": "string",
        "optional": true
      },
      "version": {
        "type": "string",
        "optional": true
      }
    },
    "block_types": {
      "statement": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "actions": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "effect": {
              "type": "string",
              "optional": true
            },
            "not_actions": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "not_resources": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "resources": {
              "type": [
                "set",
                "string"
              ],
              "optional": true
            },
            "sid": {
              "type": "string",
              "optional": true
            }
          },
          "block_types": {
            "condition": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "test": {
                    "type": "string",
                    "required": true
                  },
                  "values": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "required": true
                  },
                  "variable": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            },
            "not_principals": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "identifiers": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "required": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            },
            "principals": {
              "nesting_mode": "set",
              "block": {
                "attributes": {
                  "identifiers": {
                    "type": [
                      "set",
                      "string"
                    ],
                    "required": true
                  },
                  "type": {
                    "type": "string",
                    "required": true
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataAwsIamPolicyDocumentConfig extends TerraformMetaArguments {
  readonly overrideJson?: string;
  readonly policyId?: string;
  readonly sourceJson?: string;
  readonly version?: string;
  /** statement block */
  readonly statement?: DataAwsIamPolicyDocumentStatement[];
}
export interface DataAwsIamPolicyDocumentStatementCondition {
  readonly test: string;
  readonly values: string[];
  readonly variable: string;
}
export interface DataAwsIamPolicyDocumentStatementNotPrincipals {
  readonly identifiers: string[];
  readonly type: string;
}
export interface DataAwsIamPolicyDocumentStatementPrincipals {
  readonly identifiers: string[];
  readonly type: string;
}
export interface DataAwsIamPolicyDocumentStatement {
  readonly actions?: string[];
  readonly effect?: string;
  readonly notActions?: string[];
  readonly notResources?: string[];
  readonly resources?: string[];
  readonly sid?: string;
  /** condition block */
  readonly condition?: DataAwsIamPolicyDocumentStatementCondition[];
  /** not_principals block */
  readonly notPrincipals?: DataAwsIamPolicyDocumentStatementNotPrincipals[];
  /** principals block */
  readonly principals?: DataAwsIamPolicyDocumentStatementPrincipals[];
}

// Resource

export class DataAwsIamPolicyDocument extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataAwsIamPolicyDocumentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._overrideJson = config.overrideJson;
    this._policyId = config.policyId;
    this._sourceJson = config.sourceJson;
    this._version = config.version;
    this._statement = config.statement;
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

  // json - computed: true, optional: false, required: true
  public get json() {
    return this.getStringAttribute('json');
  }

  // override_json - computed: false, optional: true, required: false
  private _overrideJson?: string;
  public get overrideJson() {
    return this._overrideJson;
  }
  public set overrideJson(value: string | undefined) {
    this._overrideJson = value;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string;
  public get policyId() {
    return this._policyId;
  }
  public set policyId(value: string | undefined) {
    this._policyId = value;
  }

  // source_json - computed: false, optional: true, required: false
  private _sourceJson?: string;
  public get sourceJson() {
    return this._sourceJson;
  }
  public set sourceJson(value: string | undefined) {
    this._sourceJson = value;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version;
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // statement - computed: false, optional: true, required: false
  private _statement?: DataAwsIamPolicyDocumentStatement[];
  public get statement() {
    return this._statement;
  }
  public set statement(value: DataAwsIamPolicyDocumentStatement[] | undefined) {
    this._statement = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      override_json: this._overrideJson,
      policy_id: this._policyId,
      source_json: this._sourceJson,
      version: this._version,
      statement: this._statement,
    };
  }
}
