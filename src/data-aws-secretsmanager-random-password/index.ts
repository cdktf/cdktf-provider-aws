// https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsSecretsmanagerRandomPasswordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_characters DataAwsSecretsmanagerRandomPassword#exclude_characters}
  */
  readonly excludeCharacters?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_lowercase DataAwsSecretsmanagerRandomPassword#exclude_lowercase}
  */
  readonly excludeLowercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_numbers DataAwsSecretsmanagerRandomPassword#exclude_numbers}
  */
  readonly excludeNumbers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_punctuation DataAwsSecretsmanagerRandomPassword#exclude_punctuation}
  */
  readonly excludePunctuation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#exclude_uppercase DataAwsSecretsmanagerRandomPassword#exclude_uppercase}
  */
  readonly excludeUppercase?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#id DataAwsSecretsmanagerRandomPassword#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#include_space DataAwsSecretsmanagerRandomPassword#include_space}
  */
  readonly includeSpace?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#password_length DataAwsSecretsmanagerRandomPassword#password_length}
  */
  readonly passwordLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#random_password DataAwsSecretsmanagerRandomPassword#random_password}
  */
  readonly randomPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password#require_each_included_type DataAwsSecretsmanagerRandomPassword#require_each_included_type}
  */
  readonly requireEachIncludedType?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password aws_secretsmanager_random_password}
*/
export class DataAwsSecretsmanagerRandomPassword extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_secretsmanager_random_password";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/secretsmanager_random_password aws_secretsmanager_random_password} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsSecretsmanagerRandomPasswordConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsSecretsmanagerRandomPasswordConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_secretsmanager_random_password',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.58.0',
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
    this._excludeCharacters = config.excludeCharacters;
    this._excludeLowercase = config.excludeLowercase;
    this._excludeNumbers = config.excludeNumbers;
    this._excludePunctuation = config.excludePunctuation;
    this._excludeUppercase = config.excludeUppercase;
    this._id = config.id;
    this._includeSpace = config.includeSpace;
    this._passwordLength = config.passwordLength;
    this._randomPassword = config.randomPassword;
    this._requireEachIncludedType = config.requireEachIncludedType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // exclude_characters - computed: false, optional: true, required: false
  private _excludeCharacters?: string; 
  public get excludeCharacters() {
    return this.getStringAttribute('exclude_characters');
  }
  public set excludeCharacters(value: string) {
    this._excludeCharacters = value;
  }
  public resetExcludeCharacters() {
    this._excludeCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeCharactersInput() {
    return this._excludeCharacters;
  }

  // exclude_lowercase - computed: false, optional: true, required: false
  private _excludeLowercase?: boolean | cdktf.IResolvable; 
  public get excludeLowercase() {
    return this.getBooleanAttribute('exclude_lowercase');
  }
  public set excludeLowercase(value: boolean | cdktf.IResolvable) {
    this._excludeLowercase = value;
  }
  public resetExcludeLowercase() {
    this._excludeLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeLowercaseInput() {
    return this._excludeLowercase;
  }

  // exclude_numbers - computed: false, optional: true, required: false
  private _excludeNumbers?: boolean | cdktf.IResolvable; 
  public get excludeNumbers() {
    return this.getBooleanAttribute('exclude_numbers');
  }
  public set excludeNumbers(value: boolean | cdktf.IResolvable) {
    this._excludeNumbers = value;
  }
  public resetExcludeNumbers() {
    this._excludeNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNumbersInput() {
    return this._excludeNumbers;
  }

  // exclude_punctuation - computed: false, optional: true, required: false
  private _excludePunctuation?: boolean | cdktf.IResolvable; 
  public get excludePunctuation() {
    return this.getBooleanAttribute('exclude_punctuation');
  }
  public set excludePunctuation(value: boolean | cdktf.IResolvable) {
    this._excludePunctuation = value;
  }
  public resetExcludePunctuation() {
    this._excludePunctuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePunctuationInput() {
    return this._excludePunctuation;
  }

  // exclude_uppercase - computed: false, optional: true, required: false
  private _excludeUppercase?: boolean | cdktf.IResolvable; 
  public get excludeUppercase() {
    return this.getBooleanAttribute('exclude_uppercase');
  }
  public set excludeUppercase(value: boolean | cdktf.IResolvable) {
    this._excludeUppercase = value;
  }
  public resetExcludeUppercase() {
    this._excludeUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeUppercaseInput() {
    return this._excludeUppercase;
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

  // include_space - computed: false, optional: true, required: false
  private _includeSpace?: boolean | cdktf.IResolvable; 
  public get includeSpace() {
    return this.getBooleanAttribute('include_space');
  }
  public set includeSpace(value: boolean | cdktf.IResolvable) {
    this._includeSpace = value;
  }
  public resetIncludeSpace() {
    this._includeSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSpaceInput() {
    return this._includeSpace;
  }

  // password_length - computed: false, optional: true, required: false
  private _passwordLength?: number; 
  public get passwordLength() {
    return this.getNumberAttribute('password_length');
  }
  public set passwordLength(value: number) {
    this._passwordLength = value;
  }
  public resetPasswordLength() {
    this._passwordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLengthInput() {
    return this._passwordLength;
  }

  // random_password - computed: true, optional: true, required: false
  private _randomPassword?: string; 
  public get randomPassword() {
    return this.getStringAttribute('random_password');
  }
  public set randomPassword(value: string) {
    this._randomPassword = value;
  }
  public resetRandomPassword() {
    this._randomPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomPasswordInput() {
    return this._randomPassword;
  }

  // require_each_included_type - computed: false, optional: true, required: false
  private _requireEachIncludedType?: boolean | cdktf.IResolvable; 
  public get requireEachIncludedType() {
    return this.getBooleanAttribute('require_each_included_type');
  }
  public set requireEachIncludedType(value: boolean | cdktf.IResolvable) {
    this._requireEachIncludedType = value;
  }
  public resetRequireEachIncludedType() {
    this._requireEachIncludedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEachIncludedTypeInput() {
    return this._requireEachIncludedType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      exclude_characters: cdktf.stringToTerraform(this._excludeCharacters),
      exclude_lowercase: cdktf.booleanToTerraform(this._excludeLowercase),
      exclude_numbers: cdktf.booleanToTerraform(this._excludeNumbers),
      exclude_punctuation: cdktf.booleanToTerraform(this._excludePunctuation),
      exclude_uppercase: cdktf.booleanToTerraform(this._excludeUppercase),
      id: cdktf.stringToTerraform(this._id),
      include_space: cdktf.booleanToTerraform(this._includeSpace),
      password_length: cdktf.numberToTerraform(this._passwordLength),
      random_password: cdktf.stringToTerraform(this._randomPassword),
      require_each_included_type: cdktf.booleanToTerraform(this._requireEachIncludedType),
    };
  }
}
