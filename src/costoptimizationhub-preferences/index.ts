/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/costoptimizationhub_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CostoptimizationhubPreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/costoptimizationhub_preferences#member_account_discount_visibility CostoptimizationhubPreferences#member_account_discount_visibility}
  */
  readonly memberAccountDiscountVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/costoptimizationhub_preferences#savings_estimation_mode CostoptimizationhubPreferences#savings_estimation_mode}
  */
  readonly savingsEstimationMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences}
*/
export class CostoptimizationhubPreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_costoptimizationhub_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CostoptimizationhubPreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CostoptimizationhubPreferences to import
  * @param importFromId The id of the existing CostoptimizationhubPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/costoptimizationhub_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CostoptimizationhubPreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_costoptimizationhub_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.14.0/docs/resources/costoptimizationhub_preferences aws_costoptimizationhub_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CostoptimizationhubPreferencesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CostoptimizationhubPreferencesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_costoptimizationhub_preferences',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.14.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._memberAccountDiscountVisibility = config.memberAccountDiscountVisibility;
    this._savingsEstimationMode = config.savingsEstimationMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_account_discount_visibility - computed: true, optional: true, required: false
  private _memberAccountDiscountVisibility?: string; 
  public get memberAccountDiscountVisibility() {
    return this.getStringAttribute('member_account_discount_visibility');
  }
  public set memberAccountDiscountVisibility(value: string) {
    this._memberAccountDiscountVisibility = value;
  }
  public resetMemberAccountDiscountVisibility() {
    this._memberAccountDiscountVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAccountDiscountVisibilityInput() {
    return this._memberAccountDiscountVisibility;
  }

  // savings_estimation_mode - computed: true, optional: true, required: false
  private _savingsEstimationMode?: string; 
  public get savingsEstimationMode() {
    return this.getStringAttribute('savings_estimation_mode');
  }
  public set savingsEstimationMode(value: string) {
    this._savingsEstimationMode = value;
  }
  public resetSavingsEstimationMode() {
    this._savingsEstimationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get savingsEstimationModeInput() {
    return this._savingsEstimationMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      member_account_discount_visibility: cdktf.stringToTerraform(this._memberAccountDiscountVisibility),
      savings_estimation_mode: cdktf.stringToTerraform(this._savingsEstimationMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      member_account_discount_visibility: {
        value: cdktf.stringToHclTerraform(this._memberAccountDiscountVisibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      savings_estimation_mode: {
        value: cdktf.stringToHclTerraform(this._savingsEstimationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
