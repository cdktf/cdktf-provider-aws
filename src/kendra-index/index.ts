// https://www.terraform.io/docs/providers/aws/r/kendra_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KendraIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#description KendraIndex#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#edition KendraIndex#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#id KendraIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#role_arn KendraIndex#role_arn}
  */
  readonly roleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags KendraIndex#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#tags_all KendraIndex#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_context_policy KendraIndex#user_context_policy}
  */
  readonly userContextPolicy?: string;
  /**
  * capacity_units block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#capacity_units KendraIndex#capacity_units}
  */
  readonly capacityUnits?: KendraIndexCapacityUnits;
  /**
  * document_metadata_configuration_updates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#document_metadata_configuration_updates KendraIndex#document_metadata_configuration_updates}
  */
  readonly documentMetadataConfigurationUpdates?: KendraIndexDocumentMetadataConfigurationUpdates[] | cdktf.IResolvable;
  /**
  * server_side_encryption_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#server_side_encryption_configuration KendraIndex#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: KendraIndexServerSideEncryptionConfiguration;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#timeouts KendraIndex#timeouts}
  */
  readonly timeouts?: KendraIndexTimeouts;
  /**
  * user_group_resolution_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_configuration KendraIndex#user_group_resolution_configuration}
  */
  readonly userGroupResolutionConfiguration?: KendraIndexUserGroupResolutionConfiguration;
  /**
  * user_token_configurations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_token_configurations KendraIndex#user_token_configurations}
  */
  readonly userTokenConfigurations?: KendraIndexUserTokenConfigurations;
}
export interface KendraIndexIndexStatisticsFaqStatistics {
}

export function kendraIndexIndexStatisticsFaqStatisticsToTerraform(struct?: KendraIndexIndexStatisticsFaqStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class KendraIndexIndexStatisticsFaqStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KendraIndexIndexStatisticsFaqStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexIndexStatisticsFaqStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // indexed_question_answers_count - computed: true, optional: false, required: false
  public get indexedQuestionAnswersCount() {
    return this.getNumberAttribute('indexed_question_answers_count');
  }
}

export class KendraIndexIndexStatisticsFaqStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): KendraIndexIndexStatisticsFaqStatisticsOutputReference {
    return new KendraIndexIndexStatisticsFaqStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraIndexIndexStatisticsTextDocumentStatistics {
}

export function kendraIndexIndexStatisticsTextDocumentStatisticsToTerraform(struct?: KendraIndexIndexStatisticsTextDocumentStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KendraIndexIndexStatisticsTextDocumentStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexIndexStatisticsTextDocumentStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // indexed_text_bytes - computed: true, optional: false, required: false
  public get indexedTextBytes() {
    return this.getNumberAttribute('indexed_text_bytes');
  }

  // indexed_text_documents_count - computed: true, optional: false, required: false
  public get indexedTextDocumentsCount() {
    return this.getNumberAttribute('indexed_text_documents_count');
  }
}

export class KendraIndexIndexStatisticsTextDocumentStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference {
    return new KendraIndexIndexStatisticsTextDocumentStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraIndexIndexStatistics {
}

export function kendraIndexIndexStatisticsToTerraform(struct?: KendraIndexIndexStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class KendraIndexIndexStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KendraIndexIndexStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexIndexStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // faq_statistics - computed: true, optional: false, required: false
  private _faqStatistics = new KendraIndexIndexStatisticsFaqStatisticsList(this, "faq_statistics", false);
  public get faqStatistics() {
    return this._faqStatistics;
  }

  // text_document_statistics - computed: true, optional: false, required: false
  private _textDocumentStatistics = new KendraIndexIndexStatisticsTextDocumentStatisticsList(this, "text_document_statistics", false);
  public get textDocumentStatistics() {
    return this._textDocumentStatistics;
  }
}

export class KendraIndexIndexStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): KendraIndexIndexStatisticsOutputReference {
    return new KendraIndexIndexStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraIndexCapacityUnits {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#query_capacity_units KendraIndex#query_capacity_units}
  */
  readonly queryCapacityUnits?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#storage_capacity_units KendraIndex#storage_capacity_units}
  */
  readonly storageCapacityUnits?: number;
}

export function kendraIndexCapacityUnitsToTerraform(struct?: KendraIndexCapacityUnitsOutputReference | KendraIndexCapacityUnits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_capacity_units: cdktf.numberToTerraform(struct!.queryCapacityUnits),
    storage_capacity_units: cdktf.numberToTerraform(struct!.storageCapacityUnits),
  }
}

export class KendraIndexCapacityUnitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexCapacityUnits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryCapacityUnits = this._queryCapacityUnits;
    }
    if (this._storageCapacityUnits !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageCapacityUnits = this._storageCapacityUnits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexCapacityUnits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryCapacityUnits = undefined;
      this._storageCapacityUnits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryCapacityUnits = value.queryCapacityUnits;
      this._storageCapacityUnits = value.storageCapacityUnits;
    }
  }

  // query_capacity_units - computed: true, optional: true, required: false
  private _queryCapacityUnits?: number; 
  public get queryCapacityUnits() {
    return this.getNumberAttribute('query_capacity_units');
  }
  public set queryCapacityUnits(value: number) {
    this._queryCapacityUnits = value;
  }
  public resetQueryCapacityUnits() {
    this._queryCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryCapacityUnitsInput() {
    return this._queryCapacityUnits;
  }

  // storage_capacity_units - computed: true, optional: true, required: false
  private _storageCapacityUnits?: number; 
  public get storageCapacityUnits() {
    return this.getNumberAttribute('storage_capacity_units');
  }
  public set storageCapacityUnits(value: number) {
    this._storageCapacityUnits = value;
  }
  public resetStorageCapacityUnits() {
    this._storageCapacityUnits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageCapacityUnitsInput() {
    return this._storageCapacityUnits;
  }
}
export interface KendraIndexDocumentMetadataConfigurationUpdatesRelevance {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#duration KendraIndex#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#freshness KendraIndex#freshness}
  */
  readonly freshness?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#importance KendraIndex#importance}
  */
  readonly importance?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#rank_order KendraIndex#rank_order}
  */
  readonly rankOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#values_importance_map KendraIndex#values_importance_map}
  */
  readonly valuesImportanceMap?: { [key: string]: number };
}

export function kendraIndexDocumentMetadataConfigurationUpdatesRelevanceToTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference | KendraIndexDocumentMetadataConfigurationUpdatesRelevance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    freshness: cdktf.booleanToTerraform(struct!.freshness),
    importance: cdktf.numberToTerraform(struct!.importance),
    rank_order: cdktf.stringToTerraform(struct!.rankOrder),
    values_importance_map: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.valuesImportanceMap),
  }
}

