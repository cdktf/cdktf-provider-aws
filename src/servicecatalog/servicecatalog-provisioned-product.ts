// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS Service Catalog
*/
export interface ServicecatalogProvisionedProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accept_language ServicecatalogProvisionedProduct#accept_language}
  */
  readonly acceptLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#ignore_errors ServicecatalogProvisionedProduct#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#name ServicecatalogProvisionedProduct#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#notification_arns ServicecatalogProvisionedProduct#notification_arns}
  */
  readonly notificationArns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_id ServicecatalogProvisionedProduct#path_id}
  */
  readonly pathId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#path_name ServicecatalogProvisionedProduct#path_name}
  */
  readonly pathName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_id ServicecatalogProvisionedProduct#product_id}
  */
  readonly productId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#product_name ServicecatalogProvisionedProduct#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_id ServicecatalogProvisionedProduct#provisioning_artifact_id}
  */
  readonly provisioningArtifactId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_artifact_name ServicecatalogProvisionedProduct#provisioning_artifact_name}
  */
  readonly provisioningArtifactName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#retain_physical_resources ServicecatalogProvisionedProduct#retain_physical_resources}
  */
  readonly retainPhysicalResources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags ServicecatalogProvisionedProduct#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#tags_all ServicecatalogProvisionedProduct#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * provisioning_parameters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#provisioning_parameters ServicecatalogProvisionedProduct#provisioning_parameters}
  */
  readonly provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[];
  /**
  * stack_set_provisioning_preferences block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#stack_set_provisioning_preferences ServicecatalogProvisionedProduct#stack_set_provisioning_preferences}
  */
  readonly stackSetProvisioningPreferences?: ServicecatalogProvisionedProductStackSetProvisioningPreferences;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#timeouts ServicecatalogProvisionedProduct#timeouts}
  */
  readonly timeouts?: ServicecatalogProvisionedProductTimeouts;
}
export interface ServicecatalogProvisionedProductProvisioningParameters {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#key ServicecatalogProvisionedProduct#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#use_previous_value ServicecatalogProvisionedProduct#use_previous_value}
  */
  readonly usePreviousValue?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#value ServicecatalogProvisionedProduct#value}
  */
  readonly value?: string;
}

export function servicecatalogProvisionedProductProvisioningParametersToTerraform(struct?: ServicecatalogProvisionedProductProvisioningParameters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    use_previous_value: cdktf.booleanToTerraform(struct!.usePreviousValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ServicecatalogProvisionedProductStackSetProvisioningPreferences {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#accounts ServicecatalogProvisionedProduct#accounts}
  */
  readonly accounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_count ServicecatalogProvisionedProduct#failure_tolerance_count}
  */
  readonly failureToleranceCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#failure_tolerance_percentage ServicecatalogProvisionedProduct#failure_tolerance_percentage}
  */
  readonly failureTolerancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_count ServicecatalogProvisionedProduct#max_concurrency_count}
  */
  readonly maxConcurrencyCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#max_concurrency_percentage ServicecatalogProvisionedProduct#max_concurrency_percentage}
  */
  readonly maxConcurrencyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#regions ServicecatalogProvisionedProduct#regions}
  */
  readonly regions?: string[];
}

export function servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(struct?: ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference | ServicecatalogProvisionedProductStackSetProvisioningPreferences): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accounts: cdktf.listMapper(cdktf.stringToTerraform)(struct!.accounts),
    failure_tolerance_count: cdktf.numberToTerraform(struct!.failureToleranceCount),
    failure_tolerance_percentage: cdktf.numberToTerraform(struct!.failureTolerancePercentage),
    max_concurrency_count: cdktf.numberToTerraform(struct!.maxConcurrencyCount),
    max_concurrency_percentage: cdktf.numberToTerraform(struct!.maxConcurrencyPercentage),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
  }
}

