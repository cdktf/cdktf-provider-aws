/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontFieldLevelEncryptionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#comment CloudfrontFieldLevelEncryptionConfig#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#id CloudfrontFieldLevelEncryptionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * content_type_profile_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profile_config CloudfrontFieldLevelEncryptionConfig#content_type_profile_config}
  */
  readonly contentTypeProfileConfig: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig;
  /**
  * query_arg_profile_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profile_config CloudfrontFieldLevelEncryptionConfig#query_arg_profile_config}
  */
  readonly queryArgProfileConfig: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig;
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#content_type CloudfrontFieldLevelEncryptionConfig#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#format CloudfrontFieldLevelEncryptionConfig#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
  */
  readonly profileId?: string;
}

export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    format: cdktf.stringToTerraform(struct!.format),
    profile_id: cdktf.stringToTerraform(struct!.profileId),
  }
}


export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._format = undefined;
      this._profileId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._format = value.format;
      this._profileId = value.profileId;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }
}

export class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference {
    return new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}
  */
  readonly items: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[] | cdktf.IResolvable;
}

export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToTerraform, true)(struct!.items),
  }
}


export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: false, required: true
  private _items = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_content_type_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_content_type_is_unknown}
  */
  readonly forwardWhenContentTypeIsUnknown: boolean | cdktf.IResolvable;
  /**
  * content_type_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#content_type_profiles CloudfrontFieldLevelEncryptionConfig#content_type_profiles}
  */
  readonly contentTypeProfiles: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles;
}

export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_when_content_type_is_unknown: cdktf.booleanToTerraform(struct!.forwardWhenContentTypeIsUnknown),
    content_type_profiles: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToTerraform(struct!.contentTypeProfiles),
  }
}


export function cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_when_content_type_is_unknown: {
      value: cdktf.booleanToHclTerraform(struct!.forwardWhenContentTypeIsUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_type_profiles: {
      value: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesToHclTerraform(struct!.contentTypeProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardWhenContentTypeIsUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardWhenContentTypeIsUnknown = this._forwardWhenContentTypeIsUnknown;
    }
    if (this._contentTypeProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeProfiles = this._contentTypeProfiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardWhenContentTypeIsUnknown = undefined;
      this._contentTypeProfiles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardWhenContentTypeIsUnknown = value.forwardWhenContentTypeIsUnknown;
      this._contentTypeProfiles.internalValue = value.contentTypeProfiles;
    }
  }

  // forward_when_content_type_is_unknown - computed: false, optional: false, required: true
  private _forwardWhenContentTypeIsUnknown?: boolean | cdktf.IResolvable; 
  public get forwardWhenContentTypeIsUnknown() {
    return this.getBooleanAttribute('forward_when_content_type_is_unknown');
  }
  public set forwardWhenContentTypeIsUnknown(value: boolean | cdktf.IResolvable) {
    this._forwardWhenContentTypeIsUnknown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardWhenContentTypeIsUnknownInput() {
    return this._forwardWhenContentTypeIsUnknown;
  }

  // content_type_profiles - computed: false, optional: false, required: true
  private _contentTypeProfiles = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfilesOutputReference(this, "content_type_profiles");
  public get contentTypeProfiles() {
    return this._contentTypeProfiles;
  }
  public putContentTypeProfiles(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigContentTypeProfiles) {
    this._contentTypeProfiles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeProfilesInput() {
    return this._contentTypeProfiles.internalValue;
  }
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#profile_id CloudfrontFieldLevelEncryptionConfig#profile_id}
  */
  readonly profileId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#query_arg CloudfrontFieldLevelEncryptionConfig#query_arg}
  */
  readonly queryArg: string;
}

export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile_id: cdktf.stringToTerraform(struct!.profileId),
    query_arg: cdktf.stringToTerraform(struct!.queryArg),
  }
}


export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile_id: {
      value: cdktf.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_arg: {
      value: cdktf.stringToHclTerraform(struct!.queryArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._queryArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryArg = this._queryArg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profileId = undefined;
      this._queryArg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profileId = value.profileId;
      this._queryArg = value.queryArg;
    }
  }

  // profile_id - computed: false, optional: false, required: true
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // query_arg - computed: false, optional: false, required: true
  private _queryArg?: string; 
  public get queryArg() {
    return this.getStringAttribute('query_arg');
  }
  public set queryArg(value: string) {
    this._queryArg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgInput() {
    return this._queryArg;
  }
}

export class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList extends cdktf.ComplexList {
  public internalValue? : CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | cdktf.IResolvable

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
  public get(index: number): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference {
    return new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles {
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#items CloudfrontFieldLevelEncryptionConfig#items}
  */
  readonly items?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | cdktf.IResolvable;
}

export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToTerraform, true)(struct!.items),
  }
}


export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "set",
      storageClassType: "CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItemsList(this, "items", true);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#forward_when_query_arg_profile_is_unknown CloudfrontFieldLevelEncryptionConfig#forward_when_query_arg_profile_is_unknown}
  */
  readonly forwardWhenQueryArgProfileIsUnknown: boolean | cdktf.IResolvable;
  /**
  * query_arg_profiles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#query_arg_profiles CloudfrontFieldLevelEncryptionConfig#query_arg_profiles}
  */
  readonly queryArgProfiles?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles;
}

