# `vpnConnection` Submodule <a name="`vpnConnection` Submodule" id="@cdktf/provider-aws.vpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnConnection <a name="VpnConnection" id="@cdktf/provider-aws.vpnConnection.VpnConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection aws_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnection;

VpnConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .customerGatewayId(java.lang.String)
    .type(java.lang.String)
//  .enableAcceleration(java.lang.Boolean)
//  .enableAcceleration(IResolvable)
//  .id(java.lang.String)
//  .localIpv4NetworkCidr(java.lang.String)
//  .localIpv6NetworkCidr(java.lang.String)
//  .outsideIpAddressType(java.lang.String)
//  .remoteIpv4NetworkCidr(java.lang.String)
//  .remoteIpv6NetworkCidr(java.lang.String)
//  .staticRoutesOnly(java.lang.Boolean)
//  .staticRoutesOnly(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .transitGatewayId(java.lang.String)
//  .transportTransitGatewayAttachmentId(java.lang.String)
//  .tunnel1DpdTimeoutAction(java.lang.String)
//  .tunnel1DpdTimeoutSeconds(java.lang.Number)
//  .tunnel1IkeVersions(java.util.List<java.lang.String>)
//  .tunnel1InsideCidr(java.lang.String)
//  .tunnel1InsideIpv6Cidr(java.lang.String)
//  .tunnel1LogOptions(VpnConnectionTunnel1LogOptions)
//  .tunnel1Phase1DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel1Phase1EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase1IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase1LifetimeSeconds(java.lang.Number)
//  .tunnel1Phase2DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel1Phase2EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase2IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase2LifetimeSeconds(java.lang.Number)
//  .tunnel1PresharedKey(java.lang.String)
//  .tunnel1RekeyFuzzPercentage(java.lang.Number)
//  .tunnel1RekeyMarginTimeSeconds(java.lang.Number)
//  .tunnel1ReplayWindowSize(java.lang.Number)
//  .tunnel1StartupAction(java.lang.String)
//  .tunnel2DpdTimeoutAction(java.lang.String)
//  .tunnel2DpdTimeoutSeconds(java.lang.Number)
//  .tunnel2IkeVersions(java.util.List<java.lang.String>)
//  .tunnel2InsideCidr(java.lang.String)
//  .tunnel2InsideIpv6Cidr(java.lang.String)
//  .tunnel2LogOptions(VpnConnectionTunnel2LogOptions)
//  .tunnel2Phase1DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel2Phase1EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase1IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase1LifetimeSeconds(java.lang.Number)
//  .tunnel2Phase2DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel2Phase2EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase2IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase2LifetimeSeconds(java.lang.Number)
//  .tunnel2PresharedKey(java.lang.String)
//  .tunnel2RekeyFuzzPercentage(java.lang.Number)
//  .tunnel2RekeyMarginTimeSeconds(java.lang.Number)
//  .tunnel2ReplayWindowSize(java.lang.Number)
//  .tunnel2StartupAction(java.lang.String)
//  .tunnelInsideIpVersion(java.lang.String)
//  .vpnGatewayId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.customerGatewayId">customerGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.enableAcceleration">enableAcceleration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.outsideIpAddressType">outsideIpAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.staticRoutesOnly">staticRoutesOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutAction">tunnel1DpdTimeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutSeconds">tunnel1DpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1IkeVersions">tunnel1IkeVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideCidr">tunnel1InsideCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideIpv6Cidr">tunnel1InsideIpv6Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1LogOptions">tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | tunnel1_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1DhGroupNumbers">tunnel1Phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1EncryptionAlgorithms">tunnel1Phase1EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1IntegrityAlgorithms">tunnel1Phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1LifetimeSeconds">tunnel1Phase1LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2DhGroupNumbers">tunnel1Phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2EncryptionAlgorithms">tunnel1Phase2EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2IntegrityAlgorithms">tunnel1Phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2LifetimeSeconds">tunnel1Phase2LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1PresharedKey">tunnel1PresharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyFuzzPercentage">tunnel1RekeyFuzzPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyMarginTimeSeconds">tunnel1RekeyMarginTimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1ReplayWindowSize">tunnel1ReplayWindowSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1StartupAction">tunnel1StartupAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutAction">tunnel2DpdTimeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutSeconds">tunnel2DpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2IkeVersions">tunnel2IkeVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideCidr">tunnel2InsideCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideIpv6Cidr">tunnel2InsideIpv6Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2LogOptions">tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | tunnel2_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1DhGroupNumbers">tunnel2Phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1EncryptionAlgorithms">tunnel2Phase1EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1IntegrityAlgorithms">tunnel2Phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1LifetimeSeconds">tunnel2Phase1LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2DhGroupNumbers">tunnel2Phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2EncryptionAlgorithms">tunnel2Phase2EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2IntegrityAlgorithms">tunnel2Phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2LifetimeSeconds">tunnel2Phase2LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2PresharedKey">tunnel2PresharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyFuzzPercentage">tunnel2RekeyFuzzPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyMarginTimeSeconds">tunnel2RekeyMarginTimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2ReplayWindowSize">tunnel2ReplayWindowSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2StartupAction">tunnel2StartupAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.customerGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}.

---

##### `enableAcceleration`<sup>Optional</sup> <a name="enableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.enableAcceleration"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localIpv4NetworkCidr`<sup>Optional</sup> <a name="localIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv4NetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.

---

##### `localIpv6NetworkCidr`<sup>Optional</sup> <a name="localIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.localIpv6NetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.

---

##### `outsideIpAddressType`<sup>Optional</sup> <a name="outsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.outsideIpAddressType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}.

---

##### `remoteIpv4NetworkCidr`<sup>Optional</sup> <a name="remoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv4NetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.

---

##### `remoteIpv6NetworkCidr`<sup>Optional</sup> <a name="remoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.remoteIpv6NetworkCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.

---

##### `staticRoutesOnly`<sup>Optional</sup> <a name="staticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.staticRoutesOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transitGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}.

---

##### `transportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.transportTransitGatewayAttachmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}.

---

##### `tunnel1DpdTimeoutAction`<sup>Optional</sup> <a name="tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.

---

##### `tunnel1DpdTimeoutSeconds`<sup>Optional</sup> <a name="tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1DpdTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.

---

##### `tunnel1IkeVersions`<sup>Optional</sup> <a name="tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1IkeVersions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.

---

##### `tunnel1InsideCidr`<sup>Optional</sup> <a name="tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.

---

##### `tunnel1InsideIpv6Cidr`<sup>Optional</sup> <a name="tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1InsideIpv6Cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.

---

##### `tunnel1LogOptions`<sup>Optional</sup> <a name="tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1LogOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

tunnel1_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}

---

##### `tunnel1Phase1DhGroupNumbers`<sup>Optional</sup> <a name="tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1DhGroupNumbers"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.

---

##### `tunnel1Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1EncryptionAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.

---

##### `tunnel1Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1IntegrityAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.

---

##### `tunnel1Phase1LifetimeSeconds`<sup>Optional</sup> <a name="tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase1LifetimeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.

---

##### `tunnel1Phase2DhGroupNumbers`<sup>Optional</sup> <a name="tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2DhGroupNumbers"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.

---

##### `tunnel1Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2EncryptionAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.

---

##### `tunnel1Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2IntegrityAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.

---

