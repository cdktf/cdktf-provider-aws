// https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComprehendDocumentClassifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}
  */
  readonly dataAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#id ComprehendDocumentClassifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}
  */
  readonly modelKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#name ComprehendDocumentClassifier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}
  */
  readonly versionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}
  */
  readonly versionNamePrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}
  */
  readonly volumeKmsKeyId?: string;
  /**
  * input_data_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}
  */
  readonly inputDataConfig: ComprehendDocumentClassifierInputDataConfig;
  /**
  * output_data_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}
  */
  readonly outputDataConfig?: ComprehendDocumentClassifierOutputDataConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#timeouts ComprehendDocumentClassifier#timeouts}
  */
  readonly timeouts?: ComprehendDocumentClassifierTimeouts;
  /**
  * vpc_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}
  */
  readonly vpcConfig?: ComprehendDocumentClassifierVpcConfig;
}
export interface ComprehendDocumentClassifierInputDataConfigAugmentedManifests {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}
  */
  readonly annotationDataS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}
  */
  readonly attributeNames: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}
  */
  readonly documentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}
  */
  readonly s3Uri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}
  */
  readonly sourceDocumentsS3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#split ComprehendDocumentClassifier#split}
  */
  readonly split?: string;
}

export function comprehendDocumentClassifierInputDataConfigAugmentedManifestsToTerraform(struct?: ComprehendDocumentClassifierInputDataConfigAugmentedManifests | cdktf.IResolvable): any {
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

export class ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComprehendDocumentClassifierInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComprehendDocumentClassifierInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined) {
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

export class ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList extends cdktf.ComplexList {
  public internalValue? : ComprehendDocumentClassifierInputDataConfigAugmentedManifests[] | cdktf.IResolvable

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
  public get(index: number): ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference {
    return new ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComprehendDocumentClassifierInputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}
  */
  readonly dataFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}
  */
  readonly labelDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}
  */
  readonly s3Uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}
  */
  readonly testS3Uri?: string;
  /**
  * augmented_manifests block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}
  */
  readonly augmentedManifests?: ComprehendDocumentClassifierInputDataConfigAugmentedManifests[] | cdktf.IResolvable;
}

export function comprehendDocumentClassifierInputDataConfigToTerraform(struct?: ComprehendDocumentClassifierInputDataConfigOutputReference | ComprehendDocumentClassifierInputDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_format: cdktf.stringToTerraform(struct!.dataFormat),
    label_delimiter: cdktf.stringToTerraform(struct!.labelDelimiter),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
    test_s3_uri: cdktf.stringToTerraform(struct!.testS3Uri),
    augmented_manifests: cdktf.listMapper(comprehendDocumentClassifierInputDataConfigAugmentedManifestsToTerraform, true)(struct!.augmentedManifests),
  }
}

export class ComprehendDocumentClassifierInputDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendDocumentClassifierInputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFormat = this._dataFormat;
    }
    if (this._labelDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelDelimiter = this._labelDelimiter;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    if (this._testS3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.testS3Uri = this._testS3Uri;
    }
    if (this._augmentedManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.augmentedManifests = this._augmentedManifests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendDocumentClassifierInputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFormat = undefined;
      this._labelDelimiter = undefined;
      this._s3Uri = undefined;
      this._testS3Uri = undefined;
      this._augmentedManifests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFormat = value.dataFormat;
      this._labelDelimiter = value.labelDelimiter;
      this._s3Uri = value.s3Uri;
      this._testS3Uri = value.testS3Uri;
      this._augmentedManifests.internalValue = value.augmentedManifests;
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

  // label_delimiter - computed: true, optional: true, required: false
  private _labelDelimiter?: string; 
  public get labelDelimiter() {
    return this.getStringAttribute('label_delimiter');
  }
  public set labelDelimiter(value: string) {
    this._labelDelimiter = value;
  }
  public resetLabelDelimiter() {
    this._labelDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelDelimiterInput() {
    return this._labelDelimiter;
  }

  // s3_uri - computed: false, optional: true, required: false
  private _s3Uri?: string; 
  public get s3Uri() {
    return this.getStringAttribute('s3_uri');
  }
  public set s3Uri(value: string) {
    this._s3Uri = value;
  }
  public resetS3Uri() {
    this._s3Uri = undefined;
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

  // augmented_manifests - computed: false, optional: true, required: false
  private _augmentedManifests = new ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(this, "augmented_manifests", true);
  public get augmentedManifests() {
    return this._augmentedManifests;
  }
  public putAugmentedManifests(value: ComprehendDocumentClassifierInputDataConfigAugmentedManifests[] | cdktf.IResolvable) {
    this._augmentedManifests.internalValue = value;
  }
  public resetAugmentedManifests() {
    this._augmentedManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get augmentedManifestsInput() {
    return this._augmentedManifests.internalValue;
  }
}
export interface ComprehendDocumentClassifierOutputDataConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}
  */
  readonly s3Uri: string;
}

export function comprehendDocumentClassifierOutputDataConfigToTerraform(struct?: ComprehendDocumentClassifierOutputDataConfigOutputReference | ComprehendDocumentClassifierOutputDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    s3_uri: cdktf.stringToTerraform(struct!.s3Uri),
  }
}

export class ComprehendDocumentClassifierOutputDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendDocumentClassifierOutputDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._s3Uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Uri = this._s3Uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComprehendDocumentClassifierOutputDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._s3Uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._s3Uri = value.s3Uri;
    }
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // output_s3_uri - computed: true, optional: false, required: false
  public get outputS3Uri() {
    return this.getStringAttribute('output_s3_uri');
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
export interface ComprehendDocumentClassifierTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#create ComprehendDocumentClassifier#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#update ComprehendDocumentClassifier#update}
  */
  readonly update?: string;
}

