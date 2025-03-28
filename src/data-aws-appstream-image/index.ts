/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsAppstreamImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#arn DataAwsAppstreamImage#arn}
  */
  readonly arn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#most_recent DataAwsAppstreamImage#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name DataAwsAppstreamImage#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#name_regex DataAwsAppstreamImage#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#type DataAwsAppstreamImage#type}
  */
  readonly type?: string;
}
export interface DataAwsAppstreamImageApplicationsIconS3Location {
}

export function dataAwsAppstreamImageApplicationsIconS3LocationToTerraform(struct?: DataAwsAppstreamImageApplicationsIconS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsAppstreamImageApplicationsIconS3LocationToHclTerraform(struct?: DataAwsAppstreamImageApplicationsIconS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAppstreamImageApplicationsIconS3LocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAppstreamImageApplicationsIconS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAppstreamImageApplicationsIconS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_key - computed: true, optional: false, required: false
  public get s3Key() {
    return this.getStringAttribute('s3_key');
  }
}

export class DataAwsAppstreamImageApplicationsIconS3LocationList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsAppstreamImageApplicationsIconS3LocationOutputReference {
    return new DataAwsAppstreamImageApplicationsIconS3LocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAppstreamImageApplications {
}

export function dataAwsAppstreamImageApplicationsToTerraform(struct?: DataAwsAppstreamImageApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsAppstreamImageApplicationsToHclTerraform(struct?: DataAwsAppstreamImageApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAppstreamImageApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAppstreamImageApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAppstreamImageApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // app_block_arn - computed: true, optional: false, required: false
  public get appBlockArn() {
    return this.getStringAttribute('app_block_arn');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // icon_s3_location - computed: true, optional: false, required: false
  private _iconS3Location = new DataAwsAppstreamImageApplicationsIconS3LocationList(this, "icon_s3_location", false);
  public get iconS3Location() {
    return this._iconS3Location;
  }

  // icon_url - computed: true, optional: false, required: false
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }

  // instance_families - computed: true, optional: false, required: false
  public get instanceFamilies() {
    return this.getListAttribute('instance_families');
  }

  // launch_parameters - computed: true, optional: false, required: false
  public get launchParameters() {
    return this.getStringAttribute('launch_parameters');
  }

  // launch_path - computed: true, optional: false, required: false
  public get launchPath() {
    return this.getStringAttribute('launch_path');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platforms - computed: true, optional: false, required: false
  public get platforms() {
    return this.getListAttribute('platforms');
  }

  // working_directory - computed: true, optional: false, required: false
  public get workingDirectory() {
    return this.getStringAttribute('working_directory');
  }
}

export class DataAwsAppstreamImageApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsAppstreamImageApplicationsOutputReference {
    return new DataAwsAppstreamImageApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAppstreamImageImagePermissions {
}

export function dataAwsAppstreamImageImagePermissionsToTerraform(struct?: DataAwsAppstreamImageImagePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsAppstreamImageImagePermissionsToHclTerraform(struct?: DataAwsAppstreamImageImagePermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAppstreamImageImagePermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAppstreamImageImagePermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAppstreamImageImagePermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_fleet - computed: true, optional: false, required: false
  public get allowFleet() {
    return this.getBooleanAttribute('allow_fleet');
  }

  // allow_image_builder - computed: true, optional: false, required: false
  public get allowImageBuilder() {
    return this.getBooleanAttribute('allow_image_builder');
  }
}

export class DataAwsAppstreamImageImagePermissionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsAppstreamImageImagePermissionsOutputReference {
    return new DataAwsAppstreamImageImagePermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAwsAppstreamImageStateChangeReason {
}

export function dataAwsAppstreamImageStateChangeReasonToTerraform(struct?: DataAwsAppstreamImageStateChangeReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAwsAppstreamImageStateChangeReasonToHclTerraform(struct?: DataAwsAppstreamImageStateChangeReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAwsAppstreamImageStateChangeReasonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAwsAppstreamImageStateChangeReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsAppstreamImageStateChangeReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataAwsAppstreamImageStateChangeReasonList extends cdktf.ComplexList {

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
  public get(index: number): DataAwsAppstreamImageStateChangeReasonOutputReference {
    return new DataAwsAppstreamImageStateChangeReasonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image aws_appstream_image}
*/
export class DataAwsAppstreamImage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_appstream_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAwsAppstreamImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAwsAppstreamImage to import
  * @param importFromId The id of the existing DataAwsAppstreamImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAwsAppstreamImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_appstream_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/data-sources/appstream_image aws_appstream_image} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsAppstreamImageConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsAppstreamImageConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_appstream_image',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.93.0',
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
    this._arn = config.arn;
    this._mostRecent = config.mostRecent;
    this._name = config.name;
    this._nameRegex = config.nameRegex;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: true, optional: false, required: false
  private _applications = new DataAwsAppstreamImageApplicationsList(this, "applications", false);
  public get applications() {
    return this._applications;
  }

  // appstream_agent_version - computed: true, optional: false, required: false
  public get appstreamAgentVersion() {
    return this.getStringAttribute('appstream_agent_version');
  }

  // arn - computed: true, optional: true, required: false
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  public resetArn() {
    this._arn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // base_image_arn - computed: true, optional: false, required: false
  public get baseImageArn() {
    return this.getStringAttribute('base_image_arn');
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // image_builder_name - computed: true, optional: false, required: false
  public get imageBuilderName() {
    return this.getStringAttribute('image_builder_name');
  }

  // image_builder_supported - computed: true, optional: false, required: false
  public get imageBuilderSupported() {
    return this.getBooleanAttribute('image_builder_supported');
  }

  // image_permissions - computed: true, optional: false, required: false
  private _imagePermissions = new DataAwsAppstreamImageImagePermissionsList(this, "image_permissions", false);
  public get imagePermissions() {
    return this._imagePermissions;
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent');
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

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

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // public_base_image_released_date - computed: true, optional: false, required: false
  public get publicBaseImageReleasedDate() {
    return this.getStringAttribute('public_base_image_released_date');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_change_reason - computed: true, optional: false, required: false
  private _stateChangeReason = new DataAwsAppstreamImageStateChangeReasonList(this, "state_change_reason", false);
  public get stateChangeReason() {
    return this._stateChangeReason;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arn: cdktf.stringToTerraform(this._arn),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
      name: cdktf.stringToTerraform(this._name),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arn: {
        value: cdktf.stringToHclTerraform(this._arn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      most_recent: {
        value: cdktf.booleanToHclTerraform(this._mostRecent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
