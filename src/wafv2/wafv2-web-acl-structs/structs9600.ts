import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath,
wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform,
Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference } from './structs9200'
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#positional_constraint Wafv2WebAcl#positional_constraint}
  */
  readonly positionalConstraint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#search_string Wafv2WebAcl#search_string}
  */
  readonly searchString: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._positionalConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.positionalConstraint = this._positionalConstraint;
    }
    if (this._searchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchString = this._searchString;
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._positionalConstraint = undefined;
      this._searchString = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._positionalConstraint = value.positionalConstraint;
      this._searchString = value.searchString;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // positional_constraint - computed: false, optional: false, required: true
  private _positionalConstraint?: string; 
  public get positionalConstraint() {
    return this.getStringAttribute('positional_constraint');
  }
  public set positionalConstraint(value: string) {
    this._positionalConstraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionalConstraintInput() {
    return this._positionalConstraint;
  }

  // search_string - computed: false, optional: false, required: true
  private _searchString?: string; 
  public get searchString() {
    return this.getStringAttribute('search_string');
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#fallback_behavior Wafv2WebAcl#fallback_behavior}
  */
  readonly fallbackBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#header_name Wafv2WebAcl#header_name}
  */
  readonly headerName: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_behavior: cdktf.stringToTerraform(struct!.fallbackBehavior),
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackBehavior = undefined;
      this._headerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackBehavior = value.fallbackBehavior;
      this._headerName = value.headerName;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#country_codes Wafv2WebAcl#country_codes}
  */
  readonly countryCodes: string[];
  /**
  * forwarded_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
  */
  readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
    forwarded_ip_config: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct!.forwardedIpConfig),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    if (this._forwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryCodes = undefined;
      this._forwardedIpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryCodes = value.countryCodes;
      this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
    }
  }

  // country_codes - computed: false, optional: false, required: true
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
  }

  // forwarded_ip_config - computed: false, optional: true, required: false
  private _forwardedIpConfig = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config");
  public get forwardedIpConfig() {
    return this._forwardedIpConfig;
  }
  public putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig) {
    this._forwardedIpConfig.internalValue = value;
  }
  public resetForwardedIpConfig() {
    this._forwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpConfigInput() {
    return this._forwardedIpConfig.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#fallback_behavior Wafv2WebAcl#fallback_behavior}
  */
  readonly fallbackBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#header_name Wafv2WebAcl#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#position Wafv2WebAcl#position}
  */
  readonly position: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_behavior: cdktf.stringToTerraform(struct!.fallbackBehavior),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    position: cdktf.stringToTerraform(struct!.position),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackBehavior = undefined;
      this._headerName = undefined;
      this._position = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackBehavior = value.fallbackBehavior;
      this._headerName = value.headerName;
      this._position = value.position;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * ip_set_forwarded_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
  */
  readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    ip_set_forwarded_ip_config: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct!.ipSetForwardedIpConfig),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._ipSetForwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
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

  // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
  private _ipSetForwardedIpConfig = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config");
  public get ipSetForwardedIpConfig() {
    return this._ipSetForwardedIpConfig;
  }
  public putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig) {
    this._ipSetForwardedIpConfig.internalValue = value;
  }
  public resetIpSetForwardedIpConfig() {
    this._ipSetForwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetForwardedIpConfigInput() {
    return this._ipSetForwardedIpConfig.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#key Wafv2WebAcl#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#scope Wafv2WebAcl#scope}
  */
  readonly scope: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement {
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
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement {
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#byte_match_statement Wafv2WebAcl#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#geo_match_statement Wafv2WebAcl#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement;
  /**
  * label_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#label_match_statement Wafv2WebAcl#label_match_statement}
  */
  readonly labelMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#xss_match_statement Wafv2WebAcl#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    label_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct!.labelMatchStatement),
    regex_pattern_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteMatchStatement.internalValue = undefined;
      this._geoMatchStatement.internalValue = undefined;
      this._ipSetReferenceStatement.internalValue = undefined;
      this._labelMatchStatement.internalValue = undefined;
      this._regexPatternSetReferenceStatement.internalValue = undefined;
      this._sizeConstraintStatement.internalValue = undefined;
      this._sqliMatchStatement.internalValue = undefined;
      this._xssMatchStatement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byteMatchStatement.internalValue = value.byteMatchStatement;
      this._geoMatchStatement.internalValue = value.geoMatchStatement;
      this._ipSetReferenceStatement.internalValue = value.ipSetReferenceStatement;
      this._labelMatchStatement.internalValue = value.labelMatchStatement;
      this._regexPatternSetReferenceStatement.internalValue = value.regexPatternSetReferenceStatement;
      this._sizeConstraintStatement.internalValue = value.sizeConstraintStatement;
      this._sqliMatchStatement.internalValue = value.sqliMatchStatement;
      this._xssMatchStatement.internalValue = value.xssMatchStatement;
    }
  }

  // byte_match_statement - computed: false, optional: true, required: false
  private _byteMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference(this, "byte_match_statement");
  public get byteMatchStatement() {
    return this._byteMatchStatement;
  }
  public putByteMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementByteMatchStatement) {
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
  private _geoMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference(this, "geo_match_statement");
  public get geoMatchStatement() {
    return this._geoMatchStatement;
  }
  public putGeoMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementGeoMatchStatement) {
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
  private _ipSetReferenceStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference(this, "ip_set_reference_statement");
  public get ipSetReferenceStatement() {
    return this._ipSetReferenceStatement;
  }
  public putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement) {
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
  private _labelMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference(this, "label_match_statement");
  public get labelMatchStatement() {
    return this._labelMatchStatement;
  }
  public putLabelMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementLabelMatchStatement) {
    this._labelMatchStatement.internalValue = value;
  }
  public resetLabelMatchStatement() {
    this._labelMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchStatementInput() {
    return this._labelMatchStatement.internalValue;
  }

  // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
  private _regexPatternSetReferenceStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference(this, "regex_pattern_set_reference_statement");
  public get regexPatternSetReferenceStatement() {
    return this._regexPatternSetReferenceStatement;
  }
  public putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement) {
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
  private _sizeConstraintStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference(this, "size_constraint_statement");
  public get sizeConstraintStatement() {
    return this._sizeConstraintStatement;
  }
  public putSizeConstraintStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSizeConstraintStatement) {
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
  private _sqliMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference(this, "sqli_match_statement");
  public get sqliMatchStatement() {
    return this._sqliMatchStatement;
  }
  public putSqliMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementSqliMatchStatement) {
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
  private _xssMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference(this, "xss_match_statement");
  public get xssMatchStatement() {
    return this._xssMatchStatement;
  }
  public putXssMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementXssMatchStatement) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement {
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#statement Wafv2WebAcl#statement}
  */
  readonly statement: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statement: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementToTerraform)(struct!.statement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statement.internalValue = value.statement;
    }
  }

  // statement - computed: false, optional: false, required: true
  private _statement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementNotStatementStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#positional_constraint Wafv2WebAcl#positional_constraint}
  */
  readonly positionalConstraint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#search_string Wafv2WebAcl#search_string}
  */
  readonly searchString: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._positionalConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.positionalConstraint = this._positionalConstraint;
    }
    if (this._searchString !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchString = this._searchString;
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._positionalConstraint = undefined;
      this._searchString = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._positionalConstraint = value.positionalConstraint;
      this._searchString = value.searchString;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // positional_constraint - computed: false, optional: false, required: true
  private _positionalConstraint?: string; 
  public get positionalConstraint() {
    return this.getStringAttribute('positional_constraint');
  }
  public set positionalConstraint(value: string) {
    this._positionalConstraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionalConstraintInput() {
    return this._positionalConstraint;
  }

  // search_string - computed: false, optional: false, required: true
  private _searchString?: string; 
  public get searchString() {
    return this.getStringAttribute('search_string');
  }
  public set searchString(value: string) {
    this._searchString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchStringInput() {
    return this._searchString;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#fallback_behavior Wafv2WebAcl#fallback_behavior}
  */
  readonly fallbackBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#header_name Wafv2WebAcl#header_name}
  */
  readonly headerName: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_behavior: cdktf.stringToTerraform(struct!.fallbackBehavior),
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackBehavior = undefined;
      this._headerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackBehavior = value.fallbackBehavior;
      this._headerName = value.headerName;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#country_codes Wafv2WebAcl#country_codes}
  */
  readonly countryCodes: string[];
  /**
  * forwarded_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
  */
  readonly forwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
    forwarded_ip_config: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct!.forwardedIpConfig),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._countryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodes = this._countryCodes;
    }
    if (this._forwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._countryCodes = undefined;
      this._forwardedIpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._countryCodes = value.countryCodes;
      this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
    }
  }

  // country_codes - computed: false, optional: false, required: true
  private _countryCodes?: string[]; 
  public get countryCodes() {
    return this.getListAttribute('country_codes');
  }
  public set countryCodes(value: string[]) {
    this._countryCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodesInput() {
    return this._countryCodes;
  }

  // forwarded_ip_config - computed: false, optional: true, required: false
  private _forwardedIpConfig = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config");
  public get forwardedIpConfig() {
    return this._forwardedIpConfig;
  }
  public putForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig) {
    this._forwardedIpConfig.internalValue = value;
  }
  public resetForwardedIpConfig() {
    this._forwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedIpConfigInput() {
    return this._forwardedIpConfig.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#fallback_behavior Wafv2WebAcl#fallback_behavior}
  */
  readonly fallbackBehavior: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#header_name Wafv2WebAcl#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#position Wafv2WebAcl#position}
  */
  readonly position: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_behavior: cdktf.stringToTerraform(struct!.fallbackBehavior),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    position: cdktf.stringToTerraform(struct!.position),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackBehavior = this._fallbackBehavior;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._position !== undefined) {
      hasAnyValues = true;
      internalValueResult.position = this._position;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallbackBehavior = undefined;
      this._headerName = undefined;
      this._position = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallbackBehavior = value.fallbackBehavior;
      this._headerName = value.headerName;
      this._position = value.position;
    }
  }

  // fallback_behavior - computed: false, optional: false, required: true
  private _fallbackBehavior?: string; 
  public get fallbackBehavior() {
    return this.getStringAttribute('fallback_behavior');
  }
  public set fallbackBehavior(value: string) {
    this._fallbackBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackBehaviorInput() {
    return this._fallbackBehavior;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * ip_set_forwarded_ip_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
  */
  readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    ip_set_forwarded_ip_config: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct!.ipSetForwardedIpConfig),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._ipSetForwardedIpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arn = undefined;
      this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arn = value.arn;
      this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
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

  // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
  private _ipSetForwardedIpConfig = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config");
  public get ipSetForwardedIpConfig() {
    return this._ipSetForwardedIpConfig;
  }
  public putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig) {
    this._ipSetForwardedIpConfig.internalValue = value;
  }
  public resetIpSetForwardedIpConfig() {
    this._ipSetForwardedIpConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetForwardedIpConfigInput() {
    return this._ipSetForwardedIpConfig.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#key Wafv2WebAcl#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#scope Wafv2WebAcl#scope}
  */
  readonly scope: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._scope = value.scope;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement {
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
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement {
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#byte_match_statement Wafv2WebAcl#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#geo_match_statement Wafv2WebAcl#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement;
  /**
  * label_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#label_match_statement Wafv2WebAcl#label_match_statement}
  */
  readonly labelMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#xss_match_statement Wafv2WebAcl#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    label_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct!.labelMatchStatement),
    regex_pattern_set_reference_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteMatchStatement.internalValue = undefined;
      this._geoMatchStatement.internalValue = undefined;
      this._ipSetReferenceStatement.internalValue = undefined;
      this._labelMatchStatement.internalValue = undefined;
      this._regexPatternSetReferenceStatement.internalValue = undefined;
      this._sizeConstraintStatement.internalValue = undefined;
      this._sqliMatchStatement.internalValue = undefined;
      this._xssMatchStatement.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byteMatchStatement.internalValue = value.byteMatchStatement;
      this._geoMatchStatement.internalValue = value.geoMatchStatement;
      this._ipSetReferenceStatement.internalValue = value.ipSetReferenceStatement;
      this._labelMatchStatement.internalValue = value.labelMatchStatement;
      this._regexPatternSetReferenceStatement.internalValue = value.regexPatternSetReferenceStatement;
      this._sizeConstraintStatement.internalValue = value.sizeConstraintStatement;
      this._sqliMatchStatement.internalValue = value.sqliMatchStatement;
      this._xssMatchStatement.internalValue = value.xssMatchStatement;
    }
  }

  // byte_match_statement - computed: false, optional: true, required: false
  private _byteMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference(this, "byte_match_statement");
  public get byteMatchStatement() {
    return this._byteMatchStatement;
  }
  public putByteMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement) {
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
  private _geoMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference(this, "geo_match_statement");
  public get geoMatchStatement() {
    return this._geoMatchStatement;
  }
  public putGeoMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement) {
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
  private _ipSetReferenceStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference(this, "ip_set_reference_statement");
  public get ipSetReferenceStatement() {
    return this._ipSetReferenceStatement;
  }
  public putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement) {
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
  private _labelMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference(this, "label_match_statement");
  public get labelMatchStatement() {
    return this._labelMatchStatement;
  }
  public putLabelMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement) {
    this._labelMatchStatement.internalValue = value;
  }
  public resetLabelMatchStatement() {
    this._labelMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchStatementInput() {
    return this._labelMatchStatement.internalValue;
  }

  // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
  private _regexPatternSetReferenceStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference(this, "regex_pattern_set_reference_statement");
  public get regexPatternSetReferenceStatement() {
    return this._regexPatternSetReferenceStatement;
  }
  public putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement) {
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
  private _sizeConstraintStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference(this, "size_constraint_statement");
  public get sizeConstraintStatement() {
    return this._sizeConstraintStatement;
  }
  public putSizeConstraintStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement) {
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
  private _sqliMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference(this, "sqli_match_statement");
  public get sqliMatchStatement() {
    return this._sqliMatchStatement;
  }
  public putSqliMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement) {
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
  private _xssMatchStatement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference(this, "xss_match_statement");
  public get xssMatchStatement() {
    return this._xssMatchStatement;
  }
  public putXssMatchStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement {
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#statement Wafv2WebAcl#statement}
  */
  readonly statement: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statement: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementToTerraform)(struct!.statement),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._statement.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._statement.internalValue = value.statement;
    }
  }

  // statement - computed: false, optional: false, required: true
  private _statement = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#arn Wafv2WebAcl#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#field_to_match Wafv2WebAcl#field_to_match}
  */
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#name Wafv2WebAcl#name}
  */
  readonly name: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#all_query_arguments Wafv2WebAcl#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#body Wafv2WebAcl#body}
  */
  readonly body?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#method Wafv2WebAcl#method}
  */
  readonly method?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#query_string Wafv2WebAcl#query_string}
  */
  readonly queryString?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_header Wafv2WebAcl#single_header}
  */
  readonly singleHeader?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#single_query_argument Wafv2WebAcl#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#uri_path Wafv2WebAcl#uri_path}
  */
  readonly uriPath?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    method: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
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
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath) {
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
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#priority Wafv2WebAcl#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#type Wafv2WebAcl#type}
  */
  readonly type: string;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationOutputReference {
    return new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement {
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
  readonly fieldToMatch?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl#text_transformation Wafv2WebAcl#text_transformation}
  */
  readonly textTransformation: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement | undefined {
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

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement | undefined) {
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
  private _fieldToMatch = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2WebAclRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
