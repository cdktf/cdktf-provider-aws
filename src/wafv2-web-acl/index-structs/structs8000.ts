import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference } from './structs7600'
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatementOutputReference } from './structs5600'
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementOutputReference } from './structs6400'
import { Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig,
wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference,
Wafv2WebAclRuleStatementOrStatement,
wafv2WebAclRuleStatementOrStatementToTerraform,
Wafv2WebAclRuleStatementOrStatementOutputReference } from './structs4400'
import { Wafv2WebAclRuleStatementAndStatement,
wafv2WebAclRuleStatementAndStatementToTerraform,
Wafv2WebAclRuleStatementAndStatementOutputReference,
Wafv2WebAclRuleAction,
wafv2WebAclRuleActionToTerraform,
Wafv2WebAclRuleActionOutputReference,
Wafv2WebAclRuleOverrideAction,
wafv2WebAclRuleOverrideActionToTerraform,
Wafv2WebAclRuleOverrideActionOutputReference,
Wafv2WebAclRuleRuleLabel,
wafv2WebAclRuleRuleLabelToTerraform,
Wafv2WebAclRuleRuleLabelList } from './structs0'
import { Wafv2WebAclRuleStatementByteMatchStatement,
wafv2WebAclRuleStatementByteMatchStatementToTerraform,
Wafv2WebAclRuleStatementByteMatchStatementOutputReference,
Wafv2WebAclRuleStatementGeoMatchStatement,
wafv2WebAclRuleStatementGeoMatchStatementToTerraform,
Wafv2WebAclRuleStatementGeoMatchStatementOutputReference,
Wafv2WebAclRuleStatementIpSetReferenceStatement,
wafv2WebAclRuleStatementIpSetReferenceStatementToTerraform,
Wafv2WebAclRuleStatementIpSetReferenceStatementOutputReference,
Wafv2WebAclRuleStatementLabelMatchStatement,
wafv2WebAclRuleStatementLabelMatchStatementToTerraform,
Wafv2WebAclRuleStatementLabelMatchStatementOutputReference } from './structs400'
import { Wafv2WebAclRuleStatementManagedRuleGroupStatement,
wafv2WebAclRuleStatementManagedRuleGroupStatementToTerraform,
Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference } from './structs3600'
import { Wafv2WebAclRuleStatementNotStatement,
wafv2WebAclRuleStatementNotStatementToTerraform,
Wafv2WebAclRuleStatementNotStatementOutputReference } from './structs4000'
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cookies Wafv2WebAcl#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#json_body Wafv2WebAcl#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    json_body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchJsonBody) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#excluded_cookies Wafv2WebAcl#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_cookies Wafv2WebAcl#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_paths Wafv2WebAcl#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: false, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#invalid_fallback_behavior Wafv2WebAcl#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cookies Wafv2WebAcl#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#json_body Wafv2WebAcl#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    json_body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchJsonBody) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement {
  /**
  * and_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#and_statement Wafv2WebAcl#and_statement}
  */
  readonly andStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement;
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#byte_match_statement Wafv2WebAcl#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#geo_match_statement Wafv2WebAcl#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement;
  /**
  * label_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#label_match_statement Wafv2WebAcl#label_match_statement}
  */
  readonly labelMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement;
  /**
  * not_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#not_statement Wafv2WebAcl#not_statement}
  */
  readonly notStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement;
  /**
  * or_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#or_statement Wafv2WebAcl#or_statement}
  */
  readonly orStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#xss_match_statement Wafv2WebAcl#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementToTerraform(struct!.andStatement),
    byte_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    label_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatementToTerraform(struct!.labelMatchStatement),
    not_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementToTerraform(struct!.notStatement),
    or_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementToTerraform(struct!.orStatement),
    regex_pattern_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andStatement = this._andStatement?.internalValue;
    }
    if (this._byteMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteMatchStatement = this._byteMatchStatement?.internalValue;
    }
    if (this._geoMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoMatchStatement = this._geoMatchStatement?.internalValue;
    }
    if (this._ipSetReferenceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReferenceStatement = this._ipSetReferenceStatement?.internalValue;
    }
    if (this._labelMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchStatement = this._labelMatchStatement?.internalValue;
    }
    if (this._notStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStatement = this._notStatement?.internalValue;
    }
    if (this._orStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orStatement = this._orStatement?.internalValue;
    }
    if (this._regexPatternSetReferenceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexPatternSetReferenceStatement = this._regexPatternSetReferenceStatement?.internalValue;
    }
    if (this._sizeConstraintStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeConstraintStatement = this._sizeConstraintStatement?.internalValue;
    }
    if (this._sqliMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqliMatchStatement = this._sqliMatchStatement?.internalValue;
    }
    if (this._xssMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xssMatchStatement = this._xssMatchStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._andStatement.internalValue = undefined;
      this._byteMatchStatement.internalValue = undefined;
      this._geoMatchStatement.internalValue = undefined;
      this._ipSetReferenceStatement.internalValue = undefined;
      this._labelMatchStatement.internalValue = undefined;
      this._notStatement.internalValue = undefined;
      this._orStatement.internalValue = undefined;
      this._regexPatternSetReferenceStatement.internalValue = undefined;
      this._sizeConstraintStatement.internalValue = undefined;
      this._sqliMatchStatement.internalValue = undefined;
      this._xssMatchStatement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._andStatement.internalValue = value.andStatement;
      this._byteMatchStatement.internalValue = value.byteMatchStatement;
      this._geoMatchStatement.internalValue = value.geoMatchStatement;
      this._ipSetReferenceStatement.internalValue = value.ipSetReferenceStatement;
      this._labelMatchStatement.internalValue = value.labelMatchStatement;
      this._notStatement.internalValue = value.notStatement;
      this._orStatement.internalValue = value.orStatement;
      this._regexPatternSetReferenceStatement.internalValue = value.regexPatternSetReferenceStatement;
      this._sizeConstraintStatement.internalValue = value.sizeConstraintStatement;
      this._sqliMatchStatement.internalValue = value.sqliMatchStatement;
      this._xssMatchStatement.internalValue = value.xssMatchStatement;
    }
  }

  // and_statement - computed: false, optional: true, required: false
  private _andStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementOutputReference(this, "and_statement");
  public get andStatement() {
    return this._andStatement;
  }
  public putAndStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatement) {
    this._andStatement.internalValue = value;
  }
  public resetAndStatement() {
    this._andStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andStatementInput() {
    return this._andStatement.internalValue;
  }

  // byte_match_statement - computed: false, optional: true, required: false
  private _byteMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatementOutputReference(this, "byte_match_statement");
  public get byteMatchStatement() {
    return this._byteMatchStatement;
  }
  public putByteMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementByteMatchStatement) {
    this._byteMatchStatement.internalValue = value;
  }
  public resetByteMatchStatement() {
    this._byteMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteMatchStatementInput() {
    return this._byteMatchStatement.internalValue;
  }

  // geo_match_statement - computed: false, optional: true, required: false
  private _geoMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatementOutputReference(this, "geo_match_statement");
  public get geoMatchStatement() {
    return this._geoMatchStatement;
  }
  public putGeoMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementGeoMatchStatement) {
    this._geoMatchStatement.internalValue = value;
  }
  public resetGeoMatchStatement() {
    this._geoMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchStatementInput() {
    return this._geoMatchStatement.internalValue;
  }

  // ip_set_reference_statement - computed: false, optional: true, required: false
  private _ipSetReferenceStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatementOutputReference(this, "ip_set_reference_statement");
  public get ipSetReferenceStatement() {
    return this._ipSetReferenceStatement;
  }
  public putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementIpSetReferenceStatement) {
    this._ipSetReferenceStatement.internalValue = value;
  }
  public resetIpSetReferenceStatement() {
    this._ipSetReferenceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferenceStatementInput() {
    return this._ipSetReferenceStatement.internalValue;
  }

  // label_match_statement - computed: false, optional: true, required: false
  private _labelMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatementOutputReference(this, "label_match_statement");
  public get labelMatchStatement() {
    return this._labelMatchStatement;
  }
  public putLabelMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementLabelMatchStatement) {
    this._labelMatchStatement.internalValue = value;
  }
  public resetLabelMatchStatement() {
    this._labelMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchStatementInput() {
    return this._labelMatchStatement.internalValue;
  }

  // not_statement - computed: false, optional: true, required: false
  private _notStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatementOutputReference(this, "not_statement");
  public get notStatement() {
    return this._notStatement;
  }
  public putNotStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementNotStatement) {
    this._notStatement.internalValue = value;
  }
  public resetNotStatement() {
    this._notStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStatementInput() {
    return this._notStatement.internalValue;
  }

  // or_statement - computed: false, optional: true, required: false
  private _orStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatementOutputReference(this, "or_statement");
  public get orStatement() {
    return this._orStatement;
  }
  public putOrStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOrStatement) {
    this._orStatement.internalValue = value;
  }
  public resetOrStatement() {
    this._orStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orStatementInput() {
    return this._orStatement.internalValue;
  }

  // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
  private _regexPatternSetReferenceStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference(this, "regex_pattern_set_reference_statement");
  public get regexPatternSetReferenceStatement() {
    return this._regexPatternSetReferenceStatement;
  }
  public putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementRegexPatternSetReferenceStatement) {
    this._regexPatternSetReferenceStatement.internalValue = value;
  }
  public resetRegexPatternSetReferenceStatement() {
    this._regexPatternSetReferenceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternSetReferenceStatementInput() {
    return this._regexPatternSetReferenceStatement.internalValue;
  }

  // size_constraint_statement - computed: false, optional: true, required: false
  private _sizeConstraintStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatementOutputReference(this, "size_constraint_statement");
  public get sizeConstraintStatement() {
    return this._sizeConstraintStatement;
  }
  public putSizeConstraintStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSizeConstraintStatement) {
    this._sizeConstraintStatement.internalValue = value;
  }
  public resetSizeConstraintStatement() {
    this._sizeConstraintStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeConstraintStatementInput() {
    return this._sizeConstraintStatement.internalValue;
  }

  // sqli_match_statement - computed: false, optional: true, required: false
  private _sqliMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatementOutputReference(this, "sqli_match_statement");
  public get sqliMatchStatement() {
    return this._sqliMatchStatement;
  }
  public putSqliMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementSqliMatchStatement) {
    this._sqliMatchStatement.internalValue = value;
  }
  public resetSqliMatchStatement() {
    this._sqliMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliMatchStatementInput() {
    return this._sqliMatchStatement.internalValue;
  }

  // xss_match_statement - computed: false, optional: true, required: false
  private _xssMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatementOutputReference(this, "xss_match_statement");
  public get xssMatchStatement() {
    return this._xssMatchStatement;
  }
  public putXssMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementXssMatchStatement) {
    this._xssMatchStatement.internalValue = value;
  }
  public resetXssMatchStatement() {
    this._xssMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssMatchStatementInput() {
    return this._xssMatchStatement.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#aggregate_key_type Wafv2WebAcl#aggregate_key_type}
  */
  readonly aggregateKeyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#limit Wafv2WebAcl#limit}
  */
  readonly limit: number;
  /**
  * forwarded_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
  */
  readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig;
  /**
  * scope_down_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#scope_down_statement Wafv2WebAcl#scope_down_statement}
  */
  readonly scopeDownStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement;
}

export function wafv2WebAclRuleStatementRateBasedStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate_key_type: cdktf.stringToTerraform(struct!.aggregateKeyType),
    limit: cdktf.numberToTerraform(struct!.limit),
    forwarded_ip_config: wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigToTerraform(struct!.forwardedIpConfig),
    scope_down_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementToTerraform(struct!.scopeDownStatement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregateKeyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregateKeyType = this._aggregateKeyType;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._forwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
    }
    if (this._scopeDownStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeDownStatement = this._scopeDownStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregateKeyType = undefined;
      this._limit = undefined;
      this._forwardedIpConfig.internalValue = undefined;
      this._scopeDownStatement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregateKeyType = value.aggregateKeyType;
      this._limit = value.limit;
      this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
      this._scopeDownStatement.internalValue = value.scopeDownStatement;
    }
  }

  // aggregate_key_type - computed: false, optional: true, required: false
  private _aggregateKeyType?: string; 
  public get aggregateKeyType() {
    return this.getStringAttribute('aggregate_key_type');
  }
  public set aggregateKeyType(value: string) {
    this._aggregateKeyType = value;
  }
  public resetAggregateKeyType() {
    this._aggregateKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateKeyTypeInput() {
    return this._aggregateKeyType;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // forwarded_ip_config - computed: false, optional: true, required: false
  private _forwardedIpConfig = new Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config");
  public get forwardedIpConfig() {
    return this._forwardedIpConfig;
  }
  public putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementForwardedIpConfig) {
    this._forwardedIpConfig.internalValue = value;
  }
  public resetForwardedIpConfig() {
    this._forwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpConfigInput() {
    return this._forwardedIpConfig.internalValue;
  }

  // scope_down_statement - computed: false, optional: true, required: false
  private _scopeDownStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementOutputReference(this, "scope_down_statement");
  public get scopeDownStatement() {
    return this._scopeDownStatement;
  }
  public putScopeDownStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatement) {
    this._scopeDownStatement.internalValue = value;
  }
  public resetScopeDownStatement() {
    this._scopeDownStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeDownStatementInput() {
    return this._scopeDownStatement.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#excluded_cookies Wafv2WebAcl#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_cookies Wafv2WebAcl#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_paths Wafv2WebAcl#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: false, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#invalid_fallback_behavior Wafv2WebAcl#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cookies Wafv2WebAcl#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#json_body Wafv2WebAcl#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    json_body: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleToTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleOutputReference {
    return new Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRuleGroupReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * excluded_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#excluded_rule Wafv2WebAcl#excluded_rule}
  */
  readonly excludedRule?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRuleGroupReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference | Wafv2WebAclRuleStatementRuleGroupReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    excluded_rule: cdktf.listMapper(wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleToTerraform, true)(struct!.excludedRule),
  }
}

export class Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRuleGroupReferenceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._excludedRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedRule = this._excludedRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._excludedRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._excludedRule.internalValue = value.excludedRule;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
  }

  // excluded_rule - computed: false, optional: true, required: false
  private _excludedRule = new Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRuleList(this, "excluded_rule", false);
  public get excludedRule() {
    return this._excludedRule;
  }
  public putExcludedRule(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatementExcludedRule[] | cdktf.IResolvable) {
    this._excludedRule.internalValue = value;
  }
  public resetExcludedRule() {
    this._excludedRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedRuleInput() {
    return this._excludedRule.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#excluded_cookies Wafv2WebAcl#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_cookies Wafv2WebAcl#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_paths Wafv2WebAcl#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: false, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#invalid_fallback_behavior Wafv2WebAcl#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cookies Wafv2WebAcl#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#json_body Wafv2WebAcl#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    json_body: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchJsonBody) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchUriPath) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementSizeConstraintStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#comparison_operator Wafv2WebAcl#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#size Wafv2WebAcl#size}
  */
  readonly size: number;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSizeConstraintStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSizeConstraintStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._size = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._size = value.size;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementSizeConstraintStatementFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation = new Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#excluded_cookies Wafv2WebAcl#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_cookies Wafv2WebAcl#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_paths Wafv2WebAcl#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: false, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#invalid_fallback_behavior Wafv2WebAcl#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cookies Wafv2WebAcl#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookies;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#json_body Wafv2WebAcl#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    json_body: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchJsonBody) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchUriPath) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementSqliMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementSqliMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementSqliMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementSqliMatchStatementFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation = new Wafv2WebAclRuleStatementSqliMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#excluded_cookies Wafv2WebAcl#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_cookies Wafv2WebAcl#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCookies = this._excludedCookies;
    }
    if (this._includedCookies !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedCookies = this._includedCookies;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludedCookies = undefined;
      this._includedCookies = undefined;
      this._all.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludedCookies = value.excludedCookies;
      this._includedCookies = value.includedCookies;
      this._all.internalValue = value.all;
    }
  }

  // excluded_cookies - computed: false, optional: true, required: false
  private _excludedCookies?: string[]; 
  public get excludedCookies() {
    return this.getListAttribute('excluded_cookies');
  }
  public set excludedCookies(value: string[]) {
    this._excludedCookies = value;
  }
  public resetExcludedCookies() {
    this._excludedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCookiesInput() {
    return this._excludedCookies;
  }

  // included_cookies - computed: false, optional: true, required: false
  private _includedCookies?: string[]; 
  public get includedCookies() {
    return this.getListAttribute('included_cookies');
  }
  public set includedCookies(value: string[]) {
    this._includedCookies = value;
  }
  public resetIncludedCookies() {
    this._includedCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCookiesInput() {
    return this._includedCookies;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: false, required: true
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#included_paths Wafv2WebAcl#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all Wafv2WebAcl#all}
  */
  readonly all?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedPaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedPaths = this._includedPaths;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedPaths = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedPaths = value.includedPaths;
      this._all.internalValue = value.all;
    }
  }

  // included_paths - computed: false, optional: true, required: false
  private _includedPaths?: string[]; 
  public get includedPaths() {
    return this.getListAttribute('included_paths');
  }
  public set includedPaths(value: string[]) {
    this._includedPaths = value;
  }
  public resetIncludedPaths() {
    this._includedPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedPathsInput() {
    return this._includedPaths;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#invalid_fallback_behavior Wafv2WebAcl#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_scope Wafv2WebAcl#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#oversize_handling Wafv2WebAcl#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#match_pattern Wafv2WebAcl#match_pattern}
  */
  readonly matchPattern: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invalidFallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFallbackBehavior = this._invalidFallbackBehavior;
    }
    if (this._matchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchScope = this._matchScope;
    }
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    if (this._matchPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchPattern = this._matchPattern?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invalidFallbackBehavior = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invalidFallbackBehavior = value.invalidFallbackBehavior;
      this._matchScope = value.matchScope;
      this._oversizeHandling = value.oversizeHandling;
      this._matchPattern.internalValue = value.matchPattern;
    }
  }

  // invalid_fallback_behavior - computed: false, optional: true, required: false
  private _invalidFallbackBehavior?: string; 
  public get invalidFallbackBehavior() {
    return this.getStringAttribute('invalid_fallback_behavior');
  }
  public set invalidFallbackBehavior(value: string) {
    this._invalidFallbackBehavior = value;
  }
  public resetInvalidFallbackBehavior() {
    this._invalidFallbackBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFallbackBehaviorInput() {
    return this._invalidFallbackBehavior;
  }

  // match_scope - computed: false, optional: false, required: true
  private _matchScope?: string; 
  public get matchScope() {
    return this.getStringAttribute('match_scope');
  }
  public set matchScope(value: string) {
    this._matchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchScopeInput() {
    return this._matchScope;
  }

  // oversize_handling - computed: false, optional: true, required: false
  private _oversizeHandling?: string; 
  public get oversizeHandling() {
    return this.getStringAttribute('oversize_handling');
  }
  public set oversizeHandling(value: string) {
    this._oversizeHandling = value;
  }
  public resetOversizeHandling() {
    this._oversizeHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeHandlingInput() {
    return this._oversizeHandling;
  }

  // match_pattern - computed: false, optional: false, required: true
  private _matchPattern = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cookies Wafv2WebAcl#cookies}
  */
  readonly cookies?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookies;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#json_body Wafv2WebAcl#json_body}
  */
  readonly jsonBody?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    json_body: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allQueryArguments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
    }
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._cookies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookies = this._cookies?.internalValue;
    }
    if (this._jsonBody?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonBody = this._jsonBody?.internalValue;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._singleHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleHeader = this._singleHeader?.internalValue;
    }
    if (this._singleQueryArgument?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
    }
    if (this._uriPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriPath = this._uriPath?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._jsonBody.internalValue = undefined;
      this._method.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._singleHeader.internalValue = undefined;
      this._singleQueryArgument.internalValue = undefined;
      this._uriPath.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allQueryArguments.internalValue = value.allQueryArguments;
      this._body.internalValue = value.body;
      this._cookies.internalValue = value.cookies;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchAllQueryArguments) {
    this._allQueryArguments.internalValue = value;
  }
  public resetAllQueryArguments() {
    this._allQueryArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allQueryArgumentsInput() {
    return this._allQueryArguments.internalValue;
  }

  // body - computed: false, optional: true, required: false
  private _body = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // cookies - computed: false, optional: true, required: false
  private _cookies = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchJsonBody) {
    this._jsonBody.internalValue = value;
  }
  public resetJsonBody() {
    this._jsonBody.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonBodyInput() {
    return this._jsonBody.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // single_header - computed: false, optional: true, required: false
  private _singleHeader = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleHeader) {
    this._singleHeader.internalValue = value;
  }
  public resetSingleHeader() {
    this._singleHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleHeaderInput() {
    return this._singleHeader.internalValue;
  }

  // single_query_argument - computed: false, optional: true, required: false
  private _singleQueryArgument = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument) {
    this._singleQueryArgument.internalValue = value;
  }
  public resetSingleQueryArgument() {
    this._singleQueryArgument.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleQueryArgumentInput() {
    return this._singleQueryArgument.internalValue;
  }

  // uri_path - computed: false, optional: true, required: false
  private _uriPath = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchUriPath) {
    this._uriPath.internalValue = value;
  }
  public resetUriPath() {
    this._uriPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPathInput() {
    return this._uriPath.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._priority = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._priority = value.priority;
      this._type = value.type;
    }
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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

export class Wafv2WebAclRuleStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementXssMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementXssMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementXssMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementXssMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldToMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
    }
    if (this._textTransformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTransformation = this._textTransformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementXssMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementXssMatchStatementFieldToMatch) {
    this._fieldToMatch.internalValue = value;
  }
  public resetFieldToMatch() {
    this._fieldToMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToMatchInput() {
    return this._fieldToMatch.internalValue;
  }

  // text_transformation - computed: false, optional: false, required: true
  private _textTransformation = new Wafv2WebAclRuleStatementXssMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatement {
  /**
  * and_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#and_statement Wafv2WebAcl#and_statement}
  */
  readonly andStatement?: Wafv2WebAclRuleStatementAndStatement;
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#byte_match_statement Wafv2WebAcl#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2WebAclRuleStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#geo_match_statement Wafv2WebAcl#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2WebAclRuleStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementIpSetReferenceStatement;
  /**
  * label_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#label_match_statement Wafv2WebAcl#label_match_statement}
  */
  readonly labelMatchStatement?: Wafv2WebAclRuleStatementLabelMatchStatement;
  /**
  * managed_rule_group_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#managed_rule_group_statement Wafv2WebAcl#managed_rule_group_statement}
  */
  readonly managedRuleGroupStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatement;
  /**
  * not_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#not_statement Wafv2WebAcl#not_statement}
  */
  readonly notStatement?: Wafv2WebAclRuleStatementNotStatement;
  /**
  * or_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#or_statement Wafv2WebAcl#or_statement}
  */
  readonly orStatement?: Wafv2WebAclRuleStatementOrStatement;
  /**
  * rate_based_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#rate_based_statement Wafv2WebAcl#rate_based_statement}
  */
  readonly rateBasedStatement?: Wafv2WebAclRuleStatementRateBasedStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement;
  /**
  * rule_group_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#rule_group_reference_statement Wafv2WebAcl#rule_group_reference_statement}
  */
  readonly ruleGroupReferenceStatement?: Wafv2WebAclRuleStatementRuleGroupReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2WebAclRuleStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#xss_match_statement Wafv2WebAcl#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2WebAclRuleStatementXssMatchStatement;
}

export function wafv2WebAclRuleStatementToTerraform(struct?: Wafv2WebAclRuleStatementOutputReference | Wafv2WebAclRuleStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    and_statement: wafv2WebAclRuleStatementAndStatementToTerraform(struct!.andStatement),
    byte_match_statement: wafv2WebAclRuleStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2WebAclRuleStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2WebAclRuleStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    label_match_statement: wafv2WebAclRuleStatementLabelMatchStatementToTerraform(struct!.labelMatchStatement),
    managed_rule_group_statement: wafv2WebAclRuleStatementManagedRuleGroupStatementToTerraform(struct!.managedRuleGroupStatement),
    not_statement: wafv2WebAclRuleStatementNotStatementToTerraform(struct!.notStatement),
    or_statement: wafv2WebAclRuleStatementOrStatementToTerraform(struct!.orStatement),
    rate_based_statement: wafv2WebAclRuleStatementRateBasedStatementToTerraform(struct!.rateBasedStatement),
    regex_pattern_set_reference_statement: wafv2WebAclRuleStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    rule_group_reference_statement: wafv2WebAclRuleStatementRuleGroupReferenceStatementToTerraform(struct!.ruleGroupReferenceStatement),
    size_constraint_statement: wafv2WebAclRuleStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2WebAclRuleStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2WebAclRuleStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export class Wafv2WebAclRuleStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._andStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.andStatement = this._andStatement?.internalValue;
    }
    if (this._byteMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteMatchStatement = this._byteMatchStatement?.internalValue;
    }
    if (this._geoMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoMatchStatement = this._geoMatchStatement?.internalValue;
    }
    if (this._ipSetReferenceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetReferenceStatement = this._ipSetReferenceStatement?.internalValue;
    }
    if (this._labelMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatchStatement = this._labelMatchStatement?.internalValue;
    }
    if (this._managedRuleGroupStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedRuleGroupStatement = this._managedRuleGroupStatement?.internalValue;
    }
    if (this._notStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notStatement = this._notStatement?.internalValue;
    }
    if (this._orStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orStatement = this._orStatement?.internalValue;
    }
    if (this._rateBasedStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateBasedStatement = this._rateBasedStatement?.internalValue;
    }
    if (this._regexPatternSetReferenceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexPatternSetReferenceStatement = this._regexPatternSetReferenceStatement?.internalValue;
    }
    if (this._ruleGroupReferenceStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleGroupReferenceStatement = this._ruleGroupReferenceStatement?.internalValue;
    }
    if (this._sizeConstraintStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeConstraintStatement = this._sizeConstraintStatement?.internalValue;
    }
    if (this._sqliMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqliMatchStatement = this._sqliMatchStatement?.internalValue;
    }
    if (this._xssMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xssMatchStatement = this._xssMatchStatement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._andStatement.internalValue = undefined;
      this._byteMatchStatement.internalValue = undefined;
      this._geoMatchStatement.internalValue = undefined;
      this._ipSetReferenceStatement.internalValue = undefined;
      this._labelMatchStatement.internalValue = undefined;
      this._managedRuleGroupStatement.internalValue = undefined;
      this._notStatement.internalValue = undefined;
      this._orStatement.internalValue = undefined;
      this._rateBasedStatement.internalValue = undefined;
      this._regexPatternSetReferenceStatement.internalValue = undefined;
      this._ruleGroupReferenceStatement.internalValue = undefined;
      this._sizeConstraintStatement.internalValue = undefined;
      this._sqliMatchStatement.internalValue = undefined;
      this._xssMatchStatement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._andStatement.internalValue = value.andStatement;
      this._byteMatchStatement.internalValue = value.byteMatchStatement;
      this._geoMatchStatement.internalValue = value.geoMatchStatement;
      this._ipSetReferenceStatement.internalValue = value.ipSetReferenceStatement;
      this._labelMatchStatement.internalValue = value.labelMatchStatement;
      this._managedRuleGroupStatement.internalValue = value.managedRuleGroupStatement;
      this._notStatement.internalValue = value.notStatement;
      this._orStatement.internalValue = value.orStatement;
      this._rateBasedStatement.internalValue = value.rateBasedStatement;
      this._regexPatternSetReferenceStatement.internalValue = value.regexPatternSetReferenceStatement;
      this._ruleGroupReferenceStatement.internalValue = value.ruleGroupReferenceStatement;
      this._sizeConstraintStatement.internalValue = value.sizeConstraintStatement;
      this._sqliMatchStatement.internalValue = value.sqliMatchStatement;
      this._xssMatchStatement.internalValue = value.xssMatchStatement;
    }
  }

  // and_statement - computed: false, optional: true, required: false
  private _andStatement = new Wafv2WebAclRuleStatementAndStatementOutputReference(this, "and_statement");
  public get andStatement() {
    return this._andStatement;
  }
  public putAndStatement(value: Wafv2WebAclRuleStatementAndStatement) {
    this._andStatement.internalValue = value;
  }
  public resetAndStatement() {
    this._andStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get andStatementInput() {
    return this._andStatement.internalValue;
  }

  // byte_match_statement - computed: false, optional: true, required: false
  private _byteMatchStatement = new Wafv2WebAclRuleStatementByteMatchStatementOutputReference(this, "byte_match_statement");
  public get byteMatchStatement() {
    return this._byteMatchStatement;
  }
  public putByteMatchStatement(value: Wafv2WebAclRuleStatementByteMatchStatement) {
    this._byteMatchStatement.internalValue = value;
  }
  public resetByteMatchStatement() {
    this._byteMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteMatchStatementInput() {
    return this._byteMatchStatement.internalValue;
  }

  // geo_match_statement - computed: false, optional: true, required: false
  private _geoMatchStatement = new Wafv2WebAclRuleStatementGeoMatchStatementOutputReference(this, "geo_match_statement");
  public get geoMatchStatement() {
    return this._geoMatchStatement;
  }
  public putGeoMatchStatement(value: Wafv2WebAclRuleStatementGeoMatchStatement) {
    this._geoMatchStatement.internalValue = value;
  }
  public resetGeoMatchStatement() {
    this._geoMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoMatchStatementInput() {
    return this._geoMatchStatement.internalValue;
  }

  // ip_set_reference_statement - computed: false, optional: true, required: false
  private _ipSetReferenceStatement = new Wafv2WebAclRuleStatementIpSetReferenceStatementOutputReference(this, "ip_set_reference_statement");
  public get ipSetReferenceStatement() {
    return this._ipSetReferenceStatement;
  }
  public putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementIpSetReferenceStatement) {
    this._ipSetReferenceStatement.internalValue = value;
  }
  public resetIpSetReferenceStatement() {
    this._ipSetReferenceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetReferenceStatementInput() {
    return this._ipSetReferenceStatement.internalValue;
  }

  // label_match_statement - computed: false, optional: true, required: false
  private _labelMatchStatement = new Wafv2WebAclRuleStatementLabelMatchStatementOutputReference(this, "label_match_statement");
  public get labelMatchStatement() {
    return this._labelMatchStatement;
  }
  public putLabelMatchStatement(value: Wafv2WebAclRuleStatementLabelMatchStatement) {
    this._labelMatchStatement.internalValue = value;
  }
  public resetLabelMatchStatement() {
    this._labelMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchStatementInput() {
    return this._labelMatchStatement.internalValue;
  }

  // managed_rule_group_statement - computed: false, optional: true, required: false
  private _managedRuleGroupStatement = new Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference(this, "managed_rule_group_statement");
  public get managedRuleGroupStatement() {
    return this._managedRuleGroupStatement;
  }
  public putManagedRuleGroupStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatement) {
    this._managedRuleGroupStatement.internalValue = value;
  }
  public resetManagedRuleGroupStatement() {
    this._managedRuleGroupStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRuleGroupStatementInput() {
    return this._managedRuleGroupStatement.internalValue;
  }

  // not_statement - computed: false, optional: true, required: false
  private _notStatement = new Wafv2WebAclRuleStatementNotStatementOutputReference(this, "not_statement");
  public get notStatement() {
    return this._notStatement;
  }
  public putNotStatement(value: Wafv2WebAclRuleStatementNotStatement) {
    this._notStatement.internalValue = value;
  }
  public resetNotStatement() {
    this._notStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notStatementInput() {
    return this._notStatement.internalValue;
  }

  // or_statement - computed: false, optional: true, required: false
  private _orStatement = new Wafv2WebAclRuleStatementOrStatementOutputReference(this, "or_statement");
  public get orStatement() {
    return this._orStatement;
  }
  public putOrStatement(value: Wafv2WebAclRuleStatementOrStatement) {
    this._orStatement.internalValue = value;
  }
  public resetOrStatement() {
    this._orStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orStatementInput() {
    return this._orStatement.internalValue;
  }

  // rate_based_statement - computed: false, optional: true, required: false
  private _rateBasedStatement = new Wafv2WebAclRuleStatementRateBasedStatementOutputReference(this, "rate_based_statement");
  public get rateBasedStatement() {
    return this._rateBasedStatement;
  }
  public putRateBasedStatement(value: Wafv2WebAclRuleStatementRateBasedStatement) {
    this._rateBasedStatement.internalValue = value;
  }
  public resetRateBasedStatement() {
    this._rateBasedStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateBasedStatementInput() {
    return this._rateBasedStatement.internalValue;
  }

  // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
  private _regexPatternSetReferenceStatement = new Wafv2WebAclRuleStatementRegexPatternSetReferenceStatementOutputReference(this, "regex_pattern_set_reference_statement");
  public get regexPatternSetReferenceStatement() {
    return this._regexPatternSetReferenceStatement;
  }
  public putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRegexPatternSetReferenceStatement) {
    this._regexPatternSetReferenceStatement.internalValue = value;
  }
  public resetRegexPatternSetReferenceStatement() {
    this._regexPatternSetReferenceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPatternSetReferenceStatementInput() {
    return this._regexPatternSetReferenceStatement.internalValue;
  }

  // rule_group_reference_statement - computed: false, optional: true, required: false
  private _ruleGroupReferenceStatement = new Wafv2WebAclRuleStatementRuleGroupReferenceStatementOutputReference(this, "rule_group_reference_statement");
  public get ruleGroupReferenceStatement() {
    return this._ruleGroupReferenceStatement;
  }
  public putRuleGroupReferenceStatement(value: Wafv2WebAclRuleStatementRuleGroupReferenceStatement) {
    this._ruleGroupReferenceStatement.internalValue = value;
  }
  public resetRuleGroupReferenceStatement() {
    this._ruleGroupReferenceStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleGroupReferenceStatementInput() {
    return this._ruleGroupReferenceStatement.internalValue;
  }

  // size_constraint_statement - computed: false, optional: true, required: false
  private _sizeConstraintStatement = new Wafv2WebAclRuleStatementSizeConstraintStatementOutputReference(this, "size_constraint_statement");
  public get sizeConstraintStatement() {
    return this._sizeConstraintStatement;
  }
  public putSizeConstraintStatement(value: Wafv2WebAclRuleStatementSizeConstraintStatement) {
    this._sizeConstraintStatement.internalValue = value;
  }
  public resetSizeConstraintStatement() {
    this._sizeConstraintStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeConstraintStatementInput() {
    return this._sizeConstraintStatement.internalValue;
  }

  // sqli_match_statement - computed: false, optional: true, required: false
  private _sqliMatchStatement = new Wafv2WebAclRuleStatementSqliMatchStatementOutputReference(this, "sqli_match_statement");
  public get sqliMatchStatement() {
    return this._sqliMatchStatement;
  }
  public putSqliMatchStatement(value: Wafv2WebAclRuleStatementSqliMatchStatement) {
    this._sqliMatchStatement.internalValue = value;
  }
  public resetSqliMatchStatement() {
    this._sqliMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliMatchStatementInput() {
    return this._sqliMatchStatement.internalValue;
  }

  // xss_match_statement - computed: false, optional: true, required: false
  private _xssMatchStatement = new Wafv2WebAclRuleStatementXssMatchStatementOutputReference(this, "xss_match_statement");
  public get xssMatchStatement() {
    return this._xssMatchStatement;
  }
  public putXssMatchStatement(value: Wafv2WebAclRuleStatementXssMatchStatement) {
    this._xssMatchStatement.internalValue = value;
  }
  public resetXssMatchStatement() {
    this._xssMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssMatchStatementInput() {
    return this._xssMatchStatement.internalValue;
  }
}
export interface Wafv2WebAclRuleVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2WebAclRuleVisibilityConfigToTerraform(struct?: Wafv2WebAclRuleVisibilityConfigOutputReference | Wafv2WebAclRuleVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}

export class Wafv2WebAclRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleVisibilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}
export interface Wafv2WebAclRule {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#action Wafv2WebAcl#action}
  */
  readonly action?: Wafv2WebAclRuleAction;
  /**
  * override_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#override_action Wafv2WebAcl#override_action}
  */
  readonly overrideAction?: Wafv2WebAclRuleOverrideAction;
  /**
  * rule_label block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#rule_label Wafv2WebAcl#rule_label}
  */
  readonly ruleLabel?: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable;
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#statement Wafv2WebAcl#statement}
  */
  readonly statement: Wafv2WebAclRuleStatement;
  /**
  * visibility_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#visibility_config Wafv2WebAcl#visibility_config}
  */
  readonly visibilityConfig: Wafv2WebAclRuleVisibilityConfig;
}

export function wafv2WebAclRuleToTerraform(struct?: Wafv2WebAclRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: wafv2WebAclRuleActionToTerraform(struct!.action),
    override_action: wafv2WebAclRuleOverrideActionToTerraform(struct!.overrideAction),
    rule_label: cdktf.listMapper(wafv2WebAclRuleRuleLabelToTerraform, true)(struct!.ruleLabel),
    statement: wafv2WebAclRuleStatementToTerraform(struct!.statement),
    visibility_config: wafv2WebAclRuleVisibilityConfigToTerraform(struct!.visibilityConfig),
  }
}

export class Wafv2WebAclRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._overrideAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideAction = this._overrideAction?.internalValue;
    }
    if (this._ruleLabel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleLabel = this._ruleLabel?.internalValue;
    }
    if (this._statement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement?.internalValue;
    }
    if (this._visibilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.visibilityConfig = this._visibilityConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._action.internalValue = undefined;
      this._overrideAction.internalValue = undefined;
      this._ruleLabel.internalValue = undefined;
      this._statement.internalValue = undefined;
      this._visibilityConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._priority = value.priority;
      this._action.internalValue = value.action;
      this._overrideAction.internalValue = value.overrideAction;
      this._ruleLabel.internalValue = value.ruleLabel;
      this._statement.internalValue = value.statement;
      this._visibilityConfig.internalValue = value.visibilityConfig;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // action - computed: false, optional: true, required: false
  private _action = new Wafv2WebAclRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: Wafv2WebAclRuleAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // override_action - computed: false, optional: true, required: false
  private _overrideAction = new Wafv2WebAclRuleOverrideActionOutputReference(this, "override_action");
  public get overrideAction() {
    return this._overrideAction;
  }
  public putOverrideAction(value: Wafv2WebAclRuleOverrideAction) {
    this._overrideAction.internalValue = value;
  }
  public resetOverrideAction() {
    this._overrideAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideActionInput() {
    return this._overrideAction.internalValue;
  }

  // rule_label - computed: false, optional: true, required: false
  private _ruleLabel = new Wafv2WebAclRuleRuleLabelList(this, "rule_label", true);
  public get ruleLabel() {
    return this._ruleLabel;
  }
  public putRuleLabel(value: Wafv2WebAclRuleRuleLabel[] | cdktf.IResolvable) {
    this._ruleLabel.internalValue = value;
  }
  public resetRuleLabel() {
    this._ruleLabel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleLabelInput() {
    return this._ruleLabel.internalValue;
  }

  // statement - computed: false, optional: false, required: true
  private _statement = new Wafv2WebAclRuleStatementOutputReference(this, "statement");
  public get statement() {
    return this._statement;
  }
  public putStatement(value: Wafv2WebAclRuleStatement) {
    this._statement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig = new Wafv2WebAclRuleVisibilityConfigOutputReference(this, "visibility_config");
  public get visibilityConfig() {
    return this._visibilityConfig;
  }
  public putVisibilityConfig(value: Wafv2WebAclRuleVisibilityConfig) {
    this._visibilityConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig.internalValue;
  }
}

export class Wafv2WebAclRuleList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRule[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleOutputReference {
    return new Wafv2WebAclRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclVisibilityConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#cloudwatch_metrics_enabled Wafv2WebAcl#cloudwatch_metrics_enabled}
  */
  readonly cloudwatchMetricsEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#metric_name Wafv2WebAcl#metric_name}
  */
  readonly metricName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#sampled_requests_enabled Wafv2WebAcl#sampled_requests_enabled}
  */
  readonly sampledRequestsEnabled: boolean | cdktf.IResolvable;
}

export function wafv2WebAclVisibilityConfigToTerraform(struct?: Wafv2WebAclVisibilityConfigOutputReference | Wafv2WebAclVisibilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}

export class Wafv2WebAclVisibilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclVisibilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchMetricsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._sampledRequestsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclVisibilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchMetricsEnabled = undefined;
      this._metricName = undefined;
      this._sampledRequestsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
      this._metricName = value.metricName;
      this._sampledRequestsEnabled = value.sampledRequestsEnabled;
    }
  }

  // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
  private _cloudwatchMetricsEnabled?: boolean | cdktf.IResolvable; 
  public get cloudwatchMetricsEnabled() {
    return this.getBooleanAttribute('cloudwatch_metrics_enabled');
  }
  public set cloudwatchMetricsEnabled(value: boolean | cdktf.IResolvable) {
    this._cloudwatchMetricsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchMetricsEnabledInput() {
    return this._cloudwatchMetricsEnabled;
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // sampled_requests_enabled - computed: false, optional: false, required: true
  private _sampledRequestsEnabled?: boolean | cdktf.IResolvable; 
  public get sampledRequestsEnabled() {
    return this.getBooleanAttribute('sampled_requests_enabled');
  }
  public set sampledRequestsEnabled(value: boolean | cdktf.IResolvable) {
    this._sampledRequestsEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampledRequestsEnabledInput() {
    return this._sampledRequestsEnabled;
  }
}
