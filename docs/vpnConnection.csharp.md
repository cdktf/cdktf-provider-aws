# `vpnConnection` Submodule <a name="`vpnConnection` Submodule" id="@cdktf/provider-aws.vpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnConnection <a name="VpnConnection" id="@cdktf/provider-aws.vpnConnection.VpnConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection aws_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnection(Construct Scope, string Id, VpnConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig">VpnConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig">VpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions">PutTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions">PutTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration">ResetEnableAcceleration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr">ResetLocalIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr">ResetLocalIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType">ResetOutsideIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr">ResetRemoteIpv4NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr">ResetRemoteIpv6NetworkCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly">ResetStaticRoutesOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId">ResetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId">ResetTransportTransitGatewayAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction">ResetTunnel1DpdTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds">ResetTunnel1DpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions">ResetTunnel1IkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr">ResetTunnel1InsideCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr">ResetTunnel1InsideIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions">ResetTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers">ResetTunnel1Phase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms">ResetTunnel1Phase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms">ResetTunnel1Phase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds">ResetTunnel1Phase1LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers">ResetTunnel1Phase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms">ResetTunnel1Phase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms">ResetTunnel1Phase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds">ResetTunnel1Phase2LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey">ResetTunnel1PresharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage">ResetTunnel1RekeyFuzzPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds">ResetTunnel1RekeyMarginTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize">ResetTunnel1ReplayWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction">ResetTunnel1StartupAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction">ResetTunnel2DpdTimeoutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds">ResetTunnel2DpdTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions">ResetTunnel2IkeVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr">ResetTunnel2InsideCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr">ResetTunnel2InsideIpv6Cidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions">ResetTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers">ResetTunnel2Phase1DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms">ResetTunnel2Phase1EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms">ResetTunnel2Phase1IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds">ResetTunnel2Phase1LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers">ResetTunnel2Phase2DhGroupNumbers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms">ResetTunnel2Phase2EncryptionAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms">ResetTunnel2Phase2IntegrityAlgorithms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds">ResetTunnel2Phase2LifetimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey">ResetTunnel2PresharedKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage">ResetTunnel2RekeyFuzzPercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds">ResetTunnel2RekeyMarginTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize">ResetTunnel2ReplayWindowSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction">ResetTunnel2StartupAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion">ResetTunnelInsideIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId">ResetVpnGatewayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTunnel1LogOptions` <a name="PutTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions"></a>

