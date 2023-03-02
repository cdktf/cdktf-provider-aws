# `vpnConnection` Submodule <a name="`vpnConnection` Submodule" id="@cdktf/provider-aws.vpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnConnection <a name="VpnConnection" id="@cdktf/provider-aws.vpnConnection.VpnConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection aws_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_gateway_id: str,
  type: str,
  enable_acceleration: typing.Union[bool, IResolvable] = None,
  id: str = None,
  local_ipv4_network_cidr: str = None,
  local_ipv6_network_cidr: str = None,
  outside_ip_address_type: str = None,
  remote_ipv4_network_cidr: str = None,
  remote_ipv6_network_cidr: str = None,
  static_routes_only: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  transit_gateway_id: str = None,
  transport_transit_gateway_attachment_id: str = None,
  tunnel1_dpd_timeout_action: str = None,
  tunnel1_dpd_timeout_seconds: typing.Union[int, float] = None,
  tunnel1_ike_versions: typing.List[str] = None,
  tunnel1_inside_cidr: str = None,
  tunnel1_inside_ipv6_cidr: str = None,
  tunnel1_log_options: VpnConnectionTunnel1LogOptions = None,
  tunnel1_phase1_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel1_phase1_encryption_algorithms: typing.List[str] = None,
  tunnel1_phase1_integrity_algorithms: typing.List[str] = None,
  tunnel1_phase1_lifetime_seconds: typing.Union[int, float] = None,
  tunnel1_phase2_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel1_phase2_encryption_algorithms: typing.List[str] = None,
  tunnel1_phase2_integrity_algorithms: typing.List[str] = None,
  tunnel1_phase2_lifetime_seconds: typing.Union[int, float] = None,
  tunnel1_preshared_key: str = None,
  tunnel1_rekey_fuzz_percentage: typing.Union[int, float] = None,
  tunnel1_rekey_margin_time_seconds: typing.Union[int, float] = None,
  tunnel1_replay_window_size: typing.Union[int, float] = None,
  tunnel1_startup_action: str = None,
  tunnel2_dpd_timeout_action: str = None,
  tunnel2_dpd_timeout_seconds: typing.Union[int, float] = None,
  tunnel2_ike_versions: typing.List[str] = None,
  tunnel2_inside_cidr: str = None,
  tunnel2_inside_ipv6_cidr: str = None,
  tunnel2_log_options: VpnConnectionTunnel2LogOptions = None,
  tunnel2_phase1_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel2_phase1_encryption_algorithms: typing.List[str] = None,
  tunnel2_phase1_integrity_algorithms: typing.List[str] = None,
  tunnel2_phase1_lifetime_seconds: typing.Union[int, float] = None,
  tunnel2_phase2_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel2_phase2_encryption_algorithms: typing.List[str] = None,
  tunnel2_phase2_integrity_algorithms: typing.List[str] = None,
  tunnel2_phase2_lifetime_seconds: typing.Union[int, float] = None,
  tunnel2_preshared_key: str = None,
  tunnel2_rekey_fuzz_percentage: typing.Union[int, float] = None,
  tunnel2_rekey_margin_time_seconds: typing.Union[int, float] = None,
  tunnel2_replay_window_size: typing.Union[int, float] = None,
  tunnel2_startup_action: str = None,
  tunnel_inside_ip_version: str = None,
  vpn_gateway_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.enableAcceleration">enable_acceleration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv4NetworkCidr">local_ipv4_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv6NetworkCidr">local_ipv6_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.outsideIpAddressType">outside_ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv4NetworkCidr">remote_ipv4_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv6NetworkCidr">remote_ipv6_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.staticRoutesOnly">static_routes_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transportTransitGatewayAttachmentId">transport_transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutAction">tunnel1_dpd_timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutSeconds">tunnel1_dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1IkeVersions">tunnel1_ike_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideCidr">tunnel1_inside_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideIpv6Cidr">tunnel1_inside_ipv6_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1LogOptions">tunnel1_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | tunnel1_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1DhGroupNumbers">tunnel1_phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1EncryptionAlgorithms">tunnel1_phase1_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1IntegrityAlgorithms">tunnel1_phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1LifetimeSeconds">tunnel1_phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2DhGroupNumbers">tunnel1_phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2EncryptionAlgorithms">tunnel1_phase2_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2IntegrityAlgorithms">tunnel1_phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2LifetimeSeconds">tunnel1_phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1PresharedKey">tunnel1_preshared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyFuzzPercentage">tunnel1_rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyMarginTimeSeconds">tunnel1_rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1ReplayWindowSize">tunnel1_replay_window_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1StartupAction">tunnel1_startup_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutAction">tunnel2_dpd_timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutSeconds">tunnel2_dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2IkeVersions">tunnel2_ike_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideCidr">tunnel2_inside_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideIpv6Cidr">tunnel2_inside_ipv6_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2LogOptions">tunnel2_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | tunnel2_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1DhGroupNumbers">tunnel2_phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1EncryptionAlgorithms">tunnel2_phase1_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1IntegrityAlgorithms">tunnel2_phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1LifetimeSeconds">tunnel2_phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2DhGroupNumbers">tunnel2_phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2EncryptionAlgorithms">tunnel2_phase2_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2IntegrityAlgorithms">tunnel2_phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2LifetimeSeconds">tunnel2_phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2PresharedKey">tunnel2_preshared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyFuzzPercentage">tunnel2_rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyMarginTimeSeconds">tunnel2_rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2ReplayWindowSize">tunnel2_replay_window_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2StartupAction">tunnel2_startup_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnelInsideIpVersion">tunnel_inside_ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.customerGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}.

---

##### `enable_acceleration`<sup>Optional</sup> <a name="enable_acceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.enableAcceleration"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_ipv4_network_cidr`<sup>Optional</sup> <a name="local_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv4NetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.

---

##### `local_ipv6_network_cidr`<sup>Optional</sup> <a name="local_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv6NetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.

---

##### `outside_ip_address_type`<sup>Optional</sup> <a name="outside_ip_address_type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.outsideIpAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}.

---

##### `remote_ipv4_network_cidr`<sup>Optional</sup> <a name="remote_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv4NetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.

---

##### `remote_ipv6_network_cidr`<sup>Optional</sup> <a name="remote_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv6NetworkCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.

---

##### `static_routes_only`<sup>Optional</sup> <a name="static_routes_only" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.staticRoutesOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transitGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}.

---

##### `transport_transit_gateway_attachment_id`<sup>Optional</sup> <a name="transport_transit_gateway_attachment_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transportTransitGatewayAttachmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}.

---

##### `tunnel1_dpd_timeout_action`<sup>Optional</sup> <a name="tunnel1_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.

---

##### `tunnel1_dpd_timeout_seconds`<sup>Optional</sup> <a name="tunnel1_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.

---

##### `tunnel1_ike_versions`<sup>Optional</sup> <a name="tunnel1_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1IkeVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.

---

##### `tunnel1_inside_cidr`<sup>Optional</sup> <a name="tunnel1_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.

---

##### `tunnel1_inside_ipv6_cidr`<sup>Optional</sup> <a name="tunnel1_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideIpv6Cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.

---

##### `tunnel1_log_options`<sup>Optional</sup> <a name="tunnel1_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1LogOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

tunnel1_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}

---

##### `tunnel1_phase1_dh_group_numbers`<sup>Optional</sup> <a name="tunnel1_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1DhGroupNumbers"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.

---

##### `tunnel1_phase1_encryption_algorithms`<sup>Optional</sup> <a name="tunnel1_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1EncryptionAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.

---

##### `tunnel1_phase1_integrity_algorithms`<sup>Optional</sup> <a name="tunnel1_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1IntegrityAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.

---

##### `tunnel1_phase1_lifetime_seconds`<sup>Optional</sup> <a name="tunnel1_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1LifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.

---

##### `tunnel1_phase2_dh_group_numbers`<sup>Optional</sup> <a name="tunnel1_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2DhGroupNumbers"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.

---

##### `tunnel1_phase2_encryption_algorithms`<sup>Optional</sup> <a name="tunnel1_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2EncryptionAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.

---

##### `tunnel1_phase2_integrity_algorithms`<sup>Optional</sup> <a name="tunnel1_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2IntegrityAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.

