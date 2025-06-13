/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_description SagemakerHub#hub_description}
  */
  readonly hubDescription: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_display_name SagemakerHub#hub_display_name}
  */
  readonly hubDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_name SagemakerHub#hub_name}
  */
  readonly hubName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#hub_search_keywords SagemakerHub#hub_search_keywords}
  */
  readonly hubSearchKeywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#id SagemakerHub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#tags SagemakerHub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#tags_all SagemakerHub#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * s3_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#s3_storage_config SagemakerHub#s3_storage_config}
  */
  readonly s3StorageConfig?: SagemakerHubS3StorageConfig;
}
export interface SagemakerHubS3StorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#s3_output_path SagemakerHub#s3_output_path}
  */
  readonly s3OutputPath?: string;
}

export function sagemakerHubS3StorageConfigToTerraform(struct?: SagemakerHubS3StorageConfigOutputReference | SagemakerHubS3StorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_output_path: cdktf.stringToTerraform(struct!.s3OutputPath),
  }
}


export function sagemakerHubS3StorageConfigToHclTerraform(struct?: SagemakerHubS3StorageConfigOutputReference | SagemakerHubS3StorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_output_path: {
      value: cdktf.stringToHclTerraform(struct!.s3OutputPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SagemakerHubS3StorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SagemakerHubS3StorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3OutputPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3OutputPath = this._s3OutputPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SagemakerHubS3StorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3OutputPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3OutputPath = value.s3OutputPath;
    }
  }

  // s3_output_path - computed: false, optional: true, required: false
  private _s3OutputPath?: string; 
  public get s3OutputPath() {
    return this.getStringAttribute('s3_output_path');
  }
  public set s3OutputPath(value: string) {
    this._s3OutputPath = value;
  }
  public resetS3OutputPath() {
    this._s3OutputPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3OutputPathInput() {
    return this._s3OutputPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub aws_sagemaker_hub}
*/
export class SagemakerHub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_sagemaker_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SagemakerHub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SagemakerHub to import
  * @param importFromId The id of the existing SagemakerHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SagemakerHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_sagemaker_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_hub aws_sagemaker_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerHubConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerHubConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_hub',
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
    this._hubDescription = config.hubDescription;
    this._hubDisplayName = config.hubDisplayName;
    this._hubName = config.hubName;
    this._hubSearchKeywords = config.hubSearchKeywords;
    this._id = config.id;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._s3StorageConfig.internalValue = config.s3StorageConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // hub_description - computed: false, optional: false, required: true
  private _hubDescription?: string; 
  public get hubDescription() {
    return this.getStringAttribute('hub_description');
  }
  public set hubDescription(value: string) {
    this._hubDescription = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubDescriptionInput() {
    return this._hubDescription;
  }

  // hub_display_name - computed: false, optional: true, required: false
  private _hubDisplayName?: string; 
  public get hubDisplayName() {
    return this.getStringAttribute('hub_display_name');
  }
  public set hubDisplayName(value: string) {
    this._hubDisplayName = value;
  }
  public resetHubDisplayName() {
    this._hubDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubDisplayNameInput() {
    return this._hubDisplayName;
  }

  // hub_name - computed: false, optional: false, required: true
  private _hubName?: string; 
  public get hubName() {
    return this.getStringAttribute('hub_name');
  }
  public set hubName(value: string) {
    this._hubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNameInput() {
    return this._hubName;
  }

  // hub_search_keywords - computed: false, optional: true, required: false
  private _hubSearchKeywords?: string[]; 
  public get hubSearchKeywords() {
    return cdktf.Fn.tolist(this.getListAttribute('hub_search_keywords'));
  }
  public set hubSearchKeywords(value: string[]) {
    this._hubSearchKeywords = value;
  }
  public resetHubSearchKeywords() {
    this._hubSearchKeywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubSearchKeywordsInput() {
    return this._hubSearchKeywords;
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

  // s3_storage_config - computed: false, optional: true, required: false
  private _s3StorageConfig = new SagemakerHubS3StorageConfigOutputReference(this, "s3_storage_config");
  public get s3StorageConfig() {
    return this._s3StorageConfig;
  }
  public putS3StorageConfig(value: SagemakerHubS3StorageConfig) {
    this._s3StorageConfig.internalValue = value;
  }
  public resetS3StorageConfig() {
    this._s3StorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StorageConfigInput() {
    return this._s3StorageConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hub_description: cdktf.stringToTerraform(this._hubDescription),
      hub_display_name: cdktf.stringToTerraform(this._hubDisplayName),
      hub_name: cdktf.stringToTerraform(this._hubName),
      hub_search_keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hubSearchKeywords),
      id: cdktf.stringToTerraform(this._id),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      s3_storage_config: sagemakerHubS3StorageConfigToTerraform(this._s3StorageConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hub_description: {
        value: cdktf.stringToHclTerraform(this._hubDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_display_name: {
        value: cdktf.stringToHclTerraform(this._hubDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_name: {
        value: cdktf.stringToHclTerraform(this._hubName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hub_search_keywords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hubSearchKeywords),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      s3_storage_config: {
        value: sagemakerHubS3StorageConfigToHclTerraform(this._s3StorageConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SagemakerHubS3StorageConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
