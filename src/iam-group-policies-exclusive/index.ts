// https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/iam_group_policies_exclusive
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamGroupPoliciesExclusiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/iam_group_policies_exclusive#group_name IamGroupPoliciesExclusive#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/iam_group_policies_exclusive#policy_names IamGroupPoliciesExclusive#policy_names}
  */
  readonly policyNames: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/iam_group_policies_exclusive aws_iam_group_policies_exclusive}
*/
export class IamGroupPoliciesExclusive extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_iam_group_policies_exclusive";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamGroupPoliciesExclusive resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamGroupPoliciesExclusive to import
  * @param importFromId The id of the existing IamGroupPoliciesExclusive that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/iam_group_policies_exclusive#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamGroupPoliciesExclusive to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_iam_group_policies_exclusive", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/resources/iam_group_policies_exclusive aws_iam_group_policies_exclusive} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamGroupPoliciesExclusiveConfig
  */
  public constructor(scope: Construct, id: string, config: IamGroupPoliciesExclusiveConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_iam_group_policies_exclusive',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.92.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupName = config.groupName;
    this._policyNames = config.policyNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // policy_names - computed: false, optional: false, required: true
  private _policyNames?: string[]; 
  public get policyNames() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_names'));
  }
  public set policyNames(value: string[]) {
    this._policyNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNamesInput() {
    return this._policyNames;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_name: cdktf.stringToTerraform(this._groupName),
      policy_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyNames),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
