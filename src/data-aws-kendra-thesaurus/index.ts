/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsKendraThesaurusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus#id DataAwsKendraThesaurus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus#index_id DataAwsKendraThesaurus#index_id}
  */
  readonly indexId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus#tags DataAwsKendraThesaurus#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus#thesaurus_id DataAwsKendraThesaurus#thesaurus_id}
  */
  readonly thesaurusId: string;
}
export interface DataAwsKendraThesaurusSourceS3Path {
}

export function dataAwsKendraThesaurusSourceS3PathToTerraform(struct?: DataAwsKendraThesaurusSourceS3Path): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsKendraThesaurusSourceS3PathToHclTerraform(struct?: DataAwsKendraThesaurusSourceS3Path): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsKendraThesaurusSourceS3PathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsKendraThesaurusSourceS3Path | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsKendraThesaurusSourceS3Path | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataAwsKendraThesaurusSourceS3PathList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsKendraThesaurusSourceS3PathOutputReference {
    return new DataAwsKendraThesaurusSourceS3PathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus aws_kendra_thesaurus}
*/
export class DataAwsKendraThesaurus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kendra_thesaurus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsKendraThesaurus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsKendraThesaurus to import
  * @param importFromId The id of the existing DataAwsKendraThesaurus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsKendraThesaurus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_kendra_thesaurus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.82.2/docs/data-sources/kendra_thesaurus aws_kendra_thesaurus} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsKendraThesaurusConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsKendraThesaurusConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kendra_thesaurus',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.82.2',
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
    this._indexId = config.indexId;
    this._tags = config.tags;
    this._thesaurusId = config.thesaurusId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // file_size_bytes - computed: true, optional: false, required: false
  public get fileSizeBytes() {
    return this.getNumberAttribute('file_size_bytes');
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

  // index_id - computed: false, optional: false, required: true
  private _indexId?: string; 
  public get indexId() {
    return this.getStringAttribute('index_id');
  }
  public set indexId(value: string) {
    this._indexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexIdInput() {
    return this._indexId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // source_s3_path - computed: true, optional: false, required: false
  private _sourceS3Path = new DataAwsKendraThesaurusSourceS3PathList(this, "source_s3_path", false);
  public get sourceS3Path() {
    return this._sourceS3Path;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // synonym_rule_count - computed: true, optional: false, required: false
  public get synonymRuleCount() {
    return this.getNumberAttribute('synonym_rule_count');
  }

  // tags - computed: true, optional: true, required: false
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

  // term_count - computed: true, optional: false, required: false
  public get termCount() {
    return this.getNumberAttribute('term_count');
  }

  // thesaurus_id - computed: false, optional: false, required: true
  private _thesaurusId?: string; 
  public get thesaurusId() {
    return this.getStringAttribute('thesaurus_id');
  }
  public set thesaurusId(value: string) {
    this._thesaurusId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thesaurusIdInput() {
    return this._thesaurusId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      index_id: cdktf.stringToTerraform(this._indexId),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      thesaurus_id: cdktf.stringToTerraform(this._thesaurusId),
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
      index_id: {
        value: cdktf.stringToHclTerraform(this._indexId),
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
      thesaurus_id: {
        value: cdktf.stringToHclTerraform(this._thesaurusId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