export function comprehendDocumentClassifierTimeoutsToTerraform(struct?: ComprehendDocumentClassifierTimeoutsOutputReference | ComprehendDocumentClassifierTimeouts | cdktf.IResolvable): any {
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

export class ComprehendDocumentClassifierTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendDocumentClassifierTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComprehendDocumentClassifierTimeouts | cdktf.IResolvable | undefined) {
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
export interface ComprehendDocumentClassifierVpcConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}
  */
  readonly securityGroupIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}
  */
  readonly subnets: string[];
}

export function comprehendDocumentClassifierVpcConfigToTerraform(struct?: ComprehendDocumentClassifierVpcConfigOutputReference | ComprehendDocumentClassifierVpcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnets),
  }
}

export class ComprehendDocumentClassifierVpcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComprehendDocumentClassifierVpcConfig | undefined {
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

  public set internalValue(value: ComprehendDocumentClassifierVpcConfig | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier aws_comprehend_document_classifier}
*/
export class ComprehendDocumentClassifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_comprehend_document_classifier";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/comprehend_document_classifier aws_comprehend_document_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComprehendDocumentClassifierConfig
  */
  public constructor(scope: Construct, id: string, config: ComprehendDocumentClassifierConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_comprehend_document_classifier',
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
    this._dataAccessRoleArn = config.dataAccessRoleArn;
    this._id = config.id;
    this._languageCode = config.languageCode;
    this._mode = config.mode;
    this._modelKmsKeyId = config.modelKmsKeyId;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._versionName = config.versionName;
    this._versionNamePrefix = config.versionNamePrefix;
    this._volumeKmsKeyId = config.volumeKmsKeyId;
    this._inputDataConfig.internalValue = config.inputDataConfig;
    this._outputDataConfig.internalValue = config.outputDataConfig;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
  private _inputDataConfig = new ComprehendDocumentClassifierInputDataConfigOutputReference(this, "input_data_config");
  public get inputDataConfig() {
    return this._inputDataConfig;
  }
  public putInputDataConfig(value: ComprehendDocumentClassifierInputDataConfig) {
    this._inputDataConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataConfigInput() {
    return this._inputDataConfig.internalValue;
  }

  // output_data_config - computed: false, optional: true, required: false
  private _outputDataConfig = new ComprehendDocumentClassifierOutputDataConfigOutputReference(this, "output_data_config");
  public get outputDataConfig() {
    return this._outputDataConfig;
  }
  public putOutputDataConfig(value: ComprehendDocumentClassifierOutputDataConfig) {
    this._outputDataConfig.internalValue = value;
  }
  public resetOutputDataConfig() {
    this._outputDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataConfigInput() {
    return this._outputDataConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComprehendDocumentClassifierTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComprehendDocumentClassifierTimeouts) {
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
  private _vpcConfig = new ComprehendDocumentClassifierVpcConfigOutputReference(this, "vpc_config");
  public get vpcConfig() {
    return this._vpcConfig;
  }
  public putVpcConfig(value: ComprehendDocumentClassifierVpcConfig) {
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
      mode: cdktf.stringToTerraform(this._mode),
      model_kms_key_id: cdktf.stringToTerraform(this._modelKmsKeyId),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      version_name: cdktf.stringToTerraform(this._versionName),
      version_name_prefix: cdktf.stringToTerraform(this._versionNamePrefix),
      volume_kms_key_id: cdktf.stringToTerraform(this._volumeKmsKeyId),
      input_data_config: comprehendDocumentClassifierInputDataConfigToTerraform(this._inputDataConfig.internalValue),
      output_data_config: comprehendDocumentClassifierOutputDataConfigToTerraform(this._outputDataConfig.internalValue),
      timeouts: comprehendDocumentClassifierTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_config: comprehendDocumentClassifierVpcConfigToTerraform(this._vpcConfig.internalValue),
    };
  }
}