##### `tunnel1Phase2LifetimeSeconds`<sup>Optional</sup> <a name="tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1Phase2LifetimeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.

---

##### `tunnel1PresharedKey`<sup>Optional</sup> <a name="tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1PresharedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.

---

##### `tunnel1RekeyFuzzPercentage`<sup>Optional</sup> <a name="tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyFuzzPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.

---

##### `tunnel1RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1RekeyMarginTimeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.

---

##### `tunnel1ReplayWindowSize`<sup>Optional</sup> <a name="tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1ReplayWindowSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.

---

##### `tunnel1StartupAction`<sup>Optional</sup> <a name="tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel1StartupAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.

---

##### `tunnel2DpdTimeoutAction`<sup>Optional</sup> <a name="tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.

---

##### `tunnel2DpdTimeoutSeconds`<sup>Optional</sup> <a name="tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2DpdTimeoutSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.

---

##### `tunnel2IkeVersions`<sup>Optional</sup> <a name="tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2IkeVersions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.

---

##### `tunnel2InsideCidr`<sup>Optional</sup> <a name="tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideCidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.

---

##### `tunnel2InsideIpv6Cidr`<sup>Optional</sup> <a name="tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2InsideIpv6Cidr"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.

---

##### `tunnel2LogOptions`<sup>Optional</sup> <a name="tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2LogOptions"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

tunnel2_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}

---

##### `tunnel2Phase1DhGroupNumbers`<sup>Optional</sup> <a name="tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1DhGroupNumbers"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.

---

##### `tunnel2Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1EncryptionAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.

---

##### `tunnel2Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1IntegrityAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.

---

##### `tunnel2Phase1LifetimeSeconds`<sup>Optional</sup> <a name="tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase1LifetimeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.

---

##### `tunnel2Phase2DhGroupNumbers`<sup>Optional</sup> <a name="tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2DhGroupNumbers"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.

---

##### `tunnel2Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2EncryptionAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.

---

##### `tunnel2Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2IntegrityAlgorithms"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.

---

##### `tunnel2Phase2LifetimeSeconds`<sup>Optional</sup> <a name="tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2Phase2LifetimeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.

---

##### `tunnel2PresharedKey`<sup>Optional</sup> <a name="tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2PresharedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.

---

##### `tunnel2RekeyFuzzPercentage`<sup>Optional</sup> <a name="tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyFuzzPercentage"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.

---

##### `tunnel2RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2RekeyMarginTimeSeconds"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.

---

##### `tunnel2ReplayWindowSize`<sup>Optional</sup> <a name="tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2ReplayWindowSize"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.

---

##### `tunnel2StartupAction`<sup>Optional</sup> <a name="tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnel2StartupAction"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.

---

##### `tunnelInsideIpVersion`<sup>Optional</sup> <a name="tunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.tunnelInsideIpVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.vpnGatewayId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions">putTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions">putTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration">resetEnableAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr">resetLocalIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr">resetLocalIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType">resetOutsideIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr">resetRemoteIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr">resetRemoteIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly">resetStaticRoutesOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId">resetTransportTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction">resetTunnel1DpdTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds">resetTunnel1DpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions">resetTunnel1IkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr">resetTunnel1InsideCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr">resetTunnel1InsideIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions">resetTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers">resetTunnel1Phase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms">resetTunnel1Phase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms">resetTunnel1Phase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds">resetTunnel1Phase1LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers">resetTunnel1Phase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms">resetTunnel1Phase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms">resetTunnel1Phase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds">resetTunnel1Phase2LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey">resetTunnel1PresharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage">resetTunnel1RekeyFuzzPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds">resetTunnel1RekeyMarginTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize">resetTunnel1ReplayWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction">resetTunnel1StartupAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction">resetTunnel2DpdTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds">resetTunnel2DpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions">resetTunnel2IkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr">resetTunnel2InsideCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr">resetTunnel2InsideIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions">resetTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers">resetTunnel2Phase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms">resetTunnel2Phase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms">resetTunnel2Phase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds">resetTunnel2Phase1LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers">resetTunnel2Phase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms">resetTunnel2Phase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms">resetTunnel2Phase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds">resetTunnel2Phase2LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey">resetTunnel2PresharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage">resetTunnel2RekeyFuzzPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds">resetTunnel2RekeyMarginTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize">resetTunnel2ReplayWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction">resetTunnel2StartupAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion">resetTunnelInsideIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId">resetVpnGatewayId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTunnel1LogOptions` <a name="putTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions"></a>

