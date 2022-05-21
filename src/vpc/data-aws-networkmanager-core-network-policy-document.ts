// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

/**
* AWS VPC
*/
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#version DataAwsNetworkmanagerCoreNetworkPolicyDocument#version}
  */
  readonly version?: string;
  /**
  * attachment_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#attachment_policies DataAwsNetworkmanagerCoreNetworkPolicyDocument#attachment_policies}
  */
  readonly attachmentPolicies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable;
  /**
  * core_network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#core_network_configuration DataAwsNetworkmanagerCoreNetworkPolicyDocument#core_network_configuration}
  */
  readonly coreNetworkConfiguration: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable;
  /**
  * segment_actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segment_actions DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment_actions}
  */
  readonly segmentActions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable;
  /**
  * segments block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segments DataAwsNetworkmanagerCoreNetworkPolicyDocument#segments}
  */
  readonly segments: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable;
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#association_method DataAwsNetworkmanagerCoreNetworkPolicyDocument#association_method}
  */
  readonly associationMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#require_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_acceptance}
  */
  readonly requireAcceptance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#tag_value_of_key DataAwsNetworkmanagerCoreNetworkPolicyDocument#tag_value_of_key}
  */
  readonly tagValueOfKey?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference | DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    association_method: cdktf.stringToTerraform(struct!.associationMethod),
    require_acceptance: cdktf.booleanToTerraform(struct!.requireAcceptance),
    segment: cdktf.stringToTerraform(struct!.segment),
    tag_value_of_key: cdktf.stringToTerraform(struct!.tagValueOfKey),
  }
}

export class DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.associationMethod = this._associationMethod;
    }
    if (this._requireAcceptance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAcceptance = this._requireAcceptance;
    }
    if (this._segment !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment;
    }
    if (this._tagValueOfKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueOfKey = this._tagValueOfKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._associationMethod = undefined;
      this._requireAcceptance = undefined;
      this._segment = undefined;
      this._tagValueOfKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._associationMethod = value.associationMethod;
      this._requireAcceptance = value.requireAcceptance;
      this._segment = value.segment;
      this._tagValueOfKey = value.tagValueOfKey;
    }
  }

  // association_method - computed: false, optional: false, required: true
  private _associationMethod?: string; 
  public get associationMethod() {
    return this.getStringAttribute('association_method');
  }
  public set associationMethod(value: string) {
    this._associationMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get associationMethodInput() {
    return this._associationMethod;
  }

  // require_acceptance - computed: false, optional: true, required: false
  private _requireAcceptance?: boolean | cdktf.IResolvable; 
  public get requireAcceptance() {
    return this.getBooleanAttribute('require_acceptance');
  }
  public set requireAcceptance(value: boolean | cdktf.IResolvable) {
    this._requireAcceptance = value;
  }
  public resetRequireAcceptance() {
    this._requireAcceptance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAcceptanceInput() {
    return this._requireAcceptance;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // tag_value_of_key - computed: false, optional: true, required: false
  private _tagValueOfKey?: string; 
  public get tagValueOfKey() {
    return this.getStringAttribute('tag_value_of_key');
  }
  public set tagValueOfKey(value: string) {
    this._tagValueOfKey = value;
  }
  public resetTagValueOfKey() {
    this._tagValueOfKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueOfKeyInput() {
    return this._tagValueOfKey;
  }
}
export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#key DataAwsNetworkmanagerCoreNetworkPolicyDocument#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#operator DataAwsNetworkmanagerCoreNetworkPolicyDocument#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#type DataAwsNetworkmanagerCoreNetworkPolicyDocument#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#value DataAwsNetworkmanagerCoreNetworkPolicyDocument#value}
  */
  readonly value?: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#condition_logic DataAwsNetworkmanagerCoreNetworkPolicyDocument#condition_logic}
  */
  readonly conditionLogic?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#rule_number DataAwsNetworkmanagerCoreNetworkPolicyDocument#rule_number}
  */
  readonly ruleNumber: number;
  /**
  * action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesAction;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#conditions DataAwsNetworkmanagerCoreNetworkPolicyDocument#conditions}
  */
  readonly conditions: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditions[] | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_logic: cdktf.stringToTerraform(struct!.conditionLogic),
    description: cdktf.stringToTerraform(struct!.description),
    rule_number: cdktf.numberToTerraform(struct!.ruleNumber),
    action: dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesActionToTerraform(struct!.action),
    conditions: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesConditionsToTerraform)(struct!.conditions),
  }
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#asn DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn}
  */
  readonly asn?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#location DataAwsNetworkmanagerCoreNetworkPolicyDocument#location}
  */
  readonly location: string;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    inside_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.insideCidrBlocks),
    location: cdktf.stringToTerraform(struct!.location),
  }
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#asn_ranges DataAwsNetworkmanagerCoreNetworkPolicyDocument#asn_ranges}
  */
  readonly asnRanges: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#inside_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#inside_cidr_blocks}
  */
  readonly insideCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#vpn_ecmp_support DataAwsNetworkmanagerCoreNetworkPolicyDocument#vpn_ecmp_support}
  */
  readonly vpnEcmpSupport?: boolean | cdktf.IResolvable;
  /**
  * edge_locations block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocations[] | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_ranges: cdktf.listMapper(cdktf.stringToTerraform)(struct!.asnRanges),
    inside_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.insideCidrBlocks),
    vpn_ecmp_support: cdktf.booleanToTerraform(struct!.vpnEcmpSupport),
    edge_locations: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationEdgeLocationsToTerraform)(struct!.edgeLocations),
  }
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#action DataAwsNetworkmanagerCoreNetworkPolicyDocument#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#destination_cidr_blocks DataAwsNetworkmanagerCoreNetworkPolicyDocument#destination_cidr_blocks}
  */
  readonly destinationCidrBlocks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#destinations DataAwsNetworkmanagerCoreNetworkPolicyDocument#destinations}
  */
  readonly destinations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#mode DataAwsNetworkmanagerCoreNetworkPolicyDocument#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#segment DataAwsNetworkmanagerCoreNetworkPolicyDocument#segment}
  */
  readonly segment: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#share_with DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with}
  */
  readonly shareWith?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#share_with_except DataAwsNetworkmanagerCoreNetworkPolicyDocument#share_with_except}
  */
  readonly shareWithExcept?: string[];
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    description: cdktf.stringToTerraform(struct!.description),
    destination_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinationCidrBlocks),
    destinations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.destinations),
    mode: cdktf.stringToTerraform(struct!.mode),
    segment: cdktf.stringToTerraform(struct!.segment),
    share_with: cdktf.listMapper(cdktf.stringToTerraform)(struct!.shareWith),
    share_with_except: cdktf.listMapper(cdktf.stringToTerraform)(struct!.shareWithExcept),
  }
}