---

##### `tunnel1_phase2_lifetime_seconds`<sup>Optional</sup> <a name="tunnel1_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2LifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.

---

##### `tunnel1_preshared_key`<sup>Optional</sup> <a name="tunnel1_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1PresharedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.

---

##### `tunnel1_rekey_fuzz_percentage`<sup>Optional</sup> <a name="tunnel1_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyFuzzPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.

---

##### `tunnel1_rekey_margin_time_seconds`<sup>Optional</sup> <a name="tunnel1_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyMarginTimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.

---

##### `tunnel1_replay_window_size`<sup>Optional</sup> <a name="tunnel1_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1ReplayWindowSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.

---

##### `tunnel1_startup_action`<sup>Optional</sup> <a name="tunnel1_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1StartupAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.

---

##### `tunnel2_dpd_timeout_action`<sup>Optional</sup> <a name="tunnel2_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.

---

##### `tunnel2_dpd_timeout_seconds`<sup>Optional</sup> <a name="tunnel2_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.

---

##### `tunnel2_ike_versions`<sup>Optional</sup> <a name="tunnel2_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2IkeVersions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.

---

##### `tunnel2_inside_cidr`<sup>Optional</sup> <a name="tunnel2_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.

---

##### `tunnel2_inside_ipv6_cidr`<sup>Optional</sup> <a name="tunnel2_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideIpv6Cidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.

---

##### `tunnel2_log_options`<sup>Optional</sup> <a name="tunnel2_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2LogOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

tunnel2_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}

---

##### `tunnel2_phase1_dh_group_numbers`<sup>Optional</sup> <a name="tunnel2_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1DhGroupNumbers"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.

---

##### `tunnel2_phase1_encryption_algorithms`<sup>Optional</sup> <a name="tunnel2_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1EncryptionAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.

---

##### `tunnel2_phase1_integrity_algorithms`<sup>Optional</sup> <a name="tunnel2_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1IntegrityAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.

---

##### `tunnel2_phase1_lifetime_seconds`<sup>Optional</sup> <a name="tunnel2_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1LifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.

---

##### `tunnel2_phase2_dh_group_numbers`<sup>Optional</sup> <a name="tunnel2_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2DhGroupNumbers"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.

---

##### `tunnel2_phase2_encryption_algorithms`<sup>Optional</sup> <a name="tunnel2_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2EncryptionAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.

---

##### `tunnel2_phase2_integrity_algorithms`<sup>Optional</sup> <a name="tunnel2_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2IntegrityAlgorithms"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.

---

##### `tunnel2_phase2_lifetime_seconds`<sup>Optional</sup> <a name="tunnel2_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2LifetimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.

---

##### `tunnel2_preshared_key`<sup>Optional</sup> <a name="tunnel2_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2PresharedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.

---

##### `tunnel2_rekey_fuzz_percentage`<sup>Optional</sup> <a name="tunnel2_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyFuzzPercentage"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.

---

##### `tunnel2_rekey_margin_time_seconds`<sup>Optional</sup> <a name="tunnel2_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyMarginTimeSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.

---

##### `tunnel2_replay_window_size`<sup>Optional</sup> <a name="tunnel2_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2ReplayWindowSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.

---

##### `tunnel2_startup_action`<sup>Optional</sup> <a name="tunnel2_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2StartupAction"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.

---

##### `tunnel_inside_ip_version`<sup>Optional</sup> <a name="tunnel_inside_ip_version" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnelInsideIpVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.

---

##### `vpn_gateway_id`<sup>Optional</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.vpnGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions">put_tunnel1_log_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions">put_tunnel2_log_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration">reset_enable_acceleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr">reset_local_ipv4_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr">reset_local_ipv6_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType">reset_outside_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr">reset_remote_ipv4_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr">reset_remote_ipv6_network_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly">reset_static_routes_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId">reset_transit_gateway_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId">reset_transport_transit_gateway_attachment_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction">reset_tunnel1_dpd_timeout_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds">reset_tunnel1_dpd_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions">reset_tunnel1_ike_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr">reset_tunnel1_inside_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr">reset_tunnel1_inside_ipv6_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions">reset_tunnel1_log_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers">reset_tunnel1_phase1_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms">reset_tunnel1_phase1_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms">reset_tunnel1_phase1_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds">reset_tunnel1_phase1_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers">reset_tunnel1_phase2_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms">reset_tunnel1_phase2_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms">reset_tunnel1_phase2_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds">reset_tunnel1_phase2_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey">reset_tunnel1_preshared_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage">reset_tunnel1_rekey_fuzz_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds">reset_tunnel1_rekey_margin_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize">reset_tunnel1_replay_window_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction">reset_tunnel1_startup_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction">reset_tunnel2_dpd_timeout_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds">reset_tunnel2_dpd_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions">reset_tunnel2_ike_versions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr">reset_tunnel2_inside_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr">reset_tunnel2_inside_ipv6_cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions">reset_tunnel2_log_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers">reset_tunnel2_phase1_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms">reset_tunnel2_phase1_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms">reset_tunnel2_phase1_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds">reset_tunnel2_phase1_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers">reset_tunnel2_phase2_dh_group_numbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms">reset_tunnel2_phase2_encryption_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms">reset_tunnel2_phase2_integrity_algorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds">reset_tunnel2_phase2_lifetime_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey">reset_tunnel2_preshared_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage">reset_tunnel2_rekey_fuzz_percentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds">reset_tunnel2_rekey_margin_time_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize">reset_tunnel2_replay_window_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction">reset_tunnel2_startup_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion">reset_tunnel_inside_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId">reset_vpn_gateway_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_tunnel1_log_options` <a name="put_tunnel1_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions"></a>

```python
def put_tunnel1_log_options(
  cloudwatch_log_options: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions = None
) -> None
```

###### `cloudwatch_log_options`<sup>Optional</sup> <a name="cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions.parameter.cloudwatchLogOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

##### `put_tunnel2_log_options` <a name="put_tunnel2_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions"></a>

```python
def put_tunnel2_log_options(
  cloudwatch_log_options: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions = None
) -> None
```

###### `cloudwatch_log_options`<sup>Optional</sup> <a name="cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions.parameter.cloudwatchLogOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

##### `reset_enable_acceleration` <a name="reset_enable_acceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration"></a>

```python
def reset_enable_acceleration() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_local_ipv4_network_cidr` <a name="reset_local_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr"></a>

```python
def reset_local_ipv4_network_cidr() -> None
```

##### `reset_local_ipv6_network_cidr` <a name="reset_local_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr"></a>

```python
def reset_local_ipv6_network_cidr() -> None
```

##### `reset_outside_ip_address_type` <a name="reset_outside_ip_address_type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType"></a>

```python
def reset_outside_ip_address_type() -> None
```

