// https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BedrockagentDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#data_deletion_policy BedrockagentDataSource#data_deletion_policy}
  */
  readonly dataDeletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#description BedrockagentDataSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#knowledge_base_id BedrockagentDataSource#knowledge_base_id}
  */
  readonly knowledgeBaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#name BedrockagentDataSource#name}
  */
  readonly name: string;
  /**
  * data_source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#data_source_configuration BedrockagentDataSource#data_source_configuration}
  */
  readonly dataSourceConfiguration?: BedrockagentDataSourceDataSourceConfiguration[] | cdktf.IResolvable;
  /**
  * server_side_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#server_side_encryption_configuration BedrockagentDataSource#server_side_encryption_configuration}
  */
  readonly serverSideEncryptionConfiguration?: BedrockagentDataSourceServerSideEncryptionConfiguration[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#timeouts BedrockagentDataSource#timeouts}
  */
  readonly timeouts?: BedrockagentDataSourceTimeouts;
  /**
  * vector_ingestion_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#vector_ingestion_configuration BedrockagentDataSource#vector_ingestion_configuration}
  */
  readonly vectorIngestionConfiguration?: BedrockagentDataSourceVectorIngestionConfiguration[] | cdktf.IResolvable;
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#object_type BedrockagentDataSource#object_type}
  */
  readonly objectType: string;
}

export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#filters BedrockagentDataSource#filters}
  */
  readonly filters?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform, true)(struct!.filters),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
  */
  readonly type: string;
  /**
  * pattern_object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#pattern_object_filter BedrockagentDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    pattern_object_filter: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform, true)(struct!.patternObjectFilter),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_object_filter: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform, true)(struct!.patternObjectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._patternObjectFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
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

  // pattern_object_filter - computed: false, optional: true, required: false
  private _patternObjectFilter = new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList(this, "pattern_object_filter", false);
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration {
  /**
  * filter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#filter_configuration BedrockagentDataSource#filter_configuration}
  */
  readonly filterConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToTerraform, true)(struct!.filterConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform, true)(struct!.filterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: false, optional: true, required: false
  private _filterConfiguration = new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfigurationList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#auth_type BedrockagentDataSource#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#credentials_secret_arn BedrockagentDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#host_type BedrockagentDataSource#host_type}
  */
  readonly hostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#host_url BedrockagentDataSource#host_url}
  */
  readonly hostUrl: string;
}

