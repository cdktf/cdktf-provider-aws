// https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/costoptimizationhub_enrollment_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostoptimizationhubEnrollmentStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/costoptimizationhub_enrollment_status#include_member_accounts CostoptimizationhubEnrollmentStatus#include_member_accounts}
  */
  readonly includeMemberAccounts?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/costoptimizationhub_enrollment_status aws_costoptimizationhub_enrollment_status}
*/
export class CostoptimizationhubEnrollmentStatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_costoptimizationhub_enrollment_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CostoptimizationhubEnrollmentStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CostoptimizationhubEnrollmentStatus to import
  * @param importFromId The id of the existing CostoptimizationhubEnrollmentStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/costoptimizationhub_enrollment_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CostoptimizationhubEnrollmentStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_costoptimizationhub_enrollment_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/resources/costoptimizationhub_enrollment_status aws_costoptimizationhub_enrollment_status} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostoptimizationhubEnrollmentStatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CostoptimizationhubEnrollmentStatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_costoptimizationhub_enrollment_status',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.2',
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
    this._includeMemberAccounts = config.includeMemberAccounts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_member_accounts - computed: true, optional: true, required: false
  private _includeMemberAccounts?: boolean | cdktf.IResolvable; 
  public get includeMemberAccounts() {
    return this.getBooleanAttribute('include_member_accounts');
  }
  public set includeMemberAccounts(value: boolean | cdktf.IResolvable) {
    this._includeMemberAccounts = value;
  }
  public resetIncludeMemberAccounts() {
    this._includeMemberAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeMemberAccountsInput() {
    return this._includeMemberAccounts;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      include_member_accounts: cdktf.booleanToTerraform(this._includeMemberAccounts),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_member_accounts: {
        value: cdktf.booleanToHclTerraform(this._includeMemberAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
