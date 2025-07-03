/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerImageVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}
  */
  readonly aliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}
  */
  readonly baseImage: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}
  */
  readonly horovod?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}
  */
  readonly jobType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}
  */
  readonly mlFramework?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}
  */
  readonly processor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}
  */
  readonly programmingLang?: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#region SagemakerImageVersion#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}
  */
  readonly releaseNotes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}
  */
  readonly vendorGuidance?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version aws_sagemaker_image_version}
*/
export class SagemakerImageVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_image_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerImageVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerImageVersion to import
  * @param importFromId The id of the existing SagemakerImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerImageVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_image_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.2.0/docs/resources/sagemaker_image_version aws_sagemaker_image_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerImageVersionConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerImageVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_image_version',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.2.0',
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
    this._aliases = config.aliases;
    this._baseImage = config.baseImage;
    this._horovod = config.horovod;
    this._id = config.id;
    this._imageName = config.imageName;
    this._jobType = config.jobType;
    this._mlFramework = config.mlFramework;
    this._processor = config.processor;
    this._programmingLang = config.programmingLang;
    this._region = config.region;
    this._releaseNotes = config.releaseNotes;
    this._vendorGuidance = config.vendorGuidance;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_image - computed: false, optional: false, required: true
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // container_image - computed: true, optional: false, required: false
  public get containerImage() {
    return this.getStringAttribute('container_image');
  }

  // horovod - computed: false, optional: true, required: false
  private _horovod?: boolean | cdktf.IResolvable; 
  public get horovod() {
    return this.getBooleanAttribute('horovod');
  }
  public set horovod(value: boolean | cdktf.IResolvable) {
    this._horovod = value;
  }
  public resetHorovod() {
    this._horovod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horovodInput() {
    return this._horovod;
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

  // image_arn - computed: true, optional: false, required: false
  public get imageArn() {
    return this.getStringAttribute('image_arn');
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // job_type - computed: false, optional: true, required: false
  private _jobType?: string; 
  public get jobType() {
    return this.getStringAttribute('job_type');
  }
  public set jobType(value: string) {
    this._jobType = value;
  }
  public resetJobType() {
    this._jobType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTypeInput() {
    return this._jobType;
  }

  // ml_framework - computed: false, optional: true, required: false
  private _mlFramework?: string; 
  public get mlFramework() {
    return this.getStringAttribute('ml_framework');
  }
  public set mlFramework(value: string) {
    this._mlFramework = value;
  }
  public resetMlFramework() {
    this._mlFramework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mlFrameworkInput() {
    return this._mlFramework;
  }

  // processor - computed: false, optional: true, required: false
  private _processor?: string; 
  public get processor() {
    return this.getStringAttribute('processor');
  }
  public set processor(value: string) {
    this._processor = value;
  }
  public resetProcessor() {
    this._processor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorInput() {
    return this._processor;
  }

  // programming_lang - computed: false, optional: true, required: false
  private _programmingLang?: string; 
  public get programmingLang() {
    return this.getStringAttribute('programming_lang');
  }
  public set programmingLang(value: string) {
    this._programmingLang = value;
  }
  public resetProgrammingLang() {
    this._programmingLang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programmingLangInput() {
    return this._programmingLang;
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

  // release_notes - computed: false, optional: true, required: false
  private _releaseNotes?: string; 
  public get releaseNotes() {
    return this.getStringAttribute('release_notes');
  }
  public set releaseNotes(value: string) {
    this._releaseNotes = value;
  }
  public resetReleaseNotes() {
    this._releaseNotes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNotesInput() {
    return this._releaseNotes;
  }

  // vendor_guidance - computed: false, optional: true, required: false
  private _vendorGuidance?: string; 
  public get vendorGuidance() {
    return this.getStringAttribute('vendor_guidance');
  }
  public set vendorGuidance(value: string) {
    this._vendorGuidance = value;
  }
  public resetVendorGuidance() {
    this._vendorGuidance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorGuidanceInput() {
    return this._vendorGuidance;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      base_image: cdktf.stringToTerraform(this._baseImage),
      horovod: cdktf.booleanToTerraform(this._horovod),
      id: cdktf.stringToTerraform(this._id),
      image_name: cdktf.stringToTerraform(this._imageName),
      job_type: cdktf.stringToTerraform(this._jobType),
      ml_framework: cdktf.stringToTerraform(this._mlFramework),
      processor: cdktf.stringToTerraform(this._processor),
      programming_lang: cdktf.stringToTerraform(this._programmingLang),
      region: cdktf.stringToTerraform(this._region),
      release_notes: cdktf.stringToTerraform(this._releaseNotes),
      vendor_guidance: cdktf.stringToTerraform(this._vendorGuidance),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      base_image: {
        value: cdktf.stringToHclTerraform(this._baseImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      horovod: {
        value: cdktf.booleanToHclTerraform(this._horovod),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_type: {
        value: cdktf.stringToHclTerraform(this._jobType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ml_framework: {
        value: cdktf.stringToHclTerraform(this._mlFramework),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      processor: {
        value: cdktf.stringToHclTerraform(this._processor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      programming_lang: {
        value: cdktf.stringToHclTerraform(this._programmingLang),
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
      release_notes: {
        value: cdktf.stringToHclTerraform(this._releaseNotes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vendor_guidance: {
        value: cdktf.stringToHclTerraform(this._vendorGuidance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