export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktf.stringToTerraform(struct!.credentialsSecretArn),
    host_type: cdktf.stringToTerraform(struct!.hostType),
    host_url: cdktf.stringToTerraform(struct!.hostUrl),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktf.stringToHclTerraform(struct!.hostType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url: {
      value: cdktf.stringToHclTerraform(struct!.hostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._hostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrl = this._hostUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._hostType = undefined;
      this._hostUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._hostType = value.hostType;
      this._hostUrl = value.hostUrl;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // host_type - computed: false, optional: false, required: true
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // host_url - computed: false, optional: false, required: true
  private _hostUrl?: string; 
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
  public set hostUrl(value: string) {
    this._hostUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawler_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationList",
    },
    source_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfigurationList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationCrawlerConfiguration[] | cdktf.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfigurationList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationSourceConfiguration[] | cdktf.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationS3Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#bucket_arn BedrockagentDataSource#bucket_arn}
  */
  readonly bucketArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#bucket_owner_account_id BedrockagentDataSource#bucket_owner_account_id}
  */
  readonly bucketOwnerAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#inclusion_prefixes BedrockagentDataSource#inclusion_prefixes}
  */
  readonly inclusionPrefixes?: string[];
}

export function bedrockagentDataSourceDataSourceConfigurationS3ConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_arn: cdktf.stringToTerraform(struct!.bucketArn),
    bucket_owner_account_id: cdktf.stringToTerraform(struct!.bucketOwnerAccountId),
    inclusion_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionPrefixes),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_arn: {
      value: cdktf.stringToHclTerraform(struct!.bucketArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_owner_account_id: {
      value: cdktf.stringToHclTerraform(struct!.bucketOwnerAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inclusion_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketArn = this._bucketArn;
    }
    if (this._bucketOwnerAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketOwnerAccountId = this._bucketOwnerAccountId;
    }
    if (this._inclusionPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionPrefixes = this._inclusionPrefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationS3Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bucketArn = undefined;
      this._bucketOwnerAccountId = undefined;
      this._inclusionPrefixes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bucketArn = value.bucketArn;
      this._bucketOwnerAccountId = value.bucketOwnerAccountId;
      this._inclusionPrefixes = value.inclusionPrefixes;
    }
  }

  // bucket_arn - computed: false, optional: false, required: true
  private _bucketArn?: string; 
  public get bucketArn() {
    return this.getStringAttribute('bucket_arn');
  }
  public set bucketArn(value: string) {
    this._bucketArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketArnInput() {
    return this._bucketArn;
  }

  // bucket_owner_account_id - computed: false, optional: true, required: false
  private _bucketOwnerAccountId?: string; 
  public get bucketOwnerAccountId() {
    return this.getStringAttribute('bucket_owner_account_id');
  }
  public set bucketOwnerAccountId(value: string) {
    this._bucketOwnerAccountId = value;
  }
  public resetBucketOwnerAccountId() {
    this._bucketOwnerAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketOwnerAccountIdInput() {
    return this._bucketOwnerAccountId;
  }

  // inclusion_prefixes - computed: false, optional: true, required: false
  private _inclusionPrefixes?: string[]; 
  public get inclusionPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_prefixes'));
  }
  public set inclusionPrefixes(value: string[]) {
    this._inclusionPrefixes = value;
  }
  public resetInclusionPrefixes() {
    this._inclusionPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionPrefixesInput() {
    return this._inclusionPrefixes;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationS3Configuration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationS3ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#object_type BedrockagentDataSource#object_type}
  */
  readonly objectType: string;
}

export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#filters BedrockagentDataSource#filters}
  */
  readonly filters?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform, true)(struct!.filters),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
  */
  readonly type: string;
  /**
  * pattern_object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#pattern_object_filter BedrockagentDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    pattern_object_filter: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform, true)(struct!.patternObjectFilter),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_object_filter: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform, true)(struct!.patternObjectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._patternObjectFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
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

  // pattern_object_filter - computed: false, optional: true, required: false
  private _patternObjectFilter = new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList(this, "pattern_object_filter", false);
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration {
  /**
  * filter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#filter_configuration BedrockagentDataSource#filter_configuration}
  */
  readonly filterConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToTerraform, true)(struct!.filterConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform, true)(struct!.filterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: false, optional: true, required: false
  private _filterConfiguration = new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfigurationList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#auth_type BedrockagentDataSource#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#credentials_secret_arn BedrockagentDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#host_url BedrockagentDataSource#host_url}
  */
  readonly hostUrl: string;
}

export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktf.stringToTerraform(struct!.credentialsSecretArn),
    host_url: cdktf.stringToTerraform(struct!.hostUrl),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_url: {
      value: cdktf.stringToHclTerraform(struct!.hostUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._hostUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUrl = this._hostUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._hostUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._hostUrl = value.hostUrl;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // host_url - computed: false, optional: false, required: true
  private _hostUrl?: string; 
  public get hostUrl() {
    return this.getStringAttribute('host_url');
  }
  public set hostUrl(value: string) {
    this._hostUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUrlInput() {
    return this._hostUrl;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawler_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationList",
    },
    source_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfigurationList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationCrawlerConfiguration[] | cdktf.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfigurationList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationSourceConfiguration[] | cdktf.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#object_type BedrockagentDataSource#object_type}
  */
  readonly objectType: string;
}

export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionFilters),
    object_type: cdktf.stringToTerraform(struct!.objectType),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._objectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._objectType = value.objectType;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter {
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#filters BedrockagentDataSource#filters}
  */
  readonly filters?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filters: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToTerraform, true)(struct!.filters),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filters: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filters.internalValue = value.filters;
    }
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
  */
  readonly type: string;
  /**
  * pattern_object_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#pattern_object_filter BedrockagentDataSource#pattern_object_filter}
  */
  readonly patternObjectFilter?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    pattern_object_filter: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToTerraform, true)(struct!.patternObjectFilter),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_object_filter: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterToHclTerraform, true)(struct!.patternObjectFilter),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._patternObjectFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternObjectFilter = this._patternObjectFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._patternObjectFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._patternObjectFilter.internalValue = value.patternObjectFilter;
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

  // pattern_object_filter - computed: false, optional: true, required: false
  private _patternObjectFilter = new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilterList(this, "pattern_object_filter", false);
  public get patternObjectFilter() {
    return this._patternObjectFilter;
  }
  public putPatternObjectFilter(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationPatternObjectFilter[] | cdktf.IResolvable) {
    this._patternObjectFilter.internalValue = value;
  }
  public resetPatternObjectFilter() {
    this._patternObjectFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternObjectFilterInput() {
    return this._patternObjectFilter.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration {
  /**
  * filter_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#filter_configuration BedrockagentDataSource#filter_configuration}
  */
  readonly filterConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToTerraform, true)(struct!.filterConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationToHclTerraform, true)(struct!.filterConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterConfiguration = this._filterConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterConfiguration.internalValue = value.filterConfiguration;
    }
  }

  // filter_configuration - computed: false, optional: true, required: false
  private _filterConfiguration = new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfigurationList(this, "filter_configuration", false);
  public get filterConfiguration() {
    return this._filterConfiguration;
  }
  public putFilterConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationFilterConfiguration[] | cdktf.IResolvable) {
    this._filterConfiguration.internalValue = value;
  }
  public resetFilterConfiguration() {
    this._filterConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterConfigurationInput() {
    return this._filterConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#auth_type BedrockagentDataSource#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#credentials_secret_arn BedrockagentDataSource#credentials_secret_arn}
  */
  readonly credentialsSecretArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#domain BedrockagentDataSource#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#host_type BedrockagentDataSource#host_type}
  */
  readonly hostType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#site_urls BedrockagentDataSource#site_urls}
  */
  readonly siteUrls: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#tenant_id BedrockagentDataSource#tenant_id}
  */
  readonly tenantId?: string;
}

export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    credentials_secret_arn: cdktf.stringToTerraform(struct!.credentialsSecretArn),
    domain: cdktf.stringToTerraform(struct!.domain),
    host_type: cdktf.stringToTerraform(struct!.hostType),
    site_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteUrls),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_type: {
      value: cdktf.stringToHclTerraform(struct!.hostType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._credentialsSecretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretArn = this._credentialsSecretArn;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._hostType !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostType = this._hostType;
    }
    if (this._siteUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteUrls = this._siteUrls;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._credentialsSecretArn = undefined;
      this._domain = undefined;
      this._hostType = undefined;
      this._siteUrls = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._credentialsSecretArn = value.credentialsSecretArn;
      this._domain = value.domain;
      this._hostType = value.hostType;
      this._siteUrls = value.siteUrls;
      this._tenantId = value.tenantId;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credentials_secret_arn - computed: false, optional: false, required: true
  private _credentialsSecretArn?: string; 
  public get credentialsSecretArn() {
    return this.getStringAttribute('credentials_secret_arn');
  }
  public set credentialsSecretArn(value: string) {
    this._credentialsSecretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretArnInput() {
    return this._credentialsSecretArn;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // host_type - computed: false, optional: false, required: true
  private _hostType?: string; 
  public get hostType() {
    return this.getStringAttribute('host_type');
  }
  public set hostType(value: string) {
    this._hostType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTypeInput() {
    return this._hostType;
  }

  // site_urls - computed: false, optional: false, required: true
  private _siteUrls?: string[]; 
  public get siteUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('site_urls'));
  }
  public set siteUrls(value: string[]) {
    this._siteUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteUrlsInput() {
    return this._siteUrls;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawler_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationList",
    },
    source_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfigurationList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationCrawlerConfiguration[] | cdktf.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfigurationList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationSourceConfiguration[] | cdktf.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#max_pages BedrockagentDataSource#max_pages}
  */
  readonly maxPages?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#rate_limit BedrockagentDataSource#rate_limit}
  */
  readonly rateLimit?: number;
}

export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pages: cdktf.numberToTerraform(struct!.maxPages),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pages: {
      value: cdktf.numberToHclTerraform(struct!.maxPages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPages = this._maxPages;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPages = undefined;
      this._rateLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPages = value.maxPages;
      this._rateLimit = value.rateLimit;
    }
  }

  // max_pages - computed: false, optional: true, required: false
  private _maxPages?: number; 
  public get maxPages() {
    return this.getNumberAttribute('max_pages');
  }
  public set maxPages(value: number) {
    this._maxPages = value;
  }
  public resetMaxPages() {
    this._maxPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPagesInput() {
    return this._maxPages;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#exclusion_filters BedrockagentDataSource#exclusion_filters}
  */
  readonly exclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#inclusion_filters BedrockagentDataSource#inclusion_filters}
  */
  readonly inclusionFilters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#scope BedrockagentDataSource#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#user_agent BedrockagentDataSource#user_agent}
  */
  readonly userAgent?: string;
  /**
  * crawler_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#crawler_limits BedrockagentDataSource#crawler_limits}
  */
  readonly crawlerLimits?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusionFilters),
    inclusion_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.inclusionFilters),
    scope: cdktf.stringToTerraform(struct!.scope),
    user_agent: cdktf.stringToTerraform(struct!.userAgent),
    crawler_limits: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToTerraform, true)(struct!.crawlerLimits),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    inclusion_filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.inclusionFilters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_agent: {
      value: cdktf.stringToHclTerraform(struct!.userAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    crawler_limits: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsToHclTerraform, true)(struct!.crawlerLimits),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionFilters = this._exclusionFilters;
    }
    if (this._inclusionFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionFilters = this._inclusionFilters;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._userAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgent = this._userAgent;
    }
    if (this._crawlerLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerLimits = this._crawlerLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionFilters = undefined;
      this._inclusionFilters = undefined;
      this._scope = undefined;
      this._userAgent = undefined;
      this._crawlerLimits.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionFilters = value.exclusionFilters;
      this._inclusionFilters = value.inclusionFilters;
      this._scope = value.scope;
      this._userAgent = value.userAgent;
      this._crawlerLimits.internalValue = value.crawlerLimits;
    }
  }

  // exclusion_filters - computed: false, optional: true, required: false
  private _exclusionFilters?: string[]; 
  public get exclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusion_filters'));
  }
  public set exclusionFilters(value: string[]) {
    this._exclusionFilters = value;
  }
  public resetExclusionFilters() {
    this._exclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionFiltersInput() {
    return this._exclusionFilters;
  }

  // inclusion_filters - computed: false, optional: true, required: false
  private _inclusionFilters?: string[]; 
  public get inclusionFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('inclusion_filters'));
  }
  public set inclusionFilters(value: string[]) {
    this._inclusionFilters = value;
  }
  public resetInclusionFilters() {
    this._inclusionFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionFiltersInput() {
    return this._inclusionFilters;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this.getStringAttribute('user_agent');
  }
  public set userAgent(value: string) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
  }

  // crawler_limits - computed: false, optional: true, required: false
  private _crawlerLimits = new BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimitsList(this, "crawler_limits", false);
  public get crawlerLimits() {
    return this._crawlerLimits;
  }
  public putCrawlerLimits(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationCrawlerLimits[] | cdktf.IResolvable) {
    this._crawlerLimits.internalValue = value;
  }
  public resetCrawlerLimits() {
    this._crawlerLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerLimitsInput() {
    return this._crawlerLimits.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#url BedrockagentDataSource#url}
  */
  readonly url?: string;
}

export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._url = value.url;
    }
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
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration {
  /**
  * seed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#seed_urls BedrockagentDataSource#seed_urls}
  */
  readonly seedUrls?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seed_urls: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToTerraform, true)(struct!.seedUrls),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seed_urls: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsToHclTerraform, true)(struct!.seedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seedUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedUrls = this._seedUrls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seedUrls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seedUrls.internalValue = value.seedUrls;
    }
  }

  // seed_urls - computed: false, optional: true, required: false
  private _seedUrls = new BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrlsList(this, "seed_urls", false);
  public get seedUrls() {
    return this._seedUrls;
  }
  public putSeedUrls(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationSeedUrls[] | cdktf.IResolvable) {
    this._seedUrls.internalValue = value;
  }
  public resetSeedUrls() {
    this._seedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedUrlsInput() {
    return this._seedUrls.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration {
  /**
  * url_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#url_configuration BedrockagentDataSource#url_configuration}
  */
  readonly urlConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToTerraform, true)(struct!.urlConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationToHclTerraform, true)(struct!.urlConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlConfiguration = this._urlConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._urlConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._urlConfiguration.internalValue = value.urlConfiguration;
    }
  }

  // url_configuration - computed: false, optional: true, required: false
  private _urlConfiguration = new BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfigurationList(this, "url_configuration", false);
  public get urlConfiguration() {
    return this._urlConfiguration;
  }
  public putUrlConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationUrlConfiguration[] | cdktf.IResolvable) {
    this._urlConfiguration.internalValue = value;
  }
  public resetUrlConfiguration() {
    this._urlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlConfigurationInput() {
    return this._urlConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfigurationWebConfiguration {
  /**
  * crawler_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#crawler_configuration BedrockagentDataSource#crawler_configuration}
  */
  readonly crawlerConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration[] | cdktf.IResolvable;
  /**
  * source_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#source_configuration BedrockagentDataSource#source_configuration}
  */
  readonly sourceConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crawler_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToTerraform, true)(struct!.crawlerConfiguration),
    source_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToTerraform, true)(struct!.sourceConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationWebConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crawler_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationToHclTerraform, true)(struct!.crawlerConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationList",
    },
    source_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationToHclTerraform, true)(struct!.sourceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crawlerConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crawlerConfiguration = this._crawlerConfiguration?.internalValue;
    }
    if (this._sourceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConfiguration = this._sourceConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfigurationWebConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = undefined;
      this._sourceConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._crawlerConfiguration.internalValue = value.crawlerConfiguration;
      this._sourceConfiguration.internalValue = value.sourceConfiguration;
    }
  }

  // crawler_configuration - computed: false, optional: true, required: false
  private _crawlerConfiguration = new BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfigurationList(this, "crawler_configuration", false);
  public get crawlerConfiguration() {
    return this._crawlerConfiguration;
  }
  public putCrawlerConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationCrawlerConfiguration[] | cdktf.IResolvable) {
    this._crawlerConfiguration.internalValue = value;
  }
  public resetCrawlerConfiguration() {
    this._crawlerConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerConfigurationInput() {
    return this._crawlerConfiguration.internalValue;
  }

  // source_configuration - computed: false, optional: true, required: false
  private _sourceConfiguration = new BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfigurationList(this, "source_configuration", false);
  public get sourceConfiguration() {
    return this._sourceConfiguration;
  }
  public putSourceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfigurationSourceConfiguration[] | cdktf.IResolvable) {
    this._sourceConfiguration.internalValue = value;
  }
  public resetSourceConfiguration() {
    this._sourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigurationInput() {
    return this._sourceConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationWebConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfigurationWebConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationWebConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationWebConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceDataSourceConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#type BedrockagentDataSource#type}
  */
  readonly type: string;
  /**
  * confluence_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#confluence_configuration BedrockagentDataSource#confluence_configuration}
  */
  readonly confluenceConfiguration?: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration[] | cdktf.IResolvable;
  /**
  * s3_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#s3_configuration BedrockagentDataSource#s3_configuration}
  */
  readonly s3Configuration?: BedrockagentDataSourceDataSourceConfigurationS3Configuration[] | cdktf.IResolvable;
  /**
  * salesforce_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#salesforce_configuration BedrockagentDataSource#salesforce_configuration}
  */
  readonly salesforceConfiguration?: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration[] | cdktf.IResolvable;
  /**
  * share_point_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#share_point_configuration BedrockagentDataSource#share_point_configuration}
  */
  readonly sharePointConfiguration?: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration[] | cdktf.IResolvable;
  /**
  * web_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#web_configuration BedrockagentDataSource#web_configuration}
  */
  readonly webConfiguration?: BedrockagentDataSourceDataSourceConfigurationWebConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceDataSourceConfigurationToTerraform(struct?: BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    confluence_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationToTerraform, true)(struct!.confluenceConfiguration),
    s3_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationS3ConfigurationToTerraform, true)(struct!.s3Configuration),
    salesforce_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationToTerraform, true)(struct!.salesforceConfiguration),
    share_point_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationToTerraform, true)(struct!.sharePointConfiguration),
    web_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationWebConfigurationToTerraform, true)(struct!.webConfiguration),
  }
}