export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_when_query_arg_profile_is_unknown: cdktf.booleanToTerraform(struct!.forwardWhenQueryArgProfileIsUnknown),
    query_arg_profiles: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToTerraform(struct!.queryArgProfiles),
  }
}


export function cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform(struct?: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference | CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_when_query_arg_profile_is_unknown: {
      value: cdktf.booleanToHclTerraform(struct!.forwardWhenQueryArgProfileIsUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_arg_profiles: {
      value: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesToHclTerraform(struct!.queryArgProfiles),
      isBlock: true,
      type: "list",
      storageClassType: "CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardWhenQueryArgProfileIsUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardWhenQueryArgProfileIsUnknown = this._forwardWhenQueryArgProfileIsUnknown;
    }
    if (this._queryArgProfiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryArgProfiles = this._queryArgProfiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardWhenQueryArgProfileIsUnknown = undefined;
      this._queryArgProfiles.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardWhenQueryArgProfileIsUnknown = value.forwardWhenQueryArgProfileIsUnknown;
      this._queryArgProfiles.internalValue = value.queryArgProfiles;
    }
  }

  // forward_when_query_arg_profile_is_unknown - computed: false, optional: false, required: true
  private _forwardWhenQueryArgProfileIsUnknown?: boolean | cdktf.IResolvable; 
  public get forwardWhenQueryArgProfileIsUnknown() {
    return this.getBooleanAttribute('forward_when_query_arg_profile_is_unknown');
  }
  public set forwardWhenQueryArgProfileIsUnknown(value: boolean | cdktf.IResolvable) {
    this._forwardWhenQueryArgProfileIsUnknown = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardWhenQueryArgProfileIsUnknownInput() {
    return this._forwardWhenQueryArgProfileIsUnknown;
  }

  // query_arg_profiles - computed: false, optional: true, required: false
  private _queryArgProfiles = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfilesOutputReference(this, "query_arg_profiles");
  public get queryArgProfiles() {
    return this._queryArgProfiles;
  }
  public putQueryArgProfiles(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigQueryArgProfiles) {
    this._queryArgProfiles.internalValue = value;
  }
  public resetQueryArgProfiles() {
    this._queryArgProfiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgProfilesInput() {
    return this._queryArgProfiles.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config}
*/
export class CloudfrontFieldLevelEncryptionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_cloudfront_field_level_encryption_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudfrontFieldLevelEncryptionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudfrontFieldLevelEncryptionConfig to import
  * @param importFromId The id of the existing CloudfrontFieldLevelEncryptionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudfrontFieldLevelEncryptionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_cloudfront_field_level_encryption_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/cloudfront_field_level_encryption_config aws_cloudfront_field_level_encryption_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontFieldLevelEncryptionConfigConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontFieldLevelEncryptionConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_field_level_encryption_config',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '6.4.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._id = config.id;
    this._contentTypeProfileConfig.internalValue = config.contentTypeProfileConfig;
    this._queryArgProfileConfig.internalValue = config.queryArgProfileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // caller_reference - computed: true, optional: false, required: false
  public get callerReference() {
    return this.getStringAttribute('caller_reference');
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // content_type_profile_config - computed: false, optional: false, required: true
  private _contentTypeProfileConfig = new CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigOutputReference(this, "content_type_profile_config");
  public get contentTypeProfileConfig() {
    return this._contentTypeProfileConfig;
  }
  public putContentTypeProfileConfig(value: CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfig) {
    this._contentTypeProfileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeProfileConfigInput() {
    return this._contentTypeProfileConfig.internalValue;
  }

  // query_arg_profile_config - computed: false, optional: false, required: true
  private _queryArgProfileConfig = new CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigOutputReference(this, "query_arg_profile_config");
  public get queryArgProfileConfig() {
    return this._queryArgProfileConfig;
  }
  public putQueryArgProfileConfig(value: CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfig) {
    this._queryArgProfileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryArgProfileConfigInput() {
    return this._queryArgProfileConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      content_type_profile_config: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToTerraform(this._contentTypeProfileConfig.internalValue),
      query_arg_profile_config: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToTerraform(this._queryArgProfileConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type_profile_config: {
        value: cloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigToHclTerraform(this._contentTypeProfileConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontFieldLevelEncryptionConfigContentTypeProfileConfigList",
      },
      query_arg_profile_config: {
        value: cloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigToHclTerraform(this._queryArgProfileConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudfrontFieldLevelEncryptionConfigQueryArgProfileConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