```java
public void putTunnel1LogOptions(VpnConnectionTunnel1LogOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `putTunnel2LogOptions` <a name="putTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions"></a>

```java
public void putTunnel2LogOptions(VpnConnectionTunnel2LogOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `resetEnableAcceleration` <a name="resetEnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration"></a>

```java
public void resetEnableAcceleration()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetId"></a>

```java
public void resetId()
```

##### `resetLocalIpv4NetworkCidr` <a name="resetLocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr"></a>

```java
public void resetLocalIpv4NetworkCidr()
```

##### `resetLocalIpv6NetworkCidr` <a name="resetLocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr"></a>

```java
public void resetLocalIpv6NetworkCidr()
```

##### `resetOutsideIpAddressType` <a name="resetOutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType"></a>

```java
public void resetOutsideIpAddressType()
```

##### `resetRemoteIpv4NetworkCidr` <a name="resetRemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```java
public void resetRemoteIpv4NetworkCidr()
```

##### `resetRemoteIpv6NetworkCidr` <a name="resetRemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```java
public void resetRemoteIpv6NetworkCidr()
```

##### `resetStaticRoutesOnly` <a name="resetStaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly"></a>

```java
public void resetStaticRoutesOnly()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId"></a>

```java
public void resetTransitGatewayId()
```

##### `resetTransportTransitGatewayAttachmentId` <a name="resetTransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```java
public void resetTransportTransitGatewayAttachmentId()
```

##### `resetTunnel1DpdTimeoutAction` <a name="resetTunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction"></a>

```java
public void resetTunnel1DpdTimeoutAction()
```

##### `resetTunnel1DpdTimeoutSeconds` <a name="resetTunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds"></a>

```java
public void resetTunnel1DpdTimeoutSeconds()
```

##### `resetTunnel1IkeVersions` <a name="resetTunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions"></a>

```java
public void resetTunnel1IkeVersions()
```

##### `resetTunnel1InsideCidr` <a name="resetTunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr"></a>

```java
public void resetTunnel1InsideCidr()
```

##### `resetTunnel1InsideIpv6Cidr` <a name="resetTunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr"></a>

```java
public void resetTunnel1InsideIpv6Cidr()
```

##### `resetTunnel1LogOptions` <a name="resetTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions"></a>

```java
public void resetTunnel1LogOptions()
```

##### `resetTunnel1Phase1DhGroupNumbers` <a name="resetTunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers"></a>

```java
public void resetTunnel1Phase1DhGroupNumbers()
```

##### `resetTunnel1Phase1EncryptionAlgorithms` <a name="resetTunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms"></a>

```java
public void resetTunnel1Phase1EncryptionAlgorithms()
```

##### `resetTunnel1Phase1IntegrityAlgorithms` <a name="resetTunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms"></a>

```java
public void resetTunnel1Phase1IntegrityAlgorithms()
```

##### `resetTunnel1Phase1LifetimeSeconds` <a name="resetTunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds"></a>

```java
public void resetTunnel1Phase1LifetimeSeconds()
```

##### `resetTunnel1Phase2DhGroupNumbers` <a name="resetTunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers"></a>

```java
public void resetTunnel1Phase2DhGroupNumbers()
```

##### `resetTunnel1Phase2EncryptionAlgorithms` <a name="resetTunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms"></a>

```java
public void resetTunnel1Phase2EncryptionAlgorithms()
```

##### `resetTunnel1Phase2IntegrityAlgorithms` <a name="resetTunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms"></a>

```java
public void resetTunnel1Phase2IntegrityAlgorithms()
```

##### `resetTunnel1Phase2LifetimeSeconds` <a name="resetTunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds"></a>

```java
public void resetTunnel1Phase2LifetimeSeconds()
```

##### `resetTunnel1PresharedKey` <a name="resetTunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey"></a>

```java
public void resetTunnel1PresharedKey()
```

##### `resetTunnel1RekeyFuzzPercentage` <a name="resetTunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage"></a>

```java
public void resetTunnel1RekeyFuzzPercentage()
```

##### `resetTunnel1RekeyMarginTimeSeconds` <a name="resetTunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds"></a>

```java
public void resetTunnel1RekeyMarginTimeSeconds()
```

##### `resetTunnel1ReplayWindowSize` <a name="resetTunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize"></a>

```java
public void resetTunnel1ReplayWindowSize()
```

##### `resetTunnel1StartupAction` <a name="resetTunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction"></a>

```java
public void resetTunnel1StartupAction()
```

##### `resetTunnel2DpdTimeoutAction` <a name="resetTunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction"></a>

```java
public void resetTunnel2DpdTimeoutAction()
```

##### `resetTunnel2DpdTimeoutSeconds` <a name="resetTunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds"></a>

```java
public void resetTunnel2DpdTimeoutSeconds()
```

##### `resetTunnel2IkeVersions` <a name="resetTunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions"></a>

```java
public void resetTunnel2IkeVersions()
```

##### `resetTunnel2InsideCidr` <a name="resetTunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr"></a>

```java
public void resetTunnel2InsideCidr()
```

##### `resetTunnel2InsideIpv6Cidr` <a name="resetTunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr"></a>

```java
public void resetTunnel2InsideIpv6Cidr()
```

##### `resetTunnel2LogOptions` <a name="resetTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions"></a>

```java
public void resetTunnel2LogOptions()
```

##### `resetTunnel2Phase1DhGroupNumbers` <a name="resetTunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers"></a>

```java
public void resetTunnel2Phase1DhGroupNumbers()
```

##### `resetTunnel2Phase1EncryptionAlgorithms` <a name="resetTunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms"></a>

```java
public void resetTunnel2Phase1EncryptionAlgorithms()
```

##### `resetTunnel2Phase1IntegrityAlgorithms` <a name="resetTunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms"></a>

```java
public void resetTunnel2Phase1IntegrityAlgorithms()
```

##### `resetTunnel2Phase1LifetimeSeconds` <a name="resetTunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds"></a>

```java
public void resetTunnel2Phase1LifetimeSeconds()
```

##### `resetTunnel2Phase2DhGroupNumbers` <a name="resetTunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers"></a>

```java
public void resetTunnel2Phase2DhGroupNumbers()
```

##### `resetTunnel2Phase2EncryptionAlgorithms` <a name="resetTunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms"></a>

```java
public void resetTunnel2Phase2EncryptionAlgorithms()
```

##### `resetTunnel2Phase2IntegrityAlgorithms` <a name="resetTunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms"></a>

```java
public void resetTunnel2Phase2IntegrityAlgorithms()
```

##### `resetTunnel2Phase2LifetimeSeconds` <a name="resetTunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds"></a>

```java
public void resetTunnel2Phase2LifetimeSeconds()
```

##### `resetTunnel2PresharedKey` <a name="resetTunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey"></a>

```java
public void resetTunnel2PresharedKey()
```

##### `resetTunnel2RekeyFuzzPercentage` <a name="resetTunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage"></a>

```java
public void resetTunnel2RekeyFuzzPercentage()
```

##### `resetTunnel2RekeyMarginTimeSeconds` <a name="resetTunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds"></a>

```java
public void resetTunnel2RekeyMarginTimeSeconds()
```

##### `resetTunnel2ReplayWindowSize` <a name="resetTunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize"></a>

```java
public void resetTunnel2ReplayWindowSize()
```

##### `resetTunnel2StartupAction` <a name="resetTunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction"></a>

```java
public void resetTunnel2StartupAction()
```

##### `resetTunnelInsideIpVersion` <a name="resetTunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion"></a>

```java
public void resetTunnelInsideIpVersion()
```

##### `resetVpnGatewayId` <a name="resetVpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId"></a>

```java
public void resetVpnGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnection;

VpnConnection.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnection;

VpnConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnection;

VpnConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn">coreNetworkArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn">coreNetworkAttachmentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration">customerGatewayConfiguration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address">tunnel1Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn">tunnel1BgpAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime">tunnel1BgpHoldtime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress">tunnel1CgwInsideAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions">tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress">tunnel1VgwInsideAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address">tunnel2Address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn">tunnel2BgpAsn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime">tunnel2BgpHoldtime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress">tunnel2CgwInsideAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions">tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress">tunnel2VgwInsideAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry">vgwTelemetry</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput">customerGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput">enableAccelerationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput">localIpv4NetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput">localIpv6NetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput">outsideIpAddressTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput">remoteIpv4NetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput">remoteIpv6NetworkCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput">staticRoutesOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput">transportTransitGatewayAttachmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput">tunnel1DpdTimeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput">tunnel1DpdTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput">tunnel1IkeVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput">tunnel1InsideCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput">tunnel1InsideIpv6CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput">tunnel1LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput">tunnel1Phase1DhGroupNumbersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput">tunnel1Phase1EncryptionAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput">tunnel1Phase1IntegrityAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput">tunnel1Phase1LifetimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput">tunnel1Phase2DhGroupNumbersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput">tunnel1Phase2EncryptionAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput">tunnel1Phase2IntegrityAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput">tunnel1Phase2LifetimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput">tunnel1PresharedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput">tunnel1RekeyFuzzPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput">tunnel1RekeyMarginTimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput">tunnel1ReplayWindowSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput">tunnel1StartupActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput">tunnel2DpdTimeoutActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput">tunnel2DpdTimeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput">tunnel2IkeVersionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput">tunnel2InsideCidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput">tunnel2InsideIpv6CidrInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput">tunnel2LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput">tunnel2Phase1DhGroupNumbersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput">tunnel2Phase1EncryptionAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput">tunnel2Phase1IntegrityAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput">tunnel2Phase1LifetimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput">tunnel2Phase2DhGroupNumbersInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput">tunnel2Phase2EncryptionAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput">tunnel2Phase2IntegrityAlgorithmsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput">tunnel2Phase2LifetimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput">tunnel2PresharedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput">tunnel2RekeyFuzzPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput">tunnel2RekeyMarginTimeSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput">tunnel2ReplayWindowSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput">tunnel2StartupActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput">tunnelInsideIpVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput">vpnGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId">customerGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration">enableAcceleration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction">tunnel1DpdTimeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds">tunnel1DpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions">tunnel1IkeVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr">tunnel1InsideCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr">tunnel1InsideIpv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers">tunnel1Phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms">tunnel1Phase1EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms">tunnel1Phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds">tunnel1Phase1LifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers">tunnel1Phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms">tunnel1Phase2EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms">tunnel1Phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds">tunnel1Phase2LifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey">tunnel1PresharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage">tunnel1RekeyFuzzPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds">tunnel1RekeyMarginTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize">tunnel1ReplayWindowSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction">tunnel1StartupAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction">tunnel2DpdTimeoutAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds">tunnel2DpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions">tunnel2IkeVersions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr">tunnel2InsideCidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr">tunnel2InsideIpv6Cidr</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers">tunnel2Phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms">tunnel2Phase1EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms">tunnel2Phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds">tunnel2Phase1LifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers">tunnel2Phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms">tunnel2Phase2EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms">tunnel2Phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds">tunnel2Phase2LifetimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey">tunnel2PresharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage">tunnel2RekeyFuzzPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds">tunnel2RekeyMarginTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize">tunnel2ReplayWindowSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction">tunnel2StartupAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn"></a>

```java
public java.lang.String getCoreNetworkArn();
```

- *Type:* java.lang.String

---

##### `coreNetworkAttachmentArn`<sup>Required</sup> <a name="coreNetworkAttachmentArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn"></a>

```java
public java.lang.String getCoreNetworkAttachmentArn();
```

- *Type:* java.lang.String

---

##### `customerGatewayConfiguration`<sup>Required</sup> <a name="customerGatewayConfiguration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration"></a>

```java
public java.lang.String getCustomerGatewayConfiguration();
```

- *Type:* java.lang.String

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes"></a>

```java
public VpnConnectionRoutesList getRoutes();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a>

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId"></a>

```java
public java.lang.String getTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `tunnel1Address`<sup>Required</sup> <a name="tunnel1Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address"></a>

```java
public java.lang.String getTunnel1Address();
```

- *Type:* java.lang.String

---

##### `tunnel1BgpAsn`<sup>Required</sup> <a name="tunnel1BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn"></a>

```java
public java.lang.String getTunnel1BgpAsn();
```

- *Type:* java.lang.String

---

##### `tunnel1BgpHoldtime`<sup>Required</sup> <a name="tunnel1BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime"></a>

```java
public java.lang.Number getTunnel1BgpHoldtime();
```

- *Type:* java.lang.Number

---

##### `tunnel1CgwInsideAddress`<sup>Required</sup> <a name="tunnel1CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress"></a>

```java
public java.lang.String getTunnel1CgwInsideAddress();
```

- *Type:* java.lang.String

---

##### `tunnel1LogOptions`<sup>Required</sup> <a name="tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions"></a>

```java
public VpnConnectionTunnel1LogOptionsOutputReference getTunnel1LogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a>

---

##### `tunnel1VgwInsideAddress`<sup>Required</sup> <a name="tunnel1VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress"></a>

```java
public java.lang.String getTunnel1VgwInsideAddress();
```

- *Type:* java.lang.String

---

##### `tunnel2Address`<sup>Required</sup> <a name="tunnel2Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address"></a>

```java
public java.lang.String getTunnel2Address();
```

- *Type:* java.lang.String

---

##### `tunnel2BgpAsn`<sup>Required</sup> <a name="tunnel2BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn"></a>

```java
public java.lang.String getTunnel2BgpAsn();
```

- *Type:* java.lang.String

---

##### `tunnel2BgpHoldtime`<sup>Required</sup> <a name="tunnel2BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime"></a>

```java
public java.lang.Number getTunnel2BgpHoldtime();
```

- *Type:* java.lang.Number

---

##### `tunnel2CgwInsideAddress`<sup>Required</sup> <a name="tunnel2CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress"></a>

```java
public java.lang.String getTunnel2CgwInsideAddress();
```

- *Type:* java.lang.String

---

##### `tunnel2LogOptions`<sup>Required</sup> <a name="tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions"></a>

```java
public VpnConnectionTunnel2LogOptionsOutputReference getTunnel2LogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a>

---

##### `tunnel2VgwInsideAddress`<sup>Required</sup> <a name="tunnel2VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress"></a>

```java
public java.lang.String getTunnel2VgwInsideAddress();
```

- *Type:* java.lang.String

---

##### `vgwTelemetry`<sup>Required</sup> <a name="vgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry"></a>

```java
public VpnConnectionVgwTelemetryList getVgwTelemetry();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a>

---

##### `customerGatewayIdInput`<sup>Optional</sup> <a name="customerGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput"></a>

```java
public java.lang.String getCustomerGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `enableAccelerationInput`<sup>Optional</sup> <a name="enableAccelerationInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput"></a>

```java
public java.lang.Object getEnableAccelerationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `localIpv4NetworkCidrInput`<sup>Optional</sup> <a name="localIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput"></a>

```java
public java.lang.String getLocalIpv4NetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `localIpv6NetworkCidrInput`<sup>Optional</sup> <a name="localIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput"></a>

```java
public java.lang.String getLocalIpv6NetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `outsideIpAddressTypeInput`<sup>Optional</sup> <a name="outsideIpAddressTypeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput"></a>

```java
public java.lang.String getOutsideIpAddressTypeInput();
```

- *Type:* java.lang.String

---

##### `remoteIpv4NetworkCidrInput`<sup>Optional</sup> <a name="remoteIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```java
public java.lang.String getRemoteIpv4NetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `remoteIpv6NetworkCidrInput`<sup>Optional</sup> <a name="remoteIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```java
public java.lang.String getRemoteIpv6NetworkCidrInput();
```

- *Type:* java.lang.String

---

##### `staticRoutesOnlyInput`<sup>Optional</sup> <a name="staticRoutesOnlyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput"></a>

```java
public java.lang.Object getStaticRoutesOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput"></a>

```java
public java.lang.String getTransitGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `transportTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transportTransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```java
public java.lang.String getTransportTransitGatewayAttachmentIdInput();
```

- *Type:* java.lang.String

---

##### `tunnel1DpdTimeoutActionInput`<sup>Optional</sup> <a name="tunnel1DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput"></a>

```java
public java.lang.String getTunnel1DpdTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `tunnel1DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="tunnel1DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput"></a>

```java
public java.lang.Number getTunnel1DpdTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel1IkeVersionsInput`<sup>Optional</sup> <a name="tunnel1IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel1IkeVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1InsideCidrInput`<sup>Optional</sup> <a name="tunnel1InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput"></a>

```java
public java.lang.String getTunnel1InsideCidrInput();
```

- *Type:* java.lang.String

---

##### `tunnel1InsideIpv6CidrInput`<sup>Optional</sup> <a name="tunnel1InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput"></a>

```java
public java.lang.String getTunnel1InsideIpv6CidrInput();
```

- *Type:* java.lang.String

---

##### `tunnel1LogOptionsInput`<sup>Optional</sup> <a name="tunnel1LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput"></a>

```java
public VpnConnectionTunnel1LogOptions getTunnel1LogOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `tunnel1Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel1Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput"></a>

```java
public java.util.List<java.lang.Number> getTunnel1Phase1DhGroupNumbersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel1Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase1EncryptionAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase1IntegrityAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel1Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput"></a>

```java
public java.lang.Number getTunnel1Phase1LifetimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel1Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel1Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput"></a>

```java
public java.util.List<java.lang.Number> getTunnel1Phase2DhGroupNumbersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel1Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase2EncryptionAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel1Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase2IntegrityAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel1Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput"></a>

```java
public java.lang.Number getTunnel1Phase2LifetimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel1PresharedKeyInput`<sup>Optional</sup> <a name="tunnel1PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput"></a>

```java
public java.lang.String getTunnel1PresharedKeyInput();
```

- *Type:* java.lang.String

---

##### `tunnel1RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="tunnel1RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput"></a>

```java
public java.lang.Number getTunnel1RekeyFuzzPercentageInput();
```

- *Type:* java.lang.Number

---

##### `tunnel1RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="tunnel1RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput"></a>

```java
public java.lang.Number getTunnel1RekeyMarginTimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel1ReplayWindowSizeInput`<sup>Optional</sup> <a name="tunnel1ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput"></a>

```java
public java.lang.Number getTunnel1ReplayWindowSizeInput();
```

- *Type:* java.lang.Number

---

##### `tunnel1StartupActionInput`<sup>Optional</sup> <a name="tunnel1StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput"></a>

```java
public java.lang.String getTunnel1StartupActionInput();
```

- *Type:* java.lang.String

---

##### `tunnel2DpdTimeoutActionInput`<sup>Optional</sup> <a name="tunnel2DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput"></a>

```java
public java.lang.String getTunnel2DpdTimeoutActionInput();
```

- *Type:* java.lang.String

---

##### `tunnel2DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="tunnel2DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput"></a>

```java
public java.lang.Number getTunnel2DpdTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel2IkeVersionsInput`<sup>Optional</sup> <a name="tunnel2IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel2IkeVersionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2InsideCidrInput`<sup>Optional</sup> <a name="tunnel2InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput"></a>

```java
public java.lang.String getTunnel2InsideCidrInput();
```

- *Type:* java.lang.String

---

##### `tunnel2InsideIpv6CidrInput`<sup>Optional</sup> <a name="tunnel2InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput"></a>

```java
public java.lang.String getTunnel2InsideIpv6CidrInput();
```

- *Type:* java.lang.String

---

##### `tunnel2LogOptionsInput`<sup>Optional</sup> <a name="tunnel2LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput"></a>

```java
public VpnConnectionTunnel2LogOptions getTunnel2LogOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `tunnel2Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel2Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput"></a>

```java
public java.util.List<java.lang.Number> getTunnel2Phase1DhGroupNumbersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel2Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase1EncryptionAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase1IntegrityAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel2Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput"></a>

```java
public java.lang.Number getTunnel2Phase1LifetimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel2Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="tunnel2Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput"></a>

```java
public java.util.List<java.lang.Number> getTunnel2Phase2DhGroupNumbersInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel2Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase2EncryptionAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="tunnel2Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase2IntegrityAlgorithmsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="tunnel2Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput"></a>

```java
public java.lang.Number getTunnel2Phase2LifetimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel2PresharedKeyInput`<sup>Optional</sup> <a name="tunnel2PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput"></a>

```java
public java.lang.String getTunnel2PresharedKeyInput();
```

- *Type:* java.lang.String

---

##### `tunnel2RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="tunnel2RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput"></a>

```java
public java.lang.Number getTunnel2RekeyFuzzPercentageInput();
```

- *Type:* java.lang.Number

---

##### `tunnel2RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="tunnel2RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput"></a>

```java
public java.lang.Number getTunnel2RekeyMarginTimeSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tunnel2ReplayWindowSizeInput`<sup>Optional</sup> <a name="tunnel2ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput"></a>

```java
public java.lang.Number getTunnel2ReplayWindowSizeInput();
```

- *Type:* java.lang.Number

---

##### `tunnel2StartupActionInput`<sup>Optional</sup> <a name="tunnel2StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput"></a>

```java
public java.lang.String getTunnel2StartupActionInput();
```

- *Type:* java.lang.String

---

##### `tunnelInsideIpVersionInput`<sup>Optional</sup> <a name="tunnelInsideIpVersionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput"></a>

```java
public java.lang.String getTunnelInsideIpVersionInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `vpnGatewayIdInput`<sup>Optional</sup> <a name="vpnGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput"></a>

```java
public java.lang.String getVpnGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId"></a>

```java
public java.lang.String getCustomerGatewayId();
```

- *Type:* java.lang.String

---

##### `enableAcceleration`<sup>Required</sup> <a name="enableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration"></a>

```java
public java.lang.Object getEnableAcceleration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `localIpv4NetworkCidr`<sup>Required</sup> <a name="localIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr"></a>

```java
public java.lang.String getLocalIpv4NetworkCidr();
```

- *Type:* java.lang.String

---

##### `localIpv6NetworkCidr`<sup>Required</sup> <a name="localIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr"></a>

```java
public java.lang.String getLocalIpv6NetworkCidr();
```

- *Type:* java.lang.String

---

##### `outsideIpAddressType`<sup>Required</sup> <a name="outsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType"></a>

```java
public java.lang.String getOutsideIpAddressType();
```

- *Type:* java.lang.String

---

##### `remoteIpv4NetworkCidr`<sup>Required</sup> <a name="remoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr"></a>

```java
public java.lang.String getRemoteIpv4NetworkCidr();
```

- *Type:* java.lang.String

---

##### `remoteIpv6NetworkCidr`<sup>Required</sup> <a name="remoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr"></a>

```java
public java.lang.String getRemoteIpv6NetworkCidr();
```

- *Type:* java.lang.String

---

##### `staticRoutesOnly`<sup>Required</sup> <a name="staticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly"></a>

```java
public java.lang.Object getStaticRoutesOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

---

##### `transportTransitGatewayAttachmentId`<sup>Required</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```java
public java.lang.String getTransportTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

---

##### `tunnel1DpdTimeoutAction`<sup>Required</sup> <a name="tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction"></a>

```java
public java.lang.String getTunnel1DpdTimeoutAction();
```

- *Type:* java.lang.String

---

##### `tunnel1DpdTimeoutSeconds`<sup>Required</sup> <a name="tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds"></a>

```java
public java.lang.Number getTunnel1DpdTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel1IkeVersions`<sup>Required</sup> <a name="tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions"></a>

```java
public java.util.List<java.lang.String> getTunnel1IkeVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1InsideCidr`<sup>Required</sup> <a name="tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr"></a>

```java
public java.lang.String getTunnel1InsideCidr();
```

- *Type:* java.lang.String

---

##### `tunnel1InsideIpv6Cidr`<sup>Required</sup> <a name="tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr"></a>

```java
public java.lang.String getTunnel1InsideIpv6Cidr();
```

- *Type:* java.lang.String

---

##### `tunnel1Phase1DhGroupNumbers`<sup>Required</sup> <a name="tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel1Phase1DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel1Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase1EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase1IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase1LifetimeSeconds`<sup>Required</sup> <a name="tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel1Phase1LifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel1Phase2DhGroupNumbers`<sup>Required</sup> <a name="tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel1Phase2DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel1Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase2EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase2IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel1Phase2LifetimeSeconds`<sup>Required</sup> <a name="tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel1Phase2LifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel1PresharedKey`<sup>Required</sup> <a name="tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey"></a>

```java
public java.lang.String getTunnel1PresharedKey();
```

- *Type:* java.lang.String

---

##### `tunnel1RekeyFuzzPercentage`<sup>Required</sup> <a name="tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage"></a>

```java
public java.lang.Number getTunnel1RekeyFuzzPercentage();
```

- *Type:* java.lang.Number

---

##### `tunnel1RekeyMarginTimeSeconds`<sup>Required</sup> <a name="tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds"></a>

```java
public java.lang.Number getTunnel1RekeyMarginTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel1ReplayWindowSize`<sup>Required</sup> <a name="tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize"></a>

```java
public java.lang.Number getTunnel1ReplayWindowSize();
```

- *Type:* java.lang.Number

---

##### `tunnel1StartupAction`<sup>Required</sup> <a name="tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction"></a>

```java
public java.lang.String getTunnel1StartupAction();
```

- *Type:* java.lang.String

---

##### `tunnel2DpdTimeoutAction`<sup>Required</sup> <a name="tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction"></a>

```java
public java.lang.String getTunnel2DpdTimeoutAction();
```

- *Type:* java.lang.String

---

##### `tunnel2DpdTimeoutSeconds`<sup>Required</sup> <a name="tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds"></a>

```java
public java.lang.Number getTunnel2DpdTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel2IkeVersions`<sup>Required</sup> <a name="tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions"></a>

```java
public java.util.List<java.lang.String> getTunnel2IkeVersions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2InsideCidr`<sup>Required</sup> <a name="tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr"></a>

```java
public java.lang.String getTunnel2InsideCidr();
```

- *Type:* java.lang.String

---

##### `tunnel2InsideIpv6Cidr`<sup>Required</sup> <a name="tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr"></a>

```java
public java.lang.String getTunnel2InsideIpv6Cidr();
```

- *Type:* java.lang.String

---

##### `tunnel2Phase1DhGroupNumbers`<sup>Required</sup> <a name="tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel2Phase1DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel2Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase1EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase1IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase1LifetimeSeconds`<sup>Required</sup> <a name="tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel2Phase1LifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel2Phase2DhGroupNumbers`<sup>Required</sup> <a name="tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel2Phase2DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `tunnel2Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase2EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase2IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tunnel2Phase2LifetimeSeconds`<sup>Required</sup> <a name="tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel2Phase2LifetimeSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel2PresharedKey`<sup>Required</sup> <a name="tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey"></a>

```java
public java.lang.String getTunnel2PresharedKey();
```

- *Type:* java.lang.String

---

##### `tunnel2RekeyFuzzPercentage`<sup>Required</sup> <a name="tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage"></a>

```java
public java.lang.Number getTunnel2RekeyFuzzPercentage();
```

- *Type:* java.lang.Number

---

##### `tunnel2RekeyMarginTimeSeconds`<sup>Required</sup> <a name="tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds"></a>

```java
public java.lang.Number getTunnel2RekeyMarginTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `tunnel2ReplayWindowSize`<sup>Required</sup> <a name="tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize"></a>

```java
public java.lang.Number getTunnel2ReplayWindowSize();
```

- *Type:* java.lang.Number

---

##### `tunnel2StartupAction`<sup>Required</sup> <a name="tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction"></a>

```java
public java.lang.String getTunnel2StartupAction();
```

- *Type:* java.lang.String

---

##### `tunnelInsideIpVersion`<sup>Required</sup> <a name="tunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion"></a>

```java
public java.lang.String getTunnelInsideIpVersion();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `vpnGatewayId`<sup>Required</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId"></a>

```java
public java.lang.String getVpnGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VpnConnectionConfig <a name="VpnConnectionConfig" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionConfig;

VpnConnectionConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .customerGatewayId(java.lang.String)
    .type(java.lang.String)
//  .enableAcceleration(java.lang.Boolean)
//  .enableAcceleration(IResolvable)
//  .id(java.lang.String)
//  .localIpv4NetworkCidr(java.lang.String)
//  .localIpv6NetworkCidr(java.lang.String)
//  .outsideIpAddressType(java.lang.String)
//  .remoteIpv4NetworkCidr(java.lang.String)
//  .remoteIpv6NetworkCidr(java.lang.String)
//  .staticRoutesOnly(java.lang.Boolean)
//  .staticRoutesOnly(IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .transitGatewayId(java.lang.String)
//  .transportTransitGatewayAttachmentId(java.lang.String)
//  .tunnel1DpdTimeoutAction(java.lang.String)
//  .tunnel1DpdTimeoutSeconds(java.lang.Number)
//  .tunnel1IkeVersions(java.util.List<java.lang.String>)
//  .tunnel1InsideCidr(java.lang.String)
//  .tunnel1InsideIpv6Cidr(java.lang.String)
//  .tunnel1LogOptions(VpnConnectionTunnel1LogOptions)
//  .tunnel1Phase1DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel1Phase1EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase1IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase1LifetimeSeconds(java.lang.Number)
//  .tunnel1Phase2DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel1Phase2EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase2IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel1Phase2LifetimeSeconds(java.lang.Number)
//  .tunnel1PresharedKey(java.lang.String)
//  .tunnel1RekeyFuzzPercentage(java.lang.Number)
//  .tunnel1RekeyMarginTimeSeconds(java.lang.Number)
//  .tunnel1ReplayWindowSize(java.lang.Number)
//  .tunnel1StartupAction(java.lang.String)
//  .tunnel2DpdTimeoutAction(java.lang.String)
//  .tunnel2DpdTimeoutSeconds(java.lang.Number)
//  .tunnel2IkeVersions(java.util.List<java.lang.String>)
//  .tunnel2InsideCidr(java.lang.String)
//  .tunnel2InsideIpv6Cidr(java.lang.String)
//  .tunnel2LogOptions(VpnConnectionTunnel2LogOptions)
//  .tunnel2Phase1DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel2Phase1EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase1IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase1LifetimeSeconds(java.lang.Number)
//  .tunnel2Phase2DhGroupNumbers(java.util.List<java.lang.Number>)
//  .tunnel2Phase2EncryptionAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase2IntegrityAlgorithms(java.util.List<java.lang.String>)
//  .tunnel2Phase2LifetimeSeconds(java.lang.Number)
//  .tunnel2PresharedKey(java.lang.String)
//  .tunnel2RekeyFuzzPercentage(java.lang.Number)
//  .tunnel2RekeyMarginTimeSeconds(java.lang.Number)
//  .tunnel2ReplayWindowSize(java.lang.Number)
//  .tunnel2StartupAction(java.lang.String)
//  .tunnelInsideIpVersion(java.lang.String)
//  .vpnGatewayId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId">customerGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration">enableAcceleration</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr">localIpv4NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr">localIpv6NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType">outsideIpAddressType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr">remoteIpv4NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr">remoteIpv6NetworkCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly">staticRoutesOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId">transportTransitGatewayAttachmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction">tunnel1DpdTimeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds">tunnel1DpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions">tunnel1IkeVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr">tunnel1InsideCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr">tunnel1InsideIpv6Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions">tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | tunnel1_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers">tunnel1Phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms">tunnel1Phase1EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms">tunnel1Phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds">tunnel1Phase1LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers">tunnel1Phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms">tunnel1Phase2EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms">tunnel1Phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds">tunnel1Phase2LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey">tunnel1PresharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage">tunnel1RekeyFuzzPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds">tunnel1RekeyMarginTimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize">tunnel1ReplayWindowSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction">tunnel1StartupAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction">tunnel2DpdTimeoutAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds">tunnel2DpdTimeoutSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions">tunnel2IkeVersions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr">tunnel2InsideCidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr">tunnel2InsideIpv6Cidr</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions">tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | tunnel2_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers">tunnel2Phase1DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms">tunnel2Phase1EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms">tunnel2Phase1IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds">tunnel2Phase1LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers">tunnel2Phase2DhGroupNumbers</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms">tunnel2Phase2EncryptionAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms">tunnel2Phase2IntegrityAlgorithms</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds">tunnel2Phase2LifetimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey">tunnel2PresharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage">tunnel2RekeyFuzzPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds">tunnel2RekeyMarginTimeSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize">tunnel2ReplayWindowSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction">tunnel2StartupAction</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion">tunnelInsideIpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId">vpnGatewayId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerGatewayId`<sup>Required</sup> <a name="customerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId"></a>

```java
public java.lang.String getCustomerGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}.

---

##### `enableAcceleration`<sup>Optional</sup> <a name="enableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration"></a>

```java
public java.lang.Object getEnableAcceleration();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `localIpv4NetworkCidr`<sup>Optional</sup> <a name="localIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```java
public java.lang.String getLocalIpv4NetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.

---

##### `localIpv6NetworkCidr`<sup>Optional</sup> <a name="localIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```java
public java.lang.String getLocalIpv6NetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.

---

##### `outsideIpAddressType`<sup>Optional</sup> <a name="outsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType"></a>

```java
public java.lang.String getOutsideIpAddressType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}.

---

##### `remoteIpv4NetworkCidr`<sup>Optional</sup> <a name="remoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```java
public java.lang.String getRemoteIpv4NetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.

---

##### `remoteIpv6NetworkCidr`<sup>Optional</sup> <a name="remoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```java
public java.lang.String getRemoteIpv6NetworkCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.

---

##### `staticRoutesOnly`<sup>Optional</sup> <a name="staticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly"></a>

```java
public java.lang.Object getStaticRoutesOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId"></a>

```java
public java.lang.String getTransitGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}.

