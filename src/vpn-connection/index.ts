// https://www.terraform.io/docs/providers/aws/r/vpn_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpnConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}
  */
  readonly customerGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}
  */
  readonly localIpv4NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}
  */
  readonly localIpv6NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}
  */
  readonly outsideIpAddressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}
  */
  readonly remoteIpv4NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}
  */
  readonly remoteIpv6NetworkCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}
  */
  readonly staticRoutesOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}
  */
  readonly tagsAll?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}
  */
  readonly transitGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}
  */
  readonly transportTransitGatewayAttachmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}
  */
  readonly tunnel1DpdTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}
  */
  readonly tunnel1DpdTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}
  */
  readonly tunnel1IkeVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}
  */
  readonly tunnel1InsideCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}
  */
  readonly tunnel1InsideIpv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}
  */
  readonly tunnel1Phase1DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}
  */
  readonly tunnel1Phase1EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}
  */
  readonly tunnel1Phase1IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}
  */
  readonly tunnel1Phase1LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}
  */
  readonly tunnel1Phase2DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}
  */
  readonly tunnel1Phase2EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}
  */
  readonly tunnel1Phase2IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}
  */
  readonly tunnel1Phase2LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}
  */
  readonly tunnel1PresharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}
  */
  readonly tunnel1RekeyFuzzPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}
  */
  readonly tunnel1RekeyMarginTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}
  */
  readonly tunnel1ReplayWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}
  */
  readonly tunnel1StartupAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}
  */
  readonly tunnel2DpdTimeoutAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}
  */
  readonly tunnel2DpdTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}
  */
  readonly tunnel2IkeVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}
  */
  readonly tunnel2InsideCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}
  */
  readonly tunnel2InsideIpv6Cidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}
  */
  readonly tunnel2Phase1DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}
  */
  readonly tunnel2Phase1EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}
  */
  readonly tunnel2Phase1IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}
  */
  readonly tunnel2Phase1LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}
  */
  readonly tunnel2Phase2DhGroupNumbers?: number[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}
  */
  readonly tunnel2Phase2EncryptionAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}
  */
  readonly tunnel2Phase2IntegrityAlgorithms?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}
  */
  readonly tunnel2Phase2LifetimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}
  */
  readonly tunnel2PresharedKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}
  */
  readonly tunnel2RekeyFuzzPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}
  */
  readonly tunnel2RekeyMarginTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}
  */
  readonly tunnel2ReplayWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}
  */
  readonly tunnel2StartupAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}
  */
  readonly tunnelInsideIpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}
  */
  readonly vpnGatewayId?: string;
  /**
  * tunnel1_log_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}
  */
  readonly tunnel1LogOptions?: VpnConnectionTunnel1LogOptions;
  /**
  * tunnel2_log_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}
  */
  readonly tunnel2LogOptions?: VpnConnectionTunnel2LogOptions;
}
export interface VpnConnectionRoutes {
}

export function vpnConnectionRoutesToTerraform(struct?: VpnConnectionRoutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class VpnConnectionRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnConnectionRoutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionRoutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr_block - computed: true, optional: false, required: false
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class VpnConnectionRoutesList extends cdktf.ComplexList {

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
  public get(index: number): VpnConnectionRoutesOutputReference {
    return new VpnConnectionRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnConnectionVgwTelemetry {
}

export function vpnConnectionVgwTelemetryToTerraform(struct?: VpnConnectionVgwTelemetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class VpnConnectionVgwTelemetryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VpnConnectionVgwTelemetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionVgwTelemetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accepted_route_count - computed: true, optional: false, required: false
  public get acceptedRouteCount() {
    return this.getNumberAttribute('accepted_route_count');
  }

  // certificate_arn - computed: true, optional: false, required: false
  public get certificateArn() {
    return this.getStringAttribute('certificate_arn');
  }

  // last_status_change - computed: true, optional: false, required: false
  public get lastStatusChange() {
    return this.getStringAttribute('last_status_change');
  }

  // outside_ip_address - computed: true, optional: false, required: false
  public get outsideIpAddress() {
    return this.getStringAttribute('outside_ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: false
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

export class VpnConnectionVgwTelemetryList extends cdktf.ComplexList {

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
  public get(index: number): VpnConnectionVgwTelemetryOutputReference {
    return new VpnConnectionVgwTelemetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VpnConnectionTunnel1LogOptionsCloudwatchLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}
  */
  readonly logEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}
  */
  readonly logGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}
  */
  readonly logOutputFormat?: string;
}

export function vpnConnectionTunnel1LogOptionsCloudwatchLogOptionsToTerraform(struct?: VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference | VpnConnectionTunnel1LogOptionsCloudwatchLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enabled: cdktf.booleanToTerraform(struct!.logEnabled),
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
    log_output_format: cdktf.stringToTerraform(struct!.logOutputFormat),
  }
}

export class VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionTunnel1LogOptionsCloudwatchLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnabled = this._logEnabled;
    }
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    if (this._logOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOutputFormat = this._logOutputFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnabled = undefined;
      this._logGroupArn = undefined;
      this._logOutputFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnabled = value.logEnabled;
      this._logGroupArn = value.logGroupArn;
      this._logOutputFormat = value.logOutputFormat;
    }
  }

  // log_enabled - computed: false, optional: true, required: false
  private _logEnabled?: boolean | cdktf.IResolvable; 
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }
  public set logEnabled(value: boolean | cdktf.IResolvable) {
    this._logEnabled = value;
  }
  public resetLogEnabled() {
    this._logEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnabledInput() {
    return this._logEnabled;
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }

  // log_output_format - computed: false, optional: true, required: false
  private _logOutputFormat?: string; 
  public get logOutputFormat() {
    return this.getStringAttribute('log_output_format');
  }
  public set logOutputFormat(value: string) {
    this._logOutputFormat = value;
  }
  public resetLogOutputFormat() {
    this._logOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOutputFormatInput() {
    return this._logOutputFormat;
  }
}
export interface VpnConnectionTunnel1LogOptions {
  /**
  * cloudwatch_log_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}
  */
  readonly cloudwatchLogOptions?: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions;
}

export function vpnConnectionTunnel1LogOptionsToTerraform(struct?: VpnConnectionTunnel1LogOptionsOutputReference | VpnConnectionTunnel1LogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_log_options: vpnConnectionTunnel1LogOptionsCloudwatchLogOptionsToTerraform(struct!.cloudwatchLogOptions),
  }
}