export class KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexDocumentMetadataConfigurationUpdatesRelevance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._freshness !== undefined) {
      hasAnyValues = true;
      internalValueResult.freshness = this._freshness;
    }
    if (this._importance !== undefined) {
      hasAnyValues = true;
      internalValueResult.importance = this._importance;
    }
    if (this._rankOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.rankOrder = this._rankOrder;
    }
    if (this._valuesImportanceMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesImportanceMap = this._valuesImportanceMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexDocumentMetadataConfigurationUpdatesRelevance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._freshness = undefined;
      this._importance = undefined;
      this._rankOrder = undefined;
      this._valuesImportanceMap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._freshness = value.freshness;
      this._importance = value.importance;
      this._rankOrder = value.rankOrder;
      this._valuesImportanceMap = value.valuesImportanceMap;
    }
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // freshness - computed: true, optional: true, required: false
  private _freshness?: boolean | cdktf.IResolvable; 
  public get freshness() {
    return this.getBooleanAttribute('freshness');
  }
  public set freshness(value: boolean | cdktf.IResolvable) {
    this._freshness = value;
  }
  public resetFreshness() {
    this._freshness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freshnessInput() {
    return this._freshness;
  }

  // importance - computed: true, optional: true, required: false
  private _importance?: number; 
  public get importance() {
    return this.getNumberAttribute('importance');
  }
  public set importance(value: number) {
    this._importance = value;
  }
  public resetImportance() {
    this._importance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importanceInput() {
    return this._importance;
  }

  // rank_order - computed: true, optional: true, required: false
  private _rankOrder?: string; 
  public get rankOrder() {
    return this.getStringAttribute('rank_order');
  }
  public set rankOrder(value: string) {
    this._rankOrder = value;
  }
  public resetRankOrder() {
    this._rankOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankOrderInput() {
    return this._rankOrder;
  }

  // values_importance_map - computed: true, optional: true, required: false
  private _valuesImportanceMap?: { [key: string]: number }; 
  public get valuesImportanceMap() {
    return this.getNumberMapAttribute('values_importance_map');
  }
  public set valuesImportanceMap(value: { [key: string]: number }) {
    this._valuesImportanceMap = value;
  }
  public resetValuesImportanceMap() {
    this._valuesImportanceMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesImportanceMapInput() {
    return this._valuesImportanceMap;
  }
}
export interface KendraIndexDocumentMetadataConfigurationUpdatesSearch {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#displayable KendraIndex#displayable}
  */
  readonly displayable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#facetable KendraIndex#facetable}
  */
  readonly facetable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#searchable KendraIndex#searchable}
  */
  readonly searchable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#sortable KendraIndex#sortable}
  */
  readonly sortable?: boolean | cdktf.IResolvable;
}

export function kendraIndexDocumentMetadataConfigurationUpdatesSearchToTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference | KendraIndexDocumentMetadataConfigurationUpdatesSearch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    displayable: cdktf.booleanToTerraform(struct!.displayable),
    facetable: cdktf.booleanToTerraform(struct!.facetable),
    searchable: cdktf.booleanToTerraform(struct!.searchable),
    sortable: cdktf.booleanToTerraform(struct!.sortable),
  }
}

export class KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexDocumentMetadataConfigurationUpdatesSearch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayable !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayable = this._displayable;
    }
    if (this._facetable !== undefined) {
      hasAnyValues = true;
      internalValueResult.facetable = this._facetable;
    }
    if (this._searchable !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchable = this._searchable;
    }
    if (this._sortable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortable = this._sortable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexDocumentMetadataConfigurationUpdatesSearch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayable = undefined;
      this._facetable = undefined;
      this._searchable = undefined;
      this._sortable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayable = value.displayable;
      this._facetable = value.facetable;
      this._searchable = value.searchable;
      this._sortable = value.sortable;
    }
  }

  // displayable - computed: true, optional: true, required: false
  private _displayable?: boolean | cdktf.IResolvable; 
  public get displayable() {
    return this.getBooleanAttribute('displayable');
  }
  public set displayable(value: boolean | cdktf.IResolvable) {
    this._displayable = value;
  }
  public resetDisplayable() {
    this._displayable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayableInput() {
    return this._displayable;
  }

  // facetable - computed: true, optional: true, required: false
  private _facetable?: boolean | cdktf.IResolvable; 
  public get facetable() {
    return this.getBooleanAttribute('facetable');
  }
  public set facetable(value: boolean | cdktf.IResolvable) {
    this._facetable = value;
  }
  public resetFacetable() {
    this._facetable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetableInput() {
    return this._facetable;
  }

  // searchable - computed: true, optional: true, required: false
  private _searchable?: boolean | cdktf.IResolvable; 
  public get searchable() {
    return this.getBooleanAttribute('searchable');
  }
  public set searchable(value: boolean | cdktf.IResolvable) {
    this._searchable = value;
  }
  public resetSearchable() {
    this._searchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchableInput() {
    return this._searchable;
  }

  // sortable - computed: true, optional: true, required: false
  private _sortable?: boolean | cdktf.IResolvable; 
  public get sortable() {
    return this.getBooleanAttribute('sortable');
  }
  public set sortable(value: boolean | cdktf.IResolvable) {
    this._sortable = value;
  }
  public resetSortable() {
    this._sortable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortableInput() {
    return this._sortable;
  }
}
export interface KendraIndexDocumentMetadataConfigurationUpdates {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#name KendraIndex#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#type KendraIndex#type}
  */
  readonly type: string;
  /**
  * relevance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#relevance KendraIndex#relevance}
  */
  readonly relevance?: KendraIndexDocumentMetadataConfigurationUpdatesRelevance;
  /**
  * search block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#search KendraIndex#search}
  */
  readonly search?: KendraIndexDocumentMetadataConfigurationUpdatesSearch;
}

export function kendraIndexDocumentMetadataConfigurationUpdatesToTerraform(struct?: KendraIndexDocumentMetadataConfigurationUpdates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    relevance: kendraIndexDocumentMetadataConfigurationUpdatesRelevanceToTerraform(struct!.relevance),
    search: kendraIndexDocumentMetadataConfigurationUpdatesSearchToTerraform(struct!.search),
  }
}

export class KendraIndexDocumentMetadataConfigurationUpdatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KendraIndexDocumentMetadataConfigurationUpdates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._relevance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relevance = this._relevance?.internalValue;
    }
    if (this._search?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexDocumentMetadataConfigurationUpdates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
      this._relevance.internalValue = undefined;
      this._search.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
      this._relevance.internalValue = value.relevance;
      this._search.internalValue = value.search;
    }
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

  // relevance - computed: false, optional: true, required: false
  private _relevance = new KendraIndexDocumentMetadataConfigurationUpdatesRelevanceOutputReference(this, "relevance");
  public get relevance() {
    return this._relevance;
  }
  public putRelevance(value: KendraIndexDocumentMetadataConfigurationUpdatesRelevance) {
    this._relevance.internalValue = value;
  }
  public resetRelevance() {
    this._relevance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relevanceInput() {
    return this._relevance.internalValue;
  }

  // search - computed: false, optional: true, required: false
  private _search = new KendraIndexDocumentMetadataConfigurationUpdatesSearchOutputReference(this, "search");
  public get search() {
    return this._search;
  }
  public putSearch(value: KendraIndexDocumentMetadataConfigurationUpdatesSearch) {
    this._search.internalValue = value;
  }
  public resetSearch() {
    this._search.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search.internalValue;
  }
}

export class KendraIndexDocumentMetadataConfigurationUpdatesList extends cdktf.ComplexList {
  public internalValue? : KendraIndexDocumentMetadataConfigurationUpdates[] | cdktf.IResolvable

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
  public get(index: number): KendraIndexDocumentMetadataConfigurationUpdatesOutputReference {
    return new KendraIndexDocumentMetadataConfigurationUpdatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KendraIndexServerSideEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#kms_key_id KendraIndex#kms_key_id}
  */
  readonly kmsKeyId?: string;
}

export function kendraIndexServerSideEncryptionConfigurationToTerraform(struct?: KendraIndexServerSideEncryptionConfigurationOutputReference | KendraIndexServerSideEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
  }
}

export class KendraIndexServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexServerSideEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexServerSideEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
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
}
export interface KendraIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#create KendraIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#delete KendraIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#update KendraIndex#update}
  */
  readonly update?: string;
}

