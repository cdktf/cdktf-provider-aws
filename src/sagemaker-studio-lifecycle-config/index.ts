/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerStudioLifecycleConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#id SagemakerStudioLifecycleConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#region SagemakerStudioLifecycleConfig#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_app_type SagemakerStudioLifecycleConfig#studio_lifecycle_config_app_type}
  */
  readonly studioLifecycleConfigAppType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_content SagemakerStudioLifecycleConfig#studio_lifecycle_config_content}
  */
  readonly studioLifecycleConfigContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#studio_lifecycle_config_name SagemakerStudioLifecycleConfig#studio_lifecycle_config_name}
  */
  readonly studioLifecycleConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#tags SagemakerStudioLifecycleConfig#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#tags_all SagemakerStudioLifecycleConfig#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config}
*/
export class SagemakerStudioLifecycleConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_studio_lifecycle_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerStudioLifecycleConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerStudioLifecycleConfig to import
  * @param importFromId The id of the existing SagemakerStudioLifecycleConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerStudioLifecycleConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_studio_lifecycle_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/sagemaker_studio_lifecycle_config aws_sagemaker_studio_lifecycle_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerStudioLifecycleConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerStudioLifecycleConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_studio_lifecycle_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
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
    this._id = config.id;
    this._region = config.region;
    this._studioLifecycleConfigAppType = config.studioLifecycleConfigAppType;
    this._studioLifecycleConfigContent = config.studioLifecycleConfigContent;
    this._studioLifecycleConfigName = config.studioLifecycleConfigName;
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

  // studio_lifecycle_config_app_type - computed: false, optional: false, required: true
  private _studioLifecycleConfigAppType?: string; 
  public get studioLifecycleConfigAppType() {
    return this.getStringAttribute('studio_lifecycle_config_app_type');
  }
  public set studioLifecycleConfigAppType(value: string) {
    this._studioLifecycleConfigAppType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioLifecycleConfigAppTypeInput() {
    return this._studioLifecycleConfigAppType;
  }

  // studio_lifecycle_config_content - computed: false, optional: false, required: true
  private _studioLifecycleConfigContent?: string; 
  public get studioLifecycleConfigContent() {
    return this.getStringAttribute('studio_lifecycle_config_content');
  }
  public set studioLifecycleConfigContent(value: string) {
    this._studioLifecycleConfigContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioLifecycleConfigContentInput() {
    return this._studioLifecycleConfigContent;
  }

  // studio_lifecycle_config_name - computed: false, optional: false, required: true
  private _studioLifecycleConfigName?: string; 
  public get studioLifecycleConfigName() {
    return this.getStringAttribute('studio_lifecycle_config_name');
  }
  public set studioLifecycleConfigName(value: string) {
    this._studioLifecycleConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get studioLifecycleConfigNameInput() {
    return this._studioLifecycleConfigName;
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
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
      studio_lifecycle_config_app_type: cdktf.stringToTerraform(this._studioLifecycleConfigAppType),
      studio_lifecycle_config_content: cdktf.stringToTerraform(this._studioLifecycleConfigContent),
      studio_lifecycle_config_name: cdktf.stringToTerraform(this._studioLifecycleConfigName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      studio_lifecycle_config_app_type: {
        value: cdktf.stringToHclTerraform(this._studioLifecycleConfigAppType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      studio_lifecycle_config_content: {
        value: cdktf.stringToHclTerraform(this._studioLifecycleConfigContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      studio_lifecycle_config_name: {
        value: cdktf.stringToHclTerraform(this._studioLifecycleConfigName),
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