export class VpnConnectionTunnel1LogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionTunnel1LogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogOptions = this._cloudwatchLogOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnel1LogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogOptions.internalValue = value.cloudwatchLogOptions;
    }
  }

  // cloudwatch_log_options - computed: false, optional: true, required: false
  private _cloudwatchLogOptions = new VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference(this, "cloudwatch_log_options");
  public get cloudwatchLogOptions() {
    return this._cloudwatchLogOptions;
  }
  public putCloudwatchLogOptions(value: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions) {
    this._cloudwatchLogOptions.internalValue = value;
  }
  public resetCloudwatchLogOptions() {
    this._cloudwatchLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogOptionsInput() {
    return this._cloudwatchLogOptions.internalValue;
  }
}
export interface VpnConnectionTunnel2LogOptionsCloudwatchLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}
  */
  readonly logEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}
  */
  readonly logGroupArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}
  */
  readonly logOutputFormat?: string;
}

export function vpnConnectionTunnel2LogOptionsCloudwatchLogOptionsToTerraform(struct?: VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference | VpnConnectionTunnel2LogOptionsCloudwatchLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_enabled: cdktf.booleanToTerraform(struct!.logEnabled),
    log_group_arn: cdktf.stringToTerraform(struct!.logGroupArn),
    log_output_format: cdktf.stringToTerraform(struct!.logOutputFormat),
  }
}