---

##### `transportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="transportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```java
public java.lang.String getTransportTransitGatewayAttachmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}.

---

##### `tunnel1DpdTimeoutAction`<sup>Optional</sup> <a name="tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction"></a>

```java
public java.lang.String getTunnel1DpdTimeoutAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.

---

##### `tunnel1DpdTimeoutSeconds`<sup>Optional</sup> <a name="tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds"></a>

```java
public java.lang.Number getTunnel1DpdTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.

---

##### `tunnel1IkeVersions`<sup>Optional</sup> <a name="tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions"></a>

```java
public java.util.List<java.lang.String> getTunnel1IkeVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.

---

##### `tunnel1InsideCidr`<sup>Optional</sup> <a name="tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr"></a>

```java
public java.lang.String getTunnel1InsideCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.

---

##### `tunnel1InsideIpv6Cidr`<sup>Optional</sup> <a name="tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr"></a>

```java
public java.lang.String getTunnel1InsideIpv6Cidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.

---

##### `tunnel1LogOptions`<sup>Optional</sup> <a name="tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions"></a>

```java
public VpnConnectionTunnel1LogOptions getTunnel1LogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

tunnel1_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}

---

##### `tunnel1Phase1DhGroupNumbers`<sup>Optional</sup> <a name="tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel1Phase1DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.

