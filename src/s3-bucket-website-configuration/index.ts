// https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3BucketWebsiteConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#bucket S3BucketWebsiteConfiguration#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#expected_bucket_owner S3BucketWebsiteConfiguration#expected_bucket_owner}
  */
  readonly expectedBucketOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#id S3BucketWebsiteConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rules S3BucketWebsiteConfiguration#routing_rules}
  */
  readonly routingRules?: string;
  /**
  * error_document block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#error_document S3BucketWebsiteConfiguration#error_document}
  */
  readonly errorDocument?: S3BucketWebsiteConfigurationErrorDocument;
  /**
  * index_document block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#index_document S3BucketWebsiteConfiguration#index_document}
  */
  readonly indexDocument?: S3BucketWebsiteConfigurationIndexDocument;
  /**
  * redirect_all_requests_to block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#redirect_all_requests_to S3BucketWebsiteConfiguration#redirect_all_requests_to}
  */
  readonly redirectAllRequestsTo?: S3BucketWebsiteConfigurationRedirectAllRequestsTo;
  /**
  * routing_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#routing_rule S3BucketWebsiteConfiguration#routing_rule}
  */
  readonly routingRule?: S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable;
}
export interface S3BucketWebsiteConfigurationErrorDocument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key S3BucketWebsiteConfiguration#key}
  */
  readonly key: string;
}

export function s3BucketWebsiteConfigurationErrorDocumentToTerraform(struct?: S3BucketWebsiteConfigurationErrorDocumentOutputReference | S3BucketWebsiteConfigurationErrorDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class S3BucketWebsiteConfigurationErrorDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketWebsiteConfigurationErrorDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationErrorDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface S3BucketWebsiteConfigurationIndexDocument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#suffix S3BucketWebsiteConfiguration#suffix}
  */
  readonly suffix: string;
}

export function s3BucketWebsiteConfigurationIndexDocumentToTerraform(struct?: S3BucketWebsiteConfigurationIndexDocumentOutputReference | S3BucketWebsiteConfigurationIndexDocument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}

export class S3BucketWebsiteConfigurationIndexDocumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketWebsiteConfigurationIndexDocument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationIndexDocument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._suffix = value.suffix;
    }
  }

  // suffix - computed: false, optional: false, required: true
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface S3BucketWebsiteConfigurationRedirectAllRequestsTo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}
  */
  readonly protocol?: string;
}

export function s3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(struct?: S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference | S3BucketWebsiteConfigurationRedirectAllRequestsTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}

export class S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRedirectAllRequestsTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._protocol = value.protocol;
    }
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRuleCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_error_code_returned_equals S3BucketWebsiteConfiguration#http_error_code_returned_equals}
  */
  readonly httpErrorCodeReturnedEquals?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#key_prefix_equals S3BucketWebsiteConfiguration#key_prefix_equals}
  */
  readonly keyPrefixEquals?: string;
}

export function s3BucketWebsiteConfigurationRoutingRuleConditionToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference | S3BucketWebsiteConfigurationRoutingRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_error_code_returned_equals: cdktf.stringToTerraform(struct!.httpErrorCodeReturnedEquals),
    key_prefix_equals: cdktf.stringToTerraform(struct!.keyPrefixEquals),
  }
}

