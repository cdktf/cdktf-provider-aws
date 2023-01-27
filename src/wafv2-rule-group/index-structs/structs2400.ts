import * as cdktf from 'cdktf';
import { Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexMatchStatement,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexMatchStatementToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexMatchStatementOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement,
wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform,
Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference } from './structs2000'
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_cookies Wafv2RuleGroup#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_cookies Wafv2RuleGroup#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookies | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookies | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_headers Wafv2RuleGroup#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_headers Wafv2RuleGroup#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedHeaders),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_paths Wafv2RuleGroup#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#invalid_fallback_behavior Wafv2RuleGroup#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBody | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBody | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#body Wafv2RuleGroup#body}
  */
  readonly body?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#cookies Wafv2RuleGroup#cookies}
  */
  readonly cookies?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookies;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#headers Wafv2RuleGroup#headers}
  */
  readonly headers?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#json_body Wafv2RuleGroup#json_body}
  */
  readonly jsonBody?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#method Wafv2RuleGroup#method}
  */
  readonly method?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
  */
  readonly queryString?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
  */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
  */
  readonly uriPath?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    json_body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined {
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
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
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
      this._headers.internalValue = value.headers;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody) {
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
  private _cookies = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchJsonBody) {
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
  private _method = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#priority Wafv2RuleGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#type Wafv2RuleGroup#type}
  */
  readonly type: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
  */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
  */
  readonly textTransformation: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined) {
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
  private _fieldToMatch = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizeHandling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizeHandling = value.oversizeHandling;
    }
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
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_cookies Wafv2RuleGroup#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_cookies Wafv2RuleGroup#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookies | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookies | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_headers Wafv2RuleGroup#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_headers Wafv2RuleGroup#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedHeaders),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_paths Wafv2RuleGroup#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#invalid_fallback_behavior Wafv2RuleGroup#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBody | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBody | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#body Wafv2RuleGroup#body}
  */
  readonly body?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#cookies Wafv2RuleGroup#cookies}
  */
  readonly cookies?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookies;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#headers Wafv2RuleGroup#headers}
  */
  readonly headers?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#json_body Wafv2RuleGroup#json_body}
  */
  readonly jsonBody?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#method Wafv2RuleGroup#method}
  */
  readonly method?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
  */
  readonly queryString?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
  */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
  */
  readonly uriPath?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    json_body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined {
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
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
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
      this._headers.internalValue = value.headers;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody) {
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
  private _cookies = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchJsonBody) {
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
  private _method = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#priority Wafv2RuleGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#type Wafv2RuleGroup#type}
  */
  readonly type: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
  */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
  */
  readonly textTransformation: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined) {
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
  private _fieldToMatch = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement {
  /**
  * byte_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#byte_match_statement Wafv2RuleGroup#byte_match_statement}
  */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement;
  /**
  * geo_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#geo_match_statement Wafv2RuleGroup#geo_match_statement}
  */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement;
  /**
  * ip_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#ip_set_reference_statement Wafv2RuleGroup#ip_set_reference_statement}
  */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement;
  /**
  * label_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#label_match_statement Wafv2RuleGroup#label_match_statement}
  */
  readonly labelMatchStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement;
  /**
  * regex_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#regex_match_statement Wafv2RuleGroup#regex_match_statement}
  */
  readonly regexMatchStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexMatchStatement;
  /**
  * regex_pattern_set_reference_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#regex_pattern_set_reference_statement Wafv2RuleGroup#regex_pattern_set_reference_statement}
  */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
  /**
  * size_constraint_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#size_constraint_statement Wafv2RuleGroup#size_constraint_statement}
  */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement;
  /**
  * sqli_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#sqli_match_statement Wafv2RuleGroup#sqli_match_statement}
  */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement;
  /**
  * xss_match_statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#xss_match_statement Wafv2RuleGroup#xss_match_statement}
  */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_match_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct!.byteMatchStatement),
    geo_match_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct!.geoMatchStatement),
    ip_set_reference_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct!.ipSetReferenceStatement),
    label_match_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct!.labelMatchStatement),
    regex_match_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexMatchStatementToTerraform(struct!.regexMatchStatement),
    regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct!.sizeConstraintStatement),
    sqli_match_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct!.sqliMatchStatement),
    xss_match_statement: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct!.xssMatchStatement),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement | cdktf.IResolvable | undefined {
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
    if (this._regexMatchStatement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatchStatement = this._regexMatchStatement?.internalValue;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteMatchStatement.internalValue = undefined;
      this._geoMatchStatement.internalValue = undefined;
      this._ipSetReferenceStatement.internalValue = undefined;
      this._labelMatchStatement.internalValue = undefined;
      this._regexMatchStatement.internalValue = undefined;
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
      this._regexMatchStatement.internalValue = value.regexMatchStatement;
      this._regexPatternSetReferenceStatement.internalValue = value.regexPatternSetReferenceStatement;
      this._sizeConstraintStatement.internalValue = value.sizeConstraintStatement;
      this._sqliMatchStatement.internalValue = value.sqliMatchStatement;
      this._xssMatchStatement.internalValue = value.xssMatchStatement;
    }
  }

  // byte_match_statement - computed: false, optional: true, required: false
  private _byteMatchStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference(this, "byte_match_statement");
  public get byteMatchStatement() {
    return this._byteMatchStatement;
  }
  public putByteMatchStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementByteMatchStatement) {
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
  private _geoMatchStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference(this, "geo_match_statement");
  public get geoMatchStatement() {
    return this._geoMatchStatement;
  }
  public putGeoMatchStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementGeoMatchStatement) {
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
  private _ipSetReferenceStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference(this, "ip_set_reference_statement");
  public get ipSetReferenceStatement() {
    return this._ipSetReferenceStatement;
  }
  public putIpSetReferenceStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement) {
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
  private _labelMatchStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference(this, "label_match_statement");
  public get labelMatchStatement() {
    return this._labelMatchStatement;
  }
  public putLabelMatchStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementLabelMatchStatement) {
    this._labelMatchStatement.internalValue = value;
  }
  public resetLabelMatchStatement() {
    this._labelMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatchStatementInput() {
    return this._labelMatchStatement.internalValue;
  }

  // regex_match_statement - computed: false, optional: true, required: false
  private _regexMatchStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexMatchStatementOutputReference(this, "regex_match_statement");
  public get regexMatchStatement() {
    return this._regexMatchStatement;
  }
  public putRegexMatchStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexMatchStatement) {
    this._regexMatchStatement.internalValue = value;
  }
  public resetRegexMatchStatement() {
    this._regexMatchStatement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchStatementInput() {
    return this._regexMatchStatement.internalValue;
  }

  // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
  private _regexPatternSetReferenceStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference(this, "regex_pattern_set_reference_statement");
  public get regexPatternSetReferenceStatement() {
    return this._regexPatternSetReferenceStatement;
  }
  public putRegexPatternSetReferenceStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement) {
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
  private _sizeConstraintStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference(this, "size_constraint_statement");
  public get sizeConstraintStatement() {
    return this._sizeConstraintStatement;
  }
  public putSizeConstraintStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSizeConstraintStatement) {
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
  private _sqliMatchStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference(this, "sqli_match_statement");
  public get sqliMatchStatement() {
    return this._sqliMatchStatement;
  }
  public putSqliMatchStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementSqliMatchStatement) {
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
  private _xssMatchStatement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference(this, "xss_match_statement");
  public get xssMatchStatement() {
    return this._xssMatchStatement;
  }
  public putXssMatchStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementXssMatchStatement) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement {
  /**
  * statement block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#statement Wafv2RuleGroup#statement}
  */
  readonly statement: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementToTerraform, true)(struct!.statement),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._statement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statement = this._statement?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatement | undefined) {
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
  private _statement = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatementList(this, "statement", false);
  public get statement() {
    return this._statement;
  }
  public putStatement(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementOrStatementStatement[] | cdktf.IResolvable) {
    this._statement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizeHandling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizeHandling = value.oversizeHandling;
    }
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
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_cookies Wafv2RuleGroup#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_cookies Wafv2RuleGroup#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternAll) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookies | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookies | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_headers Wafv2RuleGroup#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_headers Wafv2RuleGroup#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedHeaders),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_paths Wafv2RuleGroup#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#invalid_fallback_behavior Wafv2RuleGroup#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBody | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBody | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethod {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryString {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPath {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#body Wafv2RuleGroup#body}
  */
  readonly body?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#cookies Wafv2RuleGroup#cookies}
  */
  readonly cookies?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookies;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#headers Wafv2RuleGroup#headers}
  */
  readonly headers?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#json_body Wafv2RuleGroup#json_body}
  */
  readonly jsonBody?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#method Wafv2RuleGroup#method}
  */
  readonly method?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
  */
  readonly queryString?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
  */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
  */
  readonly uriPath?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPath;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    json_body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatch | undefined {
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
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
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
      this._headers.internalValue = value.headers;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchBody) {
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
  private _cookies = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchJsonBody) {
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
  private _method = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#priority Wafv2RuleGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#type Wafv2RuleGroup#type}
  */
  readonly type: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformationOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#regex_string Wafv2RuleGroup#regex_string}
  */
  readonly regexString: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
  */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
  */
  readonly textTransformation: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    regex_string: cdktf.stringToTerraform(struct!.regexString),
    field_to_match: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regexString !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexString = this._regexString;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regexString = undefined;
      this._fieldToMatch.internalValue = undefined;
      this._textTransformation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regexString = value.regexString;
      this._fieldToMatch.internalValue = value.fieldToMatch;
      this._textTransformation.internalValue = value.textTransformation;
    }
  }

  // regex_string - computed: false, optional: false, required: true
  private _regexString?: string; 
  public get regexString() {
    return this.getStringAttribute('regex_string');
  }
  public set regexString(value: string) {
    this._regexString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regexStringInput() {
    return this._regexString;
  }

  // field_to_match - computed: false, optional: true, required: false
  private _fieldToMatch = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizeHandling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizeHandling = value.oversizeHandling;
    }
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
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_cookies Wafv2RuleGroup#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_cookies Wafv2RuleGroup#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternAll) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_headers Wafv2RuleGroup#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_headers Wafv2RuleGroup#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedHeaders),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_paths Wafv2RuleGroup#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#invalid_fallback_behavior Wafv2RuleGroup#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#body Wafv2RuleGroup#body}
  */
  readonly body?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#cookies Wafv2RuleGroup#cookies}
  */
  readonly cookies?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#headers Wafv2RuleGroup#headers}
  */
  readonly headers?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders[] | cdktf.IResolvable;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#json_body Wafv2RuleGroup#json_body}
  */
  readonly jsonBody?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#method Wafv2RuleGroup#method}
  */
  readonly method?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
  */
  readonly queryString?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
  */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
  */
  readonly uriPath?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    json_body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined {
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
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
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
      this._headers.internalValue = value.headers;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody) {
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
  private _cookies = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchJsonBody) {
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
  private _method = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#priority Wafv2RuleGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#type Wafv2RuleGroup#type}
  */
  readonly type: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#arn Wafv2RuleGroup#arn}
  */
  readonly arn: string;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
  */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
  */
  readonly textTransformation: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined) {
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
  private _fieldToMatch = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizeHandling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizeHandling = value.oversizeHandling;
    }
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
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_cookies Wafv2RuleGroup#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_cookies Wafv2RuleGroup#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternAll) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookies | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookies | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_headers Wafv2RuleGroup#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_headers Wafv2RuleGroup#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedHeaders),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_paths Wafv2RuleGroup#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#invalid_fallback_behavior Wafv2RuleGroup#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBody | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBody | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#body Wafv2RuleGroup#body}
  */
  readonly body?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#cookies Wafv2RuleGroup#cookies}
  */
  readonly cookies?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookies;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#headers Wafv2RuleGroup#headers}
  */
  readonly headers?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeaders[] | cdktf.IResolvable;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#json_body Wafv2RuleGroup#json_body}
  */
  readonly jsonBody?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#method Wafv2RuleGroup#method}
  */
  readonly method?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
  */
  readonly queryString?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
  */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
  */
  readonly uriPath?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    json_body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined {
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
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
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
      this._headers.internalValue = value.headers;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody) {
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
  private _cookies = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchJsonBody) {
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
  private _method = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#priority Wafv2RuleGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#type Wafv2RuleGroup#type}
  */
  readonly type: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#comparison_operator Wafv2RuleGroup#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#size Wafv2RuleGroup#size}
  */
  readonly size: number;
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
  */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
  */
  readonly textTransformation: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatement | undefined) {
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
  private _fieldToMatch = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSizeConstraintStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizeHandling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizeHandling = value.oversizeHandling;
    }
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
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_cookies Wafv2RuleGroup#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_cookies Wafv2RuleGroup#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternAll) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookies | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookies | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_headers Wafv2RuleGroup#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_headers Wafv2RuleGroup#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedHeaders),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_paths Wafv2RuleGroup#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#invalid_fallback_behavior Wafv2RuleGroup#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBody | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBody | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#name Wafv2RuleGroup#name}
  */
  readonly name: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatch {
  /**
  * all_query_arguments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all_query_arguments Wafv2RuleGroup#all_query_arguments}
  */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
  /**
  * body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#body Wafv2RuleGroup#body}
  */
  readonly body?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
  /**
  * cookies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#cookies Wafv2RuleGroup#cookies}
  */
  readonly cookies?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookies;
  /**
  * headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#headers Wafv2RuleGroup#headers}
  */
  readonly headers?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable;
  /**
  * json_body block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#json_body Wafv2RuleGroup#json_body}
  */
  readonly jsonBody?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBody;
  /**
  * method block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#method Wafv2RuleGroup#method}
  */
  readonly method?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
  /**
  * query_string block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#query_string Wafv2RuleGroup#query_string}
  */
  readonly queryString?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
  /**
  * single_header block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_header Wafv2RuleGroup#single_header}
  */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
  /**
  * single_query_argument block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#single_query_argument Wafv2RuleGroup#single_query_argument}
  */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
  /**
  * uri_path block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#uri_path Wafv2RuleGroup#uri_path}
  */
  readonly uriPath?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_query_arguments: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct!.allQueryArguments),
    body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct!.body),
    cookies: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesToTerraform(struct!.cookies),
    headers: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersToTerraform, true)(struct!.headers),
    json_body: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyToTerraform(struct!.jsonBody),
    method: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct!.method),
    query_string: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct!.queryString),
    single_header: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct!.singleHeader),
    single_query_argument: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct!.singleQueryArgument),
    uri_path: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct!.uriPath),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined {
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
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allQueryArguments.internalValue = undefined;
      this._body.internalValue = undefined;
      this._cookies.internalValue = undefined;
      this._headers.internalValue = undefined;
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
      this._headers.internalValue = value.headers;
      this._jsonBody.internalValue = value.jsonBody;
      this._method.internalValue = value.method;
      this._queryString.internalValue = value.queryString;
      this._singleHeader.internalValue = value.singleHeader;
      this._singleQueryArgument.internalValue = value.singleQueryArgument;
      this._uriPath.internalValue = value.uriPath;
    }
  }

  // all_query_arguments - computed: false, optional: true, required: false
  private _allQueryArguments = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments");
  public get allQueryArguments() {
    return this._allQueryArguments;
  }
  public putAllQueryArguments(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments) {
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
  private _body = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchBody) {
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
  private _cookies = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookiesOutputReference(this, "cookies");
  public get cookies() {
    return this._cookies;
  }
  public putCookies(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchCookies) {
    this._cookies.internalValue = value;
  }
  public resetCookies() {
    this._cookies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiesInput() {
    return this._cookies.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // json_body - computed: false, optional: true, required: false
  private _jsonBody = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBodyOutputReference(this, "json_body");
  public get jsonBody() {
    return this._jsonBody;
  }
  public putJsonBody(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchJsonBody) {
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
  private _method = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod) {
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
  private _queryString = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString) {
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
  private _singleHeader = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header");
  public get singleHeader() {
    return this._singleHeader;
  }
  public putSingleHeader(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader) {
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
  private _singleQueryArgument = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument");
  public get singleQueryArgument() {
    return this._singleQueryArgument;
  }
  public putSingleQueryArgument(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument) {
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
  private _uriPath = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path");
  public get uriPath() {
    return this._uriPath;
  }
  public putUriPath(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformation {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#priority Wafv2RuleGroup#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#type Wafv2RuleGroup#type}
  */
  readonly type: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformation | cdktf.IResolvable | undefined) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformationList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformationOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatement {
  /**
  * field_to_match block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#field_to_match Wafv2RuleGroup#field_to_match}
  */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatch;
  /**
  * text_transformation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#text_transformation Wafv2RuleGroup#text_transformation}
  */
  readonly textTransformation: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_to_match: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform, true)(struct!.textTransformation),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatement | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatement | undefined) {
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
  private _fieldToMatch = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match");
  public get fieldToMatch() {
    return this._fieldToMatch;
  }
  public putFieldToMatch(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementFieldToMatch) {
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
  private _textTransformation = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformationList(this, "text_transformation", true);
  public get textTransformation() {
    return this._textTransformation;
  }
  public putTextTransformation(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementSqliMatchStatementTextTransformation[] | cdktf.IResolvable) {
    this._textTransformation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get textTransformationInput() {
    return this._textTransformation.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oversizeHandling !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeHandling = this._oversizeHandling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oversizeHandling = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oversizeHandling = value.oversizeHandling;
    }
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
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_cookies Wafv2RuleGroup#excluded_cookies}
  */
  readonly excludedCookies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_cookies Wafv2RuleGroup#included_cookies}
  */
  readonly includedCookies?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedCookies),
    included_cookies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedCookies),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern | cdktf.IResolvable | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternAll) {
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

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: cdktf.listMapper(wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternToTerraform, true)(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookies | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookies | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPatternList(this, "match_pattern", false);
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchCookiesMatchPattern[] | cdktf.IResolvable) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#excluded_headers Wafv2RuleGroup#excluded_headers}
  */
  readonly excludedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_headers Wafv2RuleGroup#included_headers}
  */
  readonly includedHeaders?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excluded_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedHeaders),
    included_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedHeaders),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedHeaders = this._excludedHeaders;
    }
    if (this._includedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedHeaders = this._includedHeaders;
    }
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludedHeaders = undefined;
      this._includedHeaders = undefined;
      this._all.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludedHeaders = value.excludedHeaders;
      this._includedHeaders = value.includedHeaders;
      this._all.internalValue = value.all;
    }
  }

  // excluded_headers - computed: false, optional: true, required: false
  private _excludedHeaders?: string[]; 
  public get excludedHeaders() {
    return this.getListAttribute('excluded_headers');
  }
  public set excludedHeaders(value: string[]) {
    this._excludedHeaders = value;
  }
  public resetExcludedHeaders() {
    this._excludedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedHeadersInput() {
    return this._excludedHeaders;
  }

  // included_headers - computed: false, optional: true, required: false
  private _includedHeaders?: string[]; 
  public get includedHeaders() {
    return this.getListAttribute('included_headers');
  }
  public set includedHeaders(value: string[]) {
    this._includedHeaders = value;
  }
  public resetIncludedHeaders() {
    this._includedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedHeadersInput() {
    return this._includedHeaders;
  }

  // all - computed: false, optional: true, required: false
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchScope = undefined;
      this._oversizeHandling = undefined;
      this._matchPattern.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersOutputReference {
    return new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#included_paths Wafv2RuleGroup#included_paths}
  */
  readonly includedPaths?: string[];
  /**
  * all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#all Wafv2RuleGroup#all}
  */
  readonly all?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedPaths),
    all: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllToTerraform(struct!.all),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern | undefined) {
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
  private _all = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAllOutputReference(this, "all");
  public get all() {
    return this._all;
  }
  public putAll(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternAll) {
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
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBody {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#invalid_fallback_behavior Wafv2RuleGroup#invalid_fallback_behavior}
  */
  readonly invalidFallbackBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_scope Wafv2RuleGroup#match_scope}
  */
  readonly matchScope: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#oversize_handling Wafv2RuleGroup#oversize_handling}
  */
  readonly oversizeHandling?: string;
  /**
  * match_pattern block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group#match_pattern Wafv2RuleGroup#match_pattern}
  */
  readonly matchPattern: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern;
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invalid_fallback_behavior: cdktf.stringToTerraform(struct!.invalidFallbackBehavior),
    match_scope: cdktf.stringToTerraform(struct!.matchScope),
    oversize_handling: cdktf.stringToTerraform(struct!.oversizeHandling),
    match_pattern: wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternToTerraform(struct!.matchPattern),
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBody | undefined {
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

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBody | undefined) {
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
  private _matchPattern = new Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPatternOutputReference(this, "match_pattern");
  public get matchPattern() {
    return this._matchPattern;
  }
  public putMatchPattern(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchJsonBodyMatchPattern) {
    this._matchPattern.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchPatternInput() {
    return this._matchPattern.internalValue;
  }
}
export interface Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}

export function wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Wafv2RuleGroupRuleStatementRateBasedStatementScopeDownStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