export function bedrockagentDataSourceDataSourceConfigurationToHclTerraform(struct?: BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confluence_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationToHclTerraform, true)(struct!.confluenceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationList",
    },
    s3_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationS3ConfigurationToHclTerraform, true)(struct!.s3Configuration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList",
    },
    salesforce_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationToHclTerraform, true)(struct!.salesforceConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationList",
    },
    share_point_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationSharePointConfigurationToHclTerraform, true)(struct!.sharePointConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationList",
    },
    web_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationWebConfigurationToHclTerraform, true)(struct!.webConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceDataSourceConfigurationWebConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceDataSourceConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._confluenceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluenceConfiguration = this._confluenceConfiguration?.internalValue;
    }
    if (this._s3Configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Configuration = this._s3Configuration?.internalValue;
    }
    if (this._salesforceConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.salesforceConfiguration = this._salesforceConfiguration?.internalValue;
    }
    if (this._sharePointConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharePointConfiguration = this._sharePointConfiguration?.internalValue;
    }
    if (this._webConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webConfiguration = this._webConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceDataSourceConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._confluenceConfiguration.internalValue = undefined;
      this._s3Configuration.internalValue = undefined;
      this._salesforceConfiguration.internalValue = undefined;
      this._sharePointConfiguration.internalValue = undefined;
      this._webConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._confluenceConfiguration.internalValue = value.confluenceConfiguration;
      this._s3Configuration.internalValue = value.s3Configuration;
      this._salesforceConfiguration.internalValue = value.salesforceConfiguration;
      this._sharePointConfiguration.internalValue = value.sharePointConfiguration;
      this._webConfiguration.internalValue = value.webConfiguration;
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

  // confluence_configuration - computed: false, optional: true, required: false
  private _confluenceConfiguration = new BedrockagentDataSourceDataSourceConfigurationConfluenceConfigurationList(this, "confluence_configuration", false);
  public get confluenceConfiguration() {
    return this._confluenceConfiguration;
  }
  public putConfluenceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationConfluenceConfiguration[] | cdktf.IResolvable) {
    this._confluenceConfiguration.internalValue = value;
  }
  public resetConfluenceConfiguration() {
    this._confluenceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluenceConfigurationInput() {
    return this._confluenceConfiguration.internalValue;
  }

  // s3_configuration - computed: false, optional: true, required: false
  private _s3Configuration = new BedrockagentDataSourceDataSourceConfigurationS3ConfigurationList(this, "s3_configuration", false);
  public get s3Configuration() {
    return this._s3Configuration;
  }
  public putS3Configuration(value: BedrockagentDataSourceDataSourceConfigurationS3Configuration[] | cdktf.IResolvable) {
    this._s3Configuration.internalValue = value;
  }
  public resetS3Configuration() {
    this._s3Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ConfigurationInput() {
    return this._s3Configuration.internalValue;
  }

  // salesforce_configuration - computed: false, optional: true, required: false
  private _salesforceConfiguration = new BedrockagentDataSourceDataSourceConfigurationSalesforceConfigurationList(this, "salesforce_configuration", false);
  public get salesforceConfiguration() {
    return this._salesforceConfiguration;
  }
  public putSalesforceConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSalesforceConfiguration[] | cdktf.IResolvable) {
    this._salesforceConfiguration.internalValue = value;
  }
  public resetSalesforceConfiguration() {
    this._salesforceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get salesforceConfigurationInput() {
    return this._salesforceConfiguration.internalValue;
  }

  // share_point_configuration - computed: false, optional: true, required: false
  private _sharePointConfiguration = new BedrockagentDataSourceDataSourceConfigurationSharePointConfigurationList(this, "share_point_configuration", false);
  public get sharePointConfiguration() {
    return this._sharePointConfiguration;
  }
  public putSharePointConfiguration(value: BedrockagentDataSourceDataSourceConfigurationSharePointConfiguration[] | cdktf.IResolvable) {
    this._sharePointConfiguration.internalValue = value;
  }
  public resetSharePointConfiguration() {
    this._sharePointConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharePointConfigurationInput() {
    return this._sharePointConfiguration.internalValue;
  }

  // web_configuration - computed: false, optional: true, required: false
  private _webConfiguration = new BedrockagentDataSourceDataSourceConfigurationWebConfigurationList(this, "web_configuration", false);
  public get webConfiguration() {
    return this._webConfiguration;
  }
  public putWebConfiguration(value: BedrockagentDataSourceDataSourceConfigurationWebConfiguration[] | cdktf.IResolvable) {
    this._webConfiguration.internalValue = value;
  }
  public resetWebConfiguration() {
    this._webConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webConfigurationInput() {
    return this._webConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceDataSourceConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceDataSourceConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceDataSourceConfigurationOutputReference {
    return new BedrockagentDataSourceDataSourceConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceServerSideEncryptionConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#kms_key_arn BedrockagentDataSource#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
}

export function bedrockagentDataSourceServerSideEncryptionConfigurationToTerraform(struct?: BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}


export function bedrockagentDataSourceServerSideEncryptionConfigurationToHclTerraform(struct?: BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceServerSideEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kmsKeyArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}

export class BedrockagentDataSourceServerSideEncryptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceServerSideEncryptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference {
    return new BedrockagentDataSourceServerSideEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#create BedrockagentDataSource#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#delete BedrockagentDataSource#delete}
  */
  readonly delete?: string;
}

export function bedrockagentDataSourceTimeoutsToTerraform(struct?: BedrockagentDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function bedrockagentDataSourceTimeoutsToHclTerraform(struct?: BedrockagentDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BedrockagentDataSourceTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#max_tokens BedrockagentDataSource#max_tokens}
  */
  readonly maxTokens: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#overlap_percentage BedrockagentDataSource#overlap_percentage}
  */
  readonly overlapPercentage: number;
}

export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_tokens: cdktf.numberToTerraform(struct!.maxTokens),
    overlap_percentage: cdktf.numberToTerraform(struct!.overlapPercentage),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_tokens: {
      value: cdktf.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    overlap_percentage: {
      value: cdktf.numberToHclTerraform(struct!.overlapPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    if (this._overlapPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapPercentage = this._overlapPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
      this._overlapPercentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
      this._overlapPercentage = value.overlapPercentage;
    }
  }

  // max_tokens - computed: false, optional: false, required: true
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }

  // overlap_percentage - computed: false, optional: false, required: true
  private _overlapPercentage?: number; 
  public get overlapPercentage() {
    return this.getNumberAttribute('overlap_percentage');
  }
  public set overlapPercentage(value: number) {
    this._overlapPercentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapPercentageInput() {
    return this._overlapPercentage;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#max_tokens BedrockagentDataSource#max_tokens}
  */
  readonly maxTokens: number;
}

export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_tokens: cdktf.numberToTerraform(struct!.maxTokens),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_tokens: {
      value: cdktf.numberToHclTerraform(struct!.maxTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTokens = this._maxTokens;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxTokens = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxTokens = value.maxTokens;
    }
  }

  // max_tokens - computed: false, optional: false, required: true
  private _maxTokens?: number; 
  public get maxTokens() {
    return this.getNumberAttribute('max_tokens');
  }
  public set maxTokens(value: number) {
    this._maxTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokensInput() {
    return this._maxTokens;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#overlap_tokens BedrockagentDataSource#overlap_tokens}
  */
  readonly overlapTokens: number;
  /**
  * level_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#level_configuration BedrockagentDataSource#level_configuration}
  */
  readonly levelConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overlap_tokens: cdktf.numberToTerraform(struct!.overlapTokens),
    level_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationToTerraform, true)(struct!.levelConfiguration),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overlap_tokens: {
      value: cdktf.numberToHclTerraform(struct!.overlapTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    level_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationToHclTerraform, true)(struct!.levelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overlapTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlapTokens = this._overlapTokens;
    }
    if (this._levelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelConfiguration = this._levelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._overlapTokens = undefined;
      this._levelConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._overlapTokens = value.overlapTokens;
      this._levelConfiguration.internalValue = value.levelConfiguration;
    }
  }

  // overlap_tokens - computed: false, optional: false, required: true
  private _overlapTokens?: number; 
  public get overlapTokens() {
    return this.getNumberAttribute('overlap_tokens');
  }
  public set overlapTokens(value: number) {
    this._overlapTokens = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapTokensInput() {
    return this._overlapTokens;
  }

  // level_configuration - computed: false, optional: true, required: false
  private _levelConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfigurationList(this, "level_configuration", false);
  public get levelConfiguration() {
    return this._levelConfiguration;
  }
  public putLevelConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationLevelConfiguration[] | cdktf.IResolvable) {
    this._levelConfiguration.internalValue = value;
  }
  public resetLevelConfiguration() {
    this._levelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelConfigurationInput() {
    return this._levelConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#breakpoint_percentile_threshold BedrockagentDataSource#breakpoint_percentile_threshold}
  */
  readonly breakpointPercentileThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#buffer_size BedrockagentDataSource#buffer_size}
  */
  readonly bufferSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#max_token BedrockagentDataSource#max_token}
  */
  readonly maxToken: number;
}

export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breakpoint_percentile_threshold: cdktf.numberToTerraform(struct!.breakpointPercentileThreshold),
    buffer_size: cdktf.numberToTerraform(struct!.bufferSize),
    max_token: cdktf.numberToTerraform(struct!.maxToken),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breakpoint_percentile_threshold: {
      value: cdktf.numberToHclTerraform(struct!.breakpointPercentileThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_token: {
      value: cdktf.numberToHclTerraform(struct!.maxToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakpointPercentileThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakpointPercentileThreshold = this._breakpointPercentileThreshold;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._maxToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxToken = this._maxToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._breakpointPercentileThreshold = undefined;
      this._bufferSize = undefined;
      this._maxToken = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._breakpointPercentileThreshold = value.breakpointPercentileThreshold;
      this._bufferSize = value.bufferSize;
      this._maxToken = value.maxToken;
    }
  }

  // breakpoint_percentile_threshold - computed: false, optional: false, required: true
  private _breakpointPercentileThreshold?: number; 
  public get breakpointPercentileThreshold() {
    return this.getNumberAttribute('breakpoint_percentile_threshold');
  }
  public set breakpointPercentileThreshold(value: number) {
    this._breakpointPercentileThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get breakpointPercentileThresholdInput() {
    return this._breakpointPercentileThreshold;
  }

  // buffer_size - computed: false, optional: false, required: true
  private _bufferSize?: number; 
  public get bufferSize() {
    return this.getNumberAttribute('buffer_size');
  }
  public set bufferSize(value: number) {
    this._bufferSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // max_token - computed: false, optional: false, required: true
  private _maxToken?: number; 
  public get maxToken() {
    return this.getNumberAttribute('max_token');
  }
  public set maxToken(value: number) {
    this._maxToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenInput() {
    return this._maxToken;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#chunking_strategy BedrockagentDataSource#chunking_strategy}
  */
  readonly chunkingStrategy: string;
  /**
  * fixed_size_chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#fixed_size_chunking_configuration BedrockagentDataSource#fixed_size_chunking_configuration}
  */
  readonly fixedSizeChunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration[] | cdktf.IResolvable;
  /**
  * hierarchical_chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#hierarchical_chunking_configuration BedrockagentDataSource#hierarchical_chunking_configuration}
  */
  readonly hierarchicalChunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration[] | cdktf.IResolvable;
  /**
  * semantic_chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#semantic_chunking_configuration BedrockagentDataSource#semantic_chunking_configuration}
  */
  readonly semanticChunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunking_strategy: cdktf.stringToTerraform(struct!.chunkingStrategy),
    fixed_size_chunking_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToTerraform, true)(struct!.fixedSizeChunkingConfiguration),
    hierarchical_chunking_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToTerraform, true)(struct!.hierarchicalChunkingConfiguration),
    semantic_chunking_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToTerraform, true)(struct!.semanticChunkingConfiguration),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunking_strategy: {
      value: cdktf.stringToHclTerraform(struct!.chunkingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fixed_size_chunking_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationToHclTerraform, true)(struct!.fixedSizeChunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList",
    },
    hierarchical_chunking_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationToHclTerraform, true)(struct!.hierarchicalChunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationList",
    },
    semantic_chunking_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationToHclTerraform, true)(struct!.semanticChunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingStrategy = this._chunkingStrategy;
    }
    if (this._fixedSizeChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedSizeChunkingConfiguration = this._fixedSizeChunkingConfiguration?.internalValue;
    }
    if (this._hierarchicalChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchicalChunkingConfiguration = this._hierarchicalChunkingConfiguration?.internalValue;
    }
    if (this._semanticChunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticChunkingConfiguration = this._semanticChunkingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkingStrategy = undefined;
      this._fixedSizeChunkingConfiguration.internalValue = undefined;
      this._hierarchicalChunkingConfiguration.internalValue = undefined;
      this._semanticChunkingConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkingStrategy = value.chunkingStrategy;
      this._fixedSizeChunkingConfiguration.internalValue = value.fixedSizeChunkingConfiguration;
      this._hierarchicalChunkingConfiguration.internalValue = value.hierarchicalChunkingConfiguration;
      this._semanticChunkingConfiguration.internalValue = value.semanticChunkingConfiguration;
    }
  }

  // chunking_strategy - computed: false, optional: false, required: true
  private _chunkingStrategy?: string; 
  public get chunkingStrategy() {
    return this.getStringAttribute('chunking_strategy');
  }
  public set chunkingStrategy(value: string) {
    this._chunkingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingStrategyInput() {
    return this._chunkingStrategy;
  }

  // fixed_size_chunking_configuration - computed: false, optional: true, required: false
  private _fixedSizeChunkingConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfigurationList(this, "fixed_size_chunking_configuration", false);
  public get fixedSizeChunkingConfiguration() {
    return this._fixedSizeChunkingConfiguration;
  }
  public putFixedSizeChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationFixedSizeChunkingConfiguration[] | cdktf.IResolvable) {
    this._fixedSizeChunkingConfiguration.internalValue = value;
  }
  public resetFixedSizeChunkingConfiguration() {
    this._fixedSizeChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedSizeChunkingConfigurationInput() {
    return this._fixedSizeChunkingConfiguration.internalValue;
  }

  // hierarchical_chunking_configuration - computed: false, optional: true, required: false
  private _hierarchicalChunkingConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfigurationList(this, "hierarchical_chunking_configuration", false);
  public get hierarchicalChunkingConfiguration() {
    return this._hierarchicalChunkingConfiguration;
  }
  public putHierarchicalChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationHierarchicalChunkingConfiguration[] | cdktf.IResolvable) {
    this._hierarchicalChunkingConfiguration.internalValue = value;
  }
  public resetHierarchicalChunkingConfiguration() {
    this._hierarchicalChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchicalChunkingConfigurationInput() {
    return this._hierarchicalChunkingConfiguration.internalValue;
  }

  // semantic_chunking_configuration - computed: false, optional: true, required: false
  private _semanticChunkingConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfigurationList(this, "semantic_chunking_configuration", false);
  public get semanticChunkingConfiguration() {
    return this._semanticChunkingConfiguration;
  }
  public putSemanticChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationSemanticChunkingConfiguration[] | cdktf.IResolvable) {
    this._semanticChunkingConfiguration.internalValue = value;
  }
  public resetSemanticChunkingConfiguration() {
    this._semanticChunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticChunkingConfigurationInput() {
    return this._semanticChunkingConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#uri BedrockagentDataSource#uri}
  */
  readonly uri: string;
}

export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage {
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#s3_location BedrockagentDataSource#s3_location}
  */
  readonly s3Location?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    s3_location: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToTerraform, true)(struct!.s3Location),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    s3_location: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationToHclTerraform, true)(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // s3_location - computed: false, optional: true, required: false
  private _s3Location = new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3LocationList(this, "s3_location", false);
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageS3Location[] | cdktf.IResolvable) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#lambda_arn BedrockagentDataSource#lambda_arn}
  */
  readonly lambdaArn: string;
}

export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lambda_arn: cdktf.stringToTerraform(struct!.lambdaArn),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lambda_arn: {
      value: cdktf.stringToHclTerraform(struct!.lambdaArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lambdaArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaArn = this._lambdaArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lambdaArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lambdaArn = value.lambdaArn;
    }
  }

  // lambda_arn - computed: false, optional: false, required: true
  private _lambdaArn?: string; 
  public get lambdaArn() {
    return this.getStringAttribute('lambda_arn');
  }
  public set lambdaArn(value: string) {
    this._lambdaArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaArnInput() {
    return this._lambdaArn;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction {
  /**
  * transformation_lambda_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#transformation_lambda_configuration BedrockagentDataSource#transformation_lambda_configuration}
  */
  readonly transformationLambdaConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation_lambda_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationToTerraform, true)(struct!.transformationLambdaConfiguration),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation_lambda_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationToHclTerraform, true)(struct!.transformationLambdaConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformationLambdaConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationLambdaConfiguration = this._transformationLambdaConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transformationLambdaConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transformationLambdaConfiguration.internalValue = value.transformationLambdaConfiguration;
    }
  }

  // transformation_lambda_configuration - computed: false, optional: true, required: false
  private _transformationLambdaConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfigurationList(this, "transformation_lambda_configuration", false);
  public get transformationLambdaConfiguration() {
    return this._transformationLambdaConfiguration;
  }
  public putTransformationLambdaConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionTransformationLambdaConfiguration[] | cdktf.IResolvable) {
    this._transformationLambdaConfiguration.internalValue = value;
  }
  public resetTransformationLambdaConfiguration() {
    this._transformationLambdaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationLambdaConfigurationInput() {
    return this._transformationLambdaConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#step_to_apply BedrockagentDataSource#step_to_apply}
  */
  readonly stepToApply: string;
  /**
  * transformation_function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#transformation_function BedrockagentDataSource#transformation_function}
  */
  readonly transformationFunction?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    step_to_apply: cdktf.stringToTerraform(struct!.stepToApply),
    transformation_function: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionToTerraform, true)(struct!.transformationFunction),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    step_to_apply: {
      value: cdktf.stringToHclTerraform(struct!.stepToApply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transformation_function: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionToHclTerraform, true)(struct!.transformationFunction),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stepToApply !== undefined) {
      hasAnyValues = true;
      internalValueResult.stepToApply = this._stepToApply;
    }
    if (this._transformationFunction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationFunction = this._transformationFunction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stepToApply = undefined;
      this._transformationFunction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stepToApply = value.stepToApply;
      this._transformationFunction.internalValue = value.transformationFunction;
    }
  }

  // step_to_apply - computed: false, optional: false, required: true
  private _stepToApply?: string; 
  public get stepToApply() {
    return this.getStringAttribute('step_to_apply');
  }
  public set stepToApply(value: string) {
    this._stepToApply = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepToApplyInput() {
    return this._stepToApply;
  }

  // transformation_function - computed: false, optional: true, required: false
  private _transformationFunction = new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunctionList(this, "transformation_function", false);
  public get transformationFunction() {
    return this._transformationFunction;
  }
  public putTransformationFunction(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationTransformationFunction[] | cdktf.IResolvable) {
    this._transformationFunction.internalValue = value;
  }
  public resetTransformationFunction() {
    this._transformationFunction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationFunctionInput() {
    return this._transformationFunction.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration {
  /**
  * intermediate_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#intermediate_storage BedrockagentDataSource#intermediate_storage}
  */
  readonly intermediateStorage?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage[] | cdktf.IResolvable;
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#transformation BedrockagentDataSource#transformation}
  */
  readonly transformation?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intermediate_storage: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToTerraform, true)(struct!.intermediateStorage),
    transformation: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationToTerraform, true)(struct!.transformation),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intermediate_storage: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageToHclTerraform, true)(struct!.intermediateStorage),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageList",
    },
    transformation: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationToHclTerraform, true)(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateStorage = this._intermediateStorage?.internalValue;
    }
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._intermediateStorage.internalValue = undefined;
      this._transformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._intermediateStorage.internalValue = value.intermediateStorage;
      this._transformation.internalValue = value.transformation;
    }
  }

  // intermediate_storage - computed: false, optional: true, required: false
  private _intermediateStorage = new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorageList(this, "intermediate_storage", false);
  public get intermediateStorage() {
    return this._intermediateStorage;
  }
  public putIntermediateStorage(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationIntermediateStorage[] | cdktf.IResolvable) {
    this._intermediateStorage.internalValue = value;
  }
  public resetIntermediateStorage() {
    this._intermediateStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateStorageInput() {
    return this._intermediateStorage.internalValue;
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformationList(this, "transformation", false);
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationTransformation[] | cdktf.IResolvable) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#parsing_prompt_string BedrockagentDataSource#parsing_prompt_string}
  */
  readonly parsingPromptString: string;
}

export function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parsing_prompt_string: cdktf.stringToTerraform(struct!.parsingPromptString),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parsing_prompt_string: {
      value: cdktf.stringToHclTerraform(struct!.parsingPromptString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parsingPromptString !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingPromptString = this._parsingPromptString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parsingPromptString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parsingPromptString = value.parsingPromptString;
    }
  }

  // parsing_prompt_string - computed: false, optional: false, required: true
  private _parsingPromptString?: string; 
  public get parsingPromptString() {
    return this.getStringAttribute('parsing_prompt_string');
  }
  public set parsingPromptString(value: string) {
    this._parsingPromptString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingPromptStringInput() {
    return this._parsingPromptString;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#model_arn BedrockagentDataSource#model_arn}
  */
  readonly modelArn: string;
  /**
  * parsing_prompt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#parsing_prompt BedrockagentDataSource#parsing_prompt}
  */
  readonly parsingPrompt?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model_arn: cdktf.stringToTerraform(struct!.modelArn),
    parsing_prompt: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToTerraform, true)(struct!.parsingPrompt),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model_arn: {
      value: cdktf.stringToHclTerraform(struct!.modelArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parsing_prompt: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptToHclTerraform, true)(struct!.parsingPrompt),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modelArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArn = this._modelArn;
    }
    if (this._parsingPrompt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingPrompt = this._parsingPrompt?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._modelArn = undefined;
      this._parsingPrompt.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._modelArn = value.modelArn;
      this._parsingPrompt.internalValue = value.parsingPrompt;
    }
  }

  // model_arn - computed: false, optional: false, required: true
  private _modelArn?: string; 
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }
  public set modelArn(value: string) {
    this._modelArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArnInput() {
    return this._modelArn;
  }

  // parsing_prompt - computed: false, optional: true, required: false
  private _parsingPrompt = new BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPromptList(this, "parsing_prompt", false);
  public get parsingPrompt() {
    return this._parsingPrompt;
  }
  public putParsingPrompt(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationParsingPrompt[] | cdktf.IResolvable) {
    this._parsingPrompt.internalValue = value;
  }
  public resetParsingPrompt() {
    this._parsingPrompt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingPromptInput() {
    return this._parsingPrompt.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#parsing_strategy BedrockagentDataSource#parsing_strategy}
  */
  readonly parsingStrategy: string;
  /**
  * bedrock_foundation_model_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#bedrock_foundation_model_configuration BedrockagentDataSource#bedrock_foundation_model_configuration}
  */
  readonly bedrockFoundationModelConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parsing_strategy: cdktf.stringToTerraform(struct!.parsingStrategy),
    bedrock_foundation_model_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToTerraform, true)(struct!.bedrockFoundationModelConfiguration),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parsing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.parsingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bedrock_foundation_model_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationToHclTerraform, true)(struct!.bedrockFoundationModelConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parsingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingStrategy = this._parsingStrategy;
    }
    if (this._bedrockFoundationModelConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bedrockFoundationModelConfiguration = this._bedrockFoundationModelConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parsingStrategy = undefined;
      this._bedrockFoundationModelConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parsingStrategy = value.parsingStrategy;
      this._bedrockFoundationModelConfiguration.internalValue = value.bedrockFoundationModelConfiguration;
    }
  }

  // parsing_strategy - computed: false, optional: false, required: true
  private _parsingStrategy?: string; 
  public get parsingStrategy() {
    return this.getStringAttribute('parsing_strategy');
  }
  public set parsingStrategy(value: string) {
    this._parsingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingStrategyInput() {
    return this._parsingStrategy;
  }

  // bedrock_foundation_model_configuration - computed: false, optional: true, required: false
  private _bedrockFoundationModelConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfigurationList(this, "bedrock_foundation_model_configuration", false);
  public get bedrockFoundationModelConfiguration() {
    return this._bedrockFoundationModelConfiguration;
  }
  public putBedrockFoundationModelConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationBedrockFoundationModelConfiguration[] | cdktf.IResolvable) {
    this._bedrockFoundationModelConfiguration.internalValue = value;
  }
  public resetBedrockFoundationModelConfiguration() {
    this._bedrockFoundationModelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bedrockFoundationModelConfigurationInput() {
    return this._bedrockFoundationModelConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BedrockagentDataSourceVectorIngestionConfiguration {
  /**
  * chunking_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#chunking_configuration BedrockagentDataSource#chunking_configuration}
  */
  readonly chunkingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration[] | cdktf.IResolvable;
  /**
  * custom_transformation_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#custom_transformation_configuration BedrockagentDataSource#custom_transformation_configuration}
  */
  readonly customTransformationConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration[] | cdktf.IResolvable;
  /**
  * parsing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#parsing_configuration BedrockagentDataSource#parsing_configuration}
  */
  readonly parsingConfiguration?: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration[] | cdktf.IResolvable;
}

export function bedrockagentDataSourceVectorIngestionConfigurationToTerraform(struct?: BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chunking_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationToTerraform, true)(struct!.chunkingConfiguration),
    custom_transformation_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToTerraform, true)(struct!.customTransformationConfiguration),
    parsing_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationToTerraform, true)(struct!.parsingConfiguration),
  }
}


export function bedrockagentDataSourceVectorIngestionConfigurationToHclTerraform(struct?: BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chunking_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationToHclTerraform, true)(struct!.chunkingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList",
    },
    custom_transformation_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationToHclTerraform, true)(struct!.customTransformationConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationList",
    },
    parsing_configuration: {
      value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationToHclTerraform, true)(struct!.parsingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BedrockagentDataSourceVectorIngestionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chunkingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkingConfiguration = this._chunkingConfiguration?.internalValue;
    }
    if (this._customTransformationConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTransformationConfiguration = this._customTransformationConfiguration?.internalValue;
    }
    if (this._parsingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsingConfiguration = this._parsingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BedrockagentDataSourceVectorIngestionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chunkingConfiguration.internalValue = undefined;
      this._customTransformationConfiguration.internalValue = undefined;
      this._parsingConfiguration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chunkingConfiguration.internalValue = value.chunkingConfiguration;
      this._customTransformationConfiguration.internalValue = value.customTransformationConfiguration;
      this._parsingConfiguration.internalValue = value.parsingConfiguration;
    }
  }

  // chunking_configuration - computed: false, optional: true, required: false
  private _chunkingConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationChunkingConfigurationList(this, "chunking_configuration", false);
  public get chunkingConfiguration() {
    return this._chunkingConfiguration;
  }
  public putChunkingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationChunkingConfiguration[] | cdktf.IResolvable) {
    this._chunkingConfiguration.internalValue = value;
  }
  public resetChunkingConfiguration() {
    this._chunkingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkingConfigurationInput() {
    return this._chunkingConfiguration.internalValue;
  }

  // custom_transformation_configuration - computed: false, optional: true, required: false
  private _customTransformationConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfigurationList(this, "custom_transformation_configuration", false);
  public get customTransformationConfiguration() {
    return this._customTransformationConfiguration;
  }
  public putCustomTransformationConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationCustomTransformationConfiguration[] | cdktf.IResolvable) {
    this._customTransformationConfiguration.internalValue = value;
  }
  public resetCustomTransformationConfiguration() {
    this._customTransformationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTransformationConfigurationInput() {
    return this._customTransformationConfiguration.internalValue;
  }

  // parsing_configuration - computed: false, optional: true, required: false
  private _parsingConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationParsingConfigurationList(this, "parsing_configuration", false);
  public get parsingConfiguration() {
    return this._parsingConfiguration;
  }
  public putParsingConfiguration(value: BedrockagentDataSourceVectorIngestionConfigurationParsingConfiguration[] | cdktf.IResolvable) {
    this._parsingConfiguration.internalValue = value;
  }
  public resetParsingConfiguration() {
    this._parsingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsingConfigurationInput() {
    return this._parsingConfiguration.internalValue;
  }
}

export class BedrockagentDataSourceVectorIngestionConfigurationList extends cdktf.ComplexList {
  public internalValue? : BedrockagentDataSourceVectorIngestionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): BedrockagentDataSourceVectorIngestionConfigurationOutputReference {
    return new BedrockagentDataSourceVectorIngestionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source aws_bedrockagent_data_source}
*/
export class BedrockagentDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrockagent_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BedrockagentDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BedrockagentDataSource to import
  * @param importFromId The id of the existing BedrockagentDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BedrockagentDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_bedrockagent_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.85.0/docs/resources/bedrockagent_data_source aws_bedrockagent_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BedrockagentDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: BedrockagentDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrockagent_data_source',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.85.0',
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
    this._dataDeletionPolicy = config.dataDeletionPolicy;
    this._description = config.description;
    this._knowledgeBaseId = config.knowledgeBaseId;
    this._name = config.name;
    this._dataSourceConfiguration.internalValue = config.dataSourceConfiguration;
    this._serverSideEncryptionConfiguration.internalValue = config.serverSideEncryptionConfiguration;
    this._timeouts.internalValue = config.timeouts;
    this._vectorIngestionConfiguration.internalValue = config.vectorIngestionConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_deletion_policy - computed: true, optional: true, required: false
  private _dataDeletionPolicy?: string; 
  public get dataDeletionPolicy() {
    return this.getStringAttribute('data_deletion_policy');
  }
  public set dataDeletionPolicy(value: string) {
    this._dataDeletionPolicy = value;
  }
  public resetDataDeletionPolicy() {
    this._dataDeletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDeletionPolicyInput() {
    return this._dataDeletionPolicy;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // knowledge_base_id - computed: false, optional: false, required: true
  private _knowledgeBaseId?: string; 
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }
  public set knowledgeBaseId(value: string) {
    this._knowledgeBaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get knowledgeBaseIdInput() {
    return this._knowledgeBaseId;
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

  // data_source_configuration - computed: false, optional: true, required: false
  private _dataSourceConfiguration = new BedrockagentDataSourceDataSourceConfigurationList(this, "data_source_configuration", false);
  public get dataSourceConfiguration() {
    return this._dataSourceConfiguration;
  }
  public putDataSourceConfiguration(value: BedrockagentDataSourceDataSourceConfiguration[] | cdktf.IResolvable) {
    this._dataSourceConfiguration.internalValue = value;
  }
  public resetDataSourceConfiguration() {
    this._dataSourceConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceConfigurationInput() {
    return this._dataSourceConfiguration.internalValue;
  }

  // server_side_encryption_configuration - computed: false, optional: true, required: false
  private _serverSideEncryptionConfiguration = new BedrockagentDataSourceServerSideEncryptionConfigurationList(this, "server_side_encryption_configuration", false);
  public get serverSideEncryptionConfiguration() {
    return this._serverSideEncryptionConfiguration;
  }
  public putServerSideEncryptionConfiguration(value: BedrockagentDataSourceServerSideEncryptionConfiguration[] | cdktf.IResolvable) {
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
  private _timeouts = new BedrockagentDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BedrockagentDataSourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vector_ingestion_configuration - computed: false, optional: true, required: false
  private _vectorIngestionConfiguration = new BedrockagentDataSourceVectorIngestionConfigurationList(this, "vector_ingestion_configuration", false);
  public get vectorIngestionConfiguration() {
    return this._vectorIngestionConfiguration;
  }
  public putVectorIngestionConfiguration(value: BedrockagentDataSourceVectorIngestionConfiguration[] | cdktf.IResolvable) {
    this._vectorIngestionConfiguration.internalValue = value;
  }
  public resetVectorIngestionConfiguration() {
    this._vectorIngestionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vectorIngestionConfigurationInput() {
    return this._vectorIngestionConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_deletion_policy: cdktf.stringToTerraform(this._dataDeletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      knowledge_base_id: cdktf.stringToTerraform(this._knowledgeBaseId),
      name: cdktf.stringToTerraform(this._name),
      data_source_configuration: cdktf.listMapper(bedrockagentDataSourceDataSourceConfigurationToTerraform, true)(this._dataSourceConfiguration.internalValue),
      server_side_encryption_configuration: cdktf.listMapper(bedrockagentDataSourceServerSideEncryptionConfigurationToTerraform, true)(this._serverSideEncryptionConfiguration.internalValue),
      timeouts: bedrockagentDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
      vector_ingestion_configuration: cdktf.listMapper(bedrockagentDataSourceVectorIngestionConfigurationToTerraform, true)(this._vectorIngestionConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_deletion_policy: {
        value: cdktf.stringToHclTerraform(this._dataDeletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      knowledge_base_id: {
        value: cdktf.stringToHclTerraform(this._knowledgeBaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_configuration: {
        value: cdktf.listMapperHcl(bedrockagentDataSourceDataSourceConfigurationToHclTerraform, true)(this._dataSourceConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentDataSourceDataSourceConfigurationList",
      },
      server_side_encryption_configuration: {
        value: cdktf.listMapperHcl(bedrockagentDataSourceServerSideEncryptionConfigurationToHclTerraform, true)(this._serverSideEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentDataSourceServerSideEncryptionConfigurationList",
      },
      timeouts: {
        value: bedrockagentDataSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BedrockagentDataSourceTimeouts",
      },
      vector_ingestion_configuration: {
        value: cdktf.listMapperHcl(bedrockagentDataSourceVectorIngestionConfigurationToHclTerraform, true)(this._vectorIngestionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BedrockagentDataSourceVectorIngestionConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
