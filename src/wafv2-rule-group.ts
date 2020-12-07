// https://www.terraform.io/docs/providers/aws/r/wafv2_rule_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Wafv2RuleGroupConfig extends cdktf.TerraformMetaArguments {
  readonly capacity: number;
  readonly description?: string;
  readonly name: string;
  readonly scope: string;
  readonly tags?: { [key: string]: string };
  /** rule block */
  readonly rule?: Wafv2RuleGroupRule[];
  /** visibility_config block */
  readonly visibilityConfig: Wafv2RuleGroupVisibilityConfig[];
}
export interface Wafv2RuleGroupRuleActionAllow {
}

function wafv2RuleGroupRuleActionAllowToTerraform(struct?: Wafv2RuleGroupRuleActionAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleActionBlock {
}

function wafv2RuleGroupRuleActionBlockToTerraform(struct?: Wafv2RuleGroupRuleActionBlock): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleActionCount {
}

function wafv2RuleGroupRuleActionCountToTerraform(struct?: Wafv2RuleGroupRuleActionCount): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleAction {
  /** allow block */
  readonly allow?: Wafv2RuleGroupRuleActionAllow[];
  /** block block */
  readonly block?: Wafv2RuleGroupRuleActionBlock[];
  /** count block */
  readonly count?: Wafv2RuleGroupRuleActionCount[];
}

function wafv2RuleGroupRuleActionToTerraform(struct?: Wafv2RuleGroupRuleAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow: cdktf.listMapper(wafv2RuleGroupRuleActionAllowToTerraform)(struct!.allow),
    block: cdktf.listMapper(wafv2RuleGroupRuleActionBlockToTerraform)(struct!.block),
    count: cdktf.listMapper(wafv2RuleGroupRuleActionCountToTerraform)(struct!.count),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementAndStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementAndStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementNotStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementNotStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementOrStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementOrStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatementStatement {
  /** and_statement block */
  readonly andStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementAndStatement[];
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatement[];
  /** not_statement block */
  readonly notStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementNotStatement[];
  /** or_statement block */
  readonly orStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementOrStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementAndStatementToTerraform)(struct!.andStatement),
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementNotStatementToTerraform)(struct!.notStatement),
    or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementOrStatementToTerraform)(struct!.orStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementAndStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementAndStatementStatement[];
}

function wafv2RuleGroupRuleStatementAndStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementAndStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementAndStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementAndStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementNotStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementNotStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementOrStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatementStatement {
  /** and_statement block */
  readonly andStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementAndStatement[];
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatement[];
  /** not_statement block */
  readonly notStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementNotStatement[];
  /** or_statement block */
  readonly orStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementOrStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementAndStatementToTerraform)(struct!.andStatement),
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementNotStatementToTerraform)(struct!.notStatement),
    or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementToTerraform)(struct!.orStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementNotStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementNotStatementStatement[];
}

function wafv2RuleGroupRuleStatementNotStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementNotStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementAndStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementNotStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement {
  readonly positionalConstraint: string;
  readonly searchString: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    positional_constraint: cdktf.stringToTerraform(struct!.positionalConstraint),
    search_string: cdktf.stringToTerraform(struct!.searchString),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement {
  readonly countryCodes: string[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.countryCodes),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement {
  readonly arn: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatement {
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementOrStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatementStatement {
  /** and_statement block */
  readonly andStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementAndStatement[];
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatement[];
  /** not_statement block */
  readonly notStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementNotStatement[];
  /** or_statement block */
  readonly orStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementOrStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatementStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementToTerraform)(struct!.andStatement),
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementToTerraform)(struct!.notStatement),
    or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementToTerraform)(struct!.orStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleStatementOrStatement {
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatementOrStatementStatement[];
}

function wafv2RuleGroupRuleStatementOrStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementOrStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementToTerraform)(struct!.statement),
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement {
  readonly arn: string;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementSizeConstraintStatement {
  readonly comparisonOperator: string;
  readonly size: number;
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementSizeConstraintStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementSizeConstraintStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    size: cdktf.numberToTerraform(struct!.size),
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementSqliMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementSqliMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementSqliMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments {
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody {
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod {
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString {
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument {
  readonly name: string;
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath {
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch {
  /** all_query_arguments block */
  readonly allQueryArguments?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArguments[];
  /** body block */
  readonly body?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBody[];
  /** method block */
  readonly method?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethod[];
  /** query_string block */
  readonly queryString?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryString[];
  /** single_header block */
  readonly singleHeader?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeader[];
  /** single_query_argument block */
  readonly singleQueryArgument?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgument[];
  /** uri_path block */
  readonly uriPath?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPath[];
}

function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all_query_arguments: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform)(struct!.allQueryArguments),
    body: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToTerraform)(struct!.body),
    method: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToTerraform)(struct!.method),
    query_string: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform)(struct!.queryString),
    single_header: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform)(struct!.singleHeader),
    single_query_argument: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform)(struct!.singleQueryArgument),
    uri_path: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform)(struct!.uriPath),
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation {
  readonly priority: number;
  readonly type: string;
}

function wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    priority: cdktf.numberToTerraform(struct!.priority),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface Wafv2RuleGroupRuleStatementXssMatchStatement {
  /** field_to_match block */
  readonly fieldToMatch?: Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatch[];
  /** text_transformation block */
  readonly textTransformation: Wafv2RuleGroupRuleStatementXssMatchStatementTextTransformation[];
}

function wafv2RuleGroupRuleStatementXssMatchStatementToTerraform(struct?: Wafv2RuleGroupRuleStatementXssMatchStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    field_to_match: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToTerraform)(struct!.fieldToMatch),
    text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToTerraform)(struct!.textTransformation),
  }
}