##### `reset_remote_ipv4_network_cidr` <a name="reset_remote_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```python
def reset_remote_ipv4_network_cidr() -> None
```

##### `reset_remote_ipv6_network_cidr` <a name="reset_remote_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```python
def reset_remote_ipv6_network_cidr() -> None
```

##### `reset_static_routes_only` <a name="reset_static_routes_only" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly"></a>

```python
def reset_static_routes_only() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_transit_gateway_id` <a name="reset_transit_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId"></a>

```python
def reset_transit_gateway_id() -> None
```

##### `reset_transport_transit_gateway_attachment_id` <a name="reset_transport_transit_gateway_attachment_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```python
def reset_transport_transit_gateway_attachment_id() -> None
```

##### `reset_tunnel1_dpd_timeout_action` <a name="reset_tunnel1_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction"></a>

```python
def reset_tunnel1_dpd_timeout_action() -> None
```

##### `reset_tunnel1_dpd_timeout_seconds` <a name="reset_tunnel1_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds"></a>

```python
def reset_tunnel1_dpd_timeout_seconds() -> None
```

##### `reset_tunnel1_ike_versions` <a name="reset_tunnel1_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions"></a>

```python
def reset_tunnel1_ike_versions() -> None
```

##### `reset_tunnel1_inside_cidr` <a name="reset_tunnel1_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr"></a>

```python
def reset_tunnel1_inside_cidr() -> None
```

##### `reset_tunnel1_inside_ipv6_cidr` <a name="reset_tunnel1_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr"></a>

```python
def reset_tunnel1_inside_ipv6_cidr() -> None
```

##### `reset_tunnel1_log_options` <a name="reset_tunnel1_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions"></a>

```python
def reset_tunnel1_log_options() -> None
```

##### `reset_tunnel1_phase1_dh_group_numbers` <a name="reset_tunnel1_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers"></a>

```python
def reset_tunnel1_phase1_dh_group_numbers() -> None
```

##### `reset_tunnel1_phase1_encryption_algorithms` <a name="reset_tunnel1_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms"></a>

```python
def reset_tunnel1_phase1_encryption_algorithms() -> None
```

##### `reset_tunnel1_phase1_integrity_algorithms` <a name="reset_tunnel1_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms"></a>

```python
def reset_tunnel1_phase1_integrity_algorithms() -> None
```

##### `reset_tunnel1_phase1_lifetime_seconds` <a name="reset_tunnel1_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds"></a>

```python
def reset_tunnel1_phase1_lifetime_seconds() -> None
```

##### `reset_tunnel1_phase2_dh_group_numbers` <a name="reset_tunnel1_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers"></a>

```python
def reset_tunnel1_phase2_dh_group_numbers() -> None
```

##### `reset_tunnel1_phase2_encryption_algorithms` <a name="reset_tunnel1_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms"></a>

```python
def reset_tunnel1_phase2_encryption_algorithms() -> None
```

##### `reset_tunnel1_phase2_integrity_algorithms` <a name="reset_tunnel1_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms"></a>

```python
def reset_tunnel1_phase2_integrity_algorithms() -> None
```

##### `reset_tunnel1_phase2_lifetime_seconds` <a name="reset_tunnel1_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds"></a>

```python
def reset_tunnel1_phase2_lifetime_seconds() -> None
```

##### `reset_tunnel1_preshared_key` <a name="reset_tunnel1_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey"></a>

```python
def reset_tunnel1_preshared_key() -> None
```

##### `reset_tunnel1_rekey_fuzz_percentage` <a name="reset_tunnel1_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage"></a>

```python
def reset_tunnel1_rekey_fuzz_percentage() -> None
```

##### `reset_tunnel1_rekey_margin_time_seconds` <a name="reset_tunnel1_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds"></a>

```python
def reset_tunnel1_rekey_margin_time_seconds() -> None
```

##### `reset_tunnel1_replay_window_size` <a name="reset_tunnel1_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize"></a>

```python
def reset_tunnel1_replay_window_size() -> None
```

##### `reset_tunnel1_startup_action` <a name="reset_tunnel1_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction"></a>

```python
def reset_tunnel1_startup_action() -> None
```

##### `reset_tunnel2_dpd_timeout_action` <a name="reset_tunnel2_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction"></a>

```python
def reset_tunnel2_dpd_timeout_action() -> None
```

##### `reset_tunnel2_dpd_timeout_seconds` <a name="reset_tunnel2_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds"></a>

```python
def reset_tunnel2_dpd_timeout_seconds() -> None
```

##### `reset_tunnel2_ike_versions` <a name="reset_tunnel2_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions"></a>

```python
def reset_tunnel2_ike_versions() -> None
```

##### `reset_tunnel2_inside_cidr` <a name="reset_tunnel2_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr"></a>

```python
def reset_tunnel2_inside_cidr() -> None
```

##### `reset_tunnel2_inside_ipv6_cidr` <a name="reset_tunnel2_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr"></a>

```python
def reset_tunnel2_inside_ipv6_cidr() -> None
```

##### `reset_tunnel2_log_options` <a name="reset_tunnel2_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions"></a>

```python
def reset_tunnel2_log_options() -> None
```

##### `reset_tunnel2_phase1_dh_group_numbers` <a name="reset_tunnel2_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers"></a>

```python
def reset_tunnel2_phase1_dh_group_numbers() -> None
```

##### `reset_tunnel2_phase1_encryption_algorithms` <a name="reset_tunnel2_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms"></a>

```python
def reset_tunnel2_phase1_encryption_algorithms() -> None
```

##### `reset_tunnel2_phase1_integrity_algorithms` <a name="reset_tunnel2_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms"></a>

```python
def reset_tunnel2_phase1_integrity_algorithms() -> None
```

##### `reset_tunnel2_phase1_lifetime_seconds` <a name="reset_tunnel2_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds"></a>

```python
def reset_tunnel2_phase1_lifetime_seconds() -> None
```

##### `reset_tunnel2_phase2_dh_group_numbers` <a name="reset_tunnel2_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers"></a>

```python
def reset_tunnel2_phase2_dh_group_numbers() -> None
```

##### `reset_tunnel2_phase2_encryption_algorithms` <a name="reset_tunnel2_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms"></a>

```python
def reset_tunnel2_phase2_encryption_algorithms() -> None
```

##### `reset_tunnel2_phase2_integrity_algorithms` <a name="reset_tunnel2_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms"></a>

```python
def reset_tunnel2_phase2_integrity_algorithms() -> None
```

##### `reset_tunnel2_phase2_lifetime_seconds` <a name="reset_tunnel2_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds"></a>

```python
def reset_tunnel2_phase2_lifetime_seconds() -> None
```

##### `reset_tunnel2_preshared_key` <a name="reset_tunnel2_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey"></a>

```python
def reset_tunnel2_preshared_key() -> None
```

##### `reset_tunnel2_rekey_fuzz_percentage` <a name="reset_tunnel2_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage"></a>

```python
def reset_tunnel2_rekey_fuzz_percentage() -> None
```

##### `reset_tunnel2_rekey_margin_time_seconds` <a name="reset_tunnel2_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds"></a>

```python
def reset_tunnel2_rekey_margin_time_seconds() -> None
```

##### `reset_tunnel2_replay_window_size` <a name="reset_tunnel2_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize"></a>

```python
def reset_tunnel2_replay_window_size() -> None
```

##### `reset_tunnel2_startup_action` <a name="reset_tunnel2_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction"></a>

```python
def reset_tunnel2_startup_action() -> None
```

##### `reset_tunnel_inside_ip_version` <a name="reset_tunnel_inside_ip_version" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion"></a>

```python
def reset_tunnel_inside_ip_version() -> None
```

##### `reset_vpn_gateway_id` <a name="reset_vpn_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId"></a>

```python
def reset_vpn_gateway_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnection.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn">core_network_attachment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration">customer_gateway_configuration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address">tunnel1_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn">tunnel1_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime">tunnel1_bgp_holdtime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress">tunnel1_cgw_inside_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions">tunnel1_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress">tunnel1_vgw_inside_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address">tunnel2_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn">tunnel2_bgp_asn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime">tunnel2_bgp_holdtime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress">tunnel2_cgw_inside_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions">tunnel2_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress">tunnel2_vgw_inside_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry">vgw_telemetry</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput">customer_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput">enable_acceleration_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput">local_ipv4_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput">local_ipv6_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput">outside_ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput">remote_ipv4_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput">remote_ipv6_network_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput">static_routes_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput">transit_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput">transport_transit_gateway_attachment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput">tunnel1_dpd_timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput">tunnel1_dpd_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput">tunnel1_ike_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput">tunnel1_inside_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput">tunnel1_inside_ipv6_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput">tunnel1_log_options_input</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput">tunnel1_phase1_dh_group_numbers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput">tunnel1_phase1_encryption_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput">tunnel1_phase1_integrity_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput">tunnel1_phase1_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput">tunnel1_phase2_dh_group_numbers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput">tunnel1_phase2_encryption_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput">tunnel1_phase2_integrity_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput">tunnel1_phase2_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput">tunnel1_preshared_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput">tunnel1_rekey_fuzz_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput">tunnel1_rekey_margin_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput">tunnel1_replay_window_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput">tunnel1_startup_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput">tunnel2_dpd_timeout_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput">tunnel2_dpd_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput">tunnel2_ike_versions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput">tunnel2_inside_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput">tunnel2_inside_ipv6_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput">tunnel2_log_options_input</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput">tunnel2_phase1_dh_group_numbers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput">tunnel2_phase1_encryption_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput">tunnel2_phase1_integrity_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput">tunnel2_phase1_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput">tunnel2_phase2_dh_group_numbers_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput">tunnel2_phase2_encryption_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput">tunnel2_phase2_integrity_algorithms_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput">tunnel2_phase2_lifetime_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput">tunnel2_preshared_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput">tunnel2_rekey_fuzz_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput">tunnel2_rekey_margin_time_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput">tunnel2_replay_window_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput">tunnel2_startup_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput">tunnel_inside_ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput">vpn_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration">enable_acceleration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr">local_ipv4_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr">local_ipv6_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType">outside_ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr">remote_ipv4_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr">remote_ipv6_network_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly">static_routes_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId">transport_transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction">tunnel1_dpd_timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds">tunnel1_dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions">tunnel1_ike_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr">tunnel1_inside_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr">tunnel1_inside_ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers">tunnel1_phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms">tunnel1_phase1_encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms">tunnel1_phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds">tunnel1_phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers">tunnel1_phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms">tunnel1_phase2_encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms">tunnel1_phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds">tunnel1_phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey">tunnel1_preshared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage">tunnel1_rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds">tunnel1_rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize">tunnel1_replay_window_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction">tunnel1_startup_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction">tunnel2_dpd_timeout_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds">tunnel2_dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions">tunnel2_ike_versions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr">tunnel2_inside_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr">tunnel2_inside_ipv6_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers">tunnel2_phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms">tunnel2_phase1_encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms">tunnel2_phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds">tunnel2_phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers">tunnel2_phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms">tunnel2_phase2_encryption_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms">tunnel2_phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds">tunnel2_phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey">tunnel2_preshared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage">tunnel2_rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds">tunnel2_rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize">tunnel2_replay_window_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction">tunnel2_startup_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion">tunnel_inside_ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `core_network_attachment_arn`<sup>Required</sup> <a name="core_network_attachment_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn"></a>