export class VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionTunnel2LogOptionsCloudwatchLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logEnabled = this._logEnabled;
    }
    if (this._logGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupArn = this._logGroupArn;
    }
    if (this._logOutputFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOutputFormat = this._logOutputFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logEnabled = undefined;
      this._logGroupArn = undefined;
      this._logOutputFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logEnabled = value.logEnabled;
      this._logGroupArn = value.logGroupArn;
      this._logOutputFormat = value.logOutputFormat;
    }
  }

  // log_enabled - computed: false, optional: true, required: false
  private _logEnabled?: boolean | cdktf.IResolvable; 
  public get logEnabled() {
    return this.getBooleanAttribute('log_enabled');
  }
  public set logEnabled(value: boolean | cdktf.IResolvable) {
    this._logEnabled = value;
  }
  public resetLogEnabled() {
    this._logEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logEnabledInput() {
    return this._logEnabled;
  }

  // log_group_arn - computed: false, optional: true, required: false
  private _logGroupArn?: string; 
  public get logGroupArn() {
    return this.getStringAttribute('log_group_arn');
  }
  public set logGroupArn(value: string) {
    this._logGroupArn = value;
  }
  public resetLogGroupArn() {
    this._logGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupArnInput() {
    return this._logGroupArn;
  }

  // log_output_format - computed: false, optional: true, required: false
  private _logOutputFormat?: string; 
  public get logOutputFormat() {
    return this.getStringAttribute('log_output_format');
  }
  public set logOutputFormat(value: string) {
    this._logOutputFormat = value;
  }
  public resetLogOutputFormat() {
    this._logOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOutputFormatInput() {
    return this._logOutputFormat;
  }
}
export interface VpnConnectionTunnel2LogOptions {
  /**
  * cloudwatch_log_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}
  */
  readonly cloudwatchLogOptions?: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions;
}

export function vpnConnectionTunnel2LogOptionsToTerraform(struct?: VpnConnectionTunnel2LogOptionsOutputReference | VpnConnectionTunnel2LogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_log_options: vpnConnectionTunnel2LogOptionsCloudwatchLogOptionsToTerraform(struct!.cloudwatchLogOptions),
  }
}

export class VpnConnectionTunnel2LogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpnConnectionTunnel2LogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogOptions = this._cloudwatchLogOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpnConnectionTunnel2LogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogOptions.internalValue = value.cloudwatchLogOptions;
    }
  }

  // cloudwatch_log_options - computed: false, optional: true, required: false
  private _cloudwatchLogOptions = new VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference(this, "cloudwatch_log_options");
  public get cloudwatchLogOptions() {
    return this._cloudwatchLogOptions;
  }
  public putCloudwatchLogOptions(value: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions) {
    this._cloudwatchLogOptions.internalValue = value;
  }
  public resetCloudwatchLogOptions() {
    this._cloudwatchLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogOptionsInput() {
    return this._cloudwatchLogOptions.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection aws_vpn_connection}
*/
export class VpnConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_vpn_connection";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection aws_vpn_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpnConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: VpnConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '4.57.0',
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
    this._customerGatewayId = config.customerGatewayId;
    this._enableAcceleration = config.enableAcceleration;
    this._id = config.id;
    this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
    this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
    this._outsideIpAddressType = config.outsideIpAddressType;
    this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
    this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
    this._staticRoutesOnly = config.staticRoutesOnly;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._transitGatewayId = config.transitGatewayId;
    this._transportTransitGatewayAttachmentId = config.transportTransitGatewayAttachmentId;
    this._tunnel1DpdTimeoutAction = config.tunnel1DpdTimeoutAction;
    this._tunnel1DpdTimeoutSeconds = config.tunnel1DpdTimeoutSeconds;
    this._tunnel1IkeVersions = config.tunnel1IkeVersions;
    this._tunnel1InsideCidr = config.tunnel1InsideCidr;
    this._tunnel1InsideIpv6Cidr = config.tunnel1InsideIpv6Cidr;
    this._tunnel1Phase1DhGroupNumbers = config.tunnel1Phase1DhGroupNumbers;
    this._tunnel1Phase1EncryptionAlgorithms = config.tunnel1Phase1EncryptionAlgorithms;
    this._tunnel1Phase1IntegrityAlgorithms = config.tunnel1Phase1IntegrityAlgorithms;
    this._tunnel1Phase1LifetimeSeconds = config.tunnel1Phase1LifetimeSeconds;
    this._tunnel1Phase2DhGroupNumbers = config.tunnel1Phase2DhGroupNumbers;
    this._tunnel1Phase2EncryptionAlgorithms = config.tunnel1Phase2EncryptionAlgorithms;
    this._tunnel1Phase2IntegrityAlgorithms = config.tunnel1Phase2IntegrityAlgorithms;
    this._tunnel1Phase2LifetimeSeconds = config.tunnel1Phase2LifetimeSeconds;
    this._tunnel1PresharedKey = config.tunnel1PresharedKey;
    this._tunnel1RekeyFuzzPercentage = config.tunnel1RekeyFuzzPercentage;
    this._tunnel1RekeyMarginTimeSeconds = config.tunnel1RekeyMarginTimeSeconds;
    this._tunnel1ReplayWindowSize = config.tunnel1ReplayWindowSize;
    this._tunnel1StartupAction = config.tunnel1StartupAction;
    this._tunnel2DpdTimeoutAction = config.tunnel2DpdTimeoutAction;
    this._tunnel2DpdTimeoutSeconds = config.tunnel2DpdTimeoutSeconds;
    this._tunnel2IkeVersions = config.tunnel2IkeVersions;
    this._tunnel2InsideCidr = config.tunnel2InsideCidr;
    this._tunnel2InsideIpv6Cidr = config.tunnel2InsideIpv6Cidr;
    this._tunnel2Phase1DhGroupNumbers = config.tunnel2Phase1DhGroupNumbers;
    this._tunnel2Phase1EncryptionAlgorithms = config.tunnel2Phase1EncryptionAlgorithms;
    this._tunnel2Phase1IntegrityAlgorithms = config.tunnel2Phase1IntegrityAlgorithms;
    this._tunnel2Phase1LifetimeSeconds = config.tunnel2Phase1LifetimeSeconds;
    this._tunnel2Phase2DhGroupNumbers = config.tunnel2Phase2DhGroupNumbers;
    this._tunnel2Phase2EncryptionAlgorithms = config.tunnel2Phase2EncryptionAlgorithms;
    this._tunnel2Phase2IntegrityAlgorithms = config.tunnel2Phase2IntegrityAlgorithms;
    this._tunnel2Phase2LifetimeSeconds = config.tunnel2Phase2LifetimeSeconds;
    this._tunnel2PresharedKey = config.tunnel2PresharedKey;
    this._tunnel2RekeyFuzzPercentage = config.tunnel2RekeyFuzzPercentage;
    this._tunnel2RekeyMarginTimeSeconds = config.tunnel2RekeyMarginTimeSeconds;
    this._tunnel2ReplayWindowSize = config.tunnel2ReplayWindowSize;
    this._tunnel2StartupAction = config.tunnel2StartupAction;
    this._tunnelInsideIpVersion = config.tunnelInsideIpVersion;
    this._type = config.type;
    this._vpnGatewayId = config.vpnGatewayId;
    this._tunnel1LogOptions.internalValue = config.tunnel1LogOptions;
    this._tunnel2LogOptions.internalValue = config.tunnel2LogOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // core_network_arn - computed: true, optional: false, required: false
  public get coreNetworkArn() {
    return this.getStringAttribute('core_network_arn');
  }

  // core_network_attachment_arn - computed: true, optional: false, required: false
  public get coreNetworkAttachmentArn() {
    return this.getStringAttribute('core_network_attachment_arn');
  }

  // customer_gateway_configuration - computed: true, optional: false, required: false
  public get customerGatewayConfiguration() {
    return this.getStringAttribute('customer_gateway_configuration');
  }

  // customer_gateway_id - computed: false, optional: false, required: true
  private _customerGatewayId?: string; 
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerGatewayIdInput() {
    return this._customerGatewayId;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
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

  // local_ipv4_network_cidr - computed: true, optional: true, required: false
  private _localIpv4NetworkCidr?: string; 
  public get localIpv4NetworkCidr() {
    return this.getStringAttribute('local_ipv4_network_cidr');
  }
  public set localIpv4NetworkCidr(value: string) {
    this._localIpv4NetworkCidr = value;
  }
  public resetLocalIpv4NetworkCidr() {
    this._localIpv4NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv4NetworkCidrInput() {
    return this._localIpv4NetworkCidr;
  }

  // local_ipv6_network_cidr - computed: true, optional: true, required: false
  private _localIpv6NetworkCidr?: string; 
  public get localIpv6NetworkCidr() {
    return this.getStringAttribute('local_ipv6_network_cidr');
  }
  public set localIpv6NetworkCidr(value: string) {
    this._localIpv6NetworkCidr = value;
  }
  public resetLocalIpv6NetworkCidr() {
    this._localIpv6NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpv6NetworkCidrInput() {
    return this._localIpv6NetworkCidr;
  }

  // outside_ip_address_type - computed: true, optional: true, required: false
  private _outsideIpAddressType?: string; 
  public get outsideIpAddressType() {
    return this.getStringAttribute('outside_ip_address_type');
  }
  public set outsideIpAddressType(value: string) {
    this._outsideIpAddressType = value;
  }
  public resetOutsideIpAddressType() {
    this._outsideIpAddressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideIpAddressTypeInput() {
    return this._outsideIpAddressType;
  }

  // remote_ipv4_network_cidr - computed: true, optional: true, required: false
  private _remoteIpv4NetworkCidr?: string; 
  public get remoteIpv4NetworkCidr() {
    return this.getStringAttribute('remote_ipv4_network_cidr');
  }
  public set remoteIpv4NetworkCidr(value: string) {
    this._remoteIpv4NetworkCidr = value;
  }
  public resetRemoteIpv4NetworkCidr() {
    this._remoteIpv4NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv4NetworkCidrInput() {
    return this._remoteIpv4NetworkCidr;
  }

  // remote_ipv6_network_cidr - computed: true, optional: true, required: false
  private _remoteIpv6NetworkCidr?: string; 
  public get remoteIpv6NetworkCidr() {
    return this.getStringAttribute('remote_ipv6_network_cidr');
  }
  public set remoteIpv6NetworkCidr(value: string) {
    this._remoteIpv6NetworkCidr = value;
  }
  public resetRemoteIpv6NetworkCidr() {
    this._remoteIpv6NetworkCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpv6NetworkCidrInput() {
    return this._remoteIpv6NetworkCidr;
  }

  // routes - computed: true, optional: false, required: false
  private _routes = new VpnConnectionRoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }

  // static_routes_only - computed: true, optional: true, required: false
  private _staticRoutesOnly?: boolean | cdktf.IResolvable; 
  public get staticRoutesOnly() {
    return this.getBooleanAttribute('static_routes_only');
  }
  public set staticRoutesOnly(value: boolean | cdktf.IResolvable) {
    this._staticRoutesOnly = value;
  }
  public resetStaticRoutesOnly() {
    this._staticRoutesOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesOnlyInput() {
    return this._staticRoutesOnly;
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

  // transit_gateway_attachment_id - computed: true, optional: false, required: false
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string; 
  public get transitGatewayId() {
    return this.getStringAttribute('transit_gateway_id');
  }
  public set transitGatewayId(value: string) {
    this._transitGatewayId = value;
  }
  public resetTransitGatewayId() {
    this._transitGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitGatewayIdInput() {
    return this._transitGatewayId;
  }

  // transport_transit_gateway_attachment_id - computed: false, optional: true, required: false
  private _transportTransitGatewayAttachmentId?: string; 
  public get transportTransitGatewayAttachmentId() {
    return this.getStringAttribute('transport_transit_gateway_attachment_id');
  }
  public set transportTransitGatewayAttachmentId(value: string) {
    this._transportTransitGatewayAttachmentId = value;
  }
  public resetTransportTransitGatewayAttachmentId() {
    this._transportTransitGatewayAttachmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTransitGatewayAttachmentIdInput() {
    return this._transportTransitGatewayAttachmentId;
  }

  // tunnel1_address - computed: true, optional: false, required: false
  public get tunnel1Address() {
    return this.getStringAttribute('tunnel1_address');
  }

  // tunnel1_bgp_asn - computed: true, optional: false, required: false
  public get tunnel1BgpAsn() {
    return this.getStringAttribute('tunnel1_bgp_asn');
  }

  // tunnel1_bgp_holdtime - computed: true, optional: false, required: false
  public get tunnel1BgpHoldtime() {
    return this.getNumberAttribute('tunnel1_bgp_holdtime');
  }

  // tunnel1_cgw_inside_address - computed: true, optional: false, required: false
  public get tunnel1CgwInsideAddress() {
    return this.getStringAttribute('tunnel1_cgw_inside_address');
  }

  // tunnel1_dpd_timeout_action - computed: false, optional: true, required: false
  private _tunnel1DpdTimeoutAction?: string; 
  public get tunnel1DpdTimeoutAction() {
    return this.getStringAttribute('tunnel1_dpd_timeout_action');
  }
  public set tunnel1DpdTimeoutAction(value: string) {
    this._tunnel1DpdTimeoutAction = value;
  }
  public resetTunnel1DpdTimeoutAction() {
    this._tunnel1DpdTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1DpdTimeoutActionInput() {
    return this._tunnel1DpdTimeoutAction;
  }

  // tunnel1_dpd_timeout_seconds - computed: false, optional: true, required: false
  private _tunnel1DpdTimeoutSeconds?: number; 
  public get tunnel1DpdTimeoutSeconds() {
    return this.getNumberAttribute('tunnel1_dpd_timeout_seconds');
  }
  public set tunnel1DpdTimeoutSeconds(value: number) {
    this._tunnel1DpdTimeoutSeconds = value;
  }
  public resetTunnel1DpdTimeoutSeconds() {
    this._tunnel1DpdTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1DpdTimeoutSecondsInput() {
    return this._tunnel1DpdTimeoutSeconds;
  }

  // tunnel1_ike_versions - computed: false, optional: true, required: false
  private _tunnel1IkeVersions?: string[]; 
  public get tunnel1IkeVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel1_ike_versions'));
  }
  public set tunnel1IkeVersions(value: string[]) {
    this._tunnel1IkeVersions = value;
  }
  public resetTunnel1IkeVersions() {
    this._tunnel1IkeVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1IkeVersionsInput() {
    return this._tunnel1IkeVersions;
  }

  // tunnel1_inside_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideCidr?: string; 
  public get tunnel1InsideCidr() {
    return this.getStringAttribute('tunnel1_inside_cidr');
  }
  public set tunnel1InsideCidr(value: string) {
    this._tunnel1InsideCidr = value;
  }
  public resetTunnel1InsideCidr() {
    this._tunnel1InsideCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1InsideCidrInput() {
    return this._tunnel1InsideCidr;
  }

  // tunnel1_inside_ipv6_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideIpv6Cidr?: string; 
  public get tunnel1InsideIpv6Cidr() {
    return this.getStringAttribute('tunnel1_inside_ipv6_cidr');
  }
  public set tunnel1InsideIpv6Cidr(value: string) {
    this._tunnel1InsideIpv6Cidr = value;
  }
  public resetTunnel1InsideIpv6Cidr() {
    this._tunnel1InsideIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1InsideIpv6CidrInput() {
    return this._tunnel1InsideIpv6Cidr;
  }

  // tunnel1_phase1_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel1Phase1DhGroupNumbers?: number[]; 
  public get tunnel1Phase1DhGroupNumbers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel1_phase1_dh_group_numbers')));
  }
  public set tunnel1Phase1DhGroupNumbers(value: number[]) {
    this._tunnel1Phase1DhGroupNumbers = value;
  }
  public resetTunnel1Phase1DhGroupNumbers() {
    this._tunnel1Phase1DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1DhGroupNumbersInput() {
    return this._tunnel1Phase1DhGroupNumbers;
  }

  // tunnel1_phase1_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase1EncryptionAlgorithms?: string[]; 
  public get tunnel1Phase1EncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase1_encryption_algorithms'));
  }
  public set tunnel1Phase1EncryptionAlgorithms(value: string[]) {
    this._tunnel1Phase1EncryptionAlgorithms = value;
  }
  public resetTunnel1Phase1EncryptionAlgorithms() {
    this._tunnel1Phase1EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1EncryptionAlgorithmsInput() {
    return this._tunnel1Phase1EncryptionAlgorithms;
  }

  // tunnel1_phase1_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase1IntegrityAlgorithms?: string[]; 
  public get tunnel1Phase1IntegrityAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase1_integrity_algorithms'));
  }
  public set tunnel1Phase1IntegrityAlgorithms(value: string[]) {
    this._tunnel1Phase1IntegrityAlgorithms = value;
  }
  public resetTunnel1Phase1IntegrityAlgorithms() {
    this._tunnel1Phase1IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1IntegrityAlgorithmsInput() {
    return this._tunnel1Phase1IntegrityAlgorithms;
  }

  // tunnel1_phase1_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel1Phase1LifetimeSeconds?: number; 
  public get tunnel1Phase1LifetimeSeconds() {
    return this.getNumberAttribute('tunnel1_phase1_lifetime_seconds');
  }
  public set tunnel1Phase1LifetimeSeconds(value: number) {
    this._tunnel1Phase1LifetimeSeconds = value;
  }
  public resetTunnel1Phase1LifetimeSeconds() {
    this._tunnel1Phase1LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase1LifetimeSecondsInput() {
    return this._tunnel1Phase1LifetimeSeconds;
  }

  // tunnel1_phase2_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel1Phase2DhGroupNumbers?: number[]; 
  public get tunnel1Phase2DhGroupNumbers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel1_phase2_dh_group_numbers')));
  }
  public set tunnel1Phase2DhGroupNumbers(value: number[]) {
    this._tunnel1Phase2DhGroupNumbers = value;
  }
  public resetTunnel1Phase2DhGroupNumbers() {
    this._tunnel1Phase2DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2DhGroupNumbersInput() {
    return this._tunnel1Phase2DhGroupNumbers;
  }

  // tunnel1_phase2_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase2EncryptionAlgorithms?: string[]; 
  public get tunnel1Phase2EncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase2_encryption_algorithms'));
  }
  public set tunnel1Phase2EncryptionAlgorithms(value: string[]) {
    this._tunnel1Phase2EncryptionAlgorithms = value;
  }
  public resetTunnel1Phase2EncryptionAlgorithms() {
    this._tunnel1Phase2EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2EncryptionAlgorithmsInput() {
    return this._tunnel1Phase2EncryptionAlgorithms;
  }

  // tunnel1_phase2_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase2IntegrityAlgorithms?: string[]; 
  public get tunnel1Phase2IntegrityAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel1_phase2_integrity_algorithms'));
  }
  public set tunnel1Phase2IntegrityAlgorithms(value: string[]) {
    this._tunnel1Phase2IntegrityAlgorithms = value;
  }
  public resetTunnel1Phase2IntegrityAlgorithms() {
    this._tunnel1Phase2IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2IntegrityAlgorithmsInput() {
    return this._tunnel1Phase2IntegrityAlgorithms;
  }

  // tunnel1_phase2_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel1Phase2LifetimeSeconds?: number; 
  public get tunnel1Phase2LifetimeSeconds() {
    return this.getNumberAttribute('tunnel1_phase2_lifetime_seconds');
  }
  public set tunnel1Phase2LifetimeSeconds(value: number) {
    this._tunnel1Phase2LifetimeSeconds = value;
  }
  public resetTunnel1Phase2LifetimeSeconds() {
    this._tunnel1Phase2LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1Phase2LifetimeSecondsInput() {
    return this._tunnel1Phase2LifetimeSeconds;
  }

  // tunnel1_preshared_key - computed: true, optional: true, required: false
  private _tunnel1PresharedKey?: string; 
  public get tunnel1PresharedKey() {
    return this.getStringAttribute('tunnel1_preshared_key');
  }
  public set tunnel1PresharedKey(value: string) {
    this._tunnel1PresharedKey = value;
  }
  public resetTunnel1PresharedKey() {
    this._tunnel1PresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1PresharedKeyInput() {
    return this._tunnel1PresharedKey;
  }

  // tunnel1_rekey_fuzz_percentage - computed: false, optional: true, required: false
  private _tunnel1RekeyFuzzPercentage?: number; 
  public get tunnel1RekeyFuzzPercentage() {
    return this.getNumberAttribute('tunnel1_rekey_fuzz_percentage');
  }
  public set tunnel1RekeyFuzzPercentage(value: number) {
    this._tunnel1RekeyFuzzPercentage = value;
  }
  public resetTunnel1RekeyFuzzPercentage() {
    this._tunnel1RekeyFuzzPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1RekeyFuzzPercentageInput() {
    return this._tunnel1RekeyFuzzPercentage;
  }

  // tunnel1_rekey_margin_time_seconds - computed: false, optional: true, required: false
  private _tunnel1RekeyMarginTimeSeconds?: number; 
  public get tunnel1RekeyMarginTimeSeconds() {
    return this.getNumberAttribute('tunnel1_rekey_margin_time_seconds');
  }
  public set tunnel1RekeyMarginTimeSeconds(value: number) {
    this._tunnel1RekeyMarginTimeSeconds = value;
  }
  public resetTunnel1RekeyMarginTimeSeconds() {
    this._tunnel1RekeyMarginTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1RekeyMarginTimeSecondsInput() {
    return this._tunnel1RekeyMarginTimeSeconds;
  }

  // tunnel1_replay_window_size - computed: false, optional: true, required: false
  private _tunnel1ReplayWindowSize?: number; 
  public get tunnel1ReplayWindowSize() {
    return this.getNumberAttribute('tunnel1_replay_window_size');
  }
  public set tunnel1ReplayWindowSize(value: number) {
    this._tunnel1ReplayWindowSize = value;
  }
  public resetTunnel1ReplayWindowSize() {
    this._tunnel1ReplayWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1ReplayWindowSizeInput() {
    return this._tunnel1ReplayWindowSize;
  }

  // tunnel1_startup_action - computed: false, optional: true, required: false
  private _tunnel1StartupAction?: string; 
  public get tunnel1StartupAction() {
    return this.getStringAttribute('tunnel1_startup_action');
  }
  public set tunnel1StartupAction(value: string) {
    this._tunnel1StartupAction = value;
  }
  public resetTunnel1StartupAction() {
    this._tunnel1StartupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1StartupActionInput() {
    return this._tunnel1StartupAction;
  }

  // tunnel1_vgw_inside_address - computed: true, optional: false, required: false
  public get tunnel1VgwInsideAddress() {
    return this.getStringAttribute('tunnel1_vgw_inside_address');
  }

  // tunnel2_address - computed: true, optional: false, required: false
  public get tunnel2Address() {
    return this.getStringAttribute('tunnel2_address');
  }

  // tunnel2_bgp_asn - computed: true, optional: false, required: false
  public get tunnel2BgpAsn() {
    return this.getStringAttribute('tunnel2_bgp_asn');
  }

  // tunnel2_bgp_holdtime - computed: true, optional: false, required: false
  public get tunnel2BgpHoldtime() {
    return this.getNumberAttribute('tunnel2_bgp_holdtime');
  }

  // tunnel2_cgw_inside_address - computed: true, optional: false, required: false
  public get tunnel2CgwInsideAddress() {
    return this.getStringAttribute('tunnel2_cgw_inside_address');
  }

  // tunnel2_dpd_timeout_action - computed: false, optional: true, required: false
  private _tunnel2DpdTimeoutAction?: string; 
  public get tunnel2DpdTimeoutAction() {
    return this.getStringAttribute('tunnel2_dpd_timeout_action');
  }
  public set tunnel2DpdTimeoutAction(value: string) {
    this._tunnel2DpdTimeoutAction = value;
  }
  public resetTunnel2DpdTimeoutAction() {
    this._tunnel2DpdTimeoutAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2DpdTimeoutActionInput() {
    return this._tunnel2DpdTimeoutAction;
  }

  // tunnel2_dpd_timeout_seconds - computed: false, optional: true, required: false
  private _tunnel2DpdTimeoutSeconds?: number; 
  public get tunnel2DpdTimeoutSeconds() {
    return this.getNumberAttribute('tunnel2_dpd_timeout_seconds');
  }
  public set tunnel2DpdTimeoutSeconds(value: number) {
    this._tunnel2DpdTimeoutSeconds = value;
  }
  public resetTunnel2DpdTimeoutSeconds() {
    this._tunnel2DpdTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2DpdTimeoutSecondsInput() {
    return this._tunnel2DpdTimeoutSeconds;
  }

  // tunnel2_ike_versions - computed: false, optional: true, required: false
  private _tunnel2IkeVersions?: string[]; 
  public get tunnel2IkeVersions() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel2_ike_versions'));
  }
  public set tunnel2IkeVersions(value: string[]) {
    this._tunnel2IkeVersions = value;
  }
  public resetTunnel2IkeVersions() {
    this._tunnel2IkeVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2IkeVersionsInput() {
    return this._tunnel2IkeVersions;
  }

  // tunnel2_inside_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideCidr?: string; 
  public get tunnel2InsideCidr() {
    return this.getStringAttribute('tunnel2_inside_cidr');
  }
  public set tunnel2InsideCidr(value: string) {
    this._tunnel2InsideCidr = value;
  }
  public resetTunnel2InsideCidr() {
    this._tunnel2InsideCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2InsideCidrInput() {
    return this._tunnel2InsideCidr;
  }

  // tunnel2_inside_ipv6_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideIpv6Cidr?: string; 
  public get tunnel2InsideIpv6Cidr() {
    return this.getStringAttribute('tunnel2_inside_ipv6_cidr');
  }
  public set tunnel2InsideIpv6Cidr(value: string) {
    this._tunnel2InsideIpv6Cidr = value;
  }
  public resetTunnel2InsideIpv6Cidr() {
    this._tunnel2InsideIpv6Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2InsideIpv6CidrInput() {
    return this._tunnel2InsideIpv6Cidr;
  }

  // tunnel2_phase1_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel2Phase1DhGroupNumbers?: number[]; 
  public get tunnel2Phase1DhGroupNumbers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel2_phase1_dh_group_numbers')));
  }
  public set tunnel2Phase1DhGroupNumbers(value: number[]) {
    this._tunnel2Phase1DhGroupNumbers = value;
  }
  public resetTunnel2Phase1DhGroupNumbers() {
    this._tunnel2Phase1DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1DhGroupNumbersInput() {
    return this._tunnel2Phase1DhGroupNumbers;
  }

  // tunnel2_phase1_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase1EncryptionAlgorithms?: string[]; 
  public get tunnel2Phase1EncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase1_encryption_algorithms'));
  }
  public set tunnel2Phase1EncryptionAlgorithms(value: string[]) {
    this._tunnel2Phase1EncryptionAlgorithms = value;
  }
  public resetTunnel2Phase1EncryptionAlgorithms() {
    this._tunnel2Phase1EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1EncryptionAlgorithmsInput() {
    return this._tunnel2Phase1EncryptionAlgorithms;
  }

  // tunnel2_phase1_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase1IntegrityAlgorithms?: string[]; 
  public get tunnel2Phase1IntegrityAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase1_integrity_algorithms'));
  }
  public set tunnel2Phase1IntegrityAlgorithms(value: string[]) {
    this._tunnel2Phase1IntegrityAlgorithms = value;
  }
  public resetTunnel2Phase1IntegrityAlgorithms() {
    this._tunnel2Phase1IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1IntegrityAlgorithmsInput() {
    return this._tunnel2Phase1IntegrityAlgorithms;
  }

  // tunnel2_phase1_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel2Phase1LifetimeSeconds?: number; 
  public get tunnel2Phase1LifetimeSeconds() {
    return this.getNumberAttribute('tunnel2_phase1_lifetime_seconds');
  }
  public set tunnel2Phase1LifetimeSeconds(value: number) {
    this._tunnel2Phase1LifetimeSeconds = value;
  }
  public resetTunnel2Phase1LifetimeSeconds() {
    this._tunnel2Phase1LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase1LifetimeSecondsInput() {
    return this._tunnel2Phase1LifetimeSeconds;
  }

  // tunnel2_phase2_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel2Phase2DhGroupNumbers?: number[]; 
  public get tunnel2Phase2DhGroupNumbers() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tunnel2_phase2_dh_group_numbers')));
  }
  public set tunnel2Phase2DhGroupNumbers(value: number[]) {
    this._tunnel2Phase2DhGroupNumbers = value;
  }
  public resetTunnel2Phase2DhGroupNumbers() {
    this._tunnel2Phase2DhGroupNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2DhGroupNumbersInput() {
    return this._tunnel2Phase2DhGroupNumbers;
  }

  // tunnel2_phase2_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase2EncryptionAlgorithms?: string[]; 
  public get tunnel2Phase2EncryptionAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase2_encryption_algorithms'));
  }
  public set tunnel2Phase2EncryptionAlgorithms(value: string[]) {
    this._tunnel2Phase2EncryptionAlgorithms = value;
  }
  public resetTunnel2Phase2EncryptionAlgorithms() {
    this._tunnel2Phase2EncryptionAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2EncryptionAlgorithmsInput() {
    return this._tunnel2Phase2EncryptionAlgorithms;
  }

  // tunnel2_phase2_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase2IntegrityAlgorithms?: string[]; 
  public get tunnel2Phase2IntegrityAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('tunnel2_phase2_integrity_algorithms'));
  }
  public set tunnel2Phase2IntegrityAlgorithms(value: string[]) {
    this._tunnel2Phase2IntegrityAlgorithms = value;
  }
  public resetTunnel2Phase2IntegrityAlgorithms() {
    this._tunnel2Phase2IntegrityAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2IntegrityAlgorithmsInput() {
    return this._tunnel2Phase2IntegrityAlgorithms;
  }

  // tunnel2_phase2_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel2Phase2LifetimeSeconds?: number; 
  public get tunnel2Phase2LifetimeSeconds() {
    return this.getNumberAttribute('tunnel2_phase2_lifetime_seconds');
  }
  public set tunnel2Phase2LifetimeSeconds(value: number) {
    this._tunnel2Phase2LifetimeSeconds = value;
  }
  public resetTunnel2Phase2LifetimeSeconds() {
    this._tunnel2Phase2LifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2Phase2LifetimeSecondsInput() {
    return this._tunnel2Phase2LifetimeSeconds;
  }

  // tunnel2_preshared_key - computed: true, optional: true, required: false
  private _tunnel2PresharedKey?: string; 
  public get tunnel2PresharedKey() {
    return this.getStringAttribute('tunnel2_preshared_key');
  }
  public set tunnel2PresharedKey(value: string) {
    this._tunnel2PresharedKey = value;
  }
  public resetTunnel2PresharedKey() {
    this._tunnel2PresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2PresharedKeyInput() {
    return this._tunnel2PresharedKey;
  }

  // tunnel2_rekey_fuzz_percentage - computed: false, optional: true, required: false
  private _tunnel2RekeyFuzzPercentage?: number; 
  public get tunnel2RekeyFuzzPercentage() {
    return this.getNumberAttribute('tunnel2_rekey_fuzz_percentage');
  }
  public set tunnel2RekeyFuzzPercentage(value: number) {
    this._tunnel2RekeyFuzzPercentage = value;
  }
  public resetTunnel2RekeyFuzzPercentage() {
    this._tunnel2RekeyFuzzPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2RekeyFuzzPercentageInput() {
    return this._tunnel2RekeyFuzzPercentage;
  }

  // tunnel2_rekey_margin_time_seconds - computed: false, optional: true, required: false
  private _tunnel2RekeyMarginTimeSeconds?: number; 
  public get tunnel2RekeyMarginTimeSeconds() {
    return this.getNumberAttribute('tunnel2_rekey_margin_time_seconds');
  }
  public set tunnel2RekeyMarginTimeSeconds(value: number) {
    this._tunnel2RekeyMarginTimeSeconds = value;
  }
  public resetTunnel2RekeyMarginTimeSeconds() {
    this._tunnel2RekeyMarginTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2RekeyMarginTimeSecondsInput() {
    return this._tunnel2RekeyMarginTimeSeconds;
  }

  // tunnel2_replay_window_size - computed: false, optional: true, required: false
  private _tunnel2ReplayWindowSize?: number; 
  public get tunnel2ReplayWindowSize() {
    return this.getNumberAttribute('tunnel2_replay_window_size');
  }
  public set tunnel2ReplayWindowSize(value: number) {
    this._tunnel2ReplayWindowSize = value;
  }
  public resetTunnel2ReplayWindowSize() {
    this._tunnel2ReplayWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2ReplayWindowSizeInput() {
    return this._tunnel2ReplayWindowSize;
  }

  // tunnel2_startup_action - computed: false, optional: true, required: false
  private _tunnel2StartupAction?: string; 
  public get tunnel2StartupAction() {
    return this.getStringAttribute('tunnel2_startup_action');
  }
  public set tunnel2StartupAction(value: string) {
    this._tunnel2StartupAction = value;
  }
  public resetTunnel2StartupAction() {
    this._tunnel2StartupAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2StartupActionInput() {
    return this._tunnel2StartupAction;
  }

  // tunnel2_vgw_inside_address - computed: true, optional: false, required: false
  public get tunnel2VgwInsideAddress() {
    return this.getStringAttribute('tunnel2_vgw_inside_address');
  }

  // tunnel_inside_ip_version - computed: true, optional: true, required: false
  private _tunnelInsideIpVersion?: string; 
  public get tunnelInsideIpVersion() {
    return this.getStringAttribute('tunnel_inside_ip_version');
  }
  public set tunnelInsideIpVersion(value: string) {
    this._tunnelInsideIpVersion = value;
  }
  public resetTunnelInsideIpVersion() {
    this._tunnelInsideIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelInsideIpVersionInput() {
    return this._tunnelInsideIpVersion;
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

  // vgw_telemetry - computed: true, optional: false, required: false
  private _vgwTelemetry = new VpnConnectionVgwTelemetryList(this, "vgw_telemetry", true);
  public get vgwTelemetry() {
    return this._vgwTelemetry;
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string; 
  public get vpnGatewayId() {
    return this.getStringAttribute('vpn_gateway_id');
  }
  public set vpnGatewayId(value: string) {
    this._vpnGatewayId = value;
  }
  public resetVpnGatewayId() {
    this._vpnGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnGatewayIdInput() {
    return this._vpnGatewayId;
  }

  // tunnel1_log_options - computed: false, optional: true, required: false
  private _tunnel1LogOptions = new VpnConnectionTunnel1LogOptionsOutputReference(this, "tunnel1_log_options");
  public get tunnel1LogOptions() {
    return this._tunnel1LogOptions;
  }
  public putTunnel1LogOptions(value: VpnConnectionTunnel1LogOptions) {
    this._tunnel1LogOptions.internalValue = value;
  }
  public resetTunnel1LogOptions() {
    this._tunnel1LogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel1LogOptionsInput() {
    return this._tunnel1LogOptions.internalValue;
  }

  // tunnel2_log_options - computed: false, optional: true, required: false
  private _tunnel2LogOptions = new VpnConnectionTunnel2LogOptionsOutputReference(this, "tunnel2_log_options");
  public get tunnel2LogOptions() {
    return this._tunnel2LogOptions;
  }
  public putTunnel2LogOptions(value: VpnConnectionTunnel2LogOptions) {
    this._tunnel2LogOptions.internalValue = value;
  }
  public resetTunnel2LogOptions() {
    this._tunnel2LogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnel2LogOptionsInput() {
    return this._tunnel2LogOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: cdktf.stringToTerraform(this._customerGatewayId),
      enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
      id: cdktf.stringToTerraform(this._id),
      local_ipv4_network_cidr: cdktf.stringToTerraform(this._localIpv4NetworkCidr),
      local_ipv6_network_cidr: cdktf.stringToTerraform(this._localIpv6NetworkCidr),
      outside_ip_address_type: cdktf.stringToTerraform(this._outsideIpAddressType),
      remote_ipv4_network_cidr: cdktf.stringToTerraform(this._remoteIpv4NetworkCidr),
      remote_ipv6_network_cidr: cdktf.stringToTerraform(this._remoteIpv6NetworkCidr),
      static_routes_only: cdktf.booleanToTerraform(this._staticRoutesOnly),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagsAll),
      transit_gateway_id: cdktf.stringToTerraform(this._transitGatewayId),
      transport_transit_gateway_attachment_id: cdktf.stringToTerraform(this._transportTransitGatewayAttachmentId),
      tunnel1_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel1DpdTimeoutAction),
      tunnel1_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel1DpdTimeoutSeconds),
      tunnel1_ike_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1IkeVersions),
      tunnel1_inside_cidr: cdktf.stringToTerraform(this._tunnel1InsideCidr),
      tunnel1_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel1InsideIpv6Cidr),
      tunnel1_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel1Phase1DhGroupNumbers),
      tunnel1_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase1EncryptionAlgorithms),
      tunnel1_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase1IntegrityAlgorithms),
      tunnel1_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase1LifetimeSeconds),
      tunnel1_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel1Phase2DhGroupNumbers),
      tunnel1_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase2EncryptionAlgorithms),
      tunnel1_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel1Phase2IntegrityAlgorithms),
      tunnel1_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel1Phase2LifetimeSeconds),
      tunnel1_preshared_key: cdktf.stringToTerraform(this._tunnel1PresharedKey),
      tunnel1_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel1RekeyFuzzPercentage),
      tunnel1_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel1RekeyMarginTimeSeconds),
      tunnel1_replay_window_size: cdktf.numberToTerraform(this._tunnel1ReplayWindowSize),
      tunnel1_startup_action: cdktf.stringToTerraform(this._tunnel1StartupAction),
      tunnel2_dpd_timeout_action: cdktf.stringToTerraform(this._tunnel2DpdTimeoutAction),
      tunnel2_dpd_timeout_seconds: cdktf.numberToTerraform(this._tunnel2DpdTimeoutSeconds),
      tunnel2_ike_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2IkeVersions),
      tunnel2_inside_cidr: cdktf.stringToTerraform(this._tunnel2InsideCidr),
      tunnel2_inside_ipv6_cidr: cdktf.stringToTerraform(this._tunnel2InsideIpv6Cidr),
      tunnel2_phase1_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel2Phase1DhGroupNumbers),
      tunnel2_phase1_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase1EncryptionAlgorithms),
      tunnel2_phase1_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase1IntegrityAlgorithms),
      tunnel2_phase1_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase1LifetimeSeconds),
      tunnel2_phase2_dh_group_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tunnel2Phase2DhGroupNumbers),
      tunnel2_phase2_encryption_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase2EncryptionAlgorithms),
      tunnel2_phase2_integrity_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tunnel2Phase2IntegrityAlgorithms),
      tunnel2_phase2_lifetime_seconds: cdktf.numberToTerraform(this._tunnel2Phase2LifetimeSeconds),
      tunnel2_preshared_key: cdktf.stringToTerraform(this._tunnel2PresharedKey),
      tunnel2_rekey_fuzz_percentage: cdktf.numberToTerraform(this._tunnel2RekeyFuzzPercentage),
      tunnel2_rekey_margin_time_seconds: cdktf.numberToTerraform(this._tunnel2RekeyMarginTimeSeconds),
      tunnel2_replay_window_size: cdktf.numberToTerraform(this._tunnel2ReplayWindowSize),
      tunnel2_startup_action: cdktf.stringToTerraform(this._tunnel2StartupAction),
      tunnel_inside_ip_version: cdktf.stringToTerraform(this._tunnelInsideIpVersion),
      type: cdktf.stringToTerraform(this._type),
      vpn_gateway_id: cdktf.stringToTerraform(this._vpnGatewayId),
      tunnel1_log_options: vpnConnectionTunnel1LogOptionsToTerraform(this._tunnel1LogOptions.internalValue),
      tunnel2_log_options: vpnConnectionTunnel2LogOptionsToTerraform(this._tunnel2LogOptions.internalValue),
    };
  }
}
