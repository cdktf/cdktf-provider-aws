// https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityhubInsightConfig extends cdktf.TerraformMetaArguments {
  readonly groupByAttribute: string;
  readonly name: string;
  /** filters block */
  readonly filters: SecurityhubInsightFilters[];
}
export interface SecurityhubInsightFiltersAwsAccountId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersAwsAccountIdToTerraform(struct?: SecurityhubInsightFiltersAwsAccountId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersCompanyName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersCompanyNameToTerraform(struct?: SecurityhubInsightFiltersCompanyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersComplianceStatus {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersComplianceStatusToTerraform(struct?: SecurityhubInsightFiltersComplianceStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersConfidence {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersConfidenceToTerraform(struct?: SecurityhubInsightFiltersConfidence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersCreatedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersCreatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersCreatedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersCreatedAtDateRange[];
}

function securityhubInsightFiltersCreatedAtToTerraform(struct?: SecurityhubInsightFiltersCreatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersCreatedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersCriticality {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersCriticalityToTerraform(struct?: SecurityhubInsightFiltersCriticality): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersDescription {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersDescriptionToTerraform(struct?: SecurityhubInsightFiltersDescription): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsConfidence {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsConfidence): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsCriticality {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsCriticality): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFindingProviderFieldsTypes {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFirstObservedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersFirstObservedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersFirstObservedAtDateRange[];
}

function securityhubInsightFiltersFirstObservedAtToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersFirstObservedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersGeneratorId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersGeneratorIdToTerraform(struct?: SecurityhubInsightFiltersGeneratorId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersIdToTerraform(struct?: SecurityhubInsightFiltersId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersKeyword {
  readonly value: string;
}

function securityhubInsightFiltersKeywordToTerraform(struct?: SecurityhubInsightFiltersKeyword): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersLastObservedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersLastObservedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersLastObservedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersLastObservedAtDateRange[];
}

function securityhubInsightFiltersLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersLastObservedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersLastObservedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersMalwareName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersMalwareNameToTerraform(struct?: SecurityhubInsightFiltersMalwareName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersMalwarePath {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersMalwarePathToTerraform(struct?: SecurityhubInsightFiltersMalwarePath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersMalwareState {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersMalwareStateToTerraform(struct?: SecurityhubInsightFiltersMalwareState): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersMalwareType {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersMalwareTypeToTerraform(struct?: SecurityhubInsightFiltersMalwareType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationDomain {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationDomain): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationIpv4 {
  readonly cidr: string;
}

function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationIpv6 {
  readonly cidr: string;
}

function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv6): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkDestinationPort {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationPort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersNetworkDirection {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersNetworkDirectionToTerraform(struct?: SecurityhubInsightFiltersNetworkDirection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkProtocol {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersNetworkProtocolToTerraform(struct?: SecurityhubInsightFiltersNetworkProtocol): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceDomain {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceDomain): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceIpv4 {
  readonly cidr: string;
}

function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv4): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceIpv6 {
  readonly cidr: string;
}

function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv6): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersNetworkSourceMac {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersNetworkSourceMacToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceMac): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNetworkSourcePort {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersNetworkSourcePortToTerraform(struct?: SecurityhubInsightFiltersNetworkSourcePort): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersNoteText {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersNoteTextToTerraform(struct?: SecurityhubInsightFiltersNoteText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNoteUpdatedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersNoteUpdatedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersNoteUpdatedAtDateRange[];
}

function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersNoteUpdatedBy {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersNoteUpdatedByToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedBy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessLaunchedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessLaunchedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersProcessLaunchedAtDateRange[];
}

function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersProcessName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersProcessNameToTerraform(struct?: SecurityhubInsightFiltersProcessName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessParentPid {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersProcessParentPidToTerraform(struct?: SecurityhubInsightFiltersProcessParentPid): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersProcessPath {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersProcessPathToTerraform(struct?: SecurityhubInsightFiltersProcessPath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessPid {
  readonly eq?: string;
  readonly gte?: string;
  readonly lte?: string;
}

function securityhubInsightFiltersProcessPidToTerraform(struct?: SecurityhubInsightFiltersProcessPid): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    eq: cdktf.stringToTerraform(struct!.eq),
    gte: cdktf.stringToTerraform(struct!.gte),
    lte: cdktf.stringToTerraform(struct!.lte),
  }
}

export interface SecurityhubInsightFiltersProcessTerminatedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProcessTerminatedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersProcessTerminatedAtDateRange[];
}

function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersProductArn {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersProductArnToTerraform(struct?: SecurityhubInsightFiltersProductArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProductFields {
  readonly comparison: string;
  readonly key: string;
  readonly value: string;
}

function securityhubInsightFiltersProductFieldsToTerraform(struct?: SecurityhubInsightFiltersProductFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersProductName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersProductNameToTerraform(struct?: SecurityhubInsightFiltersProductName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRecommendationText {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersRecommendationTextToTerraform(struct?: SecurityhubInsightFiltersRecommendationText): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRecordState {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersRecordStateToTerraform(struct?: SecurityhubInsightFiltersRecordState): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRelatedFindingsId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersRelatedFindingsProductArn {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsProductArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceImageId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses {
  readonly cidr: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses {
  readonly cidr: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr: cdktf.stringToTerraform(struct!.cidr),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange[];
}

function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceType {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange[];
}

function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceContainerImageId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceContainerImageName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceContainerLaunchedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange[];
}

function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersResourceContainerName {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceContainerNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceDetailsOther {
  readonly comparison: string;
  readonly key: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct?: SecurityhubInsightFiltersResourceDetailsOther): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceId {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceIdToTerraform(struct?: SecurityhubInsightFiltersResourceId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourcePartition {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourcePartitionToTerraform(struct?: SecurityhubInsightFiltersResourcePartition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceRegion {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceRegionToTerraform(struct?: SecurityhubInsightFiltersResourceRegion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceTags {
  readonly comparison: string;
  readonly key: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceTagsToTerraform(struct?: SecurityhubInsightFiltersResourceTags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersResourceType {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersResourceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersSeverityLabel {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersSeverityLabel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersSourceUrl {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersSourceUrlToTerraform(struct?: SecurityhubInsightFiltersSourceUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorCategory {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorCategory): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange[];
}

function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorSource {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSource): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorType {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersThreatIntelIndicatorValue {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersTitle {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersTitleToTerraform(struct?: SecurityhubInsightFiltersTitle): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersType {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersTypeToTerraform(struct?: SecurityhubInsightFiltersType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersUpdatedAtDateRange {
  readonly unit: string;
  readonly value: number;
}

function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersUpdatedAt {
  readonly end?: string;
  readonly start?: string;
  /** date_range block */
  readonly dateRange?: SecurityhubInsightFiltersUpdatedAtDateRange[];
}

function securityhubInsightFiltersUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersUpdatedAt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
    date_range: cdktf.listMapper(securityhubInsightFiltersUpdatedAtDateRangeToTerraform)(struct!.dateRange),
  }
}

export interface SecurityhubInsightFiltersUserDefinedValues {
  readonly comparison: string;
  readonly key: string;
  readonly value: string;
}

function securityhubInsightFiltersUserDefinedValuesToTerraform(struct?: SecurityhubInsightFiltersUserDefinedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersVerificationState {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersVerificationStateToTerraform(struct?: SecurityhubInsightFiltersVerificationState): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFiltersWorkflowStatus {
  readonly comparison: string;
  readonly value: string;
}

function securityhubInsightFiltersWorkflowStatusToTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    comparison: cdktf.stringToTerraform(struct!.comparison),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SecurityhubInsightFilters {
  /** aws_account_id block */
  readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[];
  /** company_name block */
  readonly companyName?: SecurityhubInsightFiltersCompanyName[];
  /** compliance_status block */
  readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[];
  /** confidence block */
  readonly confidence?: SecurityhubInsightFiltersConfidence[];
  /** created_at block */
  readonly createdAt?: SecurityhubInsightFiltersCreatedAt[];
  /** criticality block */
  readonly criticality?: SecurityhubInsightFiltersCriticality[];
  /** description block */
  readonly description?: SecurityhubInsightFiltersDescription[];
  /** finding_provider_fields_confidence block */
  readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[];
  /** finding_provider_fields_criticality block */
  readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[];
  /** finding_provider_fields_related_findings_id block */
  readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[];
  /** finding_provider_fields_related_findings_product_arn block */
  readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[];
  /** finding_provider_fields_severity_label block */
  readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[];
  /** finding_provider_fields_severity_original block */
  readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[];
  /** finding_provider_fields_types block */
  readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[];
  /** first_observed_at block */
  readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[];
  /** generator_id block */
  readonly generatorId?: SecurityhubInsightFiltersGeneratorId[];
  /** id block */
  readonly id?: SecurityhubInsightFiltersId[];
  /** keyword block */
  readonly keyword?: SecurityhubInsightFiltersKeyword[];
  /** last_observed_at block */
  readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[];
  /** malware_name block */
  readonly malwareName?: SecurityhubInsightFiltersMalwareName[];
  /** malware_path block */
  readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[];
  /** malware_state block */
  readonly malwareState?: SecurityhubInsightFiltersMalwareState[];
  /** malware_type block */
  readonly malwareType?: SecurityhubInsightFiltersMalwareType[];
  /** network_destination_domain block */
  readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[];
  /** network_destination_ipv4 block */
  readonly networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[];
  /** network_destination_ipv6 block */
  readonly networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[];
  /** network_destination_port block */
  readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[];
  /** network_direction block */
  readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[];
  /** network_protocol block */
  readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[];
  /** network_source_domain block */
  readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[];
  /** network_source_ipv4 block */
  readonly networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[];
  /** network_source_ipv6 block */
  readonly networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[];
  /** network_source_mac block */
  readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[];
  /** network_source_port block */
  readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[];
  /** note_text block */
  readonly noteText?: SecurityhubInsightFiltersNoteText[];
  /** note_updated_at block */
  readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[];
  /** note_updated_by block */
  readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[];
  /** process_launched_at block */
  readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[];
  /** process_name block */
  readonly processName?: SecurityhubInsightFiltersProcessName[];
  /** process_parent_pid block */
  readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[];
  /** process_path block */
  readonly processPath?: SecurityhubInsightFiltersProcessPath[];
  /** process_pid block */
  readonly processPid?: SecurityhubInsightFiltersProcessPid[];
  /** process_terminated_at block */
  readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[];
  /** product_arn block */
  readonly productArn?: SecurityhubInsightFiltersProductArn[];
  /** product_fields block */
  readonly productFields?: SecurityhubInsightFiltersProductFields[];
  /** product_name block */
  readonly productName?: SecurityhubInsightFiltersProductName[];
  /** recommendation_text block */
  readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[];
  /** record_state block */
  readonly recordState?: SecurityhubInsightFiltersRecordState[];
  /** related_findings_id block */
  readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[];
  /** related_findings_product_arn block */
  readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[];
  /** resource_aws_ec2_instance_iam_instance_profile_arn block */
  readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[];
  /** resource_aws_ec2_instance_image_id block */
  readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[];
  /** resource_aws_ec2_instance_ipv4_addresses block */
  readonly resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[];
  /** resource_aws_ec2_instance_ipv6_addresses block */
  readonly resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[];
  /** resource_aws_ec2_instance_key_name block */
  readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[];
  /** resource_aws_ec2_instance_launched_at block */
  readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[];
  /** resource_aws_ec2_instance_subnet_id block */
  readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[];
  /** resource_aws_ec2_instance_type block */
  readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[];
  /** resource_aws_ec2_instance_vpc_id block */
  readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[];
  /** resource_aws_iam_access_key_created_at block */
  readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[];
  /** resource_aws_iam_access_key_status block */
  readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[];
  /** resource_aws_iam_access_key_user_name block */
  readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[];
  /** resource_aws_s3_bucket_owner_id block */
  readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[];
  /** resource_aws_s3_bucket_owner_name block */
  readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[];
  /** resource_container_image_id block */
  readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[];
  /** resource_container_image_name block */
  readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[];
  /** resource_container_launched_at block */
  readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[];
  /** resource_container_name block */
  readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[];
  /** resource_details_other block */
  readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[];
  /** resource_id block */
  readonly resourceId?: SecurityhubInsightFiltersResourceId[];
  /** resource_partition block */
  readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[];
  /** resource_region block */
  readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[];
  /** resource_tags block */
  readonly resourceTags?: SecurityhubInsightFiltersResourceTags[];
  /** resource_type block */
  readonly resourceType?: SecurityhubInsightFiltersResourceType[];
  /** severity_label block */
  readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[];
  /** source_url block */
  readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[];
  /** threat_intel_indicator_category block */
  readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[];
  /** threat_intel_indicator_last_observed_at block */
  readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[];
  /** threat_intel_indicator_source block */
  readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[];
  /** threat_intel_indicator_source_url block */
  readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[];
  /** threat_intel_indicator_type block */
  readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[];
  /** threat_intel_indicator_value block */
  readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[];
  /** title block */
  readonly title?: SecurityhubInsightFiltersTitle[];
  /** type block */
  readonly type?: SecurityhubInsightFiltersType[];
  /** updated_at block */
  readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[];
  /** user_defined_values block */
  readonly userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[];
  /** verification_state block */
  readonly verificationState?: SecurityhubInsightFiltersVerificationState[];
  /** workflow_status block */
  readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[];
}

function securityhubInsightFiltersToTerraform(struct?: SecurityhubInsightFilters): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aws_account_id: cdktf.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform)(struct!.awsAccountId),
    company_name: cdktf.listMapper(securityhubInsightFiltersCompanyNameToTerraform)(struct!.companyName),
    compliance_status: cdktf.listMapper(securityhubInsightFiltersComplianceStatusToTerraform)(struct!.complianceStatus),
    confidence: cdktf.listMapper(securityhubInsightFiltersConfidenceToTerraform)(struct!.confidence),
    created_at: cdktf.listMapper(securityhubInsightFiltersCreatedAtToTerraform)(struct!.createdAt),
    criticality: cdktf.listMapper(securityhubInsightFiltersCriticalityToTerraform)(struct!.criticality),
    description: cdktf.listMapper(securityhubInsightFiltersDescriptionToTerraform)(struct!.description),
    finding_provider_fields_confidence: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform)(struct!.findingProviderFieldsConfidence),
    finding_provider_fields_criticality: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform)(struct!.findingProviderFieldsCriticality),
    finding_provider_fields_related_findings_id: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform)(struct!.findingProviderFieldsRelatedFindingsId),
    finding_provider_fields_related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform)(struct!.findingProviderFieldsRelatedFindingsProductArn),
    finding_provider_fields_severity_label: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform)(struct!.findingProviderFieldsSeverityLabel),
    finding_provider_fields_severity_original: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform)(struct!.findingProviderFieldsSeverityOriginal),
    finding_provider_fields_types: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform)(struct!.findingProviderFieldsTypes),
    first_observed_at: cdktf.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform)(struct!.firstObservedAt),
    generator_id: cdktf.listMapper(securityhubInsightFiltersGeneratorIdToTerraform)(struct!.generatorId),
    id: cdktf.listMapper(securityhubInsightFiltersIdToTerraform)(struct!.id),
    keyword: cdktf.listMapper(securityhubInsightFiltersKeywordToTerraform)(struct!.keyword),
    last_observed_at: cdktf.listMapper(securityhubInsightFiltersLastObservedAtToTerraform)(struct!.lastObservedAt),
    malware_name: cdktf.listMapper(securityhubInsightFiltersMalwareNameToTerraform)(struct!.malwareName),
    malware_path: cdktf.listMapper(securityhubInsightFiltersMalwarePathToTerraform)(struct!.malwarePath),
    malware_state: cdktf.listMapper(securityhubInsightFiltersMalwareStateToTerraform)(struct!.malwareState),
    malware_type: cdktf.listMapper(securityhubInsightFiltersMalwareTypeToTerraform)(struct!.malwareType),
    network_destination_domain: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform)(struct!.networkDestinationDomain),
    network_destination_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv4ToTerraform)(struct!.networkDestinationIpv4),
    network_destination_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv6ToTerraform)(struct!.networkDestinationIpv6),
    network_destination_port: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform)(struct!.networkDestinationPort),
    network_direction: cdktf.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform)(struct!.networkDirection),
    network_protocol: cdktf.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform)(struct!.networkProtocol),
    network_source_domain: cdktf.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform)(struct!.networkSourceDomain),
    network_source_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv4ToTerraform)(struct!.networkSourceIpv4),
    network_source_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv6ToTerraform)(struct!.networkSourceIpv6),
    network_source_mac: cdktf.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform)(struct!.networkSourceMac),
    network_source_port: cdktf.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform)(struct!.networkSourcePort),
    note_text: cdktf.listMapper(securityhubInsightFiltersNoteTextToTerraform)(struct!.noteText),
    note_updated_at: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform)(struct!.noteUpdatedAt),
    note_updated_by: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform)(struct!.noteUpdatedBy),
    process_launched_at: cdktf.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform)(struct!.processLaunchedAt),
    process_name: cdktf.listMapper(securityhubInsightFiltersProcessNameToTerraform)(struct!.processName),
    process_parent_pid: cdktf.listMapper(securityhubInsightFiltersProcessParentPidToTerraform)(struct!.processParentPid),
    process_path: cdktf.listMapper(securityhubInsightFiltersProcessPathToTerraform)(struct!.processPath),
    process_pid: cdktf.listMapper(securityhubInsightFiltersProcessPidToTerraform)(struct!.processPid),
    process_terminated_at: cdktf.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform)(struct!.processTerminatedAt),
    product_arn: cdktf.listMapper(securityhubInsightFiltersProductArnToTerraform)(struct!.productArn),
    product_fields: cdktf.listMapper(securityhubInsightFiltersProductFieldsToTerraform)(struct!.productFields),
    product_name: cdktf.listMapper(securityhubInsightFiltersProductNameToTerraform)(struct!.productName),
    recommendation_text: cdktf.listMapper(securityhubInsightFiltersRecommendationTextToTerraform)(struct!.recommendationText),
    record_state: cdktf.listMapper(securityhubInsightFiltersRecordStateToTerraform)(struct!.recordState),
    related_findings_id: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform)(struct!.relatedFindingsId),
    related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform)(struct!.relatedFindingsProductArn),
    resource_aws_ec2_instance_iam_instance_profile_arn: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform)(struct!.resourceAwsEc2InstanceIamInstanceProfileArn),
    resource_aws_ec2_instance_image_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform)(struct!.resourceAwsEc2InstanceImageId),
    resource_aws_ec2_instance_ipv4_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform)(struct!.resourceAwsEc2InstanceIpv4Addresses),
    resource_aws_ec2_instance_ipv6_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform)(struct!.resourceAwsEc2InstanceIpv6Addresses),
    resource_aws_ec2_instance_key_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform)(struct!.resourceAwsEc2InstanceKeyName),
    resource_aws_ec2_instance_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform)(struct!.resourceAwsEc2InstanceLaunchedAt),
    resource_aws_ec2_instance_subnet_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform)(struct!.resourceAwsEc2InstanceSubnetId),
    resource_aws_ec2_instance_type: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform)(struct!.resourceAwsEc2InstanceType),
    resource_aws_ec2_instance_vpc_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform)(struct!.resourceAwsEc2InstanceVpcId),
    resource_aws_iam_access_key_created_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform)(struct!.resourceAwsIamAccessKeyCreatedAt),
    resource_aws_iam_access_key_status: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform)(struct!.resourceAwsIamAccessKeyStatus),
    resource_aws_iam_access_key_user_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform)(struct!.resourceAwsIamAccessKeyUserName),
    resource_aws_s3_bucket_owner_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform)(struct!.resourceAwsS3BucketOwnerId),
    resource_aws_s3_bucket_owner_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform)(struct!.resourceAwsS3BucketOwnerName),
    resource_container_image_id: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform)(struct!.resourceContainerImageId),
    resource_container_image_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform)(struct!.resourceContainerImageName),
    resource_container_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform)(struct!.resourceContainerLaunchedAt),
    resource_container_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform)(struct!.resourceContainerName),
    resource_details_other: cdktf.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform)(struct!.resourceDetailsOther),
    resource_id: cdktf.listMapper(securityhubInsightFiltersResourceIdToTerraform)(struct!.resourceId),
    resource_partition: cdktf.listMapper(securityhubInsightFiltersResourcePartitionToTerraform)(struct!.resourcePartition),
    resource_region: cdktf.listMapper(securityhubInsightFiltersResourceRegionToTerraform)(struct!.resourceRegion),
    resource_tags: cdktf.listMapper(securityhubInsightFiltersResourceTagsToTerraform)(struct!.resourceTags),
    resource_type: cdktf.listMapper(securityhubInsightFiltersResourceTypeToTerraform)(struct!.resourceType),
    severity_label: cdktf.listMapper(securityhubInsightFiltersSeverityLabelToTerraform)(struct!.severityLabel),
    source_url: cdktf.listMapper(securityhubInsightFiltersSourceUrlToTerraform)(struct!.sourceUrl),
    threat_intel_indicator_category: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform)(struct!.threatIntelIndicatorCategory),
    threat_intel_indicator_last_observed_at: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform)(struct!.threatIntelIndicatorLastObservedAt),
    threat_intel_indicator_source: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform)(struct!.threatIntelIndicatorSource),
    threat_intel_indicator_source_url: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform)(struct!.threatIntelIndicatorSourceUrl),
    threat_intel_indicator_type: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform)(struct!.threatIntelIndicatorType),
    threat_intel_indicator_value: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform)(struct!.threatIntelIndicatorValue),
    title: cdktf.listMapper(securityhubInsightFiltersTitleToTerraform)(struct!.title),
    type: cdktf.listMapper(securityhubInsightFiltersTypeToTerraform)(struct!.type),
    updated_at: cdktf.listMapper(securityhubInsightFiltersUpdatedAtToTerraform)(struct!.updatedAt),
    user_defined_values: cdktf.listMapper(securityhubInsightFiltersUserDefinedValuesToTerraform)(struct!.userDefinedValues),
    verification_state: cdktf.listMapper(securityhubInsightFiltersVerificationStateToTerraform)(struct!.verificationState),
    workflow_status: cdktf.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform)(struct!.workflowStatus),
  }
}


// Resource

export class SecurityhubInsight extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SecurityhubInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_securityhub_insight',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupByAttribute = config.groupByAttribute;
    this._name = config.name;
    this._filters = config.filters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // group_by_attribute - computed: false, optional: false, required: true
  private _groupByAttribute: string;
  public get groupByAttribute() {
    return this.getStringAttribute('group_by_attribute');
  }
  public set groupByAttribute(value: string) {
    this._groupByAttribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByAttributeInput() {
    return this._groupByAttribute
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // filters - computed: false, optional: false, required: true
  private _filters: SecurityhubInsightFilters[];
  public get filters() {
    return this.interpolationForAttribute('filters') as any;
  }
  public set filters(value: SecurityhubInsightFilters[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_by_attribute: cdktf.stringToTerraform(this._groupByAttribute),
      name: cdktf.stringToTerraform(this._name),
      filters: cdktf.listMapper(securityhubInsightFiltersToTerraform)(this._filters),
    };
  }
}