```python
core_network_attachment_arn: str
```

- *Type:* str

---

##### `customer_gateway_configuration`<sup>Required</sup> <a name="customer_gateway_configuration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration"></a>

```python
customer_gateway_configuration: str
```

- *Type:* str

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes"></a>

```python
routes: VpnConnectionRoutesList
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a>

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `tunnel1_address`<sup>Required</sup> <a name="tunnel1_address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address"></a>

```python
tunnel1_address: str
```

- *Type:* str

---

##### `tunnel1_bgp_asn`<sup>Required</sup> <a name="tunnel1_bgp_asn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn"></a>

```python
tunnel1_bgp_asn: str
```

- *Type:* str

---

##### `tunnel1_bgp_holdtime`<sup>Required</sup> <a name="tunnel1_bgp_holdtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime"></a>

```python
tunnel1_bgp_holdtime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_cgw_inside_address`<sup>Required</sup> <a name="tunnel1_cgw_inside_address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress"></a>

```python
tunnel1_cgw_inside_address: str
```

- *Type:* str

---

##### `tunnel1_log_options`<sup>Required</sup> <a name="tunnel1_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions"></a>

```python
tunnel1_log_options: VpnConnectionTunnel1LogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a>

---

##### `tunnel1_vgw_inside_address`<sup>Required</sup> <a name="tunnel1_vgw_inside_address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress"></a>

```python
tunnel1_vgw_inside_address: str
```

- *Type:* str

---

##### `tunnel2_address`<sup>Required</sup> <a name="tunnel2_address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address"></a>

```python
tunnel2_address: str
```

- *Type:* str

---

##### `tunnel2_bgp_asn`<sup>Required</sup> <a name="tunnel2_bgp_asn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn"></a>

```python
tunnel2_bgp_asn: str
```

- *Type:* str

---

##### `tunnel2_bgp_holdtime`<sup>Required</sup> <a name="tunnel2_bgp_holdtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime"></a>

```python
tunnel2_bgp_holdtime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_cgw_inside_address`<sup>Required</sup> <a name="tunnel2_cgw_inside_address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress"></a>

```python
tunnel2_cgw_inside_address: str
```

- *Type:* str

---

##### `tunnel2_log_options`<sup>Required</sup> <a name="tunnel2_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions"></a>

```python
tunnel2_log_options: VpnConnectionTunnel2LogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a>

---

##### `tunnel2_vgw_inside_address`<sup>Required</sup> <a name="tunnel2_vgw_inside_address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress"></a>

```python
tunnel2_vgw_inside_address: str
```

- *Type:* str

---

##### `vgw_telemetry`<sup>Required</sup> <a name="vgw_telemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry"></a>

```python
vgw_telemetry: VpnConnectionVgwTelemetryList
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a>

---

##### `customer_gateway_id_input`<sup>Optional</sup> <a name="customer_gateway_id_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput"></a>

```python
customer_gateway_id_input: str
```

- *Type:* str

---

##### `enable_acceleration_input`<sup>Optional</sup> <a name="enable_acceleration_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput"></a>

```python
enable_acceleration_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `local_ipv4_network_cidr_input`<sup>Optional</sup> <a name="local_ipv4_network_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput"></a>

```python
local_ipv4_network_cidr_input: str
```

- *Type:* str

---

##### `local_ipv6_network_cidr_input`<sup>Optional</sup> <a name="local_ipv6_network_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput"></a>

```python
local_ipv6_network_cidr_input: str
```

- *Type:* str

---

##### `outside_ip_address_type_input`<sup>Optional</sup> <a name="outside_ip_address_type_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput"></a>

```python
outside_ip_address_type_input: str
```

- *Type:* str

---

##### `remote_ipv4_network_cidr_input`<sup>Optional</sup> <a name="remote_ipv4_network_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```python
remote_ipv4_network_cidr_input: str
```

- *Type:* str

---

##### `remote_ipv6_network_cidr_input`<sup>Optional</sup> <a name="remote_ipv6_network_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```python
remote_ipv6_network_cidr_input: str
```

- *Type:* str

---

##### `static_routes_only_input`<sup>Optional</sup> <a name="static_routes_only_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput"></a>

```python
static_routes_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_id_input`<sup>Optional</sup> <a name="transit_gateway_id_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput"></a>

```python
transit_gateway_id_input: str
```

- *Type:* str

---

##### `transport_transit_gateway_attachment_id_input`<sup>Optional</sup> <a name="transport_transit_gateway_attachment_id_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```python
transport_transit_gateway_attachment_id_input: str
```

- *Type:* str

---

##### `tunnel1_dpd_timeout_action_input`<sup>Optional</sup> <a name="tunnel1_dpd_timeout_action_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput"></a>

```python
tunnel1_dpd_timeout_action_input: str
```

- *Type:* str

---

##### `tunnel1_dpd_timeout_seconds_input`<sup>Optional</sup> <a name="tunnel1_dpd_timeout_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput"></a>

```python
tunnel1_dpd_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_ike_versions_input`<sup>Optional</sup> <a name="tunnel1_ike_versions_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput"></a>

```python
tunnel1_ike_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_inside_cidr_input`<sup>Optional</sup> <a name="tunnel1_inside_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput"></a>

```python
tunnel1_inside_cidr_input: str
```

- *Type:* str

---

##### `tunnel1_inside_ipv6_cidr_input`<sup>Optional</sup> <a name="tunnel1_inside_ipv6_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput"></a>

```python
tunnel1_inside_ipv6_cidr_input: str
```

- *Type:* str

---

##### `tunnel1_log_options_input`<sup>Optional</sup> <a name="tunnel1_log_options_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput"></a>

```python
tunnel1_log_options_input: VpnConnectionTunnel1LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `tunnel1_phase1_dh_group_numbers_input`<sup>Optional</sup> <a name="tunnel1_phase1_dh_group_numbers_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput"></a>

```python
tunnel1_phase1_dh_group_numbers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel1_phase1_encryption_algorithms_input`<sup>Optional</sup> <a name="tunnel1_phase1_encryption_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput"></a>