---

##### `tunnel1Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase1EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.

---

##### `tunnel1Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase1IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.

---

##### `tunnel1Phase1LifetimeSeconds`<sup>Optional</sup> <a name="tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel1Phase1LifetimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.

---

##### `tunnel1Phase2DhGroupNumbers`<sup>Optional</sup> <a name="tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel1Phase2DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.

---

##### `tunnel1Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase2EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.

---

##### `tunnel1Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel1Phase2IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.

---

##### `tunnel1Phase2LifetimeSeconds`<sup>Optional</sup> <a name="tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel1Phase2LifetimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.

---

##### `tunnel1PresharedKey`<sup>Optional</sup> <a name="tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey"></a>

```java
public java.lang.String getTunnel1PresharedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.

---

##### `tunnel1RekeyFuzzPercentage`<sup>Optional</sup> <a name="tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage"></a>

```java
public java.lang.Number getTunnel1RekeyFuzzPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.

---

##### `tunnel1RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds"></a>

```java
public java.lang.Number getTunnel1RekeyMarginTimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.

---

##### `tunnel1ReplayWindowSize`<sup>Optional</sup> <a name="tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize"></a>

```java
public java.lang.Number getTunnel1ReplayWindowSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.

---

##### `tunnel1StartupAction`<sup>Optional</sup> <a name="tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction"></a>

