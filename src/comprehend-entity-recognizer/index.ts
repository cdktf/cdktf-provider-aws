// https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComprehendEntityRecognizerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}
  */
  readonly dataAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#id ComprehendEntityRecognizer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}
  */
  readonly modelKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#name ComprehendEntityRecognizer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#tags_all ComprehendEntityRecognizer#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}
  */
  readonly versionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#version_name_prefix ComprehendEntityRecognizer#version_name_prefix}
  */
  readonly versionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * input_data_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}
  */
  readonly inputDataConfig: ComprehendEntityRecognizerInputDataConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#timeouts ComprehendEntityRecognizer#timeouts}
  */
  readonly timeouts?: ComprehendEntityRecognizerTimeouts;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}
  */
  readonly vpcConfig?: ComprehendEntityRecognizerVpcConfig;
}
export interface ComprehendEntityRecognizerInputDataConfigAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}
  */
  readonly testS3Uri?: string;
}

export function comprehendEntityRecognizerInputDataConfigAnnotationsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference | ComprehendEntityRecognizerInputDataConfigAnnotations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    test_s3_uri: cdktf.stringToTerraform(struct!.testS3Uri),
  }
}

export class ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigAnnotations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._testS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.testS3Uri = this._testS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigAnnotations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Uri = undefined;
      this._testS3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Uri = value.s3Uri;
      this._testS3Uri = value.testS3Uri;
    }
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

  // test_s3_uri - computed: false, optional: true, required: false
  private _testS3Uri?: string; 
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
  public set testS3Uri(value: string) {
    this._testS3Uri = value;
  }
  public resetTestS3Uri() {
    this._testS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testS3UriInput() {
    return this._testS3Uri;
  }
}
export interface ComprehendEntityRecognizerInputDataConfigAugmentedManifests {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}
  */
  readonly annotationDataS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}
  */
  readonly attributeNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}
  */
  readonly documentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}
  */
  readonly sourceDocumentsS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}
  */
  readonly split?: string;
}

export function comprehendEntityRecognizerInputDataConfigAugmentedManifestsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_data_s3_uri: cdktf.stringToTerraform(struct!.annotationDataS3Uri),
    attribute_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.attributeNames),
    document_type: cdktf.stringToTerraform(struct!.documentType),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    source_documents_s3_uri: cdktf.stringToTerraform(struct!.sourceDocumentsS3Uri),
    split: cdktf.stringToTerraform(struct!.split),
  }
}