```python
tunnel1_phase1_encryption_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase1_integrity_algorithms_input`<sup>Optional</sup> <a name="tunnel1_phase1_integrity_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput"></a>

```python
tunnel1_phase1_integrity_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase1_lifetime_seconds_input`<sup>Optional</sup> <a name="tunnel1_phase1_lifetime_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput"></a>

```python
tunnel1_phase1_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_phase2_dh_group_numbers_input`<sup>Optional</sup> <a name="tunnel1_phase2_dh_group_numbers_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput"></a>

```python
tunnel1_phase2_dh_group_numbers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel1_phase2_encryption_algorithms_input`<sup>Optional</sup> <a name="tunnel1_phase2_encryption_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput"></a>

```python
tunnel1_phase2_encryption_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase2_integrity_algorithms_input`<sup>Optional</sup> <a name="tunnel1_phase2_integrity_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput"></a>

```python
tunnel1_phase2_integrity_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase2_lifetime_seconds_input`<sup>Optional</sup> <a name="tunnel1_phase2_lifetime_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput"></a>

```python
tunnel1_phase2_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_preshared_key_input`<sup>Optional</sup> <a name="tunnel1_preshared_key_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput"></a>

```python
tunnel1_preshared_key_input: str
```

- *Type:* str

---

##### `tunnel1_rekey_fuzz_percentage_input`<sup>Optional</sup> <a name="tunnel1_rekey_fuzz_percentage_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput"></a>

```python
tunnel1_rekey_fuzz_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_rekey_margin_time_seconds_input`<sup>Optional</sup> <a name="tunnel1_rekey_margin_time_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput"></a>

```python
tunnel1_rekey_margin_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_replay_window_size_input`<sup>Optional</sup> <a name="tunnel1_replay_window_size_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput"></a>

```python
tunnel1_replay_window_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_startup_action_input`<sup>Optional</sup> <a name="tunnel1_startup_action_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput"></a>

```python
tunnel1_startup_action_input: str
```

- *Type:* str

---

##### `tunnel2_dpd_timeout_action_input`<sup>Optional</sup> <a name="tunnel2_dpd_timeout_action_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput"></a>

```python
tunnel2_dpd_timeout_action_input: str
```

- *Type:* str

---

##### `tunnel2_dpd_timeout_seconds_input`<sup>Optional</sup> <a name="tunnel2_dpd_timeout_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput"></a>

```python
tunnel2_dpd_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_ike_versions_input`<sup>Optional</sup> <a name="tunnel2_ike_versions_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput"></a>

```python
tunnel2_ike_versions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_inside_cidr_input`<sup>Optional</sup> <a name="tunnel2_inside_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput"></a>

```python
tunnel2_inside_cidr_input: str
```

- *Type:* str

---

##### `tunnel2_inside_ipv6_cidr_input`<sup>Optional</sup> <a name="tunnel2_inside_ipv6_cidr_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput"></a>

```python
tunnel2_inside_ipv6_cidr_input: str
```

- *Type:* str

---

##### `tunnel2_log_options_input`<sup>Optional</sup> <a name="tunnel2_log_options_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput"></a>

```python
tunnel2_log_options_input: VpnConnectionTunnel2LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `tunnel2_phase1_dh_group_numbers_input`<sup>Optional</sup> <a name="tunnel2_phase1_dh_group_numbers_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput"></a>

```python
tunnel2_phase1_dh_group_numbers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel2_phase1_encryption_algorithms_input`<sup>Optional</sup> <a name="tunnel2_phase1_encryption_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput"></a>

```python
tunnel2_phase1_encryption_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase1_integrity_algorithms_input`<sup>Optional</sup> <a name="tunnel2_phase1_integrity_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput"></a>

```python
tunnel2_phase1_integrity_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase1_lifetime_seconds_input`<sup>Optional</sup> <a name="tunnel2_phase1_lifetime_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput"></a>

```python
tunnel2_phase1_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_phase2_dh_group_numbers_input`<sup>Optional</sup> <a name="tunnel2_phase2_dh_group_numbers_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput"></a>

```python
tunnel2_phase2_dh_group_numbers_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel2_phase2_encryption_algorithms_input`<sup>Optional</sup> <a name="tunnel2_phase2_encryption_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput"></a>

```python
tunnel2_phase2_encryption_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase2_integrity_algorithms_input`<sup>Optional</sup> <a name="tunnel2_phase2_integrity_algorithms_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput"></a>

```python
tunnel2_phase2_integrity_algorithms_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase2_lifetime_seconds_input`<sup>Optional</sup> <a name="tunnel2_phase2_lifetime_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput"></a>

```python
tunnel2_phase2_lifetime_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_preshared_key_input`<sup>Optional</sup> <a name="tunnel2_preshared_key_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput"></a>

```python
tunnel2_preshared_key_input: str
```

- *Type:* str

---

##### `tunnel2_rekey_fuzz_percentage_input`<sup>Optional</sup> <a name="tunnel2_rekey_fuzz_percentage_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput"></a>

```python
tunnel2_rekey_fuzz_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_rekey_margin_time_seconds_input`<sup>Optional</sup> <a name="tunnel2_rekey_margin_time_seconds_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput"></a>

```python
tunnel2_rekey_margin_time_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_replay_window_size_input`<sup>Optional</sup> <a name="tunnel2_replay_window_size_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput"></a>

```python
tunnel2_replay_window_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_startup_action_input`<sup>Optional</sup> <a name="tunnel2_startup_action_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput"></a>

```python
tunnel2_startup_action_input: str
```

- *Type:* str

---

##### `tunnel_inside_ip_version_input`<sup>Optional</sup> <a name="tunnel_inside_ip_version_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput"></a>

```python
tunnel_inside_ip_version_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpn_gateway_id_input`<sup>Optional</sup> <a name="vpn_gateway_id_input" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput"></a>

```python
vpn_gateway_id_input: str
```

- *Type:* str

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

---

##### `enable_acceleration`<sup>Required</sup> <a name="enable_acceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration"></a>

```python
enable_acceleration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `local_ipv4_network_cidr`<sup>Required</sup> <a name="local_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr"></a>

```python
local_ipv4_network_cidr: str
```

- *Type:* str

---

##### `local_ipv6_network_cidr`<sup>Required</sup> <a name="local_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr"></a>

```python
local_ipv6_network_cidr: str
```

- *Type:* str

---

##### `outside_ip_address_type`<sup>Required</sup> <a name="outside_ip_address_type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType"></a>

```python
outside_ip_address_type: str
```

- *Type:* str

---

##### `remote_ipv4_network_cidr`<sup>Required</sup> <a name="remote_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr"></a>

```python
remote_ipv4_network_cidr: str
```

- *Type:* str

---

##### `remote_ipv6_network_cidr`<sup>Required</sup> <a name="remote_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr"></a>

```python
remote_ipv6_network_cidr: str
```

- *Type:* str

---

##### `static_routes_only`<sup>Required</sup> <a name="static_routes_only" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly"></a>

```python
static_routes_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `transport_transit_gateway_attachment_id`<sup>Required</sup> <a name="transport_transit_gateway_attachment_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```python
transport_transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `tunnel1_dpd_timeout_action`<sup>Required</sup> <a name="tunnel1_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction"></a>

```python
tunnel1_dpd_timeout_action: str
```

- *Type:* str

---

##### `tunnel1_dpd_timeout_seconds`<sup>Required</sup> <a name="tunnel1_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds"></a>

```python
tunnel1_dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_ike_versions`<sup>Required</sup> <a name="tunnel1_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions"></a>

```python
tunnel1_ike_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_inside_cidr`<sup>Required</sup> <a name="tunnel1_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr"></a>

```python
tunnel1_inside_cidr: str
```

- *Type:* str

---

##### `tunnel1_inside_ipv6_cidr`<sup>Required</sup> <a name="tunnel1_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr"></a>

```python
tunnel1_inside_ipv6_cidr: str
```

- *Type:* str

---

##### `tunnel1_phase1_dh_group_numbers`<sup>Required</sup> <a name="tunnel1_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers"></a>

```python
tunnel1_phase1_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel1_phase1_encryption_algorithms`<sup>Required</sup> <a name="tunnel1_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms"></a>