export class ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._accounts) {
      hasAnyValues = true;
      internalValueResult.accounts = this._accounts;
    }
    if (this._failureToleranceCount) {
      hasAnyValues = true;
      internalValueResult.failureToleranceCount = this._failureToleranceCount;
    }
    if (this._failureTolerancePercentage) {
      hasAnyValues = true;
      internalValueResult.failureTolerancePercentage = this._failureTolerancePercentage;
    }
    if (this._maxConcurrencyCount) {
      hasAnyValues = true;
      internalValueResult.maxConcurrencyCount = this._maxConcurrencyCount;
    }
    if (this._maxConcurrencyPercentage) {
      hasAnyValues = true;
      internalValueResult.maxConcurrencyPercentage = this._maxConcurrencyPercentage;
    }
    if (this._regions) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences | undefined) {
    if (value === undefined) {
      this._accounts = undefined;
      this._failureToleranceCount = undefined;
      this._failureTolerancePercentage = undefined;
      this._maxConcurrencyCount = undefined;
      this._maxConcurrencyPercentage = undefined;
      this._regions = undefined;
    }
    else {
      this._accounts = value.accounts;
      this._failureToleranceCount = value.failureToleranceCount;
      this._failureTolerancePercentage = value.failureTolerancePercentage;
      this._maxConcurrencyCount = value.maxConcurrencyCount;
      this._maxConcurrencyPercentage = value.maxConcurrencyPercentage;
      this._regions = value.regions;
    }
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts?: string[]; 
  public get accounts() {
    return this.getListAttribute('accounts');
  }
  public set accounts(value: string[]) {
    this._accounts = value;
  }
  public resetAccounts() {
    this._accounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts;
  }

  // failure_tolerance_count - computed: false, optional: true, required: false
  private _failureToleranceCount?: number; 
  public get failureToleranceCount() {
    return this.getNumberAttribute('failure_tolerance_count');
  }
  public set failureToleranceCount(value: number) {
    this._failureToleranceCount = value;
  }
  public resetFailureToleranceCount() {
    this._failureToleranceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureToleranceCountInput() {
    return this._failureToleranceCount;
  }

  // failure_tolerance_percentage - computed: false, optional: true, required: false
  private _failureTolerancePercentage?: number; 
  public get failureTolerancePercentage() {
    return this.getNumberAttribute('failure_tolerance_percentage');
  }
  public set failureTolerancePercentage(value: number) {
    this._failureTolerancePercentage = value;
  }
  public resetFailureTolerancePercentage() {
    this._failureTolerancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureTolerancePercentageInput() {
    return this._failureTolerancePercentage;
  }

  // max_concurrency_count - computed: false, optional: true, required: false
  private _maxConcurrencyCount?: number; 
  public get maxConcurrencyCount() {
    return this.getNumberAttribute('max_concurrency_count');
  }
  public set maxConcurrencyCount(value: number) {
    this._maxConcurrencyCount = value;
  }
  public resetMaxConcurrencyCount() {
    this._maxConcurrencyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyCountInput() {
    return this._maxConcurrencyCount;
  }

  // max_concurrency_percentage - computed: false, optional: true, required: false
  private _maxConcurrencyPercentage?: number; 
  public get maxConcurrencyPercentage() {
    return this.getNumberAttribute('max_concurrency_percentage');
  }
  public set maxConcurrencyPercentage(value: number) {
    this._maxConcurrencyPercentage = value;
  }
  public resetMaxConcurrencyPercentage() {
    this._maxConcurrencyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyPercentageInput() {
    return this._maxConcurrencyPercentage;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }
}
export interface ServicecatalogProvisionedProductTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#create ServicecatalogProvisionedProduct#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#delete ServicecatalogProvisionedProduct#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html#update ServicecatalogProvisionedProduct#update}
  */
  readonly update?: string;
}

export function servicecatalogProvisionedProductTimeoutsToTerraform(struct?: ServicecatalogProvisionedProductTimeoutsOutputReference | ServicecatalogProvisionedProductTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ServicecatalogProvisionedProductTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServicecatalogProvisionedProductTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicecatalogProvisionedProductTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product}
*/
export class ServicecatalogProvisionedProduct extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_servicecatalog_provisioned_product";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_provisioned_product.html aws_servicecatalog_provisioned_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogProvisionedProductConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogProvisionedProductConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_provisioned_product',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._acceptLanguage = config.acceptLanguage;
    this._ignoreErrors = config.ignoreErrors;
    this._name = config.name;
    this._notificationArns = config.notificationArns;
    this._pathId = config.pathId;
    this._pathName = config.pathName;
    this._productId = config.productId;
    this._productName = config.productName;
    this._provisioningArtifactId = config.provisioningArtifactId;
    this._provisioningArtifactName = config.provisioningArtifactName;
    this._retainPhysicalResources = config.retainPhysicalResources;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._provisioningParameters = config.provisioningParameters;
    this._stackSetProvisioningPreferences.internalValue = config.stackSetProvisioningPreferences;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_language - computed: false, optional: true, required: false
  private _acceptLanguage?: string; 
  public get acceptLanguage() {
    return this.getStringAttribute('accept_language');
  }
  public set acceptLanguage(value: string) {
    this._acceptLanguage = value;
  }
  public resetAcceptLanguage() {
    this._acceptLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptLanguageInput() {
    return this._acceptLanguage;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // cloudwatch_dashboard_names - computed: true, optional: false, required: false
  public get cloudwatchDashboardNames() {
    return this.getListAttribute('cloudwatch_dashboard_names');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors') as any;
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // last_provisioning_record_id - computed: true, optional: false, required: false
  public get lastProvisioningRecordId() {
    return this.getStringAttribute('last_provisioning_record_id');
  }

  // last_record_id - computed: true, optional: false, required: false
  public get lastRecordId() {
    return this.getStringAttribute('last_record_id');
  }

  // last_successful_provisioning_record_id - computed: true, optional: false, required: false
  public get lastSuccessfulProvisioningRecordId() {
    return this.getStringAttribute('last_successful_provisioning_record_id');
  }

  // launch_role_arn - computed: true, optional: false, required: false
  public get launchRoleArn() {
    return this.getStringAttribute('launch_role_arn');
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

  // notification_arns - computed: false, optional: true, required: false
  private _notificationArns?: string[]; 
  public get notificationArns() {
    return this.getListAttribute('notification_arns');
  }
  public set notificationArns(value: string[]) {
    this._notificationArns = value;
  }
  public resetNotificationArns() {
    this._notificationArns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationArnsInput() {
    return this._notificationArns;
  }

  // path_id - computed: true, optional: true, required: false
  private _pathId?: string; 
  public get pathId() {
    return this.getStringAttribute('path_id');
  }
  public set pathId(value: string) {
    this._pathId = value;
  }
  public resetPathId() {
    this._pathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathIdInput() {
    return this._pathId;
  }

  // path_name - computed: false, optional: true, required: false
  private _pathName?: string; 
  public get pathName() {
    return this.getStringAttribute('path_name');
  }
  public set pathName(value: string) {
    this._pathName = value;
  }
  public resetPathName() {
    this._pathName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathNameInput() {
    return this._pathName;
  }

  // product_id - computed: true, optional: true, required: false
  private _productId?: string; 
  public get productId() {
    return this.getStringAttribute('product_id');
  }
  public set productId(value: string) {
    this._productId = value;
  }
  public resetProductId() {
    this._productId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // product_name - computed: false, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // provisioning_artifact_id - computed: true, optional: true, required: false
  private _provisioningArtifactId?: string; 
  public get provisioningArtifactId() {
    return this.getStringAttribute('provisioning_artifact_id');
  }
  public set provisioningArtifactId(value: string) {
    this._provisioningArtifactId = value;
  }
  public resetProvisioningArtifactId() {
    this._provisioningArtifactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactIdInput() {
    return this._provisioningArtifactId;
  }

  // provisioning_artifact_name - computed: false, optional: true, required: false
  private _provisioningArtifactName?: string; 
  public get provisioningArtifactName() {
    return this.getStringAttribute('provisioning_artifact_name');
  }
  public set provisioningArtifactName(value: string) {
    this._provisioningArtifactName = value;
  }
  public resetProvisioningArtifactName() {
    this._provisioningArtifactName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningArtifactNameInput() {
    return this._provisioningArtifactName;
  }

  // retain_physical_resources - computed: false, optional: true, required: false
  private _retainPhysicalResources?: boolean | cdktf.IResolvable; 
  public get retainPhysicalResources() {
    return this.getBooleanAttribute('retain_physical_resources') as any;
  }
  public set retainPhysicalResources(value: boolean | cdktf.IResolvable) {
    this._retainPhysicalResources = value;
  }
  public resetRetainPhysicalResources() {
    this._retainPhysicalResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainPhysicalResourcesInput() {
    return this._retainPhysicalResources;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // provisioning_parameters - computed: false, optional: true, required: false
  private _provisioningParameters?: ServicecatalogProvisionedProductProvisioningParameters[]; 
  public get provisioningParameters() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('provisioning_parameters') as any;
  }
  public set provisioningParameters(value: ServicecatalogProvisionedProductProvisioningParameters[]) {
    this._provisioningParameters = value;
  }
  public resetProvisioningParameters() {
    this._provisioningParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisioningParametersInput() {
    return this._provisioningParameters;
  }

  // stack_set_provisioning_preferences - computed: false, optional: true, required: false
  private _stackSetProvisioningPreferences = new ServicecatalogProvisionedProductStackSetProvisioningPreferencesOutputReference(this as any, "stack_set_provisioning_preferences", true);
  public get stackSetProvisioningPreferences() {
    return this._stackSetProvisioningPreferences;
  }
  public putStackSetProvisioningPreferences(value: ServicecatalogProvisionedProductStackSetProvisioningPreferences) {
    this._stackSetProvisioningPreferences.internalValue = value;
  }
  public resetStackSetProvisioningPreferences() {
    this._stackSetProvisioningPreferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackSetProvisioningPreferencesInput() {
    return this._stackSetProvisioningPreferences.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicecatalogProvisionedProductTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicecatalogProvisionedProductTimeouts) {
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
      accept_language: cdktf.stringToTerraform(this._acceptLanguage),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      name: cdktf.stringToTerraform(this._name),
      notification_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._notificationArns),
      path_id: cdktf.stringToTerraform(this._pathId),
      path_name: cdktf.stringToTerraform(this._pathName),
      product_id: cdktf.stringToTerraform(this._productId),
      product_name: cdktf.stringToTerraform(this._productName),
      provisioning_artifact_id: cdktf.stringToTerraform(this._provisioningArtifactId),
      provisioning_artifact_name: cdktf.stringToTerraform(this._provisioningArtifactName),
      retain_physical_resources: cdktf.booleanToTerraform(this._retainPhysicalResources),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      provisioning_parameters: cdktf.listMapper(servicecatalogProvisionedProductProvisioningParametersToTerraform)(this._provisioningParameters),
      stack_set_provisioning_preferences: servicecatalogProvisionedProductStackSetProvisioningPreferencesToTerraform(this._stackSetProvisioningPreferences.internalValue),
      timeouts: servicecatalogProvisionedProductTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