export class ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationDataS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationDataS3Uri = this._annotationDataS3Uri;
    }
    if (this._attributeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeNames = this._attributeNames;
    }
    if (this._documentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentType = this._documentType;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._sourceDocumentsS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDocumentsS3Uri = this._sourceDocumentsS3Uri;
    }
    if (this._split !== undefined) {
      hasAnyValues = true;
      internalValueResult.split = this._split;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationDataS3Uri = undefined;
      this._attributeNames = undefined;
      this._documentType = undefined;
      this._s3Uri = undefined;
      this._sourceDocumentsS3Uri = undefined;
      this._split = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationDataS3Uri = value.annotationDataS3Uri;
      this._attributeNames = value.attributeNames;
      this._documentType = value.documentType;
      this._s3Uri = value.s3Uri;
      this._sourceDocumentsS3Uri = value.sourceDocumentsS3Uri;
      this._split = value.split;
    }
  }

  // annotation_data_s3_uri - computed: false, optional: true, required: false
  private _annotationDataS3Uri?: string; 
  public get annotationDataS3Uri() {
    return this.getStringAttribute('annotation_data_s3_uri');
  }
  public set annotationDataS3Uri(value: string) {
    this._annotationDataS3Uri = value;
  }
  public resetAnnotationDataS3Uri() {
    this._annotationDataS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationDataS3UriInput() {
    return this._annotationDataS3Uri;
  }

  // attribute_names - computed: false, optional: false, required: true
  private _attributeNames?: string[]; 
  public get attributeNames() {
    return this.getListAttribute('attribute_names');
  }
  public set attributeNames(value: string[]) {
    this._attributeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNamesInput() {
    return this._attributeNames;
  }

  // document_type - computed: false, optional: true, required: false
  private _documentType?: string; 
  public get documentType() {
    return this.getStringAttribute('document_type');
  }
  public set documentType(value: string) {
    this._documentType = value;
  }
  public resetDocumentType() {
    this._documentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentTypeInput() {
    return this._documentType;
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

  // source_documents_s3_uri - computed: false, optional: true, required: false
  private _sourceDocumentsS3Uri?: string; 
  public get sourceDocumentsS3Uri() {
    return this.getStringAttribute('source_documents_s3_uri');
  }
  public set sourceDocumentsS3Uri(value: string) {
    this._sourceDocumentsS3Uri = value;
  }
  public resetSourceDocumentsS3Uri() {
    this._sourceDocumentsS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDocumentsS3UriInput() {
    return this._sourceDocumentsS3Uri;
  }

  // split - computed: false, optional: true, required: false
  private _split?: string; 
  public get split() {
    return this.getStringAttribute('split');
  }
  public set split(value: string) {
    this._split = value;
  }
  public resetSplit() {
    this._split = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitInput() {
    return this._split;
  }
}

export class ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList extends cdktf.ComplexList {
  public internalValue? : ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktf.IResolvable

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
  public get(index: number): ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference {
    return new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendEntityRecognizerInputDataConfigDocuments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}
  */
  readonly inputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}
  */
  readonly testS3Uri?: string;
}

export function comprehendEntityRecognizerInputDataConfigDocumentsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference | ComprehendEntityRecognizerInputDataConfigDocuments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    input_format: cdktf.stringToTerraform(struct!.inputFormat),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    test_s3_uri: cdktf.stringToTerraform(struct!.testS3Uri),
  }
}

export class ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigDocuments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputFormat = this._inputFormat;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._testS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.testS3Uri = this._testS3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigDocuments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inputFormat = undefined;
      this._s3Uri = undefined;
      this._testS3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inputFormat = value.inputFormat;
      this._s3Uri = value.s3Uri;
      this._testS3Uri = value.testS3Uri;
    }
  }

  // input_format - computed: false, optional: true, required: false
  private _inputFormat?: string; 
  public get inputFormat() {
    return this.getStringAttribute('input_format');
  }
  public set inputFormat(value: string) {
    this._inputFormat = value;
  }
  public resetInputFormat() {
    this._inputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputFormatInput() {
    return this._inputFormat;
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

  // test_s3_uri - computed: false, optional: true, required: false
  private _testS3Uri?: string; 
  public get testS3Uri() {
    return this.getStringAttribute('test_s3_uri');
  }
  public set testS3Uri(value: string) {
    this._testS3Uri = value;
  }
  public resetTestS3Uri() {
    this._testS3Uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testS3UriInput() {
    return this._testS3Uri;
  }
}
export interface ComprehendEntityRecognizerInputDataConfigEntityList {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
  */
  readonly s3Uri: string;
}

export function comprehendEntityRecognizerInputDataConfigEntityListToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityListOutputReference | ComprehendEntityRecognizerInputDataConfigEntityList): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class ComprehendEntityRecognizerInputDataConfigEntityListOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigEntityList | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigEntityList | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._s3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._s3Uri = value.s3Uri;
    }
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
}
export interface ComprehendEntityRecognizerInputDataConfigEntityTypes {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}
  */
  readonly type: string;
}

export function comprehendEntityRecognizerInputDataConfigEntityTypesToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ComprehendEntityRecognizerInputDataConfigEntityTypesList extends cdktf.ComplexList {
  public internalValue? : ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktf.IResolvable

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
  public get(index: number): ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference {
    return new ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendEntityRecognizerInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}
  */
  readonly dataFormat?: string;
  /**
  * annotations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}
  */
  readonly annotations?: ComprehendEntityRecognizerInputDataConfigAnnotations;
  /**
  * augmented_manifests block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}
  */
  readonly augmentedManifests?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktf.IResolvable;
  /**
  * documents block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}
  */
  readonly documents?: ComprehendEntityRecognizerInputDataConfigDocuments;
  /**
  * entity_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}
  */
  readonly entityList?: ComprehendEntityRecognizerInputDataConfigEntityList;
  /**
  * entity_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}
  */
  readonly entityTypes: ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktf.IResolvable;
}

