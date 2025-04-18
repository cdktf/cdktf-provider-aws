/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/macie2_organization_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Macie2OrganizationConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable Amazon Macie automatically for accounts that are added to the organization in AWS Organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/macie2_organization_configuration#auto_enable Macie2OrganizationConfiguration#auto_enable}
  */
  readonly autoEnable: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/macie2_organization_configuration aws_macie2_organization_configuration}
*/
export class Macie2OrganizationConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_macie2_organization_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Macie2OrganizationConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Macie2OrganizationConfiguration to import
  * @param importFromId The id of the existing Macie2OrganizationConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/macie2_organization_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Macie2OrganizationConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_macie2_organization_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.95.0/docs/resources/macie2_organization_configuration aws_macie2_organization_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2OrganizationConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: Macie2OrganizationConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_organization_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.95.0',
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
    this._autoEnable = config.autoEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_enable - computed: false, optional: false, required: true
  private _autoEnable?: boolean | cdktf.IResolvable; 
  public get autoEnable() {
    return this.getBooleanAttribute('auto_enable');
  }
  public set autoEnable(value: boolean | cdktf.IResolvable) {
    this._autoEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoEnableInput() {
    return this._autoEnable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_enable: cdktf.booleanToTerraform(this._autoEnable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_enable: {
        value: cdktf.booleanToHclTerraform(this._autoEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
