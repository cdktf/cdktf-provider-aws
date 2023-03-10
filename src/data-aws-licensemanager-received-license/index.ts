// https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsLicensemanagerReceivedLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license#id DataAwsLicensemanagerReceivedLicense#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license#license_arn DataAwsLicensemanagerReceivedLicense#license_arn}
  */
  readonly licenseArn: string;
}
export interface DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration {
}

export function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_early_check_in - computed: true, optional: false, required: false
  public get allowEarlyCheckIn() {
    return this.getBooleanAttribute('allow_early_check_in');
  }

  // max_time_to_live_in_minutes - computed: true, optional: false, required: false
  public get maxTimeToLiveInMinutes() {
    return this.getNumberAttribute('max_time_to_live_in_minutes');
  }
}

export class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration {
}

export function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_time_to_live_in_minutes - computed: true, optional: false, required: false
  public get maxTimeToLiveInMinutes() {
    return this.getNumberAttribute('max_time_to_live_in_minutes');
  }
}

export class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration {
}

export function dataAwsLicensemanagerReceivedLicenseConsumptionConfigurationToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseConsumptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // borrow_configuration - computed: true, optional: false, required: false
  private _borrowConfiguration = new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationBorrowConfigurationList(this, "borrow_configuration", false);
  public get borrowConfiguration() {
    return this._borrowConfiguration;
  }

  // provisional_configuration - computed: true, optional: false, required: false
  private _provisionalConfiguration = new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationProvisionalConfigurationList(this, "provisional_configuration", false);
  public get provisionalConfiguration() {
    return this._provisionalConfiguration;
  }

  // renew_type - computed: true, optional: false, required: false
  public get renewType() {
    return this.getStringAttribute('renew_type');
  }
}

export class DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLicensemanagerReceivedLicenseEntitlements {
}

export function dataAwsLicensemanagerReceivedLicenseEntitlementsToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseEntitlements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseEntitlements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseEntitlements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_check_in - computed: true, optional: false, required: false
  public get allowCheckIn() {
    return this.getBooleanAttribute('allow_check_in');
  }

  // max_count - computed: true, optional: false, required: false
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsLicensemanagerReceivedLicenseEntitlementsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseEntitlementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLicensemanagerReceivedLicenseIssuer {
}

export function dataAwsLicensemanagerReceivedLicenseIssuerToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseIssuer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseIssuerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseIssuer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseIssuer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_fingerprint - computed: true, optional: false, required: false
  public get keyFingerprint() {
    return this.getStringAttribute('key_fingerprint');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // sign_key - computed: true, optional: false, required: false
  public get signKey() {
    return this.getStringAttribute('sign_key');
  }
}

export class DataAwsLicensemanagerReceivedLicenseIssuerList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseIssuerOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseIssuerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLicensemanagerReceivedLicenseLicenseMetadata {
}

export function dataAwsLicensemanagerReceivedLicenseLicenseMetadataToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseLicenseMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseLicenseMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseLicenseMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsLicensemanagerReceivedLicenseLicenseMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseLicenseMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLicensemanagerReceivedLicenseReceivedMetadata {
}

export function dataAwsLicensemanagerReceivedLicenseReceivedMetadataToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseReceivedMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseReceivedMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseReceivedMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_operations - computed: true, optional: false, required: false
  public get allowedOperations() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operations'));
  }

  // received_status - computed: true, optional: false, required: false
  public get receivedStatus() {
    return this.getStringAttribute('received_status');
  }

  // received_status_reason - computed: true, optional: false, required: false
  public get receivedStatusReason() {
    return this.getStringAttribute('received_status_reason');
  }
}

export class DataAwsLicensemanagerReceivedLicenseReceivedMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseReceivedMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsLicensemanagerReceivedLicenseValidity {
}

export function dataAwsLicensemanagerReceivedLicenseValidityToTerraform(struct?: DataAwsLicensemanagerReceivedLicenseValidity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsLicensemanagerReceivedLicenseValidityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsLicensemanagerReceivedLicenseValidity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsLicensemanagerReceivedLicenseValidity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin - computed: true, optional: false, required: false
  public get begin() {
    return this.getStringAttribute('begin');
  }

  // end - computed: true, optional: false, required: false
  public get end() {
    return this.getStringAttribute('end');
  }
}

export class DataAwsLicensemanagerReceivedLicenseValidityList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsLicensemanagerReceivedLicenseValidityOutputReference {
    return new DataAwsLicensemanagerReceivedLicenseValidityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license aws_licensemanager_received_license}
*/
export class DataAwsLicensemanagerReceivedLicense extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_licensemanager_received_license";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/licensemanager_received_license aws_licensemanager_received_license} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsLicensemanagerReceivedLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsLicensemanagerReceivedLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_licensemanager_received_license',
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
    this._licenseArn = config.licenseArn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beneficiary - computed: true, optional: false, required: false
  public get beneficiary() {
    return this.getStringAttribute('beneficiary');
  }

  // consumption_configuration - computed: true, optional: false, required: false
  private _consumptionConfiguration = new DataAwsLicensemanagerReceivedLicenseConsumptionConfigurationList(this, "consumption_configuration", false);
  public get consumptionConfiguration() {
    return this._consumptionConfiguration;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // entitlements - computed: true, optional: false, required: false
  private _entitlements = new DataAwsLicensemanagerReceivedLicenseEntitlementsList(this, "entitlements", true);
  public get entitlements() {
    return this._entitlements;
  }

  // home_region - computed: true, optional: false, required: false
  public get homeRegion() {
    return this.getStringAttribute('home_region');
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

  // issuer - computed: true, optional: false, required: false
  private _issuer = new DataAwsLicensemanagerReceivedLicenseIssuerList(this, "issuer", false);
  public get issuer() {
    return this._issuer;
  }

  // license_arn - computed: false, optional: false, required: true
  private _licenseArn?: string; 
  public get licenseArn() {
    return this.getStringAttribute('license_arn');
  }
  public set licenseArn(value: string) {
    this._licenseArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseArnInput() {
    return this._licenseArn;
  }

  // license_metadata - computed: true, optional: false, required: false
  private _licenseMetadata = new DataAwsLicensemanagerReceivedLicenseLicenseMetadataList(this, "license_metadata", true);
  public get licenseMetadata() {
    return this._licenseMetadata;
  }

  // license_name - computed: true, optional: false, required: false
  public get licenseName() {
    return this.getStringAttribute('license_name');
  }

  // product_name - computed: true, optional: false, required: false
  public get productName() {
    return this.getStringAttribute('product_name');
  }

  // product_sku - computed: true, optional: false, required: false
  public get productSku() {
    return this.getStringAttribute('product_sku');
  }

  // received_metadata - computed: true, optional: false, required: false
  private _receivedMetadata = new DataAwsLicensemanagerReceivedLicenseReceivedMetadataList(this, "received_metadata", false);
  public get receivedMetadata() {
    return this._receivedMetadata;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // validity - computed: true, optional: false, required: false
  private _validity = new DataAwsLicensemanagerReceivedLicenseValidityList(this, "validity", false);
  public get validity() {
    return this._validity;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      license_arn: cdktf.stringToTerraform(this._licenseArn),
    };
  }
}