```csharp
private void PutTunnel1LogOptions(VpnConnectionTunnel1LogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `PutTunnel2LogOptions` <a name="PutTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions"></a>

```csharp
private void PutTunnel2LogOptions(VpnConnectionTunnel2LogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `ResetEnableAcceleration` <a name="ResetEnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration"></a>

```csharp
private void ResetEnableAcceleration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocalIpv4NetworkCidr` <a name="ResetLocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr"></a>

```csharp
private void ResetLocalIpv4NetworkCidr()
```

##### `ResetLocalIpv6NetworkCidr` <a name="ResetLocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr"></a>

```csharp
private void ResetLocalIpv6NetworkCidr()
```

##### `ResetOutsideIpAddressType` <a name="ResetOutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType"></a>

```csharp
private void ResetOutsideIpAddressType()
```

##### `ResetRemoteIpv4NetworkCidr` <a name="ResetRemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```csharp
private void ResetRemoteIpv4NetworkCidr()
```

##### `ResetRemoteIpv6NetworkCidr` <a name="ResetRemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```csharp
private void ResetRemoteIpv6NetworkCidr()
```

##### `ResetStaticRoutesOnly` <a name="ResetStaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly"></a>

```csharp
private void ResetStaticRoutesOnly()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId"></a>

```csharp
private void ResetTransitGatewayId()
```

##### `ResetTransportTransitGatewayAttachmentId` <a name="ResetTransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```csharp
private void ResetTransportTransitGatewayAttachmentId()
```

##### `ResetTunnel1DpdTimeoutAction` <a name="ResetTunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction"></a>

```csharp
private void ResetTunnel1DpdTimeoutAction()
```

##### `ResetTunnel1DpdTimeoutSeconds` <a name="ResetTunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds"></a>

```csharp
private void ResetTunnel1DpdTimeoutSeconds()
```

##### `ResetTunnel1IkeVersions` <a name="ResetTunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions"></a>

```csharp
private void ResetTunnel1IkeVersions()
```

##### `ResetTunnel1InsideCidr` <a name="ResetTunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr"></a>

```csharp
private void ResetTunnel1InsideCidr()
```

##### `ResetTunnel1InsideIpv6Cidr` <a name="ResetTunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr"></a>

```csharp
private void ResetTunnel1InsideIpv6Cidr()
```

##### `ResetTunnel1LogOptions` <a name="ResetTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions"></a>

```csharp
private void ResetTunnel1LogOptions()
```

##### `ResetTunnel1Phase1DhGroupNumbers` <a name="ResetTunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers"></a>

```csharp
private void ResetTunnel1Phase1DhGroupNumbers()
```

##### `ResetTunnel1Phase1EncryptionAlgorithms` <a name="ResetTunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms"></a>

```csharp
private void ResetTunnel1Phase1EncryptionAlgorithms()
```

##### `ResetTunnel1Phase1IntegrityAlgorithms` <a name="ResetTunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms"></a>

```csharp
private void ResetTunnel1Phase1IntegrityAlgorithms()
```

##### `ResetTunnel1Phase1LifetimeSeconds` <a name="ResetTunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds"></a>

```csharp
private void ResetTunnel1Phase1LifetimeSeconds()
```

##### `ResetTunnel1Phase2DhGroupNumbers` <a name="ResetTunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers"></a>

```csharp
private void ResetTunnel1Phase2DhGroupNumbers()
```

##### `ResetTunnel1Phase2EncryptionAlgorithms` <a name="ResetTunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms"></a>

```csharp
private void ResetTunnel1Phase2EncryptionAlgorithms()
```

##### `ResetTunnel1Phase2IntegrityAlgorithms` <a name="ResetTunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms"></a>

```csharp
private void ResetTunnel1Phase2IntegrityAlgorithms()
```

##### `ResetTunnel1Phase2LifetimeSeconds` <a name="ResetTunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds"></a>

```csharp
private void ResetTunnel1Phase2LifetimeSeconds()
```

##### `ResetTunnel1PresharedKey` <a name="ResetTunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey"></a>

```csharp
private void ResetTunnel1PresharedKey()
```

##### `ResetTunnel1RekeyFuzzPercentage` <a name="ResetTunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage"></a>

```csharp
private void ResetTunnel1RekeyFuzzPercentage()
```

##### `ResetTunnel1RekeyMarginTimeSeconds` <a name="ResetTunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds"></a>

```csharp
private void ResetTunnel1RekeyMarginTimeSeconds()
```

##### `ResetTunnel1ReplayWindowSize` <a name="ResetTunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize"></a>

```csharp
private void ResetTunnel1ReplayWindowSize()
```

##### `ResetTunnel1StartupAction` <a name="ResetTunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction"></a>

```csharp
private void ResetTunnel1StartupAction()
```

##### `ResetTunnel2DpdTimeoutAction` <a name="ResetTunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction"></a>

```csharp
private void ResetTunnel2DpdTimeoutAction()
```

##### `ResetTunnel2DpdTimeoutSeconds` <a name="ResetTunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds"></a>

```csharp
private void ResetTunnel2DpdTimeoutSeconds()
```

##### `ResetTunnel2IkeVersions` <a name="ResetTunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions"></a>

```csharp
private void ResetTunnel2IkeVersions()
```

##### `ResetTunnel2InsideCidr` <a name="ResetTunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr"></a>

```csharp
private void ResetTunnel2InsideCidr()
```

##### `ResetTunnel2InsideIpv6Cidr` <a name="ResetTunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr"></a>

```csharp
private void ResetTunnel2InsideIpv6Cidr()
```

##### `ResetTunnel2LogOptions` <a name="ResetTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions"></a>

```csharp
private void ResetTunnel2LogOptions()
```

##### `ResetTunnel2Phase1DhGroupNumbers` <a name="ResetTunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers"></a>

```csharp
private void ResetTunnel2Phase1DhGroupNumbers()
```

##### `ResetTunnel2Phase1EncryptionAlgorithms` <a name="ResetTunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms"></a>

```csharp
private void ResetTunnel2Phase1EncryptionAlgorithms()
```

##### `ResetTunnel2Phase1IntegrityAlgorithms` <a name="ResetTunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms"></a>

```csharp
private void ResetTunnel2Phase1IntegrityAlgorithms()
```

##### `ResetTunnel2Phase1LifetimeSeconds` <a name="ResetTunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds"></a>

```csharp
private void ResetTunnel2Phase1LifetimeSeconds()
```

##### `ResetTunnel2Phase2DhGroupNumbers` <a name="ResetTunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers"></a>

```csharp
private void ResetTunnel2Phase2DhGroupNumbers()
```

##### `ResetTunnel2Phase2EncryptionAlgorithms` <a name="ResetTunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms"></a>

```csharp
private void ResetTunnel2Phase2EncryptionAlgorithms()
```

##### `ResetTunnel2Phase2IntegrityAlgorithms` <a name="ResetTunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms"></a>

```csharp
private void ResetTunnel2Phase2IntegrityAlgorithms()
```

##### `ResetTunnel2Phase2LifetimeSeconds` <a name="ResetTunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds"></a>

```csharp
private void ResetTunnel2Phase2LifetimeSeconds()
```

##### `ResetTunnel2PresharedKey` <a name="ResetTunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey"></a>

```csharp
private void ResetTunnel2PresharedKey()
```

##### `ResetTunnel2RekeyFuzzPercentage` <a name="ResetTunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage"></a>

```csharp
private void ResetTunnel2RekeyFuzzPercentage()
```

##### `ResetTunnel2RekeyMarginTimeSeconds` <a name="ResetTunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds"></a>

```csharp
private void ResetTunnel2RekeyMarginTimeSeconds()
```

##### `ResetTunnel2ReplayWindowSize` <a name="ResetTunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize"></a>

```csharp
private void ResetTunnel2ReplayWindowSize()
```

##### `ResetTunnel2StartupAction` <a name="ResetTunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction"></a>

```csharp
private void ResetTunnel2StartupAction()
```

##### `ResetTunnelInsideIpVersion` <a name="ResetTunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion"></a>

```csharp
private void ResetTunnelInsideIpVersion()
```

##### `ResetVpnGatewayId` <a name="ResetVpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId"></a>

```csharp
private void ResetVpnGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpnConnection.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpnConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

VpnConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn">CoreNetworkAttachmentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration">CustomerGatewayConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address">Tunnel1Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn">Tunnel1BgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime">Tunnel1BgpHoldtime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress">Tunnel1CgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions">Tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress">Tunnel1VgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address">Tunnel2Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn">Tunnel2BgpAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime">Tunnel2BgpHoldtime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress">Tunnel2CgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions">Tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress">Tunnel2VgwInsideAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry">VgwTelemetry</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput">CustomerGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput">EnableAccelerationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput">LocalIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput">LocalIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput">OutsideIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput">RemoteIpv4NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput">RemoteIpv6NetworkCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput">StaticRoutesOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput">TransportTransitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput">Tunnel1DpdTimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput">Tunnel1DpdTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput">Tunnel1IkeVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput">Tunnel1InsideCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput">Tunnel1InsideIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput">Tunnel1LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput">Tunnel1Phase1DhGroupNumbersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput">Tunnel1Phase1EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput">Tunnel1Phase1IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput">Tunnel1Phase1LifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput">Tunnel1Phase2DhGroupNumbersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput">Tunnel1Phase2EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput">Tunnel1Phase2IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput">Tunnel1Phase2LifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput">Tunnel1PresharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput">Tunnel1RekeyFuzzPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput">Tunnel1RekeyMarginTimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput">Tunnel1ReplayWindowSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput">Tunnel1StartupActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput">Tunnel2DpdTimeoutActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput">Tunnel2DpdTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput">Tunnel2IkeVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput">Tunnel2InsideCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput">Tunnel2InsideIpv6CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput">Tunnel2LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput">Tunnel2Phase1DhGroupNumbersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput">Tunnel2Phase1EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput">Tunnel2Phase1IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput">Tunnel2Phase1LifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput">Tunnel2Phase2DhGroupNumbersInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput">Tunnel2Phase2EncryptionAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput">Tunnel2Phase2IntegrityAlgorithmsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput">Tunnel2Phase2LifetimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput">Tunnel2PresharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput">Tunnel2RekeyFuzzPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput">Tunnel2RekeyMarginTimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput">Tunnel2ReplayWindowSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput">Tunnel2StartupActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput">TunnelInsideIpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId">CustomerGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration">EnableAcceleration</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction">Tunnel1DpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds">Tunnel1DpdTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions">Tunnel1IkeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr">Tunnel1InsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr">Tunnel1InsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers">Tunnel1Phase1DhGroupNumbers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms">Tunnel1Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms">Tunnel1Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds">Tunnel1Phase1LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers">Tunnel1Phase2DhGroupNumbers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms">Tunnel1Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms">Tunnel1Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds">Tunnel1Phase2LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey">Tunnel1PresharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage">Tunnel1RekeyFuzzPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds">Tunnel1RekeyMarginTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize">Tunnel1ReplayWindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction">Tunnel1StartupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction">Tunnel2DpdTimeoutAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds">Tunnel2DpdTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions">Tunnel2IkeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr">Tunnel2InsideCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr">Tunnel2InsideIpv6Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers">Tunnel2Phase1DhGroupNumbers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms">Tunnel2Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms">Tunnel2Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds">Tunnel2Phase1LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers">Tunnel2Phase2DhGroupNumbers</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms">Tunnel2Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms">Tunnel2Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds">Tunnel2Phase2LifetimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey">Tunnel2PresharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage">Tunnel2RekeyFuzzPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds">Tunnel2RekeyMarginTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize">Tunnel2ReplayWindowSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction">Tunnel2StartupAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `CoreNetworkAttachmentArn`<sup>Required</sup> <a name="CoreNetworkAttachmentArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn"></a>

```csharp
public string CoreNetworkAttachmentArn { get; }
```

- *Type:* string

---

##### `CustomerGatewayConfiguration`<sup>Required</sup> <a name="CustomerGatewayConfiguration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration"></a>

```csharp
public string CustomerGatewayConfiguration { get; }
```

- *Type:* string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes"></a>

```csharp
public VpnConnectionRoutesList Routes { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a>

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `Tunnel1Address`<sup>Required</sup> <a name="Tunnel1Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address"></a>

```csharp
public string Tunnel1Address { get; }
```

- *Type:* string

---

##### `Tunnel1BgpAsn`<sup>Required</sup> <a name="Tunnel1BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn"></a>

```csharp
public string Tunnel1BgpAsn { get; }
```

- *Type:* string

---

##### `Tunnel1BgpHoldtime`<sup>Required</sup> <a name="Tunnel1BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime"></a>

```csharp
public double Tunnel1BgpHoldtime { get; }
```

- *Type:* double

---

##### `Tunnel1CgwInsideAddress`<sup>Required</sup> <a name="Tunnel1CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress"></a>

```csharp
public string Tunnel1CgwInsideAddress { get; }
```

- *Type:* string

---

##### `Tunnel1LogOptions`<sup>Required</sup> <a name="Tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions"></a>

```csharp
public VpnConnectionTunnel1LogOptionsOutputReference Tunnel1LogOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a>

---

##### `Tunnel1VgwInsideAddress`<sup>Required</sup> <a name="Tunnel1VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress"></a>

```csharp
public string Tunnel1VgwInsideAddress { get; }
```

- *Type:* string

---

##### `Tunnel2Address`<sup>Required</sup> <a name="Tunnel2Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address"></a>

```csharp
public string Tunnel2Address { get; }
```

- *Type:* string

---

##### `Tunnel2BgpAsn`<sup>Required</sup> <a name="Tunnel2BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn"></a>

```csharp
public string Tunnel2BgpAsn { get; }
```

- *Type:* string

---

##### `Tunnel2BgpHoldtime`<sup>Required</sup> <a name="Tunnel2BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime"></a>

```csharp
public double Tunnel2BgpHoldtime { get; }
```

- *Type:* double

---

##### `Tunnel2CgwInsideAddress`<sup>Required</sup> <a name="Tunnel2CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress"></a>

```csharp
public string Tunnel2CgwInsideAddress { get; }
```

- *Type:* string

---

##### `Tunnel2LogOptions`<sup>Required</sup> <a name="Tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions"></a>

```csharp
public VpnConnectionTunnel2LogOptionsOutputReference Tunnel2LogOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a>

---

##### `Tunnel2VgwInsideAddress`<sup>Required</sup> <a name="Tunnel2VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress"></a>

```csharp
public string Tunnel2VgwInsideAddress { get; }
```

- *Type:* string

---

##### `VgwTelemetry`<sup>Required</sup> <a name="VgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry"></a>

```csharp
public VpnConnectionVgwTelemetryList VgwTelemetry { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a>

---

##### `CustomerGatewayIdInput`<sup>Optional</sup> <a name="CustomerGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput"></a>

```csharp
public string CustomerGatewayIdInput { get; }
```

- *Type:* string

---

##### `EnableAccelerationInput`<sup>Optional</sup> <a name="EnableAccelerationInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput"></a>

```csharp
public object EnableAccelerationInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocalIpv4NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput"></a>

```csharp
public string LocalIpv4NetworkCidrInput { get; }
```

- *Type:* string

---

##### `LocalIpv6NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput"></a>

```csharp
public string LocalIpv6NetworkCidrInput { get; }
```

- *Type:* string

---

##### `OutsideIpAddressTypeInput`<sup>Optional</sup> <a name="OutsideIpAddressTypeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput"></a>

```csharp
public string OutsideIpAddressTypeInput { get; }
```

- *Type:* string

---

##### `RemoteIpv4NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```csharp
public string RemoteIpv4NetworkCidrInput { get; }
```

- *Type:* string

---

##### `RemoteIpv6NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```csharp
public string RemoteIpv6NetworkCidrInput { get; }
```

- *Type:* string

---

##### `StaticRoutesOnlyInput`<sup>Optional</sup> <a name="StaticRoutesOnlyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput"></a>

```csharp
public object StaticRoutesOnlyInput { get; }
```

- *Type:* object

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput"></a>

```csharp
public string TransitGatewayIdInput { get; }
```

- *Type:* string

---

##### `TransportTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```csharp
public string TransportTransitGatewayAttachmentIdInput { get; }
```

- *Type:* string

---

##### `Tunnel1DpdTimeoutActionInput`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput"></a>

```csharp
public string Tunnel1DpdTimeoutActionInput { get; }
```

- *Type:* string

---

##### `Tunnel1DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput"></a>

```csharp
public double Tunnel1DpdTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel1IkeVersionsInput`<sup>Optional</sup> <a name="Tunnel1IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput"></a>

```csharp
public string[] Tunnel1IkeVersionsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel1InsideCidrInput`<sup>Optional</sup> <a name="Tunnel1InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput"></a>

```csharp
public string Tunnel1InsideCidrInput { get; }
```

- *Type:* string

---

##### `Tunnel1InsideIpv6CidrInput`<sup>Optional</sup> <a name="Tunnel1InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput"></a>

```csharp
public string Tunnel1InsideIpv6CidrInput { get; }
```

- *Type:* string

---

##### `Tunnel1LogOptionsInput`<sup>Optional</sup> <a name="Tunnel1LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput"></a>

```csharp
public VpnConnectionTunnel1LogOptions Tunnel1LogOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `Tunnel1Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel1Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput"></a>

```csharp
public double[] Tunnel1Phase1DhGroupNumbersInput { get; }
```

- *Type:* double[]

---

##### `Tunnel1Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput"></a>

```csharp
public string[] Tunnel1Phase1EncryptionAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput"></a>

```csharp
public string[] Tunnel1Phase1IntegrityAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel1Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput"></a>

```csharp
public double Tunnel1Phase1LifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel1Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel1Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput"></a>

```csharp
public double[] Tunnel1Phase2DhGroupNumbersInput { get; }
```

- *Type:* double[]

---

##### `Tunnel1Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput"></a>

```csharp
public string[] Tunnel1Phase2EncryptionAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput"></a>

```csharp
public string[] Tunnel1Phase2IntegrityAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel1Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput"></a>

```csharp
public double Tunnel1Phase2LifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel1PresharedKeyInput`<sup>Optional</sup> <a name="Tunnel1PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput"></a>

```csharp
public string Tunnel1PresharedKeyInput { get; }
```

- *Type:* string

---

##### `Tunnel1RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="Tunnel1RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput"></a>

```csharp
public double Tunnel1RekeyFuzzPercentageInput { get; }
```

- *Type:* double

---

##### `Tunnel1RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="Tunnel1RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput"></a>

```csharp
public double Tunnel1RekeyMarginTimeSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel1ReplayWindowSizeInput`<sup>Optional</sup> <a name="Tunnel1ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput"></a>

```csharp
public double Tunnel1ReplayWindowSizeInput { get; }
```

- *Type:* double

---

##### `Tunnel1StartupActionInput`<sup>Optional</sup> <a name="Tunnel1StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput"></a>

```csharp
public string Tunnel1StartupActionInput { get; }
```

- *Type:* string

---

##### `Tunnel2DpdTimeoutActionInput`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput"></a>

```csharp
public string Tunnel2DpdTimeoutActionInput { get; }
```

- *Type:* string

---

##### `Tunnel2DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput"></a>

```csharp
public double Tunnel2DpdTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel2IkeVersionsInput`<sup>Optional</sup> <a name="Tunnel2IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput"></a>

```csharp
public string[] Tunnel2IkeVersionsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel2InsideCidrInput`<sup>Optional</sup> <a name="Tunnel2InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput"></a>

```csharp
public string Tunnel2InsideCidrInput { get; }
```

- *Type:* string

---

##### `Tunnel2InsideIpv6CidrInput`<sup>Optional</sup> <a name="Tunnel2InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput"></a>

```csharp
public string Tunnel2InsideIpv6CidrInput { get; }
```

- *Type:* string

---

##### `Tunnel2LogOptionsInput`<sup>Optional</sup> <a name="Tunnel2LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput"></a>

```csharp
public VpnConnectionTunnel2LogOptions Tunnel2LogOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `Tunnel2Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel2Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput"></a>

```csharp
public double[] Tunnel2Phase1DhGroupNumbersInput { get; }
```

- *Type:* double[]

---

##### `Tunnel2Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput"></a>

```csharp
public string[] Tunnel2Phase1EncryptionAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput"></a>

```csharp
public string[] Tunnel2Phase1IntegrityAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel2Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput"></a>

```csharp
public double Tunnel2Phase1LifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel2Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel2Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput"></a>

```csharp
public double[] Tunnel2Phase2DhGroupNumbersInput { get; }
```

- *Type:* double[]

---

##### `Tunnel2Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput"></a>

```csharp
public string[] Tunnel2Phase2EncryptionAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput"></a>

```csharp
public string[] Tunnel2Phase2IntegrityAlgorithmsInput { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel2Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput"></a>

```csharp
public double Tunnel2Phase2LifetimeSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel2PresharedKeyInput`<sup>Optional</sup> <a name="Tunnel2PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput"></a>

```csharp
public string Tunnel2PresharedKeyInput { get; }
```

- *Type:* string

---

##### `Tunnel2RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="Tunnel2RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput"></a>

```csharp
public double Tunnel2RekeyFuzzPercentageInput { get; }
```

- *Type:* double

---

##### `Tunnel2RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="Tunnel2RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput"></a>

```csharp
public double Tunnel2RekeyMarginTimeSecondsInput { get; }
```

- *Type:* double

---

##### `Tunnel2ReplayWindowSizeInput`<sup>Optional</sup> <a name="Tunnel2ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput"></a>

```csharp
public double Tunnel2ReplayWindowSizeInput { get; }
```

- *Type:* double

---

##### `Tunnel2StartupActionInput`<sup>Optional</sup> <a name="Tunnel2StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput"></a>

```csharp
public string Tunnel2StartupActionInput { get; }
```

- *Type:* string

---

##### `TunnelInsideIpVersionInput`<sup>Optional</sup> <a name="TunnelInsideIpVersionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput"></a>

```csharp
public string TunnelInsideIpVersionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput"></a>

```csharp
public string VpnGatewayIdInput { get; }
```

- *Type:* string

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId"></a>

```csharp
public string CustomerGatewayId { get; }
```

- *Type:* string

---

##### `EnableAcceleration`<sup>Required</sup> <a name="EnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration"></a>

```csharp
public object EnableAcceleration { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalIpv4NetworkCidr`<sup>Required</sup> <a name="LocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr"></a>

```csharp
public string LocalIpv4NetworkCidr { get; }
```

- *Type:* string

---

##### `LocalIpv6NetworkCidr`<sup>Required</sup> <a name="LocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr"></a>

```csharp
public string LocalIpv6NetworkCidr { get; }
```

- *Type:* string

---

##### `OutsideIpAddressType`<sup>Required</sup> <a name="OutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType"></a>

```csharp
public string OutsideIpAddressType { get; }
```

- *Type:* string

---

##### `RemoteIpv4NetworkCidr`<sup>Required</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr"></a>

```csharp
public string RemoteIpv4NetworkCidr { get; }
```

- *Type:* string

---

##### `RemoteIpv6NetworkCidr`<sup>Required</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr"></a>

```csharp
public string RemoteIpv6NetworkCidr { get; }
```

- *Type:* string

---

##### `StaticRoutesOnly`<sup>Required</sup> <a name="StaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly"></a>

```csharp
public object StaticRoutesOnly { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; }
```

- *Type:* string

---

##### `TransportTransitGatewayAttachmentId`<sup>Required</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```csharp
public string TransportTransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `Tunnel1DpdTimeoutAction`<sup>Required</sup> <a name="Tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction"></a>

```csharp
public string Tunnel1DpdTimeoutAction { get; }
```

- *Type:* string

---

##### `Tunnel1DpdTimeoutSeconds`<sup>Required</sup> <a name="Tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds"></a>

```csharp
public double Tunnel1DpdTimeoutSeconds { get; }
```

- *Type:* double

---

##### `Tunnel1IkeVersions`<sup>Required</sup> <a name="Tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions"></a>

```csharp
public string[] Tunnel1IkeVersions { get; }
```

- *Type:* string[]

---

##### `Tunnel1InsideCidr`<sup>Required</sup> <a name="Tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr"></a>

```csharp
public string Tunnel1InsideCidr { get; }
```

- *Type:* string

---

##### `Tunnel1InsideIpv6Cidr`<sup>Required</sup> <a name="Tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr"></a>

```csharp
public string Tunnel1InsideIpv6Cidr { get; }
```

- *Type:* string

---

##### `Tunnel1Phase1DhGroupNumbers`<sup>Required</sup> <a name="Tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers"></a>

```csharp
public double[] Tunnel1Phase1DhGroupNumbers { get; }
```

- *Type:* double[]

---

##### `Tunnel1Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel1Phase1EncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel1Phase1IntegrityAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase1LifetimeSeconds`<sup>Required</sup> <a name="Tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds"></a>

```csharp
public double Tunnel1Phase1LifetimeSeconds { get; }
```

- *Type:* double

---

##### `Tunnel1Phase2DhGroupNumbers`<sup>Required</sup> <a name="Tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers"></a>

```csharp
public double[] Tunnel1Phase2DhGroupNumbers { get; }
```

- *Type:* double[]

---

##### `Tunnel1Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel1Phase2EncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel1Phase2IntegrityAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel1Phase2LifetimeSeconds`<sup>Required</sup> <a name="Tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds"></a>

```csharp
public double Tunnel1Phase2LifetimeSeconds { get; }
```

- *Type:* double

---

##### `Tunnel1PresharedKey`<sup>Required</sup> <a name="Tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey"></a>

```csharp
public string Tunnel1PresharedKey { get; }
```

- *Type:* string

---

##### `Tunnel1RekeyFuzzPercentage`<sup>Required</sup> <a name="Tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage"></a>

```csharp
public double Tunnel1RekeyFuzzPercentage { get; }
```

- *Type:* double

---

##### `Tunnel1RekeyMarginTimeSeconds`<sup>Required</sup> <a name="Tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds"></a>

```csharp
public double Tunnel1RekeyMarginTimeSeconds { get; }
```

- *Type:* double

---

##### `Tunnel1ReplayWindowSize`<sup>Required</sup> <a name="Tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize"></a>

```csharp
public double Tunnel1ReplayWindowSize { get; }
```

- *Type:* double

---

##### `Tunnel1StartupAction`<sup>Required</sup> <a name="Tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction"></a>

```csharp
public string Tunnel1StartupAction { get; }
```

- *Type:* string

---

##### `Tunnel2DpdTimeoutAction`<sup>Required</sup> <a name="Tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction"></a>

```csharp
public string Tunnel2DpdTimeoutAction { get; }
```

- *Type:* string

---

##### `Tunnel2DpdTimeoutSeconds`<sup>Required</sup> <a name="Tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds"></a>

```csharp
public double Tunnel2DpdTimeoutSeconds { get; }
```

- *Type:* double

---

##### `Tunnel2IkeVersions`<sup>Required</sup> <a name="Tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions"></a>

```csharp
public string[] Tunnel2IkeVersions { get; }
```

- *Type:* string[]

---

##### `Tunnel2InsideCidr`<sup>Required</sup> <a name="Tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr"></a>

```csharp
public string Tunnel2InsideCidr { get; }
```

- *Type:* string

---

##### `Tunnel2InsideIpv6Cidr`<sup>Required</sup> <a name="Tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr"></a>

```csharp
public string Tunnel2InsideIpv6Cidr { get; }
```

- *Type:* string

---

##### `Tunnel2Phase1DhGroupNumbers`<sup>Required</sup> <a name="Tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers"></a>

```csharp
public double[] Tunnel2Phase1DhGroupNumbers { get; }
```

- *Type:* double[]

---

##### `Tunnel2Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel2Phase1EncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel2Phase1IntegrityAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase1LifetimeSeconds`<sup>Required</sup> <a name="Tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds"></a>

```csharp
public double Tunnel2Phase1LifetimeSeconds { get; }
```

- *Type:* double

---

##### `Tunnel2Phase2DhGroupNumbers`<sup>Required</sup> <a name="Tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers"></a>

```csharp
public double[] Tunnel2Phase2DhGroupNumbers { get; }
```

- *Type:* double[]

---

##### `Tunnel2Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel2Phase2EncryptionAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel2Phase2IntegrityAlgorithms { get; }
```

- *Type:* string[]

---

##### `Tunnel2Phase2LifetimeSeconds`<sup>Required</sup> <a name="Tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds"></a>

```csharp
public double Tunnel2Phase2LifetimeSeconds { get; }
```

- *Type:* double

---

##### `Tunnel2PresharedKey`<sup>Required</sup> <a name="Tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey"></a>

```csharp
public string Tunnel2PresharedKey { get; }
```

- *Type:* string

---

##### `Tunnel2RekeyFuzzPercentage`<sup>Required</sup> <a name="Tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage"></a>

```csharp
public double Tunnel2RekeyFuzzPercentage { get; }
```

- *Type:* double

---

##### `Tunnel2RekeyMarginTimeSeconds`<sup>Required</sup> <a name="Tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds"></a>

```csharp
public double Tunnel2RekeyMarginTimeSeconds { get; }
```

- *Type:* double

---

##### `Tunnel2ReplayWindowSize`<sup>Required</sup> <a name="Tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize"></a>

```csharp
public double Tunnel2ReplayWindowSize { get; }
```

- *Type:* double

---

##### `Tunnel2StartupAction`<sup>Required</sup> <a name="Tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction"></a>

```csharp
public string Tunnel2StartupAction { get; }
```

- *Type:* string

---

##### `TunnelInsideIpVersion`<sup>Required</sup> <a name="TunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion"></a>

```csharp
public string TunnelInsideIpVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnConnectionConfig <a name="VpnConnectionConfig" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomerGatewayId,
    string Type,
    object EnableAcceleration = null,
    string Id = null,
    string LocalIpv4NetworkCidr = null,
    string LocalIpv6NetworkCidr = null,
    string OutsideIpAddressType = null,
    string RemoteIpv4NetworkCidr = null,
    string RemoteIpv6NetworkCidr = null,
    object StaticRoutesOnly = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null,
    string TransitGatewayId = null,
    string TransportTransitGatewayAttachmentId = null,
    string Tunnel1DpdTimeoutAction = null,
    double Tunnel1DpdTimeoutSeconds = null,
    string[] Tunnel1IkeVersions = null,
    string Tunnel1InsideCidr = null,
    string Tunnel1InsideIpv6Cidr = null,
    VpnConnectionTunnel1LogOptions Tunnel1LogOptions = null,
    double[] Tunnel1Phase1DhGroupNumbers = null,
    string[] Tunnel1Phase1EncryptionAlgorithms = null,
    string[] Tunnel1Phase1IntegrityAlgorithms = null,
    double Tunnel1Phase1LifetimeSeconds = null,
    double[] Tunnel1Phase2DhGroupNumbers = null,
    string[] Tunnel1Phase2EncryptionAlgorithms = null,
    string[] Tunnel1Phase2IntegrityAlgorithms = null,
    double Tunnel1Phase2LifetimeSeconds = null,
    string Tunnel1PresharedKey = null,
    double Tunnel1RekeyFuzzPercentage = null,
    double Tunnel1RekeyMarginTimeSeconds = null,
    double Tunnel1ReplayWindowSize = null,
    string Tunnel1StartupAction = null,
    string Tunnel2DpdTimeoutAction = null,
    double Tunnel2DpdTimeoutSeconds = null,
    string[] Tunnel2IkeVersions = null,
    string Tunnel2InsideCidr = null,
    string Tunnel2InsideIpv6Cidr = null,
    VpnConnectionTunnel2LogOptions Tunnel2LogOptions = null,
    double[] Tunnel2Phase1DhGroupNumbers = null,
    string[] Tunnel2Phase1EncryptionAlgorithms = null,
    string[] Tunnel2Phase1IntegrityAlgorithms = null,
    double Tunnel2Phase1LifetimeSeconds = null,
    double[] Tunnel2Phase2DhGroupNumbers = null,
    string[] Tunnel2Phase2EncryptionAlgorithms = null,
    string[] Tunnel2Phase2IntegrityAlgorithms = null,
    double Tunnel2Phase2LifetimeSeconds = null,
    string Tunnel2PresharedKey = null,
    double Tunnel2RekeyFuzzPercentage = null,
    double Tunnel2RekeyMarginTimeSeconds = null,
    double Tunnel2ReplayWindowSize = null,
    string Tunnel2StartupAction = null,
    string TunnelInsideIpVersion = null,
    string VpnGatewayId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId">CustomerGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration">EnableAcceleration</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction">Tunnel1DpdTimeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds">Tunnel1DpdTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions">Tunnel1IkeVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr">Tunnel1InsideCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr">Tunnel1InsideIpv6Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions">Tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | tunnel1_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers">Tunnel1Phase1DhGroupNumbers</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms">Tunnel1Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms">Tunnel1Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds">Tunnel1Phase1LifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers">Tunnel1Phase2DhGroupNumbers</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms">Tunnel1Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms">Tunnel1Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds">Tunnel1Phase2LifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey">Tunnel1PresharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage">Tunnel1RekeyFuzzPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds">Tunnel1RekeyMarginTimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize">Tunnel1ReplayWindowSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction">Tunnel1StartupAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction">Tunnel2DpdTimeoutAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds">Tunnel2DpdTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions">Tunnel2IkeVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr">Tunnel2InsideCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr">Tunnel2InsideIpv6Cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions">Tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | tunnel2_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers">Tunnel2Phase1DhGroupNumbers</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms">Tunnel2Phase1EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms">Tunnel2Phase1IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds">Tunnel2Phase1LifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers">Tunnel2Phase2DhGroupNumbers</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms">Tunnel2Phase2EncryptionAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms">Tunnel2Phase2IntegrityAlgorithms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds">Tunnel2Phase2LifetimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey">Tunnel2PresharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage">Tunnel2RekeyFuzzPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds">Tunnel2RekeyMarginTimeSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize">Tunnel2ReplayWindowSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction">Tunnel2StartupAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId"></a>

```csharp
public string CustomerGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}.

---

##### `EnableAcceleration`<sup>Optional</sup> <a name="EnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration"></a>

```csharp
public object EnableAcceleration { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalIpv4NetworkCidr`<sup>Optional</sup> <a name="LocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```csharp
public string LocalIpv4NetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.

---

##### `LocalIpv6NetworkCidr`<sup>Optional</sup> <a name="LocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```csharp
public string LocalIpv6NetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.

---

##### `OutsideIpAddressType`<sup>Optional</sup> <a name="OutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType"></a>

```csharp
public string OutsideIpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}.

---

##### `RemoteIpv4NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```csharp
public string RemoteIpv4NetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.

---

##### `RemoteIpv6NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```csharp
public string RemoteIpv6NetworkCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.

---

##### `StaticRoutesOnly`<sup>Optional</sup> <a name="StaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly"></a>

```csharp
public object StaticRoutesOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}.

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId"></a>

```csharp
public string TransitGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}.

---

##### `TransportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```csharp
public string TransportTransitGatewayAttachmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}.

---

##### `Tunnel1DpdTimeoutAction`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction"></a>

```csharp
public string Tunnel1DpdTimeoutAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.

---

##### `Tunnel1DpdTimeoutSeconds`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds"></a>

```csharp
public double Tunnel1DpdTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.

---

##### `Tunnel1IkeVersions`<sup>Optional</sup> <a name="Tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions"></a>

```csharp
public string[] Tunnel1IkeVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.

---

##### `Tunnel1InsideCidr`<sup>Optional</sup> <a name="Tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr"></a>

```csharp
public string Tunnel1InsideCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.

---

##### `Tunnel1InsideIpv6Cidr`<sup>Optional</sup> <a name="Tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr"></a>

```csharp
public string Tunnel1InsideIpv6Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.

---

##### `Tunnel1LogOptions`<sup>Optional</sup> <a name="Tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions"></a>

```csharp
public VpnConnectionTunnel1LogOptions Tunnel1LogOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

tunnel1_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}

---

##### `Tunnel1Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers"></a>

```csharp
public double[] Tunnel1Phase1DhGroupNumbers { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.

---

##### `Tunnel1Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel1Phase1EncryptionAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.

---

##### `Tunnel1Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel1Phase1IntegrityAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.

---

##### `Tunnel1Phase1LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds"></a>

```csharp
public double Tunnel1Phase1LifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.

---

##### `Tunnel1Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers"></a>

```csharp
public double[] Tunnel1Phase2DhGroupNumbers { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.

---

##### `Tunnel1Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel1Phase2EncryptionAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.

---

##### `Tunnel1Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel1Phase2IntegrityAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.

---

##### `Tunnel1Phase2LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds"></a>

```csharp
public double Tunnel1Phase2LifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.

---

##### `Tunnel1PresharedKey`<sup>Optional</sup> <a name="Tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey"></a>

```csharp
public string Tunnel1PresharedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.

---

##### `Tunnel1RekeyFuzzPercentage`<sup>Optional</sup> <a name="Tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage"></a>

```csharp
public double Tunnel1RekeyFuzzPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.

---

##### `Tunnel1RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="Tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds"></a>

```csharp
public double Tunnel1RekeyMarginTimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.

---

##### `Tunnel1ReplayWindowSize`<sup>Optional</sup> <a name="Tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize"></a>

```csharp
public double Tunnel1ReplayWindowSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.

---

##### `Tunnel1StartupAction`<sup>Optional</sup> <a name="Tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction"></a>

```csharp
public string Tunnel1StartupAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.

---

##### `Tunnel2DpdTimeoutAction`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction"></a>

```csharp
public string Tunnel2DpdTimeoutAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.

---

##### `Tunnel2DpdTimeoutSeconds`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds"></a>

```csharp
public double Tunnel2DpdTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.

---

##### `Tunnel2IkeVersions`<sup>Optional</sup> <a name="Tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions"></a>

```csharp
public string[] Tunnel2IkeVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.

---

##### `Tunnel2InsideCidr`<sup>Optional</sup> <a name="Tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr"></a>

```csharp
public string Tunnel2InsideCidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.

---

##### `Tunnel2InsideIpv6Cidr`<sup>Optional</sup> <a name="Tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr"></a>

```csharp
public string Tunnel2InsideIpv6Cidr { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.

---

##### `Tunnel2LogOptions`<sup>Optional</sup> <a name="Tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions"></a>

```csharp
public VpnConnectionTunnel2LogOptions Tunnel2LogOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

tunnel2_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}

---

##### `Tunnel2Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers"></a>

```csharp
public double[] Tunnel2Phase1DhGroupNumbers { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.

---

##### `Tunnel2Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel2Phase1EncryptionAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.

---

##### `Tunnel2Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel2Phase1IntegrityAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.

---

##### `Tunnel2Phase1LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds"></a>

```csharp
public double Tunnel2Phase1LifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.

---

##### `Tunnel2Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers"></a>

```csharp
public double[] Tunnel2Phase2DhGroupNumbers { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.

---

##### `Tunnel2Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms"></a>

```csharp
public string[] Tunnel2Phase2EncryptionAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.

---

##### `Tunnel2Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms"></a>

```csharp
public string[] Tunnel2Phase2IntegrityAlgorithms { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.

---

##### `Tunnel2Phase2LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds"></a>

```csharp
public double Tunnel2Phase2LifetimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.

---

##### `Tunnel2PresharedKey`<sup>Optional</sup> <a name="Tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey"></a>

```csharp
public string Tunnel2PresharedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.

---

##### `Tunnel2RekeyFuzzPercentage`<sup>Optional</sup> <a name="Tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage"></a>

```csharp
public double Tunnel2RekeyFuzzPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.

---

##### `Tunnel2RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="Tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds"></a>

```csharp
public double Tunnel2RekeyMarginTimeSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.

---

##### `Tunnel2ReplayWindowSize`<sup>Optional</sup> <a name="Tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize"></a>

```csharp
public double Tunnel2ReplayWindowSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.

---

##### `Tunnel2StartupAction`<sup>Optional</sup> <a name="Tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction"></a>

```csharp
public string Tunnel2StartupAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.

---

##### `TunnelInsideIpVersion`<sup>Optional</sup> <a name="TunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```csharp
public string TunnelInsideIpVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.

---

##### `VpnGatewayId`<sup>Optional</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId"></a>

```csharp
public string VpnGatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}.

---

### VpnConnectionRoutes <a name="VpnConnectionRoutes" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionRoutes {

};
```


### VpnConnectionTunnel1LogOptions <a name="VpnConnectionTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel1LogOptions {
    VpnConnectionTunnel1LogOptionsCloudwatchLogOptions CloudwatchLogOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `CloudwatchLogOptions`<sup>Optional</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions"></a>

```csharp
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptions CloudwatchLogOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel1LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel1LogOptionsCloudwatchLogOptions {
    object LogEnabled = null,
    string LogGroupArn = null,
    string LogOutputFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled">LogEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat">LogOutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `LogEnabled`<sup>Optional</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```csharp
public object LogEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `LogOutputFormat`<sup>Optional</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```csharp
public string LogOutputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionTunnel2LogOptions <a name="VpnConnectionTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel2LogOptions {
    VpnConnectionTunnel2LogOptionsCloudwatchLogOptions CloudwatchLogOptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `CloudwatchLogOptions`<sup>Optional</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions"></a>

```csharp
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptions CloudwatchLogOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel2LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel2LogOptionsCloudwatchLogOptions {
    object LogEnabled = null,
    string LogGroupArn = null,
    string LogOutputFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled">LogEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat">LogOutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `LogEnabled`<sup>Optional</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```csharp
public object LogEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `LogOutputFormat`<sup>Optional</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```csharp
public string LogOutputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionVgwTelemetry <a name="VpnConnectionVgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionVgwTelemetry {

};
```


## Classes <a name="Classes" id="Classes"></a>

### VpnConnectionRoutesList <a name="VpnConnectionRoutesList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get"></a>

```csharp
private VpnConnectionRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VpnConnectionRoutesOutputReference <a name="VpnConnectionRoutesOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock"></a>

```csharp
public string DestinationCidrBlock { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue"></a>

```csharp
public VpnConnectionRoutes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a>

---


### VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">ResetLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">ResetLogOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogEnabled` <a name="ResetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```csharp
private void ResetLogEnabled()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```

##### `ResetLogOutputFormat` <a name="ResetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```csharp
private void ResetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">LogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">LogOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">LogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">LogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogEnabledInput`<sup>Optional</sup> <a name="LogEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```csharp
public object LogEnabledInput { get; }
```

- *Type:* object

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogOutputFormatInput`<sup>Optional</sup> <a name="LogOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```csharp
public string LogOutputFormatInput { get; }
```

- *Type:* string

---

##### `LogEnabled`<sup>Required</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```csharp
public object LogEnabled { get; }
```

- *Type:* object

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `LogOutputFormat`<sup>Required</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```csharp
public string LogOutputFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```csharp
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel1LogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel1LogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions">PutCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions">ResetCloudwatchLogOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogOptions` <a name="PutCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```csharp
private void PutCloudwatchLogOptions(VpnConnectionTunnel1LogOptionsCloudwatchLogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `ResetCloudwatchLogOptions` <a name="ResetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```csharp
private void ResetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput">CloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogOptions`<sup>Required</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```csharp
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference CloudwatchLogOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `CloudwatchLogOptionsInput`<sup>Optional</sup> <a name="CloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```csharp
public VpnConnectionTunnel1LogOptionsCloudwatchLogOptions CloudwatchLogOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue"></a>

```csharp
public VpnConnectionTunnel1LogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---


### VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled">ResetLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat">ResetLogOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogEnabled` <a name="ResetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```csharp
private void ResetLogEnabled()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```

##### `ResetLogOutputFormat` <a name="ResetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```csharp
private void ResetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">LogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">LogOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">LogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">LogOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogEnabledInput`<sup>Optional</sup> <a name="LogEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```csharp
public object LogEnabledInput { get; }
```

- *Type:* object

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogOutputFormatInput`<sup>Optional</sup> <a name="LogOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```csharp
public string LogOutputFormatInput { get; }
```

- *Type:* string

---

##### `LogEnabled`<sup>Required</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```csharp
public object LogEnabled { get; }
```

- *Type:* object

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `LogOutputFormat`<sup>Required</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```csharp
public string LogOutputFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```csharp
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel2LogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionTunnel2LogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions">PutCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions">ResetCloudwatchLogOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogOptions` <a name="PutCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```csharp
private void PutCloudwatchLogOptions(VpnConnectionTunnel2LogOptionsCloudwatchLogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `ResetCloudwatchLogOptions` <a name="ResetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```csharp
private void ResetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput">CloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogOptions`<sup>Required</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```csharp
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference CloudwatchLogOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `CloudwatchLogOptionsInput`<sup>Optional</sup> <a name="CloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```csharp
public VpnConnectionTunnel2LogOptionsCloudwatchLogOptions CloudwatchLogOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue"></a>

```csharp
public VpnConnectionTunnel2LogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---


### VpnConnectionVgwTelemetryList <a name="VpnConnectionVgwTelemetryList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionVgwTelemetryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get"></a>

```csharp
private VpnConnectionVgwTelemetryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VpnConnectionVgwTelemetryOutputReference <a name="VpnConnectionVgwTelemetryOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new VpnConnectionVgwTelemetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount">AcceptedRouteCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange">LastStatusChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress">OutsideIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcceptedRouteCount`<sup>Required</sup> <a name="AcceptedRouteCount" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount"></a>

```csharp
public double AcceptedRouteCount { get; }
```

- *Type:* double

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `LastStatusChange`<sup>Required</sup> <a name="LastStatusChange" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange"></a>

```csharp
public string LastStatusChange { get; }
```

- *Type:* string

---

##### `OutsideIpAddress`<sup>Required</sup> <a name="OutsideIpAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress"></a>

```csharp
public string OutsideIpAddress { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue"></a>

```csharp
public VpnConnectionVgwTelemetry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a>

---