export function comprehendEntityRecognizerInputDataConfigToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigOutputReference | ComprehendEntityRecognizerInputDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
    annotations: comprehendEntityRecognizerInputDataConfigAnnotationsToTerraform(struct!.annotations),
    augmented_manifests: cdktf.listMapper(comprehendEntityRecognizerInputDataConfigAugmentedManifestsToTerraform, true)(struct!.augmentedManifests),
    documents: comprehendEntityRecognizerInputDataConfigDocumentsToTerraform(struct!.documents),
    entity_list: comprehendEntityRecognizerInputDataConfigEntityListToTerraform(struct!.entityList),
    entity_types: cdktf.listMapper(comprehendEntityRecognizerInputDataConfigEntityTypesToTerraform, true)(struct!.entityTypes),
  }
}

export class ComprehendEntityRecognizerInputDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendEntityRecognizerInputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._augmentedManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.augmentedManifests = this._augmentedManifests?.internalValue;
    }
    if (this._documents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.documents = this._documents?.internalValue;
    }
    if (this._entityList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityList = this._entityList?.internalValue;
    }
    if (this._entityTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityTypes = this._entityTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerInputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFormat = undefined;
      this._annotations.internalValue = undefined;
      this._augmentedManifests.internalValue = undefined;
      this._documents.internalValue = undefined;
      this._entityList.internalValue = undefined;
      this._entityTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFormat = value.dataFormat;
      this._annotations.internalValue = value.annotations;
      this._augmentedManifests.internalValue = value.augmentedManifests;
      this._documents.internalValue = value.documents;
      this._entityList.internalValue = value.entityList;
      this._entityTypes.internalValue = value.entityTypes;
    }
  }

  // data_format - computed: false, optional: true, required: false
  private _dataFormat?: string; 
  public get dataFormat() {
    return this.getStringAttribute('data_format');
  }
  public set dataFormat(value: string) {
    this._dataFormat = value;
  }
  public resetDataFormat() {
    this._dataFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFormatInput() {
    return this._dataFormat;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations = new ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference(this, "annotations");
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ComprehendEntityRecognizerInputDataConfigAnnotations) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // augmented_manifests - computed: false, optional: true, required: false
  private _augmentedManifests = new ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList(this, "augmented_manifests", true);
  public get augmentedManifests() {
    return this._augmentedManifests;
  }
  public putAugmentedManifests(value: ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktf.IResolvable) {
    this._augmentedManifests.internalValue = value;
  }
  public resetAugmentedManifests() {
    this._augmentedManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get augmentedManifestsInput() {
    return this._augmentedManifests.internalValue;
  }

  // documents - computed: false, optional: true, required: false
  private _documents = new ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference(this, "documents");
  public get documents() {
    return this._documents;
  }
  public putDocuments(value: ComprehendEntityRecognizerInputDataConfigDocuments) {
    this._documents.internalValue = value;
  }
  public resetDocuments() {
    this._documents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentsInput() {
    return this._documents.internalValue;
  }

  // entity_list - computed: false, optional: true, required: false
  private _entityList = new ComprehendEntityRecognizerInputDataConfigEntityListOutputReference(this, "entity_list");
  public get entityList() {
    return this._entityList;
  }
  public putEntityList(value: ComprehendEntityRecognizerInputDataConfigEntityList) {
    this._entityList.internalValue = value;
  }
  public resetEntityList() {
    this._entityList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityListInput() {
    return this._entityList.internalValue;
  }

  // entity_types - computed: false, optional: false, required: true
  private _entityTypes = new ComprehendEntityRecognizerInputDataConfigEntityTypesList(this, "entity_types", true);
  public get entityTypes() {
    return this._entityTypes;
  }
  public putEntityTypes(value: ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktf.IResolvable) {
    this._entityTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypesInput() {
    return this._entityTypes.internalValue;
  }
}
export interface ComprehendEntityRecognizerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#create ComprehendEntityRecognizer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#delete ComprehendEntityRecognizer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#update ComprehendEntityRecognizer#update}
  */
  readonly update?: string;
}

export function comprehendEntityRecognizerTimeoutsToTerraform(struct?: ComprehendEntityRecognizerTimeoutsOutputReference | ComprehendEntityRecognizerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComprehendEntityRecognizerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendEntityRecognizerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface ComprehendEntityRecognizerVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}
  */
  readonly subnets: string[];
}

export function comprehendEntityRecognizerVpcConfigToTerraform(struct?: ComprehendEntityRecognizerVpcConfigOutputReference | ComprehendEntityRecognizerVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}

export class ComprehendEntityRecognizerVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendEntityRecognizerVpcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnets !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnets = this._subnets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendEntityRecognizerVpcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroupIds = undefined;
      this._subnets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroupIds = value.securityGroupIds;
      this._subnets = value.subnets;
    }
  }

  // security_group_ids - computed: false, optional: false, required: true
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnets - computed: false, optional: false, required: true
  private _subnets?: string[]; 
  public get subnets() {
    return cdktf.Fn.tolist(this.getListAttribute('subnets'));
  }
  public set subnets(value: string[]) {
    this._subnets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetsInput() {
    return this._subnets;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer aws_comprehend_entity_recognizer}
*/
export class ComprehendEntityRecognizer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_comprehend_entity_recognizer";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/comprehend_entity_recognizer aws_comprehend_entity_recognizer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComprehendEntityRecognizerConfig
  */
  public constructor(scope: Construct, id: string, config: ComprehendEntityRecognizerConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_comprehend_entity_recognizer',
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
    this._dataAccessRoleArn = config.dataAccessRoleArn;
    this._id = config.id;
    this._languageCode = config.languageCode;
    this._modelKmsKeyId = config.modelKmsKeyId;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._versionName = config.versionName;
    this._versionNamePrefix = config.versionNamePrefix;
    this._volumeKmsKeyId = config.volumeKmsKeyId;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vpcConfig.internalValue = config.vpcConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // model_kms_key_id - computed: false, optional: true, required: false
  private _modelKmsKeyId?: string; 
  public get modelKmsKeyId() {
    return this.getStringAttribute('model_kms_key_id');
  }
  public set modelKmsKeyId(value: string) {
    this._modelKmsKeyId = value;
  }
  public resetModelKmsKeyId() {
    this._modelKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelKmsKeyIdInput() {
    return this._modelKmsKeyId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // version_name - computed: true, optional: true, required: false
  private _versionName?: string; 
  public get versionName() {
    return this.getStringAttribute('version_name');
  }
  public set versionName(value: string) {
    this._versionName = value;
  }
  public resetVersionName() {
    this._versionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNameInput() {
    return this._versionName;
  }

  // version_name_prefix - computed: true, optional: true, required: false
  private _versionNamePrefix?: string; 
  public get versionNamePrefix() {
    return this.getStringAttribute('version_name_prefix');
  }
  public set versionNamePrefix(value: string) {
    this._versionNamePrefix = value;
  }
  public resetVersionNamePrefix() {
    this._versionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNamePrefixInput() {
    return this._versionNamePrefix;
  }

  // volume_kms_key_id - computed: false, optional: true, required: false
  private _volumeKmsKeyId?: string; 
  public get volumeKmsKeyId() {
    return this.getStringAttribute('volume_kms_key_id');
  }
  public set volumeKmsKeyId(value: string) {
    this._volumeKmsKeyId = value;
  }
  public resetVolumeKmsKeyId() {
    this._volumeKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeKmsKeyIdInput() {
    return this._volumeKmsKeyId;
  }

  // input_data_config - computed: false, optional: false, required: true
  private _inputDataConfig = new ComprehendEntityRecognizerInputDataConfigOutputReference(this, "input_data_config");
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: ComprehendEntityRecognizerInputDataConfig) {
    this._inputDataConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComprehendEntityRecognizerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComprehendEntityRecognizerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_config - computed: false, optional: true, required: false
  private _vpcConfig = new ComprehendEntityRecognizerVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: ComprehendEntityRecognizerVpcConfig) {
    this._vpcConfig.internalValue = value;
  }
  public resetVpcConfig() {
    this._vpcConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConfigInput() {
    return this._vpcConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_access_role_arn: cdktf.stringToTerraform(this._dataAccessRoleArn),
      id: cdktf.stringToTerraform(this._id),
      language_code: cdktf.stringToTerraform(this._languageCode),
      model_kms_key_id: cdktf.stringToTerraform(this._modelKmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      version_name: cdktf.stringToTerraform(this._versionName),
      version_name_prefix: cdktf.stringToTerraform(this._versionNamePrefix),
      volume_kms_key_id: cdktf.stringToTerraform(this._volumeKmsKeyId),
      input_data_config: comprehendEntityRecognizerInputDataConfigToTerraform(this._inputDataConfig.internalValue),
      timeouts: comprehendEntityRecognizerTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_config: comprehendEntityRecognizerVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }
}
