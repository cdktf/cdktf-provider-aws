// https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TranscribeVocabularyFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}
  */
  readonly vocabularyFilterFileUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}
  */
  readonly vocabularyFilterName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}
  */
  readonly words?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter}
*/
export class TranscribeVocabularyFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_transcribe_vocabulary_filter";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TranscribeVocabularyFilterConfig
  */
  public constructor(scope: Construct, id: string, config: TranscribeVocabularyFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_transcribe_vocabulary_filter',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
        providerVersionConstraint: '~> 4.0'
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
    this._languageCode = config.languageCode;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._vocabularyFilterFileUri = config.vocabularyFilterFileUri;
    this._vocabularyFilterName = config.vocabularyFilterName;
    this._words = config.words;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // download_uri - computed: true, optional: false, required: false
  public get downloadUri() {
    return this.getStringAttribute('download_uri');
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

  // vocabulary_filter_file_uri - computed: false, optional: true, required: false
  private _vocabularyFilterFileUri?: string; 
  public get vocabularyFilterFileUri() {
    return this.getStringAttribute('vocabulary_filter_file_uri');
  }
  public set vocabularyFilterFileUri(value: string) {
    this._vocabularyFilterFileUri = value;
  }
  public resetVocabularyFilterFileUri() {
    this._vocabularyFilterFileUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterFileUriInput() {
    return this._vocabularyFilterFileUri;
  }

  // vocabulary_filter_name - computed: false, optional: false, required: true
  private _vocabularyFilterName?: string; 
  public get vocabularyFilterName() {
    return this.getStringAttribute('vocabulary_filter_name');
  }
  public set vocabularyFilterName(value: string) {
    this._vocabularyFilterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterNameInput() {
    return this._vocabularyFilterName;
  }

  // words - computed: false, optional: true, required: false
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  public resetWords() {
    this._words = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      vocabulary_filter_file_uri: cdktf.stringToTerraform(this._vocabularyFilterFileUri),
      vocabulary_filter_name: cdktf.stringToTerraform(this._vocabularyFilterName),
      words: cdktf.listMapper(cdktf.stringToTerraform, false)(this._words),
    };
  }
}
