// https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LightsailDistributionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The bundle ID to use for the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}
  */
  readonly bundleId: string;
  /**
  * The name of the SSL/TLS certificate attached to the distribution, if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#id LightsailDistribution#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address type of the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}
  */
  readonly ipAddressType?: string;
  /**
  * Indicates whether the distribution is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#name LightsailDistribution#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#tags_all LightsailDistribution#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#cache_behavior LightsailDistribution#cache_behavior}
  */
  readonly cacheBehavior?: LightsailDistributionCacheBehavior[] | cdktf.IResolvable;
  /**
  * cache_behavior_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}
  */
  readonly cacheBehaviorSettings?: LightsailDistributionCacheBehaviorSettings;
  /**
  * default_cache_behavior block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}
  */
  readonly defaultCacheBehavior: LightsailDistributionDefaultCacheBehavior;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#origin LightsailDistribution#origin}
  */
  readonly origin: LightsailDistributionOrigin;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#timeouts LightsailDistribution#timeouts}
  */
  readonly timeouts?: LightsailDistributionTimeouts;
}
export interface LightsailDistributionLocation {
}

export function lightsailDistributionLocationToTerraform(struct?: LightsailDistributionLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class LightsailDistributionLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LightsailDistributionLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
}

export class LightsailDistributionLocationList extends cdktf.ComplexList {

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
  public get(index: number): LightsailDistributionLocationOutputReference {
    return new LightsailDistributionLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LightsailDistributionCacheBehavior {
  /**
  * The cache behavior for the specified path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}
  */
  readonly behavior: string;
  /**
  * The path to a directory or file to cached, or not cache. Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#path LightsailDistribution#path}
  */
  readonly path: string;
}

export function lightsailDistributionCacheBehaviorToTerraform(struct?: LightsailDistributionCacheBehavior | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    path: cdktf.stringToTerraform(struct!.path),
  }
}

export class LightsailDistributionCacheBehaviorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LightsailDistributionCacheBehavior | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionCacheBehavior | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._path = value.path;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class LightsailDistributionCacheBehaviorList extends cdktf.ComplexList {
  public internalValue? : LightsailDistributionCacheBehavior[] | cdktf.IResolvable

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
  public get(index: number): LightsailDistributionCacheBehaviorOutputReference {
    return new LightsailDistributionCacheBehaviorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LightsailDistributionCacheBehaviorSettingsForwardedCookies {
  /**
  * The specific cookies to forward to your distribution's origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}
  */
  readonly cookiesAllowList?: string[];
  /**
  * Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#option LightsailDistribution#option}
  */
  readonly option?: string;
}

export function lightsailDistributionCacheBehaviorSettingsForwardedCookiesToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookies_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cookiesAllowList),
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export class LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailDistributionCacheBehaviorSettingsForwardedCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookiesAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookiesAllowList = this._cookiesAllowList;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionCacheBehaviorSettingsForwardedCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookiesAllowList = undefined;
      this._option = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookiesAllowList = value.cookiesAllowList;
      this._option = value.option;
    }
  }

  // cookies_allow_list - computed: false, optional: true, required: false
  private _cookiesAllowList?: string[]; 
  public get cookiesAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('cookies_allow_list'));
  }
  public set cookiesAllowList(value: string[]) {
    this._cookiesAllowList = value;
  }
  public resetCookiesAllowList() {
    this._cookiesAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesAllowListInput() {
    return this._cookiesAllowList;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}
export interface LightsailDistributionCacheBehaviorSettingsForwardedHeaders {
  /**
  * The specific headers to forward to your distribution's origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}
  */
  readonly headersAllowList?: string[];
  /**
  * The headers that you want your distribution to forward to your origin and base caching on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#option LightsailDistribution#option}
  */
  readonly option?: string;
}

export function lightsailDistributionCacheBehaviorSettingsForwardedHeadersToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers_allow_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headersAllowList),
    option: cdktf.stringToTerraform(struct!.option),
  }
}

