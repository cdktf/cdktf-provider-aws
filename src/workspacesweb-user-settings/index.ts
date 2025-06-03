/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceswebUserSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#additional_encryption_context WorkspaceswebUserSettings#additional_encryption_context}
  */
  readonly additionalEncryptionContext?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#copy_allowed WorkspaceswebUserSettings#copy_allowed}
  */
  readonly copyAllowed: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#customer_managed_key WorkspaceswebUserSettings#customer_managed_key}
  */
  readonly customerManagedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#deep_link_allowed WorkspaceswebUserSettings#deep_link_allowed}
  */
  readonly deepLinkAllowed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#disconnect_timeout_in_minutes WorkspaceswebUserSettings#disconnect_timeout_in_minutes}
  */
  readonly disconnectTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#download_allowed WorkspaceswebUserSettings#download_allowed}
  */
  readonly downloadAllowed: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#idle_disconnect_timeout_in_minutes WorkspaceswebUserSettings#idle_disconnect_timeout_in_minutes}
  */
  readonly idleDisconnectTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#paste_allowed WorkspaceswebUserSettings#paste_allowed}
  */
  readonly pasteAllowed: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#print_allowed WorkspaceswebUserSettings#print_allowed}
  */
  readonly printAllowed: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#tags WorkspaceswebUserSettings#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#upload_allowed WorkspaceswebUserSettings#upload_allowed}
  */
  readonly uploadAllowed: string;
  /**
  * cookie_synchronization_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#cookie_synchronization_configuration WorkspaceswebUserSettings#cookie_synchronization_configuration}
  */
  readonly cookieSynchronizationConfiguration?: WorkspaceswebUserSettingsCookieSynchronizationConfiguration[] | cdktf.IResolvable;
  /**
  * toolbar_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#toolbar_configuration WorkspaceswebUserSettings#toolbar_configuration}
  */
  readonly toolbarConfiguration?: WorkspaceswebUserSettingsToolbarConfiguration[] | cdktf.IResolvable;
}
export interface WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}
  */
  readonly path?: string;
}

export function workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToHclTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._path = value.path;
    }
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

  // name - computed: false, optional: true, required: false
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference {
    return new WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#domain WorkspaceswebUserSettings#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#name WorkspaceswebUserSettings#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#path WorkspaceswebUserSettings#path}
  */
  readonly path?: string;
}

export function workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToHclTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._name = value.name;
      this._path = value.path;
    }
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

  // name - computed: false, optional: true, required: false
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference {
    return new WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceswebUserSettingsCookieSynchronizationConfiguration {
  /**
  * allowlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#allowlist WorkspaceswebUserSettings#allowlist}
  */
  readonly allowlist?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[] | cdktf.IResolvable;
  /**
  * blocklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#blocklist WorkspaceswebUserSettings#blocklist}
  */
  readonly blocklist?: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[] | cdktf.IResolvable;
}

export function workspaceswebUserSettingsCookieSynchronizationConfigurationToTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlist: cdktf.listMapper(workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToTerraform, true)(struct!.allowlist),
    blocklist: cdktf.listMapper(workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToTerraform, true)(struct!.blocklist),
  }
}


export function workspaceswebUserSettingsCookieSynchronizationConfigurationToHclTerraform(struct?: WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlist: {
      value: cdktf.listMapperHcl(workspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructToHclTerraform, true)(struct!.allowlist),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList",
    },
    blocklist: {
      value: cdktf.listMapperHcl(workspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructToHclTerraform, true)(struct!.blocklist),
      isBlock: true,
      type: "list",
      storageClassType: "WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlist = this._allowlist?.internalValue;
    }
    if (this._blocklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocklist = this._blocklist?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebUserSettingsCookieSynchronizationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowlist.internalValue = undefined;
      this._blocklist.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowlist.internalValue = value.allowlist;
      this._blocklist.internalValue = value.blocklist;
    }
  }

  // allowlist - computed: false, optional: true, required: false
  private _allowlist = new WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStructList(this, "allowlist", false);
  public get allowlist() {
    return this._allowlist;
  }
  public putAllowlist(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationAllowlistStruct[] | cdktf.IResolvable) {
    this._allowlist.internalValue = value;
  }
  public resetAllowlist() {
    this._allowlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist.internalValue;
  }

  // blocklist - computed: false, optional: true, required: false
  private _blocklist = new WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStructList(this, "blocklist", false);
  public get blocklist() {
    return this._blocklist;
  }
  public putBlocklist(value: WorkspaceswebUserSettingsCookieSynchronizationConfigurationBlocklistStruct[] | cdktf.IResolvable) {
    this._blocklist.internalValue = value;
  }
  public resetBlocklist() {
    this._blocklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocklistInput() {
    return this._blocklist.internalValue;
  }
}

