# `vpnConnection` Submodule <a name="`vpnConnection` Submodule" id="@cdktf/provider-aws.vpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpnConnection <a name="VpnConnection" id="@cdktf/provider-aws.vpnConnection.VpnConnection"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection aws_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnection(scope Construct, id *string, config VpnConnectionConfig) VpnConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig">VpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.vpnConnection.VpnConnection.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.vpnConnection.VpnConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTunnel1LogOptions` <a name="PutTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions"></a>

```go
func PutTunnel1LogOptions(value VpnConnectionTunnel1LogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel1LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `PutTunnel2LogOptions` <a name="PutTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions"></a>

```go
func PutTunnel2LogOptions(value VpnConnectionTunnel2LogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnection.putTunnel2LogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `ResetEnableAcceleration` <a name="ResetEnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetEnableAcceleration"></a>

```go
func ResetEnableAcceleration()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalIpv4NetworkCidr` <a name="ResetLocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv4NetworkCidr"></a>

```go
func ResetLocalIpv4NetworkCidr()
```

##### `ResetLocalIpv6NetworkCidr` <a name="ResetLocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetLocalIpv6NetworkCidr"></a>

```go
func ResetLocalIpv6NetworkCidr()
```

##### `ResetOutsideIpAddressType` <a name="ResetOutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetOutsideIpAddressType"></a>

```go
func ResetOutsideIpAddressType()
```

##### `ResetRemoteIpv4NetworkCidr` <a name="ResetRemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv4NetworkCidr"></a>

```go
func ResetRemoteIpv4NetworkCidr()
```

##### `ResetRemoteIpv6NetworkCidr` <a name="ResetRemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetRemoteIpv6NetworkCidr"></a>

```go
func ResetRemoteIpv6NetworkCidr()
```

##### `ResetStaticRoutesOnly` <a name="ResetStaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetStaticRoutesOnly"></a>

```go
func ResetStaticRoutesOnly()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTransitGatewayId` <a name="ResetTransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransitGatewayId"></a>

```go
func ResetTransitGatewayId()
```

##### `ResetTransportTransitGatewayAttachmentId` <a name="ResetTransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTransportTransitGatewayAttachmentId"></a>

```go
func ResetTransportTransitGatewayAttachmentId()
```

##### `ResetTunnel1DpdTimeoutAction` <a name="ResetTunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutAction"></a>

```go
func ResetTunnel1DpdTimeoutAction()
```

##### `ResetTunnel1DpdTimeoutSeconds` <a name="ResetTunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1DpdTimeoutSeconds"></a>

```go
func ResetTunnel1DpdTimeoutSeconds()
```

##### `ResetTunnel1IkeVersions` <a name="ResetTunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1IkeVersions"></a>

```go
func ResetTunnel1IkeVersions()
```

##### `ResetTunnel1InsideCidr` <a name="ResetTunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideCidr"></a>

```go
func ResetTunnel1InsideCidr()
```

##### `ResetTunnel1InsideIpv6Cidr` <a name="ResetTunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1InsideIpv6Cidr"></a>

```go
func ResetTunnel1InsideIpv6Cidr()
```

##### `ResetTunnel1LogOptions` <a name="ResetTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1LogOptions"></a>

```go
func ResetTunnel1LogOptions()
```

##### `ResetTunnel1Phase1DhGroupNumbers` <a name="ResetTunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1DhGroupNumbers"></a>

```go
func ResetTunnel1Phase1DhGroupNumbers()
```

##### `ResetTunnel1Phase1EncryptionAlgorithms` <a name="ResetTunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1EncryptionAlgorithms"></a>

```go
func ResetTunnel1Phase1EncryptionAlgorithms()
```

##### `ResetTunnel1Phase1IntegrityAlgorithms` <a name="ResetTunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1IntegrityAlgorithms"></a>

```go
func ResetTunnel1Phase1IntegrityAlgorithms()
```

##### `ResetTunnel1Phase1LifetimeSeconds` <a name="ResetTunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase1LifetimeSeconds"></a>

```go
func ResetTunnel1Phase1LifetimeSeconds()
```

##### `ResetTunnel1Phase2DhGroupNumbers` <a name="ResetTunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2DhGroupNumbers"></a>

```go
func ResetTunnel1Phase2DhGroupNumbers()
```

##### `ResetTunnel1Phase2EncryptionAlgorithms` <a name="ResetTunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2EncryptionAlgorithms"></a>

```go
func ResetTunnel1Phase2EncryptionAlgorithms()
```

##### `ResetTunnel1Phase2IntegrityAlgorithms` <a name="ResetTunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2IntegrityAlgorithms"></a>

```go
func ResetTunnel1Phase2IntegrityAlgorithms()
```

##### `ResetTunnel1Phase2LifetimeSeconds` <a name="ResetTunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1Phase2LifetimeSeconds"></a>

```go
func ResetTunnel1Phase2LifetimeSeconds()
```

##### `ResetTunnel1PresharedKey` <a name="ResetTunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1PresharedKey"></a>

```go
func ResetTunnel1PresharedKey()
```

##### `ResetTunnel1RekeyFuzzPercentage` <a name="ResetTunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyFuzzPercentage"></a>

```go
func ResetTunnel1RekeyFuzzPercentage()
```

##### `ResetTunnel1RekeyMarginTimeSeconds` <a name="ResetTunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1RekeyMarginTimeSeconds"></a>

```go
func ResetTunnel1RekeyMarginTimeSeconds()
```

##### `ResetTunnel1ReplayWindowSize` <a name="ResetTunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1ReplayWindowSize"></a>

```go
func ResetTunnel1ReplayWindowSize()
```

##### `ResetTunnel1StartupAction` <a name="ResetTunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel1StartupAction"></a>

```go
func ResetTunnel1StartupAction()
```

##### `ResetTunnel2DpdTimeoutAction` <a name="ResetTunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutAction"></a>

```go
func ResetTunnel2DpdTimeoutAction()
```

##### `ResetTunnel2DpdTimeoutSeconds` <a name="ResetTunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2DpdTimeoutSeconds"></a>

```go
func ResetTunnel2DpdTimeoutSeconds()
```

##### `ResetTunnel2IkeVersions` <a name="ResetTunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2IkeVersions"></a>

```go
func ResetTunnel2IkeVersions()
```

##### `ResetTunnel2InsideCidr` <a name="ResetTunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideCidr"></a>

```go
func ResetTunnel2InsideCidr()
```

##### `ResetTunnel2InsideIpv6Cidr` <a name="ResetTunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2InsideIpv6Cidr"></a>

```go
func ResetTunnel2InsideIpv6Cidr()
```

##### `ResetTunnel2LogOptions` <a name="ResetTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2LogOptions"></a>

```go
func ResetTunnel2LogOptions()
```

##### `ResetTunnel2Phase1DhGroupNumbers` <a name="ResetTunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1DhGroupNumbers"></a>

```go
func ResetTunnel2Phase1DhGroupNumbers()
```

##### `ResetTunnel2Phase1EncryptionAlgorithms` <a name="ResetTunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1EncryptionAlgorithms"></a>

```go
func ResetTunnel2Phase1EncryptionAlgorithms()
```

##### `ResetTunnel2Phase1IntegrityAlgorithms` <a name="ResetTunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1IntegrityAlgorithms"></a>

```go
func ResetTunnel2Phase1IntegrityAlgorithms()
```

##### `ResetTunnel2Phase1LifetimeSeconds` <a name="ResetTunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase1LifetimeSeconds"></a>

```go
func ResetTunnel2Phase1LifetimeSeconds()
```

##### `ResetTunnel2Phase2DhGroupNumbers` <a name="ResetTunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2DhGroupNumbers"></a>

```go
func ResetTunnel2Phase2DhGroupNumbers()
```

##### `ResetTunnel2Phase2EncryptionAlgorithms` <a name="ResetTunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2EncryptionAlgorithms"></a>

```go
func ResetTunnel2Phase2EncryptionAlgorithms()
```

##### `ResetTunnel2Phase2IntegrityAlgorithms` <a name="ResetTunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2IntegrityAlgorithms"></a>

```go
func ResetTunnel2Phase2IntegrityAlgorithms()
```

##### `ResetTunnel2Phase2LifetimeSeconds` <a name="ResetTunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2Phase2LifetimeSeconds"></a>

```go
func ResetTunnel2Phase2LifetimeSeconds()
```

##### `ResetTunnel2PresharedKey` <a name="ResetTunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2PresharedKey"></a>

```go
func ResetTunnel2PresharedKey()
```

##### `ResetTunnel2RekeyFuzzPercentage` <a name="ResetTunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyFuzzPercentage"></a>

```go
func ResetTunnel2RekeyFuzzPercentage()
```

##### `ResetTunnel2RekeyMarginTimeSeconds` <a name="ResetTunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2RekeyMarginTimeSeconds"></a>

```go
func ResetTunnel2RekeyMarginTimeSeconds()
```

##### `ResetTunnel2ReplayWindowSize` <a name="ResetTunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2ReplayWindowSize"></a>

```go
func ResetTunnel2ReplayWindowSize()
```

##### `ResetTunnel2StartupAction` <a name="ResetTunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnel2StartupAction"></a>

```go
func ResetTunnel2StartupAction()
```

##### `ResetTunnelInsideIpVersion` <a name="ResetTunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetTunnelInsideIpVersion"></a>

```go
func ResetTunnelInsideIpVersion()
```

##### `ResetVpnGatewayId` <a name="ResetVpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.resetVpnGatewayId"></a>

```go
func ResetVpnGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.VpnConnection_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.VpnConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.VpnConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.vpnConnection.VpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn">CoreNetworkAttachmentArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration">CustomerGatewayConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes">Routes</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address">Tunnel1Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn">Tunnel1BgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime">Tunnel1BgpHoldtime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress">Tunnel1CgwInsideAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions">Tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress">Tunnel1VgwInsideAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address">Tunnel2Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn">Tunnel2BgpAsn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime">Tunnel2BgpHoldtime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress">Tunnel2CgwInsideAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions">Tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress">Tunnel2VgwInsideAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry">VgwTelemetry</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput">CustomerGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput">EnableAccelerationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput">LocalIpv4NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput">LocalIpv6NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput">OutsideIpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput">RemoteIpv4NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput">RemoteIpv6NetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput">StaticRoutesOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput">TransitGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput">TransportTransitGatewayAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput">Tunnel1DpdTimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput">Tunnel1DpdTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput">Tunnel1IkeVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput">Tunnel1InsideCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput">Tunnel1InsideIpv6CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput">Tunnel1LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput">Tunnel1Phase1DhGroupNumbersInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput">Tunnel1Phase1EncryptionAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput">Tunnel1Phase1IntegrityAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput">Tunnel1Phase1LifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput">Tunnel1Phase2DhGroupNumbersInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput">Tunnel1Phase2EncryptionAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput">Tunnel1Phase2IntegrityAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput">Tunnel1Phase2LifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput">Tunnel1PresharedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput">Tunnel1RekeyFuzzPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput">Tunnel1RekeyMarginTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput">Tunnel1ReplayWindowSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput">Tunnel1StartupActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput">Tunnel2DpdTimeoutActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput">Tunnel2DpdTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput">Tunnel2IkeVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput">Tunnel2InsideCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput">Tunnel2InsideIpv6CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput">Tunnel2LogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput">Tunnel2Phase1DhGroupNumbersInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput">Tunnel2Phase1EncryptionAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput">Tunnel2Phase1IntegrityAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput">Tunnel2Phase1LifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput">Tunnel2Phase2DhGroupNumbersInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput">Tunnel2Phase2EncryptionAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput">Tunnel2Phase2IntegrityAlgorithmsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput">Tunnel2Phase2LifetimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput">Tunnel2PresharedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput">Tunnel2RekeyFuzzPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput">Tunnel2RekeyMarginTimeSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput">Tunnel2ReplayWindowSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput">Tunnel2StartupActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput">TunnelInsideIpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput">VpnGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId">CustomerGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration">EnableAcceleration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction">Tunnel1DpdTimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds">Tunnel1DpdTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions">Tunnel1IkeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr">Tunnel1InsideCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr">Tunnel1InsideIpv6Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers">Tunnel1Phase1DhGroupNumbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms">Tunnel1Phase1EncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms">Tunnel1Phase1IntegrityAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds">Tunnel1Phase1LifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers">Tunnel1Phase2DhGroupNumbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms">Tunnel1Phase2EncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms">Tunnel1Phase2IntegrityAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds">Tunnel1Phase2LifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey">Tunnel1PresharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage">Tunnel1RekeyFuzzPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds">Tunnel1RekeyMarginTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize">Tunnel1ReplayWindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction">Tunnel1StartupAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction">Tunnel2DpdTimeoutAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds">Tunnel2DpdTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions">Tunnel2IkeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr">Tunnel2InsideCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr">Tunnel2InsideIpv6Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers">Tunnel2Phase1DhGroupNumbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms">Tunnel2Phase1EncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms">Tunnel2Phase1IntegrityAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds">Tunnel2Phase1LifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers">Tunnel2Phase2DhGroupNumbers</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms">Tunnel2Phase2EncryptionAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms">Tunnel2Phase2IntegrityAlgorithms</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds">Tunnel2Phase2LifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey">Tunnel2PresharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage">Tunnel2RekeyFuzzPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds">Tunnel2RekeyMarginTimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize">Tunnel2ReplayWindowSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction">Tunnel2StartupAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `CoreNetworkAttachmentArn`<sup>Required</sup> <a name="CoreNetworkAttachmentArn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.coreNetworkAttachmentArn"></a>

```go
func CoreNetworkAttachmentArn() *string
```

- *Type:* *string

---

##### `CustomerGatewayConfiguration`<sup>Required</sup> <a name="CustomerGatewayConfiguration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayConfiguration"></a>

```go
func CustomerGatewayConfiguration() *string
```

- *Type:* *string

---

##### `Routes`<sup>Required</sup> <a name="Routes" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.routes"></a>

```go
func Routes() VpnConnectionRoutesList
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList">VpnConnectionRoutesList</a>

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayAttachmentId"></a>

```go
func TransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `Tunnel1Address`<sup>Required</sup> <a name="Tunnel1Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Address"></a>

```go
func Tunnel1Address() *string
```

- *Type:* *string

---

##### `Tunnel1BgpAsn`<sup>Required</sup> <a name="Tunnel1BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpAsn"></a>

```go
func Tunnel1BgpAsn() *string
```

- *Type:* *string

---

##### `Tunnel1BgpHoldtime`<sup>Required</sup> <a name="Tunnel1BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1BgpHoldtime"></a>

```go
func Tunnel1BgpHoldtime() *f64
```

- *Type:* *f64

---

##### `Tunnel1CgwInsideAddress`<sup>Required</sup> <a name="Tunnel1CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1CgwInsideAddress"></a>

```go
func Tunnel1CgwInsideAddress() *string
```

- *Type:* *string

---

##### `Tunnel1LogOptions`<sup>Required</sup> <a name="Tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptions"></a>

```go
func Tunnel1LogOptions() VpnConnectionTunnel1LogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference">VpnConnectionTunnel1LogOptionsOutputReference</a>

---

##### `Tunnel1VgwInsideAddress`<sup>Required</sup> <a name="Tunnel1VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1VgwInsideAddress"></a>

```go
func Tunnel1VgwInsideAddress() *string
```

- *Type:* *string

---

##### `Tunnel2Address`<sup>Required</sup> <a name="Tunnel2Address" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Address"></a>

```go
func Tunnel2Address() *string
```

- *Type:* *string

---

##### `Tunnel2BgpAsn`<sup>Required</sup> <a name="Tunnel2BgpAsn" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpAsn"></a>

```go
func Tunnel2BgpAsn() *string
```

- *Type:* *string

---

##### `Tunnel2BgpHoldtime`<sup>Required</sup> <a name="Tunnel2BgpHoldtime" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2BgpHoldtime"></a>

```go
func Tunnel2BgpHoldtime() *f64
```

- *Type:* *f64

---

##### `Tunnel2CgwInsideAddress`<sup>Required</sup> <a name="Tunnel2CgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2CgwInsideAddress"></a>

```go
func Tunnel2CgwInsideAddress() *string
```

- *Type:* *string

---

##### `Tunnel2LogOptions`<sup>Required</sup> <a name="Tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptions"></a>

```go
func Tunnel2LogOptions() VpnConnectionTunnel2LogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference">VpnConnectionTunnel2LogOptionsOutputReference</a>

---

##### `Tunnel2VgwInsideAddress`<sup>Required</sup> <a name="Tunnel2VgwInsideAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2VgwInsideAddress"></a>

```go
func Tunnel2VgwInsideAddress() *string
```

- *Type:* *string

---

##### `VgwTelemetry`<sup>Required</sup> <a name="VgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vgwTelemetry"></a>

```go
func VgwTelemetry() VpnConnectionVgwTelemetryList
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList">VpnConnectionVgwTelemetryList</a>

---

##### `CustomerGatewayIdInput`<sup>Optional</sup> <a name="CustomerGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayIdInput"></a>

```go
func CustomerGatewayIdInput() *string
```

- *Type:* *string

---

##### `EnableAccelerationInput`<sup>Optional</sup> <a name="EnableAccelerationInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAccelerationInput"></a>

```go
func EnableAccelerationInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalIpv4NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidrInput"></a>

```go
func LocalIpv4NetworkCidrInput() *string
```

- *Type:* *string

---

##### `LocalIpv6NetworkCidrInput`<sup>Optional</sup> <a name="LocalIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidrInput"></a>

```go
func LocalIpv6NetworkCidrInput() *string
```

- *Type:* *string

---

##### `OutsideIpAddressTypeInput`<sup>Optional</sup> <a name="OutsideIpAddressTypeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressTypeInput"></a>

```go
func OutsideIpAddressTypeInput() *string
```

- *Type:* *string

---

##### `RemoteIpv4NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidrInput"></a>

```go
func RemoteIpv4NetworkCidrInput() *string
```

- *Type:* *string

---

##### `RemoteIpv6NetworkCidrInput`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidrInput"></a>

```go
func RemoteIpv6NetworkCidrInput() *string
```

- *Type:* *string

---

##### `StaticRoutesOnlyInput`<sup>Optional</sup> <a name="StaticRoutesOnlyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnlyInput"></a>

```go
func StaticRoutesOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransitGatewayIdInput`<sup>Optional</sup> <a name="TransitGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayIdInput"></a>

```go
func TransitGatewayIdInput() *string
```

- *Type:* *string

---

##### `TransportTransitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentIdInput"></a>

```go
func TransportTransitGatewayAttachmentIdInput() *string
```

- *Type:* *string

---

##### `Tunnel1DpdTimeoutActionInput`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutActionInput"></a>

```go
func Tunnel1DpdTimeoutActionInput() *string
```

- *Type:* *string

---

##### `Tunnel1DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSecondsInput"></a>

```go
func Tunnel1DpdTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel1IkeVersionsInput`<sup>Optional</sup> <a name="Tunnel1IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersionsInput"></a>

```go
func Tunnel1IkeVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1InsideCidrInput`<sup>Optional</sup> <a name="Tunnel1InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidrInput"></a>

```go
func Tunnel1InsideCidrInput() *string
```

- *Type:* *string

---

##### `Tunnel1InsideIpv6CidrInput`<sup>Optional</sup> <a name="Tunnel1InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6CidrInput"></a>

```go
func Tunnel1InsideIpv6CidrInput() *string
```

- *Type:* *string

---

##### `Tunnel1LogOptionsInput`<sup>Optional</sup> <a name="Tunnel1LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1LogOptionsInput"></a>

```go
func Tunnel1LogOptionsInput() VpnConnectionTunnel1LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---

##### `Tunnel1Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel1Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbersInput"></a>

```go
func Tunnel1Phase1DhGroupNumbersInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel1Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithmsInput"></a>

```go
func Tunnel1Phase1EncryptionAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithmsInput"></a>

```go
func Tunnel1Phase1IntegrityAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel1Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSecondsInput"></a>

```go
func Tunnel1Phase1LifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel1Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel1Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbersInput"></a>

```go
func Tunnel1Phase2DhGroupNumbersInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel1Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithmsInput"></a>

```go
func Tunnel1Phase2EncryptionAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel1Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithmsInput"></a>

```go
func Tunnel1Phase2IntegrityAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel1Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSecondsInput"></a>

```go
func Tunnel1Phase2LifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel1PresharedKeyInput`<sup>Optional</sup> <a name="Tunnel1PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKeyInput"></a>

```go
func Tunnel1PresharedKeyInput() *string
```

- *Type:* *string

---

##### `Tunnel1RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="Tunnel1RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentageInput"></a>

```go
func Tunnel1RekeyFuzzPercentageInput() *f64
```

- *Type:* *f64

---

##### `Tunnel1RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="Tunnel1RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSecondsInput"></a>

```go
func Tunnel1RekeyMarginTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel1ReplayWindowSizeInput`<sup>Optional</sup> <a name="Tunnel1ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSizeInput"></a>

```go
func Tunnel1ReplayWindowSizeInput() *f64
```

- *Type:* *f64

---

##### `Tunnel1StartupActionInput`<sup>Optional</sup> <a name="Tunnel1StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupActionInput"></a>

```go
func Tunnel1StartupActionInput() *string
```

- *Type:* *string

---

##### `Tunnel2DpdTimeoutActionInput`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutActionInput"></a>

```go
func Tunnel2DpdTimeoutActionInput() *string
```

- *Type:* *string

---

##### `Tunnel2DpdTimeoutSecondsInput`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSecondsInput"></a>

```go
func Tunnel2DpdTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel2IkeVersionsInput`<sup>Optional</sup> <a name="Tunnel2IkeVersionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersionsInput"></a>

```go
func Tunnel2IkeVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2InsideCidrInput`<sup>Optional</sup> <a name="Tunnel2InsideCidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidrInput"></a>

```go
func Tunnel2InsideCidrInput() *string
```

- *Type:* *string

---

##### `Tunnel2InsideIpv6CidrInput`<sup>Optional</sup> <a name="Tunnel2InsideIpv6CidrInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6CidrInput"></a>

```go
func Tunnel2InsideIpv6CidrInput() *string
```

- *Type:* *string

---

##### `Tunnel2LogOptionsInput`<sup>Optional</sup> <a name="Tunnel2LogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2LogOptionsInput"></a>

```go
func Tunnel2LogOptionsInput() VpnConnectionTunnel2LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---

##### `Tunnel2Phase1DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel2Phase1DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbersInput"></a>

```go
func Tunnel2Phase1DhGroupNumbersInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel2Phase1EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase1EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithmsInput"></a>

```go
func Tunnel2Phase1EncryptionAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase1IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase1IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithmsInput"></a>

```go
func Tunnel2Phase1IntegrityAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase1LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel2Phase1LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSecondsInput"></a>

```go
func Tunnel2Phase1LifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel2Phase2DhGroupNumbersInput`<sup>Optional</sup> <a name="Tunnel2Phase2DhGroupNumbersInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbersInput"></a>

```go
func Tunnel2Phase2DhGroupNumbersInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel2Phase2EncryptionAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase2EncryptionAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithmsInput"></a>

```go
func Tunnel2Phase2EncryptionAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase2IntegrityAlgorithmsInput`<sup>Optional</sup> <a name="Tunnel2Phase2IntegrityAlgorithmsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithmsInput"></a>

```go
func Tunnel2Phase2IntegrityAlgorithmsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase2LifetimeSecondsInput`<sup>Optional</sup> <a name="Tunnel2Phase2LifetimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSecondsInput"></a>

```go
func Tunnel2Phase2LifetimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel2PresharedKeyInput`<sup>Optional</sup> <a name="Tunnel2PresharedKeyInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKeyInput"></a>

```go
func Tunnel2PresharedKeyInput() *string
```

- *Type:* *string

---

##### `Tunnel2RekeyFuzzPercentageInput`<sup>Optional</sup> <a name="Tunnel2RekeyFuzzPercentageInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentageInput"></a>

```go
func Tunnel2RekeyFuzzPercentageInput() *f64
```

- *Type:* *f64

---

##### `Tunnel2RekeyMarginTimeSecondsInput`<sup>Optional</sup> <a name="Tunnel2RekeyMarginTimeSecondsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSecondsInput"></a>

```go
func Tunnel2RekeyMarginTimeSecondsInput() *f64
```

- *Type:* *f64

---

##### `Tunnel2ReplayWindowSizeInput`<sup>Optional</sup> <a name="Tunnel2ReplayWindowSizeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSizeInput"></a>

```go
func Tunnel2ReplayWindowSizeInput() *f64
```

- *Type:* *f64

---

##### `Tunnel2StartupActionInput`<sup>Optional</sup> <a name="Tunnel2StartupActionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupActionInput"></a>

```go
func Tunnel2StartupActionInput() *string
```

- *Type:* *string

---

##### `TunnelInsideIpVersionInput`<sup>Optional</sup> <a name="TunnelInsideIpVersionInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersionInput"></a>

```go
func TunnelInsideIpVersionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `VpnGatewayIdInput`<sup>Optional</sup> <a name="VpnGatewayIdInput" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayIdInput"></a>

```go
func VpnGatewayIdInput() *string
```

- *Type:* *string

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.customerGatewayId"></a>

```go
func CustomerGatewayId() *string
```

- *Type:* *string

---

##### `EnableAcceleration`<sup>Required</sup> <a name="EnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.enableAcceleration"></a>

```go
func EnableAcceleration() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalIpv4NetworkCidr`<sup>Required</sup> <a name="LocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv4NetworkCidr"></a>

```go
func LocalIpv4NetworkCidr() *string
```

- *Type:* *string

---

##### `LocalIpv6NetworkCidr`<sup>Required</sup> <a name="LocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.localIpv6NetworkCidr"></a>

```go
func LocalIpv6NetworkCidr() *string
```

- *Type:* *string

---

##### `OutsideIpAddressType`<sup>Required</sup> <a name="OutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.outsideIpAddressType"></a>

```go
func OutsideIpAddressType() *string
```

- *Type:* *string

---

##### `RemoteIpv4NetworkCidr`<sup>Required</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv4NetworkCidr"></a>

```go
func RemoteIpv4NetworkCidr() *string
```

- *Type:* *string

---

##### `RemoteIpv6NetworkCidr`<sup>Required</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.remoteIpv6NetworkCidr"></a>

```go
func RemoteIpv6NetworkCidr() *string
```

- *Type:* *string

---

##### `StaticRoutesOnly`<sup>Required</sup> <a name="StaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.staticRoutesOnly"></a>

```go
func StaticRoutesOnly() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TransitGatewayId`<sup>Required</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transitGatewayId"></a>

```go
func TransitGatewayId() *string
```

- *Type:* *string

---

##### `TransportTransitGatewayAttachmentId`<sup>Required</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.transportTransitGatewayAttachmentId"></a>

```go
func TransportTransitGatewayAttachmentId() *string
```

- *Type:* *string

---

##### `Tunnel1DpdTimeoutAction`<sup>Required</sup> <a name="Tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutAction"></a>

```go
func Tunnel1DpdTimeoutAction() *string
```

- *Type:* *string

---

##### `Tunnel1DpdTimeoutSeconds`<sup>Required</sup> <a name="Tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1DpdTimeoutSeconds"></a>

```go
func Tunnel1DpdTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel1IkeVersions`<sup>Required</sup> <a name="Tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1IkeVersions"></a>

```go
func Tunnel1IkeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1InsideCidr`<sup>Required</sup> <a name="Tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideCidr"></a>

```go
func Tunnel1InsideCidr() *string
```

- *Type:* *string

---

##### `Tunnel1InsideIpv6Cidr`<sup>Required</sup> <a name="Tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1InsideIpv6Cidr"></a>

```go
func Tunnel1InsideIpv6Cidr() *string
```

- *Type:* *string

---

##### `Tunnel1Phase1DhGroupNumbers`<sup>Required</sup> <a name="Tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1DhGroupNumbers"></a>

```go
func Tunnel1Phase1DhGroupNumbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel1Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1EncryptionAlgorithms"></a>

```go
func Tunnel1Phase1EncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1IntegrityAlgorithms"></a>

```go
func Tunnel1Phase1IntegrityAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase1LifetimeSeconds`<sup>Required</sup> <a name="Tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase1LifetimeSeconds"></a>

```go
func Tunnel1Phase1LifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel1Phase2DhGroupNumbers`<sup>Required</sup> <a name="Tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2DhGroupNumbers"></a>

```go
func Tunnel1Phase2DhGroupNumbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel1Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2EncryptionAlgorithms"></a>

```go
func Tunnel1Phase2EncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2IntegrityAlgorithms"></a>

```go
func Tunnel1Phase2IntegrityAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel1Phase2LifetimeSeconds`<sup>Required</sup> <a name="Tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1Phase2LifetimeSeconds"></a>

```go
func Tunnel1Phase2LifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel1PresharedKey`<sup>Required</sup> <a name="Tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1PresharedKey"></a>

```go
func Tunnel1PresharedKey() *string
```

- *Type:* *string

---

##### `Tunnel1RekeyFuzzPercentage`<sup>Required</sup> <a name="Tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyFuzzPercentage"></a>

```go
func Tunnel1RekeyFuzzPercentage() *f64
```

- *Type:* *f64

---

##### `Tunnel1RekeyMarginTimeSeconds`<sup>Required</sup> <a name="Tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1RekeyMarginTimeSeconds"></a>

```go
func Tunnel1RekeyMarginTimeSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel1ReplayWindowSize`<sup>Required</sup> <a name="Tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1ReplayWindowSize"></a>

```go
func Tunnel1ReplayWindowSize() *f64
```

- *Type:* *f64

---

##### `Tunnel1StartupAction`<sup>Required</sup> <a name="Tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel1StartupAction"></a>

```go
func Tunnel1StartupAction() *string
```

- *Type:* *string

---

##### `Tunnel2DpdTimeoutAction`<sup>Required</sup> <a name="Tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutAction"></a>

```go
func Tunnel2DpdTimeoutAction() *string
```

- *Type:* *string

---

##### `Tunnel2DpdTimeoutSeconds`<sup>Required</sup> <a name="Tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2DpdTimeoutSeconds"></a>

```go
func Tunnel2DpdTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel2IkeVersions`<sup>Required</sup> <a name="Tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2IkeVersions"></a>

```go
func Tunnel2IkeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2InsideCidr`<sup>Required</sup> <a name="Tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideCidr"></a>

```go
func Tunnel2InsideCidr() *string
```

- *Type:* *string

---

##### `Tunnel2InsideIpv6Cidr`<sup>Required</sup> <a name="Tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2InsideIpv6Cidr"></a>

```go
func Tunnel2InsideIpv6Cidr() *string
```

- *Type:* *string

---

##### `Tunnel2Phase1DhGroupNumbers`<sup>Required</sup> <a name="Tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1DhGroupNumbers"></a>

```go
func Tunnel2Phase1DhGroupNumbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel2Phase1EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1EncryptionAlgorithms"></a>

```go
func Tunnel2Phase1EncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase1IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1IntegrityAlgorithms"></a>

```go
func Tunnel2Phase1IntegrityAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase1LifetimeSeconds`<sup>Required</sup> <a name="Tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase1LifetimeSeconds"></a>

```go
func Tunnel2Phase1LifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel2Phase2DhGroupNumbers`<sup>Required</sup> <a name="Tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2DhGroupNumbers"></a>

```go
func Tunnel2Phase2DhGroupNumbers() *[]*f64
```

- *Type:* *[]*f64

---

##### `Tunnel2Phase2EncryptionAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2EncryptionAlgorithms"></a>

```go
func Tunnel2Phase2EncryptionAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase2IntegrityAlgorithms`<sup>Required</sup> <a name="Tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2IntegrityAlgorithms"></a>

```go
func Tunnel2Phase2IntegrityAlgorithms() *[]*string
```

- *Type:* *[]*string

---

##### `Tunnel2Phase2LifetimeSeconds`<sup>Required</sup> <a name="Tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2Phase2LifetimeSeconds"></a>

```go
func Tunnel2Phase2LifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel2PresharedKey`<sup>Required</sup> <a name="Tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2PresharedKey"></a>

```go
func Tunnel2PresharedKey() *string
```

- *Type:* *string

---

##### `Tunnel2RekeyFuzzPercentage`<sup>Required</sup> <a name="Tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyFuzzPercentage"></a>

```go
func Tunnel2RekeyFuzzPercentage() *f64
```

- *Type:* *f64

---

##### `Tunnel2RekeyMarginTimeSeconds`<sup>Required</sup> <a name="Tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2RekeyMarginTimeSeconds"></a>

```go
func Tunnel2RekeyMarginTimeSeconds() *f64
```

- *Type:* *f64

---

##### `Tunnel2ReplayWindowSize`<sup>Required</sup> <a name="Tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2ReplayWindowSize"></a>

```go
func Tunnel2ReplayWindowSize() *f64
```

- *Type:* *f64

---

##### `Tunnel2StartupAction`<sup>Required</sup> <a name="Tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnel2StartupAction"></a>

```go
func Tunnel2StartupAction() *string
```

- *Type:* *string

---

##### `TunnelInsideIpVersion`<sup>Required</sup> <a name="TunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tunnelInsideIpVersion"></a>

```go
func TunnelInsideIpVersion() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VpnGatewayId`<sup>Required</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.vpnGatewayId"></a>

```go
func VpnGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.vpnConnection.VpnConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VpnConnectionConfig <a name="VpnConnectionConfig" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

&vpnconnection.VpnConnectionConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomerGatewayId: *string,
	Type: *string,
	EnableAcceleration: interface{},
	Id: *string,
	LocalIpv4NetworkCidr: *string,
	LocalIpv6NetworkCidr: *string,
	OutsideIpAddressType: *string,
	RemoteIpv4NetworkCidr: *string,
	RemoteIpv6NetworkCidr: *string,
	StaticRoutesOnly: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	TransitGatewayId: *string,
	TransportTransitGatewayAttachmentId: *string,
	Tunnel1DpdTimeoutAction: *string,
	Tunnel1DpdTimeoutSeconds: *f64,
	Tunnel1IkeVersions: *[]*string,
	Tunnel1InsideCidr: *string,
	Tunnel1InsideIpv6Cidr: *string,
	Tunnel1LogOptions: github.com/cdktf/cdktf-provider-aws-go/aws.vpnConnection.VpnConnectionTunnel1LogOptions,
	Tunnel1Phase1DhGroupNumbers: *[]*f64,
	Tunnel1Phase1EncryptionAlgorithms: *[]*string,
	Tunnel1Phase1IntegrityAlgorithms: *[]*string,
	Tunnel1Phase1LifetimeSeconds: *f64,
	Tunnel1Phase2DhGroupNumbers: *[]*f64,
	Tunnel1Phase2EncryptionAlgorithms: *[]*string,
	Tunnel1Phase2IntegrityAlgorithms: *[]*string,
	Tunnel1Phase2LifetimeSeconds: *f64,
	Tunnel1PresharedKey: *string,
	Tunnel1RekeyFuzzPercentage: *f64,
	Tunnel1RekeyMarginTimeSeconds: *f64,
	Tunnel1ReplayWindowSize: *f64,
	Tunnel1StartupAction: *string,
	Tunnel2DpdTimeoutAction: *string,
	Tunnel2DpdTimeoutSeconds: *f64,
	Tunnel2IkeVersions: *[]*string,
	Tunnel2InsideCidr: *string,
	Tunnel2InsideIpv6Cidr: *string,
	Tunnel2LogOptions: github.com/cdktf/cdktf-provider-aws-go/aws.vpnConnection.VpnConnectionTunnel2LogOptions,
	Tunnel2Phase1DhGroupNumbers: *[]*f64,
	Tunnel2Phase1EncryptionAlgorithms: *[]*string,
	Tunnel2Phase1IntegrityAlgorithms: *[]*string,
	Tunnel2Phase1LifetimeSeconds: *f64,
	Tunnel2Phase2DhGroupNumbers: *[]*f64,
	Tunnel2Phase2EncryptionAlgorithms: *[]*string,
	Tunnel2Phase2IntegrityAlgorithms: *[]*string,
	Tunnel2Phase2LifetimeSeconds: *f64,
	Tunnel2PresharedKey: *string,
	Tunnel2RekeyFuzzPercentage: *f64,
	Tunnel2RekeyMarginTimeSeconds: *f64,
	Tunnel2ReplayWindowSize: *f64,
	Tunnel2StartupAction: *string,
	TunnelInsideIpVersion: *string,
	VpnGatewayId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId">CustomerGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration">EnableAcceleration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr">LocalIpv4NetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr">LocalIpv6NetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType">OutsideIpAddressType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr">RemoteIpv4NetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr">RemoteIpv6NetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly">StaticRoutesOnly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId">TransitGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId">TransportTransitGatewayAttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction">Tunnel1DpdTimeoutAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds">Tunnel1DpdTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions">Tunnel1IkeVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr">Tunnel1InsideCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr">Tunnel1InsideIpv6Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions">Tunnel1LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | tunnel1_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers">Tunnel1Phase1DhGroupNumbers</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms">Tunnel1Phase1EncryptionAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms">Tunnel1Phase1IntegrityAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds">Tunnel1Phase1LifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers">Tunnel1Phase2DhGroupNumbers</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms">Tunnel1Phase2EncryptionAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms">Tunnel1Phase2IntegrityAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds">Tunnel1Phase2LifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey">Tunnel1PresharedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage">Tunnel1RekeyFuzzPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds">Tunnel1RekeyMarginTimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize">Tunnel1ReplayWindowSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction">Tunnel1StartupAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction">Tunnel2DpdTimeoutAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds">Tunnel2DpdTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions">Tunnel2IkeVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr">Tunnel2InsideCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr">Tunnel2InsideIpv6Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions">Tunnel2LogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | tunnel2_log_options block. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers">Tunnel2Phase1DhGroupNumbers</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms">Tunnel2Phase1EncryptionAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms">Tunnel2Phase1IntegrityAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds">Tunnel2Phase1LifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers">Tunnel2Phase2DhGroupNumbers</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms">Tunnel2Phase2EncryptionAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms">Tunnel2Phase2IntegrityAlgorithms</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds">Tunnel2Phase2LifetimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey">Tunnel2PresharedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage">Tunnel2RekeyFuzzPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds">Tunnel2RekeyMarginTimeSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize">Tunnel2ReplayWindowSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction">Tunnel2StartupAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion">TunnelInsideIpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId">VpnGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.customerGatewayId"></a>

```go
CustomerGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#customer_gateway_id VpnConnection#customer_gateway_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#type VpnConnection#type}.

---

##### `EnableAcceleration`<sup>Optional</sup> <a name="EnableAcceleration" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.enableAcceleration"></a>

```go
EnableAcceleration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#enable_acceleration VpnConnection#enable_acceleration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#id VpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalIpv4NetworkCidr`<sup>Optional</sup> <a name="LocalIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv4NetworkCidr"></a>

```go
LocalIpv4NetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv4_network_cidr VpnConnection#local_ipv4_network_cidr}.

---

##### `LocalIpv6NetworkCidr`<sup>Optional</sup> <a name="LocalIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.localIpv6NetworkCidr"></a>

```go
LocalIpv6NetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#local_ipv6_network_cidr VpnConnection#local_ipv6_network_cidr}.

---

##### `OutsideIpAddressType`<sup>Optional</sup> <a name="OutsideIpAddressType" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.outsideIpAddressType"></a>

```go
OutsideIpAddressType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#outside_ip_address_type VpnConnection#outside_ip_address_type}.

---

##### `RemoteIpv4NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv4NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv4NetworkCidr"></a>

```go
RemoteIpv4NetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv4_network_cidr VpnConnection#remote_ipv4_network_cidr}.

---

##### `RemoteIpv6NetworkCidr`<sup>Optional</sup> <a name="RemoteIpv6NetworkCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.remoteIpv6NetworkCidr"></a>

```go
RemoteIpv6NetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#remote_ipv6_network_cidr VpnConnection#remote_ipv6_network_cidr}.

---

##### `StaticRoutesOnly`<sup>Optional</sup> <a name="StaticRoutesOnly" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.staticRoutesOnly"></a>

```go
StaticRoutesOnly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#static_routes_only VpnConnection#static_routes_only}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags VpnConnection#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tags_all VpnConnection#tags_all}.

---

##### `TransitGatewayId`<sup>Optional</sup> <a name="TransitGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transitGatewayId"></a>

```go
TransitGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transit_gateway_id VpnConnection#transit_gateway_id}.

---

##### `TransportTransitGatewayAttachmentId`<sup>Optional</sup> <a name="TransportTransitGatewayAttachmentId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.transportTransitGatewayAttachmentId"></a>

```go
TransportTransitGatewayAttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#transport_transit_gateway_attachment_id VpnConnection#transport_transit_gateway_attachment_id}.

---

##### `Tunnel1DpdTimeoutAction`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutAction"></a>

```go
Tunnel1DpdTimeoutAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_action VpnConnection#tunnel1_dpd_timeout_action}.

---

##### `Tunnel1DpdTimeoutSeconds`<sup>Optional</sup> <a name="Tunnel1DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1DpdTimeoutSeconds"></a>

```go
Tunnel1DpdTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_dpd_timeout_seconds VpnConnection#tunnel1_dpd_timeout_seconds}.

---

##### `Tunnel1IkeVersions`<sup>Optional</sup> <a name="Tunnel1IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1IkeVersions"></a>

```go
Tunnel1IkeVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_ike_versions VpnConnection#tunnel1_ike_versions}.

---

##### `Tunnel1InsideCidr`<sup>Optional</sup> <a name="Tunnel1InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideCidr"></a>

```go
Tunnel1InsideCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_cidr VpnConnection#tunnel1_inside_cidr}.

---

##### `Tunnel1InsideIpv6Cidr`<sup>Optional</sup> <a name="Tunnel1InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1InsideIpv6Cidr"></a>

```go
Tunnel1InsideIpv6Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_inside_ipv6_cidr VpnConnection#tunnel1_inside_ipv6_cidr}.

---

##### `Tunnel1LogOptions`<sup>Optional</sup> <a name="Tunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1LogOptions"></a>

```go
Tunnel1LogOptions VpnConnectionTunnel1LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

tunnel1_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_log_options VpnConnection#tunnel1_log_options}

---

##### `Tunnel1Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel1Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1DhGroupNumbers"></a>

```go
Tunnel1Phase1DhGroupNumbers *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_dh_group_numbers VpnConnection#tunnel1_phase1_dh_group_numbers}.

---

##### `Tunnel1Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1EncryptionAlgorithms"></a>

```go
Tunnel1Phase1EncryptionAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_encryption_algorithms VpnConnection#tunnel1_phase1_encryption_algorithms}.

---

##### `Tunnel1Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1IntegrityAlgorithms"></a>

```go
Tunnel1Phase1IntegrityAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_integrity_algorithms VpnConnection#tunnel1_phase1_integrity_algorithms}.

---

##### `Tunnel1Phase1LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel1Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase1LifetimeSeconds"></a>

```go
Tunnel1Phase1LifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase1_lifetime_seconds VpnConnection#tunnel1_phase1_lifetime_seconds}.

---

##### `Tunnel1Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel1Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2DhGroupNumbers"></a>

```go
Tunnel1Phase2DhGroupNumbers *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_dh_group_numbers VpnConnection#tunnel1_phase2_dh_group_numbers}.

---

##### `Tunnel1Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2EncryptionAlgorithms"></a>

```go
Tunnel1Phase2EncryptionAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_encryption_algorithms VpnConnection#tunnel1_phase2_encryption_algorithms}.

---

##### `Tunnel1Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel1Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2IntegrityAlgorithms"></a>

```go
Tunnel1Phase2IntegrityAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_integrity_algorithms VpnConnection#tunnel1_phase2_integrity_algorithms}.

---

##### `Tunnel1Phase2LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel1Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1Phase2LifetimeSeconds"></a>

```go
Tunnel1Phase2LifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_phase2_lifetime_seconds VpnConnection#tunnel1_phase2_lifetime_seconds}.

---

##### `Tunnel1PresharedKey`<sup>Optional</sup> <a name="Tunnel1PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1PresharedKey"></a>

```go
Tunnel1PresharedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_preshared_key VpnConnection#tunnel1_preshared_key}.

---

##### `Tunnel1RekeyFuzzPercentage`<sup>Optional</sup> <a name="Tunnel1RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyFuzzPercentage"></a>

```go
Tunnel1RekeyFuzzPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_fuzz_percentage VpnConnection#tunnel1_rekey_fuzz_percentage}.

---

##### `Tunnel1RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="Tunnel1RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1RekeyMarginTimeSeconds"></a>

```go
Tunnel1RekeyMarginTimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_rekey_margin_time_seconds VpnConnection#tunnel1_rekey_margin_time_seconds}.

---

##### `Tunnel1ReplayWindowSize`<sup>Optional</sup> <a name="Tunnel1ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1ReplayWindowSize"></a>

```go
Tunnel1ReplayWindowSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_replay_window_size VpnConnection#tunnel1_replay_window_size}.

---

##### `Tunnel1StartupAction`<sup>Optional</sup> <a name="Tunnel1StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel1StartupAction"></a>

```go
Tunnel1StartupAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel1_startup_action VpnConnection#tunnel1_startup_action}.

---

##### `Tunnel2DpdTimeoutAction`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutAction"></a>

```go
Tunnel2DpdTimeoutAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_action VpnConnection#tunnel2_dpd_timeout_action}.

---

##### `Tunnel2DpdTimeoutSeconds`<sup>Optional</sup> <a name="Tunnel2DpdTimeoutSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2DpdTimeoutSeconds"></a>

```go
Tunnel2DpdTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_dpd_timeout_seconds VpnConnection#tunnel2_dpd_timeout_seconds}.

---

##### `Tunnel2IkeVersions`<sup>Optional</sup> <a name="Tunnel2IkeVersions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2IkeVersions"></a>

```go
Tunnel2IkeVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_ike_versions VpnConnection#tunnel2_ike_versions}.

---

##### `Tunnel2InsideCidr`<sup>Optional</sup> <a name="Tunnel2InsideCidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideCidr"></a>

```go
Tunnel2InsideCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_cidr VpnConnection#tunnel2_inside_cidr}.

---

##### `Tunnel2InsideIpv6Cidr`<sup>Optional</sup> <a name="Tunnel2InsideIpv6Cidr" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2InsideIpv6Cidr"></a>

```go
Tunnel2InsideIpv6Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_inside_ipv6_cidr VpnConnection#tunnel2_inside_ipv6_cidr}.

---

##### `Tunnel2LogOptions`<sup>Optional</sup> <a name="Tunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2LogOptions"></a>

```go
Tunnel2LogOptions VpnConnectionTunnel2LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

tunnel2_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_log_options VpnConnection#tunnel2_log_options}

---

##### `Tunnel2Phase1DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel2Phase1DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1DhGroupNumbers"></a>

```go
Tunnel2Phase1DhGroupNumbers *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_dh_group_numbers VpnConnection#tunnel2_phase1_dh_group_numbers}.

---

##### `Tunnel2Phase1EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase1EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1EncryptionAlgorithms"></a>

```go
Tunnel2Phase1EncryptionAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_encryption_algorithms VpnConnection#tunnel2_phase1_encryption_algorithms}.

---

##### `Tunnel2Phase1IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase1IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1IntegrityAlgorithms"></a>

```go
Tunnel2Phase1IntegrityAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_integrity_algorithms VpnConnection#tunnel2_phase1_integrity_algorithms}.

---

##### `Tunnel2Phase1LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel2Phase1LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase1LifetimeSeconds"></a>

```go
Tunnel2Phase1LifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase1_lifetime_seconds VpnConnection#tunnel2_phase1_lifetime_seconds}.

---

##### `Tunnel2Phase2DhGroupNumbers`<sup>Optional</sup> <a name="Tunnel2Phase2DhGroupNumbers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2DhGroupNumbers"></a>

```go
Tunnel2Phase2DhGroupNumbers *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_dh_group_numbers VpnConnection#tunnel2_phase2_dh_group_numbers}.

---

##### `Tunnel2Phase2EncryptionAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase2EncryptionAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2EncryptionAlgorithms"></a>

```go
Tunnel2Phase2EncryptionAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_encryption_algorithms VpnConnection#tunnel2_phase2_encryption_algorithms}.

---

##### `Tunnel2Phase2IntegrityAlgorithms`<sup>Optional</sup> <a name="Tunnel2Phase2IntegrityAlgorithms" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2IntegrityAlgorithms"></a>

```go
Tunnel2Phase2IntegrityAlgorithms *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_integrity_algorithms VpnConnection#tunnel2_phase2_integrity_algorithms}.

---

##### `Tunnel2Phase2LifetimeSeconds`<sup>Optional</sup> <a name="Tunnel2Phase2LifetimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2Phase2LifetimeSeconds"></a>

```go
Tunnel2Phase2LifetimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_phase2_lifetime_seconds VpnConnection#tunnel2_phase2_lifetime_seconds}.

---

##### `Tunnel2PresharedKey`<sup>Optional</sup> <a name="Tunnel2PresharedKey" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2PresharedKey"></a>

```go
Tunnel2PresharedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_preshared_key VpnConnection#tunnel2_preshared_key}.

---

##### `Tunnel2RekeyFuzzPercentage`<sup>Optional</sup> <a name="Tunnel2RekeyFuzzPercentage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyFuzzPercentage"></a>

```go
Tunnel2RekeyFuzzPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_fuzz_percentage VpnConnection#tunnel2_rekey_fuzz_percentage}.

---

##### `Tunnel2RekeyMarginTimeSeconds`<sup>Optional</sup> <a name="Tunnel2RekeyMarginTimeSeconds" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2RekeyMarginTimeSeconds"></a>

```go
Tunnel2RekeyMarginTimeSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_rekey_margin_time_seconds VpnConnection#tunnel2_rekey_margin_time_seconds}.

---

##### `Tunnel2ReplayWindowSize`<sup>Optional</sup> <a name="Tunnel2ReplayWindowSize" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2ReplayWindowSize"></a>

```go
Tunnel2ReplayWindowSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_replay_window_size VpnConnection#tunnel2_replay_window_size}.

---

##### `Tunnel2StartupAction`<sup>Optional</sup> <a name="Tunnel2StartupAction" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnel2StartupAction"></a>

```go
Tunnel2StartupAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel2_startup_action VpnConnection#tunnel2_startup_action}.

---

##### `TunnelInsideIpVersion`<sup>Optional</sup> <a name="TunnelInsideIpVersion" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.tunnelInsideIpVersion"></a>

```go
TunnelInsideIpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#tunnel_inside_ip_version VpnConnection#tunnel_inside_ip_version}.

---

##### `VpnGatewayId`<sup>Optional</sup> <a name="VpnGatewayId" id="@cdktf/provider-aws.vpnConnection.VpnConnectionConfig.property.vpnGatewayId"></a>

```go
VpnGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#vpn_gateway_id VpnConnection#vpn_gateway_id}.

---

### VpnConnectionRoutes <a name="VpnConnectionRoutes" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

&vpnconnection.VpnConnectionRoutes {

}
```


### VpnConnectionTunnel1LogOptions <a name="VpnConnectionTunnel1LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

&vpnconnection.VpnConnectionTunnel1LogOptions {
	CloudwatchLogOptions: github.com/cdktf/cdktf-provider-aws-go/aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `CloudwatchLogOptions`<sup>Optional</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions.property.cloudwatchLogOptions"></a>

```go
CloudwatchLogOptions VpnConnectionTunnel1LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel1LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

&vpnconnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions {
	LogEnabled: interface{},
	LogGroupArn: *string,
	LogOutputFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled">LogEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat">LogOutputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `LogEnabled`<sup>Optional</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```go
LogEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `LogOutputFormat`<sup>Optional</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```go
LogOutputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionTunnel2LogOptions <a name="VpnConnectionTunnel2LogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

&vpnconnection.VpnConnectionTunnel2LogOptions {
	CloudwatchLogOptions: github.com/cdktf/cdktf-provider-aws-go/aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | cloudwatch_log_options block. |

---

##### `CloudwatchLogOptions`<sup>Optional</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions.property.cloudwatchLogOptions"></a>

```go
CloudwatchLogOptions VpnConnectionTunnel2LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

cloudwatch_log_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#cloudwatch_log_options VpnConnection#cloudwatch_log_options}

---

### VpnConnectionTunnel2LogOptionsCloudwatchLogOptions <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

&vpnconnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions {
	LogEnabled: interface{},
	LogGroupArn: *string,
	LogOutputFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled">LogEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat">LogOutputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}. |

---

##### `LogEnabled`<sup>Optional</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logEnabled"></a>

```go
LogEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_enabled VpnConnection#log_enabled}.

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logGroupArn"></a>

```go
LogGroupArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_group_arn VpnConnection#log_group_arn}.

---

##### `LogOutputFormat`<sup>Optional</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions.property.logOutputFormat"></a>

```go
LogOutputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpn_connection#log_output_format VpnConnection#log_output_format}.

---

### VpnConnectionVgwTelemetry <a name="VpnConnectionVgwTelemetry" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

&vpnconnection.VpnConnectionVgwTelemetry {

}
```


## Classes <a name="Classes" id="Classes"></a>

### VpnConnectionRoutesList <a name="VpnConnectionRoutesList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionRoutesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnConnectionRoutesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get"></a>

```go
func Get(index *f64) VpnConnectionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VpnConnectionRoutesOutputReference <a name="VpnConnectionRoutesOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionRoutesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnConnectionRoutesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.destinationCidrBlock"></a>

```go
func DestinationCidrBlock() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionRoutesOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnConnectionRoutes
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionRoutes">VpnConnectionRoutes</a>

---


### VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogEnabled` <a name="ResetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```go
func ResetLogEnabled()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```go
func ResetLogGroupArn()
```

##### `ResetLogOutputFormat` <a name="ResetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```go
func ResetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">LogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">LogOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">LogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">LogOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogEnabledInput`<sup>Optional</sup> <a name="LogEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```go
func LogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogOutputFormatInput`<sup>Optional</sup> <a name="LogOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```go
func LogOutputFormatInput() *string
```

- *Type:* *string

---

##### `LogEnabled`<sup>Required</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```go
func LogEnabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `LogOutputFormat`<sup>Required</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```go
func LogOutputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnConnectionTunnel1LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel1LogOptionsOutputReference <a name="VpnConnectionTunnel1LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionTunnel1LogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnConnectionTunnel1LogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogOptions` <a name="PutCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```go
func PutCloudwatchLogOptions(value VpnConnectionTunnel1LogOptionsCloudwatchLogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `ResetCloudwatchLogOptions` <a name="ResetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```go
func ResetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput">CloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogOptions`<sup>Required</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```go
func CloudwatchLogOptions() VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel1LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `CloudwatchLogOptionsInput`<sup>Optional</sup> <a name="CloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```go
func CloudwatchLogOptionsInput() VpnConnectionTunnel1LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsCloudwatchLogOptions">VpnConnectionTunnel1LogOptionsCloudwatchLogOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnConnectionTunnel1LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel1LogOptions">VpnConnectionTunnel1LogOptions</a>

---


### VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogEnabled` <a name="ResetLogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogEnabled"></a>

```go
func ResetLogEnabled()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogGroupArn"></a>

```go
func ResetLogGroupArn()
```

##### `ResetLogOutputFormat` <a name="ResetLogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.resetLogOutputFormat"></a>

```go
func ResetLogOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput">LogEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput">LogOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled">LogEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat">LogOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogEnabledInput`<sup>Optional</sup> <a name="LogEnabledInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabledInput"></a>

```go
func LogEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArnInput"></a>

```go
func LogGroupArnInput() *string
```

- *Type:* *string

---

##### `LogOutputFormatInput`<sup>Optional</sup> <a name="LogOutputFormatInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormatInput"></a>

```go
func LogOutputFormatInput() *string
```

- *Type:* *string

---

##### `LogEnabled`<sup>Required</sup> <a name="LogEnabled" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logEnabled"></a>

```go
func LogEnabled() interface{}
```

- *Type:* interface{}

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logGroupArn"></a>

```go
func LogGroupArn() *string
```

- *Type:* *string

---

##### `LogOutputFormat`<sup>Required</sup> <a name="LogOutputFormat" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.logOutputFormat"></a>

```go
func LogOutputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnConnectionTunnel2LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---


### VpnConnectionTunnel2LogOptionsOutputReference <a name="VpnConnectionTunnel2LogOptionsOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionTunnel2LogOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VpnConnectionTunnel2LogOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogOptions` <a name="PutCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions"></a>

```go
func PutCloudwatchLogOptions(value VpnConnectionTunnel2LogOptionsCloudwatchLogOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.putCloudwatchLogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `ResetCloudwatchLogOptions` <a name="ResetCloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.resetCloudwatchLogOptions"></a>

```go
func ResetCloudwatchLogOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions">CloudwatchLogOptions</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput">CloudwatchLogOptionsInput</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogOptions`<sup>Required</sup> <a name="CloudwatchLogOptions" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptions"></a>

```go
func CloudwatchLogOptions() VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference">VpnConnectionTunnel2LogOptionsCloudwatchLogOptionsOutputReference</a>

---

##### `CloudwatchLogOptionsInput`<sup>Optional</sup> <a name="CloudwatchLogOptionsInput" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.cloudwatchLogOptionsInput"></a>

```go
func CloudwatchLogOptionsInput() VpnConnectionTunnel2LogOptionsCloudwatchLogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsCloudwatchLogOptions">VpnConnectionTunnel2LogOptionsCloudwatchLogOptions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnConnectionTunnel2LogOptions
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionTunnel2LogOptions">VpnConnectionTunnel2LogOptions</a>

---


### VpnConnectionVgwTelemetryList <a name="VpnConnectionVgwTelemetryList" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionVgwTelemetryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VpnConnectionVgwTelemetryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get"></a>

```go
func Get(index *f64) VpnConnectionVgwTelemetryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### VpnConnectionVgwTelemetryOutputReference <a name="VpnConnectionVgwTelemetryOutputReference" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/vpnconnection"

vpnconnection.NewVpnConnectionVgwTelemetryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VpnConnectionVgwTelemetryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount">AcceptedRouteCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange">LastStatusChange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress">OutsideIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptedRouteCount`<sup>Required</sup> <a name="AcceptedRouteCount" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.acceptedRouteCount"></a>

```go
func AcceptedRouteCount() *f64
```

- *Type:* *f64

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `LastStatusChange`<sup>Required</sup> <a name="LastStatusChange" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.lastStatusChange"></a>

```go
func LastStatusChange() *string
```

- *Type:* *string

---

##### `OutsideIpAddress`<sup>Required</sup> <a name="OutsideIpAddress" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.outsideIpAddress"></a>

```go
func OutsideIpAddress() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetryOutputReference.property.internalValue"></a>

```go
func InternalValue() VpnConnectionVgwTelemetry
```

- *Type:* <a href="#@cdktf/provider-aws.vpnConnection.VpnConnectionVgwTelemetry">VpnConnectionVgwTelemetry</a>

---



