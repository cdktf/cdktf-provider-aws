// https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudsearchDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#id CloudsearchDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#multi_az CloudsearchDomain#multi_az}
  */
  readonly multiAz?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}
  */
  readonly name: string;
  /**
  * endpoint_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#endpoint_options CloudsearchDomain#endpoint_options}
  */
  readonly endpointOptions?: CloudsearchDomainEndpointOptions;
  /**
  * index_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#index_field CloudsearchDomain#index_field}
  */
  readonly indexField?: CloudsearchDomainIndexField[] | cdktf.IResolvable;
  /**
  * scaling_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#scaling_parameters CloudsearchDomain#scaling_parameters}
  */
  readonly scalingParameters?: CloudsearchDomainScalingParameters;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#timeouts CloudsearchDomain#timeouts}
  */
  readonly timeouts?: CloudsearchDomainTimeouts;
}
export interface CloudsearchDomainEndpointOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#enforce_https CloudsearchDomain#enforce_https}
  */
  readonly enforceHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#tls_security_policy CloudsearchDomain#tls_security_policy}
  */
  readonly tlsSecurityPolicy?: string;
}

export function cloudsearchDomainEndpointOptionsToTerraform(struct?: CloudsearchDomainEndpointOptionsOutputReference | CloudsearchDomainEndpointOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce_https: cdktf.booleanToTerraform(struct!.enforceHttps),
    tls_security_policy: cdktf.stringToTerraform(struct!.tlsSecurityPolicy),
  }
}

export class CloudsearchDomainEndpointOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudsearchDomainEndpointOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforceHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceHttps = this._enforceHttps;
    }
    if (this._tlsSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecurityPolicy = this._tlsSecurityPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudsearchDomainEndpointOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforceHttps = undefined;
      this._tlsSecurityPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforceHttps = value.enforceHttps;
      this._tlsSecurityPolicy = value.tlsSecurityPolicy;
    }
  }

  // enforce_https - computed: true, optional: true, required: false
  private _enforceHttps?: boolean | cdktf.IResolvable; 
  public get enforceHttps() {
    return this.getBooleanAttribute('enforce_https');
  }
  public set enforceHttps(value: boolean | cdktf.IResolvable) {
    this._enforceHttps = value;
  }
  public resetEnforceHttps() {
    this._enforceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceHttpsInput() {
    return this._enforceHttps;
  }

  // tls_security_policy - computed: true, optional: true, required: false
  private _tlsSecurityPolicy?: string; 
  public get tlsSecurityPolicy() {
    return this.getStringAttribute('tls_security_policy');
  }
  public set tlsSecurityPolicy(value: string) {
    this._tlsSecurityPolicy = value;
  }
  public resetTlsSecurityPolicy() {
    this._tlsSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecurityPolicyInput() {
    return this._tlsSecurityPolicy;
  }
}
export interface CloudsearchDomainIndexField {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#analysis_scheme CloudsearchDomain#analysis_scheme}
  */
  readonly analysisScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#default_value CloudsearchDomain#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#facet CloudsearchDomain#facet}
  */
  readonly facet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#highlight CloudsearchDomain#highlight}
  */
  readonly highlight?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#name CloudsearchDomain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#return CloudsearchDomain#return}
  */
  readonly return?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#search CloudsearchDomain#search}
  */
  readonly search?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#sort CloudsearchDomain#sort}
  */
  readonly sort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#source_fields CloudsearchDomain#source_fields}
  */
  readonly sourceFields?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#type CloudsearchDomain#type}
  */
  readonly type: string;
}

export function cloudsearchDomainIndexFieldToTerraform(struct?: CloudsearchDomainIndexField | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    analysis_scheme: cdktf.stringToTerraform(struct!.analysisScheme),
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    facet: cdktf.booleanToTerraform(struct!.facet),
    highlight: cdktf.booleanToTerraform(struct!.highlight),
    name: cdktf.stringToTerraform(struct!.name),
    return: cdktf.booleanToTerraform(struct!.return),
    search: cdktf.booleanToTerraform(struct!.search),
    sort: cdktf.booleanToTerraform(struct!.sort),
    source_fields: cdktf.stringToTerraform(struct!.sourceFields),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class CloudsearchDomainIndexFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudsearchDomainIndexField | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._analysisScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.analysisScheme = this._analysisScheme;
    }
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._facet !== undefined) {
      hasAnyValues = true;
      internalValueResult.facet = this._facet;
    }
    if (this._highlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.highlight = this._highlight;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._return !== undefined) {
      hasAnyValues = true;
      internalValueResult.return = this._return;
    }
    if (this._search !== undefined) {
      hasAnyValues = true;
      internalValueResult.search = this._search;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    if (this._sourceFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFields = this._sourceFields;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudsearchDomainIndexField | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._analysisScheme = undefined;
      this._defaultValue = undefined;
      this._facet = undefined;
      this._highlight = undefined;
      this._name = undefined;
      this._return = undefined;
      this._search = undefined;
      this._sort = undefined;
      this._sourceFields = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._analysisScheme = value.analysisScheme;
      this._defaultValue = value.defaultValue;
      this._facet = value.facet;
      this._highlight = value.highlight;
      this._name = value.name;
      this._return = value.return;
      this._search = value.search;
      this._sort = value.sort;
      this._sourceFields = value.sourceFields;
      this._type = value.type;
    }
  }

  // analysis_scheme - computed: false, optional: true, required: false
  private _analysisScheme?: string; 
  public get analysisScheme() {
    return this.getStringAttribute('analysis_scheme');
  }
  public set analysisScheme(value: string) {
    this._analysisScheme = value;
  }
  public resetAnalysisScheme() {
    this._analysisScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analysisSchemeInput() {
    return this._analysisScheme;
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
  }

  // facet - computed: false, optional: true, required: false
  private _facet?: boolean | cdktf.IResolvable; 
  public get facet() {
    return this.getBooleanAttribute('facet');
  }
  public set facet(value: boolean | cdktf.IResolvable) {
    this._facet = value;
  }
  public resetFacet() {
    this._facet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facetInput() {
    return this._facet;
  }

  // highlight - computed: false, optional: true, required: false
  private _highlight?: boolean | cdktf.IResolvable; 
  public get highlight() {
    return this.getBooleanAttribute('highlight');
  }
  public set highlight(value: boolean | cdktf.IResolvable) {
    this._highlight = value;
  }
  public resetHighlight() {
    this._highlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highlightInput() {
    return this._highlight;
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

  // return - computed: false, optional: true, required: false
  private _return?: boolean | cdktf.IResolvable; 
  public get return() {
    return this.getBooleanAttribute('return');
  }
  public set return(value: boolean | cdktf.IResolvable) {
    this._return = value;
  }
  public resetReturn() {
    this._return = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnInput() {
    return this._return;
  }

  // search - computed: false, optional: true, required: false
  private _search?: boolean | cdktf.IResolvable; 
  public get search() {
    return this.getBooleanAttribute('search');
  }
  public set search(value: boolean | cdktf.IResolvable) {
    this._search = value;
  }
  public resetSearch() {
    this._search = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchInput() {
    return this._search;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: boolean | cdktf.IResolvable; 
  public get sort() {
    return this.getBooleanAttribute('sort');
  }
  public set sort(value: boolean | cdktf.IResolvable) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // source_fields - computed: false, optional: true, required: false
  private _sourceFields?: string; 
  public get sourceFields() {
    return this.getStringAttribute('source_fields');
  }
  public set sourceFields(value: string) {
    this._sourceFields = value;
  }
  public resetSourceFields() {
    this._sourceFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFieldsInput() {
    return this._sourceFields;
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

export class CloudsearchDomainIndexFieldList extends cdktf.ComplexList {
  public internalValue? : CloudsearchDomainIndexField[] | cdktf.IResolvable

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
  public get(index: number): CloudsearchDomainIndexFieldOutputReference {
    return new CloudsearchDomainIndexFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudsearchDomainScalingParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_instance_type CloudsearchDomain#desired_instance_type}
  */
  readonly desiredInstanceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_partition_count CloudsearchDomain#desired_partition_count}
  */
  readonly desiredPartitionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#desired_replication_count CloudsearchDomain#desired_replication_count}
  */
  readonly desiredReplicationCount?: number;
}

export function cloudsearchDomainScalingParametersToTerraform(struct?: CloudsearchDomainScalingParametersOutputReference | CloudsearchDomainScalingParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_instance_type: cdktf.stringToTerraform(struct!.desiredInstanceType),
    desired_partition_count: cdktf.numberToTerraform(struct!.desiredPartitionCount),
    desired_replication_count: cdktf.numberToTerraform(struct!.desiredReplicationCount),
  }
}

export class CloudsearchDomainScalingParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudsearchDomainScalingParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredInstanceType = this._desiredInstanceType;
    }
    if (this._desiredPartitionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredPartitionCount = this._desiredPartitionCount;
    }
    if (this._desiredReplicationCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredReplicationCount = this._desiredReplicationCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudsearchDomainScalingParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredInstanceType = undefined;
      this._desiredPartitionCount = undefined;
      this._desiredReplicationCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredInstanceType = value.desiredInstanceType;
      this._desiredPartitionCount = value.desiredPartitionCount;
      this._desiredReplicationCount = value.desiredReplicationCount;
    }
  }

  // desired_instance_type - computed: true, optional: true, required: false
  private _desiredInstanceType?: string; 
  public get desiredInstanceType() {
    return this.getStringAttribute('desired_instance_type');
  }
  public set desiredInstanceType(value: string) {
    this._desiredInstanceType = value;
  }
  public resetDesiredInstanceType() {
    this._desiredInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredInstanceTypeInput() {
    return this._desiredInstanceType;
  }

  // desired_partition_count - computed: true, optional: true, required: false
  private _desiredPartitionCount?: number; 
  public get desiredPartitionCount() {
    return this.getNumberAttribute('desired_partition_count');
  }
  public set desiredPartitionCount(value: number) {
    this._desiredPartitionCount = value;
  }
  public resetDesiredPartitionCount() {
    this._desiredPartitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredPartitionCountInput() {
    return this._desiredPartitionCount;
  }

  // desired_replication_count - computed: true, optional: true, required: false
  private _desiredReplicationCount?: number; 
  public get desiredReplicationCount() {
    return this.getNumberAttribute('desired_replication_count');
  }
  public set desiredReplicationCount(value: number) {
    this._desiredReplicationCount = value;
  }
  public resetDesiredReplicationCount() {
    this._desiredReplicationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredReplicationCountInput() {
    return this._desiredReplicationCount;
  }
}
export interface CloudsearchDomainTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#create CloudsearchDomain#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#delete CloudsearchDomain#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain#update CloudsearchDomain#update}
  */
  readonly update?: string;
}

export function cloudsearchDomainTimeoutsToTerraform(struct?: CloudsearchDomainTimeoutsOutputReference | CloudsearchDomainTimeouts | cdktf.IResolvable): any {
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

export class CloudsearchDomainTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudsearchDomainTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudsearchDomainTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain aws_cloudsearch_domain}
*/
export class CloudsearchDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudsearch_domain";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudsearch_domain aws_cloudsearch_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudsearchDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CloudsearchDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudsearch_domain',
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
    this._id = config.id;
    this._multiAz = config.multiAz;
    this._name = config.name;
    this._endpointOptions.internalValue = config.endpointOptions;
    this._indexField.internalValue = config.indexField;
    this._scalingParameters.internalValue = config.scalingParameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // document_service_endpoint - computed: true, optional: false, required: false
  public get documentServiceEndpoint() {
    return this.getStringAttribute('document_service_endpoint');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // multi_az - computed: true, optional: true, required: false
  private _multiAz?: boolean | cdktf.IResolvable; 
  public get multiAz() {
    return this.getBooleanAttribute('multi_az');
  }
  public set multiAz(value: boolean | cdktf.IResolvable) {
    this._multiAz = value;
  }
  public resetMultiAz() {
    this._multiAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiAzInput() {
    return this._multiAz;
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

  // search_service_endpoint - computed: true, optional: false, required: false
  public get searchServiceEndpoint() {
    return this.getStringAttribute('search_service_endpoint');
  }

  // endpoint_options - computed: false, optional: true, required: false
  private _endpointOptions = new CloudsearchDomainEndpointOptionsOutputReference(this, "endpoint_options");
  public get endpointOptions() {
    return this._endpointOptions;
  }
  public putEndpointOptions(value: CloudsearchDomainEndpointOptions) {
    this._endpointOptions.internalValue = value;
  }
  public resetEndpointOptions() {
    this._endpointOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointOptionsInput() {
    return this._endpointOptions.internalValue;
  }

  // index_field - computed: false, optional: true, required: false
  private _indexField = new CloudsearchDomainIndexFieldList(this, "index_field", true);
  public get indexField() {
    return this._indexField;
  }
  public putIndexField(value: CloudsearchDomainIndexField[] | cdktf.IResolvable) {
    this._indexField.internalValue = value;
  }
  public resetIndexField() {
    this._indexField.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexFieldInput() {
    return this._indexField.internalValue;
  }

  // scaling_parameters - computed: false, optional: true, required: false
  private _scalingParameters = new CloudsearchDomainScalingParametersOutputReference(this, "scaling_parameters");
  public get scalingParameters() {
    return this._scalingParameters;
  }
  public putScalingParameters(value: CloudsearchDomainScalingParameters) {
    this._scalingParameters.internalValue = value;
  }
  public resetScalingParameters() {
    this._scalingParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingParametersInput() {
    return this._scalingParameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudsearchDomainTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudsearchDomainTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      multi_az: cdktf.booleanToTerraform(this._multiAz),
      name: cdktf.stringToTerraform(this._name),
      endpoint_options: cloudsearchDomainEndpointOptionsToTerraform(this._endpointOptions.internalValue),
      index_field: cdktf.listMapper(cloudsearchDomainIndexFieldToTerraform, true)(this._indexField.internalValue),
      scaling_parameters: cloudsearchDomainScalingParametersToTerraform(this._scalingParameters.internalValue),
      timeouts: cloudsearchDomainTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