export class WorkspaceswebUserSettingsCookieSynchronizationConfigurationList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebUserSettingsCookieSynchronizationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference {
    return new WorkspaceswebUserSettingsCookieSynchronizationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceswebUserSettingsToolbarConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#hidden_toolbar_items WorkspaceswebUserSettings#hidden_toolbar_items}
  */
  readonly hiddenToolbarItems?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#max_display_resolution WorkspaceswebUserSettings#max_display_resolution}
  */
  readonly maxDisplayResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#toolbar_type WorkspaceswebUserSettings#toolbar_type}
  */
  readonly toolbarType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#visual_mode WorkspaceswebUserSettings#visual_mode}
  */
  readonly visualMode?: string;
}

export function workspaceswebUserSettingsToolbarConfigurationToTerraform(struct?: WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hidden_toolbar_items: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hiddenToolbarItems),
    max_display_resolution: cdktf.stringToTerraform(struct!.maxDisplayResolution),
    toolbar_type: cdktf.stringToTerraform(struct!.toolbarType),
    visual_mode: cdktf.stringToTerraform(struct!.visualMode),
  }
}


export function workspaceswebUserSettingsToolbarConfigurationToHclTerraform(struct?: WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hidden_toolbar_items: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hiddenToolbarItems),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_display_resolution: {
      value: cdktf.stringToHclTerraform(struct!.maxDisplayResolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toolbar_type: {
      value: cdktf.stringToHclTerraform(struct!.toolbarType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visual_mode: {
      value: cdktf.stringToHclTerraform(struct!.visualMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceswebUserSettingsToolbarConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hiddenToolbarItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiddenToolbarItems = this._hiddenToolbarItems;
    }
    if (this._maxDisplayResolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDisplayResolution = this._maxDisplayResolution;
    }
    if (this._toolbarType !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolbarType = this._toolbarType;
    }
    if (this._visualMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.visualMode = this._visualMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceswebUserSettingsToolbarConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hiddenToolbarItems = undefined;
      this._maxDisplayResolution = undefined;
      this._toolbarType = undefined;
      this._visualMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hiddenToolbarItems = value.hiddenToolbarItems;
      this._maxDisplayResolution = value.maxDisplayResolution;
      this._toolbarType = value.toolbarType;
      this._visualMode = value.visualMode;
    }
  }

  // hidden_toolbar_items - computed: false, optional: true, required: false
  private _hiddenToolbarItems?: string[]; 
  public get hiddenToolbarItems() {
    return this.getListAttribute('hidden_toolbar_items');
  }
  public set hiddenToolbarItems(value: string[]) {
    this._hiddenToolbarItems = value;
  }
  public resetHiddenToolbarItems() {
    this._hiddenToolbarItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiddenToolbarItemsInput() {
    return this._hiddenToolbarItems;
  }

  // max_display_resolution - computed: false, optional: true, required: false
  private _maxDisplayResolution?: string; 
  public get maxDisplayResolution() {
    return this.getStringAttribute('max_display_resolution');
  }
  public set maxDisplayResolution(value: string) {
    this._maxDisplayResolution = value;
  }
  public resetMaxDisplayResolution() {
    this._maxDisplayResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDisplayResolutionInput() {
    return this._maxDisplayResolution;
  }

  // toolbar_type - computed: false, optional: true, required: false
  private _toolbarType?: string; 
  public get toolbarType() {
    return this.getStringAttribute('toolbar_type');
  }
  public set toolbarType(value: string) {
    this._toolbarType = value;
  }
  public resetToolbarType() {
    this._toolbarType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolbarTypeInput() {
    return this._toolbarType;
  }

  // visual_mode - computed: false, optional: true, required: false
  private _visualMode?: string; 
  public get visualMode() {
    return this.getStringAttribute('visual_mode');
  }
  public set visualMode(value: string) {
    this._visualMode = value;
  }
  public resetVisualMode() {
    this._visualMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visualModeInput() {
    return this._visualMode;
  }
}

export class WorkspaceswebUserSettingsToolbarConfigurationList extends cdktf.ComplexList {
  public internalValue? : WorkspaceswebUserSettingsToolbarConfiguration[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceswebUserSettingsToolbarConfigurationOutputReference {
    return new WorkspaceswebUserSettingsToolbarConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings aws_workspacesweb_user_settings}
*/
export class WorkspaceswebUserSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_workspacesweb_user_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceswebUserSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceswebUserSettings to import
  * @param importFromId The id of the existing WorkspaceswebUserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceswebUserSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aws_workspacesweb_user_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/workspacesweb_user_settings aws_workspacesweb_user_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceswebUserSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceswebUserSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_workspacesweb_user_settings',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.99.1',
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
    this._additionalEncryptionContext = config.additionalEncryptionContext;
    this._copyAllowed = config.copyAllowed;
    this._customerManagedKey = config.customerManagedKey;
    this._deepLinkAllowed = config.deepLinkAllowed;
    this._disconnectTimeoutInMinutes = config.disconnectTimeoutInMinutes;
    this._downloadAllowed = config.downloadAllowed;
    this._idleDisconnectTimeoutInMinutes = config.idleDisconnectTimeoutInMinutes;
    this._pasteAllowed = config.pasteAllowed;
    this._printAllowed = config.printAllowed;
    this._tags = config.tags;
    this._uploadAllowed = config.uploadAllowed;
    this._cookieSynchronizationConfiguration.internalValue = config.cookieSynchronizationConfiguration;
    this._toolbarConfiguration.internalValue = config.toolbarConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_encryption_context - computed: false, optional: true, required: false
  private _additionalEncryptionContext?: { [key: string]: string }; 
  public get additionalEncryptionContext() {
    return this.getStringMapAttribute('additional_encryption_context');
  }
  public set additionalEncryptionContext(value: { [key: string]: string }) {
    this._additionalEncryptionContext = value;
  }
  public resetAdditionalEncryptionContext() {
    this._additionalEncryptionContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEncryptionContextInput() {
    return this._additionalEncryptionContext;
  }

  // associated_portal_arns - computed: true, optional: false, required: false
  public get associatedPortalArns() {
    return this.getListAttribute('associated_portal_arns');
  }

  // copy_allowed - computed: false, optional: false, required: true
  private _copyAllowed?: string; 
  public get copyAllowed() {
    return this.getStringAttribute('copy_allowed');
  }
  public set copyAllowed(value: string) {
    this._copyAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get copyAllowedInput() {
    return this._copyAllowed;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey?: string; 
  public get customerManagedKey() {
    return this.getStringAttribute('customer_managed_key');
  }
  public set customerManagedKey(value: string) {
    this._customerManagedKey = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey;
  }

  // deep_link_allowed - computed: true, optional: true, required: false
  private _deepLinkAllowed?: string; 
  public get deepLinkAllowed() {
    return this.getStringAttribute('deep_link_allowed');
  }
  public set deepLinkAllowed(value: string) {
    this._deepLinkAllowed = value;
  }
  public resetDeepLinkAllowed() {
    this._deepLinkAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deepLinkAllowedInput() {
    return this._deepLinkAllowed;
  }

  // disconnect_timeout_in_minutes - computed: false, optional: true, required: false
  private _disconnectTimeoutInMinutes?: number; 
  public get disconnectTimeoutInMinutes() {
    return this.getNumberAttribute('disconnect_timeout_in_minutes');
  }
  public set disconnectTimeoutInMinutes(value: number) {
    this._disconnectTimeoutInMinutes = value;
  }
  public resetDisconnectTimeoutInMinutes() {
    this._disconnectTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectTimeoutInMinutesInput() {
    return this._disconnectTimeoutInMinutes;
  }

  // download_allowed - computed: false, optional: false, required: true
  private _downloadAllowed?: string; 
  public get downloadAllowed() {
    return this.getStringAttribute('download_allowed');
  }
  public set downloadAllowed(value: string) {
    this._downloadAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadAllowedInput() {
    return this._downloadAllowed;
  }

  // idle_disconnect_timeout_in_minutes - computed: false, optional: true, required: false
  private _idleDisconnectTimeoutInMinutes?: number; 
  public get idleDisconnectTimeoutInMinutes() {
    return this.getNumberAttribute('idle_disconnect_timeout_in_minutes');
  }
  public set idleDisconnectTimeoutInMinutes(value: number) {
    this._idleDisconnectTimeoutInMinutes = value;
  }
  public resetIdleDisconnectTimeoutInMinutes() {
    this._idleDisconnectTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleDisconnectTimeoutInMinutesInput() {
    return this._idleDisconnectTimeoutInMinutes;
  }

  // paste_allowed - computed: false, optional: false, required: true
  private _pasteAllowed?: string; 
  public get pasteAllowed() {
    return this.getStringAttribute('paste_allowed');
  }
  public set pasteAllowed(value: string) {
    this._pasteAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pasteAllowedInput() {
    return this._pasteAllowed;
  }

  // print_allowed - computed: false, optional: false, required: true
  private _printAllowed?: string; 
  public get printAllowed() {
    return this.getStringAttribute('print_allowed');
  }
  public set printAllowed(value: string) {
    this._printAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get printAllowedInput() {
    return this._printAllowed;
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

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // upload_allowed - computed: false, optional: false, required: true
  private _uploadAllowed?: string; 
  public get uploadAllowed() {
    return this.getStringAttribute('upload_allowed');
  }
  public set uploadAllowed(value: string) {
    this._uploadAllowed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadAllowedInput() {
    return this._uploadAllowed;
  }

  // user_settings_arn - computed: true, optional: false, required: false
  public get userSettingsArn() {
    return this.getStringAttribute('user_settings_arn');
  }

  // cookie_synchronization_configuration - computed: false, optional: true, required: false
  private _cookieSynchronizationConfiguration = new WorkspaceswebUserSettingsCookieSynchronizationConfigurationList(this, "cookie_synchronization_configuration", false);
  public get cookieSynchronizationConfiguration() {
    return this._cookieSynchronizationConfiguration;
  }
  public putCookieSynchronizationConfiguration(value: WorkspaceswebUserSettingsCookieSynchronizationConfiguration[] | cdktf.IResolvable) {
    this._cookieSynchronizationConfiguration.internalValue = value;
  }
  public resetCookieSynchronizationConfiguration() {
    this._cookieSynchronizationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSynchronizationConfigurationInput() {
    return this._cookieSynchronizationConfiguration.internalValue;
  }

  // toolbar_configuration - computed: false, optional: true, required: false
  private _toolbarConfiguration = new WorkspaceswebUserSettingsToolbarConfigurationList(this, "toolbar_configuration", false);
  public get toolbarConfiguration() {
    return this._toolbarConfiguration;
  }
  public putToolbarConfiguration(value: WorkspaceswebUserSettingsToolbarConfiguration[] | cdktf.IResolvable) {
    this._toolbarConfiguration.internalValue = value;
  }
  public resetToolbarConfiguration() {
    this._toolbarConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolbarConfigurationInput() {
    return this._toolbarConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_encryption_context: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalEncryptionContext),
      copy_allowed: cdktf.stringToTerraform(this._copyAllowed),
      customer_managed_key: cdktf.stringToTerraform(this._customerManagedKey),
      deep_link_allowed: cdktf.stringToTerraform(this._deepLinkAllowed),
      disconnect_timeout_in_minutes: cdktf.numberToTerraform(this._disconnectTimeoutInMinutes),
      download_allowed: cdktf.stringToTerraform(this._downloadAllowed),
      idle_disconnect_timeout_in_minutes: cdktf.numberToTerraform(this._idleDisconnectTimeoutInMinutes),
      paste_allowed: cdktf.stringToTerraform(this._pasteAllowed),
      print_allowed: cdktf.stringToTerraform(this._printAllowed),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      upload_allowed: cdktf.stringToTerraform(this._uploadAllowed),
      cookie_synchronization_configuration: cdktf.listMapper(workspaceswebUserSettingsCookieSynchronizationConfigurationToTerraform, true)(this._cookieSynchronizationConfiguration.internalValue),
      toolbar_configuration: cdktf.listMapper(workspaceswebUserSettingsToolbarConfigurationToTerraform, true)(this._toolbarConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_encryption_context: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalEncryptionContext),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      copy_allowed: {
        value: cdktf.stringToHclTerraform(this._copyAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key: {
        value: cdktf.stringToHclTerraform(this._customerManagedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deep_link_allowed: {
        value: cdktf.stringToHclTerraform(this._deepLinkAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disconnect_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._disconnectTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      download_allowed: {
        value: cdktf.stringToHclTerraform(this._downloadAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_disconnect_timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._idleDisconnectTimeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paste_allowed: {
        value: cdktf.stringToHclTerraform(this._pasteAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      print_allowed: {
        value: cdktf.stringToHclTerraform(this._printAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      upload_allowed: {
        value: cdktf.stringToHclTerraform(this._uploadAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_synchronization_configuration: {
        value: cdktf.listMapperHcl(workspaceswebUserSettingsCookieSynchronizationConfigurationToHclTerraform, true)(this._cookieSynchronizationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceswebUserSettingsCookieSynchronizationConfigurationList",
      },
      toolbar_configuration: {
        value: cdktf.listMapperHcl(workspaceswebUserSettingsToolbarConfigurationToHclTerraform, true)(this._toolbarConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceswebUserSettingsToolbarConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
