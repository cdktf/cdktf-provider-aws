/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_data_protection_settings_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceswebDataProtectionSettingsAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_data_protection_settings_association#data_protection_settings_arn WorkspaceswebDataProtectionSettingsAssociation#data_protection_settings_arn}
  */
  readonly dataProtectionSettingsArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_data_protection_settings_association#portal_arn WorkspaceswebDataProtectionSettingsAssociation#portal_arn}
  */
  readonly portalArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_data_protection_settings_association#region WorkspaceswebDataProtectionSettingsAssociation#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_data_protection_settings_association aws_workspacesweb_data_protection_settings_association}
*/
export class WorkspaceswebDataProtectionSettingsAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspacesweb_data_protection_settings_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceswebDataProtectionSettingsAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceswebDataProtectionSettingsAssociation to import
  * @param importFromId The id of the existing WorkspaceswebDataProtectionSettingsAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_data_protection_settings_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceswebDataProtectionSettingsAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspacesweb_data_protection_settings_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_data_protection_settings_association aws_workspacesweb_data_protection_settings_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceswebDataProtectionSettingsAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceswebDataProtectionSettingsAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspacesweb_data_protection_settings_association',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.11.0',
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
    this._dataProtectionSettingsArn = config.dataProtectionSettingsArn;
    this._portalArn = config.portalArn;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_protection_settings_arn - computed: false, optional: false, required: true
  private _dataProtectionSettingsArn?: string; 
  public get dataProtectionSettingsArn() {
    return this.getStringAttribute('data_protection_settings_arn');
  }
  public set dataProtectionSettingsArn(value: string) {
    this._dataProtectionSettingsArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProtectionSettingsArnInput() {
    return this._dataProtectionSettingsArn;
  }

  // portal_arn - computed: false, optional: false, required: true
  private _portalArn?: string; 
  public get portalArn() {
    return this.getStringAttribute('portal_arn');
  }
  public set portalArn(value: string) {
    this._portalArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalArnInput() {
    return this._portalArn;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_protection_settings_arn: cdktf.stringToTerraform(this._dataProtectionSettingsArn),
      portal_arn: cdktf.stringToTerraform(this._portalArn),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_protection_settings_arn: {
        value: cdktf.stringToHclTerraform(this._dataProtectionSettingsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal_arn: {
        value: cdktf.stringToHclTerraform(this._portalArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
