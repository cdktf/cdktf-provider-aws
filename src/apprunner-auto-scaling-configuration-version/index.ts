/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApprunnerAutoScalingConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#auto_scaling_configuration_name ApprunnerAutoScalingConfigurationVersion#auto_scaling_configuration_name}
  */
  readonly autoScalingConfigurationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#id ApprunnerAutoScalingConfigurationVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#max_concurrency ApprunnerAutoScalingConfigurationVersion#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#max_size ApprunnerAutoScalingConfigurationVersion#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#min_size ApprunnerAutoScalingConfigurationVersion#min_size}
  */
  readonly minSize?: number;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#region ApprunnerAutoScalingConfigurationVersion#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#tags ApprunnerAutoScalingConfigurationVersion#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#tags_all ApprunnerAutoScalingConfigurationVersion#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version aws_apprunner_auto_scaling_configuration_version}
*/
export class ApprunnerAutoScalingConfigurationVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_apprunner_auto_scaling_configuration_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApprunnerAutoScalingConfigurationVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApprunnerAutoScalingConfigurationVersion to import
  * @param importFromId The id of the existing ApprunnerAutoScalingConfigurationVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApprunnerAutoScalingConfigurationVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_apprunner_auto_scaling_configuration_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.6.0/docs/resources/apprunner_auto_scaling_configuration_version aws_apprunner_auto_scaling_configuration_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApprunnerAutoScalingConfigurationVersionConfig
  */
  public constructor(scope: Construct, id: string, config: ApprunnerAutoScalingConfigurationVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_apprunner_auto_scaling_configuration_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.6.0',
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
    this._autoScalingConfigurationName = config.autoScalingConfigurationName;
    this._id = config.id;
    this._maxConcurrency = config.maxConcurrency;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // auto_scaling_configuration_name - computed: false, optional: false, required: true
  private _autoScalingConfigurationName?: string; 
  public get autoScalingConfigurationName() {
    return this.getStringAttribute('auto_scaling_configuration_name');
  }
  public set autoScalingConfigurationName(value: string) {
    this._autoScalingConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScalingConfigurationNameInput() {
    return this._autoScalingConfigurationName;
  }

  // auto_scaling_configuration_revision - computed: true, optional: false, required: false
  public get autoScalingConfigurationRevision() {
    return this.getNumberAttribute('auto_scaling_configuration_revision');
  }

  // has_associated_service - computed: true, optional: false, required: false
  public get hasAssociatedService() {
    return this.getBooleanAttribute('has_associated_service');
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

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // latest - computed: true, optional: false, required: false
  public get latest() {
    return this.getBooleanAttribute('latest');
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string }; 
  public get tagsAll() {
    return this.getStringMapAttribute('tags_all');
  }
  public set tagsAll(value: { [key: string]: string }) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scaling_configuration_name: cdktf.stringToTerraform(this._autoScalingConfigurationName),
      id: cdktf.stringToTerraform(this._id),
      max_concurrency: cdktf.numberToTerraform(this._maxConcurrency),
      max_size: cdktf.numberToTerraform(this._maxSize),
      min_size: cdktf.numberToTerraform(this._minSize),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scaling_configuration_name: {
        value: cdktf.stringToHclTerraform(this._autoScalingConfigurationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrency: {
        value: cdktf.numberToHclTerraform(this._maxConcurrency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_size: {
        value: cdktf.numberToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_size: {
        value: cdktf.numberToHclTerraform(this._minSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags_all: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagsAll),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