```python
tunnel1_phase1_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase1_integrity_algorithms`<sup>Required</sup> <a name="tunnel1_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms"></a>

```python
tunnel1_phase1_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase1_lifetime_seconds`<sup>Required</sup> <a name="tunnel1_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds"></a>

```python
tunnel1_phase1_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_phase2_dh_group_numbers`<sup>Required</sup> <a name="tunnel1_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers"></a>

```python
tunnel1_phase2_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel1_phase2_encryption_algorithms`<sup>Required</sup> <a name="tunnel1_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms"></a>

```python
tunnel1_phase2_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase2_integrity_algorithms`<sup>Required</sup> <a name="tunnel1_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms"></a>

```python
tunnel1_phase2_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel1_phase2_lifetime_seconds`<sup>Required</sup> <a name="tunnel1_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds"></a>

```python
tunnel1_phase2_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_preshared_key`<sup>Required</sup> <a name="tunnel1_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey"></a>

```python
tunnel1_preshared_key: str
```

- *Type:* str

---

##### `tunnel1_rekey_fuzz_percentage`<sup>Required</sup> <a name="tunnel1_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage"></a>

```python
tunnel1_rekey_fuzz_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_rekey_margin_time_seconds`<sup>Required</sup> <a name="tunnel1_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds"></a>

```python
tunnel1_rekey_margin_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_replay_window_size`<sup>Required</sup> <a name="tunnel1_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize"></a>

```python
tunnel1_replay_window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel1_startup_action`<sup>Required</sup> <a name="tunnel1_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction"></a>

```python
tunnel1_startup_action: str
```

- *Type:* str

---

##### `tunnel2_dpd_timeout_action`<sup>Required</sup> <a name="tunnel2_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction"></a>

```python
tunnel2_dpd_timeout_action: str
```

- *Type:* str

---

##### `tunnel2_dpd_timeout_seconds`<sup>Required</sup> <a name="tunnel2_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds"></a>

```python
tunnel2_dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_ike_versions`<sup>Required</sup> <a name="tunnel2_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions"></a>

```python
tunnel2_ike_versions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_inside_cidr`<sup>Required</sup> <a name="tunnel2_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr"></a>

```python
tunnel2_inside_cidr: str
```

- *Type:* str

---

##### `tunnel2_inside_ipv6_cidr`<sup>Required</sup> <a name="tunnel2_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr"></a>

```python
tunnel2_inside_ipv6_cidr: str
```

- *Type:* str

---

##### `tunnel2_phase1_dh_group_numbers`<sup>Required</sup> <a name="tunnel2_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers"></a>

```python
tunnel2_phase1_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel2_phase1_encryption_algorithms`<sup>Required</sup> <a name="tunnel2_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms"></a>

```python
tunnel2_phase1_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase1_integrity_algorithms`<sup>Required</sup> <a name="tunnel2_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms"></a>

```python
tunnel2_phase1_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase1_lifetime_seconds`<sup>Required</sup> <a name="tunnel2_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds"></a>

```python
tunnel2_phase1_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_phase2_dh_group_numbers`<sup>Required</sup> <a name="tunnel2_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers"></a>

```python
tunnel2_phase2_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `tunnel2_phase2_encryption_algorithms`<sup>Required</sup> <a name="tunnel2_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms"></a>

```python
tunnel2_phase2_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase2_integrity_algorithms`<sup>Required</sup> <a name="tunnel2_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms"></a>

```python
tunnel2_phase2_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tunnel2_phase2_lifetime_seconds`<sup>Required</sup> <a name="tunnel2_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds"></a>

```python
tunnel2_phase2_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_preshared_key`<sup>Required</sup> <a name="tunnel2_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey"></a>

```python
tunnel2_preshared_key: str
```

- *Type:* str

---

##### `tunnel2_rekey_fuzz_percentage`<sup>Required</sup> <a name="tunnel2_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage"></a>

```python
tunnel2_rekey_fuzz_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_rekey_margin_time_seconds`<sup>Required</sup> <a name="tunnel2_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds"></a>

```python
tunnel2_rekey_margin_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_replay_window_size`<sup>Required</sup> <a name="tunnel2_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize"></a>

```python
tunnel2_replay_window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tunnel2_startup_action`<sup>Required</sup> <a name="tunnel2_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction"></a>

```python
tunnel2_startup_action: str
```

- *Type:* str

---

##### `tunnel_inside_ip_version`<sup>Required</sup> <a name="tunnel_inside_ip_version" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion"></a>

```python
tunnel_inside_ip_version: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpn_gateway_id`<sup>Required</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VpnConnectionConfig <a name="VpnConnectionConfig" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_gateway_id: str,
  type: str,
  enable_acceleration: typing.Union[bool, IResolvable] = None,
  id: str = None,
  local_ipv4_network_cidr: str = None,
  local_ipv6_network_cidr: str = None,
  outside_ip_address_type: str = None,
  remote_ipv4_network_cidr: str = None,
  remote_ipv6_network_cidr: str = None,
  static_routes_only: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  transit_gateway_id: str = None,
  transport_transit_gateway_attachment_id: str = None,
  tunnel1_dpd_timeout_action: str = None,
  tunnel1_dpd_timeout_seconds: typing.Union[int, float] = None,
  tunnel1_ike_versions: typing.List[str] = None,
  tunnel1_inside_cidr: str = None,
  tunnel1_inside_ipv6_cidr: str = None,
  tunnel1_log_options: VpnConnectionTunnel1LogOptions = None,
  tunnel1_phase1_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel1_phase1_encryption_algorithms: typing.List[str] = None,
  tunnel1_phase1_integrity_algorithms: typing.List[str] = None,
  tunnel1_phase1_lifetime_seconds: typing.Union[int, float] = None,
  tunnel1_phase2_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel1_phase2_encryption_algorithms: typing.List[str] = None,
  tunnel1_phase2_integrity_algorithms: typing.List[str] = None,
  tunnel1_phase2_lifetime_seconds: typing.Union[int, float] = None,
  tunnel1_preshared_key: str = None,
  tunnel1_rekey_fuzz_percentage: typing.Union[int, float] = None,
  tunnel1_rekey_margin_time_seconds: typing.Union[int, float] = None,
  tunnel1_replay_window_size: typing.Union[int, float] = None,
  tunnel1_startup_action: str = None,
  tunnel2_dpd_timeout_action: str = None,
  tunnel2_dpd_timeout_seconds: typing.Union[int, float] = None,
  tunnel2_ike_versions: typing.List[str] = None,
  tunnel2_inside_cidr: str = None,
  tunnel2_inside_ipv6_cidr: str = None,
  tunnel2_log_options: VpnConnectionTunnel2LogOptions = None,
  tunnel2_phase1_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel2_phase1_encryption_algorithms: typing.List[str] = None,
  tunnel2_phase1_integrity_algorithms: typing.List[str] = None,
  tunnel2_phase1_lifetime_seconds: typing.Union[int, float] = None,
  tunnel2_phase2_dh_group_numbers: typing.List[typing.Union[int, float]] = None,
  tunnel2_phase2_encryption_algorithms: typing.List[str] = None,
  tunnel2_phase2_integrity_algorithms: typing.List[str] = None,
  tunnel2_phase2_lifetime_seconds: typing.Union[int, float] = None,
  tunnel2_preshared_key: str = None,
  tunnel2_rekey_fuzz_percentage: typing.Union[int, float] = None,
  tunnel2_rekey_margin_time_seconds: typing.Union[int, float] = None,
  tunnel2_replay_window_size: typing.Union[int, float] = None,
  tunnel2_startup_action: str = None,
  tunnel_inside_ip_version: str = None,
  vpn_gateway_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId">customer_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration">enable_acceleration</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr">local_ipv4_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr">local_ipv6_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType">outside_ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr">remote_ipv4_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr">remote_ipv6_network_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly">static_routes_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId">transport_transit_gateway_attachment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction">tunnel1_dpd_timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds">tunnel1_dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions">tunnel1_ike_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr">tunnel1_inside_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr">tunnel1_inside_ipv6_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions">tunnel1_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | tunnel1_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers">tunnel1_phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms">tunnel1_phase1_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms">tunnel1_phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds">tunnel1_phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers">tunnel1_phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms">tunnel1_phase2_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms">tunnel1_phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds">tunnel1_phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey">tunnel1_preshared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage">tunnel1_rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds">tunnel1_rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize">tunnel1_replay_window_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction">tunnel1_startup_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction">tunnel2_dpd_timeout_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds">tunnel2_dpd_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions">tunnel2_ike_versions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr">tunnel2_inside_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr">tunnel2_inside_ipv6_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions">tunnel2_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | tunnel2_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers">tunnel2_phase1_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms">tunnel2_phase1_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms">tunnel2_phase1_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds">tunnel2_phase1_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers">tunnel2_phase2_dh_group_numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms">tunnel2_phase2_encryption_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms">tunnel2_phase2_integrity_algorithms</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds">tunnel2_phase2_lifetime_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey">tunnel2_preshared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage">tunnel2_rekey_fuzz_percentage</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds">tunnel2_rekey_margin_time_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize">tunnel2_replay_window_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction">tunnel2_startup_action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion">tunnel_inside_ip_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId">vpn_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_gateway_id`<sup>Required</sup> <a name="customer_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId"></a>

