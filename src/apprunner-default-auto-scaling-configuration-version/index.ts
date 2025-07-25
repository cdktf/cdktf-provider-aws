/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/apprunner_default_auto_scaling_configuration_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerDefaultAutoScalingConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/apprunner_default_auto_scaling_configuration_version#auto_scaling_configuration_arn ApprunnerDefaultAutoScalingConfigurationVersion#auto_scaling_configuration_arn}
  */
  readonly autoScalingConfigurationArn: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/apprunner_default_auto_scaling_configuration_version#region ApprunnerDefaultAutoScalingConfigurationVersion#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/apprunner_default_auto_scaling_configuration_version aws_apprunner_default_auto_scaling_configuration_version}
*/
export class ApprunnerDefaultAutoScalingConfigurationVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apprunner_default_auto_scaling_configuration_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApprunnerDefaultAutoScalingConfigurationVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApprunnerDefaultAutoScalingConfigurationVersion to import
  * @param importFromId The id of the existing ApprunnerDefaultAutoScalingConfigurationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/apprunner_default_auto_scaling_configuration_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApprunnerDefaultAutoScalingConfigurationVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apprunner_default_auto_scaling_configuration_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/apprunner_default_auto_scaling_configuration_version aws_apprunner_default_auto_scaling_configuration_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerDefaultAutoScalingConfigurationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerDefaultAutoScalingConfigurationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_default_auto_scaling_configuration_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.5.0',
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
    this._autoScalingConfigurationArn = config.autoScalingConfigurationArn;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scaling_configuration_arn - computed: false, optional: false, required: true
  private _autoScalingConfigurationArn?: string; 
  public get autoScalingConfigurationArn() {
    return this.getStringAttribute('auto_scaling_configuration_arn');
  }
  public set autoScalingConfigurationArn(value: string) {
    this._autoScalingConfigurationArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationArnInput() {
    return this._autoScalingConfigurationArn;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
      auto_scaling_configuration_arn: cdktf.stringToTerraform(this._autoScalingConfigurationArn),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_configuration_arn: {
        value: cdktf.stringToHclTerraform(this._autoScalingConfigurationArn),
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
