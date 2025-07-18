/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TranscribeLanguageModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}
  */
  readonly baseModelName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#id TranscribeLanguageModel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#language_code TranscribeLanguageModel#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#model_name TranscribeLanguageModel#model_name}
  */
  readonly modelName: string;
  /**
  * Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#region TranscribeLanguageModel#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#tags TranscribeLanguageModel#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * input_data_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}
  */
  readonly inputDataConfig: TranscribeLanguageModelInputDataConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}
  */
  readonly timeouts?: TranscribeLanguageModelTimeouts;
}
export interface TranscribeLanguageModelInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}
  */
  readonly dataAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}
  */
  readonly tuningDataS3Uri?: string;
}

export function transcribeLanguageModelInputDataConfigToTerraform(struct?: TranscribeLanguageModelInputDataConfigOutputReference | TranscribeLanguageModelInputDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_access_role_arn: cdktf.stringToTerraform(struct!.dataAccessRoleArn),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    tuning_data_s3_uri: cdktf.stringToTerraform(struct!.tuningDataS3Uri),
  }
}


export function transcribeLanguageModelInputDataConfigToHclTerraform(struct?: TranscribeLanguageModelInputDataConfigOutputReference | TranscribeLanguageModelInputDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_access_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.dataAccessRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.s3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tuning_data_s3_uri: {
      value: cdktf.stringToHclTerraform(struct!.tuningDataS3Uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeLanguageModelInputDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TranscribeLanguageModelInputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessRoleArn = this._dataAccessRoleArn;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._tuningDataS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.tuningDataS3Uri = this._tuningDataS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeLanguageModelInputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataAccessRoleArn = undefined;
      this._s3Uri = undefined;
      this._tuningDataS3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataAccessRoleArn = value.dataAccessRoleArn;
      this._s3Uri = value.s3Uri;
      this._tuningDataS3Uri = value.tuningDataS3Uri;
    }
  }

  // data_access_role_arn - computed: false, optional: false, required: true
  private _dataAccessRoleArn?: string; 
  public get dataAccessRoleArn() {
    return this.getStringAttribute('data_access_role_arn');
  }
  public set dataAccessRoleArn(value: string) {
    this._dataAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessRoleArnInput() {
    return this._dataAccessRoleArn;
  }

  // s3_uri - computed: false, optional: false, required: true
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get s3UriInput() {
    return this._s3Uri;
  }

  // tuning_data_s3_uri - computed: true, optional: true, required: false
  private _tuningDataS3Uri?: string; 
  public get tuningDataS3Uri() {
    return this.getStringAttribute('tuning_data_s3_uri');
  }
  public set tuningDataS3Uri(value: string) {
    this._tuningDataS3Uri = value;
  }
  public resetTuningDataS3Uri() {
    this._tuningDataS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuningDataS3UriInput() {
    return this._tuningDataS3Uri;
  }
}
export interface TranscribeLanguageModelTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#create TranscribeLanguageModel#create}
  */
  readonly create?: string;
}

export function transcribeLanguageModelTimeoutsToTerraform(struct?: TranscribeLanguageModelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function transcribeLanguageModelTimeoutsToHclTerraform(struct?: TranscribeLanguageModelTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TranscribeLanguageModelTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TranscribeLanguageModelTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TranscribeLanguageModelTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model aws_transcribe_language_model}
*/
export class TranscribeLanguageModel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transcribe_language_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TranscribeLanguageModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TranscribeLanguageModel to import
  * @param importFromId The id of the existing TranscribeLanguageModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TranscribeLanguageModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_transcribe_language_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/transcribe_language_model aws_transcribe_language_model} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TranscribeLanguageModelConfig
  */
  public constructor(scope: Construct, id: string, config: TranscribeLanguageModelConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transcribe_language_model',
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
    this._baseModelName = config.baseModelName;
    this._id = config.id;
    this._languageCode = config.languageCode;
    this._modelName = config.modelName;
    this._region = config.region;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // base_model_name - computed: false, optional: false, required: true
  private _baseModelName?: string; 
  public get baseModelName() {
    return this.getStringAttribute('base_model_name');
  }
  public set baseModelName(value: string) {
    this._baseModelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseModelNameInput() {
    return this._baseModelName;
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

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // model_name - computed: false, optional: false, required: true
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
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

  // input_data_config - computed: false, optional: false, required: true
  private _inputDataConfig = new TranscribeLanguageModelInputDataConfigOutputReference(this, "input_data_config");
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: TranscribeLanguageModelInputDataConfig) {
    this._inputDataConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TranscribeLanguageModelTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TranscribeLanguageModelTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_model_name: cdktf.stringToTerraform(this._baseModelName),
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      model_name: cdktf.stringToTerraform(this._modelName),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      input_data_config: transcribeLanguageModelInputDataConfigToTerraform(this._inputDataConfig.internalValue),
      timeouts: transcribeLanguageModelTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_model_name: {
        value: cdktf.stringToHclTerraform(this._baseModelName),
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
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_name: {
        value: cdktf.stringToHclTerraform(this._modelName),
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
      input_data_config: {
        value: transcribeLanguageModelInputDataConfigToHclTerraform(this._inputDataConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TranscribeLanguageModelInputDataConfigList",
      },
      timeouts: {
        value: transcribeLanguageModelTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TranscribeLanguageModelTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
