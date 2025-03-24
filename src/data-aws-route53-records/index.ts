// https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/route53_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsRoute53RecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/route53_records#name_regex DataAwsRoute53Records#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/route53_records#zone_id DataAwsRoute53Records#zone_id}
  */
  readonly zoneId: string;
}
export interface DataAwsRoute53RecordsResourceRecordSetsAliasTarget {
}

export function dataAwsRoute53RecordsResourceRecordSetsAliasTargetToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsAliasTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRoute53RecordsResourceRecordSetsAliasTargetToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsAliasTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsRoute53RecordsResourceRecordSetsAliasTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsAliasTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // evaluate_target_health - computed: true, optional: false, required: false
  public get evaluateTargetHealth() {
    return this.getBooleanAttribute('evaluate_target_health');
  }

  // hosted_zone_id - computed: true, optional: false, required: false
  public get hostedZoneId() {
    return this.getStringAttribute('hosted_zone_id');
  }
}
export interface DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig {
}

export function dataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection_id - computed: true, optional: false, required: false
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
}
export interface DataAwsRoute53RecordsResourceRecordSetsGeolocation {
}

export function dataAwsRoute53RecordsResourceRecordSetsGeolocationToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeolocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRoute53RecordsResourceRecordSetsGeolocationToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeolocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsRoute53RecordsResourceRecordSetsGeolocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsGeolocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continent_code - computed: true, optional: false, required: false
  public get continentCode() {
    return this.getStringAttribute('continent_code');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // subdivision_code - computed: true, optional: false, required: false
  public get subdivisionCode() {
    return this.getStringAttribute('subdivision_code');
  }
}
export interface DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates {
}

export function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
}
export interface DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation {
}

export function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // bias - computed: true, optional: false, required: false
  public get bias() {
    return this.getNumberAttribute('bias');
  }

  // coordinates - computed: true, optional: false, required: false
  private _coordinates = new DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }

  // local_zone_group - computed: true, optional: false, required: false
  public get localZoneGroup() {
    return this.getStringAttribute('local_zone_group');
  }
}
export interface DataAwsRoute53RecordsResourceRecordSetsResourceRecords {
}

export function dataAwsRoute53RecordsResourceRecordSetsResourceRecordsToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsResourceRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRoute53RecordsResourceRecordSetsResourceRecordsToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSetsResourceRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsRoute53RecordsResourceRecordSetsResourceRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53RecordsResourceRecordSetsResourceRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference {
    return new DataAwsRoute53RecordsResourceRecordSetsResourceRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsRoute53RecordsResourceRecordSets {
}

export function dataAwsRoute53RecordsResourceRecordSetsToTerraform(struct?: DataAwsRoute53RecordsResourceRecordSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsRoute53RecordsResourceRecordSetsToHclTerraform(struct?: DataAwsRoute53RecordsResourceRecordSets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsRoute53RecordsResourceRecordSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsRoute53RecordsResourceRecordSets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsRoute53RecordsResourceRecordSets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias_target - computed: true, optional: false, required: false
  private _aliasTarget = new DataAwsRoute53RecordsResourceRecordSetsAliasTargetOutputReference(this, "alias_target");
  public get aliasTarget() {
    return this._aliasTarget;
  }

  // cidr_routing_config - computed: true, optional: false, required: false
  private _cidrRoutingConfig = new DataAwsRoute53RecordsResourceRecordSetsCidrRoutingConfigOutputReference(this, "cidr_routing_config");
  public get cidrRoutingConfig() {
    return this._cidrRoutingConfig;
  }

  // failover - computed: true, optional: false, required: false
  public get failover() {
    return this.getStringAttribute('failover');
  }

  // geolocation - computed: true, optional: false, required: false
  private _geolocation = new DataAwsRoute53RecordsResourceRecordSetsGeolocationOutputReference(this, "geolocation");
  public get geolocation() {
    return this._geolocation;
  }

  // geoproximity_location - computed: true, optional: false, required: false
  private _geoproximityLocation = new DataAwsRoute53RecordsResourceRecordSetsGeoproximityLocationOutputReference(this, "geoproximity_location");
  public get geoproximityLocation() {
    return this._geoproximityLocation;
  }

  // health_check_id - computed: true, optional: false, required: false
  public get healthCheckId() {
    return this.getStringAttribute('health_check_id');
  }

  // multi_value_answer - computed: true, optional: false, required: false
  public get multiValueAnswer() {
    return this.getBooleanAttribute('multi_value_answer');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_records - computed: true, optional: false, required: false
  private _resourceRecords = new DataAwsRoute53RecordsResourceRecordSetsResourceRecordsList(this, "resource_records", false);
  public get resourceRecords() {
    return this._resourceRecords;
  }

  // set_identifier - computed: true, optional: false, required: false
  public get setIdentifier() {
    return this.getStringAttribute('set_identifier');
  }

  // traffic_policy_instance_id - computed: true, optional: false, required: false
  public get trafficPolicyInstanceId() {
    return this.getStringAttribute('traffic_policy_instance_id');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataAwsRoute53RecordsResourceRecordSetsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsRoute53RecordsResourceRecordSetsOutputReference {
    return new DataAwsRoute53RecordsResourceRecordSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/route53_records aws_route53_records}
*/
export class DataAwsRoute53Records extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_route53_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsRoute53Records resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsRoute53Records to import
  * @param importFromId The id of the existing DataAwsRoute53Records that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/route53_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsRoute53Records to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_route53_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.92.0/docs/data-sources/route53_records aws_route53_records} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsRoute53RecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsRoute53RecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_route53_records',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.92.0',
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
    this._nameRegex = config.nameRegex;
    this._zoneId = config.zoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // resource_record_sets - computed: true, optional: false, required: false
  private _resourceRecordSets = new DataAwsRoute53RecordsResourceRecordSetsList(this, "resource_record_sets", false);
  public get resourceRecordSets() {
    return this._resourceRecordSets;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      zone_id: cdktf.stringToTerraform(this._zoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