export function kendraIndexTimeoutsToTerraform(struct?: KendraIndexTimeoutsOutputReference | KendraIndexTimeouts | cdktf.IResolvable): any {
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

export class KendraIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KendraIndexTimeouts | cdktf.IResolvable | undefined) {
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
export interface KendraIndexUserGroupResolutionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_group_resolution_mode KendraIndex#user_group_resolution_mode}
  */
  readonly userGroupResolutionMode: string;
}

export function kendraIndexUserGroupResolutionConfigurationToTerraform(struct?: KendraIndexUserGroupResolutionConfigurationOutputReference | KendraIndexUserGroupResolutionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_group_resolution_mode: cdktf.stringToTerraform(struct!.userGroupResolutionMode),
  }
}

export class KendraIndexUserGroupResolutionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexUserGroupResolutionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userGroupResolutionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupResolutionMode = this._userGroupResolutionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexUserGroupResolutionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userGroupResolutionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userGroupResolutionMode = value.userGroupResolutionMode;
    }
  }

  // user_group_resolution_mode - computed: false, optional: false, required: true
  private _userGroupResolutionMode?: string; 
  public get userGroupResolutionMode() {
    return this.getStringAttribute('user_group_resolution_mode');
  }
  public set userGroupResolutionMode(value: string) {
    this._userGroupResolutionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupResolutionModeInput() {
    return this._userGroupResolutionMode;
  }
}
export interface KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}
  */
  readonly groupAttributeField: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}
  */
  readonly userNameAttributeField: string;
}

export function kendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference | KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_attribute_field: cdktf.stringToTerraform(struct!.groupAttributeField),
    user_name_attribute_field: cdktf.stringToTerraform(struct!.userNameAttributeField),
  }
}