export class LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailDistributionCacheBehaviorSettingsForwardedHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headersAllowList !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersAllowList = this._headersAllowList;
    }
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionCacheBehaviorSettingsForwardedHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headersAllowList = undefined;
      this._option = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headersAllowList = value.headersAllowList;
      this._option = value.option;
    }
  }

  // headers_allow_list - computed: false, optional: true, required: false
  private _headersAllowList?: string[]; 
  public get headersAllowList() {
    return cdktf.Fn.tolist(this.getListAttribute('headers_allow_list'));
  }
  public set headersAllowList(value: string[]) {
    this._headersAllowList = value;
  }
  public resetHeadersAllowList() {
    this._headersAllowList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersAllowListInput() {
    return this._headersAllowList;
  }

  // option - computed: false, optional: true, required: false
  private _option?: string; 
  public get option() {
    return this.getStringAttribute('option');
  }
  public set option(value: string) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }
}
export interface LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings {
  /**
  * Indicates whether the distribution forwards and caches based on query strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#option LightsailDistribution#option}
  */
  readonly option?: boolean | cdktf.IResolvable;
  /**
  * The specific query strings that the distribution forwards to the origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#query_strings_allowed_list LightsailDistribution#query_strings_allowed_list}
  */
  readonly queryStringsAllowedList?: string[];
}

export function lightsailDistributionCacheBehaviorSettingsForwardedQueryStringsToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference | LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    option: cdktf.booleanToTerraform(struct!.option),
    query_strings_allowed_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.queryStringsAllowedList),
  }
}

export class LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._option !== undefined) {
      hasAnyValues = true;
      internalValueResult.option = this._option;
    }
    if (this._queryStringsAllowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringsAllowedList = this._queryStringsAllowedList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._option = undefined;
      this._queryStringsAllowedList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._option = value.option;
      this._queryStringsAllowedList = value.queryStringsAllowedList;
    }
  }

  // option - computed: false, optional: true, required: false
  private _option?: boolean | cdktf.IResolvable; 
  public get option() {
    return this.getBooleanAttribute('option');
  }
  public set option(value: boolean | cdktf.IResolvable) {
    this._option = value;
  }
  public resetOption() {
    this._option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionInput() {
    return this._option;
  }

  // query_strings_allowed_list - computed: false, optional: true, required: false
  private _queryStringsAllowedList?: string[]; 
  public get queryStringsAllowedList() {
    return cdktf.Fn.tolist(this.getListAttribute('query_strings_allowed_list'));
  }
  public set queryStringsAllowedList(value: string[]) {
    this._queryStringsAllowedList = value;
  }
  public resetQueryStringsAllowedList() {
    this._queryStringsAllowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringsAllowedListInput() {
    return this._queryStringsAllowedList;
  }
}
export interface LightsailDistributionCacheBehaviorSettings {
  /**
  * The HTTP methods that are processed and forwarded to the distribution's origin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}
  */
  readonly allowedHttpMethods?: string;
  /**
  * The HTTP method responses that are cached by your distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}
  */
  readonly cachedHttpMethods?: string;
  /**
  * The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}
  */
  readonly maximumTtl?: number;
  /**
  * The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}
  */
  readonly minimumTtl?: number;
  /**
  * forwarded_cookies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}
  */
  readonly forwardedCookies?: LightsailDistributionCacheBehaviorSettingsForwardedCookies;
  /**
  * forwarded_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}
  */
  readonly forwardedHeaders?: LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
  /**
  * forwarded_query_strings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}
  */
  readonly forwardedQueryStrings?: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
}

export function lightsailDistributionCacheBehaviorSettingsToTerraform(struct?: LightsailDistributionCacheBehaviorSettingsOutputReference | LightsailDistributionCacheBehaviorSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_methods: cdktf.stringToTerraform(struct!.allowedHttpMethods),
    cached_http_methods: cdktf.stringToTerraform(struct!.cachedHttpMethods),
    default_ttl: cdktf.numberToTerraform(struct!.defaultTtl),
    maximum_ttl: cdktf.numberToTerraform(struct!.maximumTtl),
    minimum_ttl: cdktf.numberToTerraform(struct!.minimumTtl),
    forwarded_cookies: lightsailDistributionCacheBehaviorSettingsForwardedCookiesToTerraform(struct!.forwardedCookies),
    forwarded_headers: lightsailDistributionCacheBehaviorSettingsForwardedHeadersToTerraform(struct!.forwardedHeaders),
    forwarded_query_strings: lightsailDistributionCacheBehaviorSettingsForwardedQueryStringsToTerraform(struct!.forwardedQueryStrings),
  }
}

export class LightsailDistributionCacheBehaviorSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailDistributionCacheBehaviorSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpMethods = this._allowedHttpMethods;
    }
    if (this._cachedHttpMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachedHttpMethods = this._cachedHttpMethods;
    }
    if (this._defaultTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTtl = this._defaultTtl;
    }
    if (this._maximumTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumTtl = this._maximumTtl;
    }
    if (this._minimumTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumTtl = this._minimumTtl;
    }
    if (this._forwardedCookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedCookies = this._forwardedCookies?.internalValue;
    }
    if (this._forwardedHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedHeaders = this._forwardedHeaders?.internalValue;
    }
    if (this._forwardedQueryStrings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedQueryStrings = this._forwardedQueryStrings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionCacheBehaviorSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHttpMethods = undefined;
      this._cachedHttpMethods = undefined;
      this._defaultTtl = undefined;
      this._maximumTtl = undefined;
      this._minimumTtl = undefined;
      this._forwardedCookies.internalValue = undefined;
      this._forwardedHeaders.internalValue = undefined;
      this._forwardedQueryStrings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHttpMethods = value.allowedHttpMethods;
      this._cachedHttpMethods = value.cachedHttpMethods;
      this._defaultTtl = value.defaultTtl;
      this._maximumTtl = value.maximumTtl;
      this._minimumTtl = value.minimumTtl;
      this._forwardedCookies.internalValue = value.forwardedCookies;
      this._forwardedHeaders.internalValue = value.forwardedHeaders;
      this._forwardedQueryStrings.internalValue = value.forwardedQueryStrings;
    }
  }

  // allowed_http_methods - computed: false, optional: true, required: false
  private _allowedHttpMethods?: string; 
  public get allowedHttpMethods() {
    return this.getStringAttribute('allowed_http_methods');
  }
  public set allowedHttpMethods(value: string) {
    this._allowedHttpMethods = value;
  }
  public resetAllowedHttpMethods() {
    this._allowedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpMethodsInput() {
    return this._allowedHttpMethods;
  }

  // cached_http_methods - computed: false, optional: true, required: false
  private _cachedHttpMethods?: string; 
  public get cachedHttpMethods() {
    return this.getStringAttribute('cached_http_methods');
  }
  public set cachedHttpMethods(value: string) {
    this._cachedHttpMethods = value;
  }
  public resetCachedHttpMethods() {
    this._cachedHttpMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachedHttpMethodsInput() {
    return this._cachedHttpMethods;
  }

  // default_ttl - computed: false, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // maximum_ttl - computed: false, optional: true, required: false
  private _maximumTtl?: number; 
  public get maximumTtl() {
    return this.getNumberAttribute('maximum_ttl');
  }
  public set maximumTtl(value: number) {
    this._maximumTtl = value;
  }
  public resetMaximumTtl() {
    this._maximumTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumTtlInput() {
    return this._maximumTtl;
  }

  // minimum_ttl - computed: false, optional: true, required: false
  private _minimumTtl?: number; 
  public get minimumTtl() {
    return this.getNumberAttribute('minimum_ttl');
  }
  public set minimumTtl(value: number) {
    this._minimumTtl = value;
  }
  public resetMinimumTtl() {
    this._minimumTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumTtlInput() {
    return this._minimumTtl;
  }

  // forwarded_cookies - computed: false, optional: true, required: false
  private _forwardedCookies = new LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(this, "forwarded_cookies");
  public get forwardedCookies() {
    return this._forwardedCookies;
  }
  public putForwardedCookies(value: LightsailDistributionCacheBehaviorSettingsForwardedCookies) {
    this._forwardedCookies.internalValue = value;
  }
  public resetForwardedCookies() {
    this._forwardedCookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedCookiesInput() {
    return this._forwardedCookies.internalValue;
  }

  // forwarded_headers - computed: false, optional: true, required: false
  private _forwardedHeaders = new LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(this, "forwarded_headers");
  public get forwardedHeaders() {
    return this._forwardedHeaders;
  }
  public putForwardedHeaders(value: LightsailDistributionCacheBehaviorSettingsForwardedHeaders) {
    this._forwardedHeaders.internalValue = value;
  }
  public resetForwardedHeaders() {
    this._forwardedHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedHeadersInput() {
    return this._forwardedHeaders.internalValue;
  }

  // forwarded_query_strings - computed: false, optional: true, required: false
  private _forwardedQueryStrings = new LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(this, "forwarded_query_strings");
  public get forwardedQueryStrings() {
    return this._forwardedQueryStrings;
  }
  public putForwardedQueryStrings(value: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings) {
    this._forwardedQueryStrings.internalValue = value;
  }
  public resetForwardedQueryStrings() {
    this._forwardedQueryStrings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedQueryStringsInput() {
    return this._forwardedQueryStrings.internalValue;
  }
}
export interface LightsailDistributionDefaultCacheBehavior {
  /**
  * The cache behavior of the distribution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}
  */
  readonly behavior: string;
}

export function lightsailDistributionDefaultCacheBehaviorToTerraform(struct?: LightsailDistributionDefaultCacheBehaviorOutputReference | LightsailDistributionDefaultCacheBehavior): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}

export class LightsailDistributionDefaultCacheBehaviorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailDistributionDefaultCacheBehavior | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionDefaultCacheBehavior | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._behavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._behavior = value.behavior;
    }
  }

  // behavior - computed: false, optional: false, required: true
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}
export interface LightsailDistributionOrigin {
  /**
  * The name of the origin resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#name LightsailDistribution#name}
  */
  readonly name: string;
  /**
  * The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}
  */
  readonly protocolPolicy?: string;
  /**
  * The AWS Region name of the origin resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#region_name LightsailDistribution#region_name}
  */
  readonly regionName: string;
}

export function lightsailDistributionOriginToTerraform(struct?: LightsailDistributionOriginOutputReference | LightsailDistributionOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    protocol_policy: cdktf.stringToTerraform(struct!.protocolPolicy),
    region_name: cdktf.stringToTerraform(struct!.regionName),
  }
}

export class LightsailDistributionOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LightsailDistributionOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocolPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPolicy = this._protocolPolicy;
    }
    if (this._regionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionName = this._regionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LightsailDistributionOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._protocolPolicy = undefined;
      this._regionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._protocolPolicy = value.protocolPolicy;
      this._regionName = value.regionName;
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

  // protocol_policy - computed: false, optional: true, required: false
  private _protocolPolicy?: string; 
  public get protocolPolicy() {
    return this.getStringAttribute('protocol_policy');
  }
  public set protocolPolicy(value: string) {
    this._protocolPolicy = value;
  }
  public resetProtocolPolicy() {
    this._protocolPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPolicyInput() {
    return this._protocolPolicy;
  }

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}
export interface LightsailDistributionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#create LightsailDistribution#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#delete LightsailDistribution#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution#update LightsailDistribution#update}
  */
  readonly update?: string;
}