```java
public java.lang.String getTunnel1StartupAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.

---

##### `tunnel2DpdTimeoutAction`<sup>Optional</sup> <a name="tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction"></a>

```java
public java.lang.String getTunnel2DpdTimeoutAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.

---

##### `tunnel2DpdTimeoutSeconds`<sup>Optional</sup> <a name="tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds"></a>

```java
public java.lang.Number getTunnel2DpdTimeoutSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.

---

##### `tunnel2IkeVersions`<sup>Optional</sup> <a name="tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions"></a>

```java
public java.util.List<java.lang.String> getTunnel2IkeVersions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.

---

##### `tunnel2InsideCidr`<sup>Optional</sup> <a name="tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr"></a>

```java
public java.lang.String getTunnel2InsideCidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.

---

##### `tunnel2InsideIpv6Cidr`<sup>Optional</sup> <a name="tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr"></a>

```java
public java.lang.String getTunnel2InsideIpv6Cidr();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.

---

##### `tunnel2LogOptions`<sup>Optional</sup> <a name="tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions"></a>

```java
public VpnConnectionTunnel2LogOptions getTunnel2LogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

tunnel2_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}

---

##### `tunnel2Phase1DhGroupNumbers`<sup>Optional</sup> <a name="tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel2Phase1DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.

---

##### `tunnel2Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase1EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.

