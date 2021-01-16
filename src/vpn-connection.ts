// https://www.terraform.io/docs/providers/aws/r/vpn_connection.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface VpnConnectionConfig extends TerraformMetaArguments {
  readonly customerGatewayId: string;
  readonly enableAcceleration?: boolean;
  readonly localIpv4NetworkCidr?: string;
  readonly localIpv6NetworkCidr?: string;
  readonly remoteIpv4NetworkCidr?: string;
  readonly remoteIpv6NetworkCidr?: string;
  readonly staticRoutesOnly?: boolean;
  readonly tags?: { [key: string]: string };
  readonly transitGatewayId?: string;
  readonly tunnel1DpdTimeoutAction?: string;
  readonly tunnel1DpdTimeoutSeconds?: number;
  readonly tunnel1IkeVersions?: string[];
  readonly tunnel1InsideCidr?: string;
  readonly tunnel1InsideIpv6Cidr?: string;
  readonly tunnel1Phase1DhGroupNumbers?: number[];
  readonly tunnel1Phase1EncryptionAlgorithms?: string[];
  readonly tunnel1Phase1IntegrityAlgorithms?: string[];
  readonly tunnel1Phase1LifetimeSeconds?: number;
  readonly tunnel1Phase2DhGroupNumbers?: number[];
  readonly tunnel1Phase2EncryptionAlgorithms?: string[];
  readonly tunnel1Phase2IntegrityAlgorithms?: string[];
  readonly tunnel1Phase2LifetimeSeconds?: number;
  readonly tunnel1PresharedKey?: string;
  readonly tunnel1RekeyFuzzPercentage?: number;
  readonly tunnel1RekeyMarginTimeSeconds?: number;
  readonly tunnel1ReplayWindowSize?: number;
  readonly tunnel1StartupAction?: string;
  readonly tunnel2DpdTimeoutAction?: string;
  readonly tunnel2DpdTimeoutSeconds?: number;
  readonly tunnel2IkeVersions?: string[];
  readonly tunnel2InsideCidr?: string;
  readonly tunnel2InsideIpv6Cidr?: string;
  readonly tunnel2Phase1DhGroupNumbers?: number[];
  readonly tunnel2Phase1EncryptionAlgorithms?: string[];
  readonly tunnel2Phase1IntegrityAlgorithms?: string[];
  readonly tunnel2Phase1LifetimeSeconds?: number;
  readonly tunnel2Phase2DhGroupNumbers?: number[];
  readonly tunnel2Phase2EncryptionAlgorithms?: string[];
  readonly tunnel2Phase2IntegrityAlgorithms?: string[];
  readonly tunnel2Phase2LifetimeSeconds?: number;
  readonly tunnel2PresharedKey?: string;
  readonly tunnel2RekeyFuzzPercentage?: number;
  readonly tunnel2RekeyMarginTimeSeconds?: number;
  readonly tunnel2ReplayWindowSize?: number;
  readonly tunnel2StartupAction?: string;
  readonly tunnelInsideIpVersion?: string;
  readonly type: string;
  readonly vpnGatewayId?: string;
}
export class VpnConnectionRoutes extends ComplexComputedList {

  // destination_cidr_block - computed: true, optional: false, required: true
  public get destinationCidrBlock() {
    return this.getStringAttribute('destination_cidr_block');
  }