export function lightsailDistributionTimeoutsToTerraform(struct?: LightsailDistributionTimeouts | cdktf.IResolvable): any {
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

export class LightsailDistributionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LightsailDistributionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LightsailDistributionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution aws_lightsail_distribution}
*/
export class LightsailDistribution extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_lightsail_distribution";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.20.1/docs/resources/lightsail_distribution aws_lightsail_distribution} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LightsailDistributionConfig
  */
  public constructor(scope: Construct, id: string, config: LightsailDistributionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_lightsail_distribution',
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
    this._bundleId = config.bundleId;
    this._certificateName = config.certificateName;
    this._id = config.id;
    this._ipAddressType = config.ipAddressType;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._cacheBehavior.internalValue = config.cacheBehavior;
    this._cacheBehaviorSettings.internalValue = config.cacheBehaviorSettings;
    this._defaultCacheBehavior.internalValue = config.defaultCacheBehavior;
    this._origin.internalValue = config.origin;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alternative_domain_names - computed: true, optional: false, required: false
  public get alternativeDomainNames() {
    return this.getListAttribute('alternative_domain_names');
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
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

  // ip_address_type - computed: false, optional: true, required: false
  private _ipAddressType?: string; 
  public get ipAddressType() {
    return this.getStringAttribute('ip_address_type');
  }
  public set ipAddressType(value: string) {
    this._ipAddressType = value;
  }
  public resetIpAddressType() {
    this._ipAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressTypeInput() {
    return this._ipAddressType;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // location - computed: true, optional: false, required: false
  private _location = new LightsailDistributionLocationList(this, "location", false);
  public get location() {
    return this._location;
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

  // origin_public_dns - computed: true, optional: false, required: false
  public get originPublicDns() {
    return this.getStringAttribute('origin_public_dns');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_code - computed: true, optional: false, required: false
  public get supportCode() {
    return this.getStringAttribute('support_code');
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

  // cache_behavior - computed: false, optional: true, required: false
  private _cacheBehavior = new LightsailDistributionCacheBehaviorList(this, "cache_behavior", true);
  public get cacheBehavior() {
    return this._cacheBehavior;
  }
  public putCacheBehavior(value: LightsailDistributionCacheBehavior[] | cdktf.IResolvable) {
    this._cacheBehavior.internalValue = value;
  }
  public resetCacheBehavior() {
    this._cacheBehavior.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBehaviorInput() {
    return this._cacheBehavior.internalValue;
  }

  // cache_behavior_settings - computed: false, optional: true, required: false
  private _cacheBehaviorSettings = new LightsailDistributionCacheBehaviorSettingsOutputReference(this, "cache_behavior_settings");
  public get cacheBehaviorSettings() {
    return this._cacheBehaviorSettings;
  }
  public putCacheBehaviorSettings(value: LightsailDistributionCacheBehaviorSettings) {
    this._cacheBehaviorSettings.internalValue = value;
  }
  public resetCacheBehaviorSettings() {
    this._cacheBehaviorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheBehaviorSettingsInput() {
    return this._cacheBehaviorSettings.internalValue;
  }

  // default_cache_behavior - computed: false, optional: false, required: true
  private _defaultCacheBehavior = new LightsailDistributionDefaultCacheBehaviorOutputReference(this, "default_cache_behavior");
  public get defaultCacheBehavior() {
    return this._defaultCacheBehavior;
  }
  public putDefaultCacheBehavior(value: LightsailDistributionDefaultCacheBehavior) {
    this._defaultCacheBehavior.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCacheBehaviorInput() {
    return this._defaultCacheBehavior.internalValue;
  }

  // origin - computed: false, optional: false, required: true
  private _origin = new LightsailDistributionOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: LightsailDistributionOrigin) {
    this._origin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LightsailDistributionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LightsailDistributionTimeouts) {
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
      bundle_id: cdktf.stringToTerraform(this._bundleId),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      id: cdktf.stringToTerraform(this._id),
      ip_address_type: cdktf.stringToTerraform(this._ipAddressType),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      cache_behavior: cdktf.listMapper(lightsailDistributionCacheBehaviorToTerraform, true)(this._cacheBehavior.internalValue),
      cache_behavior_settings: lightsailDistributionCacheBehaviorSettingsToTerraform(this._cacheBehaviorSettings.internalValue),
      default_cache_behavior: lightsailDistributionDefaultCacheBehaviorToTerraform(this._defaultCacheBehavior.internalValue),
      origin: lightsailDistributionOriginToTerraform(this._origin.internalValue),
      timeouts: lightsailDistributionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
