// https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsPollyVoicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices#engine DataAwsPollyVoices#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices#include_additional_language_codes DataAwsPollyVoices#include_additional_language_codes}
  */
  readonly includeAdditionalLanguageCodes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices#language_code DataAwsPollyVoices#language_code}
  */
  readonly languageCode?: string;
  /**
  * voices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices#voices DataAwsPollyVoices#voices}
  */
  readonly voices?: DataAwsPollyVoicesVoices[] | cdktf.IResolvable;
}
export interface DataAwsPollyVoicesVoices {
}

export function dataAwsPollyVoicesVoicesToTerraform(struct?: DataAwsPollyVoicesVoices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsPollyVoicesVoicesToHclTerraform(struct?: DataAwsPollyVoicesVoices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsPollyVoicesVoicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsPollyVoicesVoices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsPollyVoicesVoices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // additional_language_codes - computed: true, optional: false, required: false
  public get additionalLanguageCodes() {
    return this.getListAttribute('additional_language_codes');
  }

  // gender - computed: true, optional: false, required: false
  public get gender() {
    return this.getStringAttribute('gender');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language_code - computed: true, optional: false, required: false
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }

  // language_name - computed: true, optional: false, required: false
  public get languageName() {
    return this.getStringAttribute('language_name');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // supported_engines - computed: true, optional: false, required: false
  public get supportedEngines() {
    return this.getListAttribute('supported_engines');
  }
}

export class DataAwsPollyVoicesVoicesList extends cdktf.ComplexList {
  public internalValue? : DataAwsPollyVoicesVoices[] | cdktf.IResolvable

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
  public get(index: number): DataAwsPollyVoicesVoicesOutputReference {
    return new DataAwsPollyVoicesVoicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices aws_polly_voices}
*/
export class DataAwsPollyVoices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_polly_voices";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsPollyVoices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsPollyVoices to import
  * @param importFromId The id of the existing DataAwsPollyVoices that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsPollyVoices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_polly_voices", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.33.0/docs/data-sources/polly_voices aws_polly_voices} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsPollyVoicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsPollyVoicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_polly_voices',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.33.0',
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
    this._engine = config.engine;
    this._includeAdditionalLanguageCodes = config.includeAdditionalLanguageCodes;
    this._languageCode = config.languageCode;
    this._voices.internalValue = config.voices;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_additional_language_codes - computed: false, optional: true, required: false
  private _includeAdditionalLanguageCodes?: boolean | cdktf.IResolvable; 
  public get includeAdditionalLanguageCodes() {
    return this.getBooleanAttribute('include_additional_language_codes');
  }
  public set includeAdditionalLanguageCodes(value: boolean | cdktf.IResolvable) {
    this._includeAdditionalLanguageCodes = value;
  }
  public resetIncludeAdditionalLanguageCodes() {
    this._includeAdditionalLanguageCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAdditionalLanguageCodesInput() {
    return this._includeAdditionalLanguageCodes;
  }

  // language_code - computed: false, optional: true, required: false
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  public resetLanguageCode() {
    this._languageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // voices - computed: false, optional: true, required: false
  private _voices = new DataAwsPollyVoicesVoicesList(this, "voices", false);
  public get voices() {
    return this._voices;
  }
  public putVoices(value: DataAwsPollyVoicesVoices[] | cdktf.IResolvable) {
    this._voices.internalValue = value;
  }
  public resetVoices() {
    this._voices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voicesInput() {
    return this._voices.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine: cdktf.stringToTerraform(this._engine),
      include_additional_language_codes: cdktf.booleanToTerraform(this._includeAdditionalLanguageCodes),
      language_code: cdktf.stringToTerraform(this._languageCode),
      voices: cdktf.listMapper(dataAwsPollyVoicesVoicesToTerraform, true)(this._voices.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine: {
        value: cdktf.stringToHclTerraform(this._engine),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_additional_language_codes: {
        value: cdktf.booleanToHclTerraform(this._includeAdditionalLanguageCodes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      language_code: {
        value: cdktf.stringToHclTerraform(this._languageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voices: {
        value: cdktf.listMapperHcl(dataAwsPollyVoicesVoicesToHclTerraform, true)(this._voices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAwsPollyVoicesVoicesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
