/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/inspector_rules_packages
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsInspectorRulesPackagesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/inspector_rules_packages#id DataAwsInspectorRulesPackages#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/inspector_rules_packages aws_inspector_rules_packages}
*/
export class DataAwsInspectorRulesPackages extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_inspector_rules_packages";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsInspectorRulesPackages resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsInspectorRulesPackages to import
  * @param importFromId The id of the existing DataAwsInspectorRulesPackages that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/inspector_rules_packages#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsInspectorRulesPackages to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_inspector_rules_packages", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/inspector_rules_packages aws_inspector_rules_packages} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsInspectorRulesPackagesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsInspectorRulesPackagesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_inspector_rules_packages',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.100.0',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arns - computed: true, optional: false, required: false
  public get arns() {
    return this.getListAttribute('arns');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