export class KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttributeField = this._groupAttributeField;
    }
    if (this._userNameAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameAttributeField = this._userNameAttributeField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupAttributeField = undefined;
      this._userNameAttributeField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupAttributeField = value.groupAttributeField;
      this._userNameAttributeField = value.userNameAttributeField;
    }
  }

  // group_attribute_field - computed: false, optional: false, required: true
  private _groupAttributeField?: string; 
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }
  public set groupAttributeField(value: string) {
    this._groupAttributeField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeFieldInput() {
    return this._groupAttributeField;
  }

  // user_name_attribute_field - computed: false, optional: false, required: true
  private _userNameAttributeField?: string; 
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
  public set userNameAttributeField(value: string) {
    this._userNameAttributeField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameAttributeFieldInput() {
    return this._userNameAttributeField;
  }
}
export interface KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#claim_regex KendraIndex#claim_regex}
  */
  readonly claimRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#group_attribute_field KendraIndex#group_attribute_field}
  */
  readonly groupAttributeField?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#issuer KendraIndex#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#key_location KendraIndex#key_location}
  */
  readonly keyLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#secrets_manager_arn KendraIndex#secrets_manager_arn}
  */
  readonly secretsManagerArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#url KendraIndex#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#user_name_attribute_field KendraIndex#user_name_attribute_field}
  */
  readonly userNameAttributeField?: string;
}

export function kendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference | KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_regex: cdktf.stringToTerraform(struct!.claimRegex),
    group_attribute_field: cdktf.stringToTerraform(struct!.groupAttributeField),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    key_location: cdktf.stringToTerraform(struct!.keyLocation),
    secrets_manager_arn: cdktf.stringToTerraform(struct!.secretsManagerArn),
    url: cdktf.stringToTerraform(struct!.url),
    user_name_attribute_field: cdktf.stringToTerraform(struct!.userNameAttributeField),
  }
}