  // source - computed: true, optional: false, required: true
  public get source() {
    return this.getStringAttribute('source');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class VpnConnectionVgwTelemetry extends ComplexComputedList {

  // accepted_route_count - computed: true, optional: false, required: true
  public get acceptedRouteCount() {
    return this.getNumberAttribute('accepted_route_count');
  }

  // last_status_change - computed: true, optional: false, required: true
  public get lastStatusChange() {
    return this.getStringAttribute('last_status_change');
  }

  // outside_ip_address - computed: true, optional: false, required: true
  public get outsideIpAddress() {
    return this.getStringAttribute('outside_ip_address');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_message - computed: true, optional: false, required: true
  public get statusMessage() {
    return this.getStringAttribute('status_message');
  }
}

// Resource

export class VpnConnection extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: VpnConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_vpn_connection',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._customerGatewayId = config.customerGatewayId;
    this._enableAcceleration = config.enableAcceleration;
    this._localIpv4NetworkCidr = config.localIpv4NetworkCidr;
    this._localIpv6NetworkCidr = config.localIpv6NetworkCidr;
    this._remoteIpv4NetworkCidr = config.remoteIpv4NetworkCidr;
    this._remoteIpv6NetworkCidr = config.remoteIpv6NetworkCidr;
    this._staticRoutesOnly = config.staticRoutesOnly;
    this._tags = config.tags;
    this._transitGatewayId = config.transitGatewayId;
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: true
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // customer_gateway_configuration - computed: true, optional: false, required: true
  public get customerGatewayConfiguration() {
    return this.getStringAttribute('customer_gateway_configuration');
  }

  // customer_gateway_id - computed: false, optional: false, required: true
  private _customerGatewayId: string;
  public get customerGatewayId() {
    return this._customerGatewayId;
  }
  public set customerGatewayId(value: string) {
    this._customerGatewayId = value;
  }

  // enable_acceleration - computed: true, optional: true, required: false
  private _enableAcceleration?: boolean;
  public get enableAcceleration() {
    return this._enableAcceleration ?? this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | undefined) {
    this._enableAcceleration = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // local_ipv4_network_cidr - computed: true, optional: true, required: false
  private _localIpv4NetworkCidr?: string;
  public get localIpv4NetworkCidr() {
    return this._localIpv4NetworkCidr ?? this.getStringAttribute('local_ipv4_network_cidr');
  }
  public set localIpv4NetworkCidr(value: string | undefined) {
    this._localIpv4NetworkCidr = value;
  }

  // local_ipv6_network_cidr - computed: true, optional: true, required: false
  private _localIpv6NetworkCidr?: string;
  public get localIpv6NetworkCidr() {
    return this._localIpv6NetworkCidr ?? this.getStringAttribute('local_ipv6_network_cidr');
  }
  public set localIpv6NetworkCidr(value: string | undefined) {
    this._localIpv6NetworkCidr = value;
  }

  // remote_ipv4_network_cidr - computed: true, optional: true, required: false
  private _remoteIpv4NetworkCidr?: string;
  public get remoteIpv4NetworkCidr() {
    return this._remoteIpv4NetworkCidr ?? this.getStringAttribute('remote_ipv4_network_cidr');
  }
  public set remoteIpv4NetworkCidr(value: string | undefined) {
    this._remoteIpv4NetworkCidr = value;
  }

  // remote_ipv6_network_cidr - computed: true, optional: true, required: false
  private _remoteIpv6NetworkCidr?: string;
  public get remoteIpv6NetworkCidr() {
    return this._remoteIpv6NetworkCidr ?? this.getStringAttribute('remote_ipv6_network_cidr');
  }
  public set remoteIpv6NetworkCidr(value: string | undefined) {
    this._remoteIpv6NetworkCidr = value;
  }

  // routes - computed: true, optional: false, required: true
  public routes(index: string) {
    return new VpnConnectionRoutes(this, 'routes', index);
  }

  // static_routes_only - computed: true, optional: true, required: false
  private _staticRoutesOnly?: boolean;
  public get staticRoutesOnly() {
    return this._staticRoutesOnly ?? this.getBooleanAttribute('static_routes_only');
  }
  public set staticRoutesOnly(value: boolean | undefined) {
    this._staticRoutesOnly = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // transit_gateway_attachment_id - computed: true, optional: false, required: true
  public get transitGatewayAttachmentId() {
    return this.getStringAttribute('transit_gateway_attachment_id');
  }

  // transit_gateway_id - computed: false, optional: true, required: false
  private _transitGatewayId?: string;
  public get transitGatewayId() {
    return this._transitGatewayId;
  }
  public set transitGatewayId(value: string | undefined) {
    this._transitGatewayId = value;
  }

  // tunnel1_address - computed: true, optional: false, required: true
  public get tunnel1Address() {
    return this.getStringAttribute('tunnel1_address');
  }

  // tunnel1_bgp_asn - computed: true, optional: false, required: true
  public get tunnel1BgpAsn() {
    return this.getStringAttribute('tunnel1_bgp_asn');
  }

  // tunnel1_bgp_holdtime - computed: true, optional: false, required: true
  public get tunnel1BgpHoldtime() {
    return this.getNumberAttribute('tunnel1_bgp_holdtime');
  }

  // tunnel1_cgw_inside_address - computed: true, optional: false, required: true
  public get tunnel1CgwInsideAddress() {
    return this.getStringAttribute('tunnel1_cgw_inside_address');
  }

  // tunnel1_dpd_timeout_action - computed: false, optional: true, required: false
  private _tunnel1DpdTimeoutAction?: string;
  public get tunnel1DpdTimeoutAction() {
    return this._tunnel1DpdTimeoutAction;
  }
  public set tunnel1DpdTimeoutAction(value: string | undefined) {
    this._tunnel1DpdTimeoutAction = value;
  }

  // tunnel1_dpd_timeout_seconds - computed: false, optional: true, required: false
  private _tunnel1DpdTimeoutSeconds?: number;
  public get tunnel1DpdTimeoutSeconds() {
    return this._tunnel1DpdTimeoutSeconds;
  }
  public set tunnel1DpdTimeoutSeconds(value: number | undefined) {
    this._tunnel1DpdTimeoutSeconds = value;
  }

  // tunnel1_ike_versions - computed: false, optional: true, required: false
  private _tunnel1IkeVersions?: string[];
  public get tunnel1IkeVersions() {
    return this._tunnel1IkeVersions;
  }
  public set tunnel1IkeVersions(value: string[] | undefined) {
    this._tunnel1IkeVersions = value;
  }

  // tunnel1_inside_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideCidr?: string;
  public get tunnel1InsideCidr() {
    return this._tunnel1InsideCidr ?? this.getStringAttribute('tunnel1_inside_cidr');
  }
  public set tunnel1InsideCidr(value: string | undefined) {
    this._tunnel1InsideCidr = value;
  }

  // tunnel1_inside_ipv6_cidr - computed: true, optional: true, required: false
  private _tunnel1InsideIpv6Cidr?: string;
  public get tunnel1InsideIpv6Cidr() {
    return this._tunnel1InsideIpv6Cidr ?? this.getStringAttribute('tunnel1_inside_ipv6_cidr');
  }
  public set tunnel1InsideIpv6Cidr(value: string | undefined) {
    this._tunnel1InsideIpv6Cidr = value;
  }

  // tunnel1_phase1_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel1Phase1DhGroupNumbers?: number[];
  public get tunnel1Phase1DhGroupNumbers() {
    return this._tunnel1Phase1DhGroupNumbers;
  }
  public set tunnel1Phase1DhGroupNumbers(value: number[] | undefined) {
    this._tunnel1Phase1DhGroupNumbers = value;
  }

  // tunnel1_phase1_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase1EncryptionAlgorithms?: string[];
  public get tunnel1Phase1EncryptionAlgorithms() {
    return this._tunnel1Phase1EncryptionAlgorithms;
  }
  public set tunnel1Phase1EncryptionAlgorithms(value: string[] | undefined) {
    this._tunnel1Phase1EncryptionAlgorithms = value;
  }

  // tunnel1_phase1_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase1IntegrityAlgorithms?: string[];
  public get tunnel1Phase1IntegrityAlgorithms() {
    return this._tunnel1Phase1IntegrityAlgorithms;
  }
  public set tunnel1Phase1IntegrityAlgorithms(value: string[] | undefined) {
    this._tunnel1Phase1IntegrityAlgorithms = value;
  }

  // tunnel1_phase1_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel1Phase1LifetimeSeconds?: number;
  public get tunnel1Phase1LifetimeSeconds() {
    return this._tunnel1Phase1LifetimeSeconds;
  }
  public set tunnel1Phase1LifetimeSeconds(value: number | undefined) {
    this._tunnel1Phase1LifetimeSeconds = value;
  }

  // tunnel1_phase2_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel1Phase2DhGroupNumbers?: number[];
  public get tunnel1Phase2DhGroupNumbers() {
    return this._tunnel1Phase2DhGroupNumbers;
  }
  public set tunnel1Phase2DhGroupNumbers(value: number[] | undefined) {
    this._tunnel1Phase2DhGroupNumbers = value;
  }

  // tunnel1_phase2_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase2EncryptionAlgorithms?: string[];
  public get tunnel1Phase2EncryptionAlgorithms() {
    return this._tunnel1Phase2EncryptionAlgorithms;
  }
  public set tunnel1Phase2EncryptionAlgorithms(value: string[] | undefined) {
    this._tunnel1Phase2EncryptionAlgorithms = value;
  }

  // tunnel1_phase2_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel1Phase2IntegrityAlgorithms?: string[];
  public get tunnel1Phase2IntegrityAlgorithms() {
    return this._tunnel1Phase2IntegrityAlgorithms;
  }
  public set tunnel1Phase2IntegrityAlgorithms(value: string[] | undefined) {
    this._tunnel1Phase2IntegrityAlgorithms = value;
  }

  // tunnel1_phase2_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel1Phase2LifetimeSeconds?: number;
  public get tunnel1Phase2LifetimeSeconds() {
    return this._tunnel1Phase2LifetimeSeconds;
  }
  public set tunnel1Phase2LifetimeSeconds(value: number | undefined) {
    this._tunnel1Phase2LifetimeSeconds = value;
  }

  // tunnel1_preshared_key - computed: true, optional: true, required: false
  private _tunnel1PresharedKey?: string;
  public get tunnel1PresharedKey() {
    return this._tunnel1PresharedKey ?? this.getStringAttribute('tunnel1_preshared_key');
  }
  public set tunnel1PresharedKey(value: string | undefined) {
    this._tunnel1PresharedKey = value;
  }

  // tunnel1_rekey_fuzz_percentage - computed: false, optional: true, required: false
  private _tunnel1RekeyFuzzPercentage?: number;
  public get tunnel1RekeyFuzzPercentage() {
    return this._tunnel1RekeyFuzzPercentage;
  }
  public set tunnel1RekeyFuzzPercentage(value: number | undefined) {
    this._tunnel1RekeyFuzzPercentage = value;
  }

  // tunnel1_rekey_margin_time_seconds - computed: false, optional: true, required: false
  private _tunnel1RekeyMarginTimeSeconds?: number;
  public get tunnel1RekeyMarginTimeSeconds() {
    return this._tunnel1RekeyMarginTimeSeconds;
  }
  public set tunnel1RekeyMarginTimeSeconds(value: number | undefined) {
    this._tunnel1RekeyMarginTimeSeconds = value;
  }

  // tunnel1_replay_window_size - computed: false, optional: true, required: false
  private _tunnel1ReplayWindowSize?: number;
  public get tunnel1ReplayWindowSize() {
    return this._tunnel1ReplayWindowSize;
  }
  public set tunnel1ReplayWindowSize(value: number | undefined) {
    this._tunnel1ReplayWindowSize = value;
  }

  // tunnel1_startup_action - computed: false, optional: true, required: false
  private _tunnel1StartupAction?: string;
  public get tunnel1StartupAction() {
    return this._tunnel1StartupAction;
  }
  public set tunnel1StartupAction(value: string | undefined) {
    this._tunnel1StartupAction = value;
  }

  // tunnel1_vgw_inside_address - computed: true, optional: false, required: true
  public get tunnel1VgwInsideAddress() {
    return this.getStringAttribute('tunnel1_vgw_inside_address');
  }

  // tunnel2_address - computed: true, optional: false, required: true
  public get tunnel2Address() {
    return this.getStringAttribute('tunnel2_address');
  }

  // tunnel2_bgp_asn - computed: true, optional: false, required: true
  public get tunnel2BgpAsn() {
    return this.getStringAttribute('tunnel2_bgp_asn');
  }

  // tunnel2_bgp_holdtime - computed: true, optional: false, required: true
  public get tunnel2BgpHoldtime() {
    return this.getNumberAttribute('tunnel2_bgp_holdtime');
  }

  // tunnel2_cgw_inside_address - computed: true, optional: false, required: true
  public get tunnel2CgwInsideAddress() {
    return this.getStringAttribute('tunnel2_cgw_inside_address');
  }

  // tunnel2_dpd_timeout_action - computed: false, optional: true, required: false
  private _tunnel2DpdTimeoutAction?: string;
  public get tunnel2DpdTimeoutAction() {
    return this._tunnel2DpdTimeoutAction;
  }
  public set tunnel2DpdTimeoutAction(value: string | undefined) {
    this._tunnel2DpdTimeoutAction = value;
  }

  // tunnel2_dpd_timeout_seconds - computed: false, optional: true, required: false
  private _tunnel2DpdTimeoutSeconds?: number;
  public get tunnel2DpdTimeoutSeconds() {
    return this._tunnel2DpdTimeoutSeconds;
  }
  public set tunnel2DpdTimeoutSeconds(value: number | undefined) {
    this._tunnel2DpdTimeoutSeconds = value;
  }

  // tunnel2_ike_versions - computed: false, optional: true, required: false
  private _tunnel2IkeVersions?: string[];
  public get tunnel2IkeVersions() {
    return this._tunnel2IkeVersions;
  }
  public set tunnel2IkeVersions(value: string[] | undefined) {
    this._tunnel2IkeVersions = value;
  }

  // tunnel2_inside_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideCidr?: string;
  public get tunnel2InsideCidr() {
    return this._tunnel2InsideCidr ?? this.getStringAttribute('tunnel2_inside_cidr');
  }
  public set tunnel2InsideCidr(value: string | undefined) {
    this._tunnel2InsideCidr = value;
  }

  // tunnel2_inside_ipv6_cidr - computed: true, optional: true, required: false
  private _tunnel2InsideIpv6Cidr?: string;
  public get tunnel2InsideIpv6Cidr() {
    return this._tunnel2InsideIpv6Cidr ?? this.getStringAttribute('tunnel2_inside_ipv6_cidr');
  }
  public set tunnel2InsideIpv6Cidr(value: string | undefined) {
    this._tunnel2InsideIpv6Cidr = value;
  }

  // tunnel2_phase1_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel2Phase1DhGroupNumbers?: number[];
  public get tunnel2Phase1DhGroupNumbers() {
    return this._tunnel2Phase1DhGroupNumbers;
  }
  public set tunnel2Phase1DhGroupNumbers(value: number[] | undefined) {
    this._tunnel2Phase1DhGroupNumbers = value;
  }

  // tunnel2_phase1_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase1EncryptionAlgorithms?: string[];
  public get tunnel2Phase1EncryptionAlgorithms() {
    return this._tunnel2Phase1EncryptionAlgorithms;
  }
  public set tunnel2Phase1EncryptionAlgorithms(value: string[] | undefined) {
    this._tunnel2Phase1EncryptionAlgorithms = value;
  }

  // tunnel2_phase1_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase1IntegrityAlgorithms?: string[];
  public get tunnel2Phase1IntegrityAlgorithms() {
    return this._tunnel2Phase1IntegrityAlgorithms;
  }
  public set tunnel2Phase1IntegrityAlgorithms(value: string[] | undefined) {
    this._tunnel2Phase1IntegrityAlgorithms = value;
  }

  // tunnel2_phase1_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel2Phase1LifetimeSeconds?: number;
  public get tunnel2Phase1LifetimeSeconds() {
    return this._tunnel2Phase1LifetimeSeconds;
  }
  public set tunnel2Phase1LifetimeSeconds(value: number | undefined) {
    this._tunnel2Phase1LifetimeSeconds = value;
  }

  // tunnel2_phase2_dh_group_numbers - computed: false, optional: true, required: false
  private _tunnel2Phase2DhGroupNumbers?: number[];
  public get tunnel2Phase2DhGroupNumbers() {
    return this._tunnel2Phase2DhGroupNumbers;
  }
  public set tunnel2Phase2DhGroupNumbers(value: number[] | undefined) {
    this._tunnel2Phase2DhGroupNumbers = value;
  }

  // tunnel2_phase2_encryption_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase2EncryptionAlgorithms?: string[];
  public get tunnel2Phase2EncryptionAlgorithms() {
    return this._tunnel2Phase2EncryptionAlgorithms;
  }
  public set tunnel2Phase2EncryptionAlgorithms(value: string[] | undefined) {
    this._tunnel2Phase2EncryptionAlgorithms = value;
  }

  // tunnel2_phase2_integrity_algorithms - computed: false, optional: true, required: false
  private _tunnel2Phase2IntegrityAlgorithms?: string[];
  public get tunnel2Phase2IntegrityAlgorithms() {
    return this._tunnel2Phase2IntegrityAlgorithms;
  }
  public set tunnel2Phase2IntegrityAlgorithms(value: string[] | undefined) {
    this._tunnel2Phase2IntegrityAlgorithms = value;
  }

  // tunnel2_phase2_lifetime_seconds - computed: false, optional: true, required: false
  private _tunnel2Phase2LifetimeSeconds?: number;
  public get tunnel2Phase2LifetimeSeconds() {
    return this._tunnel2Phase2LifetimeSeconds;
  }
  public set tunnel2Phase2LifetimeSeconds(value: number | undefined) {
    this._tunnel2Phase2LifetimeSeconds = value;
  }

  // tunnel2_preshared_key - computed: true, optional: true, required: false
  private _tunnel2PresharedKey?: string;
  public get tunnel2PresharedKey() {
    return this._tunnel2PresharedKey ?? this.getStringAttribute('tunnel2_preshared_key');
  }
  public set tunnel2PresharedKey(value: string | undefined) {
    this._tunnel2PresharedKey = value;
  }

  // tunnel2_rekey_fuzz_percentage - computed: false, optional: true, required: false
  private _tunnel2RekeyFuzzPercentage?: number;
  public get tunnel2RekeyFuzzPercentage() {
    return this._tunnel2RekeyFuzzPercentage;
  }
  public set tunnel2RekeyFuzzPercentage(value: number | undefined) {
    this._tunnel2RekeyFuzzPercentage = value;
  }

  // tunnel2_rekey_margin_time_seconds - computed: false, optional: true, required: false
  private _tunnel2RekeyMarginTimeSeconds?: number;
  public get tunnel2RekeyMarginTimeSeconds() {
    return this._tunnel2RekeyMarginTimeSeconds;
  }
  public set tunnel2RekeyMarginTimeSeconds(value: number | undefined) {
    this._tunnel2RekeyMarginTimeSeconds = value;
  }

  // tunnel2_replay_window_size - computed: false, optional: true, required: false
  private _tunnel2ReplayWindowSize?: number;
  public get tunnel2ReplayWindowSize() {
    return this._tunnel2ReplayWindowSize;
  }
  public set tunnel2ReplayWindowSize(value: number | undefined) {
    this._tunnel2ReplayWindowSize = value;
  }

  // tunnel2_startup_action - computed: false, optional: true, required: false
  private _tunnel2StartupAction?: string;
  public get tunnel2StartupAction() {
    return this._tunnel2StartupAction;
  }
  public set tunnel2StartupAction(value: string | undefined) {
    this._tunnel2StartupAction = value;
  }

  // tunnel2_vgw_inside_address - computed: true, optional: false, required: true
  public get tunnel2VgwInsideAddress() {
    return this.getStringAttribute('tunnel2_vgw_inside_address');
  }

  // tunnel_inside_ip_version - computed: true, optional: true, required: false
  private _tunnelInsideIpVersion?: string;
  public get tunnelInsideIpVersion() {
    return this._tunnelInsideIpVersion ?? this.getStringAttribute('tunnel_inside_ip_version');
  }
  public set tunnelInsideIpVersion(value: string | undefined) {
    this._tunnelInsideIpVersion = value;
  }

  // type - computed: false, optional: false, required: true
  private _type: string;
  public get type() {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  // vgw_telemetry - computed: true, optional: false, required: true
  public vgwTelemetry(index: string) {
    return new VpnConnectionVgwTelemetry(this, 'vgw_telemetry', index);
  }

  // vpn_gateway_id - computed: false, optional: true, required: false
  private _vpnGatewayId?: string;
  public get vpnGatewayId() {
    return this._vpnGatewayId;
  }
  public set vpnGatewayId(value: string | undefined) {
    this._vpnGatewayId = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_gateway_id: this._customerGatewayId,
      enable_acceleration: this._enableAcceleration,
      local_ipv4_network_cidr: this._localIpv4NetworkCidr,
      local_ipv6_network_cidr: this._localIpv6NetworkCidr,
      remote_ipv4_network_cidr: this._remoteIpv4NetworkCidr,
      remote_ipv6_network_cidr: this._remoteIpv6NetworkCidr,
      static_routes_only: this._staticRoutesOnly,
      tags: this._tags,
      transit_gateway_id: this._transitGatewayId,
      tunnel1_dpd_timeout_action: this._tunnel1DpdTimeoutAction,
      tunnel1_dpd_timeout_seconds: this._tunnel1DpdTimeoutSeconds,
      tunnel1_ike_versions: this._tunnel1IkeVersions,
      tunnel1_inside_cidr: this._tunnel1InsideCidr,
      tunnel1_inside_ipv6_cidr: this._tunnel1InsideIpv6Cidr,
      tunnel1_phase1_dh_group_numbers: this._tunnel1Phase1DhGroupNumbers,
      tunnel1_phase1_encryption_algorithms: this._tunnel1Phase1EncryptionAlgorithms,
      tunnel1_phase1_integrity_algorithms: this._tunnel1Phase1IntegrityAlgorithms,
      tunnel1_phase1_lifetime_seconds: this._tunnel1Phase1LifetimeSeconds,
      tunnel1_phase2_dh_group_numbers: this._tunnel1Phase2DhGroupNumbers,
      tunnel1_phase2_encryption_algorithms: this._tunnel1Phase2EncryptionAlgorithms,
      tunnel1_phase2_integrity_algorithms: this._tunnel1Phase2IntegrityAlgorithms,
      tunnel1_phase2_lifetime_seconds: this._tunnel1Phase2LifetimeSeconds,
      tunnel1_preshared_key: this._tunnel1PresharedKey,
      tunnel1_rekey_fuzz_percentage: this._tunnel1RekeyFuzzPercentage,
      tunnel1_rekey_margin_time_seconds: this._tunnel1RekeyMarginTimeSeconds,
      tunnel1_replay_window_size: this._tunnel1ReplayWindowSize,
      tunnel1_startup_action: this._tunnel1StartupAction,
      tunnel2_dpd_timeout_action: this._tunnel2DpdTimeoutAction,
      tunnel2_dpd_timeout_seconds: this._tunnel2DpdTimeoutSeconds,
      tunnel2_ike_versions: this._tunnel2IkeVersions,
      tunnel2_inside_cidr: this._tunnel2InsideCidr,
      tunnel2_inside_ipv6_cidr: this._tunnel2InsideIpv6Cidr,
      tunnel2_phase1_dh_group_numbers: this._tunnel2Phase1DhGroupNumbers,
      tunnel2_phase1_encryption_algorithms: this._tunnel2Phase1EncryptionAlgorithms,
      tunnel2_phase1_integrity_algorithms: this._tunnel2Phase1IntegrityAlgorithms,
      tunnel2_phase1_lifetime_seconds: this._tunnel2Phase1LifetimeSeconds,
      tunnel2_phase2_dh_group_numbers: this._tunnel2Phase2DhGroupNumbers,
      tunnel2_phase2_encryption_algorithms: this._tunnel2Phase2EncryptionAlgorithms,
      tunnel2_phase2_integrity_algorithms: this._tunnel2Phase2IntegrityAlgorithms,
      tunnel2_phase2_lifetime_seconds: this._tunnel2Phase2LifetimeSeconds,
      tunnel2_preshared_key: this._tunnel2PresharedKey,
      tunnel2_rekey_fuzz_percentage: this._tunnel2RekeyFuzzPercentage,
      tunnel2_rekey_margin_time_seconds: this._tunnel2RekeyMarginTimeSeconds,
      tunnel2_replay_window_size: this._tunnel2ReplayWindowSize,
      tunnel2_startup_action: this._tunnel2StartupAction,
      tunnel_inside_ip_version: this._tunnelInsideIpVersion,
      type: this._type,
      vpn_gateway_id: this._vpnGatewayId,
    };
  }
}