export class S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpErrorCodeReturnedEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCodeReturnedEquals = this._httpErrorCodeReturnedEquals;
    }
    if (this._keyPrefixEquals !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPrefixEquals = this._keyPrefixEquals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpErrorCodeReturnedEquals = undefined;
      this._keyPrefixEquals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpErrorCodeReturnedEquals = value.httpErrorCodeReturnedEquals;
      this._keyPrefixEquals = value.keyPrefixEquals;
    }
  }

  // http_error_code_returned_equals - computed: false, optional: true, required: false
  private _httpErrorCodeReturnedEquals?: string; 
  public get httpErrorCodeReturnedEquals() {
    return this.getStringAttribute('http_error_code_returned_equals');
  }
  public set httpErrorCodeReturnedEquals(value: string) {
    this._httpErrorCodeReturnedEquals = value;
  }
  public resetHttpErrorCodeReturnedEquals() {
    this._httpErrorCodeReturnedEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeReturnedEqualsInput() {
    return this._httpErrorCodeReturnedEquals;
  }

  // key_prefix_equals - computed: false, optional: true, required: false
  private _keyPrefixEquals?: string; 
  public get keyPrefixEquals() {
    return this.getStringAttribute('key_prefix_equals');
  }
  public set keyPrefixEquals(value: string) {
    this._keyPrefixEquals = value;
  }
  public resetKeyPrefixEquals() {
    this._keyPrefixEquals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixEqualsInput() {
    return this._keyPrefixEquals;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRuleRedirect {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#host_name S3BucketWebsiteConfiguration#host_name}
  */
  readonly hostName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#http_redirect_code S3BucketWebsiteConfiguration#http_redirect_code}
  */
  readonly httpRedirectCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#protocol S3BucketWebsiteConfiguration#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_prefix_with S3BucketWebsiteConfiguration#replace_key_prefix_with}
  */
  readonly replaceKeyPrefixWith?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#replace_key_with S3BucketWebsiteConfiguration#replace_key_with}
  */
  readonly replaceKeyWith?: string;
}

export function s3BucketWebsiteConfigurationRoutingRuleRedirectToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference | S3BucketWebsiteConfigurationRoutingRuleRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_name: cdktf.stringToTerraform(struct!.hostName),
    http_redirect_code: cdktf.stringToTerraform(struct!.httpRedirectCode),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    replace_key_prefix_with: cdktf.stringToTerraform(struct!.replaceKeyPrefixWith),
    replace_key_with: cdktf.stringToTerraform(struct!.replaceKeyWith),
  }
}

export class S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRuleRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._httpRedirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirectCode = this._httpRedirectCode;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._replaceKeyPrefixWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyPrefixWith = this._replaceKeyPrefixWith;
    }
    if (this._replaceKeyWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.replaceKeyWith = this._replaceKeyWith;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRuleRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostName = undefined;
      this._httpRedirectCode = undefined;
      this._protocol = undefined;
      this._replaceKeyPrefixWith = undefined;
      this._replaceKeyWith = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostName = value.hostName;
      this._httpRedirectCode = value.httpRedirectCode;
      this._protocol = value.protocol;
      this._replaceKeyPrefixWith = value.replaceKeyPrefixWith;
      this._replaceKeyWith = value.replaceKeyWith;
    }
  }

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // http_redirect_code - computed: false, optional: true, required: false
  private _httpRedirectCode?: string; 
  public get httpRedirectCode() {
    return this.getStringAttribute('http_redirect_code');
  }
  public set httpRedirectCode(value: string) {
    this._httpRedirectCode = value;
  }
  public resetHttpRedirectCode() {
    this._httpRedirectCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectCodeInput() {
    return this._httpRedirectCode;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // replace_key_prefix_with - computed: false, optional: true, required: false
  private _replaceKeyPrefixWith?: string; 
  public get replaceKeyPrefixWith() {
    return this.getStringAttribute('replace_key_prefix_with');
  }
  public set replaceKeyPrefixWith(value: string) {
    this._replaceKeyPrefixWith = value;
  }
  public resetReplaceKeyPrefixWith() {
    this._replaceKeyPrefixWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyPrefixWithInput() {
    return this._replaceKeyPrefixWith;
  }

  // replace_key_with - computed: false, optional: true, required: false
  private _replaceKeyWith?: string; 
  public get replaceKeyWith() {
    return this.getStringAttribute('replace_key_with');
  }
  public set replaceKeyWith(value: string) {
    this._replaceKeyWith = value;
  }
  public resetReplaceKeyWith() {
    this._replaceKeyWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceKeyWithInput() {
    return this._replaceKeyWith;
  }
}
export interface S3BucketWebsiteConfigurationRoutingRule {
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#condition S3BucketWebsiteConfiguration#condition}
  */
  readonly condition?: S3BucketWebsiteConfigurationRoutingRuleCondition;
  /**
  * redirect block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration#redirect S3BucketWebsiteConfiguration#redirect}
  */
  readonly redirect: S3BucketWebsiteConfigurationRoutingRuleRedirect;
}

export function s3BucketWebsiteConfigurationRoutingRuleToTerraform(struct?: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: s3BucketWebsiteConfigurationRoutingRuleConditionToTerraform(struct!.condition),
    redirect: s3BucketWebsiteConfigurationRoutingRuleRedirectToTerraform(struct!.redirect),
  }
}

export class S3BucketWebsiteConfigurationRoutingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: S3BucketWebsiteConfigurationRoutingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
      this._redirect.internalValue = value.redirect;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new S3BucketWebsiteConfigurationRoutingRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: S3BucketWebsiteConfigurationRoutingRuleCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // redirect - computed: false, optional: false, required: true
  private _redirect = new S3BucketWebsiteConfigurationRoutingRuleRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: S3BucketWebsiteConfigurationRoutingRuleRedirect) {
    this._redirect.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class S3BucketWebsiteConfigurationRoutingRuleList extends cdktf.ComplexList {
  public internalValue? : S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable

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
  public get(index: number): S3BucketWebsiteConfigurationRoutingRuleOutputReference {
    return new S3BucketWebsiteConfigurationRoutingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration aws_s3_bucket_website_configuration}
*/
export class S3BucketWebsiteConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_s3_bucket_website_configuration";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/s3_bucket_website_configuration aws_s3_bucket_website_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3BucketWebsiteConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: S3BucketWebsiteConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_s3_bucket_website_configuration',
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
    this._bucket = config.bucket;
    this._expectedBucketOwner = config.expectedBucketOwner;
    this._id = config.id;
    this._routingRules = config.routingRules;
    this._errorDocument.internalValue = config.errorDocument;
    this._indexDocument.internalValue = config.indexDocument;
    this._redirectAllRequestsTo.internalValue = config.redirectAllRequestsTo;
    this._routingRule.internalValue = config.routingRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // expected_bucket_owner - computed: false, optional: true, required: false
  private _expectedBucketOwner?: string; 
  public get expectedBucketOwner() {
    return this.getStringAttribute('expected_bucket_owner');
  }
  public set expectedBucketOwner(value: string) {
    this._expectedBucketOwner = value;
  }
  public resetExpectedBucketOwner() {
    this._expectedBucketOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedBucketOwnerInput() {
    return this._expectedBucketOwner;
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

  // routing_rules - computed: true, optional: true, required: false
  private _routingRules?: string; 
  public get routingRules() {
    return this.getStringAttribute('routing_rules');
  }
  public set routingRules(value: string) {
    this._routingRules = value;
  }
  public resetRoutingRules() {
    this._routingRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRulesInput() {
    return this._routingRules;
  }

  // website_domain - computed: true, optional: false, required: false
  public get websiteDomain() {
    return this.getStringAttribute('website_domain');
  }

  // website_endpoint - computed: true, optional: false, required: false
  public get websiteEndpoint() {
    return this.getStringAttribute('website_endpoint');
  }

  // error_document - computed: false, optional: true, required: false
  private _errorDocument = new S3BucketWebsiteConfigurationErrorDocumentOutputReference(this, "error_document");
  public get errorDocument() {
    return this._errorDocument;
  }
  public putErrorDocument(value: S3BucketWebsiteConfigurationErrorDocument) {
    this._errorDocument.internalValue = value;
  }
  public resetErrorDocument() {
    this._errorDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorDocumentInput() {
    return this._errorDocument.internalValue;
  }

  // index_document - computed: false, optional: true, required: false
  private _indexDocument = new S3BucketWebsiteConfigurationIndexDocumentOutputReference(this, "index_document");
  public get indexDocument() {
    return this._indexDocument;
  }
  public putIndexDocument(value: S3BucketWebsiteConfigurationIndexDocument) {
    this._indexDocument.internalValue = value;
  }
  public resetIndexDocument() {
    this._indexDocument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexDocumentInput() {
    return this._indexDocument.internalValue;
  }

  // redirect_all_requests_to - computed: false, optional: true, required: false
  private _redirectAllRequestsTo = new S3BucketWebsiteConfigurationRedirectAllRequestsToOutputReference(this, "redirect_all_requests_to");
  public get redirectAllRequestsTo() {
    return this._redirectAllRequestsTo;
  }
  public putRedirectAllRequestsTo(value: S3BucketWebsiteConfigurationRedirectAllRequestsTo) {
    this._redirectAllRequestsTo.internalValue = value;
  }
  public resetRedirectAllRequestsTo() {
    this._redirectAllRequestsTo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectAllRequestsToInput() {
    return this._redirectAllRequestsTo.internalValue;
  }

  // routing_rule - computed: false, optional: true, required: false
  private _routingRule = new S3BucketWebsiteConfigurationRoutingRuleList(this, "routing_rule", false);
  public get routingRule() {
    return this._routingRule;
  }
  public putRoutingRule(value: S3BucketWebsiteConfigurationRoutingRule[] | cdktf.IResolvable) {
    this._routingRule.internalValue = value;
  }
  public resetRoutingRule() {
    this._routingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingRuleInput() {
    return this._routingRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      expected_bucket_owner: cdktf.stringToTerraform(this._expectedBucketOwner),
      id: cdktf.stringToTerraform(this._id),
      routing_rules: cdktf.stringToTerraform(this._routingRules),
      error_document: s3BucketWebsiteConfigurationErrorDocumentToTerraform(this._errorDocument.internalValue),
      index_document: s3BucketWebsiteConfigurationIndexDocumentToTerraform(this._indexDocument.internalValue),
      redirect_all_requests_to: s3BucketWebsiteConfigurationRedirectAllRequestsToToTerraform(this._redirectAllRequestsTo.internalValue),
      routing_rule: cdktf.listMapper(s3BucketWebsiteConfigurationRoutingRuleToTerraform, true)(this._routingRule.internalValue),
    };
  }
}