export interface Wafv2RuleGroupRuleStatement {
  /** and_statement block */
  readonly andStatement?: Wafv2RuleGroupRuleStatementAndStatement[];
  /** byte_match_statement block */
  readonly byteMatchStatement?: Wafv2RuleGroupRuleStatementByteMatchStatement[];
  /** geo_match_statement block */
  readonly geoMatchStatement?: Wafv2RuleGroupRuleStatementGeoMatchStatement[];
  /** ip_set_reference_statement block */
  readonly ipSetReferenceStatement?: Wafv2RuleGroupRuleStatementIpSetReferenceStatement[];
  /** not_statement block */
  readonly notStatement?: Wafv2RuleGroupRuleStatementNotStatement[];
  /** or_statement block */
  readonly orStatement?: Wafv2RuleGroupRuleStatementOrStatement[];
  /** regex_pattern_set_reference_statement block */
  readonly regexPatternSetReferenceStatement?: Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatement[];
  /** size_constraint_statement block */
  readonly sizeConstraintStatement?: Wafv2RuleGroupRuleStatementSizeConstraintStatement[];
  /** sqli_match_statement block */
  readonly sqliMatchStatement?: Wafv2RuleGroupRuleStatementSqliMatchStatement[];
  /** xss_match_statement block */
  readonly xssMatchStatement?: Wafv2RuleGroupRuleStatementXssMatchStatement[];
}

function wafv2RuleGroupRuleStatementToTerraform(struct?: Wafv2RuleGroupRuleStatement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    and_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementAndStatementToTerraform)(struct!.andStatement),
    byte_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementByteMatchStatementToTerraform)(struct!.byteMatchStatement),
    geo_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform)(struct!.geoMatchStatement),
    ip_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform)(struct!.ipSetReferenceStatement),
    not_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementToTerraform)(struct!.notStatement),
    or_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementToTerraform)(struct!.orStatement),
    regex_pattern_set_reference_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToTerraform)(struct!.regexPatternSetReferenceStatement),
    size_constraint_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementToTerraform)(struct!.sizeConstraintStatement),
    sqli_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementToTerraform)(struct!.sqliMatchStatement),
    xss_match_statement: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementToTerraform)(struct!.xssMatchStatement),
  }
}

export interface Wafv2RuleGroupRuleVisibilityConfig {
  readonly cloudwatchMetricsEnabled: boolean;
  readonly metricName: string;
  readonly sampledRequestsEnabled: boolean;
}

function wafv2RuleGroupRuleVisibilityConfigToTerraform(struct?: Wafv2RuleGroupRuleVisibilityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}

export interface Wafv2RuleGroupRule {
  readonly name: string;
  readonly priority: number;
  /** action block */
  readonly action: Wafv2RuleGroupRuleAction[];
  /** statement block */
  readonly statement: Wafv2RuleGroupRuleStatement[];
  /** visibility_config block */
  readonly visibilityConfig: Wafv2RuleGroupRuleVisibilityConfig[];
}

function wafv2RuleGroupRuleToTerraform(struct?: Wafv2RuleGroupRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    action: cdktf.listMapper(wafv2RuleGroupRuleActionToTerraform)(struct!.action),
    statement: cdktf.listMapper(wafv2RuleGroupRuleStatementToTerraform)(struct!.statement),
    visibility_config: cdktf.listMapper(wafv2RuleGroupRuleVisibilityConfigToTerraform)(struct!.visibilityConfig),
  }
}

export interface Wafv2RuleGroupVisibilityConfig {
  readonly cloudwatchMetricsEnabled: boolean;
  readonly metricName: string;
  readonly sampledRequestsEnabled: boolean;
}

function wafv2RuleGroupVisibilityConfigToTerraform(struct?: Wafv2RuleGroupVisibilityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct!.cloudwatchMetricsEnabled),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    sampled_requests_enabled: cdktf.booleanToTerraform(struct!.sampledRequestsEnabled),
  }
}


// Resource

export class Wafv2RuleGroup extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: Wafv2RuleGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_wafv2_rule_group',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._capacity = config.capacity;
    this._description = config.description;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
    this._rule = config.rule;
    this._visibilityConfig = config.visibilityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity: number;
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lock_token - computed: true, optional: false, required: false
  public get lockToken() {
    return this.getStringAttribute('lock_token');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // scope - computed: false, optional: false, required: true
  private _scope: string;
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // rule - computed: false, optional: true, required: false
  private _rule?: Wafv2RuleGroupRule[];
  public get rule() {
    return this.interpolationForAttribute('rule') as any;
  }
  public set rule(value: Wafv2RuleGroupRule[] ) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule
  }

  // visibility_config - computed: false, optional: false, required: true
  private _visibilityConfig: Wafv2RuleGroupVisibilityConfig[];
  public get visibilityConfig() {
    return this.interpolationForAttribute('visibility_config') as any;
  }
  public set visibilityConfig(value: Wafv2RuleGroupVisibilityConfig[]) {
    this._visibilityConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityConfigInput() {
    return this._visibilityConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capacity: cdktf.numberToTerraform(this._capacity),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      rule: cdktf.listMapper(wafv2RuleGroupRuleToTerraform)(this._rule),
      visibility_config: cdktf.listMapper(wafv2RuleGroupVisibilityConfigToTerraform)(this._visibilityConfig),
    };
  }
}