export class KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimRegex = this._claimRegex;
    }
    if (this._groupAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAttributeField = this._groupAttributeField;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._keyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyLocation = this._keyLocation;
    }
    if (this._secretsManagerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretsManagerArn = this._secretsManagerArn;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._userNameAttributeField !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameAttributeField = this._userNameAttributeField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._claimRegex = undefined;
      this._groupAttributeField = undefined;
      this._issuer = undefined;
      this._keyLocation = undefined;
      this._secretsManagerArn = undefined;
      this._url = undefined;
      this._userNameAttributeField = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._claimRegex = value.claimRegex;
      this._groupAttributeField = value.groupAttributeField;
      this._issuer = value.issuer;
      this._keyLocation = value.keyLocation;
      this._secretsManagerArn = value.secretsManagerArn;
      this._url = value.url;
      this._userNameAttributeField = value.userNameAttributeField;
    }
  }

  // claim_regex - computed: false, optional: true, required: false
  private _claimRegex?: string; 
  public get claimRegex() {
    return this.getStringAttribute('claim_regex');
  }
  public set claimRegex(value: string) {
    this._claimRegex = value;
  }
  public resetClaimRegex() {
    this._claimRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimRegexInput() {
    return this._claimRegex;
  }

  // group_attribute_field - computed: false, optional: true, required: false
  private _groupAttributeField?: string; 
  public get groupAttributeField() {
    return this.getStringAttribute('group_attribute_field');
  }
  public set groupAttributeField(value: string) {
    this._groupAttributeField = value;
  }
  public resetGroupAttributeField() {
    this._groupAttributeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAttributeFieldInput() {
    return this._groupAttributeField;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // key_location - computed: false, optional: false, required: true
  private _keyLocation?: string; 
  public get keyLocation() {
    return this.getStringAttribute('key_location');
  }
  public set keyLocation(value: string) {
    this._keyLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLocationInput() {
    return this._keyLocation;
  }

  // secrets_manager_arn - computed: false, optional: true, required: false
  private _secretsManagerArn?: string; 
  public get secretsManagerArn() {
    return this.getStringAttribute('secrets_manager_arn');
  }
  public set secretsManagerArn(value: string) {
    this._secretsManagerArn = value;
  }
  public resetSecretsManagerArn() {
    this._secretsManagerArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsManagerArnInput() {
    return this._secretsManagerArn;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // user_name_attribute_field - computed: false, optional: true, required: false
  private _userNameAttributeField?: string; 
  public get userNameAttributeField() {
    return this.getStringAttribute('user_name_attribute_field');
  }
  public set userNameAttributeField(value: string) {
    this._userNameAttributeField = value;
  }
  public resetUserNameAttributeField() {
    this._userNameAttributeField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameAttributeFieldInput() {
    return this._userNameAttributeField;
  }
}
export interface KendraIndexUserTokenConfigurations {
  /**
  * json_token_type_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#json_token_type_configuration KendraIndex#json_token_type_configuration}
  */
  readonly jsonTokenTypeConfiguration?: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration;
  /**
  * jwt_token_type_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kendra_index#jwt_token_type_configuration KendraIndex#jwt_token_type_configuration}
  */
  readonly jwtTokenTypeConfiguration?: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration;
}

export function kendraIndexUserTokenConfigurationsToTerraform(struct?: KendraIndexUserTokenConfigurationsOutputReference | KendraIndexUserTokenConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_token_type_configuration: kendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationToTerraform(struct!.jsonTokenTypeConfiguration),
    jwt_token_type_configuration: kendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationToTerraform(struct!.jwtTokenTypeConfiguration),
  }
}

export class KendraIndexUserTokenConfigurationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): KendraIndexUserTokenConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonTokenTypeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonTokenTypeConfiguration = this._jsonTokenTypeConfiguration?.internalValue;
    }
    if (this._jwtTokenTypeConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokenTypeConfiguration = this._jwtTokenTypeConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KendraIndexUserTokenConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonTokenTypeConfiguration.internalValue = undefined;
      this._jwtTokenTypeConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonTokenTypeConfiguration.internalValue = value.jsonTokenTypeConfiguration;
      this._jwtTokenTypeConfiguration.internalValue = value.jwtTokenTypeConfiguration;
    }
  }

  // json_token_type_configuration - computed: false, optional: true, required: false
  private _jsonTokenTypeConfiguration = new KendraIndexUserTokenConfigurationsJsonTokenTypeConfigurationOutputReference(this, "json_token_type_configuration");
  public get jsonTokenTypeConfiguration() {
    return this._jsonTokenTypeConfiguration;
  }
  public putJsonTokenTypeConfiguration(value: KendraIndexUserTokenConfigurationsJsonTokenTypeConfiguration) {
    this._jsonTokenTypeConfiguration.internalValue = value;
  }
  public resetJsonTokenTypeConfiguration() {
    this._jsonTokenTypeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonTokenTypeConfigurationInput() {
    return this._jsonTokenTypeConfiguration.internalValue;
  }

  // jwt_token_type_configuration - computed: false, optional: true, required: false
  private _jwtTokenTypeConfiguration = new KendraIndexUserTokenConfigurationsJwtTokenTypeConfigurationOutputReference(this, "jwt_token_type_configuration");
  public get jwtTokenTypeConfiguration() {
    return this._jwtTokenTypeConfiguration;
  }
  public putJwtTokenTypeConfiguration(value: KendraIndexUserTokenConfigurationsJwtTokenTypeConfiguration) {
    this._jwtTokenTypeConfiguration.internalValue = value;
  }
  public resetJwtTokenTypeConfiguration() {
    this._jwtTokenTypeConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenTypeConfigurationInput() {
    return this._jwtTokenTypeConfiguration.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kendra_index aws_kendra_index}
*/
export class KendraIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_kendra_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kendra_index aws_kendra_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KendraIndexConfig
  */
  public constructor(scope: Construct, id: string, config: KendraIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_kendra_index',
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
    this._description = config.description;
    this._edition = config.edition;
    this._id = config.id;
    this._name = config.name;
    this._roleArn = config.roleArn;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._userContextPolicy = config.userContextPolicy;
    this._capacityUnits.internalValue = config.capacityUnits;
    this._documentMetadataConfigurationUpdates.internalValue = config.documentMetadataConfigurationUpdates;
    this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._userGroupResolutionConfiguration.internalValue = config.userGroupResolutionConfiguration;
    this._userTokenConfigurations.internalValue = config.userTokenConfigurations;
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

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // index_statistics - computed: true, optional: false, required: false
  private _indexStatistics = new KendraIndexIndexStatisticsList(this, "index_statistics", false);
  public get indexStatistics() {
    return this._indexStatistics;
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

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // user_context_policy - computed: false, optional: true, required: false
  private _userContextPolicy?: string; 
  public get userContextPolicy() {
    return this.getStringAttribute('user_context_policy');
  }
  public set userContextPolicy(value: string) {
    this._userContextPolicy = value;
  }
  public resetUserContextPolicy() {
    this._userContextPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userContextPolicyInput() {
    return this._userContextPolicy;
  }

  // capacity_units - computed: false, optional: true, required: false
  private _capacityUnits = new KendraIndexCapacityUnitsOutputReference(this, "capacity_units");
  public get capacityUnits() {
    return this._capacityUnits;
  }
  public putCapacityUnits(value: KendraIndexCapacityUnits) {
    this._capacityUnits.internalValue = value;
  }
  public resetCapacityUnits() {
    this._capacityUnits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityUnitsInput() {
    return this._capacityUnits.internalValue;
  }

  // document_metadata_configuration_updates - computed: false, optional: true, required: false
  private _documentMetadataConfigurationUpdates = new KendraIndexDocumentMetadataConfigurationUpdatesList(this, "document_metadata_configuration_updates", true);
  public get documentMetadataConfigurationUpdates() {
    return this._documentMetadataConfigurationUpdates;
  }
  public putDocumentMetadataConfigurationUpdates(value: KendraIndexDocumentMetadataConfigurationUpdates[] | cdktf.IResolvable) {
    this._documentMetadataConfigurationUpdates.internalValue = value;
  }
  public resetDocumentMetadataConfigurationUpdates() {
    this._documentMetadataConfigurationUpdates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentMetadataConfigurationUpdatesInput() {
    return this._documentMetadataConfigurationUpdates.internalValue;
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration = new KendraIndexServerSideEncryptionConfigurationOutputReference(this, "server_side_encryption_configuration");
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: KendraIndexServerSideEncryptionConfiguration) {
    this._serverSideEncryptionConfiguration.internalValue = value;
  }
  public resetServerSideEncryptionConfiguration() {
    this._serverSideEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionConfigurationInput() {
    return this._serverSideEncryptionConfiguration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KendraIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KendraIndexTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_group_resolution_configuration - computed: false, optional: true, required: false
  private _userGroupResolutionConfiguration = new KendraIndexUserGroupResolutionConfigurationOutputReference(this, "user_group_resolution_configuration");
  public get userGroupResolutionConfiguration() {
    return this._userGroupResolutionConfiguration;
  }
  public putUserGroupResolutionConfiguration(value: KendraIndexUserGroupResolutionConfiguration) {
    this._userGroupResolutionConfiguration.internalValue = value;
  }
  public resetUserGroupResolutionConfiguration() {
    this._userGroupResolutionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupResolutionConfigurationInput() {
    return this._userGroupResolutionConfiguration.internalValue;
  }

  // user_token_configurations - computed: false, optional: true, required: false
  private _userTokenConfigurations = new KendraIndexUserTokenConfigurationsOutputReference(this, "user_token_configurations");
  public get userTokenConfigurations() {
    return this._userTokenConfigurations;
  }
  public putUserTokenConfigurations(value: KendraIndexUserTokenConfigurations) {
    this._userTokenConfigurations.internalValue = value;
  }
  public resetUserTokenConfigurations() {
    this._userTokenConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTokenConfigurationsInput() {
    return this._userTokenConfigurations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      edition: cdktf.stringToTerraform(this._edition),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      user_context_policy: cdktf.stringToTerraform(this._userContextPolicy),
      capacity_units: kendraIndexCapacityUnitsToTerraform(this._capacityUnits.internalValue),
      document_metadata_configuration_updates: cdktf.listMapper(kendraIndexDocumentMetadataConfigurationUpdatesToTerraform, true)(this._documentMetadataConfigurationUpdates.internalValue),
      server_side_encryption_configuration: kendraIndexServerSideEncryptionConfigurationToTerraform(this._serverSideEncryptionConfiguration.internalValue),
      timeouts: kendraIndexTimeoutsToTerraform(this._timeouts.internalValue),
      user_group_resolution_configuration: kendraIndexUserGroupResolutionConfigurationToTerraform(this._userGroupResolutionConfiguration.internalValue),
      user_token_configurations: kendraIndexUserTokenConfigurationsToTerraform(this._userTokenConfigurations.internalValue),
    };
  }
}
