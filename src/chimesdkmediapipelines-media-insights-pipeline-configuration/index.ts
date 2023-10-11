// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#resource_access_role_arn ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#resource_access_role_arn}
  */
  readonly resourceAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#tags ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#tags_all ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * elements block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#elements ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#elements}
  */
  readonly elements: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements[] | cdktf.IResolvable;
  /**
  * real_time_alert_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#real_time_alert_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#real_time_alert_configuration}
  */
  readonly realTimeAlertConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#timeouts ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#timeouts}
  */
  readonly timeouts?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts;
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_output ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_redaction_output}
  */
  readonly contentRedactionOutput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#data_access_role_arn ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#data_access_role_arn}
  */
  readonly dataAccessRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#output_encryption_kms_key_id ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#output_encryption_kms_key_id}
  */
  readonly outputEncryptionKmsKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#output_location ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#output_location}
  */
  readonly outputLocation: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_redaction_output: cdktf.stringToTerraform(struct!.contentRedactionOutput),
    data_access_role_arn: cdktf.stringToTerraform(struct!.dataAccessRoleArn),
    output_encryption_kms_key_id: cdktf.stringToTerraform(struct!.outputEncryptionKmsKeyId),
    output_location: cdktf.stringToTerraform(struct!.outputLocation),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentRedactionOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRedactionOutput = this._contentRedactionOutput;
    }
    if (this._dataAccessRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccessRoleArn = this._dataAccessRoleArn;
    }
    if (this._outputEncryptionKmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputEncryptionKmsKeyId = this._outputEncryptionKmsKeyId;
    }
    if (this._outputLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputLocation = this._outputLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentRedactionOutput = undefined;
      this._dataAccessRoleArn = undefined;
      this._outputEncryptionKmsKeyId = undefined;
      this._outputLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentRedactionOutput = value.contentRedactionOutput;
      this._dataAccessRoleArn = value.dataAccessRoleArn;
      this._outputEncryptionKmsKeyId = value.outputEncryptionKmsKeyId;
      this._outputLocation = value.outputLocation;
    }
  }

  // content_redaction_output - computed: false, optional: true, required: false
  private _contentRedactionOutput?: string; 
  public get contentRedactionOutput() {
    return this.getStringAttribute('content_redaction_output');
  }
  public set contentRedactionOutput(value: string) {
    this._contentRedactionOutput = value;
  }
  public resetContentRedactionOutput() {
    this._contentRedactionOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRedactionOutputInput() {
    return this._contentRedactionOutput;
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

  // output_encryption_kms_key_id - computed: false, optional: true, required: false
  private _outputEncryptionKmsKeyId?: string; 
  public get outputEncryptionKmsKeyId() {
    return this.getStringAttribute('output_encryption_kms_key_id');
  }
  public set outputEncryptionKmsKeyId(value: string) {
    this._outputEncryptionKmsKeyId = value;
  }
  public resetOutputEncryptionKmsKeyId() {
    this._outputEncryptionKmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputEncryptionKmsKeyIdInput() {
    return this._outputEncryptionKmsKeyId;
  }

  // output_location - computed: false, optional: false, required: true
  private _outputLocation?: string; 
  public get outputLocation() {
    return this.getStringAttribute('output_location');
  }
  public set outputLocation(value: string) {
    this._outputLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputLocationInput() {
    return this._outputLocation;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#call_analytics_stream_categories ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#call_analytics_stream_categories}
  */
  readonly callAnalyticsStreamCategories?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_identification_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_identification_type}
  */
  readonly contentIdentificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_redaction_type}
  */
  readonly contentRedactionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
  */
  readonly enablePartialResultsStabilization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#filter_partial_results ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#filter_partial_results}
  */
  readonly filterPartialResults?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_code ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_model_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_model_name}
  */
  readonly languageModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#partial_results_stability ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#partial_results_stability}
  */
  readonly partialResultsStability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#pii_entity_types ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#pii_entity_types}
  */
  readonly piiEntityTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_method ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_method}
  */
  readonly vocabularyFilterMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_name}
  */
  readonly vocabularyFilterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_name}
  */
  readonly vocabularyName?: string;
  /**
  * post_call_analytics_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#post_call_analytics_settings ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#post_call_analytics_settings}
  */
  readonly postCallAnalyticsSettings?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_analytics_stream_categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.callAnalyticsStreamCategories),
    content_identification_type: cdktf.stringToTerraform(struct!.contentIdentificationType),
    content_redaction_type: cdktf.stringToTerraform(struct!.contentRedactionType),
    enable_partial_results_stabilization: cdktf.booleanToTerraform(struct!.enablePartialResultsStabilization),
    filter_partial_results: cdktf.booleanToTerraform(struct!.filterPartialResults),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    language_model_name: cdktf.stringToTerraform(struct!.languageModelName),
    partial_results_stability: cdktf.stringToTerraform(struct!.partialResultsStability),
    pii_entity_types: cdktf.stringToTerraform(struct!.piiEntityTypes),
    vocabulary_filter_method: cdktf.stringToTerraform(struct!.vocabularyFilterMethod),
    vocabulary_filter_name: cdktf.stringToTerraform(struct!.vocabularyFilterName),
    vocabulary_name: cdktf.stringToTerraform(struct!.vocabularyName),
    post_call_analytics_settings: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsToTerraform(struct!.postCallAnalyticsSettings),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callAnalyticsStreamCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.callAnalyticsStreamCategories = this._callAnalyticsStreamCategories;
    }
    if (this._contentIdentificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentIdentificationType = this._contentIdentificationType;
    }
    if (this._contentRedactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRedactionType = this._contentRedactionType;
    }
    if (this._enablePartialResultsStabilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePartialResultsStabilization = this._enablePartialResultsStabilization;
    }
    if (this._filterPartialResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPartialResults = this._filterPartialResults;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._languageModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageModelName = this._languageModelName;
    }
    if (this._partialResultsStability !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialResultsStability = this._partialResultsStability;
    }
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._vocabularyFilterMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterMethod = this._vocabularyFilterMethod;
    }
    if (this._vocabularyFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterName = this._vocabularyFilterName;
    }
    if (this._vocabularyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyName = this._vocabularyName;
    }
    if (this._postCallAnalyticsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postCallAnalyticsSettings = this._postCallAnalyticsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callAnalyticsStreamCategories = undefined;
      this._contentIdentificationType = undefined;
      this._contentRedactionType = undefined;
      this._enablePartialResultsStabilization = undefined;
      this._filterPartialResults = undefined;
      this._languageCode = undefined;
      this._languageModelName = undefined;
      this._partialResultsStability = undefined;
      this._piiEntityTypes = undefined;
      this._vocabularyFilterMethod = undefined;
      this._vocabularyFilterName = undefined;
      this._vocabularyName = undefined;
      this._postCallAnalyticsSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callAnalyticsStreamCategories = value.callAnalyticsStreamCategories;
      this._contentIdentificationType = value.contentIdentificationType;
      this._contentRedactionType = value.contentRedactionType;
      this._enablePartialResultsStabilization = value.enablePartialResultsStabilization;
      this._filterPartialResults = value.filterPartialResults;
      this._languageCode = value.languageCode;
      this._languageModelName = value.languageModelName;
      this._partialResultsStability = value.partialResultsStability;
      this._piiEntityTypes = value.piiEntityTypes;
      this._vocabularyFilterMethod = value.vocabularyFilterMethod;
      this._vocabularyFilterName = value.vocabularyFilterName;
      this._vocabularyName = value.vocabularyName;
      this._postCallAnalyticsSettings.internalValue = value.postCallAnalyticsSettings;
    }
  }

  // call_analytics_stream_categories - computed: false, optional: true, required: false
  private _callAnalyticsStreamCategories?: string[]; 
  public get callAnalyticsStreamCategories() {
    return this.getListAttribute('call_analytics_stream_categories');
  }
  public set callAnalyticsStreamCategories(value: string[]) {
    this._callAnalyticsStreamCategories = value;
  }
  public resetCallAnalyticsStreamCategories() {
    this._callAnalyticsStreamCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callAnalyticsStreamCategoriesInput() {
    return this._callAnalyticsStreamCategories;
  }

  // content_identification_type - computed: false, optional: true, required: false
  private _contentIdentificationType?: string; 
  public get contentIdentificationType() {
    return this.getStringAttribute('content_identification_type');
  }
  public set contentIdentificationType(value: string) {
    this._contentIdentificationType = value;
  }
  public resetContentIdentificationType() {
    this._contentIdentificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdentificationTypeInput() {
    return this._contentIdentificationType;
  }

  // content_redaction_type - computed: false, optional: true, required: false
  private _contentRedactionType?: string; 
  public get contentRedactionType() {
    return this.getStringAttribute('content_redaction_type');
  }
  public set contentRedactionType(value: string) {
    this._contentRedactionType = value;
  }
  public resetContentRedactionType() {
    this._contentRedactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRedactionTypeInput() {
    return this._contentRedactionType;
  }

  // enable_partial_results_stabilization - computed: false, optional: true, required: false
  private _enablePartialResultsStabilization?: boolean | cdktf.IResolvable; 
  public get enablePartialResultsStabilization() {
    return this.getBooleanAttribute('enable_partial_results_stabilization');
  }
  public set enablePartialResultsStabilization(value: boolean | cdktf.IResolvable) {
    this._enablePartialResultsStabilization = value;
  }
  public resetEnablePartialResultsStabilization() {
    this._enablePartialResultsStabilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePartialResultsStabilizationInput() {
    return this._enablePartialResultsStabilization;
  }

  // filter_partial_results - computed: false, optional: true, required: false
  private _filterPartialResults?: boolean | cdktf.IResolvable; 
  public get filterPartialResults() {
    return this.getBooleanAttribute('filter_partial_results');
  }
  public set filterPartialResults(value: boolean | cdktf.IResolvable) {
    this._filterPartialResults = value;
  }
  public resetFilterPartialResults() {
    this._filterPartialResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPartialResultsInput() {
    return this._filterPartialResults;
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

  // language_model_name - computed: false, optional: true, required: false
  private _languageModelName?: string; 
  public get languageModelName() {
    return this.getStringAttribute('language_model_name');
  }
  public set languageModelName(value: string) {
    this._languageModelName = value;
  }
  public resetLanguageModelName() {
    this._languageModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageModelNameInput() {
    return this._languageModelName;
  }

  // partial_results_stability - computed: false, optional: true, required: false
  private _partialResultsStability?: string; 
  public get partialResultsStability() {
    return this.getStringAttribute('partial_results_stability');
  }
  public set partialResultsStability(value: string) {
    this._partialResultsStability = value;
  }
  public resetPartialResultsStability() {
    this._partialResultsStability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialResultsStabilityInput() {
    return this._partialResultsStability;
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string; 
  public get piiEntityTypes() {
    return this.getStringAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // vocabulary_filter_method - computed: false, optional: true, required: false
  private _vocabularyFilterMethod?: string; 
  public get vocabularyFilterMethod() {
    return this.getStringAttribute('vocabulary_filter_method');
  }
  public set vocabularyFilterMethod(value: string) {
    this._vocabularyFilterMethod = value;
  }
  public resetVocabularyFilterMethod() {
    this._vocabularyFilterMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterMethodInput() {
    return this._vocabularyFilterMethod;
  }

  // vocabulary_filter_name - computed: false, optional: true, required: false
  private _vocabularyFilterName?: string; 
  public get vocabularyFilterName() {
    return this.getStringAttribute('vocabulary_filter_name');
  }
  public set vocabularyFilterName(value: string) {
    this._vocabularyFilterName = value;
  }
  public resetVocabularyFilterName() {
    this._vocabularyFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterNameInput() {
    return this._vocabularyFilterName;
  }

  // vocabulary_name - computed: false, optional: true, required: false
  private _vocabularyName?: string; 
  public get vocabularyName() {
    return this.getStringAttribute('vocabulary_name');
  }
  public set vocabularyName(value: string) {
    this._vocabularyName = value;
  }
  public resetVocabularyName() {
    this._vocabularyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyNameInput() {
    return this._vocabularyName;
  }

  // post_call_analytics_settings - computed: false, optional: true, required: false
  private _postCallAnalyticsSettings = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettingsOutputReference(this, "post_call_analytics_settings");
  public get postCallAnalyticsSettings() {
    return this._postCallAnalyticsSettings;
  }
  public putPostCallAnalyticsSettings(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings) {
    this._postCallAnalyticsSettings.internalValue = value;
  }
  public resetPostCallAnalyticsSettings() {
    this._postCallAnalyticsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCallAnalyticsSettingsInput() {
    return this._postCallAnalyticsSettings.internalValue;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_identification_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_identification_type}
  */
  readonly contentIdentificationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#content_redaction_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#content_redaction_type}
  */
  readonly contentRedactionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#enable_partial_results_stabilization ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#enable_partial_results_stabilization}
  */
  readonly enablePartialResultsStabilization?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#filter_partial_results ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#filter_partial_results}
  */
  readonly filterPartialResults?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_code ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_code}
  */
  readonly languageCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#language_model_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#language_model_name}
  */
  readonly languageModelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#partial_results_stability ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#partial_results_stability}
  */
  readonly partialResultsStability?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#pii_entity_types ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#pii_entity_types}
  */
  readonly piiEntityTypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#show_speaker_label ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#show_speaker_label}
  */
  readonly showSpeakerLabel?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_method ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_method}
  */
  readonly vocabularyFilterMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_filter_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_filter_name}
  */
  readonly vocabularyFilterName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#vocabulary_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#vocabulary_name}
  */
  readonly vocabularyName?: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_identification_type: cdktf.stringToTerraform(struct!.contentIdentificationType),
    content_redaction_type: cdktf.stringToTerraform(struct!.contentRedactionType),
    enable_partial_results_stabilization: cdktf.booleanToTerraform(struct!.enablePartialResultsStabilization),
    filter_partial_results: cdktf.booleanToTerraform(struct!.filterPartialResults),
    language_code: cdktf.stringToTerraform(struct!.languageCode),
    language_model_name: cdktf.stringToTerraform(struct!.languageModelName),
    partial_results_stability: cdktf.stringToTerraform(struct!.partialResultsStability),
    pii_entity_types: cdktf.stringToTerraform(struct!.piiEntityTypes),
    show_speaker_label: cdktf.booleanToTerraform(struct!.showSpeakerLabel),
    vocabulary_filter_method: cdktf.stringToTerraform(struct!.vocabularyFilterMethod),
    vocabulary_filter_name: cdktf.stringToTerraform(struct!.vocabularyFilterName),
    vocabulary_name: cdktf.stringToTerraform(struct!.vocabularyName),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentIdentificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentIdentificationType = this._contentIdentificationType;
    }
    if (this._contentRedactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentRedactionType = this._contentRedactionType;
    }
    if (this._enablePartialResultsStabilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePartialResultsStabilization = this._enablePartialResultsStabilization;
    }
    if (this._filterPartialResults !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPartialResults = this._filterPartialResults;
    }
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._languageModelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageModelName = this._languageModelName;
    }
    if (this._partialResultsStability !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialResultsStability = this._partialResultsStability;
    }
    if (this._piiEntityTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiEntityTypes = this._piiEntityTypes;
    }
    if (this._showSpeakerLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.showSpeakerLabel = this._showSpeakerLabel;
    }
    if (this._vocabularyFilterMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterMethod = this._vocabularyFilterMethod;
    }
    if (this._vocabularyFilterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyFilterName = this._vocabularyFilterName;
    }
    if (this._vocabularyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vocabularyName = this._vocabularyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentIdentificationType = undefined;
      this._contentRedactionType = undefined;
      this._enablePartialResultsStabilization = undefined;
      this._filterPartialResults = undefined;
      this._languageCode = undefined;
      this._languageModelName = undefined;
      this._partialResultsStability = undefined;
      this._piiEntityTypes = undefined;
      this._showSpeakerLabel = undefined;
      this._vocabularyFilterMethod = undefined;
      this._vocabularyFilterName = undefined;
      this._vocabularyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentIdentificationType = value.contentIdentificationType;
      this._contentRedactionType = value.contentRedactionType;
      this._enablePartialResultsStabilization = value.enablePartialResultsStabilization;
      this._filterPartialResults = value.filterPartialResults;
      this._languageCode = value.languageCode;
      this._languageModelName = value.languageModelName;
      this._partialResultsStability = value.partialResultsStability;
      this._piiEntityTypes = value.piiEntityTypes;
      this._showSpeakerLabel = value.showSpeakerLabel;
      this._vocabularyFilterMethod = value.vocabularyFilterMethod;
      this._vocabularyFilterName = value.vocabularyFilterName;
      this._vocabularyName = value.vocabularyName;
    }
  }

  // content_identification_type - computed: false, optional: true, required: false
  private _contentIdentificationType?: string; 
  public get contentIdentificationType() {
    return this.getStringAttribute('content_identification_type');
  }
  public set contentIdentificationType(value: string) {
    this._contentIdentificationType = value;
  }
  public resetContentIdentificationType() {
    this._contentIdentificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentIdentificationTypeInput() {
    return this._contentIdentificationType;
  }

  // content_redaction_type - computed: false, optional: true, required: false
  private _contentRedactionType?: string; 
  public get contentRedactionType() {
    return this.getStringAttribute('content_redaction_type');
  }
  public set contentRedactionType(value: string) {
    this._contentRedactionType = value;
  }
  public resetContentRedactionType() {
    this._contentRedactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentRedactionTypeInput() {
    return this._contentRedactionType;
  }

  // enable_partial_results_stabilization - computed: false, optional: true, required: false
  private _enablePartialResultsStabilization?: boolean | cdktf.IResolvable; 
  public get enablePartialResultsStabilization() {
    return this.getBooleanAttribute('enable_partial_results_stabilization');
  }
  public set enablePartialResultsStabilization(value: boolean | cdktf.IResolvable) {
    this._enablePartialResultsStabilization = value;
  }
  public resetEnablePartialResultsStabilization() {
    this._enablePartialResultsStabilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePartialResultsStabilizationInput() {
    return this._enablePartialResultsStabilization;
  }

  // filter_partial_results - computed: false, optional: true, required: false
  private _filterPartialResults?: boolean | cdktf.IResolvable; 
  public get filterPartialResults() {
    return this.getBooleanAttribute('filter_partial_results');
  }
  public set filterPartialResults(value: boolean | cdktf.IResolvable) {
    this._filterPartialResults = value;
  }
  public resetFilterPartialResults() {
    this._filterPartialResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPartialResultsInput() {
    return this._filterPartialResults;
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

  // language_model_name - computed: false, optional: true, required: false
  private _languageModelName?: string; 
  public get languageModelName() {
    return this.getStringAttribute('language_model_name');
  }
  public set languageModelName(value: string) {
    this._languageModelName = value;
  }
  public resetLanguageModelName() {
    this._languageModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageModelNameInput() {
    return this._languageModelName;
  }

  // partial_results_stability - computed: false, optional: true, required: false
  private _partialResultsStability?: string; 
  public get partialResultsStability() {
    return this.getStringAttribute('partial_results_stability');
  }
  public set partialResultsStability(value: string) {
    this._partialResultsStability = value;
  }
  public resetPartialResultsStability() {
    this._partialResultsStability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialResultsStabilityInput() {
    return this._partialResultsStability;
  }

  // pii_entity_types - computed: false, optional: true, required: false
  private _piiEntityTypes?: string; 
  public get piiEntityTypes() {
    return this.getStringAttribute('pii_entity_types');
  }
  public set piiEntityTypes(value: string) {
    this._piiEntityTypes = value;
  }
  public resetPiiEntityTypes() {
    this._piiEntityTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiEntityTypesInput() {
    return this._piiEntityTypes;
  }

  // show_speaker_label - computed: false, optional: true, required: false
  private _showSpeakerLabel?: boolean | cdktf.IResolvable; 
  public get showSpeakerLabel() {
    return this.getBooleanAttribute('show_speaker_label');
  }
  public set showSpeakerLabel(value: boolean | cdktf.IResolvable) {
    this._showSpeakerLabel = value;
  }
  public resetShowSpeakerLabel() {
    this._showSpeakerLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showSpeakerLabelInput() {
    return this._showSpeakerLabel;
  }

  // vocabulary_filter_method - computed: false, optional: true, required: false
  private _vocabularyFilterMethod?: string; 
  public get vocabularyFilterMethod() {
    return this.getStringAttribute('vocabulary_filter_method');
  }
  public set vocabularyFilterMethod(value: string) {
    this._vocabularyFilterMethod = value;
  }
  public resetVocabularyFilterMethod() {
    this._vocabularyFilterMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterMethodInput() {
    return this._vocabularyFilterMethod;
  }

  // vocabulary_filter_name - computed: false, optional: true, required: false
  private _vocabularyFilterName?: string; 
  public get vocabularyFilterName() {
    return this.getStringAttribute('vocabulary_filter_name');
  }
  public set vocabularyFilterName(value: string) {
    this._vocabularyFilterName = value;
  }
  public resetVocabularyFilterName() {
    this._vocabularyFilterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyFilterNameInput() {
    return this._vocabularyFilterName;
  }

  // vocabulary_name - computed: false, optional: true, required: false
  private _vocabularyName?: string; 
  public get vocabularyName() {
    return this.getStringAttribute('vocabulary_name');
  }
  public set vocabularyName(value: string) {
    this._vocabularyName = value;
  }
  public resetVocabularyName() {
    this._vocabularyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vocabularyNameInput() {
    return this._vocabularyName;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insights_target: cdktf.stringToTerraform(struct!.insightsTarget),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insights_target: cdktf.stringToTerraform(struct!.insightsTarget),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#destination ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#destination}
  */
  readonly destination?: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: cdktf.stringToTerraform(struct!.destination),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destination = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destination = value.destination;
    }
  }

  // destination - computed: false, optional: true, required: false
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insights_target: cdktf.stringToTerraform(struct!.insightsTarget),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#insights_target ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#insights_target}
  */
  readonly insightsTarget: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insights_target: cdktf.stringToTerraform(struct!.insightsTarget),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insightsTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsTarget = this._insightsTarget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insightsTarget = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insightsTarget = value.insightsTarget;
    }
  }

  // insights_target - computed: false, optional: false, required: true
  private _insightsTarget?: string; 
  public get insightsTarget() {
    return this.getStringAttribute('insights_target');
  }
  public set insightsTarget(value: string) {
    this._insightsTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsTargetInput() {
    return this._insightsTarget;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#speaker_search_status ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#speaker_search_status}
  */
  readonly speakerSearchStatus: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#voice_tone_analysis_status ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#voice_tone_analysis_status}
  */
  readonly voiceToneAnalysisStatus: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    speaker_search_status: cdktf.stringToTerraform(struct!.speakerSearchStatus),
    voice_tone_analysis_status: cdktf.stringToTerraform(struct!.voiceToneAnalysisStatus),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._speakerSearchStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakerSearchStatus = this._speakerSearchStatus;
    }
    if (this._voiceToneAnalysisStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceToneAnalysisStatus = this._voiceToneAnalysisStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._speakerSearchStatus = undefined;
      this._voiceToneAnalysisStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._speakerSearchStatus = value.speakerSearchStatus;
      this._voiceToneAnalysisStatus = value.voiceToneAnalysisStatus;
    }
  }

  // speaker_search_status - computed: false, optional: false, required: true
  private _speakerSearchStatus?: string; 
  public get speakerSearchStatus() {
    return this.getStringAttribute('speaker_search_status');
  }
  public set speakerSearchStatus(value: string) {
    this._speakerSearchStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerSearchStatusInput() {
    return this._speakerSearchStatus;
  }

  // voice_tone_analysis_status - computed: false, optional: false, required: true
  private _voiceToneAnalysisStatus?: string; 
  public get voiceToneAnalysisStatus() {
    return this.getStringAttribute('voice_tone_analysis_status');
  }
  public set voiceToneAnalysisStatus(value: string) {
    this._voiceToneAnalysisStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceToneAnalysisStatusInput() {
    return this._voiceToneAnalysisStatus;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#type}
  */
  readonly type: string;
  /**
  * amazon_transcribe_call_analytics_processor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#amazon_transcribe_call_analytics_processor_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#amazon_transcribe_call_analytics_processor_configuration}
  */
  readonly amazonTranscribeCallAnalyticsProcessorConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration;
  /**
  * amazon_transcribe_processor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#amazon_transcribe_processor_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#amazon_transcribe_processor_configuration}
  */
  readonly amazonTranscribeProcessorConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration;
  /**
  * kinesis_data_stream_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#kinesis_data_stream_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#kinesis_data_stream_sink_configuration}
  */
  readonly kinesisDataStreamSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration;
  /**
  * lambda_function_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#lambda_function_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#lambda_function_sink_configuration}
  */
  readonly lambdaFunctionSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration;
  /**
  * s3_recording_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#s3_recording_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#s3_recording_sink_configuration}
  */
  readonly s3RecordingSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration;
  /**
  * sns_topic_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sns_topic_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sns_topic_sink_configuration}
  */
  readonly snsTopicSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration;
  /**
  * sqs_queue_sink_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sqs_queue_sink_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sqs_queue_sink_configuration}
  */
  readonly sqsQueueSinkConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration;
  /**
  * voice_analytics_processor_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#voice_analytics_processor_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#voice_analytics_processor_configuration}
  */
  readonly voiceAnalyticsProcessorConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    amazon_transcribe_call_analytics_processor_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationToTerraform(struct!.amazonTranscribeCallAnalyticsProcessorConfiguration),
    amazon_transcribe_processor_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationToTerraform(struct!.amazonTranscribeProcessorConfiguration),
    kinesis_data_stream_sink_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationToTerraform(struct!.kinesisDataStreamSinkConfiguration),
    lambda_function_sink_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationToTerraform(struct!.lambdaFunctionSinkConfiguration),
    s3_recording_sink_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationToTerraform(struct!.s3RecordingSinkConfiguration),
    sns_topic_sink_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationToTerraform(struct!.snsTopicSinkConfiguration),
    sqs_queue_sink_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationToTerraform(struct!.sqsQueueSinkConfiguration),
    voice_analytics_processor_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationToTerraform(struct!.voiceAnalyticsProcessorConfiguration),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._amazonTranscribeCallAnalyticsProcessorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonTranscribeCallAnalyticsProcessorConfiguration = this._amazonTranscribeCallAnalyticsProcessorConfiguration?.internalValue;
    }
    if (this._amazonTranscribeProcessorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazonTranscribeProcessorConfiguration = this._amazonTranscribeProcessorConfiguration?.internalValue;
    }
    if (this._kinesisDataStreamSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinesisDataStreamSinkConfiguration = this._kinesisDataStreamSinkConfiguration?.internalValue;
    }
    if (this._lambdaFunctionSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaFunctionSinkConfiguration = this._lambdaFunctionSinkConfiguration?.internalValue;
    }
    if (this._s3RecordingSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3RecordingSinkConfiguration = this._s3RecordingSinkConfiguration?.internalValue;
    }
    if (this._snsTopicSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snsTopicSinkConfiguration = this._snsTopicSinkConfiguration?.internalValue;
    }
    if (this._sqsQueueSinkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqsQueueSinkConfiguration = this._sqsQueueSinkConfiguration?.internalValue;
    }
    if (this._voiceAnalyticsProcessorConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.voiceAnalyticsProcessorConfiguration = this._voiceAnalyticsProcessorConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = undefined;
      this._amazonTranscribeProcessorConfiguration.internalValue = undefined;
      this._kinesisDataStreamSinkConfiguration.internalValue = undefined;
      this._lambdaFunctionSinkConfiguration.internalValue = undefined;
      this._s3RecordingSinkConfiguration.internalValue = undefined;
      this._snsTopicSinkConfiguration.internalValue = undefined;
      this._sqsQueueSinkConfiguration.internalValue = undefined;
      this._voiceAnalyticsProcessorConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = value.amazonTranscribeCallAnalyticsProcessorConfiguration;
      this._amazonTranscribeProcessorConfiguration.internalValue = value.amazonTranscribeProcessorConfiguration;
      this._kinesisDataStreamSinkConfiguration.internalValue = value.kinesisDataStreamSinkConfiguration;
      this._lambdaFunctionSinkConfiguration.internalValue = value.lambdaFunctionSinkConfiguration;
      this._s3RecordingSinkConfiguration.internalValue = value.s3RecordingSinkConfiguration;
      this._snsTopicSinkConfiguration.internalValue = value.snsTopicSinkConfiguration;
      this._sqsQueueSinkConfiguration.internalValue = value.sqsQueueSinkConfiguration;
      this._voiceAnalyticsProcessorConfiguration.internalValue = value.voiceAnalyticsProcessorConfiguration;
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

  // amazon_transcribe_call_analytics_processor_configuration - computed: false, optional: true, required: false
  private _amazonTranscribeCallAnalyticsProcessorConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfigurationOutputReference(this, "amazon_transcribe_call_analytics_processor_configuration");
  public get amazonTranscribeCallAnalyticsProcessorConfiguration() {
    return this._amazonTranscribeCallAnalyticsProcessorConfiguration;
  }
  public putAmazonTranscribeCallAnalyticsProcessorConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeCallAnalyticsProcessorConfiguration) {
    this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = value;
  }
  public resetAmazonTranscribeCallAnalyticsProcessorConfiguration() {
    this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonTranscribeCallAnalyticsProcessorConfigurationInput() {
    return this._amazonTranscribeCallAnalyticsProcessorConfiguration.internalValue;
  }

  // amazon_transcribe_processor_configuration - computed: false, optional: true, required: false
  private _amazonTranscribeProcessorConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfigurationOutputReference(this, "amazon_transcribe_processor_configuration");
  public get amazonTranscribeProcessorConfiguration() {
    return this._amazonTranscribeProcessorConfiguration;
  }
  public putAmazonTranscribeProcessorConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsAmazonTranscribeProcessorConfiguration) {
    this._amazonTranscribeProcessorConfiguration.internalValue = value;
  }
  public resetAmazonTranscribeProcessorConfiguration() {
    this._amazonTranscribeProcessorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonTranscribeProcessorConfigurationInput() {
    return this._amazonTranscribeProcessorConfiguration.internalValue;
  }

  // kinesis_data_stream_sink_configuration - computed: false, optional: true, required: false
  private _kinesisDataStreamSinkConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfigurationOutputReference(this, "kinesis_data_stream_sink_configuration");
  public get kinesisDataStreamSinkConfiguration() {
    return this._kinesisDataStreamSinkConfiguration;
  }
  public putKinesisDataStreamSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsKinesisDataStreamSinkConfiguration) {
    this._kinesisDataStreamSinkConfiguration.internalValue = value;
  }
  public resetKinesisDataStreamSinkConfiguration() {
    this._kinesisDataStreamSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinesisDataStreamSinkConfigurationInput() {
    return this._kinesisDataStreamSinkConfiguration.internalValue;
  }

  // lambda_function_sink_configuration - computed: false, optional: true, required: false
  private _lambdaFunctionSinkConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfigurationOutputReference(this, "lambda_function_sink_configuration");
  public get lambdaFunctionSinkConfiguration() {
    return this._lambdaFunctionSinkConfiguration;
  }
  public putLambdaFunctionSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsLambdaFunctionSinkConfiguration) {
    this._lambdaFunctionSinkConfiguration.internalValue = value;
  }
  public resetLambdaFunctionSinkConfiguration() {
    this._lambdaFunctionSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaFunctionSinkConfigurationInput() {
    return this._lambdaFunctionSinkConfiguration.internalValue;
  }

  // s3_recording_sink_configuration - computed: false, optional: true, required: false
  private _s3RecordingSinkConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfigurationOutputReference(this, "s3_recording_sink_configuration");
  public get s3RecordingSinkConfiguration() {
    return this._s3RecordingSinkConfiguration;
  }
  public putS3RecordingSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsS3RecordingSinkConfiguration) {
    this._s3RecordingSinkConfiguration.internalValue = value;
  }
  public resetS3RecordingSinkConfiguration() {
    this._s3RecordingSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RecordingSinkConfigurationInput() {
    return this._s3RecordingSinkConfiguration.internalValue;
  }

  // sns_topic_sink_configuration - computed: false, optional: true, required: false
  private _snsTopicSinkConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfigurationOutputReference(this, "sns_topic_sink_configuration");
  public get snsTopicSinkConfiguration() {
    return this._snsTopicSinkConfiguration;
  }
  public putSnsTopicSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSnsTopicSinkConfiguration) {
    this._snsTopicSinkConfiguration.internalValue = value;
  }
  public resetSnsTopicSinkConfiguration() {
    this._snsTopicSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snsTopicSinkConfigurationInput() {
    return this._snsTopicSinkConfiguration.internalValue;
  }

  // sqs_queue_sink_configuration - computed: false, optional: true, required: false
  private _sqsQueueSinkConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfigurationOutputReference(this, "sqs_queue_sink_configuration");
  public get sqsQueueSinkConfiguration() {
    return this._sqsQueueSinkConfiguration;
  }
  public putSqsQueueSinkConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsSqsQueueSinkConfiguration) {
    this._sqsQueueSinkConfiguration.internalValue = value;
  }
  public resetSqsQueueSinkConfiguration() {
    this._sqsQueueSinkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsQueueSinkConfigurationInput() {
    return this._sqsQueueSinkConfiguration.internalValue;
  }

  // voice_analytics_processor_configuration - computed: false, optional: true, required: false
  private _voiceAnalyticsProcessorConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfigurationOutputReference(this, "voice_analytics_processor_configuration");
  public get voiceAnalyticsProcessorConfiguration() {
    return this._voiceAnalyticsProcessorConfiguration;
  }
  public putVoiceAnalyticsProcessorConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsVoiceAnalyticsProcessorConfiguration) {
    this._voiceAnalyticsProcessorConfiguration.internalValue = value;
  }
  public resetVoiceAnalyticsProcessorConfiguration() {
    this._voiceAnalyticsProcessorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceAnalyticsProcessorConfigurationInput() {
    return this._voiceAnalyticsProcessorConfiguration.internalValue;
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsList extends cdktf.ComplexList {
  public internalValue? : ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements[] | cdktf.IResolvable

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
  public get(index: number): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsOutputReference {
    return new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rule_name}
  */
  readonly ruleName: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleName = value.ruleName;
    }
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#keywords ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#keywords}
  */
  readonly keywords: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#negate ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rule_name}
  */
  readonly ruleName: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keywords: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keywords),
    negate: cdktf.booleanToTerraform(struct!.negate),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keywords !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywords = this._keywords;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keywords = undefined;
      this._negate = undefined;
      this._ruleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keywords = value.keywords;
      this._negate = value.negate;
      this._ruleName = value.ruleName;
    }
  }

  // keywords - computed: false, optional: false, required: true
  private _keywords?: string[]; 
  public get keywords() {
    return this.getListAttribute('keywords');
  }
  public set keywords(value: string[]) {
    this._keywords = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordsInput() {
    return this._keywords;
  }

  // negate - computed: true, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rule_name ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sentiment_type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sentiment_type}
  */
  readonly sentimentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#time_period ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#time_period}
  */
  readonly timePeriod: number;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    sentiment_type: cdktf.stringToTerraform(struct!.sentimentType),
    time_period: cdktf.numberToTerraform(struct!.timePeriod),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._sentimentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentType = this._sentimentType;
    }
    if (this._timePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriod = this._timePeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ruleName = undefined;
      this._sentimentType = undefined;
      this._timePeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ruleName = value.ruleName;
      this._sentimentType = value.sentimentType;
      this._timePeriod = value.timePeriod;
    }
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // sentiment_type - computed: false, optional: false, required: true
  private _sentimentType?: string; 
  public get sentimentType() {
    return this.getStringAttribute('sentiment_type');
  }
  public set sentimentType(value: string) {
    this._sentimentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentTypeInput() {
    return this._sentimentType;
  }

  // time_period - computed: false, optional: false, required: true
  private _timePeriod?: number; 
  public get timePeriod() {
    return this.getNumberAttribute('time_period');
  }
  public set timePeriod(value: number) {
    this._timePeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInput() {
    return this._timePeriod;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#type ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#type}
  */
  readonly type: string;
  /**
  * issue_detection_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#issue_detection_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#issue_detection_configuration}
  */
  readonly issueDetectionConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration;
  /**
  * keyword_match_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#keyword_match_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#keyword_match_configuration}
  */
  readonly keywordMatchConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration;
  /**
  * sentiment_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#sentiment_configuration ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#sentiment_configuration}
  */
  readonly sentimentConfiguration?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    issue_detection_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationToTerraform(struct!.issueDetectionConfiguration),
    keyword_match_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationToTerraform(struct!.keywordMatchConfiguration),
    sentiment_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationToTerraform(struct!.sentimentConfiguration),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._issueDetectionConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueDetectionConfiguration = this._issueDetectionConfiguration?.internalValue;
    }
    if (this._keywordMatchConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordMatchConfiguration = this._keywordMatchConfiguration?.internalValue;
    }
    if (this._sentimentConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentimentConfiguration = this._sentimentConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._issueDetectionConfiguration.internalValue = undefined;
      this._keywordMatchConfiguration.internalValue = undefined;
      this._sentimentConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._issueDetectionConfiguration.internalValue = value.issueDetectionConfiguration;
      this._keywordMatchConfiguration.internalValue = value.keywordMatchConfiguration;
      this._sentimentConfiguration.internalValue = value.sentimentConfiguration;
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

  // issue_detection_configuration - computed: false, optional: true, required: false
  private _issueDetectionConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfigurationOutputReference(this, "issue_detection_configuration");
  public get issueDetectionConfiguration() {
    return this._issueDetectionConfiguration;
  }
  public putIssueDetectionConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesIssueDetectionConfiguration) {
    this._issueDetectionConfiguration.internalValue = value;
  }
  public resetIssueDetectionConfiguration() {
    this._issueDetectionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issueDetectionConfigurationInput() {
    return this._issueDetectionConfiguration.internalValue;
  }

  // keyword_match_configuration - computed: false, optional: true, required: false
  private _keywordMatchConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfigurationOutputReference(this, "keyword_match_configuration");
  public get keywordMatchConfiguration() {
    return this._keywordMatchConfiguration;
  }
  public putKeywordMatchConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesKeywordMatchConfiguration) {
    this._keywordMatchConfiguration.internalValue = value;
  }
  public resetKeywordMatchConfiguration() {
    this._keywordMatchConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordMatchConfigurationInput() {
    return this._keywordMatchConfiguration.internalValue;
  }

  // sentiment_configuration - computed: false, optional: true, required: false
  private _sentimentConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfigurationOutputReference(this, "sentiment_configuration");
  public get sentimentConfiguration() {
    return this._sentimentConfiguration;
  }
  public putSentimentConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesSentimentConfiguration) {
    this._sentimentConfiguration.internalValue = value;
  }
  public resetSentimentConfiguration() {
    this._sentimentConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentimentConfigurationInput() {
    return this._sentimentConfiguration.internalValue;
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList extends cdktf.ComplexList {
  public internalValue? : ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[] | cdktf.IResolvable

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
  public get(index: number): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference {
    return new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#disabled ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#rules ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#rules}
  */
  readonly rules: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[] | cdktf.IResolvable;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference | ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    rules: cdktf.listMapper(chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesToTerraform, true)(struct!.rules),
  }
}

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._rules.internalValue = value.rules;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#create ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#delete ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration#update ChimesdkmediapipelinesMediaInsightsPipelineConfiguration#update}
  */
  readonly update?: string;
}

export function chimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsToTerraform(struct?: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | cdktf.IResolvable): any {
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

export class ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration aws_chimesdkmediapipelines_media_insights_pipeline_configuration}
*/
export class ChimesdkmediapipelinesMediaInsightsPipelineConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_chimesdkmediapipelines_media_insights_pipeline_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/chimesdkmediapipelines_media_insights_pipeline_configuration aws_chimesdkmediapipelines_media_insights_pipeline_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ChimesdkmediapipelinesMediaInsightsPipelineConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_chimesdkmediapipelines_media_insights_pipeline_configuration',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.20.1',
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
    this._name = config.name;
    this._resourceAccessRoleArn = config.resourceAccessRoleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._elements.internalValue = config.elements;
    this._realTimeAlertConfiguration.internalValue = config.realTimeAlertConfiguration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // resource_access_role_arn - computed: false, optional: false, required: true
  private _resourceAccessRoleArn?: string; 
  public get resourceAccessRoleArn() {
    return this.getStringAttribute('resource_access_role_arn');
  }
  public set resourceAccessRoleArn(value: string) {
    this._resourceAccessRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccessRoleArnInput() {
    return this._resourceAccessRoleArn;
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

  // elements - computed: false, optional: false, required: true
  private _elements = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsList(this, "elements", false);
  public get elements() {
    return this._elements;
  }
  public putElements(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationElements[] | cdktf.IResolvable) {
    this._elements.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get elementsInput() {
    return this._elements.internalValue;
  }

  // real_time_alert_configuration - computed: false, optional: true, required: false
  private _realTimeAlertConfiguration = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationOutputReference(this, "real_time_alert_configuration");
  public get realTimeAlertConfiguration() {
    return this._realTimeAlertConfiguration;
  }
  public putRealTimeAlertConfiguration(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfiguration) {
    this._realTimeAlertConfiguration.internalValue = value;
  }
  public resetRealTimeAlertConfiguration() {
    this._realTimeAlertConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realTimeAlertConfigurationInput() {
    return this._realTimeAlertConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_access_role_arn: cdktf.stringToTerraform(this._resourceAccessRoleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      elements: cdktf.listMapper(chimesdkmediapipelinesMediaInsightsPipelineConfigurationElementsToTerraform, true)(this._elements.internalValue),
      real_time_alert_configuration: chimesdkmediapipelinesMediaInsightsPipelineConfigurationRealTimeAlertConfigurationToTerraform(this._realTimeAlertConfiguration.internalValue),
      timeouts: chimesdkmediapipelinesMediaInsightsPipelineConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
