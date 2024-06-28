/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatazoneEnvironmentBlueprintConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration#domain_id DatazoneEnvironmentBlueprintConfiguration#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration#enabled_regions DatazoneEnvironmentBlueprintConfiguration#enabled_regions}
  */
  readonly enabledRegions: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration#environment_blueprint_id DatazoneEnvironmentBlueprintConfiguration#environment_blueprint_id}
  */
  readonly environmentBlueprintId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration#manage_access_role_arn DatazoneEnvironmentBlueprintConfiguration#manage_access_role_arn}
  */
  readonly manageAccessRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration#provisioning_role_arn DatazoneEnvironmentBlueprintConfiguration#provisioning_role_arn}
  */
  readonly provisioningRoleArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration#regional_parameters DatazoneEnvironmentBlueprintConfiguration#regional_parameters}
  */
  readonly regionalParameters?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration aws_datazone_environment_blueprint_configuration}
*/
export class DatazoneEnvironmentBlueprintConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_datazone_environment_blueprint_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatazoneEnvironmentBlueprintConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatazoneEnvironmentBlueprintConfiguration to import
  * @param importFromId The id of the existing DatazoneEnvironmentBlueprintConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatazoneEnvironmentBlueprintConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_datazone_environment_blueprint_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.56.0/docs/resources/datazone_environment_blueprint_configuration aws_datazone_environment_blueprint_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatazoneEnvironmentBlueprintConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DatazoneEnvironmentBlueprintConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_datazone_environment_blueprint_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.56.0',
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
    this._domainId = config.domainId;
    this._enabledRegions = config.enabledRegions;
    this._environmentBlueprintId = config.environmentBlueprintId;
    this._manageAccessRoleArn = config.manageAccessRoleArn;
    this._provisioningRoleArn = config.provisioningRoleArn;
    this._regionalParameters = config.regionalParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // enabled_regions - computed: false, optional: false, required: true
  private _enabledRegions?: string[]; 
  public get enabledRegions() {
    return this.getListAttribute('enabled_regions');
  }
  public set enabledRegions(value: string[]) {
    this._enabledRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledRegionsInput() {
    return this._enabledRegions;
  }

  // environment_blueprint_id - computed: false, optional: false, required: true
  private _environmentBlueprintId?: string; 
  public get environmentBlueprintId() {
    return this.getStringAttribute('environment_blueprint_id');
  }
  public set environmentBlueprintId(value: string) {
    this._environmentBlueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentBlueprintIdInput() {
    return this._environmentBlueprintId;
  }

  // manage_access_role_arn - computed: false, optional: true, required: false
  private _manageAccessRoleArn?: string; 
  public get manageAccessRoleArn() {
    return this.getStringAttribute('manage_access_role_arn');
  }
  public set manageAccessRoleArn(value: string) {
    this._manageAccessRoleArn = value;
  }
  public resetManageAccessRoleArn() {
    this._manageAccessRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageAccessRoleArnInput() {
    return this._manageAccessRoleArn;
  }

  // provisioning_role_arn - computed: false, optional: true, required: false
  private _provisioningRoleArn?: string; 
  public get provisioningRoleArn() {
    return this.getStringAttribute('provisioning_role_arn');
  }
  public set provisioningRoleArn(value: string) {
    this._provisioningRoleArn = value;
  }
  public resetProvisioningRoleArn() {
    this._provisioningRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningRoleArnInput() {
    return this._provisioningRoleArn;
  }

  // regional_parameters - computed: false, optional: true, required: false
  private _regionalParameters?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get regionalParameters() {
    return this.interpolationForAttribute('regional_parameters');
  }
  public set regionalParameters(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._regionalParameters = value;
  }
  public resetRegionalParameters() {
    this._regionalParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionalParametersInput() {
    return this._regionalParameters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      enabled_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledRegions),
      environment_blueprint_id: cdktf.stringToTerraform(this._environmentBlueprintId),
      manage_access_role_arn: cdktf.stringToTerraform(this._manageAccessRoleArn),
      provisioning_role_arn: cdktf.stringToTerraform(this._provisioningRoleArn),
      regional_parameters: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(this._regionalParameters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      environment_blueprint_id: {
        value: cdktf.stringToHclTerraform(this._environmentBlueprintId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_access_role_arn: {
        value: cdktf.stringToHclTerraform(this._manageAccessRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioning_role_arn: {
        value: cdktf.stringToHclTerraform(this._provisioningRoleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regional_parameters: {
        value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(this._regionalParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMapMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