```python
customer_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}.

---

##### `enable_acceleration`<sup>Optional</sup> <a name="enable_acceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration"></a>

```python
enable_acceleration: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `local_ipv4_network_cidr`<sup>Optional</sup> <a name="local_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```python
local_ipv4_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.

---

##### `local_ipv6_network_cidr`<sup>Optional</sup> <a name="local_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```python
local_ipv6_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.

---

##### `outside_ip_address_type`<sup>Optional</sup> <a name="outside_ip_address_type" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType"></a>

```python
outside_ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}.

---

##### `remote_ipv4_network_cidr`<sup>Optional</sup> <a name="remote_ipv4_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```python
remote_ipv4_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.

---

##### `remote_ipv6_network_cidr`<sup>Optional</sup> <a name="remote_ipv6_network_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```python
remote_ipv6_network_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.

---

##### `static_routes_only`<sup>Optional</sup> <a name="static_routes_only" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly"></a>

```python
static_routes_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}.

---

##### `transit_gateway_id`<sup>Optional</sup> <a name="transit_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}.

---

##### `transport_transit_gateway_attachment_id`<sup>Optional</sup> <a name="transport_transit_gateway_attachment_id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```python
transport_transit_gateway_attachment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}.

---

##### `tunnel1_dpd_timeout_action`<sup>Optional</sup> <a name="tunnel1_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction"></a>

```python
tunnel1_dpd_timeout_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.

---

##### `tunnel1_dpd_timeout_seconds`<sup>Optional</sup> <a name="tunnel1_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds"></a>

```python
tunnel1_dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.

---

##### `tunnel1_ike_versions`<sup>Optional</sup> <a name="tunnel1_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions"></a>

```python
tunnel1_ike_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.

---

##### `tunnel1_inside_cidr`<sup>Optional</sup> <a name="tunnel1_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr"></a>

```python
tunnel1_inside_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.

---

##### `tunnel1_inside_ipv6_cidr`<sup>Optional</sup> <a name="tunnel1_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr"></a>

```python
tunnel1_inside_ipv6_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.

---

##### `tunnel1_log_options`<sup>Optional</sup> <a name="tunnel1_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions"></a>

```python
tunnel1_log_options: VpnConnectionTunnel1LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

tunnel1_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}

---

##### `tunnel1_phase1_dh_group_numbers`<sup>Optional</sup> <a name="tunnel1_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers"></a>

```python
tunnel1_phase1_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.

---

##### `tunnel1_phase1_encryption_algorithms`<sup>Optional</sup> <a name="tunnel1_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms"></a>

```python
tunnel1_phase1_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.

---

##### `tunnel1_phase1_integrity_algorithms`<sup>Optional</sup> <a name="tunnel1_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms"></a>

```python
tunnel1_phase1_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.

---

##### `tunnel1_phase1_lifetime_seconds`<sup>Optional</sup> <a name="tunnel1_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds"></a>

```python
tunnel1_phase1_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.

---

##### `tunnel1_phase2_dh_group_numbers`<sup>Optional</sup> <a name="tunnel1_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers"></a>

```python
tunnel1_phase2_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.

---

##### `tunnel1_phase2_encryption_algorithms`<sup>Optional</sup> <a name="tunnel1_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms"></a>

```python
tunnel1_phase2_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.

---

##### `tunnel1_phase2_integrity_algorithms`<sup>Optional</sup> <a name="tunnel1_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms"></a>

```python
tunnel1_phase2_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.

---

##### `tunnel1_phase2_lifetime_seconds`<sup>Optional</sup> <a name="tunnel1_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds"></a>

```python
tunnel1_phase2_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.

---

##### `tunnel1_preshared_key`<sup>Optional</sup> <a name="tunnel1_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey"></a>

```python
tunnel1_preshared_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.

---

##### `tunnel1_rekey_fuzz_percentage`<sup>Optional</sup> <a name="tunnel1_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage"></a>

```python
tunnel1_rekey_fuzz_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.

---

##### `tunnel1_rekey_margin_time_seconds`<sup>Optional</sup> <a name="tunnel1_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds"></a>

```python
tunnel1_rekey_margin_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.

---

##### `tunnel1_replay_window_size`<sup>Optional</sup> <a name="tunnel1_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize"></a>

```python
tunnel1_replay_window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.

---

##### `tunnel1_startup_action`<sup>Optional</sup> <a name="tunnel1_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction"></a>

```python
tunnel1_startup_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.

---

##### `tunnel2_dpd_timeout_action`<sup>Optional</sup> <a name="tunnel2_dpd_timeout_action" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction"></a>

```python
tunnel2_dpd_timeout_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.

---

##### `tunnel2_dpd_timeout_seconds`<sup>Optional</sup> <a name="tunnel2_dpd_timeout_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds"></a>

```python
tunnel2_dpd_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.

---

##### `tunnel2_ike_versions`<sup>Optional</sup> <a name="tunnel2_ike_versions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions"></a>

```python
tunnel2_ike_versions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.

---

##### `tunnel2_inside_cidr`<sup>Optional</sup> <a name="tunnel2_inside_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr"></a>

```python
tunnel2_inside_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.

---

##### `tunnel2_inside_ipv6_cidr`<sup>Optional</sup> <a name="tunnel2_inside_ipv6_cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr"></a>

```python
tunnel2_inside_ipv6_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.

---

##### `tunnel2_log_options`<sup>Optional</sup> <a name="tunnel2_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions"></a>

```python
tunnel2_log_options: VpnConnectionTunnel2LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

tunnel2_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}

---

##### `tunnel2_phase1_dh_group_numbers`<sup>Optional</sup> <a name="tunnel2_phase1_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers"></a>

```python
tunnel2_phase1_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.

---

##### `tunnel2_phase1_encryption_algorithms`<sup>Optional</sup> <a name="tunnel2_phase1_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms"></a>

```python
tunnel2_phase1_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.

---

##### `tunnel2_phase1_integrity_algorithms`<sup>Optional</sup> <a name="tunnel2_phase1_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms"></a>

```python
tunnel2_phase1_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.

---

##### `tunnel2_phase1_lifetime_seconds`<sup>Optional</sup> <a name="tunnel2_phase1_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds"></a>

```python
tunnel2_phase1_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.

---

##### `tunnel2_phase2_dh_group_numbers`<sup>Optional</sup> <a name="tunnel2_phase2_dh_group_numbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers"></a>

```python
tunnel2_phase2_dh_group_numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.

---

##### `tunnel2_phase2_encryption_algorithms`<sup>Optional</sup> <a name="tunnel2_phase2_encryption_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms"></a>

```python
tunnel2_phase2_encryption_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.

---

##### `tunnel2_phase2_integrity_algorithms`<sup>Optional</sup> <a name="tunnel2_phase2_integrity_algorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms"></a>

```python
tunnel2_phase2_integrity_algorithms: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.

---