---

##### `tunnel2Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase1IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.

---

##### `tunnel2Phase1LifetimeSeconds`<sup>Optional</sup> <a name="tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel2Phase1LifetimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.

---

##### `tunnel2Phase2DhGroupNumbers`<sup>Optional</sup> <a name="tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers"></a>

```java
public java.util.List<java.lang.Number> getTunnel2Phase2DhGroupNumbers();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.

---

##### `tunnel2Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase2EncryptionAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.

---

##### `tunnel2Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms"></a>

```java
public java.util.List<java.lang.String> getTunnel2Phase2IntegrityAlgorithms();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.

---

##### `tunnel2Phase2LifetimeSeconds`<sup>Optional</sup> <a name="tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds"></a>

```java
public java.lang.Number getTunnel2Phase2LifetimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.

---

##### `tunnel2PresharedKey`<sup>Optional</sup> <a name="tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey"></a>

```java
public java.lang.String getTunnel2PresharedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.

---

##### `tunnel2RekeyFuzzPercentage`<sup>Optional</sup> <a name="tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage"></a>

```java
public java.lang.Number getTunnel2RekeyFuzzPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.

---

##### `tunnel2RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds"></a>

```java
public java.lang.Number getTunnel2RekeyMarginTimeSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.

---

##### `tunnel2ReplayWindowSize`<sup>Optional</sup> <a name="tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize"></a>

```java
public java.lang.Number getTunnel2ReplayWindowSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.

