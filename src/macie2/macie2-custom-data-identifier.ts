// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Macie 2
*/
export interface Macie2CustomDataIdentifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#description Macie2CustomDataIdentifier#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#ignore_words Macie2CustomDataIdentifier#ignore_words}
  */
  readonly ignoreWords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#keywords Macie2CustomDataIdentifier#keywords}
  */
  readonly keywords?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}
  */
  readonly maximumMatchDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#name Macie2CustomDataIdentifier#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#name_prefix Macie2CustomDataIdentifier#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#regex Macie2CustomDataIdentifier#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#tags Macie2CustomDataIdentifier#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html#tags_all Macie2CustomDataIdentifier#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier}
*/
export class Macie2CustomDataIdentifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_macie2_custom_data_identifier";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/macie2_custom_data_identifier.html aws_macie2_custom_data_identifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Macie2CustomDataIdentifierConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Macie2CustomDataIdentifierConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_macie2_custom_data_identifier',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._ignoreWords = config.ignoreWords;
    this._keywords = config.keywords;
    this._maximumMatchDistance = config.maximumMatchDistance;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._regex = config.regex;
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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_words - computed: false, optional: true, required: false
  private _ignoreWords?: string[]; 
  public get ignoreWords() {
    return this.getListAttribute('ignore_words');
  }
  public set ignoreWords(value: string[]) {
    this._ignoreWords = value;
  }
  public resetIgnoreWords() {
    this._ignoreWords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWordsInput() {
    return this._ignoreWords;
  }

  // keywords - computed: false, optional: true, required: false
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  public resetKeywords() {
    this._keywords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // maximum_match_distance - computed: true, optional: true, required: false
  private _maximumMatchDistance?: number; 
  public get maximumMatchDistance() {
    return this.getNumberAttribute('maximum_match_distance');
  }
  public set maximumMatchDistance(value: number) {
    this._maximumMatchDistance = value;
  }
  public resetMaximumMatchDistance() {
    this._maximumMatchDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMatchDistanceInput() {
    return this._maximumMatchDistance;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable; 
  public get tags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable; 
  public get tagsAll() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('tags_all') as any;
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      ignore_words: cdktf.listMapper(cdktf.stringToTerraform)(this._ignoreWords),
      keywords: cdktf.listMapper(cdktf.stringToTerraform)(this._keywords),
      maximum_match_distance: cdktf.numberToTerraform(this._maximumMatchDistance),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      regex: cdktf.stringToTerraform(this._regex),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
    };
  }
}