##### `tunnel2_phase2_lifetime_seconds`<sup>Optional</sup> <a name="tunnel2_phase2_lifetime_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds"></a>

```python
tunnel2_phase2_lifetime_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.

---

##### `tunnel2_preshared_key`<sup>Optional</sup> <a name="tunnel2_preshared_key" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey"></a>

```python
tunnel2_preshared_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.

---

##### `tunnel2_rekey_fuzz_percentage`<sup>Optional</sup> <a name="tunnel2_rekey_fuzz_percentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage"></a>

```python
tunnel2_rekey_fuzz_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.

---

##### `tunnel2_rekey_margin_time_seconds`<sup>Optional</sup> <a name="tunnel2_rekey_margin_time_seconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds"></a>

```python
tunnel2_rekey_margin_time_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.

---

##### `tunnel2_replay_window_size`<sup>Optional</sup> <a name="tunnel2_replay_window_size" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize"></a>

```python
tunnel2_replay_window_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.

---

##### `tunnel2_startup_action`<sup>Optional</sup> <a name="tunnel2_startup_action" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction"></a>

```python
tunnel2_startup_action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.

---

##### `tunnel_inside_ip_version`<sup>Optional</sup> <a name="tunnel_inside_ip_version" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```python
tunnel_inside_ip_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.

---

##### `vpn_gateway_id`<sup>Optional</sup> <a name="vpn_gateway_id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId"></a>

```python
vpn_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}.

---

### VpnConnectionRoutes <a name="VpnConnectionRoutes" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionRoutes()
```


### VpnConnectionTunnel1LogOptions <a name="VpnConnectionTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel1LogOptions(
  cloudwatch_log_options: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions">cloudwatch_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `cloudwatch_log_options`<sup>Optional</sup> <a name="cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions"></a>

```python
cloudwatch_log_options: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel1LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions(
  log_enabled: typing.Union[bool, IResolvable] = None,
  log_group_arn: str = None,
  log_output_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled">log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat">log_output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `log_enabled`<sup>Optional</sup> <a name="log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```python
log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `log_output_format`<sup>Optional</sup> <a name="log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```python
log_output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionTunnel2LogOptions <a name="VpnConnectionTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel2LogOptions(
  cloudwatch_log_options: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions">cloudwatch_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `cloudwatch_log_options`<sup>Optional</sup> <a name="cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions"></a>

```python
cloudwatch_log_options: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel2LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions(
  log_enabled: typing.Union[bool, IResolvable] = None,
  log_group_arn: str = None,
  log_output_format: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled">log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat">log_output_format</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `log_enabled`<sup>Optional</sup> <a name="log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```python
log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `log_output_format`<sup>Optional</sup> <a name="log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```python
log_output_format: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionVgwTelemetry <a name="VpnConnectionVgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionVgwTelemetry()
```


## Classes <a name="Classes" id="Classes"></a>

### VpnConnectionRoutesList <a name="VpnConnectionRoutesList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionRoutesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnConnectionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VpnConnectionRoutesOutputReference <a name="VpnConnectionRoutesOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionRoutesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock">destination_cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_cidr_block`<sup>Required</sup> <a name="destination_cidr_block" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock"></a>

```python
destination_cidr_block: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue"></a>

```python
internal_value: VpnConnectionRoutes
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a>

---


### VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">reset_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">reset_log_output_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_enabled` <a name="reset_log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```python
def reset_log_enabled() -> None
```

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```

##### `reset_log_output_format` <a name="reset_log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```python
def reset_log_output_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">log_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">log_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_enabled_input`<sup>Optional</sup> <a name="log_enabled_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```python
log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_output_format_input`<sup>Optional</sup> <a name="log_output_format_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```python
log_output_format_input: str
```

- *Type:* str

---

##### `log_enabled`<sup>Required</sup> <a name="log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```python
log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `log_output_format`<sup>Required</sup> <a name="log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```python
log_output_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel1LogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions">put_cloudwatch_log_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions">reset_cloudwatch_log_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_log_options` <a name="put_cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```python
def put_cloudwatch_log_options(
  log_enabled: typing.Union[bool, IResolvable] = None,
  log_group_arn: str = None,
  log_output_format: str = None
) -> None
```

###### `log_enabled`<sup>Optional</sup> <a name="log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions.parameter.logEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions.parameter.logGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

###### `log_output_format`<sup>Optional</sup> <a name="log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions.parameter.logOutputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

##### `reset_cloudwatch_log_options` <a name="reset_cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```python
def reset_cloudwatch_log_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatch_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatch_log_options_input</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_options`<sup>Required</sup> <a name="cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```python
cloudwatch_log_options: VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatch_log_options_input`<sup>Optional</sup> <a name="cloudwatch_log_options_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```python
cloudwatch_log_options_input: VpnConnectionTunnel1LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VpnConnectionTunnel1LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---


### VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">reset_log_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">reset_log_group_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">reset_log_output_format</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_enabled` <a name="reset_log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```python
def reset_log_enabled() -> None
```

##### `reset_log_group_arn` <a name="reset_log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```python
def reset_log_group_arn() -> None
```

##### `reset_log_output_format` <a name="reset_log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```python
def reset_log_output_format() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">log_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">log_group_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">log_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">log_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">log_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_enabled_input`<sup>Optional</sup> <a name="log_enabled_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```python
log_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_arn_input`<sup>Optional</sup> <a name="log_group_arn_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```python
log_group_arn_input: str
```

- *Type:* str

---

##### `log_output_format_input`<sup>Optional</sup> <a name="log_output_format_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```python
log_output_format_input: str
```

- *Type:* str

---

##### `log_enabled`<sup>Required</sup> <a name="log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```python
log_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_arn`<sup>Required</sup> <a name="log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```python
log_group_arn: str
```

- *Type:* str

---

##### `log_output_format`<sup>Required</sup> <a name="log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```python
log_output_format: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel2LogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions">put_cloudwatch_log_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions">reset_cloudwatch_log_options</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_log_options` <a name="put_cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```python
def put_cloudwatch_log_options(
  log_enabled: typing.Union[bool, IResolvable] = None,
  log_group_arn: str = None,
  log_output_format: str = None
) -> None
```

###### `log_enabled`<sup>Optional</sup> <a name="log_enabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions.parameter.logEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

###### `log_group_arn`<sup>Optional</sup> <a name="log_group_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions.parameter.logGroupArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

###### `log_output_format`<sup>Optional</sup> <a name="log_output_format" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions.parameter.logOutputFormat"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

##### `reset_cloudwatch_log_options` <a name="reset_cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```python
def reset_cloudwatch_log_options() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatch_log_options</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatch_log_options_input</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_log_options`<sup>Required</sup> <a name="cloudwatch_log_options" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```python
cloudwatch_log_options: VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatch_log_options_input`<sup>Optional</sup> <a name="cloudwatch_log_options_input" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```python
cloudwatch_log_options_input: VpnConnectionTunnel2LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue"></a>

```python
internal_value: VpnConnectionTunnel2LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---


### VpnConnectionVgwTelemetryList <a name="VpnConnectionVgwTelemetryList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionVgwTelemetryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> VpnConnectionVgwTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### VpnConnectionVgwTelemetryOutputReference <a name="VpnConnectionVgwTelemetryOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import vpn_connection

vpnConnection.VpnConnectionVgwTelemetryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount">accepted_route_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn">certificate_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange">last_status_change</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress">outside_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage">status_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accepted_route_count`<sup>Required</sup> <a name="accepted_route_count" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount"></a>

```python
accepted_route_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `certificate_arn`<sup>Required</sup> <a name="certificate_arn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn"></a>

```python
certificate_arn: str
```

- *Type:* str

---

##### `last_status_change`<sup>Required</sup> <a name="last_status_change" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange"></a>

```python
last_status_change: str
```

- *Type:* str

---

##### `outside_ip_address`<sup>Required</sup> <a name="outside_ip_address" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress"></a>

```python
outside_ip_address: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_message`<sup>Required</sup> <a name="status_message" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage"></a>

```python
status_message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue"></a>

```python
internal_value: VpnConnectionVgwTelemetry
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a>

---