---

##### `tunnel2StartupAction`<sup>Optional</sup> <a name="tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction"></a>

```java
public java.lang.String getTunnel2StartupAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.

---

##### `tunnelInsideIpVersion`<sup>Optional</sup> <a name="tunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```java
public java.lang.String getTunnelInsideIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.

---

##### `vpnGatewayId`<sup>Optional</sup> <a name="vpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId"></a>

```java
public java.lang.String getVpnGatewayId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}.

---

### VpnConnectionRoutes <a name="VpnConnectionRoutes" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionRoutes;

VpnConnectionRoutes.builder()
    .build();
```


### VpnConnectionTunnel1LogOptions <a name="VpnConnectionTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel1LogOptions;

VpnConnectionTunnel1LogOptions.builder()
//  .cloudwatchLogOptions(VpnConnectionTunnel1LogOptionsCloudwatchLogOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `cloudwatchLogOptions`<sup>Optional</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions"></a>

```java
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptions getCloudwatchLogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel1LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions;

VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.builder()
//  .logEnabled(java.lang.Boolean)
//  .logEnabled(IResolvable)
//  .logGroupArn(java.lang.String)
//  .logOutputFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled">logEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat">logOutputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `logEnabled`<sup>Optional</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```java
public java.lang.Object getLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `logOutputFormat`<sup>Optional</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```java
public java.lang.String getLogOutputFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionTunnel2LogOptions <a name="VpnConnectionTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel2LogOptions;

VpnConnectionTunnel2LogOptions.builder()
//  .cloudwatchLogOptions(VpnConnectionTunnel2LogOptionsCloudwatchLogOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `cloudwatchLogOptions`<sup>Optional</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions"></a>

```java
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptions getCloudwatchLogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel2LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions;

VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.builder()
//  .logEnabled(java.lang.Boolean)
//  .logEnabled(IResolvable)
//  .logGroupArn(java.lang.String)
//  .logOutputFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled">logEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat">logOutputFormat</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `logEnabled`<sup>Optional</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```java
public java.lang.Object getLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `logGroupArn`<sup>Optional</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `logOutputFormat`<sup>Optional</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```java
public java.lang.String getLogOutputFormat();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionVgwTelemetry <a name="VpnConnectionVgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionVgwTelemetry;

VpnConnectionVgwTelemetry.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### VpnConnectionRoutesList <a name="VpnConnectionRoutesList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionRoutesList;

new VpnConnectionRoutesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get"></a>

```java
public VpnConnectionRoutesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VpnConnectionRoutesOutputReference <a name="VpnConnectionRoutesOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionRoutesOutputReference;

new VpnConnectionRoutesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock">destinationCidrBlock</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationCidrBlock`<sup>Required</sup> <a name="destinationCidrBlock" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock"></a>

```java
public java.lang.String getDestinationCidrBlock();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue"></a>

```java
public VpnConnectionRoutes getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a>

---


### VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference;

new VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">resetLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">resetLogOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogEnabled` <a name="resetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```java
public void resetLogEnabled()
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```

##### `resetLogOutputFormat` <a name="resetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```java
public void resetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">logEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">logOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">logEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">logOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logEnabledInput`<sup>Optional</sup> <a name="logEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```java
public java.lang.Object getLogEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logOutputFormatInput`<sup>Optional</sup> <a name="logOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```java
public java.lang.String getLogOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `logEnabled`<sup>Required</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```java
public java.lang.Object getLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `logOutputFormat`<sup>Required</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```java
public java.lang.String getLogOutputFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```java
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel1LogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel1LogOptionsOutputReference;

new VpnConnectionTunnel1LogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions">putCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions">resetCloudwatchLogOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogOptions` <a name="putCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```java
public void putCloudwatchLogOptions(VpnConnectionTunnel1LogOptionsCloudwatchLogOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `resetCloudwatchLogOptions` <a name="resetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```java
public void resetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogOptions`<sup>Required</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```java
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference getCloudwatchLogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatchLogOptionsInput`<sup>Optional</sup> <a name="cloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```java
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptions getCloudwatchLogOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue"></a>

```java
public VpnConnectionTunnel1LogOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---


### VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference;

new VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">resetLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">resetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">resetLogOutputFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogEnabled` <a name="resetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```java
public void resetLogEnabled()
```

##### `resetLogGroupArn` <a name="resetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```java
public void resetLogGroupArn()
```

##### `resetLogOutputFormat` <a name="resetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```java
public void resetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">logEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">logOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">logEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">logOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logEnabledInput`<sup>Optional</sup> <a name="logEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```java
public java.lang.Object getLogEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```java
public java.lang.String getLogGroupArnInput();
```

- *Type:* java.lang.String

---

##### `logOutputFormatInput`<sup>Optional</sup> <a name="logOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```java
public java.lang.String getLogOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `logEnabled`<sup>Required</sup> <a name="logEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```java
public java.lang.Object getLogEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```java
public java.lang.String getLogGroupArn();
```

- *Type:* java.lang.String

---

##### `logOutputFormat`<sup>Required</sup> <a name="logOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```java
public java.lang.String getLogOutputFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```java
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel2LogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionTunnel2LogOptionsOutputReference;

new VpnConnectionTunnel2LogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions">putCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions">resetCloudwatchLogOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogOptions` <a name="putCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```java
public void putCloudwatchLogOptions(VpnConnectionTunnel2LogOptionsCloudwatchLogOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `resetCloudwatchLogOptions` <a name="resetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```java
public void resetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions">cloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput">cloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudwatchLogOptions`<sup>Required</sup> <a name="cloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```java
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference getCloudwatchLogOptions();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `cloudwatchLogOptionsInput`<sup>Optional</sup> <a name="cloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```java
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptions getCloudwatchLogOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue"></a>

```java
public VpnConnectionTunnel2LogOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---


### VpnConnectionVgwTelemetryList <a name="VpnConnectionVgwTelemetryList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionVgwTelemetryList;

new VpnConnectionVgwTelemetryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get"></a>

```java
public VpnConnectionVgwTelemetryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VpnConnectionVgwTelemetryOutputReference <a name="VpnConnectionVgwTelemetryOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.vpn_connection.VpnConnectionVgwTelemetryOutputReference;

new VpnConnectionVgwTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount">acceptedRouteCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn">certificateArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange">lastStatusChange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress">outsideIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptedRouteCount`<sup>Required</sup> <a name="acceptedRouteCount" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount"></a>

```java
public java.lang.Number getAcceptedRouteCount();
```

- *Type:* java.lang.Number

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn"></a>

```java
public java.lang.String getCertificateArn();
```

- *Type:* java.lang.String

---

##### `lastStatusChange`<sup>Required</sup> <a name="lastStatusChange" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange"></a>

```java
public java.lang.String getLastStatusChange();
```

- *Type:* java.lang.String

---

##### `outsideIpAddress`<sup>Required</sup> <a name="outsideIpAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress"></a>

```java
public java.lang.String getOutsideIpAddress();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue"></a>

```java
public VpnConnectionVgwTelemetry getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a>

---



