// https://www.terraform.io/docs/providers/aws/r/ssm_patch_baseline.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "approved_patches": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "approved_patches_compliance_level": {
        "type": "string",
        "optional": true
      },
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
      "operating_system": {
        "type": "string",
        "optional": true
      },
      "rejected_patches": {
        "type": [
          "set",
          "string"
        ],
        "optional": true
      },
      "tags": {
        "type": [
          "map",
          "string"
        ],
        "optional": true
      }
    },
    "block_types": {
      "approval_rule": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "approve_after_days": {
              "type": "number",
              "required": true
            },
            "compliance_level": {
              "type": "string",
              "optional": true
            },
            "enable_non_security": {
              "type": "bool",
              "optional": true
            }
          },
          "block_types": {
            "patch_filter": {
              "nesting_mode": "list",
              "block": {
                "attributes": {
                  "key": {
                    "type": "string",
                    "required": true
                  },
                  "values": {
                    "type": [
                      "list",
                      "string"
                    ],
                    "required": true
                  }
                }
              },
              "min_items": 1,
              "max_items": 10
            }
          }
        }
      },
      "global_filter": {
        "nesting_mode": "list",
        "block": {
          "attributes": {
            "key": {
              "type": "string",
              "required": true
            },
            "values": {
              "type": [
                "list",
                "string"
              ],
              "required": true
            }
          }
        },
        "max_items": 4
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface SsmPatchBaselineConfig extends TerraformMetaArguments {
  readonly approvedPatches?: string[];
  readonly approvedPatchesComplianceLevel?: string;
  readonly description?: string;
  readonly name: string;
  readonly operatingSystem?: string;
  readonly rejectedPatches?: string[];
  readonly tags?: { [key: string]: string };
  /** approval_rule block */
  readonly approvalRule?: SsmPatchBaselineApprovalRule[];
  /** global_filter block */
  readonly globalFilter?: SsmPatchBaselineGlobalFilter[];
}
export interface SsmPatchBaselineApprovalRulePatchFilter {
  readonly key: string;
  readonly values: string[];
}
export interface SsmPatchBaselineApprovalRule {
  readonly approveAfterDays: number;
  readonly complianceLevel?: string;
  readonly enableNonSecurity?: boolean;
  /** patch_filter block */
  readonly patchFilter: SsmPatchBaselineApprovalRulePatchFilter[];
}
export interface SsmPatchBaselineGlobalFilter {
  readonly key: string;
  readonly values: string[];
}

// Resource

export class SsmPatchBaseline extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SsmPatchBaselineConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_ssm_patch_baseline',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._approvedPatches = config.approvedPatches;
    this._approvedPatchesComplianceLevel = config.approvedPatchesComplianceLevel;
    this._description = config.description;
    this._name = config.name;
    this._operatingSystem = config.operatingSystem;
    this._rejectedPatches = config.rejectedPatches;
    this._tags = config.tags;
    this._approvalRule = config.approvalRule;
    this._globalFilter = config.globalFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_patches - computed: false, optional: true, required: false
  private _approvedPatches?: string[];
  public get approvedPatches() {
    return this._approvedPatches;
  }
  public set approvedPatches(value: string[] | undefined) {
    this._approvedPatches = value;
  }

  // approved_patches_compliance_level - computed: false, optional: true, required: false
  private _approvedPatchesComplianceLevel?: string;
  public get approvedPatchesComplianceLevel() {
    return this._approvedPatchesComplianceLevel;
  }
  public set approvedPatchesComplianceLevel(value: string | undefined) {
    this._approvedPatchesComplianceLevel = value;
  }

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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string;
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public set operatingSystem(value: string | undefined) {
    this._operatingSystem = value;
  }

  // rejected_patches - computed: false, optional: true, required: false
  private _rejectedPatches?: string[];
  public get rejectedPatches() {
    return this._rejectedPatches;
  }
  public set rejectedPatches(value: string[] | undefined) {
    this._rejectedPatches = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // approval_rule - computed: false, optional: true, required: false
  private _approvalRule?: SsmPatchBaselineApprovalRule[];
  public get approvalRule() {
    return this._approvalRule;
  }
  public set approvalRule(value: SsmPatchBaselineApprovalRule[] | undefined) {
    this._approvalRule = value;
  }

  // global_filter - computed: false, optional: true, required: false
  private _globalFilter?: SsmPatchBaselineGlobalFilter[];
  public get globalFilter() {
    return this._globalFilter;
  }
  public set globalFilter(value: SsmPatchBaselineGlobalFilter[] | undefined) {
    this._globalFilter = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      approved_patches: this._approvedPatches,
      approved_patches_compliance_level: this._approvedPatchesComplianceLevel,
      description: this._description,
      name: this._name,
      operating_system: this._operatingSystem,
      rejected_patches: this._rejectedPatches,
      tags: this._tags,
      approval_rule: this._approvalRule,
      global_filter: this._globalFilter,
    };
  }
}