export interface DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#allow_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#allow_filter}
  */
  readonly allowFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#deny_filter DataAwsNetworkmanagerCoreNetworkPolicyDocument#deny_filter}
  */
  readonly denyFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#description DataAwsNetworkmanagerCoreNetworkPolicyDocument#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#edge_locations DataAwsNetworkmanagerCoreNetworkPolicyDocument#edge_locations}
  */
  readonly edgeLocations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#isolate_attachments DataAwsNetworkmanagerCoreNetworkPolicyDocument#isolate_attachments}
  */
  readonly isolateAttachments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#name DataAwsNetworkmanagerCoreNetworkPolicyDocument#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document#require_attachment_acceptance DataAwsNetworkmanagerCoreNetworkPolicyDocument#require_attachment_acceptance}
  */
  readonly requireAttachmentAcceptance?: boolean | cdktf.IResolvable;
}

export function dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform(struct?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_filter: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowFilter),
    deny_filter: cdktf.listMapper(cdktf.stringToTerraform)(struct!.denyFilter),
    description: cdktf.stringToTerraform(struct!.description),
    edge_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.edgeLocations),
    isolate_attachments: cdktf.booleanToTerraform(struct!.isolateAttachments),
    name: cdktf.stringToTerraform(struct!.name),
    require_attachment_acceptance: cdktf.booleanToTerraform(struct!.requireAttachmentAcceptance),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document}
*/
export class DataAwsNetworkmanagerCoreNetworkPolicyDocument extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_networkmanager_core_network_policy_document";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/d/networkmanager_core_network_policy_document aws_networkmanager_core_network_policy_document} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: DataAwsNetworkmanagerCoreNetworkPolicyDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_networkmanager_core_network_policy_document',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.15.1',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._version = config.version;
    this._attachmentPolicies = config.attachmentPolicies;
    this._coreNetworkConfiguration = config.coreNetworkConfiguration;
    this._segmentActions = config.segmentActions;
    this._segments = config.segments;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // attachment_policies - computed: false, optional: true, required: false
  private _attachmentPolicies?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable; 
  public get attachmentPolicies() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('attachment_policies');
  }
  public set attachmentPolicies(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPolicies[] | cdktf.IResolvable) {
    this._attachmentPolicies = value;
  }
  public resetAttachmentPolicies() {
    this._attachmentPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachmentPoliciesInput() {
    return this._attachmentPolicies;
  }

  // core_network_configuration - computed: false, optional: false, required: true
  private _coreNetworkConfiguration?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable; 
  public get coreNetworkConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('core_network_configuration');
  }
  public set coreNetworkConfiguration(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfiguration[] | cdktf.IResolvable) {
    this._coreNetworkConfiguration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get coreNetworkConfigurationInput() {
    return this._coreNetworkConfiguration;
  }

  // segment_actions - computed: false, optional: true, required: false
  private _segmentActions?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable; 
  public get segmentActions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('segment_actions');
  }
  public set segmentActions(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActions[] | cdktf.IResolvable) {
    this._segmentActions = value;
  }
  public resetSegmentActions() {
    this._segmentActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentActionsInput() {
    return this._segmentActions;
  }

  // segments - computed: false, optional: false, required: true
  private _segments?: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable; 
  public get segments() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('segments');
  }
  public set segments(value: DataAwsNetworkmanagerCoreNetworkPolicyDocumentSegments[] | cdktf.IResolvable) {
    this._segments = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      version: cdktf.stringToTerraform(this._version),
      attachment_policies: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentAttachmentPoliciesToTerraform)(this._attachmentPolicies),
      core_network_configuration: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentCoreNetworkConfigurationToTerraform)(this._coreNetworkConfiguration),
      segment_actions: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentActionsToTerraform)(this._segmentActions),
      segments: cdktf.listMapper(dataAwsNetworkmanagerCoreNetworkPolicyDocumentSegmentsToTerraform)(this._segments),
    };
  }
}
